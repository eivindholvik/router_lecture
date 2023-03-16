import { useEffect, useState } from "react";

function useFetch(url, options) {
  const isDev = true;
  let simulatedLoading = isDev ? 2000 : 0;

  const [apiHandler, setApiHandler] = useState({
    payload: [],
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    let tempPayload = [];
    let tempLoading;
    let tempError;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("The data you are looking for does not exist");
          }
          throw new Error("The response message was not OK!");
        }
        const json = await response.json();
        tempPayload = json;
        tempError = false;
      } catch (e) {
        tempError = true;
        console.log("i am in the error", e);
      } finally {
        tempLoading = false;
        setApiHandler({
          payload: tempPayload,
          isError: tempError,
          isLoading: tempLoading,
        });
      }
    };

    setTimeout(fetchData, simulatedLoading);

    return () => {
      console.log("Walla yooyo");
    };
  }, [url]);

  return apiHandler;
}

export default useFetch;