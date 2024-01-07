import Button from './Button';

function AsideSummary() {
  return (
    <div className="flex flex-col bg-white p-6 border border-gray-300 rounded ">
      <div className="flex flex-row justify-between my-2.5">
        <p>Subtotal:</p>
        <span> $1403.97</span>
      </div>
      <div className="flex flex-row justify-between my-2.5">
        <p>Discount:</p>
        <span className="text-red-600">- $60.0</span>
      </div>
      <div className="flex flex-row justify-between my-2.5">
        <p>Tax:</p>
        <span className="text-green-600"> + $14.00</span>
      </div>
      <div className="flex flex-row justify-between text-black my-2.5">
        <p className="font-bold ">Total:</p>
        <span> + $1443.00</span>
      </div>
      <button className="text-white bg-green-500 w-[159px] h-[50px] px-[10px]   mt-6 align-center self-center  rounded ">
        Check Out
      </button>
      <div className="flex justify-center mt-6">
        <img
          src="https://cdn.discordapp.com/attachments/1191096855560454287/1193269117642342490/image.png?ex=65ac1977&is=6599a477&hm=dc0881e86c70c22f847d336721cb3ce70aaad822882857097d18d9c983d058a1&"
          alt="visa"
          className="w-[32px] h-[22px] mr-2"
        />
        <img
          src="https://cdn.discordapp.com/attachments/1191096855560454287/1193269121052315699/image.png?ex=65ac1978&is=6599a478&hm=5f804ee224a998150cddfea0d08baba19843f67a3a0be97179c8cdff9b0d7e5f&"
          alt="paypal"
          className="w-[32px] h-[22px]"
        />
        <img
          src="https://cdn.discordapp.com/attachments/1191096855560454287/1193269123556315298/image.png?ex=65ac1978&is=6599a478&hm=c0daed8ccda2a9ba4f1a9edefca0130ecd455bddeea2a47e66351e272ef78fc9&"
          alt="mastercard"
          className="w-[32px] h-[22px] ml-2"
        />
        <img
          src="https://cdn.discordapp.com/attachments/1191096855560454287/1193269129482875021/image.png?ex=65ac197a&is=6599a47a&hm=d9de15244d8da1ded95e269e0b683390d2bf6cffd9e3f69a48cae0c21688bffd&"
          alt="AE"
          className="w-[32px] h-[22px] ml-2"
        />
        <img
          src="https://cdn.discordapp.com/attachments/1191096855560454287/1193269126739808456/image.png?ex=65ac1979&is=6599a479&hm=069659156f16372dd3af8abdc35d172814d65408664cfb232dbb32294f1d691b&"
          alt="ApplePay" className="w-[32px] h-[22px] ml-2"
        />
      </div>
    </div>
  );
}

export default AsideSummary;
