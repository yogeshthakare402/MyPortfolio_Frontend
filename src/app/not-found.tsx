import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section">
      <div className="container">
        <h1>Page not found</h1>
        <p>The page you requested does not exist.</p>
        <Link href="/" className="btn btn-primary">
          Go home
        </Link>
      </div>
    </main>
  );
}
