const initState = {
    products: JSON.parse(localStorage.getItem("localStore")) || [
        {
            name: "Lego Superman",
            stock: 5,
            price: 15,
            image: "https://images.unsplash.com/photo-1513384312027-9fa69a360337?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1771&q=80"
        },
        {
            name: "Lego Spaceman",
            stock: 10,
            price: 5,
            image: "https://images.unsplash.com/photo-1560167016-022b78a0258e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1767&q=80"
        },
        {
            name: "Lego Stormtrooper",
            stock: 15,
            price: 10,
            image: "https://images.unsplash.com/photo-1472457974886-0ebcd59440cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
        },
        {
            name: "Lego Batman",
            stock: 20,
            price: 25,
            image: "https://images.unsplash.com/photo-1584847642060-a46e239155a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
        }
    ],
    cart: JSON.parse(localStorage.getItem("localCart")) || []
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'add_product') {
        let newProduct = state.products;
        newProduct.push(action.product);
        return {
            ...state,
            products: newProduct
        }
    }
    if (action.type === 'add_to_cart') {
        let newCartItem = state.cart;
        newCartItem.push(action.product);
        return {
            ...state,
            cart: newCartItem
        }
    }
    return state;
}

export default rootReducer;
