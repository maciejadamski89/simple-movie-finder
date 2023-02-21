import MovieDetails from "@/components/MovieDetails";

async function fetchMovieDetails(id: string) {
	const baseTmdbUri = process.env.TMDB_BASE_URI;
	const movieDetailsUri = `movie/${id}`;
	const url = `${baseTmdbUri}/${movieDetailsUri}?api_key=${process.env.TMDB_API_KEY}`;
	const response = await fetch(url, {cache: "no-store"});

	return await response.json();
}
export default async function Page({params}: {params: {id: string}}) {
	const movieDetails = await fetchMovieDetails(params.id);
	return (
		<>
			<MovieDetails
				title={movieDetails.title}
				posterPath={movieDetails.poster_path}
				releaseDate={movieDetails.release_date}
				overview={movieDetails.overview}
				genres={movieDetails.genres}
			/>
		</>
	);
}
