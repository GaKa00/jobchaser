import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store";
import Job from "../typescript/types";

interface FilterState {
  jobs: Job[];
}

const initialState: FilterState = {
  jobs: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterByToolsAndLanguages: (
      state,
      action: PayloadAction<{ tools: string[]; languages: string[] }>
    ) => {
      const { tools, languages } = action.payload;
      state.jobs = state.jobs.filter((job) => {
        return (
          tools.every((tool) => job.tools.includes(tool)) &&
          languages.every((language) => job.languages.includes(language))
        );
      });
    },
    searchJobs: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      state.jobs = state.jobs.filter((job) => {
        return (
          job.company.toLowerCase().includes(searchTerm) ||
          job.level.toLowerCase().includes(searchTerm) ||
          job.position.toLowerCase().includes(searchTerm) ||
          job.contract.toLowerCase().includes(searchTerm) ||
          job.role.toLowerCase().includes(searchTerm)
        );
      });
    },
  },
});

export const { filterByToolsAndLanguages, searchJobs } = filterSlice.actions;

export const selectFilteredJobs = (state: RootState) => state.filter.jobs; // Corrected selector

export default filterSlice.reducer;
