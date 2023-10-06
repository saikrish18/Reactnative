// authReducer.js

const initialState = {
    user: null,
    isAuthenticated: false,
    // Add other authentication-related state here
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGN_IN':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        };
      case 'SIGN_OUT':
        return {
          ...state,
          user: null,
          isAuthenticated: false,
        };
      // Add more cases for authentication-related actions
      default:
        return state;
    }
  };
  
  export default authReducer;
  