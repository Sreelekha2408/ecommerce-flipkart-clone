const initialSate = {  
    allProducts:[],
    filteredProducts:[]
  }
  
  const ProductReducer = (state = initialSate, action) =>{  
    switch (action.type) {
      case "ALL_PRODUCTS":
       return {
           ...state,
           allProducts:action.payload
       }
  
      case "FILTERED_PRODUCTS":
        return {
          ...state,
          filteredProducts:action.payload
        }
  
      default:
        return state
    }
  }
  
  export default ProductReducer  