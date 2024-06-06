import { useState } from "react";
import { filterByToolsAndLanguages } from "../slices/FilterSlice";
import { useDispatch } from "react-redux";


function Dropdown({ title, tools }: { title: string; tools: string[] }) {
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();

  function handleClick() {
    setDisplay(!display);
  }

  return (
    <div>
      <button onClick={handleClick}>{title}</button>
      {display && (
        <div>
          <ul>
            {tools.map((tool, index) => (
              <li
                key={index}
                onClick={() =>
                  dispatch(
                    filterByToolsAndLanguages({ tools: [tool], languages: [] })
                  )
                }
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;


 export function Dropdown2({ title, languages }: { title: string; languages: string[] }) {
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();

  function handleClick() {
    setDisplay(!display);
  }

  return (
    <div>
      <button onClick={handleClick}>{title}</button>
      {display && (
        <div>
          <ul>
            {languages.map((language, index) => (
              <li
                key={index}
                onClick={() =>
                  dispatch(
                    filterByToolsAndLanguages({ tools: [], languages: [language] })
                  )
                }
              >
                {language}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

