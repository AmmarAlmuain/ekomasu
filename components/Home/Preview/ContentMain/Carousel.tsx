import Gallery from './Gallery';

function Carousel() {
  return (
    <div>
      <img src='https://cdn.discordapp.com/attachments/1191096855560454287/1191700421622890526/image.png?ex=65a66481&is=6593ef81&hm=2cceebaea6ba2ea48a9b065554d4de2ac3f11640066c136d5591efec1a354638&' alt='item' className='h-full max-h-[380px] h-380px max-w-[380px] border rounded border-gray-200 shadow-lg drop-shadow-sm border-solid mb-4 w-full' />
      <Gallery />
    </div>
  );
}

export default Carousel;

