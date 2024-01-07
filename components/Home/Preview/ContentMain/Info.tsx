import ShortInfo from './ShortInfo';

function Info({
  title,
  alt,
  image,
  price,
  priceRange,
}: {
  image: string;
  title: string;
  alt: string;
  price: string;
  priceRange: string;
}) {
  return (
    <div>
      <h2 className="text-primary text-3xl font-bold">
        Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
      </h2>
      <div className="flex justify-around my-4">
        <p>
          ❤️❤️❤️❤️❤️ <span>8.8</span>
        </p>{' '}
        <p className='flex'>
          <img src={'https://cdn.discordapp.com/attachments/1191096855560454287/1192089300809023509/image.png?ex=65a7cead&is=659559ad&hm=f6714b95d027d110fc32572cfeb58787bf877685e9b0ece37d88412e7314e0c6&'} alt={alt} className='h-6 mr-2' />
          <span>34 reviews</span>
        </p>
        <p className="flex  ">
          <img src="https://cdn.discordapp.com/attachments/1191096855560454287/1192089195435532371/image.png?ex=65a7ce94&is=65955994&hm=4f02834a440e8170d422223f6dc86762cd92f24c061fd9020d54670aea3578c0&" alt="alt" className='h-6 mr-2' />
          <span>109 sold</span>
        </p>
      </div>

      <div className=" flex p-2 items-center bg-fpink justify-evenly ">
    
      <div className="flex ">
          
          <p className='text-ocard font-bold'>
            ${322} <span className='flex flex-col text-secondary font-normal'>priceRange</span>
          </p>
        </div>
        <div className="flex ">
          <hr className='bg-secondary h-12 w-px mx-1'/>
          <p className='text-ocard font-bold'>
            ${322} <span className='flex flex-col text-secondary font-normal'>priceRange</span>
          </p>
        </div>

        <div className="flex ">
          <hr className='bg-secondary h-12 w-px mx-1'/>
          <p className='text-ocard font-bold'>
            ${322} <span className='flex flex-col text-secondary font-normal'>priceRange</span>
          </p>
        </div>

      </div>
      <ShortInfo />
    </div>
  );
}

export default Info;
