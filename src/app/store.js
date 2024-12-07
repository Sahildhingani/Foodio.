import { configureStore } from "@reduxjs/toolkit";
import slicereducer from './Slices'
export const store=configureStore({
    reducer:slicereducer
    // +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});
export default store;