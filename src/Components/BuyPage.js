import React,{useState,useEffect}  from "react"
import Axios from "axios"
import CartItem from "./CartItem"
import {random,commerce,datatype} from "faker"
import {Container,Col,Row} from "reactstrap"

const localurl="https://api.npoint.io/d3834bac7b6c13a61c3c"
// const apiKey="563492ad6f917000010000010556dba7919e4a499b518ab9a44267b9";
// const url="https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"

 const BuyPage=({addInCart})=>{
     const [product,setProduct]=useState([]);

//      const fetchPhotos=async()=>{
//          const {data}=await Axios.get(url,{
//              header:{
//                  Authorization:apiKey
//              }
//          })
//     const {photos}=data;

//     const allProduct=photos.map(photo=>({
//         smallImage:photo.src.medium,
//         tinyImage:photo.src.tiny,
//         productName:random.word(),
//         productPrice:commerce.price(),
//         id:datatype.uuid()
//     }))
//     setProduct(allProduct);
//      }
     const fetchPhotos=async()=>{
        const {data}=await Axios.get(localurl,{})
    
    const {photos}=data;

    const allProduct=photos.map(photo=>({
        smallImage:photo.src.medium,
        tinyImage:photo.src.tiny,
        productName:random.word(),
        productPrice:commerce.price(),
        id:datatype.uuid()
    }))
    setProduct(allProduct);
};
    useEffect(()=>{
        fetchPhotos();
    },[]);

    return(
        <Container fluid>
            <h1 className="text-success text-center">
                Buy Page</h1>
                <Row>
                    {product.map(product=>(
                        <Col md={4} key={product.id}>
                            <CartItem product={product} addInCart={addInCart}/>
                        </Col>
                    ))}
                </Row>
        </Container>
    )
 }
 export default BuyPage;