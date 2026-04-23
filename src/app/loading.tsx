export default function Loading() {
  return (
    <main className="section">
      <div className="container">
        <div className="skeleton skeleton-title" />
        <div className="skeleton-grid">
          <div className="skeleton skeleton-card" />
          <div className="skeleton skeleton-card" />
          <div className="skeleton skeleton-card" />
        </div>
      </div>
    </main>
  );
}
