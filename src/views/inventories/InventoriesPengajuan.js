import { Link } from "react-router-dom";
import { MDBBtn, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle } from "mdb-react-ui-kit";
import { useState } from "react";

export default function InventoriesPengajuan(){
    const [modal, setModal] = useState(false)
    const [view, setView] = useState(false)
    const [del, setDel] = useState(false)
    const toggleShow = () => setModal(!modal);
    const toggleView = () => setView(!view);
    const toggleDel = () => setDel(!del);
    return (
        <div>
      <div className="d-flex mt-2 align-items-center justify-content-between">
        <div className="ml-n2 font-weight-bold d-flex align-items-center">
            Inventories List
            <div className="ms-4">
                <Link to="/inventories" className="btn mx-1 bg-light shadow-none rounded-pill text-nowrap"><small>Inventories List</small></Link>
                <Link to="/inventories/pengajuan" className="btn mx-1 bg-lightpurple shadow-none rounded-pill text-nowrap"><small>List Pengajuan</small></Link>
            </div>
            </div>
            <div className="d-flex align-items-center">

                <div onClick={toggleShow} className="btn mx-1 bg-lightpurple shadow-none rounded-pill text-nowrap"><small>+ Add New Item</small></div>

                
                <div className="d-flex align-items-center mx-2">
                    <div className=" mx-2 text-muted">Show</div>
                    <select className="form-select rounded-3 font-weight-bold" style={{width: 'auto'}}
                        aria-label="Default select example">
                        <option value="10" selected>10</option>
                        <option value="1">20</option>
                        <option value="2">30</option>

                    </select>
                </div>
                <div className="form-group has-search">
                    <span className="fas fa-search form-control-feedback"></span>
                    <input type="text" className="form-control" style={{width: "180px"}} placeholder="Search"/>
                </div>
            </div>
    </div>
      

      <table className="table table-borderless mt-5">
            <thead className="border-bottom bg-white">
                <tr>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>
                        <a onClick={toggleView}><i className="far text-success fa-eye"></i></a>
                        <a href=""><i className="far fa-edit mx-2"></i></a>
                        <a onClick={toggleDel}><i className="far text-danger fa-trash-alt"></i></a>
                    </td>
                </tr>
                <tr>
                    <td>Tes</td>
                    <td>Tes</td>
        
                    <td>Tes</td>
                    <td>
                        <a onClick={toggleView}><i className="far text-success fa-eye"></i></a>
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
    <MDBModal show={modal} setShow={setModal} tabIndex='-1'>
      <MDBModalDialog centered size="lg">
        <MDBModalContent>
          <MDBModalHeader className="">
            <div className="text-center w-100">
                <b>Pengajuan Kehilangan & Kerusakan</b>
            </div>
            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
              <div className="row pb-2">
                  <div className="col-md-6">
                      <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Item Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                      <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Quantity</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-item">
                        <select name="" placeholder="ddd" id="">
                        </select>
                        <label>Select Cathering Vendor</label>
                    </div>
                </div>
                <div className="col-md-6 mt-2">
                    <input type="file" class="form-control border-0 border-bottom" id="customFile" />
                </div>
                <div className="col-md-6">
                      <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Item Name</label>
                    </div>
                  </div>
              </div>
              <div className="d-flex justify-content-end mt-5">
                <button className="btn bg-lightpurple mx-2 shadow-none text-purple rounded-pill">Cancel</button>
                <button className="btn bg-purple shadow-none text-purple rounded-pill text-light">Save</button>
            </div>
          </MDBModalBody>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>

    <MDBModal show={view} setShow={setView} tabIndex='-1'>
      <MDBModalDialog centered size="lg">
        <MDBModalContent>
          <MDBModalHeader className="">
            <div className="text-center w-100">
                <b>Pengajuan Kehilangan & Kerusakan</b>
            </div>
            <MDBBtn className='btn-close' color='none' onClick={toggleView}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
              <div className="row pb-2">
                  <div className="col-md-6">
                      <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Kursi</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                      <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Quantity</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-item">
                        <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Status</label>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 mt-2">
                    <div class="form-item">
                        <input type="text" autocomplete="off" required/>
                        <label>Notes</label>
                    </div>
                </div>
                <div className="col-md-6">
                      <small className="text-purple fw-bold">Photo</small><br/>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" className="img-fluid" width="90"/>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" className="img-fluid ms-2" width="90"/>
                  </div>
              </div>
              <div className="d-flex justify-content-end mt-5">
                <button className="btn bg-lightpurple mx-2 shadow-none text-purple rounded-pill">Cancel</button>
                <button className="btn bg-purple shadow-none text-purple rounded-pill text-light">Save</button>
            </div>
          </MDBModalBody>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>

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