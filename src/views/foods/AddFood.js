import { MDBCheckbox, MDBInput } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import CardBox from "../../components/CardBox";

export default function AddFood(){
    return (
    <div>
      <div className="fw-bold">Add Package</div>

      <CardBox>

            <div className="row ">
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
                        <label>Food Package Name</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Appetizers</label>
                    </div>
                    <Link to="/" className="text-decoration-underline fw-bold">+ Add More Appetizers</Link>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Main Courses</label>
                    </div>
                    <Link to="/" className="text-decoration-underline fw-bold">+ Add More Main Courses</Link>
                </div>
 
                <div className="col-md-5 mt-4">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Desserts</label>
                    </div>
                    <Link to="/" className="text-decoration-underline fw-bold">+ Add More Desserts</Link>
                </div>
                <div className="col-md-5 mt-4">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Bverages</label>
                    </div>
                    <Link to="/" className="text-decoration-underline fw-bold">+ Add More Bverages</Link>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Snacks</label>
                    </div>
                    <Link to="/" className="text-decoration-underline fw-bold">+ Add More Snacks</Link>
                </div>
 
            </div>
            <br />

            <div className="d-flex justify-content-end mt-4">
                <button className="btn bg-lightpurple mx-2 shadow-none text-purple rounded-pill">Cancel</button>
                <button className="btn bg-purple shadow-none text-purple rounded-pill text-light">Save</button>
            </div>
      </CardBox>
      
    </div>
    )
}