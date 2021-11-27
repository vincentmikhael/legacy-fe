import { MDBBtn, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle } from "mdb-react-ui-kit";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Food(){
    const [modal, setModal] = useState(false)
    const toggleShow = () => setModal(!modal);
    return (
        <div>
      <div className="d-flex mt-2 align-items-center justify-content-between">
        <b className="ml-n2 font-weight-bold">Foods List</b>
            <div className="d-flex align-items-center">

                <Link to="/foods/add" className="btn mx-1 bg-lightpurple shadow-none rounded-pill text-nowrap"><small>+ Add New Food</small></Link>
                <div className="d-flex align-items-center mx-2">
                    <div className=" text-muted">Show</div>
                    <select className="form-select rounded-3 font-weight-bold" style={{width: 'auto'}}
                        aria-label="Default select example">
                        <option value="10" selected>10</option>
                        <option value="1">20</option>
                        <option value="2">30</option>

                    </select>
                </div>

                <input type="text" placeholder="Search" className="form-control"></input>
            </div>
    </div>
      

      <table className="table table-borderless mt-5">
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
                        <Link to="/foods/detail"><i className="far text-success fa-eye"></i></Link>
                        <a href=""><i className="far fa-edit mx-2"></i></a>
                        <a onClick={toggleShow}><i className="far text-danger fa-trash-alt"></i></a>
                    </td>
                </tr>
                <tr>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>
                        <a href=""><i className="far text-success fa-eye"></i></a>
                        <a href=""><i className="far fa-edit mx-2"></i></a>
                        <a onClick={toggleShow}><i className="far text-danger fa-trash-alt"></i></a>
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

    <MDBModal show={modal} setShow={setModal} tabIndex='-1'>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader className="border-0">
 
            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
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
                  <MDBBtn color='light' rounded="pill" onClick={toggleShow}>
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