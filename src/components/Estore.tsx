import { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Estore(){
    const [myData,setMyData]=useState([]);
     
         const getData=async()=>{
        
            const res= await fetch("https://fakestoreapi.com/products");
            setMyData(await res.json())
             console.log(myData)
         }
      useEffect(()=>{
        getData()
        },[])
return(
    <>
        <Row xs={1} md={4} className="g-4" >
      {myData.map((curElement) => (
        <Col key={curElement.id} className="group flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md">
        
  <a className="relative flex overflow-hidden" href="#">
  <div className="max-w-4xl mx-auto">
    <img className="hover:scale-150 transition duration-500 cursor-pointer object-cover h-60 border-white bg-white"
         src={curElement.image} />
</div>
   
    <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
      <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </a>
  <div className="mt-4 px-5 pb-3.5">
    <a href="#">
      <h5 className="text-xl tracking-tight text-slate-900">{curElement.title}</h5>
    </a>
    <div className="mt-2 flex items-center justify-between">
      <p>
        <span className="text-3xl font-bold text-slate-900">{curElement.price}$</span>
          </p>
    </div>
    <button className="py-3 w-full text-center font-semibold max-w-xs bg-gray-900 pt-0 text-lg text-white transition hover:bg-gray-700">
       Add to cart
    </button>
  </div>
              </Col>
      ))}
    </Row>
    </>
)
}
export default Estore;