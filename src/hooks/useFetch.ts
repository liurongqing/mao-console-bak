import React from "react";

const { useState, useEffect } = React;

export const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {};
    fetchData();
  }, []);

  return { response, error };
};
