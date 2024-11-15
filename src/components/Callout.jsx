export default function Callout({ children }) {
  return (
    <section className="bg-navy h-6 min-h-fit py-16 text-white">
      <div className="text-blue-zodiac-50 mx-auto flex w-full max-w-screen-lg flex-col justify-center px-4 pb-4">
        {children}
      </div>
    </section>
  );
}
