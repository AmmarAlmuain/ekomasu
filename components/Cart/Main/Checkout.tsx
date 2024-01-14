/* eslint-disable @next/next/no-img-element */
import { Visa, Mastercard, Paypal, Amazon, Maestro } from "react-pay-icons";

export default function Checkout() {
  return (
    <div className="flex flex-col bg-white border-2 gap-y-2 border-color rounded-md max-sm:rounded-none px-4 py-6">
      <div className="flex justify-between">
        <span className="text-gray-600">Subtotal:</span>
        <span className="text-gray-600"> $1403.97</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Discount:</span>
        <span className="text-red-600">- $60.0</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Tax:</span>
        <span className="text-green-600"> + $14.00</span>
      </div>
      <div className="divider my-0"></div>
      <div className="flex justify-between text-black">
        <span className="font-semibold">Total:</span>
        <span className="text-primary font-bold text-xl">+ $1443.00</span>
      </div>
      <button className="text-white mt-2 bg-[#00B517] w-full h-12 text-center rounded-md">
        Check Out
      </button>
      <div className="flex justify-center mt-2 gap-x-2">
        <Visa style={{ width: 34 }} />
        <Paypal style={{ width: 34 }} />
        <Mastercard style={{ width: 34 }} />
        <Amazon style={{ width: 34 }} />
        <Maestro style={{ width: 34 }} />
      </div>
    </div>
  );
}
