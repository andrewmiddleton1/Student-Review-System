import React from "react";
import { getOneClientByEmail, inputClientIncome, addStudent } from '../UserFunctions/userFunctions';
import { useAppContext } from '../../store';
import { useEffect } from 'react';
import SimpleFileUpload from 'react-simple-file-upload';
import { DropdownButton, Dropdown, InputGroup, FormControl, Checkbox } from 'react-bootstrap';

const InputStudent = (props) => {

    const [state, dispatch] = useAppContext();

    const [inputState, setInputState] = React.useState({
        first_name: '',
        last_name: '',
        phone: '',
        email_pers: '',
        email_work: '',
        training_phase: '',
        exam_stage: '',
        pediatrics_term: '',
        ICU_term: '',
        anesthetics_term: '',
        retrieval_term: '',
        associated_DEMT: '',
        improvement_area_1: '',
        improvement_area_2: '',
        improvement_area_3: '',
        photo_URL: '',

        errors: {},
    });

    // useEffect(() => {
    //     const emailForFunction = state.user.email;
    //     getOneClientByEmail(emailForFunction)
    //         .then((currentUserData) => {
    //             // console.log(currentUserData);
    //             // console.log(currentUserData.data.id);
    //             // UserEmailId.push(currentUserData);
    //             // console.log(UserEmailId[0]);
    //             setInputState({
    //                 ...inputState,
    //                 UserId: currentUserData.data.id
    //             });
    //         });
    // }, []);

    const handleValidation = () => {
        let errors = {};
        let formIsValid = true;


        // first_name
        if (inputState.first_name !== "undefined") {
            // if (!inputState.first_name.match(/^[a-zA-Z]+$/)) {
            //     formIsValid = false;
            //     errors["first_name"] = "Only letters";
            // }
        }
        else { }

        // last_name
        if (inputState.last_name !== "undefined") {
            // if (!inputState.last_name.match(/^[a-zA-Z]+$/)) {
            //     formIsValid = false;
            //     errors["last_name"] = "Only letters";
            // }
        }
        else { }

        // phone
        if (inputState.phone !== "undefined") {
            // if (!inputState.phone.match(/^[0-9]*$/)) {
            //     formIsValid = false;
            //     errors["phone"] = "Only numbers";
            // }
        }
        else { }

        // email_pers
        if (inputState.email_pers !== "undefined") {
            // if (!inputState.email_pers.match(/^[0-9]*$/)) {
            //     formIsValid = false;
            //     errors["email_pers"] = "Only numbers";
            // }
        }
        else { }

        // email_work
        if (inputState.email_work !== "undefined") {
            // if (!inputState.email_work.match(/^[0-9]*$/)) {
            //     formIsValid = false;
            //     errors["email_work"] = "Only numbers";
            // }
        }
        else { }

        // training_phase
        if (inputState.training_phase !== "undefined") {
            // if (!inputState.training_phase.match(/^[0-9]*$/)) {
            //     formIsValid = false;
            //     errors["training_phase"] = "Only numbers";
            // }
        }
        else { }

        // exam_stage
        if (inputState.exam_stage !== "undefined") {
            // if (!inputState.exam_stage.match(/^[0-9]*$/)) {
            //     formIsValid = false;
            //     errors["exam_stage"] = "Only numbers";
            // }
        }
        else { }

        // pediatrics_term
        if (inputState.pediatrics_term !== "undefined") {
            // if (!inputState.pediatrics_term.match(/^[0-9]*$/)) {
            //     formIsValid = false;
            //     errors["pediatrics_term"] = "Only numbers";
            // }
        }
        else { }

        // ICU_term
        if (inputState.ICU_term !== "undefined") {
            // if (!inputState.ICU_term.match(/^[0-9]*$/)) {
            //     formIsValid = false;
            //     errors["ICU_term"] = "Only numbers";
            // }
        }
        else { }

        // anesthetics_term
        if (inputState.anesthetics_term !== "undefined") {
            // if (!inputState.anesthetics_term.match(/^[0-9]*$/)) {
            //     formIsValid = false;
            //     errors["anesthetics_term"] = "Only numbers";
            // }
        }
        else { }

        // retrieval_term
        if (inputState.retrieval_term !== "undefined") {
            // if (!inputState.retrieval_term.match(/^[0-9]*$/)) {
            //     formIsValid = false;
            //     errors["retrieval_term"] = "Only numbers";
            // }
        }
        else { }

        // associated_DEMT
        if (inputState.associated_DEMT !== "undefined") {
            // if (!inputState.associated_DEMT.match(/^[0-9]*$/)) {
            //     formIsValid = false;
            //     errors["associated_DEMT"] = "Only numbers";
            // }
        }
        else { }

        // improvement_area_1
        if (inputState.improvement_area_1 !== "undefined") {
            // if (!inputState.improvement_area_1.match(/^[0-9]*$/)) {
            //     formIsValid = false;
            //     errors["improvement_area_1"] = "Only numbers";
            // }
        }
        else { }

        // improvement_area_2
        if (inputState.improvement_area_2 !== "undefined") {
            // if (!inputState.improvement_area_2.match(/^[0-9]*$/)) {
            //     formIsValid = false;
            //     errors["improvement_area_2"] = "Only numbers";
            // }
        }
        else { }

        // improvement_area_3
        if (inputState.improvement_area_3 !== "undefined") {
            // if (!inputState.improvement_area_3.match(/^[0-9]*$/)) {
            //     formIsValid = false;
            //     errors["improvement_area_3"] = "Only numbers";
            // }
        }
        else { }

        setInputState({
            ...inputState,
            errors: errors
        });

        return formIsValid;
    }

    const onChange = (event) => {
        // to update the inputState you don't use this.setState anymore but setInputState
        setInputState({
            ...inputState, // you always have to copy the old state like this
            [event.target.name]: event.target.value // and set the property that changed like this
        });
    };

    const onSubmit = (event) => {
        let errors = {};
        event.preventDefault();
        const userData = {

            first_name: inputState.first_name,
            last_name: inputState.last_name,
            phone: inputState.phone,
            email_pers: inputState.email_pers,
            email_work: inputState.email_work,
            training_phase: inputState.training_phase,
            exam_stage: inputState.exam_stage,
            pediatrics_term: inputState.pediatrics_term,
            ICU_term: inputState.ICU_term,
            anesthetics_term: inputState.anesthetics_term,
            retrieval_term: inputState.retrieval_term,
            associated_DEMT: inputState.associated_DEMT,
            improvement_area_1: inputState.improvement_area_1,
            improvement_area_2: inputState.improvement_area_2,
            improvement_area_3: inputState.improvement_area_3,
            photo_URL: inputState.photo_URL,



        }
        var result = handleValidation();
        console.log(result);
        if (result) {
            // getUsers().then(response => {
            //     console.log(response);

            // var destination = response.data.map(element => {
            //     if (element.email === inputState.email) {
            //         console.log('foundmatch');
            //         console.log(element.email)
            //         return true;
            //     }
            // }).filter(item => { return item; })[0];
            // if (!destination) {
            addStudent(userData).then(res => {
                props.history.push('/demtinfo')
            })
            console.log("Student Added");
            // });
            // else {
            //     errors["email"] = "Email already exists";
            //     this.setState({ errors: errors });
            // }
        }

        else {
            console.log("Form has errors.")
        }
    }
    //         else {
    //     console.log("Form has errors.")
    // }
    //     }

    // function handleFile(url) {
    //     console.log('The URL of the file is ' + url)
    // }



    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mt-5 mx-auto'>
                    <form noValidate onSubmit={onSubmit}>
                        <h1 className='h3 mb-3 font-weight normal'>Please Add a New Student</h1>
                        <div className='form-group'>
                            <label htmlFor='first_name'>First Name</label>
                            <input type='text'
                                refs='first_name'
                                className='form-control'
                                name='first_name'
                                placeholder='First Name'
                                value={inputState.first_name}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["first_name"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='last_name'>Last Name</label>
                            <input type='text'
                                refs='last_name'
                                className='form-control'
                                name='last_name'
                                placeholder='Last Name'
                                value={inputState.last_name}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["last_name"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='phone'>Phone</label>
                            <input type='text'
                                refs='phone'
                                className='form-control'
                                name='phone'
                                placeholder='Phone Number'
                                value={inputState.phone}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["phone"]}</span>
                        </div>

                        {/* <div className='form-group'>
                            <label htmlFor='phone'>Upload Payslip</label>

                            <SimpleFileUpload
                                apiKey="c7985f2ddd5c58327200e53688b6b877"
                                onSuccess={handleFile}
                            />
                        </div> */}

                        <div className='form-group'>
                            <label htmlFor='email_pers'>Personal Email</label>
                            <input type='text'
                                refs='email_pers'
                                className='form-control'
                                name='email_pers'
                                placeholder='Enter Personal Email'
                                value={inputState.email_pers}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["email_pers"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='email_work'>Work Email</label>
                            <input type='text'
                                refs='email_work'
                                className='form-control'
                                name='email_work'
                                placeholder='Work Email'
                                value={inputState.email_work}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["email_work"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='training_phase'>Training Phase</label>
                            <DropdownButton id="training_phase"
                                style={{ width: "100%" }}
                                title={inputState.training_phase}
                                placeholder="training_phase"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        training_phase: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="Early Phase">Early Phase</Dropdown.Item>
                                <Dropdown.Item eventKey="Late Phase">Late Phase</Dropdown.Item>
                                <Dropdown.Item eventKey="Late Phase">Late Advanced</Dropdown.Item>


                            </DropdownButton>
                            <span style={{ color: "red" }}>{inputState.errors["training_phase"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='exam_stage'>Exam Stage</label>
                            <DropdownButton id="exam_stage"
                                style={{ width: "100%" }}
                                title={inputState.exam_stage}
                                placeholder="exam_stage"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        exam_stage: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="Primary Written">Primary Written</Dropdown.Item>
                                <Dropdown.Item eventKey="Primary VIBA">Primary VIVA</Dropdown.Item>
                                <Dropdown.Item eventKey="Fellowship Written">Fellowship Written</Dropdown.Item>
                                <Dropdown.Item eventKey="Fellowship OSCE">Fellowship OSCE</Dropdown.Item>


                            </DropdownButton>
                            <span style={{ color: "red" }}>{inputState.errors["exam_stage"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='pediatrics_term'>Pediatrics Term</label>
                            <DropdownButton id="pediatrics_term"
                                style={{ width: "100%" }}
                                title={inputState.pediatrics_term}
                                placeholder="pediatrics_term"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        pediatrics_term: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="Yes">Yes</Dropdown.Item>
                                <Dropdown.Item eventKey="No">No</Dropdown.Item>


                            </DropdownButton>
                            <span style={{ color: "red" }}>{inputState.errors["pediatrics_term"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='ICU_term'>ICU Term</label>
                            <DropdownButton id="ICU_term"
                                style={{ width: "100%" }}
                                title={inputState.ICU_term}
                                placeholder="ICU_term"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        ICU_term: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="Yes">Yes</Dropdown.Item>
                                <Dropdown.Item eventKey="No">No</Dropdown.Item>


                            </DropdownButton>
                            <span style={{ color: "red" }}>{inputState.errors["ICU_term"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='anesthetics_term'>Anesthetics Term</label>
                            <DropdownButton id="anesthetics_term"
                                style={{ width: "100%" }}
                                title={inputState.anesthetics_term}
                                placeholder="anesthetics_term"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        anesthetics_term: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="Yes">Yes</Dropdown.Item>
                                <Dropdown.Item eventKey="No">No</Dropdown.Item>


                            </DropdownButton>
                            <span style={{ color: "red" }}>{inputState.errors["anesthetics_term"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='retrieval_term'>Retrieval Term</label>
                            <DropdownButton id="retrieval_term"
                                style={{ width: "100%" }}
                                title={inputState.retrieval_term}
                                placeholder="retrieval_term"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        retrieval_term: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="Yes">Yes</Dropdown.Item>
                                <Dropdown.Item eventKey="No">No</Dropdown.Item>


                            </DropdownButton>
                            <span style={{ color: "red" }}>{inputState.errors["retrieval_term"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='associated_DEMT'>Associated DEMT</label>
                            <DropdownButton id="associated_DEMT"
                                style={{ width: "100%" }}
                                title={inputState.associated_DEMT}
                                placeholder="associated_DEMT"
                                onSelect={function (env) {
                                    setInputState({
                                        ...inputState,
                                        associated_DEMT: env
                                    })
                                    console.log(env);

                                }}
                                controlShouldRenderValue={true}
                            >
                                <Dropdown.Item eventKey="Alan Turner">Alan Turner</Dropdown.Item>
                                <Dropdown.Item eventKey="Tim Cowan">Tim Cowan</Dropdown.Item>
                                <Dropdown.Item eventKey="Rory Gleadhill">Rory Gleadhill</Dropdown.Item>
                                <Dropdown.Item eventKey="Desiree Jongcko">Desiree Jongcko</Dropdown.Item>
                                <Dropdown.Item eventKey="Helen Sambles">Helen Sambles</Dropdown.Item>


                            </DropdownButton>
                            <span style={{ color: "red" }}>{inputState.errors["associated_DEMT"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='improvement_area_1'>Improvement Area 1</label>
                            <input type='text'
                                refs='improvement_area_1'
                                className='form-control'
                                name='improvement_area_1'
                                placeholder='Improvement Area 1'
                                value={inputState.improvement_area_1}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["improvement_area_1"]}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='improvement_area_2'>Improvement Area 2</label>
                            <input type='text'
                                refs='improvement_area_2'
                                className='form-control'
                                name='improvement_area_2'
                                placeholder='Improvement Area 2'
                                value={inputState.improvement_area_2}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["improvement_area_2"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='improvement_area_3'>Improvement Area 3</label>
                            <input type='text'
                                refs='improvement_area_3'
                                className='form-control'
                                name='improvement_area_3'
                                placeholder='Improvement Area 3'
                                value={inputState.improvement_area_3}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["improvement_area_3"]}</span>
                        </div>

                        <button type='submit' className='btn btn-lg btn-primary btn-block'>
                            Input New Student
                            </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default InputStudent;
