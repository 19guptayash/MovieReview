import { useDispatch } from "react-redux";
import { apiConnector } from "../services/apiconnector";
import { useEffect } from "react";

function useFetch(method, url, action) {
  const dispatch = useDispatch();

  useEffect(() => {
    apiConnector(method, url, null, {
      Authorization: import.meta.env.VITE_BEARER_TOKEN,
    }).then((response) => {
      console.log("RESPONSE.....", response);

      dispatch(action(response.data.results));
    });
  }, []);
}

export default useFetch;
