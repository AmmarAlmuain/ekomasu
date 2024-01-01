/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Banner() {
  return (
    <>
      <section className="h-full w-full flex justify-center items-center">
        <div className="relative max-h-[360px] w-full rounded-xl overflow-hidden">
          <img
            src="https://i.ibb.co/LhgvpfX/image.png"
            alt="home banner"
            className="object cover"
          />
          <div className="flex flex-col gap-y-4 p-12 text-start justify-center items-start absolute top-0">
            <div>
              <h3 className="text-2xl text-primary">Latest trending</h3>
              <h2 className="text-3xl text-primary font-bold">
                Electronic items
              </h2>
            </div>
            <button
              type="button"
              className="py-2 px-4 rounded-md bg-white text-primary"
            >
              Learn more
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
