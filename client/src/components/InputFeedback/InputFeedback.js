import React, { useState, useEffect } from "react";
import { addPost, getStudents, inputClientParticulars, inputFeedback } from '../UserFunctions/userFunctions';
import { useAppContext } from '../../store';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { DropdownButton, Dropdown, InputGroup, FormControl, Checkbox } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MDBInput, MDBFormInline } from 'mdbreact';


const InputFeedback = (props) => {

    const [state, dispatch] = useAppContext();




    const [inputState, setInputState] = React.useState({


        type: '',
        StudentId: '',
        time_date: '',
        global_assessment: '',
        prioritisation_decision_making: '',
        professionalism: '',
        scholarship_teaching: '',
        teamwork_collaboration: '',
        leadership_management: '',
        health_advocacy: '',
        communication: '',
        sick_calls: '',
        body: '',

        errors: {},
        ...state.user,
        AuthorId: state.user.id,
        students: []


    });

    console.log(state.user);
    console.log(state.user.id);

    useEffect(() => {
        getStudents()
            .then(students => {
                console.log(students);
                console.log(students.data);
                console.log(students.data[0]);

                setInputState({
                    ...inputState,
                    students: students.data
                });
            });
    }, []);

    console.log(inputState.students);

    const handleValidation = () => {
        let errors = {};
        let formIsValid = true;
        // 
        // lastName - map students and present name to pick
        if (!inputState.StudentId) {
            formIsValid = false;
            errors["StudentId"] = "Cannot be empty";
        }
        // else if (!inputState.StudentId.match(/^[a-zA-Z]+$/)) {
        //     formIsValid = false;
        //     errors["StudentId"] = "Only letters";
        // }
        else { }
        // type (drop down)
        if (!inputState.type) {
            formIsValid = false;
            errors["first_name"] = "Cannot be empty";
        }
        // else if (typeof inputState.first_name !== "undefined") {
        //     if (!inputState.first_name.match(/^[a-zA-Z]+$/)) {
        //         formIsValid = false;
        //         errors["first_name"] = "Only letters";
        //     }
        // }
        else { }



        // time_date
        if (!inputState.time_date) {
            formIsValid = false;
            errors["time_date"] = "Cannot be empty";
        }
        // else if (!inputState.time_date.match(/^[a-zA-Z]+$/)) {
        //     formIsValid = false;
        //     errors["time_date"] = "Only letters";
        // }
        else { }

        // global_assessment
        if (!inputState.global_assessment) {
            formIsValid = false;
            errors["global_assessment"] = "Cannot be empty";
        }
        // else if (!inputState.global_assessment.match(/^[a-zA-Z]+$/)) {
        //     formIsValid = false;
        //     errors["global_assessment"] = "Only letters";
        // }
        else { }

        // prioritisation_decision_making
        // if (!inputState.prioritisation_decision_making) {
        //     formIsValid = false;
        //     errors["prioritisation_decision_making"] = "Cannot be empty";
        // }
        // // else if (!inputState.prioritisation_decision_making.match(/^[0-9]*$/)) {
        // //     formIsValid = false;
        // //     errors["prioritisation_decision_making"] = "Only numbers";
        // // }
        // else { }

        // // professionalism
        // if (!inputState.professionalism) {
        //     formIsValid = false;
        //     errors["professionalism"] = "Cannot be empty";
        // }
        // else if (!inputState.professionalism.match(/^[a-zA-Z]+$/)) {
        //     formIsValid = false;
        //     errors["professionalism"] = "Only letters";
        // }
        // else { }

        // // scholarship_teaching
        // if (!inputState.scholarship_teaching) {
        //     formIsValid = false;
        //     errors["scholarship_teaching"] = "Cannot be empty";
        // }
        // else if (!inputState.scholarship_teaching.match(/^[a-zA-Z]+$/)) {
        //     formIsValid = false;
        //     errors["scholarship_teaching"] = "Only letters";
        // }
        // else { }

        // // teamwork_collaboration
        // if (!inputState.teamwork_collaboration) {
        //     formIsValid = false;
        //     errors["teamwork_collaboration"] = "Cannot be empty";
        // }
        // // else if (!inputState.teamwork_collaboration.match(/^[a-zA-Z]+$/)) {
        // //     formIsValid = false;
        // //     errors["teamwork_collaboration"] = "Only letters";
        // // }
        // else { }

        // // leadership_management
        // if (!inputState.leadership_management) {
        //     formIsValid = false;
        //     errors["leadership_management"] = "Cannot be empty";
        // }
        // // else if (!inputState.leadership_management.match(/^[a-zA-Z]+$/)) {
        // //     formIsValid = false;
        // //     errors["leadership_management"] = "Only letters";
        // // }
        // else { }

        // // health_advocacy
        // if (!inputState.health_advocacy) {
        //     formIsValid = false;
        //     errors["health_advocacy"] = "Cannot be empty";
        // }
        // else if (!inputState.health_advocacy.match(/^[a-zA-Z]+$/)) {
        //     formIsValid = false;
        //     errors["health_advocacy"] = "Only letters";
        // }
        // else { }

        // // communication
        // if (!inputState.communication) {
        //     formIsValid = false;
        //     errors["communication"] = "Cannot be empty";
        // }
        // else if (!inputState.communication.match(/^[0-9]*$/)) {
        //     formIsValid = false;
        //     errors["communication"] = "Only numbers";
        // }
        // else { }

        // // sick_calls
        // if (!inputState.sick_calls) {
        //     formIsValid = false;
        //     errors["sick_calls"] = "Cannot be empty";
        // }
        // else if (!inputState.sick_calls.match(/^[0-9]*$/)) {
        //     formIsValid = false;
        //     errors["sick_calls"] = "Only numbers";
        // }
        // else { }


        // // body
        // if (!inputState.body) {
        //     formIsValid = false;
        //     errors["body"] = "Cannot be empty";
        // }
        // else if (!inputState.body.match(/^[0-9]*$/)) {
        //     formIsValid = false;
        //     errors["body"] = "Only numbers";
        // }
        // else { }



        setInputState({
            ...inputState,
            errors: errors
        });

        return formIsValid;
    }

    const onChange = (event) => {
        // to update the inputState you don't use setState anymore but setInputState
        setInputState({
            ...inputState, // you always have to copy the old state like this
            [event.target.name]: event.target.value // and set the property that changed like this
        });
    };

    const onSubmit = (event) => {
        let errors = {};
        event.preventDefault();
        const userData = {

            type: inputState.type,
            StudentId: inputState.StudentId,
            time_date: inputState.time_date,
            global_assessment: inputState.global_assessment,
            prioritisation_decision_making: inputState.prioritisation_decision_making,
            professionalism: inputState.professionalism,
            scholarship_teaching: inputState.scholarship_teaching,
            teamwork_collaboration: inputState.teamwork_collaboration,
            leadership_management: inputState.leadership_management,
            health_advocacy: inputState.health_advocacy,
            communication: inputState.communication,
            sick_calls: inputState.sick_calls,
            body: inputState.body,
            AuthorId: inputState.AuthorId

        }
        var result = handleValidation();

        console.log(result);

        if (result) {

            addPost(userData).then(res => {
                props.history.push('/other')
            })

            console.log("Particulars Form submitted");
        }
        else {
            console.log("Form has errors.")
        }

    }
    // else {
    //     console.log("Form has errors.")
    // }





    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mt-5 mx-auto'>
                    <form noValidate onSubmit={onSubmit}>
                        <h1 className='h3 mb-3 font-weight normal'>Please Input your Feedback</h1>

                        <div className='form-group'>
                            <label htmlFor='StudentId'>Student Name + ID</label>


                            <DropdownButton id="dropdown-basic-button"
                                title={inputState.StudentId}
                                placeholder="Name/ID"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        StudentId: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                {inputState.students.map((student) => {
                                    return (
                                        <Dropdown.Item eventKey={student.id}>{student.last_name} </Dropdown.Item>
                                    )
                                })
                                }
                            </DropdownButton>


                            {/* <input type='text'
                                refs='StudentId'
                                className='form-control'
                                name='StudentId'
                                placeholder='Choose Student Name'
                                value={inputState.StudentId}
                                onChange={onChange}
                            /> */}
                            <span style={{ color: "red" }}>{inputState.errors["StudentId"]}</span>
                        </div>

                        {/* drop down */}
                        <div className='form-group'>
                            <label htmlFor='type'>Feedback Type</label>

                            <DropdownButton id="dropdown-basic-button"
                                title={inputState.type}
                                placeholder="Feedback Type"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        type: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="End of Shift">End of Shift</Dropdown.Item>
                                <Dropdown.Item eventKey="Incident Related">Incident Related</Dropdown.Item>
                                <Dropdown.Item eventKey="End of Term">End of Term</Dropdown.Item>
                                <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
                            </DropdownButton>
                            <span style={{ color: "red" }}>{inputState.errors["type"]}</span>
                        </div>


                        {/* date-picker */}
                        <div className='form-group'>
                            <label htmlFor='time_date'>Date</label>

                            <div>
                                <DatePicker
                                    title={inputState.time_date}
                                    // placeholder="Salutation"
                                    onSelect={function (env) {
                                        setInputState({
                                            ...inputState,
                                            time_date: env
                                        })
                                        console.log(env);

                                    }}
                                    controlShouldRenderValue={true}
                                    selected={inputState.time_date}
                                    showYearDropdown
                                    showMonthDropdown
                                    dateFormat="dd/MM/yyyy"

                                />
                            </div>


                            {/* <input type='time_date'
                                refs='time_date'
                                className='form-control'
                                name='time_date'
                                placeholder='Time/Date'
                                value={inputState.time_date}
                                onChange={onChange}
                            /> */}
                            <span style={{ color: "red" }}>{inputState.errors["time_date"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='global_assessment'>Global Assessment</label>

                            <DropdownButton id="dropdown-basic-button"
                                style={{ width: "100%" }}
                                title={inputState.global_assessment}
                                placeholder="Global Assessment"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        global_assessment: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="At Standard">At Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Below Standard">Below Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Above Standard">Above Standard</Dropdown.Item>

                            </DropdownButton>
                            <span style={{ color: "red" }}>{inputState.errors["global_assessment"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='body'>Comments (please provide examples, particularly if trainee is below or above average either globally or in any specific domain/s)</label>
                            <input type='text'
                                refs='body'
                                className='form-control'
                                name='body'
                                placeholder='Feedback Comments'
                                value={inputState.body}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["body"]}</span>
                        </div>
                        <div>------------------------------------------------------------------------------</div>
                        <div style={{ color: "black" }}>ACEM Domains
                            </div>
                        <div>
                            <p1>(Optional: if you wish to provide feedback on specific domains)</p1>
                        </div>
                        <break></break>
                        <div>----------------------------</div>
                        <div className='form-group'>
                            <label htmlFor='prioritisation_decision_making'>Prioritisation and Decision Making</label>

                            <DropdownButton id="dropdown-basic-button"
                                style={{ width: "100%" }}
                                title={inputState.prioritisation_decision_making}
                                placeholder="prioritisation_decision_making"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        prioritisation_decision_making: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="At Standard">At Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Below Standard">Below Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Above Standard">Above Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Not Observed">Not Observed</Dropdown.Item>

                            </DropdownButton>

                            <span style={{ color: "red" }}>{inputState.errors["professionalism"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='professionalism'>Professionalism</label>
                            <DropdownButton id="dropdown-basic-button"
                                style={{ width: "100%" }}
                                title={inputState.professionalism}
                                placeholder="professionalism"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        professionalism: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="At Standard">At Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Below Standard">Below Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Above Standard">Above Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Not Observed">Not Observed</Dropdown.Item>

                            </DropdownButton>
                            <span style={{ color: "red" }}>{inputState.errors["professionalism"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='scholarship_teaching'>Scholarship and Teaching</label>
                            <DropdownButton id="dropdown-basic-button"
                                style={{ width: "100%" }}
                                title={inputState.scholarship_teaching}
                                placeholder="scholarship_teaching"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        scholarship_teaching: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="At Standard">At Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Below Standard">Below Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Above Standard">Above Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Not Observed">Not Observed</Dropdown.Item>

                            </DropdownButton>
                            <span style={{ color: "red" }}>{inputState.errors["scholarship_teaching"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='teamwork_collaboration'>Teamwork and Collaboration</label>
                            <DropdownButton id="dropdown-basic-button"
                                style={{ width: "100%" }}
                                title={inputState.teamwork_collaboration}
                                placeholder="teamwork_collaboration"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        teamwork_collaboration: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="At Standard">At Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Below Standard">Below Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Above Standard">Above Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Not Observed">Not Observed</Dropdown.Item>

                            </DropdownButton>
                            <span style={{ color: "red" }}>{inputState.errors["teamwork_collaboration"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='leadership_management'>Leadership and Management</label>
                            <DropdownButton id="dropdown-basic-button"
                                style={{ width: "100%" }}
                                title={inputState.leadership_management}
                                placeholder="leadership_management"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        leadership_management: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="At Standard">At Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Below Standard">Below Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Above Standard">Above Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Not Observed">Not Observed</Dropdown.Item>

                            </DropdownButton>
                            <span style={{ color: "red" }}>{inputState.errors["leadership_management"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='health_advocacy'>Health Advocacy </label>
                            <DropdownButton id="dropdown-basic-button"
                                style={{ width: "100%" }}
                                title={inputState.health_advocacy}
                                placeholder="health_advocacy"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        health_advocacy: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="At Standard">At Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Below Standard">Below Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Above Standard">Above Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Not Observed">Not Observed</Dropdown.Item>

                            </DropdownButton>
                            <span style={{ color: "red" }}>{inputState.errors["health_advocacy"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='communication'>Communication</label>
                            <DropdownButton id="dropdown-basic-button"
                                style={{ width: "100%" }}
                                title={inputState.communication}
                                placeholder="communication"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        communication: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="At Standard">At Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Below Standard">Below Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Above Standard">Above Standard</Dropdown.Item>
                                <Dropdown.Item eventKey="Not Observed">Not Observed</Dropdown.Item>

                            </DropdownButton>
                            <span style={{ color: "red" }}>{inputState.errors["communication"]}</span>
                        </div>

                        {/* <div className='form-group'>
                            <label htmlFor='sick_calls'>Sick Calls</label>
                            <DropdownButton id="sick_calls"
                                style={{ width: "100%" }}
                                title={inputState.sick_calls}
                                placeholder="sick_calls"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        sick_calls: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="Yes">Yes</Dropdown.Item>
                                <Dropdown.Item eventKey="No">No</Dropdown.Item>


                            </DropdownButton>
                            <span style={{ color: "red" }}>{inputState.errors["sick_calls"]}</span>
                        </div> */}



                        <button type='submit' className='btn btn-lg btn-primary btn-block'>
                            Save Feedback
                            </button>
                    </form>
                </div>
            </div>
        </div >
    );


}


export default InputFeedback;
