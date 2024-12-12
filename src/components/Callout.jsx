export default function Callout({ children }) {
  return (
    <section className="min-h-fit bg-navy py-16 text-white">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col justify-center px-4 pb-4 text-blue-zodiac-50">
        {children}
      </div>
    </section>
  );
}
