export default function Form() {
  return (
    <>
      <form className="flex max-lg:hidden flex-col justify-between items-start p-6 h-full bg-white rounded-md shadow">
        <legend>
          <span className="text-xl text-primary font-semibold">
            Send quote to suppliers
          </span>
        </legend>
        <input
          type="text"
          className="min-w-[440px] w-full outline-none bg-white px-2 border-2 border-color h-10 rounded-md placeholder:text-primary text-primary"
          placeholder="What item you need?"
        />
        <textarea
          rows={3}
          className="min-w-[440px] resize-none w-full outline-none bg-white p-2 border-2 border-color h-20 rounded-md placeholder:text-secondary text-primary"
          placeholder="Type more details"
        />
        <div className="flex gap-x-2">
          <input
            type="number"
            className="max-w-52 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full outline-none bg-white px-2 border-2 border-color h-10 rounded-md placeholder:text-primary text-primary"
            placeholder="Quantity"
          />
        </div>
        <button
          type="submit"
          className="w-32 h-10 rounded-md text-white third-gradient"
        >
          <span>Send inquiry</span>
        </button>
      </form>
    </>
  );
}
