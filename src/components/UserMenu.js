import { MDBDropdown, MDBDropdownItem, MDBDropdownLink, MDBDropdownMenu, MDBDropdownToggle } from "mdb-react-ui-kit";

export default function UserMenu(){
    return (
        <div>
            <MDBDropdown group className='shadow-0'>
        <MDBDropdownToggle color='link' className="text-black">Simeon, Admin <img className="img-fluid img-user rounded-circle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" /></MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem>
            <MDBDropdownLink href="#">Action</MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBDropdownLink href="#">Another action</MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBDropdownLink href="#">Something else here</MDBDropdownLink>
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
        </div>
    )
}