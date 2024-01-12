import Actions from "./Actions";

function DBlock() {
  return (
    <div className="border-color w-full flex flex-col rounded-md border-2">
      <Actions />
      <div className="w-full flex flex-col py-6 px-4 gap-y-4">
        <p className="text-primary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, Quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className="overflow-x-auto w-[550px] text-primary">
          <table className="table">
            <tbody>
              <tr>
                <td className="bg-gray-200">Model</td>
                <td>#8786867</td>
              </tr>
              <tr>
                <td className="bg-gray-200">Style</td>
                <td>Classic style</td>
              </tr>
              <tr>
                <td className="bg-gray-200">Certificate</td>
                <td>ISO-898921212</td>
              </tr>
              <tr>
                <td className="bg-gray-200">Size</td>
                <td>34mm x 450mm x 19mm</td>
              </tr>
              <tr>
                <td className="bg-gray-200">Memory</td>
                <td>36GB RAM</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <div className="flex gap-x-2 items-center">
            <Check />
            <p className="flex py-2 text-primary">
              Some great feature name here
            </p>
          </div>
          <div className="flex gap-x-2 items-center">
            <Check />
            <p className="flex py-2 text-primary">
              Some great feature name here
            </p>
          </div>
          <div className="flex gap-x-2 items-center">
            <Check />
            <p className="flex py-2 text-primary">
              Some great feature name here
            </p>
          </div>
          <div className="flex gap-x-2 items-center">
            <Check />
            <p className="flex py-2 text-primary">
              Some great feature name here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DBlock;

function Check() {
  return (
    <>
      <svg
        width="16"
        height="12"
        viewBox="0 0 16 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.32923 9.22914L1.85423 5.75414L0.670898 6.92914L5.32923 11.5875L15.3292 1.58748L14.1542 0.412476L5.32923 9.22914Z"
          fill="#8B96A5"
        />
      </svg>
    </>
  );
}
