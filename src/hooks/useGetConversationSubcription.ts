import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { GetConversationSubcriptionDocument } from 'src/generated/graphqlSdk';

const url = "ws://localhost:8080/v1/graphql";

export const useGetConversationSubcription = (id: string) => {
  const queryClient = useQueryClient();
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribingSuccess, setIsSubscribingSuccess] = useState(false);

  useEffect(() => {
    const ws = new WebSocket(url, "graphql-ws");
    setIsSubscribing(true);

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "connection_init",
        payload: {
          // TODO: fix me!!!
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtdXNlci1pZCI6ImU5OWYwOWE3LWRkODgtNDlkNS1iMWM4LTFkYWY4MGMyZDdiMTgifSwiaWF0IjoxNjU1OTY3MzkwfQ.uD-_ZrU8BOToEIXF0bkncBdIr0aNp6hfTy9iTyLnuJA"
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
  }, [queryClient]);
  return { isSubscribing, isSubscribingSuccess };
};
