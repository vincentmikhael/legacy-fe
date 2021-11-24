import { MDBCheckbox, MDBInput } from "mdb-react-ui-kit";
import CardBox from "../../components/CardBox";

export default function AddEvent(){
    return (
    <div>
      <div className="fw-bold">Add New</div>

      <CardBox>
          <b>General Information</b>

            <div className="row ">
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Event Name</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Event Style</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="date" autocomplete="off" required/>
                        <label>Schedule Date</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <select name="" placeholder="ddd" id="">
                        </select>
                        <label>Schedule Date</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Contact Person</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Phone Number</label>
                    </div>
                </div>
            </div>
            <br />
            <b className="text-purple">Utilised Venue</b>

            <div>
                <MDBCheckbox name='inlineCheck' id='inlineCheckbox1' value='option1' label='Hall' inline />
                <MDBCheckbox name='inlineCheck' id='inlineCheckbox2' value='option2' label='Sun (VIP Room)' inline />
                <MDBCheckbox name='inlineCheck' id='inlineCheckbox3' value='option3' label='Star (Meeting Room)'inline />
            </div>

            <div className="row mt-2">
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Guaranteed Pax</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Hotel Rooms</label>
                    </div>
                </div>
            </div>
            
            <div className="d-flex justify-content-end mt-4">
                <button className="btn bg-lightpurple mx-2 shadow-none text-purple rounded-pill">Cancel</button>
                <button className="btn bg-purple shadow-none text-purple rounded-pill text-light">Save</button>
            </div>
      </CardBox>
      
    </div>
    )
}