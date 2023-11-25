import useSWR from "swr";

export function useGetDataSpotify() {
  const fetcher = (url) =>
    fetch(url).then(async (res) => {
      if (res.ok) return res.json();
      else return Promise.reject(await res.json());
    });

  const { data, error, isLoading } = useSWR("/api/spotify", fetcher);

  return {
    data,
    isLoading,
    error,
  };
}
