import React from 'react'
import './Home.css';

function Home() {
  return (
    <div>
        <h1>Welcome</h1>
        
            <table className="central">
                <tr>
                    <th><p>SHOES</p></th>
                    <th><p>PANTS</p></th>
                    <th><p>SHIRT</p></th>
                </tr>
                <tr>
                    
                    <th className ="aisle"><a href="/products/shoes"><img  src={"http://d279m997dpfwgl.cloudfront.net/wp/2019/09/Allbirds-e1568130434882-1000x830.jpg"} alt="Shoes" /></a></th>
                    <th className ="aisle"><a href="/products/pants"><img  src={"https://imageio.forbes.com/specials-images/imageserve/606220240b2453fe70cafcb2/A-rack-of-second-hand-jeans/960x0.jpg?fit=bounds&format=jpg&width=960"} alt="Pants" /></a></th>
                    <th className ="aisle"><a href="/products/shirts"><img src={"https://cdn.shopify.com/s/files/1/0506/4097/8108/files/Shop_DRESS_SHIRTS_720x.png?v=1646780870"} alt="Shirt" /></a></th>
                </tr>
            </table>
    </div>
  )
}

export default Home