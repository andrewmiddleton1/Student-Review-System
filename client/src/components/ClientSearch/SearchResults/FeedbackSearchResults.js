import React from "react";
import "./style.css";

function FeedbackSearchResults(props) {

  // console.log(props);
  // console.log(props.results);
  // console.log(props.results[0]);
  // console.log(props.results[0][0]);
  // console.log(props.results);

  return (

    <div className="dashboardCard card cardBackground" style={{ width: "1500px" }}>
      <div className="card-body" style={{ width: "1000px" }}>
        <h4 className="card-subtitle">Feedback</h4>

        <a href="/" className="card-link bottomLink">
          More details
                </a>



        <table className="table">
          <thead >
            <tr>

              <th scope="col" >Trainee Name</th>
              <th scope="col" >Consultant </th>
              <th scope="col" >Feedback Type</th>
              <th scope="col" >Date</th>
              <th scope="col" >Global</th>
              <th scope="col" >Comments</th>
              <th scope="col" >Health Advocacy</th>
              <th scope="col" >Leadership/leadership_management</th>
              <th scope="col" >Pri/Decision Making</th>
              <th scope="col" >Professionalism</th>
              <th scope="col" >Scholarship + Teaching</th>
              <th scope="col" >Teamwork + Collaboration</th>




            </tr>
          </thead>
          <tbody>
            {props.results.map(result => {
              return (
                <tr key={result.id} >

                  <td> {result.StudentId} </td>
                  <td> {result.AuthorId} </td>
                  <td> {result.type} </td>
                  <td> {result.time_date} </td>
                  <td> {result.global_assessment} </td>
                  <td> {result.body} </td>
                  <td> {result.health_advocacy} </td>
                  <td> {result.leadership_management} </td>
                  <td> {result.prioritisation_decision_making} </td>
                  <td> {result.professionalism} </td>
                  <td> {result.scholarship_teaching} </td>
                  <td> {result.teamwork_collaboration} </td>
                </tr>
              )
            })
            }
            {/* {props.results.map(result => {
              return (
                <tr key={result} >
                  <td> {"Last Name"} </td>
                  <td> {result.Student.last_name} </td>
                </tr>
              )
            })
            } */}

            {/* <tr key={props.results} > */}

            {/* <td> {"Feedback Type"} </td>
            <td> {props.results[0][0]} </td> */}
            {/* </tr>
              ) */}


            {/* {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Time + Date"} </td>
                  <td> {result[0][0].time_date} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Global Assessment"} </td>
                  <td> {result[0].global_assessment} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Prioritisation and Decision Making"} </td>
                  <td> {result[0].prioritisation_decision_making} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Professionalism"} </td>
                  <td> {result[0].professionalism} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Scholarship + Teaching"} </td>
                  <td> {result[0].scholarship_teaching} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Teamwork + Collaboration"} </td>
                  <td> {result[0].teamwork_collaboration} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Leadership + Management"} </td>
                  <td> {result[0].leadership_management} </td>
                </tr>
              )
            })
            }

            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Health Advocacy"} </td>
                  <td> {result[0].health_advocacy} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Communication"} </td>
                  <td> {result[0].communication} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Sick Calls"} </td>
                  <td> {result[0].sick_calls} </td>
                </tr>
              )
            })
            }
            {props.results.map(result => {
              return (
                <tr key={result} >

                  <td> {"Comments"} </td>
                  <td> {result[0].body} </td>
                </tr>
              )
            })
            } */}
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

