/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Banner() {
  return (
    <>
      <section className="h-full w-full flex justify-center items-center">
        <div className="relative max-h-[360px] max-md:rounded-none w-full rounded-xl overflow-hidden">
          <img
            src="https://media.discordapp.net/attachments/1025486564165427353/1191062951474499776/image.png?ex=65a412d0&is=65919dd0&hm=bd57515cb8ab42ffefe7a08706a0449e6db419fdb24a3da58c943dafc8a7198c&=&format=webp&quality=lossless&width=1222&height=661"
            alt="home banner"
            className="object-cover min-h-[360px] scale-105 max-md:rounded-none rounded-md"
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
