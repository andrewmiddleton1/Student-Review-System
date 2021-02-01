import React, { Component } from "react";
import { inputClientIncome } from '../UserFunctions/userFunctions';

class InputClientIncome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employment_type: '',
            industry: '',
            primary_income: '',
            secondary_income: '',
            centrelink_payments: '',
            dva_payments: '',
            superannuation_payments: '',
            rental_income: '',
            other_income: '',
            errors: {},

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleValidation() {
        let errors = {};
        let formIsValid = true;


        // employment_type
        if (typeof this.employment_type !== "undefined") {
            if (!this.state.employment_type.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["employment_type"] = "Only numbers";
            }
        }
        else { }

        // industry
        if (typeof this.industry !== "undefined") {
            if (!this.state.industry.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["industry"] = "Only numbers";
            }
        }
        else { }

        // primary_income
        if (typeof this.primary_income !== "undefined") {
            if (!this.state.primary_income.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["primary_income"] = "Only numbers";
            }
        }
        else { }

        // secondary_income
        if (typeof this.secondary_income !== "undefined") {
            if (!this.state.secondary_income.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["secondary_income"] = "Only numbers";
            }
        }
        else { }

        // centrelink_payments
        if (typeof this.centrelink_payments !== "undefined") {
            if (!this.state.centrelink_payments.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["centrelink_payments"] = "Only numbers";
            }
        }
        else { }

        // dva_payments
        if (typeof this.dva_payments !== "undefined") {
            if (!this.state.dva_payments.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["dva_payments"] = "Only numbers";
            }
        }
        else { }

        // superannuation_payments
        if (typeof this.superannuation_payments !== "undefined") {
            if (!this.state.superannuation_payments.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["superannuation_payments"] = "Only numbers";
            }
        }
        else { }

        // rental_income
        if (typeof this.rental_income !== "undefined") {
            if (!this.state.rental_income.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["rental_income"] = "Only numbers";
            }
        }
        else { }

        // other_income
        if (typeof this.other_income !== "undefined") {
            if (!this.state.other_income.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["other_income"] = "Only numbers";
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

            employment_type: this.state.employment_type,
            industry: this.state.industry,
            primary_income: this.state.primary_income,
            secondary_income: this.state.secondary_income,
            centrelink_payments: this.state.centrelink_payments,
            dva_payments: this.state.dva_payments,
            superannuation_payments: this.state.superannuation_payments,
            rental_income: this.state.rental_income,
            other_income: this.state.other_income,

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
            inputClientIncome(userData).then(res => {
                this.props.history.push('/other')
            })
            console.log("Income Form submitted");
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
                            <h1 className='h3 mb-3 font-weight normal'>Please Input your Income</h1>
                            <div className='form-group'>
                                <label htmlFor='employment_type'>Employment Type</label>
                                <input type='text'
                                    refs='employment_type'
                                    className='form-control'
                                    name='employment_type'
                                    placeholder='Enter Employment Type'
                                    value={this.state.employment_type}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["employment_type"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='industry'>Industry</label>
                                <input type='text'
                                    refs='industry'
                                    className='form-control'
                                    name='industry'
                                    placeholder='Enter Industry'
                                    value={this.state.industry}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["industry"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='primary_income'>Primary Income</label>
                                <input type='text'
                                    refs='primary_income'
                                    className='form-control'
                                    name='primary_income'
                                    placeholder='Enter Annual Income (pre-tax)'
                                    value={this.state.primary_income}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["primary_income"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='secondary_income'>Secondary Income</label>
                                <input type='text'
                                    refs='secondary_income'
                                    className='form-control'
                                    name='secondary_income'
                                    placeholder='Enter Secondary Income'
                                    value={this.state.secondary_income}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["secondary_income"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='centrelink_payments'>Centrelink Payments</label>
                                <input type='text'
                                    refs='centrelink_payments'
                                    className='form-control'
                                    name='centrelink_payments'
                                    placeholder='Annual Centrelink Payments'
                                    value={this.state.centrelink_payments}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["centrelink_payments"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='dva_payments'>DVA Payments</label>
                                <input type='text'
                                    refs='dva_payments'
                                    className='form-control'
                                    name='dva_payments'
                                    placeholder='Annual DVA Payments'
                                    value={this.state.dva_payments}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["dva_payments"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='superannuation_payments'>Superannuation Payments</label>
                                <input type='text'
                                    refs='superannuation_payments'
                                    className='form-control'
                                    name='superannuation_payments'
                                    placeholder='Annual Superannuation Payments'
                                    value={this.state.superannuation_payments}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["superannuation_payments"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='rental_income'>Rental Income</label>
                                <input type='text'
                                    refs='rental_income'
                                    className='form-control'
                                    name='rental_income'
                                    placeholder='Annual Rental Income'
                                    value={this.state.rental_income}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["rental_income"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='other_income'>Other Income</label>
                                <input type='text'
                                    refs='other_income'
                                    className='form-control'
                                    name='other_income'
                                    placeholder='Other Income'
                                    value={this.state.other_income}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["other_income"]}</span>
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

export default InputClientIncome;
