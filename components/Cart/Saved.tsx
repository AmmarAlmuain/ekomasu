export default function Saved({ image,description, text}) {
  return (
      <section>
          
          <div>
              <img src={image} alt="item" className="h-64 w-64" />
              <h2  className="my-2">$92.82</h2>
              <p>{text }</p>
              <p className="my-2"> {description }</p>
              <div className=" flex border justify-center w-2/3 rounded-md p-2">
                  <img src="https://cdn.discordapp.com/attachments/1191096855560454287/1192544366745624598/image.png?ex=65a9767d&is=6597017d&hm=045199666e6bd8962fe65f70346c989f22837da32d40470f000e012d825240e6&" alt="cart" className="h-6 mr-2" />
                  <p className="text-third font-bold">Move to cart</p>
              </div>
      </div>
    </section>
  );
}
