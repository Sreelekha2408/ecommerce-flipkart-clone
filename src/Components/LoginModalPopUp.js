import { Modal } from "react-bootstrap"
import * as UI from 'react-bootstrap'
import '../Styles/Modal.css'
export const LoginModalPopUp = (props) => {
    return (
        <>
            <Modal show={props.show} onHide={props.hide} size={'lg'} centered>
                <div className="closeButton" onClick={props.hide}>
                    <UI.CloseButton style={{ fontSize: "25px" }} />
                </div>
                <Modal.Body>
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
                                        />
                                        <div className="underline"></div>
                                        <label>Enter Email/Mobile number</label>
                                    </div>
                                    <div className="input__data">
                                        <input
                                            type="text"
                                            required
                                        />
                                        <div className="underline"></div>
                                        <label>Enter Password</label>
                                    </div>
                                </div>
                                <div className="form__button">
                                    <button
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
                </Modal.Body>
            </Modal>
        </>
    )
}