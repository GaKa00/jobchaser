import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setJobs, searchJobs, selectFilteredJobs } from "../slices/FilterSlice"; // Adjust import path based on your project structure

import Jobcard from "../components/Jobcard"; 
import  Job from "../typescript/types"; 

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
        dispatch(setJobs(data)); // Use setJobs action to initialize job data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch]);

  const handleSearch = (searchTerm: string) => {
    // Dispatch action to search jobs based on search term
    dispatch(searchJobs(searchTerm));
  };

  return (
    <>
      <main>

        
        
        <Jobcard jobdata={jobData} onSearch={handleSearch} />
      </main>
    </>
  );
}

export default App;
