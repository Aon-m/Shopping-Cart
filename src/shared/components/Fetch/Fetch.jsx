/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";

export default function Fetch() {
  // Choice 1 (Axios)
  //   const [data, setData] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   Choice 2 (Posts)
  const {
    data,
    error,
    isPending: loading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetcherWithAxios("https://jsonplaceholder.typicode.com/posts?_limit=8"),
    staleTime: 1000 * 60 * 10, // cache for 10 minutes
  });
}

async function fetcherWithAxios(url) {
  const response = await axios.get("url");
  return response.data;
}
