import React, { useContext } from 'react'
import { MyContext } from './Context'

function Wishlist() {
    const {like}=useContext(MyContext)
    console.log("liked items",like);

  return (
    <div style={{padding:"20px",fontFamily:"sans-serif"}}>
        <h2 style={{textAlign:'center',marginBottom:'20px'}}>liked products</h2>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px"}}>

        {
            like.length>0 ? like.map(item=>(
                <div key={item.productname} style={{width:"250px",border:"1px solid black",borderRadius:"10px",boxShadow:"0 2px 8px",padding:"10%"}}>
                    <img src={item.image} alt={item.productname} style={{width:"100%",height:"200px",objectFit:"cover",borderRadius:"5px"}} />
                    <h4 style={{marginTop:"10px"}}>{item.productname}</h4>
                    <p style={{color:"#555"}}>{item.category}</p>
                    <h3 style={{color:"#1234"}}>${item.price}</h3>
                    <p style={{fontSize:"14px",color:"#888"}}>Quantity:{item.quantity}</p>    
                </div>
                
            )):(
                <p style={{textAlign:"center",color:"#999"}}>No liked item displayed</p>
            )
        }
        </div>
    </div>
    
  );
}

export default Wishlist
