import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dashboard from "./views/dashboard/Dashboard";
import AddEvent from "./views/events/AddEvent";
import EditEvent from "./views/events/EditEvent";
import Events from "./views/events/Events";
import Item from "./views/events/Item";
import AddFood from "./views/foods/AddFood";
import DetailFood from "./views/foods/DetailFood";
import Food from "./views/foods/Food";
import Inventories from "./views/inventories/Inventories";
import InventoriesPengajuan from "./views/inventories/InventoriesPengajuan";
import AddPackage from "./views/packages/AddPackage";
import EditPackage from "./views/packages/EditPackage";
import Package from "./views/packages/Package";
import AddStaff from "./views/staffs/AddStaff";
import CalenderStaff from "./views/staffs/CalenderStaff";
import DetailStaff from "./views/staffs/DetailStaff";
import Staff from "./views/staffs/Staff";
import AddVendor from "./views/vendors/AddVendor";
import DetailVendor from "./views/vendors/DetailVendor";
import Vendor from "./views/vendors/Vendor";
import AddVenue from "./views/venue/AddVenue";
import DetailVenue from "./views/venue/DetailVenue";
import Venue from "./views/venue/Venue";

const router = [
  {
    url: "/",
    name: "Dashboard",
    icon: <FontAwesomeIcon icon={faHome}/>,
    component: <Dashboard/>
  },
  {
    url: "/events",
    name: "Events",
    icon: <FontAwesomeIcon icon={faHome} />,
    component: <Events />
  },
  {
    url: "/events/add",
    component: <AddEvent/>
  },
  {
    url: "/events/edit",
    component: <EditEvent />
  },
  {
    url: "/events/item",
    component: <Item/>
  },

  {
    url: "/foods",
    name: 'Foods',
    icon: <FontAwesomeIcon icon={faHome} />,
    component: <Food/>,
  },
  {
    url: "/foods/add",
    component: <AddFood />
  },
  {
    url: "foods/detail",
    component: <DetailFood />
  },
  {
    url: "/venue",
    name: "Venue",
    icon: <FontAwesomeIcon icon={faHome} />,
    component: <Venue/>,
  },
  {
    url: "/venue/add",
    component: <AddVenue />
  },
  {
    url: "/venue/detail",
    component: <DetailVenue />
  },

  {
    url: "/vendors",
    name: "Vendors",
    icon: <FontAwesomeIcon icon={faHome} />,
    component: <Vendor/>,
  },
  {
    url: "/vendors/add",
    component: <AddVendor/>,
  },
  {
    url: "/vendors/detail",
    component: <DetailVendor />
  },

  {
    url: "/inventories",
    name: "Inventories",
    icon: <FontAwesomeIcon icon={faHome} />,
    component: <Inventories/>,
  },
  {
    url: "/inventories/pengajuan",
    component: <InventoriesPengajuan/>,
  },

  {
    url: "/staff",
    name: "Staffs",
    icon: <FontAwesomeIcon icon={faHome} />,
    component: <Staff/>,
  },
  {
    url: "/staff/add",
    component: <AddStaff />
  },
  {
    url: "/staff/detail",
    component: <DetailStaff/>
  },
  {
    url: "/staff/calender",
    component: <CalenderStaff/>
  },

  {
    url: "/services",
    name: "Service Packages",
    icon: <FontAwesomeIcon icon={faHome} />,
    component: <Package/>
  },
  {
    url: "/services/add",
    component: <AddPackage/>
  },
  {
    url: "/services/edit",
    component: <EditPackage/>
  }
]

export default router;