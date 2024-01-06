import Email from "./Icons/Email";

export default function LNews() {
  return (
    <>
      <section className="w-full h-48 mt-8">
        <div className="full -center-col gap-y-6 bg-faded-white">
          <div className="-center-col">
            <h2 className="font-semibold text-xl text-primary">
              Subscribe on our newsletter
            </h2>
            <span className="text-secondary max-xl:text-sm text-center max-w-72">
              Get daily news on upcoming offers from many suppliers all over the
              world
            </span>
          </div>
          <form className="-center max-xl:px-4 w-full gap-x-2">
            <div className="max-w-72 w-full relative -center">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white max-w-72 pl-8 pr-2 h-10 rounded-md outline-none border-2 border-color"
              />
              <div className="absolute left-2">
                <Email />
              </div>
            </div>
            <button
              type="submit"
              className="rounded-md max-xl:text-sm text-white third-gradient px-4 max-xl:px-2 h-10"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
