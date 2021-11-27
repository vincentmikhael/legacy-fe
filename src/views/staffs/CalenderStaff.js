import { Link } from "react-router-dom";
import { MDBBtn, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle } from "mdb-react-ui-kit";
import { useState } from "react";
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";

export default function CalenderStaff(){
    const [del, setDel] = useState(false)
    const toggleDel = () => setDel(!del);
    return (
        <div>
      <div className="d-flex mt-2 align-items-center justify-content-between">
        <div className="ml-n2 font-weight-bold d-flex align-items-center">
            Staff List
            <div className="ms-4">
                <Link to="/" className="btn mx-1 bg-lightpurple shadow-none rounded-pill text-nowrap"><small> List View </small></Link>
            <Link to="/" className="btn mx-1 bg-light shadow-none rounded-pill text-nowrap"><small>Calender View</small></Link>
            </div>
            </div>
          
    </div>


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
    
      
    </div>

    </div>
    )
}