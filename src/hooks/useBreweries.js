import { useEffect, useState, useCallback } from "react";
import { getAllBreweries } from "../api/breweries";

export function useBreweries() {
  const [breweries, setBreweries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBreweries = useCallback(async (signal) => {
    setLoading(true);
    setError("");

    try {
      const data = await getAllBreweries(signal);
      setBreweries(data);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBreweries();
  }, [fetchBreweries]);

  return { breweries, loading, error };
}
