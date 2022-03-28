import ACTypes from "../types/baraholkaTypes";

const initState = {
  category: [],
};

export const baraholkaReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTypes.ADD_PRODUCT:
      return { ...state, category: action.payload };

    case ACTypes.ALL_PRODUCTS_REDUX:
      return { ...state, category: action.payload };

    case ACTypes.DEL_PRODUCTS_REDUX:
      return {
        ...state,
        category: state.category.filter(
          (prod) => prod.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
