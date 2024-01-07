import Actions from './Actions';
import Feature from './Feature';
import InfoLeft from './InfoLeft';

function BlockDetails() {
  return (
    <div className=" border-secondary w-2/3 flex flex-col  rounded-md border">
      <Actions />
      <p className='my-2 p-2'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
      <div>
        <InfoLeft />
        <InfoLeft />
        <InfoLeft />
        <InfoLeft />
        <InfoLeft />
      </div>

      <div>
     
        <Feature/>
      </div>
    </div>
  );
}

export default BlockDetails;
