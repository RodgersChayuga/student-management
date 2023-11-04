import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFilter {
  country: string;
  university: string;
  duration: string;
  language: string;
}

const initialState: IFilter = {
  country: "",
  university: "",
  duration: "",
  language: "",
};

export const FilterSlice = createSlice({
  name: "filter",
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

export default FilterSlice.reducer;

export const {
  updateCountryFilter,
  updateUniversityFilter,
  updateDurationFilter,
  updateLanguageFilter,
} = FilterSlice.actions;
