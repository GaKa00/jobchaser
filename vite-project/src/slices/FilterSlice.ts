import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Job  from "../typescript/types";

interface FilterState {
  allJobs: Job[];
  filteredJobs: Job[];
}

const initialState: FilterState = {
  allJobs: [],
  filteredJobs: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setJobs(state, action: PayloadAction<Job[]>) {
      state.allJobs = action.payload;
      state.filteredJobs = action.payload;
    },
    searchJobs(state, action: PayloadAction<string>) {
      const searchTerm = action.payload.toLowerCase();
      state.filteredJobs = state.allJobs.filter((job) => {
        return (
          job.position.toLowerCase().includes(searchTerm) ||
          job.company.toLowerCase().includes(searchTerm) ||
          job.role.toLowerCase().includes(searchTerm) ||
          job.level.toLowerCase().includes(searchTerm) ||
          job.contract.toLowerCase().includes(searchTerm) ||
          job.location.toLowerCase().includes(searchTerm) ||
          job.languages.some((lang) =>
            lang.toLowerCase().includes(searchTerm)
          ) ||
          job.tools.some((tool) => tool.toLowerCase().includes(searchTerm))
        );
      });
    },
    filterByToolsAndLanguages(
      state,
      action: PayloadAction<{ tools: string[]; languages: string[] }>
    ) {
      const { tools, languages } = action.payload;
      state.filteredJobs = state.allJobs.filter((job) => {
        const matchesTools =
          tools.length === 0 || tools.every((tool) => job.tools.includes(tool));
        const matchesLanguages =
          languages.length === 0 ||
          languages.every((lang) => job.languages.includes(lang));
        return matchesTools && matchesLanguages;
      });
    },
  },
});

export const { setJobs, searchJobs, filterByToolsAndLanguages } =
  filterSlice.actions;

export const selectFilteredJobs = (state: { filter: FilterState }) =>
  state.filter.filteredJobs;

export default filterSlice.reducer;
