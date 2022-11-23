import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const pokeNameSlice = createSlice({
		name: 'pokeName',
    initialState: "",
    reducers: {
        changeName: (state, actions) => {
            const inputName = actions.payload;
            return inputName
        }
    }
})

export const { changeName } = pokeNameSlice.actions;

export default pokeNameSlice.reducer;