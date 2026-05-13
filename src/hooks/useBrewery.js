import { useEffect, useState, useCallback } from "react";
import { getBreweryById } from "../api/breweries";

export function useBrewery(id) {
  const [brewery, setBrewery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBrewery = useCallback(
    async (signal) => {
      setLoading(true);
      setError("");

      try {
        const data = await getBreweryById(id, signal);
        setBrewery(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Error fetching brewery");
        }
      } finally {
        setLoading(false);
      }
    },
    [id],
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchBrewery(controller.signal);
    return () => controller.abort();
  }, [fetchBrewery]);

  return { brewery, loading, error };
}
