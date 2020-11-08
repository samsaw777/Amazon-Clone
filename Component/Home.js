import React from 'react'
import "../App.css";
import Product from './Product.js'
import Banner from "./banner.png"
import Harry from './harry.png'
import Iphone from './iphone.png'
import JBL from './jbl.png'
import Mackbook from './mackbook.png'
import Monitor from './acer.png'
import SSD from './ssd.png'
function Home() {
    return (
        <div className="home">
            <div className="home_div">
                <img src={Banner} alt="Banner" className="home_Image" />
            </div>
            {/* Product will have a id, title, price, image, rating */}
            <div className="home_row">
            <Product 
                id="123"
                title="JBL Flip 4 Portable Wireless Speaker with powerful Bass and Mic(Grey)"
                pricing={9999.00}
                rating={4}
                image={JBL}
                orders={22786}
            />
            <Product 
                id="1234"
                title="J.k.Rowling Harry Potter and the Philosopher's Stone"
                pricing={399}
                rating={5}
                image={Harry}
                orders={8528}
            />
            </div>
            <div className="home_row">
            <Product 
                id="12345"
                title="Apple iPhone 11 Pro Max(64GB)- Midnight Green"
                pricing={117100}
                rating={5}
                image={Iphone}
                orders={419}
            />
            <Product 
                id="123456"
                title="Apple MackBook Pro(16-inch, 16GB RAM, 512GB Storage, 2.6 Hz 9th GEn Intel Core i7) - Space Grey"
                pricing={199900}
                rating={5}
                image={Mackbook}
                order={112}
            />
            <Product 
                id="1234567"
                title="Samsung T5 1TB USB 3.1 Gen 2 (10Gbps, Type-C) External Solid State Drive(Portable SSD) Deep Black"
                pricing={23999}
                rating={4}
                image={SSD}
                orders={4}
            />
            </div>
            <div className="home_row">
            <Product 
                id="12345678"
                title='Acer DM431K 43" LEB Monitor IPS(4k UHD) 3840 x 2160@60 Hz, 2 x 5.0W Inbuilt Speakers, VGA, DisplayPort, HDMI / 5ms / 250 nit Brightness'
                pricing={51999}
                rating={4}
                image={Monitor}
                orders={4}
            />
            </div>
        </div>
    )
}

export default Home
