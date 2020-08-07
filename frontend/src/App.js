import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const openMenu = ( ) => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = ( ) => {
    document.querySelector(".sidebar").classList.remove("close");
  }
  return (
    <div className = "grid-container">
    <header className= "header">
    <div className = "brand">
        <button onClick={openMenu}>
            &#9776;
        </button>
        <a href = "index.html">amazon 101</a>
    </div>
    <div className = "header-links">
        <a href = "cart.html">Cart</a>
        <a href = "signin.html">Sign In</a>
    </div>
</header>
<aside className = "sidebar">
    <h3>Shopping Categories</h3>
    <button className = "sidebar-close-button" onClick={closeMenu}>x</button>
    <ul>
        <li>
            <a href = "index.html">Backpacks</a>
        </li>
        <li>
            <a href = "index.html">Duffle Bags</a>  
        </li>
    </ul>
</aside>
    <main className = "main">
        <div className = "content">
            <ul className = "products">
                <li>
                    <div className = "product">
                        <img className = "product-image" src = "/images/b1.jpg" alt = "product" />
                        <div className = "product-name">
                            <a href = "product.html"> Slim Work Backpack</a> 
                        </div>
                        <div className = "product-brand">Briggs & Riley</div>
                        <div className = "product-price">$315</div>
                        <div className = "product-rating">4.5 stars (10 reviews)</div>
                    </div>
                </li>
                <li>
                    <div className = "product">
                        <img className = "product-image" src = "/images/b2.jpg" alt = "product" />
                        <div className = "product-name">
                            <a href = "product.html"> TSA ScanSmart Laptop Backpack</a> 
                        </div>
                        <div className = "product-brand">SwissGear</div>
                        <div className = "product-price">$150</div>
                        <div className = "product-rating">4.5 stars (10 reviews)</div>
                    </div>
                </li>
                <li>
                    <div className = "product">
                        <img className = "product-image" src = "/images/b3.jpg" alt = "product" />
                        <div className = "product-name">
                            <a href = "product.html">AntiTheft Work Backpack</a> 
                        </div>
                        <div className = "product-brand">John Kart</div>
                        <div className = "product-price">$65</div>
                        <div className = "product-rating">4.5 stars (10 reviews)</div>
                    </div>
                </li>
                <li>
                    <div className = "product">
                        <img className = "product-image" src = "/images/b4.jpg" alt = "product" />
                        <div className = "product-name">
                            <a href = "product.html"> Gym Duffle Bag</a> 
                        </div>
                        <div className = "product-brand">Nike</div>
                        <div className = "product-price">$75</div>
                        <div className = "product-rating">4.5 stars (10 reviews)</div>
                    </div>
                </li>
                <li>
                    <div className = "product">
                        <img className = "product-image" src = "/images/b5.jpg" alt = "product" />
                        <div className = "product-name">
                            <a href = "product.html">Gym & Work Duffle Bag </a> 
                        </div>
                        <div className = "product-brand">WolfWarriorX</div>
                        <div className = "product-price">$315</div>
                        <div className = "product-rating">4.5 stars (10 reviews)</div>
                    </div>
                </li>
                <li>
                    <div className = "product">
                        <img className = "product-image" src = "/images/b6.jpg" alt = "product" />
                        <div className = "product-name">
                            <a href = "product.html"> Travel Duffle Bag</a> 
                        </div>
                        <div className = "product-brand">Wowbox</div>
                        <div className = "product-price">$175</div>
                        <div className = "product-rating">5 stars (10 reviews)</div>
                    </div>
                </li>
                
            </ul>
        </div>
        
    </main>
    <footer className = "footer">All rights reserved.</footer>
</div>
  );
}

export default App;
