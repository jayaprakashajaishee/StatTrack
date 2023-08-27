import React, { useState } from "react";
import axios from "axios";

function useAxios() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  const apiCall = (config) => {
    setLoading(true);
    axios(config)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return [loading, data, error, apiCall];
}

export default useAxios;
