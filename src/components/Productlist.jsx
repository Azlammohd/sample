import { useContext, useState } from "react";
import { MyContext } from "./Context";
import { Link } from "react-router-dom";

function Productlist() {
    const {product,like,setLike,cart,setCart}=useContext(MyContext)
    const [searchquery,setSearchquery]=useState('')
    const [filteredData,setFilteredData]=useState(product)

    function handleLike(prod){
        if(like.includes(prod)){
            setLike(like.filter(item=>item!==prod))
        }
        else{
            setLike([...like,prod])
        }
    }
    console.log("liked",like);

    function handleAddtocart(prod){
        if(cart.includes(prod)){
            setCart(cart.filter(item=>item!==prod))
        }
        else{
            setCart([...cart,prod])
        }
    }
    console.log("Added",cart);

    function handleSearch(e){
        const query=e.target.value
        setSearchquery(query)

        const filtered=product.filter(product=>product.productname.toLowerCase().includes(query.toLowerCase())||
            product.price.toString().includes(query)||product.category.toLowerCase().includes(query.toLowerCase()))
        setFilteredData(filtered)
    }
    console.log("filter",filteredData);

  return (
    <div>
        <h2 style={{textAlign:"center"}}>product details</h2>
            <input style={{padding:"4px 5px",border:"1px solid black",}} type="text" placeholder="search" value={searchquery} onChange={handleSearch}/>
        <div style={{gap:"20px",display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"10px"}}>
            <button style={{width:"100px",height:"40px"}}><Link to='/Wishlist'>Wishlist</Link></button>
            <button style={{width:"40px",height:"40px"}}><Link to='/Cartlist'>cart</Link></button><br/>
    
            <div style={{display:"flex",flexWrap:"wrap",gap:"20px",marginLeft:"60px"}}>

                {
                    
                    
                    filteredData.map((pdt)=>
                    <div style={{border:"1px solid black",borderRadius:"5px",padding:"10px",marginLeft:"10px",textAlign:"center"}}>
                        <b>{pdt.category}<br/></b>
                        <img src={pdt.image} alt="" style={{width:"250px",height:"250px"}} /><br/>
                        
                        name:{pdt.productname}
                        price:{pdt.price}<br/>
                        Quantity:{pdt.quantity}<br/>
                        <button onClick={()=>handleLike(pdt)} style={{marginLeft:"-10px"}}>
                        {
                            like.includes(pdt)?"unlike":"like"
                        }
                        </button>
                        <button onClick={()=>handleAddtocart(pdt)} style={{marginLeft:"30px"}}>
                        {
                            cart.includes(pdt)?"Added":"Add to cart"
                        }
                        </button>
                    </div>
                    )
                }
                
            
            </div>
        </div>
    </div>    
  )
}

export default Productlist
