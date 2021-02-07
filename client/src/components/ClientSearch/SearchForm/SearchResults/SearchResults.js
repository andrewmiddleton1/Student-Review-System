import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <div>
      <table className="list-group search-results">
        <tbody>
          {props.results.map(result => {
            return (

              <tr key={result} className="list-group-item">
                <td>
                  <img alt="Employee" src={result.picture.medium} className="img-fluid" />
                </td>
                <td>{result.first_name} </td>
                <td> {result.last_name} </td>
                <td> {result.phone} </td>
                <td> {result.email} </td>
                <td> {result.dob.date} </td>

              </tr>
            )
          })
          }

        </tbody>
      </table>
    </div>

  );
}

export default SearchResults;

