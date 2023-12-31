/* eslint-disable @next/next/no-img-element */
import Banner from "./Banner";
import Menu from "./Menu";

export default function Main() {
  return (
    <>
      <section>
        <div className="flex border-color justify-center items-center max-h-[400px] gap-x-4 border bg-white rounded-md p-4">
          <Menu />
          <Banner />
          <section className="flex flex-col gap-y-2">
            <div className="bg-fourth w-64 p-4 rounded-md">
              <div className="flex text-primary gap-x-3 justify-start items-center">
                <img
                  src="https://i.ibb.co/d7F8n5s/image.png"
                  alt="user-profile"
                  className="w-11 h-11"
                />
                <p>
                  Hi, user <br></br> let&apos;s get stated
                </p>
              </div>
              <div className="mt-4 flex flex-col justify-center items-center gap-y-2">
                <button
                  type="button"
                  className="third-gradient text-white w-full h-10 rounded-md"
                >
                  Join Now
                </button>
                <button
                  type="button"
                  className="bg-white border-2 border-color text-third w-full h-10 rounded-md"
                >
                  Login in
                </button>
              </div>
            </div>
            <div className="flex text-white w-64 p-4 rounded-md bg-ocard gap-x-3 justify-start items-center">
              Get US $10 off <br></br> with a new supplier
            </div>
            <div className="flex text-white w-64 p-4 rounded-md bg-bcard gap-x-3 justify-start items-center">
              Send quotes with <br></br> supplier preferences
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
