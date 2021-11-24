import { Link } from "react-router-dom";

export default function Food(){
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