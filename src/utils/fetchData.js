export async function getData() {
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  const fetchData = await fetch("data.json", headers);

  const allData = await fetchData.json();

  return allData;
}
