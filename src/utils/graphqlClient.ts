import { GraphQLClient, gql } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT || 'http://localhost:8080/v1/graphql';


const headers = {};

const getDefaultHeaders = () => {
  const accessToken =
    typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

  if (accessToken) {
    return {
      authorization: `Bearer ${accessToken}`,
    }
  }
  return undefined;
}

export const graphQLClient = new GraphQLClient(endpoint);

export const useFetchData = <TData, TVariables>(
  query: string,
  options?: RequestInit['headers']
): ((variables?: TVariables) => Promise<TData>) => {
  // const { url, headers } = React.useContext(FetchParamsContext)
  const headers = getDefaultHeaders();

  return async (variables?: TVariables) => {
    try {
      return await graphQLClient.request(query, variables, headers);
    } catch (error) {
      console.error(error);
      const errorMessage = error.message[0] || "Error...";
      throw new Error(errorMessage);
    }
  }
}
