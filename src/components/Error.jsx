export default function Error({ errorMsg }) {
  return (
    <div className="my-12 flex w-full items-center justify-center rounded-sm border-[1px] border-error bg-error-light p-8">
      <div className="text-center">
        <h1 className="text-4xl font-medium text-error">
          Oops! Something went wrong.
        </h1>
        <p className="mt-4 text-lg">{errorMsg}</p>
      </div>
    </div>
  );
}
