import Link from "next/link";

const NotFound = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-muted/20 px-4 text-center">
    <div className="rounded-2xl border border-border bg-card px-8 py-12 shadow-lg">
      <p className="text-sm font-semibold text-accent">404</p>
      <h1 className="mt-4 text-4xl font-bold text-primary">Page Not Found</h1>
      <p className="mt-4 text-muted-foreground">
        Sorry, we could not find the page you were looking for.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Back to Home
      </Link>
    </div>
  </div>
);

export default NotFound;
