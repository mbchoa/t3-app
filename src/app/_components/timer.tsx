"use client";

import { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  // create a timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="p-4">
      <div className="flex items-center justify-center">
        <div className="text-4xl font-bold">{count}</div>
      </div>
    </div>
  );
}
