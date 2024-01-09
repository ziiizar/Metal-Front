// import React from 'react'
import Event_card from "./Event_card";
import New_Event from "./New_Event";
import HeaderMainFooterLayout from "../../Layouts/HeaderMainFooterLayout";
const EventsPage = () => {
  return (
    <HeaderMainFooterLayout>
      {" "}
      <div className="mt-8 flex place-content-center w-full h-full">
        <div className="grid grid-flow-row w-11/12 h-full lg:grid-cols-2  gap-4 lg:grid-rows-[450px_450px] gap-x-10">
          <Event_card />
          <Event_card />
          <Event_card />
          <Event_card />
          <Event_card />
          <Event_card />
          <New_Event />
        </div>
      </div>
    </HeaderMainFooterLayout>
  );
};

export default EventsPage;
