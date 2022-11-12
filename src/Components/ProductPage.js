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
import { LoginModalPopUp } from "./LoginModalPopUp"
import { useDispatch, useSelector } from "react-redux"
export const ProductPage = () => {
    let productId = localStorage.getItem('productId')
    let previousCount = useSelector(state => state.products.count)
    const products = useSelector(state => state.products.cartProducts)
    const [product, setProduct] = useState()
    const [showPopUp, setShowPopUp] = useState(false)
    const dispatch = useDispatch()
    const count=useSelector(state=>state.products.count)
    useEffect(() => {
        AjaxGet(PRODUCT_DETAILS_BY_ID + productId).then(res => {
            setProduct(res)
        })
    }, [])
    function hideFunction() {
        setShowPopUp(false)
    }
    function search_array(array, valuetofind) {
        for (let i = 0; i < array.length; i++) {
            if (array[i]['key']['id'] === valuetofind) {
                return array[i];
            }
        }
        return -1;
    }
    function AddToCart() {
        dispatch({ type: "UPDATE_COUNT_OF_PRODUCTS", payload: previousCount + 1 })
        let previousValue = localStorage.getItem('noOfProducts')
        previousValue = previousValue != null ? previousValue : 0
        let value = parseInt(previousValue) + 1
        localStorage.setItem('noOfProducts', value)
        if (localStorage.getItem('username') == null) {
            setShowPopUp(true)
        }
        else {
            let val=''
            if(localStorage.getItem('cartProducts')==null){
                val = search_array(products, product?.id)
                let values = products
                values.push({ key: product, value: 1 })
                localStorage.setItem('cartProducts',JSON.stringify(values))
            }
            else{
                let prods=JSON.parse(localStorage.getItem('cartProducts'))
                val=search_array(prods,product?.id)
                let countOfProducts = val.value
                countOfProducts = countOfProducts + 1
                let updates = products
                updates.some( (obj)=> {
                    if (obj.key['id'] == product?.id) {
                        obj.value = countOfProducts;
                        return true;
                    }
                });
                localStorage.setItem('cartProducts','')
                localStorage.setItem('cartProducts',JSON.stringify(updates))
            }
        }
    }
    function RemoveCart() {
        let newcount=count-1
        dispatch({ type: "UPDATE_COUNT_OF_PRODUCTS", payload: newcount })
        let previousValue = localStorage.getItem('noOfProducts')
        previousValue = previousValue != null ? previousValue : 0
        let value = parseInt(previousValue) - 1
        localStorage.setItem('noOfProducts', value)
    }
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
                                <UI.Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                                    <button type="button" className="btn btn-warning btn-lg" onClick={() => AddToCart()}>Add Item</button>
                                </UI.Col>
                                {count>0 &&
                                    <UI.Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                                        <button type="button" className="btn btn-danger btn-lg" onClick={() => RemoveCart()}>Remove</button>
                                    </UI.Col>
                                }
                                <UI.Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                                    <button type="button" className="btn btn-success btn-lg" onClick={() => AddToCart()}>Buy Now</button>
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
            <LoginModalPopUp show={showPopUp} hide={hideFunction} />
        </>
    )
}