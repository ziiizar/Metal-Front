import React from "react";

const Event_card = () => {
  return (
    <div className=" flex lg:flex-col  border-2 border-gray-800 rounded-md  gap-2 shadow-xl  max-lg:flex-row  h-full  ">
      <div className=" h-full lg:h-3/6 max-lg:w-2/5 w-full max-lg:max-h-[250px] shrink-[40]  ">
        <img
          src="src/assets/59d922b8-84b7-41cc-bf35-52a90adc906e.jpg"
          alt="evento"
          className="h-full w-full"
        />
      </div>
      <div className="w-3/5 h-full flex flex-col justify-between lg:w-full p-1  gap-2 ">
        <div className="flex flex-col gap-4">
          <span className=" font-sans font-bold text-2xl max-sm:text-sm hyphens-auto text-black">
            Lorem, ipsum dolor sit amet consectetur adipisicing is hic it amet
            consectetur ad
          </span>
          <p className="max-md:w-full max-sm:text-xs hyphens-auto max-[400px]:text-ellipsis text-black">
            accusantium dolore, explicabo, blanditiis facere veniam qui
            accusantium dolore, explicabo, blanditiis adipis{" "}
            <span className="cursor-pointer text-sm text-blue-900">
              {" "}
              Ver mas
            </span>
          </p>
        </div>

        <div className="flex justify-between mr-6">
          <span className="max-sm:text-sm"> 27-6-23</span>
          <div className="gap-2 flex items-center border-[1px] border-spacing-4 border-gray-800 rounded-3xl  ">
            <span></span>

            <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
            <lord-icon
              class="rotate-180  "
              src="https://cdn.lordicon.com/hrqwmuhr.json"
              trigger="hover"
              colors="primary:#121331,secondary:#66a1ee"
              style={{ width: "25px", height: "25px" }}
            ></lord-icon>

            <span>18</span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event_card;
