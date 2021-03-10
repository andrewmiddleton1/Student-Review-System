import React from "react";
import "./style.css";

function FeedbackSearchResults(props) {

  console.log(props);
  console.log(props.results);
  console.log(props.results);

  return (

    <div className="dashboardCard card cardBackground">
      <div className="card-body">
        <h4 className="card-subtitle">Feedback</h4>

        <a href="/" className="card-link bottomLink">
          More details
                </a>



        <table className="table">
          <thead >
            {/* <tr>
              <th scope="col" >Owner</th>
              <th scope="col" >Liability </th>
              <th scope="col" >Value </th>


            </tr> */}
          </thead>
          <tbody>
            {/* {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"First Name"} </td>
                  <td> {result.Student.first_name} </td>
                </tr>
              )
            })
            } */}
            {/* {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {"Last Name"} </td>
                  <td> {result.Student.last_name} </td>
                </tr>
              )
            })
            } */}
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Feedback Type"} </td>
                  <td> {result.type} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Time + Date"} </td>
                  <td> {result.time_date} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Global Assessment"} </td>
                  <td> {result.global_assessment} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Prioritisation and Decision Making"} </td>
                  <td> {result.prioritisation_decision_making} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Professionalism"} </td>
                  <td> {result.professionalism} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Scholarship + Teaching"} </td>
                  <td> {result.scholarship_teaching} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Teamwork + Collaboration"} </td>
                  <td> {result.teamwork_collaboration} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Leadership + Management"} </td>
                  <td> {result.leadership_management} </td>
                </tr>
              )
            })
            }

            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Health Advocacy"} </td>
                  <td> {result.health_advocacy} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Communication"} </td>
                  <td> {result.communication} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Sick Calls"} </td>
                  <td> {result.sick_calls} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Comments"} </td>
                  <td> {result.body} </td>
                </tr>
              )
            })
            }
          </tbody>
          <tfoot>
            {/* <tr>
              <td></td>
              <td>Total</td>
              <td>TBA</td>


            </tr> */}
          </tfoot>

        </table>

      </div>
    </div>

  );
}

export default FeedbackSearchResults;

