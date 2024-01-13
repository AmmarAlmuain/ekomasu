/* eslint-disable @next/next/no-img-element */
function Item() {
  return (
    <div className="flex flex-col w-44 gap-y-2 flex-auto">
      <div className="bg-[#eeeeee] -center rounded-dm">
        <img
          src="   
        https://cdn.discordapp.com/attachments/1191096855560454287/1193299610995793970/image.png?ex=65ac35dd&is=6599c0dd&hm=6e207ac5a4455f528869d8f532d56230e9494c344c469577d4b3221d471383fa&"
          alt="img"
          className="h-full max-h-[172px] max-w-[172px]"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <h2 className="text-primary">Xiaomi Redmi 8 Original</h2>
        <p className="text-secondary">$32.00-$40.00</p>
      </div>
    </div>
  );
}

export default Item;
