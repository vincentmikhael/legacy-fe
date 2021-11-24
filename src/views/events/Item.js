import { Link } from "react-router-dom";
import NumberButton from "../../components/NumberButton";

export default function Item(){
    return (
        <div>
      <div className="d-flex mt-2 align-items-center justify-content-between">
        <b className="ml-n2 font-weight-bold">Item List</b>
            <div className="d-flex align-items-center">
                <div className="d-flex align-items-center mx-1">
                    <div className=" text-muted">Show</div>
                    <select className="form-select rounded-3 font-weight-bold" style={{width: 'auto'}}
                        aria-label="Default select example">
                        <option value="10" selected>10</option>
                        <option value="1">20</option>
                        <option value="2">30</option>

                    </select>
                </div>
                <div className="form-group has-search">
                    <span className="fas fa-search form-control-feedback"></span>
                    <input type="text" className="form-control" placeholder="Search"/>
                </div>
            </div>
    </div>
      

      <table className="table table-borderless mt-5">
            <thead className="border-bottom bg-white">
                <tr>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Venue</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tes</td>
                    <td>
                        <NumberButton state={10}/>
                    </td>
                    <td>Tes</td>
                </tr>
                <tr>
                    <td>Tes</td>
                    <td>
                        <NumberButton state={5}/>
                    </td>
                    <td>Tes</td>
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