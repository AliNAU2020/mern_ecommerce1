import Axios from "axios";
import Cookie from "js-cookie";
import { CART_ADD_ITEM,CART_REMOVE_ITEM } from "../constants/cartConstants";

const addToCart = (productID,  qty) => async (dispatch) => {

  try{
    const { data } = await Axios.get("/api/products/" + productID);
    dispatch({
      type: CART_ADD_ITEM, payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty
      }
    })
  } catch (error) {

  }
}
const removeFromCart = (productID) => (dispatch, getState) =>{
  dispatch({ type: CART_REMOVE_ITEM, payload: productID });

  const { cart: { cartItems } } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
}
export { addToCart, removeFromCart}