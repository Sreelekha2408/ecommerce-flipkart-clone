/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { AjaxGet } from "../API/AjaxCalls"
import { PRODUCTS_URL } from "../API/Urls"
import { Header } from "./Header"
import * as UI from 'react-bootstrap'
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import '../Styles/Home.css'
import { Footer } from "./Footer"
import { useDispatch, useSelector } from "react-redux"
export const Home = () => {
    const [products, setProducts] = useState([])
    const filteredProductsFromStore=useSelector(state=>state.filteredProducts)
    const dispatch=useDispatch()
    const [allProducts, setAllProducts] = useState([])
    const [check,setCheck]=useState([])
    const categories=[{key:"men's clothing",value:"Men's Clothing"},
    {key:"electronics",value:"Electronics"},
    {key:"women's clothing",value:"Women's Clothing"},
    {key:'jewelery',value:"Jewellery"}]
    useEffect(() => {
        AjaxGet(PRODUCTS_URL).then(res => {
            dispatch({type:"ALL_PRODUCTS",payload:res})
            dispatch({type:"FILTERED_PRODUCTS",payload:res})
            setProducts(res)
            setAllProducts(res)
        })
    }, [])
    useEffect(()=>{
        if(filteredProductsFromStore!==undefined && filteredProductsFromStore.length>0){
            setProducts(filteredProductsFromStore)
        }
    },[filteredProductsFromStore])
    function getSearchData(){
        let filteredProducts=allProducts.filter(item => check.includes(item.category));
        dispatch({type:"FILTERED_PRODUCTS",payload:filteredProducts})
        setProducts(filteredProducts)
    }
    function getCheckValues(e){
        if(e.target.checked){
            let vals=check
            vals.push(e.target.value)
            setCheck(vals)
        }
        else{
            let removed=check.filter(i=>i!=e.target.value)
           setCheck(removed)
        }
    }
    function openProductPage(item){
        localStorage.removeItem('productId')
        localStorage.setItem('productId',item.id)
        window.open('http://localhost:3000/productPage', '_blank', 'noopener,noreferrer');
    }  
    return (
        <>
            <Header></Header>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <br></br>
                <UI.Container fluid>
                    <UI.Row className='alert alert-info'>
                        {categories.map(cat=>{
                            return (
                            <UI.Col sm={12} xs={12} md={12} lg={2} xl={2} xxl={2}>
                            <input type="checkbox" value={cat.key} style={{height:'15px',width:"15px"}}
                            onClick={(e)=>getCheckValues(e)}></input>&nbsp;&nbsp;<b>{cat.value}</b>
                            </UI.Col>
                            )
                        })
                        }
                        <UI.Col sm={12} xs={12} md={12} lg={3} xl={3} xxl={3}>
                        <button type="button" className="btn btn-sm btn-warning" style={{width:"150px"}}
                        onClick={()=>getSearchData()}>Search</button>
                        </UI.Col>
                    </UI.Row>
                    </UI.Container>
                <UI.Container fluid>
                    <UI.Row>
                        {products?.length>0 &&
                        products.map((item) => {
                            return <UI.Col sm={12} xs={12} md={12} lg={2} xl={2} xxl={2}>
                                <UI.Card  className="cardStyles" onClick={()=>openProductPage(item)}
                                style={{ height: '600px', borderColor: "white",cursor: "pointer"  }}>
                                    <div
                                        style={{
                                            textAlign: "right",
                                            cursor: "pointer",
                                            lineHeight: "normal",
                                            // color: likeColor
                                        }}>
                                        < AiOutlineHeart
                                            style={{ fontSize: 22 }}
                                        />
                                    </div>
                                    <UI.Card.Img variant="top" src={item.image} height={330} width={80} />
                                    <UI.Card.Body>
                                        <UI.Card.Title style={{ height: 'auto' }}>{item.title}</UI.Card.Title>
                                        <UI.Card.Subtitle className="mb-2 text-muted">{item.category}</UI.Card.Subtitle>
                                        <UI.Card.Text>
                                        </UI.Card.Text>
                                        <button type="button" className="btn btn-success btn-sm">{item?.rating?.rate}<AiFillStar /></button>
                                         (<span>{item?.rating?.count}</span>)&nbsp;<img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" 
                                         height={30} width={100}></img>
                                        <br></br><BiRupee size={22} /><span style={{ fontSize: "20px" }}><b>{item.price}</b></span>
                                    </UI.Card.Body>
                                </UI.Card>
                                <br />
                            </UI.Col>
                        }
                        )}
                    </UI.Row>
                </UI.Container>
            </div>
            <Footer/>
        </>
    )
}