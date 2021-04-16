import "./css/cart.css"
import shoes1 from "./img/shoes1.webp";
import shoes2 from "./img/shoes2.webp";

function Cart() {
    return (
        <>
            <div className="container">
                <div className="itemCard">
                    <img src={shoes1}alt="" id="itemImg" />

                    <div className="itemDesc">
                    <p>Product Name</p>
                    <p>Small Description</p>
                    <p>price</p>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
export default Cart;