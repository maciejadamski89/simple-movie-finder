import Image from "next/image";
import Link from "next/link";

export default function MovieDetails({title, releaseDate, posterPath, overview, genres}) {
	const imageUri = process.env.TMDB_IMAGES_URI;
	return (
		<div className="flex flex-col items-center justify-center max-w-2xl mx-auto space-y-4">
			<Link href="/popular-movies">
				<p className="hover:underline"> &larr; Popular Movies</p>
			</Link>
			<h1 className="text-2xl font-bold">{title}</h1>
			<p className="text-lg text-neutral-400">{overview}</p>
			<Image src={`${imageUri + posterPath}`} alt="" width={400} height={400} />
			<h2 className="text-md">Release date: {releaseDate}</h2>
			<p className="text-md text-neutral-400">Genres: {genres?.map((genre) => genre.name).join(", ")} </p>
		</div>
	);
}
