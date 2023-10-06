// authActions.js

export const signIn = (user) => ({
    type: 'SIGN_IN',
    payload: user,
  });
  
  export const signOut = () => ({
    type: 'SIGN_OUT',
  });
  
  // Implement other authentication-related actions as needed
  