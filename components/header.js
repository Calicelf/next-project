import React, {useState} from 'react';
import {
    MDBNavbar, MDBIcon, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact";
import Link from "next/link"
import useAuth from '../auth/context';
import {useRouter} from 'next/router';


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {logout, user, isAuthenticated} = useAuth();
    const router = useRouter();

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    return(
        <MDBNavbar color="default-color-dark" expand="md" dark>
            <MDBNavbarToggler onClick={handleToggle}/>
            <MDBCollapse id="navbarCollapse" navbar isOpen={isOpen}>
                <MDBNavbarNav left>
                    <MDBNavItem active={router.pathname === "/"}>
                        <Link href="/">
                            <div className="nav-link">
                                <MDBIcon icon="home" className="mr-1"/>Home
                            </div>
                        </Link>
                        
                    </MDBNavItem>
                    <MDBNavItem active={router.pathname === "/properties"}>
                        <Link href="/properties">
                            <a className="nav-link">
                                Liste de biens
                            </a>
                        </Link>
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                    <MDBNavItem active={router.pathname === "/contact"}>
                        <Link href="/contact">
                            <a className="nav-link">
                                Contact
                            </a>
                        </Link>
                    </MDBNavItem>
                    {
                        !isAuthenticated && (
                            <MDBNavItem active={router.pathname === "/login"}>
                            <Link href="/login">
                                <a className="nav-link">
                                    Connexion
                                </a>
                            </Link>
                        </MDBNavItem>
                        )
                    }
                    {
                        isAuthenticated && (
                        <>
                            <MDBNavItem>
                                <div className="nav-link" onClick={logout}>
                                    <MDBIcon icon="user-alt" className="mr-1"/>
                                    Bonjour {user.username}
                                </div> 
                            </MDBNavItem>
                            <MDBNavItem>
                                <div className="nav-link" onClick={logout}>
                                    <MDBIcon icon="power-off" className="mr-1"/>
                                    Déconnexion
                                </div> 
                            </MDBNavItem>
                        </>
                        )
                    }
                   
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    )
}