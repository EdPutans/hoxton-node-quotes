import React from "react";

const endpoint = ""; // add your endpoint URL here

type Reference = {
  quote: string;
  person: {
    first_name: string;
    last_name: string;
    age: number;
    image_url: string;
  };
};

interface UseFetchQuoteReturn {
  reference: Reference | null;
  getNewReference: () => void;
  isLoading: boolean;
}

const useFetchQuote = (): UseFetchQuoteReturn => {
  const [reference, setReference] = React.useState<Reference | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const getNewReference = React.useCallback(() => {
    setIsLoading(true);
    fetch(endpoint)
      .then((r) => r.json())
      .then((resp: Reference) => {
        setReference(resp);
        setIsLoading(false);
      })
      .catch((err) => {
        setReference(null);
        setIsLoading(false);
      });
    return;
  }, []);

  React.useEffect(() => {
    getNewReference();
  }, [getNewReference]);

  return { reference, getNewReference, isLoading };
};

export default useFetchQuote;
