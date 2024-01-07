import Button from './Button';

function SellerInfo() {
  return (
    <div className=" w-full max-w-[280px] flex flex-col">
      <div className="border p-4 rounded  shadow-lg drop-shadow-sm border-gray-300 pb-4 ">
        <div className="flex  border-b-2  pb-4">
          <img
            src="https://cdn.discordapp.com/attachments/1191096855560454287/1192092440857936014/image.png?ex=65a7d199&is=65955c99&hm=9114def92bfcaaedd37f21d98353015ee88dcc5d258c5dab5562c99fb5d53eec&"
            alt="name"
            className="h-12 self-center mr-4"
          />

          <p className="flex flex-col text-sm">
            Supplier <span className="nowrap ">Guanjoi Trading LLC</span>
          </p>
        </div>
        <div className="flex my-4">
          <img
            src="https://cdn.discordapp.com/attachments/1191096855560454287/1192093240711716976/image.png?ex=65a7d258&is=65955d58&hm=6cbc40ba3b2ed8c011a68ed73999fb59424cb59c56ae11d1e4cdb9cc68bcb04c&"
            alt="Germany"
            className="h-4 mr-2"
          />{' '}
          <span>Germany Berlin</span>
        </div>
        <div className="flex my-4">
          <img
            src="https://cdn.discordapp.com/attachments/1191096855560454287/1192093618702397501/image.png?ex=65a7d2b2&is=65955db2&hm=9bd7f6871c2f20ccb8557893258c9132895cda34451189b698b196c29fedccd0&"
            alt="verified"
            className="h-6 mr-2"
          />
          <span>Verified seller</span>
        </div>
        <div className="flex my-4">
          <img
            src="https://cdn.discordapp.com/attachments/1191096855560454287/1192093304884568134/image.png?ex=65a7d267&is=65955d67&hm=bf0a628614b23f929e3154640d4e3c423f9771d1b61628a2f4d46a2f9ba2e95d&"
            alt="worldwide"
            className="h-6 mr-2"
          />{' '}
          <span>Worldwide shipping</span>
        </div>
     
        <div className="flex flex-col">
          <button className="bg-third text-white p-[16px] rounded">Seller Inquiry</button>
          <button className="text-third border border-gray-400 p-[16px] mt-2.5 rounded">
            Seller's Profile
          </button>
        </div>
      </div>

      <div className="flex">
        <button className=" border-2 flex items-center py-2 px-4 text-third w-full text-center justify-center my-4 rounded">
          {' '}
          <img
            src="https://cdn.discordapp.com/attachments/1191096855560454287/1192090319420928081/image.png?ex=65a7cfa0&is=65955aa0&hm=619e6e8b6dcb9eaf6727eabb44b5b4e31e166440bb1774e068d76b9e5dbe3e41& "
            className="h-4 mr-2 self-center"
            alt="love"
          />
          Save Later
        </button>
      </div>
    </div>
  );
}

export default SellerInfo;
