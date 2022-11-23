import { configureStore } from "@reduxjs/toolkit";
import pokeNameSlice  from "./slice/pokeName.slice";

export default configureStore({
    reducer: {
        pokeName: pokeNameSlice,
    }
})