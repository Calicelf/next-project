import React from "react";
import {MDBCard, MDBCardImage} from "mdbreact";
import { priceFormatted } from "./helpers";

export const CardVip = ({properties}) => {
    return(
        <>
        {
            properties && properties.map(property => (
                <MDBCard className="mb-2" key={property._id}>
                    <MDBCardImage src={property.pictures[0]} zoom hover waves className="d-block w-100"/>
                    <div className="imgTop">
                        <button className="d-inline-flex vedette">En vedette</button>
                        <button className="d-inline-flex exclu">Exclusivités</button>
                    </div>
                    <div className="price">
                        {priceFormatted(property.price)}
                    </div>
                </MDBCard>
            ))
        }
        <style jsx>
            {
                `
                .imgTop {
                    position: absolute;
                    top: 10px;
                    left: 5px;
                }
                .vedette {
                    background-color: #00695c;
                    color: white;
                    text-transform: capitalize;
                    font-size: 10px;
                    font-weight: bolder;
                    boder: 0;
                    margin-right: 5px;
                }
                .exclu {
                    border: 0;
                    background-color: red;
                    color: white;
                    font-weight: bolder;
                    text-transform: capitalize;
                    font-size: 10px;
                }
                .price{
                    position: absolute;
                    bottom: 5px;
                    left: 16px;
                    font-weight: bold;
                    color:white;
                }
                `
            }
        </style>
        </>
    )
}