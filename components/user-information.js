export default function Page({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
