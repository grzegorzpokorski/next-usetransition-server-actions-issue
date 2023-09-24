"use client";

import { useState, useTransition } from "react";
import { exampleServerAction } from "../app/serverActions";

export const FetchButton = () => {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<string>(null);

  const executeOnClick = async () => {
    const x = await exampleServerAction();
    setData(JSON.stringify(x));
  };

  return (
    <div>
      <button
        onClick={() => {
          startTransition(async () => await executeOnClick());
        }}
        aria-disabled={isPending}
        className="bg-blue flex flex-row items-center bg-black text-white px-2 rounded"
      >
        <span>{isPending ? "fetching" : "fetch data"}</span>
      </button>
      {data && <p>{data}</p>}
    </div>
  );
};
