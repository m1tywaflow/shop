import Button from "./components/UI/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-bold text-9xl">404</h1>
        <p className="mt-6 text-4xl font-light pb-8">Page Not Found</p>
        <Button href="/">Go Home</Button>
      </div>
    </section>
  );
}
