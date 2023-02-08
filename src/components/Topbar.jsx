import React, { useState } from "react";

import {
   MDBContainer,
   MDBNavbar,
   MDBNavbarBrand,
   MDBNavbarToggler,
   MDBIcon,
   MDBNavbarNav,
   MDBNavbarItem,
   MDBNavbarLink,
   MDBDropdown,
   MDBDropdownToggle,
   MDBDropdownMenu,
   MDBDropdownItem,
   MDBCollapse,
} from "mdb-react-ui-kit";

const Topbar = () => {
   const [showBasic, setShowBasic] = useState(false);

   return (
      <MDBNavbar expand="lg" light bgColor="light">
         <MDBContainer fluid>
            <MDBNavbarBrand href="#">
               <MDBIcon
                  fas
                  icon="fas fa-volleyball-ball fa-3x me-3 ps-3"
                  style={{ color: "#0178ff", fontSize: "40px" }}
               />
               <span className="h4 fw-bold mb-0">MyVerein</span>
            </MDBNavbarBrand>

            <MDBNavbarToggler
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
               onClick={() => setShowBasic(!showBasic)}
            >
               <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>

            <MDBCollapse navbar show={showBasic}>
               <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                  <MDBNavbarItem>
                     <MDBNavbarLink active aria-current="page" href="#">
                        <MDBIcon className="ms-1 " icon="male" style={{ marginRight: "5px" }} fixed iconType="solid" />
                        Meine Gruppen
                     </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                     <MDBNavbarLink aria-current="page" href="#">
                        <MDBIcon className="ms-1 " icon="users" style={{ marginRight: "5px" }} fixed iconType="solid" />
                        Alle Gruppen
                     </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                     <MDBNavbarLink aria-current="page" href="#">
                        <MDBIcon
                           className="ms-1 "
                           icon="info-circle"
                           style={{ marginRight: "5px" }}
                           fixed
                           iconType="solid"
                        />
                        Infomation
                     </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                     <MDBNavbarLink aria-current="page" href="#">
                        <MDBIcon
                           className="ms-1 "
                           icon="users-cog"
                           style={{ marginRight: "5px" }}
                           fixed
                           iconType="solid"
                        />
                        Verwaltung (Admin)
                     </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem></MDBNavbarItem>
               </MDBNavbarNav>

               <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                     Account
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                     <MDBDropdownItem link>Profil</MDBDropdownItem>
                     <MDBDropdownItem link href="/">
                        Abmelden
                     </MDBDropdownItem>
                  </MDBDropdownMenu>
               </MDBDropdown>
            </MDBCollapse>
         </MDBContainer>
      </MDBNavbar>
   );
};

export default Topbar;
