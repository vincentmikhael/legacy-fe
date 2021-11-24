import { MDBCheckbox, MDBInput } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import CardBox from "../../components/CardBox";

export default function DetailFood(){
    return (
    <div>
      <div className="fw-bold">Food Package Details</div>

      <CardBox>

        <div className="row">
            <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Package ID</label>
                    </div>
                </div>
                <div className="col-md-5">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Package Name</label>
                    </div>
                </div>
        </div>


        <div className="d-flex mt-5 align-items-center justify-content-between">
        <b className="ml-n2 font-weight-bold">On Events</b>
            <div className="d-flex align-items-center">
                <input type="date" className="form-control mr-2"/>
                <div className="mx-2">-</div>
                <input type="date" className="form-control ml-2"/>
            </div>
    </div>



        <table className="table table-purple mt-3 border-lg table-borderless">
            <thead className="border-bottom bg-white">
                <tr>
                    <th>Package ID</th>
                    <th>Cathering Vendor</th>
                    <th>Food Package</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>
                        <a href=""><i className="far text-success fa-eye"></i></a>
                        <a href=""><i className="far fa-edit mx-2"></i></a>
                        <a href=""><i className="far text-danger fa-trash-alt"></i></a>
                    </td>
                </tr>
                <tr>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>
                        <a href=""><i className="far text-success fa-eye"></i></a>
                        <a href=""><i className="far fa-edit mx-2"></i></a>
                        <a href=""><i className="far text-danger fa-trash-alt"></i></a>
                    </td>
                </tr>
            </tbody>
        </table>
            
            <div className="d-flex justify-content-end mt-4">
                <button className="btn bg-lightpurple mx-2 shadow-none text-purple rounded-pill">Cancel</button>
                <button className="btn bg-purple shadow-none text-purple rounded-pill text-light">Save</button>
            </div>
      </CardBox>
      
    </div>
    )
}