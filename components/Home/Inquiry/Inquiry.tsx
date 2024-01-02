import Form from "./Form";

/* eslint-disable @next/next/no-img-element */
export default function Inquiry() {
  return (
    <>
      <section className="max-h-[420px] rounded-md relative">
        <img
          src="https://media.discordapp.net/attachments/1025486564165427353/1191702389032484894/image.png?ex=65a66656&is=6593f156&hm=486d7aa0b9814d7faf9ed4c2adb1951ce89d53ee780e091cfc8d82ff99e81695&=&format=webp&quality=lossless&width=1440&height=512"
          alt="inquiry banner"
          className="w-full max-h-[420px] h-min object-cover rounded-md"
        />
        <div className="full flex justify-between p-8 top-0 text-white items-start absolute">
          <div className="w-[400px]">
            <h3 className="text-3xl font-semibold mt-2">
              An easy way to send requests to all suppliers
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <Form />
        </div>
      </section>
    </>
  );
}
