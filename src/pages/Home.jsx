import Button from '../components/Button';

export default function Home() {
  return (
    <div className="w-full">
      <section
        id="hero"
        className="mx-auto flex w-full max-w-screen-lg flex-col px-4 pb-4 sm:flex-row"
      >
        <div className="flex w-full flex-col gap-10 py-6 sm:w-1/2">
          <h1 className="text-5xl font-medium">
            Discover Your Next Favorite Product Today!
          </h1>
          <p>
            At ShopLyst, we bring you an extensive range of products tailored to
            your needs. Explore our latest promotions and find exactly what
            you're looking for with ease.
          </p>
          <div className="flex gap-4">
            <Button style="primary">Shop</Button>
            <Button>Learn More</Button>
          </div>
        </div>
        <div className="w-full sm:w-1/2"></div>
      </section>
      <section className="bg-navy h-6 text-white">Callout section</section>
    </div>
  );
}
