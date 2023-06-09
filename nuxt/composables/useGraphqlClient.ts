import { createClient } from "../services/graphql";

export const useGraphqlClient = () => {
  const runtimeConfig = useRuntimeConfig();

  const graphQLClient = createClient(
    runtimeConfig.public.contentfulSpaceId,
    runtimeConfig.public.contentfulAccessToken
  );

  return graphQLClient;
};
