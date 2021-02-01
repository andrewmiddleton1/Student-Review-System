import React, { Component } from "react";
import { registerUser, getUsers, inputClientAssets, inputClientExpenses } from '../UserFunctions/userFunctions';

class InputClientExpenses extends Component {
    constructor(props) {
        super(props)
        this.state = {

            mortgage_repayments: '',
            rent: '',
            council_rates: '',
            land_tax: '',
            electricity_utilities: '',
            investment_property_costs: '',
            telephone_internet: '',
            groceries: '',
            recreation_entertainment: '',
            clothing_personal_care: '',
            medical_health: '',
            transport: '',
            education: '',
            childcare: '',
            insurance: '',
            child_maintenance: '',
            other_Expenses: '',
            errors: {},

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleValidation() {
        let errors = {};
        let formIsValid = true;


        // mortgage_repayments
        if (typeof this.mortgage_repayments !== "undefined") {
            if (!this.state.mortgage_repayments.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["mortgage_repayments"] = "Only numbers";
            }
        }
        else { }

        // rent
        if (typeof this.rent !== "undefined") {
            if (!this.state.rent.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["rent"] = "Only numbers";
            }
        }
        else { }

        // council_rates
        if (typeof this.council_rates !== "undefined") {
            if (!this.state.council_rates.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["council_rates"] = "Only numbers";
            }
        }
        else { }

        // land_tax
        if (typeof this.land_tax !== "undefined") {
            if (!this.state.land_tax.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["land_tax"] = "Only numbers";
            }
        }
        else { }

        // electricity_utilities
        if (typeof this.electricity_utilities !== "undefined") {
            if (!this.state.electricity_utilities.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["electricity_utilities"] = "Only numbers";
            }
        }
        else { }

        // investment_property_costs
        if (typeof this.investment_property_costs !== "undefined") {
            if (!this.state.investment_property_costs.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["investment_property_costs"] = "Only numbers";
            }
        }
        else { }

        // telephone_internet
        if (typeof this.telephone_internet !== "undefined") {
            if (!this.state.telephone_internet.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["telephone_internet"] = "Only numbers";
            }
        }
        else { }

        // groceries
        if (typeof this.groceries !== "undefined") {
            if (!this.state.groceries.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["groceries"] = "Only numbers";
            }
        }
        else { }

        // recreation_entertainment
        if (typeof this.recreation_entertainment !== "undefined") {
            if (!this.state.recreation_entertainment.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["recreation_entertainment"] = "Only numbers";
            }
        }
        else { }

        // clothing_personal_care
        if (typeof this.clothing_personal_care !== "undefined") {
            if (!this.state.clothing_personal_care.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["clothing_personal_care"] = "Only numbers";
            }
        }
        else { }

        // medical_health
        if (typeof this.medical_health !== "undefined") {
            if (!this.state.medical_health.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["medical_health"] = "Only numbers";
            }
        }
        else { }


        // transport
        if (typeof this.transport !== "undefined") {
            if (!this.state.transport.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["transport"] = "Only numbers";
            }
        }
        else { }

        // education
        if (typeof this.education !== "undefined") {
            if (!this.state.education.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["education"] = "Only numbers";
            }
        }
        else { }

        // childcare
        if (typeof this.childcare !== "undefined") {
            if (!this.state.childcare.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["childcare"] = "Only numbers";
            }
        }
        else { }

        // insurance
        if (typeof this.insurance !== "undefined") {
            if (!this.state.insurance.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["insurance"] = "Only numbers";
            }
        }
        else { }

        // child_maintenance
        if (typeof this.child_maintenance !== "undefined") {
            if (!this.state.child_maintenance.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["child_maintenance"] = "Only numbers";
            }
        }
        else { }

        // other_Expenses
        if (typeof this.other_Expenses !== "undefined") {
            if (!this.state.other_Expenses.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["other_Expenses"] = "Only numbers";
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

            mortgage_repayments: this.state.mortgage_repayments,
            rent: this.state.rent,
            council_rates: this.state.council_rates,
            land_tax: this.state.land_tax,
            electricity_utilities: this.state.electricity_utilities,
            investment_property_costs: this.state.investment_property_costs,
            telephone_internet: this.state.telephone_internet,
            groceries: this.state.groceries,
            recreation_entertainment: this.state.recreation_entertainment,
            clothing_personal_care: this.state.clothing_personal_care,
            medical_health: this.state.medical_health,
            transport: this.state.transport,
            education: this.state.education,
            childcare: this.state.childcare,
            insurance: this.state.insurance,
            child_maintenance: this.state.child_maintenance,
            other_Expenses: this.state.other_Expenses,


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
            inputClientExpenses(userData).then(res => {
                this.props.history.push('/other')
            })
            console.log("Expenses Form submitted");
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
                            <h1 className='h3 mb-3 font-weight normal'>Please Input your Monthly Expenses</h1>
                            <div className='form-group'>
                                <label htmlFor='mortgage_repayments'>Monthly Mortgage Repayments</label>
                                <input type='text'
                                    refs='mortgage_repayments'
                                    className='form-control'
                                    name='mortgage_repayments'
                                    placeholder='Enter Monthly Mortgage Payments'
                                    value={this.state.mortgage_repayments}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["mortgage_repayments"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='rent'>Rent</label>
                                <input type='text'
                                    refs='rent'
                                    className='form-control'
                                    name='rent'
                                    placeholder='Enter Monthly Rent'
                                    value={this.state.rent}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["rent"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='council_rates'>Council Rates</label>
                                <input type='text'
                                    refs='council_rates'
                                    className='form-control'
                                    name='council_rates'
                                    placeholder='Enter Monthly Council Rates'
                                    value={this.state.council_rates}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["council_rates"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='land_tax'>Land Tax</label>
                                <input type='text'
                                    refs='land_tax'
                                    className='form-control'
                                    name='land_tax'
                                    placeholder='Enter Monthly Land Tax'
                                    value={this.state.land_tax}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["land_tax"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='electricity_utilities'>Electricity and Utilities</label>
                                <input type='text'
                                    refs='electricity_utilities'
                                    className='form-control'
                                    name='electricity_utilities'
                                    placeholder='Enter Monthly Electricity and Utilities'
                                    value={this.state.electricity_utilities}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["electricity_utilities"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='investment_property_costs'>Investment Property Costs</label>
                                <input type='text'
                                    refs='investment_property_costs'
                                    className='form-control'
                                    name='investment_property_costs'
                                    placeholder='Monthly Investment Property Costs'
                                    value={this.state.investment_property_costs}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["investment_property_costs"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='telephone_internet'>Telephone and Internet</label>
                                <input type='text'
                                    refs='telephone_internet'
                                    className='form-control'
                                    name='telephone_internet'
                                    placeholder='Monthly Telephone and Internet Bills'
                                    value={this.state.telephone_internet}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["telephone_internet"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='groceries'>Groceries</label>
                                <input type='text'
                                    refs='groceries'
                                    className='form-control'
                                    name='groceries'
                                    placeholder='Monthly Cost of Groceries'
                                    value={this.state.groceries}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["groceries"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='recreation_entertainment'>Recreation and Entertainment</label>
                                <input type='text'
                                    refs='recreation_entertainment'
                                    className='form-control'
                                    name='recreation_entertainment'
                                    placeholder='Monthly Recreation and Entertainment Expenses'
                                    value={this.state.recreation_entertainment}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["recreation_entertainment"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='clothing_personal_care'>Clothing and Personal Care</label>
                                <input type='text'
                                    refs='clothing_personal_care'
                                    className='form-control'
                                    name='clothing_personal_care'
                                    placeholder='Monthly Clothing and Personal Care Costs'
                                    value={this.state.clothing_personal_care}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["clothing_personal_care"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='medical_health'>Medical and Health</label>
                                <input type='text'
                                    refs='medical_health'
                                    className='form-control'
                                    name='medical_health'
                                    placeholder='Monthly Medical and Health Costs'
                                    value={this.state.medical_health}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["medical_health"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='transport'>Transport</label>
                                <input type='text'
                                    refs='transport'
                                    className='form-control'
                                    name='transport'
                                    placeholder='Monthly Transport Costs'
                                    value={this.state.transport}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["transport"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='education'>Education</label>
                                <input type='text'
                                    refs='education'
                                    className='form-control'
                                    name='education'
                                    placeholder='Monthly Education Costs'
                                    value={this.state.education}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["education"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='childcare'>Childcare</label>
                                <input type='text'
                                    refs='childcare'
                                    className='form-control'
                                    name='childcare'
                                    placeholder='Monthly Childcare Costs'
                                    value={this.state.childcare}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["childcare"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='insurance'>Insurance</label>
                                <input type='text'
                                    refs='insurance'
                                    className='form-control'
                                    name='insurance'
                                    placeholder='Monthly Insurance Costs'
                                    value={this.state.insurance}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["insurance"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='child_maintenance'>Child Maintenance</label>
                                <input type='text'
                                    refs='child_maintenance'
                                    className='form-control'
                                    name='child_maintenance'
                                    placeholder='Monthly Child Maintenance Costs'
                                    value={this.state.child_maintenance}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["child_maintenance"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='other_Expenses'>Other Expenses</label>
                                <input type='text'
                                    refs='other_Expenses'
                                    className='form-control'
                                    name='other_Expenses'
                                    placeholder='Any Other Monthly Expenses'
                                    value={this.state.other_Expenses}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["other_Expenses"]}</span>
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

export default InputClientExpenses;


