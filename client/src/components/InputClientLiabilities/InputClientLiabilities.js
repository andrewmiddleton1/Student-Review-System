import React, { Component } from "react";
import { registerUser, getUsers, inputClientAssets, inputClientLiabilities } from '../UserFunctions/userFunctions';

class InputClientLiabilities extends Component {
    constructor(props) {
        super(props)
        this.state = {
            homeMortgage: '',
            investmentPropertyLoans: '',
            personalLoans: '',
            creditCards: '',
            payDayLending: '',
            carLoan: '',
            otherLoans: '',
            errors: {},

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleValidation() {
        let errors = {};
        let formIsValid = true;


        // homeMortgage
        if (typeof this.homeMortgage !== "undefined") {
            if (!this.state.homeMortgage.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["homeMortgage"] = "Only numbers";
            }
        }
        else { }

        //  investmentPropertyLoans
        if (typeof this.investmentPropertyLoans !== "undefined") {
            if (!this.state.investmentPropertyLoans.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["investmentPropertyLoans"] = "Only numbers";
            }
        }
        else { }

        // personalLoans
        if (typeof this.personalLoans !== "undefined") {
            if (!this.state.personalLoans.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["personalLoans"] = "Only numbers";
            }
        }
        else { }

        // creditCards
        if (typeof this.creditCards !== "undefined") {
            if (!this.state.creditCards.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["creditCards"] = "Only numbers";
            }
        }
        else { }

        // payDayLending
        if (typeof this.payDayLending !== "undefined") {
            if (!this.state.payDayLending.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["payDayLending"] = "Only numbers";
            }
        }
        else { }

        // carLoan
        if (typeof this.carLoan !== "undefined") {
            if (!this.state.carLoan.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["carLoan"] = "Only numbers";
            }
        }
        else { }

        // otherLoans
        if (typeof this.otherLoans !== "undefined") {
            if (!this.state.otherLoans.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["otherLoans"] = "Only numbers";
            }
        }
        else { }




        this.setState({ errors: errors });
        return formIsValid;
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event) {
        let errors = {};
        event.preventDefault();
        const userData = {

            homeMortgage: this.state.homeMortgage,
            investmentPropertyLoans: this.state.investmentPropertyLoans,
            personalLoans: this.state.personalLoans,
            creditCards: this.state.creditCards,
            payDayLending: this.state.payDayLending,
            carLoan: this.state.carLoan,
            otherLoans: this.state.otherLoans,




        }
        var result = this.handleValidation();
        console.log(result);
        if (this.handleValidation()) {
            // getUsers().then(response => {
            //     console.log(response);

            // var destination = response.data.map(element => {
            //     if (element.email === this.state.email) {
            //         console.log('foundmatch');
            //         console.log(element.email)
            //         return true;
            //     }
            // }).filter(item => { return item; })[0];
            // if (!destination) {
            inputClientLiabilities(userData).then(res => {
                this.props.history.push('/other')
            })
            console.log("Liabilities Form submitted");
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

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mt-5 mx-auto'>
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className='h3 mb-3 font-weight normal'>Please Input your Liabilities</h1>
                            <div className='form-group'>
                                <label htmlFor='homeMortgage'>Home Mortgage</label>
                                <input type='text'
                                    refs='homeMortgage'
                                    className='form-control'
                                    name='homeMortgage'
                                    placeholder='Enter amount of home mortgage'
                                    value={this.state.homeMortgage}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["homeMortgage"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='investmentPropertyLoans'>Total Amount of Investment Property Loans</label>
                                <input type='text'
                                    refs='investmentPropertyLoans'
                                    className='form-control'
                                    name='investmentPropertyLoans'
                                    placeholder='Enter Total of Investment Property Loans'
                                    value={this.state.investmentPropertyLoans}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["investmentPropertyLoans"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='personalLoans'>Personal Loans</label>
                                <input type='text'
                                    refs='personalLoans'
                                    className='form-control'
                                    name='personalLoans'
                                    placeholder='Enter Total of Personal Loans'
                                    value={this.state.personalLoans}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["personalLoans"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='creditCards'>Credit Cards</label>
                                <input type='text'
                                    refs='creditCards'
                                    className='form-control'
                                    name='creditCards'
                                    placeholder='Enter Total Value of all Credit Cards'
                                    value={this.state.creditCards}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["creditCards"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='payDayLending'>Pay Day Lending (ZIP, AfterPay etc)</label>
                                <input type='text'
                                    refs='payDayLending'
                                    className='form-control'
                                    name='payDayLending'
                                    placeholder='Enter Value of ZIP, AfterPay, Interest Free Cards etc'
                                    value={this.state.payDayLending}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["payDayLending"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='carLoan'>Car Loan</label>
                                <input type='text'
                                    refs='carLoan'
                                    className='form-control'
                                    name='carLoan'
                                    placeholder='Car Loan'
                                    value={this.state.carLoan}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["carLoan"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='otherLoans'>Any other Loans/Liabilities</label>
                                <input type='text'
                                    refs='otherLoans'
                                    className='form-control'
                                    name='otherLoans'
                                    placeholder='Any other Loans/Liabilities'
                                    value={this.state.managedFund}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["otherLoans"]}</span>
                            </div>

                            <button type='submit' className='btn btn-lg btn-primary btn-block'>
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default InputClientLiabilities;
