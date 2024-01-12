import Item from "./Item";

export default function Recommended() {
  return (
    <>
      <section>
        <div className="px-4 py-6 bg-white w-full border-2 border-color rounded-md flex flex-col gap-y-4">
          <h2 className="font-bold text-primary text-xl">Saved for later</h2>
          <div className=" flex gap-6 flex-wrap">
            <Item
              src="https://cdn.discordapp.com/attachments/1191096855560454287/1192543718855692338/image.png?ex=65a975e2&is=659700e2&hm=44fde9584c2ed54cbe5f63eead67e40d1c1b70fad5ca118556ecb5bfff1f6645&"
              price={92.8}
              description="GoPro HERO6 4K Action Camera - Black"
            />
            <Item
              src="https://cdn.discordapp.com/attachments/1191096855560454287/1193266092060184596/image.png?ex=65ac16a6&is=6599a1a6&hm=3b4dd731faed20c77b3b31316da627cafb4bb579812523ceceb547f6bf03e755&"
              price={92.8}
              description="GoPro HERO6 4K Action Camera - Black"
            />
            <Item
              src="https://cdn.discordapp.com/attachments/1191096855560454287/1193277077856714853/image.png?ex=65ac20e1&is=6599abe1&hm=4792aac005100edfb64a6bc38af86068b8d3b505fa1ddc2649a6e36478ee2b1c&"
              price={92.8}
              description="GoPro HERO6 4K Action Camera - Black"
            />
            <Item
              src="https://cdn.discordapp.com/attachments/1191096855560454287/1193266111119110185/image.png?ex=65ac16aa&is=6599a1aa&hm=0e9a342c76cb33f1da511f14f09c1c07fabe98c51bcf9dffafb5f8cfa2e2b2c2&"
              price={92.8}
              description="GoPro HERO6 4K Action Camera - Black"
            />
          </div>
        </div>
      </section>
    </>
  );
}
