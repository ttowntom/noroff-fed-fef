export default function Callout({ children }) {
  return (
    <section className="bg-navy h-6 min-h-fit py-16 text-white">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col justify-center px-4 pb-4 sm:flex-row">
        {children}
      </div>
    </section>
  );
}
