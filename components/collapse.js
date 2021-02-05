import React, { Component, useState } from "react";
import { MDBBtn, MDBCollapse, MDBIcon } from "mdbreact";

const Collapse =({titre, children}) =>  {

const [collapseID, setCollapseID] = useState("");

const toggleCollapse = collapseID => () => {
  setCollapseID(prevState => (
      collapseID = prevState !== collapseID ? collapseID : ""
  ))
}

const styles = {
    collapse: {
        backgroundColor: "#00695c",
        padding: 10,
        fontSize: 20,
        color: "white"
    },
    icon: {
        padding: 10
    }
}

  return (
      <>
        <div className="mb-4">
            <div style={styles.collapse} onClick={toggleCollapse("basicCollapse")}>
                {titre}
                {
                    collapseID && <MDBIcon icon="angle-down" style={styles.icon} className="float-right" />
                }
                {
                    !collapseID && <MDBIcon icon="angle-up" style={styles.icon} className="float-right" />
                }
            </div>
        <MDBCollapse id="basicCollapse" isOpen={collapseID}>
          {children}
        </MDBCollapse>
        </div>
      </>
    );
  
}

export default Collapse;