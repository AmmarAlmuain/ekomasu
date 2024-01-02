export default function Form() {
  return (
    <>
      <form className="gap-y-4 flex flex-col justify-start items-start py-8 px-6 bg-white rounded-md shadow">
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
            className="min-w-52 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full outline-none bg-white px-2 border-2 border-color h-10 rounded-md placeholder:text-primary text-primary"
            placeholder="Quantity"
          />
          <div className="px-2 pl-2 rounded-md w-28 cursor-pointer text-primary border-2 border-color">
            <select className="outline-none full cursor-pointer full bg-white text-primary">
              <option selected>Pcs</option>
            </select>
          </div>
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