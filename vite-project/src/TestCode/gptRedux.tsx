// Import necessary Redux dependencies and actions
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// Action types
const SET_FILTERS = 'SET_FILTERS';

// Action creators
export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: filters,
});

// Reducer
const initialState = {
  filters: {
    tools: [],
    languages: [],
  },
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};

// Other components remain unchanged

function Home() {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    fetch('./src/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setJobData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <section>
        <Searchbar />
      </section>

      <main>
        <Jobcard />
      </main>
    </>
  );
}

function Searchbar() {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.filters);

  const handleFilterChange = (e, filterType) => {
    const selectedFilters = Array.from(e.target.selectedOptions, (option) => option.value);

    dispatch(setFilters({ ...filters, [filterType]: selectedFilters }));
  };

  return (
    <section>
      <label>Filter Tools</label>
      <select multiple onChange={(e) => handleFilterChange(e, 'tools')}>
        {/* Populate options dynamically */}
      </select>

      <label>Filter Languages</label>
      <select multiple onChange={(e) => handleFilterChange(e, 'languages')}>
        {/* Populate options dynamically */}
      </select>
    </section>
  );
}

function Jobcard() {
  const { filters } = useSelector((state) => state.filters);
  const filteredJobs = // Filter job data based on selected filters;

  return filteredJobs.map((job) => (
    <div key={job.id}>
      {/* Render job card */}
    </div>
  ));
}

export default Home;