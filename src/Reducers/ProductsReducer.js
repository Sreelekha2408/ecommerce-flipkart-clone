const initialSate = {
  allProducts: [],
  filteredProducts: [],
  cartProducts: [],
  count: 0
}

const ProductReducer = (state = initialSate, action) => {
  switch (action.type) {
    case "ALL_PRODUCTS":
      return {
        ...state,
        allProducts: action.payload
      }

    case "FILTERED_PRODUCTS":
      return {
        ...state,
        filteredProducts: action.payload
      }

    case 'ADD_PRODUCT_TO_CART':
      return {
        ...state,
        ...state.cartProducts,
        cartProducts: action.payload
      }
    case 'UPDATE_COUNT_OF_PRODUCTS':
      return {
        ...state,
        count: action.payload
      }
    default:
      return state
  }
}

export default ProductReducer  