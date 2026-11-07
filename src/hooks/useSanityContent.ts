import { useEffect, useState } from "react";
import { sanityClient } from "../lib/sanity";

export function useSanityContent<T>(query: string, fallback: T) {
  const [content, setContent] = useState(fallback);

  useEffect(() => {
    let active = true;
    setContent(fallback);

    if (!sanityClient) return;

    sanityClient
      .fetch<T | null>(query)
      .then((result) => {
        if (active && result) setContent(result);
      })
      .catch((error: unknown) => {
        console.error("Sanity content could not be loaded; showing source copy.", error);
      });

    return () => {
      active = false;
    };
  }, [fallback, query]);

  return content;
}
