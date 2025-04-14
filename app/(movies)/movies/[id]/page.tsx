import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  // API를 또 한번 호출한다고 비효율적이라고 생각할 수 있지만
  // 최신 NextJS 버전에서는 fetch한 데이터를 caching한다.
  // generateMetadata 할 때 getMovie API호출 후 MovieInfo 컴포넌트에서 getMovie시에는 캐싱해논 데이터를 사용.
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <div>
      {/* Suspense는 await와 분리되어있음 */}
      {/* 페이지 전체가 로딩상태였지만 이제는 fetch해야하는 component만 로딩상태로 만들어줌. */}
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
