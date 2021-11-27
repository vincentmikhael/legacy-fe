import { MDBCheckbox, MDBInput } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import CardBox from "../../components/CardBox";
import NumberButton from "../../components/NumberButton"

export default function EditPackage(){
    return (
    <div>
      <div className="fw-bold">Edit Service Package</div>

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
                <div className="col-md-2 ps-4">
                    <i className="fas fa-trash-alt text-danger mt-3 ms-md-4"></i>
                </div>
                <div className="col-md-10">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Notes</label>
                    </div>
                </div>
                <div className="row ps-5">
                    <b>Rundown 1</b>
                    <br/><br/>
                    <div className="col-3">
                        <div class="form-item">
                            <input type="time" autocomplete="off" required/>
                            <label>Start Time</label>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="form-item">
                            <input type="time" autocomplete="off" required/>
                            <label>End Time</label>
                        </div>
                    </div>
                    <div className="col-4">
                        <div class="form-item">
                            <input type="text" autocomplete="off" required/>
                            <label>Rundown Name</label>
                        </div>
                    </div>
                    <div className="col-md-2">
                    <i className="fas fa-trash-alt text-danger mt-3 ms-md-5"></i>
                </div>
                    <div className="col-3">
                        <div class="form-item">
                            <input type="time" autocomplete="off" required/>
                            <label>Start Time</label>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="form-item">
                            <input type="time" autocomplete="off" required/>
                            <label>End Time</label>
                        </div>
                    </div>
                    <div className="col-4">
                        <div class="form-item">
                            <input type="text" autocomplete="off" required/>
                            <label>Rundown Name</label>
                        </div>
                    </div>
                    <div className="col-md-2">
                    <i className="fas fa-trash-alt text-danger mt-3 ms-md-5"></i>
                </div>

                    <Link className="text-primary fw-bold text-decoration-underline mt-3" to="/">+ Add More Rundown</Link>
                </div>

            </div>
            <br />

            <b className="">Event 2</b>
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
                <div className="col-md-2 ps-4">
                    <i className="fas fa-trash-alt text-danger mt-3 ms-md-4"></i>
                </div>
                <div className="col-md-10">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Notes</label>
                    </div>
                </div>
                <div className="row ps-5">
                    <b>Rundown 1</b>
                    <br/><br/>
                    <div className="col-3">
                        <div class="form-item">
                            <input type="time" autocomplete="off" required/>
                            <label>Start Time</label>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="form-item">
                            <input type="time" autocomplete="off" required/>
                            <label>End Time</label>
                        </div>
                    </div>
                    <div className="col-4">
                        <div class="form-item">
                            <input type="text" autocomplete="off" required/>
                            <label>Rundown Name</label>
                        </div>
                    </div>
                    <div className="col-md-2">
                    <i className="fas fa-trash-alt text-danger mt-3 ms-md-5"></i>
                </div>
                    <div className="col-3">
                        <div class="form-item">
                            <input type="time" autocomplete="off" required/>
                            <label>Start Time</label>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="form-item">
                            <input type="time" autocomplete="off" required/>
                            <label>End Time</label>
                        </div>
                    </div>
                    <div className="col-4">
                        <div class="form-item">
                            <input type="text" autocomplete="off" required/>
                            <label>Rundown Name</label>
                        </div>
                    </div>
                    <div className="col-md-2">
                    <i className="fas fa-trash-alt text-danger mt-3 ms-md-5"></i>
                </div>

                    <Link className="text-primary fw-bold text-decoration-underline mt-3" to="/">+ Add More Rundown</Link>
                </div>
                <Link className="text-primary fw-bold text-decoration-underline mt-5" to="/">+ Add More Event</Link>
            </div>
            <br />
        
      </CardBox>

      <CardBox>
          <div className="d-flex align-items-center pb-2 border-bottom justify-content-between">
                <b>Food Menu</b>
                <span class="fa-stack" style={{verticalAlign: "top"}}>
                    <i class="fas fa-circle fa-stack-2x text-purple"></i>
                    <i class="fas fas fa-question fa-xs text-white fa-stack-1x fa-inverse"></i>
                </span>
          </div>
          

            <div className="row mt-4">
                <div className="col-md-5">
                    <div class="form-item">
                        <select name="" placeholder="ddd" id="">
                        </select>
                        <label>Select Cathering Vendor</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <select name="" placeholder="ddd" id="">
                        </select>
                        <label>Select Food Package</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="date" autocomplete="off" required/>
                        <label>Appetizers</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <select name="" placeholder="ddd" id="">
                        </select>
                        <label>Main Course</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Desserts</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Beverages</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Snacks</label>
                    </div>
                </div>
            </div>
            <Link className="mt-3 text-primmary fw-bold text-decoration-underline" to='/'>+ Add More Cathering</Link>

      </CardBox>

      <CardBox>
          <div className="d-flex align-items-center pb-2 border-bottom justify-content-between">
                <b>Setup Details</b>
                <span class="fa-stack" style={{verticalAlign: "top"}}>
                    <i class="fas fa-circle fa-stack-2x text-purple"></i>
                    <i class="fas fas fa-question fa-xs text-white fa-stack-1x fa-inverse"></i>
                </span>
          </div>
          <br/>
          <b className="text-purple">Utilised Venue</b>

            <div>
                <MDBCheckbox name='inlineCheck' id='inlineCheckbox1' value='option1' label='Hall' inline />
                <MDBCheckbox name='inlineCheck' id='inlineCheckbox2' value='option2' label='Sun (VIP Room)' inline />

            </div>

            <div className="row mt-5">
                
                <div className="col-md-5">
                    <div class="form-item">
                        <select name="" placeholder="ddd" id="">
                        </select>
                        <label>Select Product 1</label>
                    </div>
                </div>
                <div className="col-md-5 mb-3">
                    <small className="text-purple fw-bold">Jumlah</small>
                    <div className="d-flex align-items-center">
                        <NumberButton/> <div className="ms-2">/ 100</div>
                    </div>
                    
                </div> 
                <div className="col-md-5">
                    <div class="form-item">
                        <select name="" placeholder="ddd" id="">
                        </select>
                        <label>Select Product 2</label>
                    </div>
                </div>
                <div className="col-md-5 mb-3">
                    <small className="text-purple fw-bold">Jumlah</small>
                    <div className="d-flex align-items-center">
                        <NumberButton/> <div className="ms-2">/ 100</div>
                    </div>
                    
                </div> 
          

            </div>
            <Link className="mt-1 text-primmary fw-bold text-decoration-underline" to='/'>+ Add More Product</Link>

            <div className="d-flex mt-4 justify-content-end">
                <button className="btn bg-purple shadow-none text-purple rounded-pill text-light">Details</button>
            </div>
      </CardBox>
      
      <CardBox>
          <div className="d-flex align-items-center pb-2 border-bottom justify-content-between">
                <b>Staff & Facillities</b>
                <span class="fa-stack" style={{verticalAlign: "top"}}>
                    <i class="fas fa-circle fa-stack-2x text-purple"></i>
                    <i class="fas fas fa-question fa-xs text-white fa-stack-1x fa-inverse"></i>
                </span>
          </div>
          <br/>
            <b>Staff</b>
            <div className="row mt-2">
                <div className="col-md-5">
                    <div class="form-item">
                        <select name="" placeholder="ddd" id="">
                        </select>
                        <label>Runners</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <select name="" placeholder="ddd" id="">
                        </select>
                        <label>Security</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <select name="" placeholder="ddd" id="">
                        </select>
                        <label>Valet</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <select name="" placeholder="ddd" id="">
                        </select>
                        <label>Other/Staff</label>
                    </div>
                    <Link className="mt-1 text-primmary fw-bold text-decoration-underline" to='/'><small>+ Add More Product</small></Link>
                </div>
                <br/>
                <b>Facilities</b>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Additional Genset</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Mushola</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Other/Faciities</label>
                    </div>
                    <Link className="mt-1 text-primmary fw-bold text-decoration-underline" to='/'><small>+ Add More Facilities</small></Link>
                </div>
            </div>

      </CardBox>

      <div className="d-flex justify-content-end my-4">
                <button className="btn bg-lightpurple mx-2 shadow-none text-purple rounded-pill">Cancel</button>
                <button className="btn bg-purple shadow-none text-purple rounded-pill text-light">Confirm</button>
            </div>
    </div>
    )
}