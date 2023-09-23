"use client";

import { useState, useTransition } from "react";
import { exampleServerAction } from "../app/serverActions";

export const FetchButton = () => {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<string>(null);

  const styles = `w-4 h-1 bg-black ${
    isPending ? "motion-safe:animate-spin" : ""
  }`;

  const executeOnClick = async () => {
    const x = await exampleServerAction();
    setData(JSON.stringify(x));
  };

  return (
    <>
      <button
        onClick={() => {
          startTransition(async () => await executeOnClick());
        }}
        aria-disabled={isPending}
        className="bg-blue flex flex-row items-center"
      >
        <span>{isPending ? "fetching" : "fetch"}</span>
        <div aria-hidden className={styles} />
      </button>
      {data && <p>{data}</p>}
    </>
  );
};
