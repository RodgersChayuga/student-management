import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

interface FilterState {
  country: string;
  university: string;
  duration: string;
  language: string;
}

const initialState: FilterState = {
  country: "All",
  university: "All",
  duration: "All",
  language: "All",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateCountryFilter: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
    updateUniversityFilter: (state, action: PayloadAction<string>) => {
      state.university = action.payload;
    },
    updateDurationFilter: (state, action: PayloadAction<string>) => {
      state.duration = action.payload;
    },
    updateLanguageFilter: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const {
  updateCountryFilter,
  updateUniversityFilter,
  updateDurationFilter,
  updateLanguageFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
