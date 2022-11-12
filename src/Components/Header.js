import "bootstrap/dist/css/bootstrap.min.css";
import '../Styles/Header.css'
import * as UI from 'react-bootstrap'
import {LoginModalPopUp} from './LoginModalPopUp'
import { useState } from "react";
export const Header = () => {
    const [showPopUp,setShowPopUp]=useState(false)
    function hideFunction(){
        setShowPopUp(false)
    }
    return (
        <>
            <UI.Container fluid className="header">
                <UI.Row>
                    <UI.Col xs={12} sm={12} md={12} xl={1} lg={1} xxl={1} style={{ marginTop: "7px", marginBottom: "7px" }}>
                    </UI.Col>
                    <UI.Col xs={12} sm={12} md={12} xl={5} lg={5} xxl={5}>
                        <UI.Row>
                            <UI.Col xs={4} sm={4} md={4} xl={2} lg={2} xxl={2}>
                                <img
                                    src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"
                                    alt="Flipkart"
                                    height={22}
                                /><br />
                                <span
                                    style={{
                                        fontSize: "11px",
                                        paddingRight: "2px",
                                        color: "white",
                                        fontStyle: "italic",
                                    }}
                                >
                                    Explore
                                </span>
                                <span
                                    style={{
                                        color: "#F9E107",
                                        fontSize: "11px",
                                        fontStyle: "italic",
                                    }}
                                >
                                    Plus
                                </span>
                            </UI.Col>
                            <UI.Col xs={4} sm={4} md={4} xl={10} lg={10} xxl={10}>
                                <input type="text" className="form-control" placeholder="Search for products, brands and more"
                                    style={{ marginTop: "7px", align: "right", marginBottom: "7px", height: "35px", width: "100%" }}>
                                </input>
                            </UI.Col>
                        </UI.Row>
                    </UI.Col>
                    <UI.Col xs={12} sm={12} md={12} xl={3} lg={3} xxl={3} style={{ marginTop: "7px", marginBottom: "7px" }}>
                        <UI.Row>
                            <UI.Col xs={12} sm={12} md={12} xl={5} lg={5} xxl={5}>
                                <UI.Dropdown >
                                    <UI.Dropdown.Toggle variant="light" id="UI.Dropdown-basic" onClick={()=>setShowPopUp(true)}
                                     style={{ height: "35px", width: "130px", fontSize: "16px", color: "#2874f0" }}>
                                        <b>Login</b>
                                    </UI.Dropdown.Toggle>
                                    <UI.Dropdown.Menu style={{ width: "220px" }}>
                                        <UI.Dropdown.Item href="#/action-1">
                                            <div className="showLogin__info">
                                                <div>
                                                    <p>New customer?</p>
                                                </div>
                                                <div>
                                                    <p style={{ color: "#2874f0" }}>Sign Up</p>
                                                </div>
                                            </div>
                                        </UI.Dropdown.Item>
                                        <UI.Dropdown.Item href="#/action-2">Another action</UI.Dropdown.Item>
                                        <UI.Dropdown.Item href="#/action-3">Something else</UI.Dropdown.Item>
                                    </UI.Dropdown.Menu>
                                </UI.Dropdown>
                            </UI.Col>
                            <UI.Col xs={12} sm={12} md={12} xl={5} lg={5} xxl={5} style={{ marginTop: "7px", marginBottom: "7px" }}>
                                <span style={{ color: "white" }}><b>Become a Seller</b></span>
                            </UI.Col>
                            <UI.Col xs={12} sm={12} md={12} xl={2} lg={2} xxl={2}>
                                <UI.Dropdown >
                                    <UI.Dropdown.Toggle variant="light" id="UI.Dropdown-basic" style={{ height: "35px", width: "80px", fontSize: "16px", color: "#2874f0" }}>
                                        <b>More</b>
                                    </UI.Dropdown.Toggle>
                                    <UI.Dropdown.Menu style={{ width: "210px" }}>
                                        <UI.Dropdown.Item href="#/action-1">
                                            <div className="showLogin__info">
                                                <div>
                                                    <p>New customer?</p>
                                                </div>
                                                <div>
                                                    <p style={{ color: "#2874f0" }}>Sign Up</p>
                                                </div>
                                            </div>
                                        </UI.Dropdown.Item>
                                        <UI.Dropdown.Item href="#/action-2">Another action</UI.Dropdown.Item>
                                        <UI.Dropdown.Item href="#/action-3">Something else</UI.Dropdown.Item>
                                    </UI.Dropdown.Menu>
                                </UI.Dropdown>
                            </UI.Col>
                        </UI.Row>
                    </UI.Col>
                    <UI.Col xs={12} sm={12} md={12} xl={2} lg={2} xxl={2} style={{ marginTop: "9px", marginBottom: "7px" }}>
                              &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <span style={{ color: "white" }}><b>Cart</b></span>
                    </UI.Col>
                </UI.Row>
            </UI.Container>
        <LoginModalPopUp show={showPopUp} hide={hideFunction}/>
        </>
    )
}