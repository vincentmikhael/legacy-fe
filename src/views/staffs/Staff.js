import { Link } from "react-router-dom";
import { MDBBtn, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle } from "mdb-react-ui-kit";
import { useState } from "react";

export default function Staff(){
    const [del, setDel] = useState(false)
    const toggleDel = () => setDel(!del);
    return (
        <div>
      <div className="d-flex mt-2 align-items-center justify-content-between">
        <div className="ml-n2 font-weight-bold d-flex align-items-center">
            Staff List
            <div className="ms-4">
                <Link to="/" className="btn mx-1 bg-lightpurple shadow-none rounded-pill text-nowrap"><small> List View </small></Link>
            <Link to="calender" className="btn mx-1 bg-light shadow-none rounded-pill text-nowrap"><small>Calender View</small></Link>
            </div>
            </div>
            <div className="d-flex align-items-center">

                <Link to="/staff/add" className="btn mx-1 bg-lightpurple shadow-none rounded-pill text-nowrap"><small>+ Add New Staff</small></Link>

                
                <div className="d-flex align-items-center mx-2">
                    <div className=" mx-2 text-muted">Show</div>
                    <select className="form-select rounded-3 font-weight-bold" style={{width: 'auto'}}
                        aria-label="Default select example">
                        <option value="10" selected>10</option>
                        <option value="1">20</option>
                        <option value="2">30</option>

                    </select>
                </div>

                <select className="form-select rounded-3 me-2"
                        aria-label="Default select example">
                        <option value="10" selected>Select Role</option>
                        <option value="1">20</option>
                        <option value="2">30</option>

                    </select>
                <div className="form-group has-search">
                    <span className="fas fa-search form-control-feedback"></span>
                    <input type="text" className="form-control" style={{width: "180px"}} placeholder="Search"/>
                </div>
            </div>
    </div>
      

      <table className="table table-borderless mt-5">
            <thead className="border-bottom bg-white">
                <tr>
                    <th>ID</th>
                    <th>Staff Name</th>
                    <th>Role</th>
                    <th>Phone Number</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>
                        <Link to="detail"><i className="far text-success fa-eye"></i></Link>
                        <a href=""><i className="far fa-edit mx-2"></i></a>
                        <a onClick={toggleDel}><i className="far text-danger fa-trash-alt"></i></a>
                    </td>
                </tr>
                <tr>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>
                        <Link to="detail"><i className="far text-success fa-eye"></i></Link>
                        <a href=""><i className="far fa-edit mx-2"></i></a>
                        <a onClick={toggleDel}><i className="far text-danger fa-trash-alt"></i></a>
                    </td>
                </tr>

            </tbody>
        </table>

        <div className="d-flex mt-3 justify-content-center">
        <nav aria-label="Page navigation  example">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link border-0" href="#" aria-label="Previous">
                        <i className="fas fa-chevron-left"></i>
                    </a>
                </li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                    <a className="page-link border-0" href="#" aria-label="Next">
                        <i className="fas fa-chevron-right"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>

    <MDBModal show={del} setShow={setDel} tabIndex='-1'>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader className="border-0">
 
            <MDBBtn className='btn-close' color='none' onClick={toggleDel}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
              <div className="d-flex align-items-center flex-column">
                  <span className="fa-stack fa-2x" style={{verticalAlign: "top"}}>
                    <i className="far fa-circle text-danger fa-stack-2x"></i>
                    <i className="fas fa-times text-danger fa-stack-1x"></i>
                    </span>
                    <div className="fs-5 mt-3">Are You Sure ?</div>
                    <div className="my-3 text-muted">Are you sure want to delete this item permanently?</div>
              </div>
              <div className="d-flex mb-5 justify-content-center">
                  <MDBBtn color='light' rounded="pill" onClick={toggleDel}>
                    Close
                  </MDBBtn>
                  <MDBBtn color="danger" rounded="pill" className="ms-2">Delete</MDBBtn>
              </div>
          </MDBModalBody>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
    </div>
    )
}