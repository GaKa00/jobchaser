
import "./App.css";
import { useEffect, useState } from "react";

type Job = {
  id: number;
  company: string;
  logo: string;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};
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

function App() {

  // function ProtectedRoute() {
  //   const isAuthenticated = false;

  //   return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
  // }


  const [jobData, setJobData] = useState<Job[]>([]);

  useEffect(() => {
    fetch("./src/data.json") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: Job[]) => {
        setJobData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


 
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobData);

  const handleSearch = (filteredData: Job[]) => {
    setFilteredJobs(filteredData);
  };

  return (
    <>
      <div className="bg-orange h-3 w-full" > <h2 className="text-red">Jobchaser</h2> </div>
      <section>
        <Searchbar jobdata={jobData} handleSearch={handleSearch} />
      </section>

      <main>
        <Jobcard jobdata={filteredJobs.length > 0 ? filteredJobs : jobData} />
      </main>
    </>
  );
}

function Searchbar({
  jobdata,
  handleSearch,
}: {
  jobdata: Job[];
  handleSearch: (filteredData: Job[]) => void;
}) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchTerm = e.target.value.trim().toLowerCase();
    setSearchInput(searchTerm);

    const filterJobs = jobdata.filter((job: Job) => {
      return (
        job.company.toLowerCase().includes(searchTerm) ||
        job.level.toLowerCase().includes(searchTerm) ||
        job.position.toLowerCase().includes(searchTerm) ||
        job.contract.toLowerCase().includes(searchTerm) ||
        job.role.toLowerCase().includes(searchTerm)
      );
    });

    handleSearch(filterJobs);
  };

  return (
    <section className="flex content-center">
      <label>Search</label>
      <input
        type="text"
        placeholder="Search Jobs..."
        onChange={handleChange}
        value={searchInput}
      />
    </section>
  );
}

function Jobcard({ jobdata }: { jobdata: Job[] }) {
  const jobLang = jobdata.map((jobObj) => {
    return jobObj.languages.map((lang) => <div className="bg-orange h-max text-black">#{lang}</div>);
  });
  const jobTool = jobdata.map((jobObj) => {
    return jobObj.tools.map((tool) => <div className="bg-black h-max text-white">#{tool}</div>);
  });

  return jobdata.map((job, index) => (
    <div key={job.id}>
      <div className="flex items-center border-solid-black ">
        <img className="mx-4" src={job.logo} alt={job.position} />
        <div className="flex-col grow items-center content-center">
          <h3>
            {job.position} at {job.company}
          </h3>
          <div className="flex grow gap-5">
            <div className="info">
              {" "}
              Role: <br /> {job.role}
            </div>
            <div className="info">
              {" "}
              Level: <br /> {job.level}
            </div>
            <div className="info">
              {" "}
              Contract: <br /> {job.contract}
            </div>
            <div className="info">
              {" "}
              Location: <br /> {job.location}
            </div>
          </div>
        </div>
        <div className="flex grow gap-5">
          {jobLang[index]} {jobTool[index]}
        </div>
      </div>
    </div>
  ));
}

export default App;
