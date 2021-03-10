import React from "react";
import "./style.css";

function StudentSearchResults(props) {

  console.log(props);
  console.log(props.results);
  console.log(props.results);

  return (

    <div className="dashboardCard card cardBackground">
      <div className="card-body">
        <h4 className="card-subtitle">Trainee Profile</h4>

        <a href="/" className="card-link bottomLink">
          More details
                </a>



        <table className="table">
          {/* <thead >
            <tr>

              <th scope="col" >Trainee </th>
              <th scope="col" >Details </th>


            </tr>
          </thead> */}
          <tbody>
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {"First Name"} </td>
                  <td> {result.first_name} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {"Last Name"} </td>
                  <td> {result.last_name} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Phone"} </td>
                  <td> {result.phone} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Email"} </td>
                  <td> {result.email_pers} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"ICU Term"} </td>
                  <td> {result.ICU_term} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Anesthetics Term"} </td>
                  <td> {result.anesthetics_term} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Pediatrics Term"} </td>
                  <td> {result.pediatrics_term} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Retrieval Term"} </td>
                  <td> {result.retrieval_term} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Training Phase"} </td>
                  <td> {result.training_phase} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Exam Phase"} </td>
                  <td> {result.exam_stage} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Associated DEMT"} </td>
                  <td> {result.associated_DEMT} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Improvement Area 1"} </td>
                  <td> {result.improvement_area_1} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Improvement Area 2"} </td>
                  <td> {result.improvement_area_2} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Improvement Area 3"} </td>
                  <td> {result.improvement_area_3} </td>
                </tr>
              )
            })
            }

          </tbody>
          {/* <tfoot>
            <tr>
              <td></td>
              <td>TBA</td>
              <td>TBA</td>


            </tr>
          </tfoot> */}

        </table>

      </div>
    </div>

  );
}

export default StudentSearchResults;

