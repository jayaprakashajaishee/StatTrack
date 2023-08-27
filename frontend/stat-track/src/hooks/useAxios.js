import React, { useState } from "react";
import axios from "axios";

function useAxios() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState({ message: "", error: false });

  const apiCall = (config) => {
    setLoading(true);
    axios(config)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((e) => {
        setError({ message: e.message, error: true });
        setLoading(false);
      });
  };

  return [loading, data, error, apiCall];
}

export default useAxios;
