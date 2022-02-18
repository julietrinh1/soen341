import React from 'react'
import './Home.css';

function Home() {
  return (
    <div>
        
        
        <h1></h1>
        <h1>Welcome</h1>
        
            <table class="central">
                <tr>
                    <th><p>SHOES</p></th>
                    <th><p>PANTS</p></th>
                    <th><p>SHIRT</p></th>
                </tr>
                <tr>
                    
                    <th class ="aisle"><a href="/"><img  src={"http://d279m997dpfwgl.cloudfront.net/wp/2019/09/Allbirds-e1568130434882-1000x830.jpg"} alt="Shoes" /></a></th>
                    <th class ="aisle"><a href="/"><img  src={"https://imageio.forbes.com/specials-images/imageserve/606220240b2453fe70cafcb2/A-rack-of-second-hand-jeans/960x0.jpg?fit=bounds&format=jpg&width=960"} alt="Pants" /></a></th>
                    <th class ="aisle"><a href="/"><img src={"https://www.brooksbrothers.com/on/demandware.static/-/Sites-brooksbrothers-Library/default/images/site/20220209/2022-0209_HP-MIDDLE_iconicnonirons_sm-md-lg.jpg"} alt="Shirt" /></a></th>
                </tr>
            </table>
        
    
        
  
        
    </div>
  )
}

export default Home