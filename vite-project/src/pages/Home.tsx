import Job from "../typescript/types";

{
  /* App tar en usestate på filtreradejob, defaultas som jobdata i formen job[]  för att visa alla element till start
app skapar en funktion handleSearch som tar enot filtrerad data och settar filtreradejobb till filtrerad data

Searchbar Tar emot  jobdata, och  handlesearch funktion som props.
Jobdata för att ha tillgång till den data som ska filtreras, och handleSearch för att passa tillbaka till APP


Searchbar typar propsen, och definerar en state för att ta emot input som skrivs
Searchbar skapar en funktion handleChange för att hantera ändring till input.

handleChange en variabel searchterm, vilket är lika med settad search input
i handleChange skapar en filter metod på jobdata, som jämför jobdata med searchinput

efter filtrerad data, passeras den tillbaka till App via handleSearch
den uppdaterade handleSearch settar filtreradeJobs
den uppdaterade filtreradeJobs passeras till Jobcard, och visar nu endast de filtrerade job som Jobcards.

*/
}
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  searchJobs,
  filterByToolsAndLanguages,
  selectFilteredJobs,
} from "../slices/FilterSlice"; // Adjust import path based on your project structure

import Jobcard from "../components/Jobcard"; // Assuming you have Jobcard component in separate file

function Home() {
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
        dispatch(filterByToolsAndLanguages(data));
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
        {/* Pass job data and search function directly to Jobcard component */}
        <Jobcard jobdata={jobData} handleSearch={handleSearch} />
      </main>
    </>
  );
}

export default Home;

