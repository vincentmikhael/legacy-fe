import { Link } from "react-router-dom";

export default function Inventories(){
    return (
        <div>
      <div className="d-flex mt-2 align-items-center justify-content-between">
        <div className="ml-n2 font-weight-bold d-flex align-items-center">
            Inventories List
            <div className="ms-4">
                <Link to="/inventories" className="btn mx-1 bg-lightpurple shadow-none rounded-pill text-nowrap"><small>Inventories List</small></Link>
            <Link to="/inventories/pengajuan" className="btn mx-1 bg-light shadow-none rounded-pill text-nowrap"><small>List Pengajuan</small></Link>
            </div>
            </div>
            <div className="d-flex align-items-center">

                <Link to="/vendors/add" className="btn mx-1 bg-lightpurple shadow-none rounded-pill text-nowrap"><small>+ Add New Item</small></Link>

                
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
                    <th>Occupied</th>
                    <th>Free</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tes</td>
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
                    <td>Tes</td>
                    <td>
                        <a href=""><i className="far text-success fa-eye"></i></a>
                        <a href=""><i className="far fa-edit mx-2"></i></a>
                        <a href=""><i className="far text-danger fa-trash-alt"></i></a>
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
    </div>
    )
}