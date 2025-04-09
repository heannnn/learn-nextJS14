export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  //백엔드에서 fetch가 이뤄지므로 그때 사용자를 위한 UI가 없다. => loading.tsx이 나타남.
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
