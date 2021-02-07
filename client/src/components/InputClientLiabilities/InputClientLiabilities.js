import React from "react";
import { getOneClientByEmail, inputClientLiabilities } from '../UserFunctions/userFunctions';
import { useAppContext } from '../../store';
import { useEffect } from 'react';

const InputClientLiabilities = (props) => {

    const [state, dispatch] = useAppContext();

    const [inputState, setInputState] = React.useState({
        homeMortgage: '',
        investmentPropertyLoans: '',
        personalLoans: '',
        creditCards: '',
        payDayLending: '',
        carLoan: '',
        otherLoans: '',
        ...state.user,

        UserId: "",
        errors: {},

    });

    useEffect(() => {
        const emailForFunction = state.user.email;
        getOneClientByEmail(emailForFunction)
            .then((currentUserData) => {
                // console.log(currentUserData);
                // console.log(currentUserData.data.id);
                // UserEmailId.push(currentUserData);
                // console.log(UserEmailId[0]);
                setInputState({
                    ...inputState,
                    UserId: currentUserData.data.id
                });
            });
    }, []);

    const handleValidation = () => {
        let errors = {};
        let formIsValid = true;


        // homeMortgage
        if (inputState.homeMortgage !== "undefined") {
            if (!inputState.homeMortgage.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["homeMortgage"] = "Only numbers";
            }
        }
        else { }

        //  investmentPropertyLoans
        if (inputState.investmentPropertyLoans !== "undefined") {
            if (!inputState.investmentPropertyLoans.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["investmentPropertyLoans"] = "Only numbers";
            }
        }
        else { }

        // personalLoans
        if (inputState.personalLoans !== "undefined") {
            if (!inputState.personalLoans.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["personalLoans"] = "Only numbers";
            }
        }
        else { }

        // creditCards
        if (inputState.creditCards !== "undefined") {
            if (!inputState.creditCards.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["creditCards"] = "Only numbers";
            }
        }
        else { }

        // payDayLending
        if (inputState.payDayLending !== "undefined") {
            if (!inputState.payDayLending.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["payDayLending"] = "Only numbers";
            }
        }
        else { }

        // carLoan
        if (inputState.carLoan !== "undefined") {
            if (!inputState.carLoan.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["carLoan"] = "Only numbers";
            }
        }
        else { }

        // otherLoans
        if (inputState.otherLoans !== "undefined") {
            if (!inputState.otherLoans.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["otherLoans"] = "Only numbers";
            }
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

            homeMortgage: inputState.homeMortgage,
            investmentPropertyLoans: inputState.investmentPropertyLoans,
            personalLoans: inputState.personalLoans,
            creditCards: inputState.creditCards,
            payDayLending: inputState.payDayLending,
            carLoan: inputState.carLoan,
            otherLoans: inputState.otherLoans,
            UserId: inputState.UserId




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
            inputClientLiabilities(userData).then(res => {
                props.history.push('/clientincome')
            })
            console.log("Liabilities Form submitted");
            // });
            // else {
            //     errors["email"] = "Email already exists";
            //     inputState.setState({ errors: errors });
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


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mt-5 mx-auto'>
                    <form noValidate onSubmit={onSubmit}>
                        <h1 className='h3 mb-3 font-weight normal'>Please Input your Liabilities</h1>
                        <div className='form-group'>
                            <label htmlFor='homeMortgage'>Home Mortgage</label>
                            <input type='text'
                                refs='homeMortgage'
                                className='form-control'
                                name='homeMortgage'
                                placeholder='Enter amount of home mortgage'
                                value={inputState.homeMortgage}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["homeMortgage"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='investmentPropertyLoans'>Total Amount of Investment Property Loans</label>
                            <input type='text'
                                refs='investmentPropertyLoans'
                                className='form-control'
                                name='investmentPropertyLoans'
                                placeholder='Enter Total of Investment Property Loans'
                                value={inputState.investmentPropertyLoans}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["investmentPropertyLoans"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='personalLoans'>Personal Loans</label>
                            <input type='text'
                                refs='personalLoans'
                                className='form-control'
                                name='personalLoans'
                                placeholder='Enter Total of Personal Loans'
                                value={inputState.personalLoans}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["personalLoans"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='creditCards'>Credit Cards</label>
                            <input type='text'
                                refs='creditCards'
                                className='form-control'
                                name='creditCards'
                                placeholder='Enter Total Value of all Credit Cards'
                                value={inputState.creditCards}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["creditCards"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='payDayLending'>Pay Day Lending (ZIP, AfterPay etc)</label>
                            <input type='text'
                                refs='payDayLending'
                                className='form-control'
                                name='payDayLending'
                                placeholder='Enter Value of ZIP, AfterPay, Interest Free Cards etc'
                                value={inputState.payDayLending}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["payDayLending"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='carLoan'>Car Loan</label>
                            <input type='text'
                                refs='carLoan'
                                className='form-control'
                                name='carLoan'
                                placeholder='Car Loan'
                                value={inputState.carLoan}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["carLoan"]}</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='otherLoans'>Any other Loans/Liabilities</label>
                            <input type='text'
                                refs='otherLoans'
                                className='form-control'
                                name='otherLoans'
                                placeholder='Any other Loans/Liabilities'
                                value={inputState.managedFund}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>{inputState.errors["otherLoans"]}</span>
                        </div>

                        <button type='submit' className='btn btn-lg btn-primary btn-block'>
                            Register
                            </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default InputClientLiabilities;
