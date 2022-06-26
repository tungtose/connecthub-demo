require('dotenv').config();

const {
  HASURA_GRAPHQL_API_ENDPOINT: endpoint,
  HASURA_GRAPHQL_ADMIN_SECRET: secret,
} = process.env;


const COMMON_SCALAR_MAPPING = {
  uuid: 'string',
  date: 'string',
  jsonb: 'Record<string, any>',
  timestamptz: 'string',
  timestamp: 'string',
  citext: 'string',
  numeric: 'number',
};

const codeGenConfig = {
  generates: {
    'src/generated/graphqlSdk.ts': {
      documents: ['src/graphql'],
      schema: [
        {
          [endpoint]: {
            headers: {
              'x-hasura-admin-secret': secret,
            },
          },
        },
      ],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        gqlImport: 'graphql-request#gql',
        fetcher: {
          func: 'src/utils/graphqlClient#useFetchData',
          isReactHook: true,
        },
        avoidOptionals: {
          object: true,
          field: true,
          inputValue: false,
        },
        scalars: COMMON_SCALAR_MAPPING,
      },
    },
  },
};

module.exports = codeGenConfig;

