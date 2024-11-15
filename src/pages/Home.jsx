import Button from '../components/Button';
import Callout from '../components/Callout';

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

      <Callout>
        <div className="flex flex-col text-center">
          <p className="text-cat font-bold">
            "Shoplyst has transformed my shopping experience completely!"
          </p>
          <img
            src="https://www.fakepersongenerator.com/Face/female/female201410239383418.jpg"
            alt="Jane Doe"
            className="mx-auto my-6 h-14 w-14 rounded-full"
          />
          <p className="-mb-1 font-medium">Jane Doe</p>
          <p>Happy Customer</p>
        </div>
      </Callout>
    </div>
  );
}
