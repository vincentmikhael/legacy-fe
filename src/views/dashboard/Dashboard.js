import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import legacyWhite from "../../assets/img/legacy-white.png";
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";

export default function Dashboard(){
return (
    <div>
    <div>
      <b className="fw-bold">Upcoming event</b>
      <div className="row col-6 mt-3">
        <div className="d-flex align-items-center ">
          <input type="date" className="form-control" />
          <div className="mx-1">-</div>
          <input type="date" className="form-control" />
        </div>
      </div>

      <div className="fw-bold mt-4">Calender Technical Meeting</div>
      <div className="bg-white mt-3">
        <FullCalendar  plugins={[resourceTimelinePlugin]} initialView="resourceTimeline" resources={[
            { id: 'a', title: 'a',eventColor: 'green' },
            { id: 'b', title: 'b' },
            { id: 'c', title: 'c' },
          ]} events={[
          {
            id: 'a',
            title: 'my event',
            workDayStart: '06:00',
            wordDayEnd: '07:00'
          }
        ]} contentHeight="200px"/>
      </div>
      
      
      <div className="fw-bold mt-4">Calender Events</div>
      <div className="bg-white mt-3">
        <FullCalendar  plugins={[resourceTimelinePlugin]} initialView="resourceTimeline" resources={[
            { id: 'a', title: 'a',eventColor: 'green' },
            { id: 'b', title: 'b' },
            { id: 'c', title: 'c' },
          ]} events={[
          {
            id: 'a',
            title: 'my event',
            workDayStart: '06:00',
            wordDayEnd: '07:00'
          }
        ]} contentHeight="300px"/>
      </div>
      
    </div>
    </div>
)
}