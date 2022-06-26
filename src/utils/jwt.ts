import jwtDecode from 'jwt-decode';
// routes
import { PATH_AUTH } from '../routes/paths';
//
import axios from './axios';

// ----------------------------------------------------------------------
export type HasuraJwtClaims<
  CustomClaims extends Record<string, string | string[]> = {},
  > = {
    'https://hasura.io/jwt/claims': {
      'x-hasura-default-role': string;
      'x-hasura-allowed-roles': string[];
      'x-hasura-user-id': string;
    } & CustomClaims;
  };

export function getToken(): string {
  if (typeof window === 'undefined') return '';

  const token = localStorage?.getItem('accessToken');

  if (!token) return '';

  return token;
}

export function getUserId(): string {
  const token = getToken();
  if (token.length === 0) return '';

  const jwtDecoded = decodeHasuraToken(token);
  return jwtDecoded['https://hasura.io/jwt/claims']["x-hasura-user-id"] || '';
}

function decodeHasuraToken(token: string) {
  return jwtDecode<HasuraJwtClaims>(token);
}

const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }

  const decoded = jwtDecode<{ exp: number }>(accessToken);

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const handleTokenExpired = (exp: number) => {
  // eslint-disable-next-line prefer-const
  let expiredTimer;

  const currentTime = Date.now();

  // Test token expires after 10s
  // const timeLeft = currentTime + 10000 - currentTime; // ~10s
  const timeLeft = exp * 1000 - currentTime;

  clearTimeout(expiredTimer);

  expiredTimer = setTimeout(() => {
    alert('Token expired');

    localStorage.removeItem('accessToken');

    window.location.href = PATH_AUTH.login;
  }, timeLeft);
};

const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);

    // This function below will handle when token is expired
    // const { exp } = jwtDecode<{ exp: number }>(accessToken); // ~5 days by minimals server
    // handleTokenExpired(exp);
  } else {
    localStorage.removeItem('accessToken');
  }
};

export { isValidToken, setSession };
