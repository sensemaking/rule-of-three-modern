export default async function HomePage() {
  return <main>
    <h1>Rule of Three</h1>
  </main>
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
