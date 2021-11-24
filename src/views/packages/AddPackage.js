import { MDBCheckbox, MDBInput } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import CardBox from "../../components/CardBox";

export default function AddPackage(){
    return (
    <div>
      <div className="fw-bold">Add Service Package</div>

      <CardBox>

            <div className="row ">
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Package Name</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Guaranteed Pax</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Venue</label>
                    </div>
                    <Link to="/" className="text-primary text-decoration-underline">+ Add More Venue</Link>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Hotel Room</label>
                    </div>
                    <Link to="/" className="text-primary text-decoration-underline">+ Add More Room</Link>
                </div>

                <div className="col-md-5 mt-4">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Cathering Service</label>
                    </div>
                </div>
            </div>
            <br />

            <div className="d-flex justify-content-end mt-4">
                <button className="btn bg-lightpurple mx-2 shadow-none text-purple rounded-pill">Cancel</button>
                <button className="btn bg-purple shadow-none text-purple rounded-pill text-light">Confirm</button>
            </div>
      </CardBox>
      
    </div>
    )
}