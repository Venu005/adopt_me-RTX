import { createSlice } from "@reduxjs/toolkit";

export const adoptedPetSlice = createSlice({
  name: "adoptedPet",
  initialState: {
    value: null,
  },
  reducers: {
    adopt: (state, action) => {
      state.value = action.payload;
    },
  },
});
/* so adopt is like action to be performed here  */
export const { adopt } = adoptedPetSlice.actions;
export default adoptedPetSlice.reducer;
 /*you can test all the individual things now,but with context it's kinfd of hard(I don't know for sure but we don't do it anyway so yeah!!) */