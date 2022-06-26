import { createContext, ReactNode, useEffect, useReducer } from 'react';
// utils
import axios from '../utils/axios';
import { getUserId, isValidToken, setSession } from '../utils/jwt';
// @types
import { ActionMap, AuthState, AuthUser, JWTContextType } from '../@types/auth';
import { useGetMeQuery, useLoginMutation } from 'src/generated/graphqlSdk';
// ----------------------------------------------------------------------

enum Types {
  Initial = 'INITIALIZE',
  Login = 'LOGIN',
  Logout = 'LOGOUT',
  Register = 'REGISTER',
}

type JWTAuthPayload = {
  [Types.Initial]: {
    isAuthenticated: boolean;
    user: AuthUser;
  };
  [Types.Login]: {
    user: AuthUser;
  };
  [Types.Logout]: undefined;
  [Types.Register]: {
    user: AuthUser;
  };
};

export type JWTActions = ActionMap<JWTAuthPayload>[keyof ActionMap<JWTAuthPayload>];

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const JWTReducer = (state: AuthState, action: JWTActions) => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case 'REGISTER':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

const AuthContext = createContext<JWTContextType | null>(null);

// ----------------------------------------------------------------------

type AuthProviderProps = {
  children: ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  const userId = getUserId()
  const [state, dispatch] = useReducer(JWTReducer, initialState);

  const loginMutation = useLoginMutation();

  const {
    data: userData,
    isLoading,
    isError,
    error
  } = useGetMeQuery({ id: userId }, { enabled: !!userId });

  useEffect(() => {
    if (isLoading) return;

    const initialize = async () => {
      if (error) {
        dispatch({
          type: Types.Initial,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
        return;
      }

      if (userData) {
        dispatch({
          type: Types.Initial,
          payload: {
            isAuthenticated: true,
            user: userData,
          },
        })
      } else {
        dispatch({
          type: Types.Initial,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    }
    initialize();
  }, [isLoading]);

  const login = async (email: string, password: string) => {
    const variables = { params: { email, password } };

    loginMutation.mutate(variables, {
      onSuccess: ({ login }) => {
        if (!login) return;

        const { userId, token } = login;
        setSession(token);

        dispatch({
          type: Types.Login,
          payload: {
            user: {
              id: userId
            },
          },
        });
      }
    })
  };

  const register = async (email: string, password: string, firstName: string, lastName: string) => {
    const response = await axios.post('/api/account/register', {
      email,
      password,
      firstName,
      lastName,
    });
    const { accessToken, user } = response.data;

    localStorage.setItem('accessToken', accessToken);

    dispatch({
      type: Types.Register,
      payload: {
        user,
      },
    });
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: Types.Logout });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
