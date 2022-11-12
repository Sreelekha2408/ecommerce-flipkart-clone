import { Modal } from "react-bootstrap"
import * as UI from 'react-bootstrap'
import '../Styles/Modal.css'
import { useState } from "react"
import Swal from "sweetalert2"
export const LoginModalPopUp = (props) => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    function LoginFunction(){
        if(username!=='9879812345' || password!=='admin@123'){
            Swal.fire({icon:"warning",text:"Invalid Username/Password"}).then(function(){
                setUsername('')
                setPassword('')
            })
        }
        else{
            localStorage.setItem('username','admin')
            Swal.fire({icon:"success",text:"LoggedIn Successfully"}).then(function(){
                props.hide()
            })
        }
    }
    return (
        <>
            <Modal show={props.show} onHide={props.hide} size={'lg'} centered>
                {/* <div className="closeButton" onClick={props.hide}>
                    <UI.CloseButton style={{ fontSize: "25px" }} />
                </div> */}
                {/* <Modal.Body> */}
                {/* <UI.CloseButton style={{ fontSize: "25px" }} /> */}
                    <div className="modalL">
                        <div className="modalL__left">
                            <div className="modalLLeft__top">
                                <h1>Login</h1>
                                <p>Get access to your Orders, Wishlist and Recommendations</p>
                            </div>
                        </div>
                        <div className="modalL__right">
                            <div className="form">
                                <div className="wrapper">
                                    <div className="input__data">
                                        <input
                                            type="text"
                                            required
                                            value={username}
                                            placeholder="Enter Email/Mobile Number"
                                            onChange={(e)=>setUsername(e.target.value)}
                                        />
                                        <div className="underline"></div>
                                        {/* <label>Enter Email/Mobile number</label> */}
                                    </div>
                                    <div className="input__data">
                                        <input
                                            type="password"
                                            required
                                            value={password}
                                            onChange={(e)=>setPassword(e.target.value)}
                                            placeholder="Enter Password"
                                        />
                                        <div className="underline"></div>
                                        {/* <label>Enter Password</label> */}
                                    </div>
                                </div>
                                <div className="form__button">
                                    <button onClick={()=>LoginFunction()}
                                        style={{ cursor: "pointer" }}
                                    >
                                        Login
                                    </button>
                                </div>
                                <div>
                                    <div style={{ marginLeft: "140px", padding: "15px" }}>Or</div>
                                    <div className="form__button1">
                                        <button>Request OTP</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </Modal.Body> */}
            </Modal>
        </>
    )
}