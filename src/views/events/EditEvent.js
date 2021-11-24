import { MDBCheckbox, MDBInput } from "mdb-react-ui-kit";
import CardBox from "../../components/CardBox";

export default function EditEvent(){
    return (
    <div>
      <div className="fw-bold">Add New</div>

      <CardBox>
          <div className="d-flex align-items-center pb-2 border-bottom justify-content-between">
                <b>General Information</b>
                <span class="fa-stack" style={{verticalAlign: "top"}}>
                    <i class="fas fa-circle fa-stack-2x text-purple"></i>
                    <i class="fas fas fa-question fa-xs text-white fa-stack-1x fa-inverse"></i>
                </span>
          </div>
          

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
      <CardBox>
          <div className="d-flex align-items-center pb-2 border-bottom justify-content-between">
                <b>Involved Parties</b>
                <span class="fa-stack" style={{verticalAlign: "top"}}>
                    <i class="fas fa-circle fa-stack-2x text-purple"></i>
                    <i class="fas fas fa-question fa-xs text-white fa-stack-1x fa-inverse"></i>
                </span>
          </div>
          

            <div className="row ">
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Event Organizer</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Cathering Service</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Decoration</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Master Ceremony</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Lighting</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Sound</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Other/Guest Star</label>
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
      <CardBox>
          <div className="d-flex align-items-center pb-2 border-bottom justify-content-between">
                <b>Event & Rundown</b>
                <span class="fa-stack" style={{verticalAlign: "top"}}>
                    <i class="fas fa-circle fa-stack-2x text-purple"></i>
                    <i class="fas fas fa-question fa-xs text-white fa-stack-1x fa-inverse"></i>
                </span>
          </div>
            <br />
          <b className="text-purple">Select Venue</b>
          <div class="mt-2">
                <div class="form-check form-check-inline">
                    <input class="form-check-input bg-transparent" type="radio" name="inlineRadioOptions"
                        id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">Hall</label>
                </div>
                <div class="form-check ml-5 form-check-inline">
                    <input class="form-check-input bg-transparent" type="radio" name="inlineRadioOptions"
                        id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">Sun (VIP Room)</label>
                </div>
            </div>

            <br />
          <b className="">Event 1</b>
            <div className="row ">
                <div className="col-md-10">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Event Name</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="date" autocomplete="off" required/>
                        <label>Start Date</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="date" autocomplete="off" required/>
                        <label>End Date</label>
                    </div>
                </div>
                <div className="col-md-10">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Notes</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Lighting</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Sound</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Other/Guest Star</label>
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