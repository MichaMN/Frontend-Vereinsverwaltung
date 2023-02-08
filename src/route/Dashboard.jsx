import React, { useState } from "react";
import Topbar from "../components/Topbar";

import UserData from "../data/users.json";

import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

export default function Dashboard() {
   const groups = [
      {
         id: 1,
         name: "Tennis",
      },
      {
         id: 2,
         name: "Hockey",
      },
   ];

   const GroupList = ({ list }) => {
      const listItems = list.map((listItem) => <li key={listItem.id}>{listItem.name}</li>);
      return <ul>{listItems}</ul>;
   };

   return (
      <div className="app">
         <Topbar />
         <div className="content">
            <div className="sidebar">
               <h1>sidebar</h1>
               <GroupList list={groups} />
            </div>
            <div className="main">
               <h1>Dashboard</h1>

               <MDBTable>
                  <MDBTableHead dark>
                     <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                     </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                     <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                     </tr>
                     <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                     </tr>
                     <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                     </tr>
                  </MDBTableBody>
               </MDBTable>
            </div>
         </div>
      </div>
   );
}
