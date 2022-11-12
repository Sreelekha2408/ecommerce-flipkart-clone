import { useEffect, useState } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import * as UI from 'react-bootstrap'
import { AiFillStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
export const Cart=()=>{
    const [cartProducts,setCartProducts]=useState()
    useEffect(()=>{
        if(localStorage.getItem('cartProducts')==null){
            setCartProducts([])
        }
        else{
            setCartProducts(JSON.parse(localStorage.getItem('cartProducts')))
        }
    },[])
    return(
        <>
        <Header></Header>
        <br/>
        <UI.Container className="container">
                    <UI.Row>
                        {cartProducts?.length>0 &&
                        cartProducts.map((item) => {
                            return <UI.Col sm={12} xs={12} md={12} lg={3} xl={3} xxl={3}>
                                <UI.Card  className="cardStyles"
                                style={{ height: '600px', borderColor: "white",cursor: "pointer"  }}>
                                    <UI.Card.Img variant="top" src={item?.key?.image} height={300} width={80} />
                                    <UI.Card.Body>
                                        <UI.Card.Title style={{ height: 'auto' }}>{item?.key?.title}</UI.Card.Title>
                                        <UI.Card.Subtitle className="mb-2 text-muted">{item?.key?.category}</UI.Card.Subtitle>
                                        <UI.Card.Text>
                                        </UI.Card.Text>
                                        <button type="button" className="btn btn-success btn-sm">{item?.key?.rating?.rate}<AiFillStar /></button>
                                         (<span>{item?.key?.rating?.count}</span>)&nbsp;<img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" 
                                         height={30} width={100}></img>
                                        <br></br><BiRupee size={22} /><span style={{ fontSize: "20px" }}><b>{item?.key?.price}</b></span>
                                       <br/> <button type="button" className="btn btn-warning"><b>No. of Items: </b>{item?.value}</button>
                                    </UI.Card.Body>
                                </UI.Card>
                                <br />
                            </UI.Col>
                        }
                        )}
                    </UI.Row>
                </UI.Container>
        <Footer/>
        </>
    )
}