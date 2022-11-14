export default function Page({ data }) {
  console.log("Hello from user-information.js");
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
