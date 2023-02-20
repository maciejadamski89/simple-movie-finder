import Movie from "@/components/Movie";

async function fetchPopularMovies() {
	const baseTmdbUri = process.env.TMDB_BASE_URI;
	const popularMoviesUri = "movie/popular";
	const url = `${baseTmdbUri}/${popularMoviesUri}?api_key=${process.env.TMDB_API_KEY}`;
	const response = await fetch(url);
	return await response.json();
}

export default async function Home() {
	const popularMovies = await fetchPopularMovies();
	return (
		<div className="">
			<div className="grid gap-16 grid-cols-fluid">
				{popularMovies.results.map((movie: Movie) => {
					return (
						<Movie
							key={movie.id}
							id={movie.id}
							title={movie.title}
							posterPath={movie.poster_path}
							releaseDate={movie.release_date}
						/>
					);
				})}
			</div>
		</div>
	);
}
