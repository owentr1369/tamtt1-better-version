import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>This is home page</h2>
      <div>
        <Link href="/performance">Performance</Link>
        <Link href="/reliability">Reliability</Link>
        <Link href="/scale">Scale</Link>
      </div>
    </div>
  );
}
