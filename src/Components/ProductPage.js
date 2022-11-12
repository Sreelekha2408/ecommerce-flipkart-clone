/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import { Footer } from "./Footer"
import { Header } from "./Header"
import * as UI from 'react-bootstrap'
import { useEffect, useState } from "react"
import { AjaxGet } from "../API/AjaxCalls"
import { PRODUCT_DETAILS_BY_ID } from "../API/Urls"
import '../Styles/Home.css'
import { AiFillStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
export const ProductPage = () => {
    let productId = localStorage.getItem('productId')
    const [product, setProduct] = useState()
    useEffect(() => {
        AjaxGet(PRODUCT_DETAILS_BY_ID + productId).then(res => {
            setProduct(res)
        })
    }, [])
    return (
        <>
            <Header type="product" />
            <br></br>
            <UI.Container>
                <UI.Row>
                    <UI.Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                        <UI.Card>
                            <UI.Card.Img variant="top" src={product?.image} height={"auto"} width={"auto"} />
                            <br></br>
                            <UI.Row>
                                <UI.Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                    <UI.Button variant="flat" size="xxl">
                                        Add to Cart
                                    </UI.Button>
                                </UI.Col>
                                <UI.Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                <UI.Button variant="buy" size="xxl">
                                        Buy Now
                                    </UI.Button>
                                </UI.Col>
                            </UI.Row>
                            <br></br>
                        </UI.Card>
                    </UI.Col>
                    <UI.Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                        <UI.Card>
                        <UI.Card.Body>
                                        <UI.Card.Title style={{ height: 'auto' }}>{product?.title}</UI.Card.Title>
                                        <UI.Card.Subtitle className="mb-2 text-muted">{product?.category}</UI.Card.Subtitle>
                                        <UI.Card.Text>
                                            {product?.description}
                                        </UI.Card.Text>
                                        <button type="button" className="btn btn-success btn-sm">{product?.rating?.rate}<AiFillStar /></button> <span>{product?.rating?.count}</span> Ratings&nbsp;<img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" height={30} width={100}></img>
                                        <br></br><BiRupee size={22} /><span style={{ fontSize: "20px" }}><b>{product?.price}</b></span>
                                    </UI.Card.Body>
                        </UI.Card>
                    </UI.Col>
                </UI.Row>
            </UI.Container>
            <Footer />
        </>
    )
}