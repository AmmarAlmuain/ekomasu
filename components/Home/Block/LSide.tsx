/* eslint-disable @next/next/no-img-element */
export default function LSide({ src, text }: { src: string; text: string }) {
  return (
    <>
      <section>
        <div className="full relative flex">
          <img
            src={src}
            alt="consumer electronics image"
            className="h-[265px] min-w-[293px] w-full"
          />
          <div className="flex absolute flex-col w-full gap-y-4 p-6 text-start justify-center items-start">
            <div>
              <h3 className="text-xl text-primary font-semibold w-32">
                {text}
              </h3>
            </div>
            <button
              type="button"
              className="py-2 px-4 rounded-md text-primary bg-white"
            >
              Explore More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
