import { configureStore } from "@reduxjs/toolkit";

//counter
import counterSlice from "./features/CounterSlice";

//post
import postsSlice from "./featuresPost/postsSlice";

const store = configureStore({
  reducer: {

    //counter
    //counter: counterSlice,

    //post
    posts: postsSlice,
  },
});

export default store;
