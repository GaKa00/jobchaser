import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterByToolsAndLanguages,
  searchJobs,
  selectFilteredJobs,
} from "../slices/FilterSlice"; // Adjust import path based on your project structure

import Jobcard from "../components/Jobcard"; // Assuming you have Jobcard component in a separate file
import Job  from "../typescript/types"; // Importing Job type

function App() {
  const dispatch = useDispatch();
  const jobData = useSelector(selectFilteredJobs);

  useEffect(() => {
    fetch("./src/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: Job[]) => {
        // Dispatch action to set initial job data in Redux store
        dispatch(filterByToolsAndLanguages({ tools: [], languages: [] })); // Initialize with empty tools and languages
        // Dispatch action to add fetched job data to Redux store
        dispatch(searchJobs(JSON.stringify(data))); // Convert data to string for searchJobs action
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch]);

  // const handleSearch = (searchTerm: string) => {
  //   // Dispatch action to search jobs based on search term
  //   dispatch(searchJobs(searchTerm));
  // };

  return (
    <>
      <main>
        {/* Pass job data and search function directly to Jobcard component */}
        <Jobcard jobdata={jobData}  />
      </main>
    </>
  );
}

export default App;
