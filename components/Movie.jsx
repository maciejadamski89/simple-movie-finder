import Link from "next/link";
import Image from "next/image";

export default function Movie({id, title, releaseDate, posterPath}) {
	const imageUri = process.env.TMDB_IMAGES_URI;
	return (
		<div>
			<h1>{title}</h1>
			<h2>Release date: {releaseDate}</h2>
			<Link href={`/movie/${id}`}>
				<Image src={`${imageUri + posterPath}`} alt="" width={200} height={200} />
			</Link>
		</div>
	);
}
