import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <Link href="/volumes">⇨ to the Overview Page</Link>
    </div>
  );
}
