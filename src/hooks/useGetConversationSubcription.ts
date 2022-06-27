import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { GetConversationSubcriptionDocument } from 'src/generated/graphqlSdk';
import { getToken } from "src/utils/jwt";

const url = process.env.NEXT_PUBLIC_GRAPHQL_WS_ENDPOINT || "ws://localhost:8080/v1/graphql";

export const useGetConversationSubcription = (id: string) => {
  const queryClient = useQueryClient();
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribingSuccess, setIsSubscribingSuccess] = useState(false);
  const token = getToken();

  useEffect(() => {
    if (!token) return;

    const ws = new WebSocket(url, "graphql-ws");
    setIsSubscribing(true);

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "connection_init",
        payload: {
          // TODO: fix me!!!
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      }));
      ws.send(
        JSON.stringify({
          id: "1",
          type: "start",
          payload: {
            variables: {
              id
            },
            extensions: {},
            query: GetConversationSubcriptionDocument
          },
        })
      );
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);

      if (msg.type === "data") {
        setIsSubscribingSuccess(true);
        setIsSubscribing(false);
        const data = msg.payload.data;

        queryClient.setQueriesData("getConversationById", data);
      }
    };

    return () => {
      ws.send(JSON.stringify({ id: "1", type: "stop" }));
      ws.close();
    };
  }, [queryClient, token]);
  return { isSubscribing, isSubscribingSuccess };
};
