import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function bookDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const volume = volumes.find(v => v.slug === slug);
  if (!volume) {
    return (
      <>
        <p>{`"${slug}" not found!`}</p>
        <Link href="/volumes">Back to all Volumes</Link>
      </>
    );
  }
  return (
    <>
      <Link href="/volumes">All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book, slug) => (
          <li key={slug}>{book.ordinal}: {book.title}</li>
        ))}
      </ul>
      <Image
        src={volume.cover}
        height={230}
        width={140}
        alt={`Book cover: ${volume.title}`}
      />
    </>
  );
}
