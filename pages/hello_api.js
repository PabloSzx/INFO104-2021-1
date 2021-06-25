import { useState, useEffect } from "react";

async function fetcher(setData) {
  try {
    const response = await fetch("/api/hello", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ hello: "world" }),
    });

    const value = await response.json();

    setData(value);
  } catch (err) {
    setData(err.message);
  }
}

export default function HelloApi() {
  const [data, setData] = useState();

  // Executa esta función cuando el componente se monte
  useEffect(() => {
    fetcher(setData);
  }, []);

  if (data === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <p style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(data, null, 2)}</p>
  );
}
