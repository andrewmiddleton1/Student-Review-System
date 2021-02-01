import React, { Component } from "react";
import { getUsers, inputClientParticulars } from '../UserFunctions/userFunctions';

class InputClientParticulars extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            salutation: '',
            preferredName: '',
            date_of_birth: '',
            sex: '',
            marital_status: '',
            tax_resident: '',
            citizen: '',
            country_of_origin: '',
            preservation_age: '',
            age_pension_age: '',
            address: '',
            mobile: '',
            home_phone: '',
            work_phone: '',
            errors: {},

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleValidation() {
        let errors = {};
        let formIsValid = true;
        // email
        const inputEmail = this.state.email;
        const emailRegex = /^\w+([\.-]?\w+)*@[a-z]+([\.-]?[a-z]+)*(\.[a-z]{2,4})+$/;
        const emailResult = emailRegex.test(inputEmail);
        if (!this.state.email) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }
        else if (!emailResult) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
        }
        else { }

        // password
        if (!this.state.password) {
            formIsValid = false;
            errors["password"] = "Cannot be empty";
        }
        else if (this.state.password.length < 6) {
            formIsValid = false;
            errors["password"] = "Password must be at least 6 characters";
        }
        else { }

        // firstName
        if (!this.state.first_name) {
            formIsValid = false;
            errors["first_name"] = "Cannot be empty";
        }
        else if (typeof this.state.first_name !== "undefined") {
            if (!this.state.first_name.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["first_name"] = "Only letters";
            }
        }
        else { }

        // lastName
        if (!this.state.last_name) {
            formIsValid = false;
            errors["last_name"] = "Cannot be empty";
        }
        else if (!this.state.last_name.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["last_name"] = "Only letters";
        }
        else { }

        // salutation
        if (!this.state.salutation) {
            formIsValid = false;
            errors["salutation"] = "Cannot be empty";
        }
        else if (!this.state.salutation.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["salutation"] = "Only letters";
        }
        else { }

        // preferredName
        if (!this.state.preferredName) {
            formIsValid = false;
            errors["preferredName"] = "Cannot be empty";
        }
        else if (!this.state.preferredName.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["preferredName"] = "Only letters";
        }
        else { }

        // date_of_birth
        if (!this.state.date_of_birth) {
            formIsValid = false;
            errors["date_of_birth"] = "Cannot be empty";
        }
        else if (!this.state.date_of_birth.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["date_of_birth"] = "Only letters";
        }
        else { }

        // sex
        if (!this.state.sex) {
            formIsValid = false;
            errors["sex"] = "Cannot be empty";
        }
        else if (!this.state.sex.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["sex"] = "Only letters";
        }
        else { }

        // marital_status
        if (!this.state.marital_status) {
            formIsValid = false;
            errors["marital_status"] = "Cannot be empty";
        }
        else if (!this.state.marital_status.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["marital_status"] = "Only letters";
        }
        else { }

        // tax_resident
        if (!this.state.tax_resident) {
            formIsValid = false;
            errors["tax_resident"] = "Cannot be empty";
        }
        else if (!this.state.tax_resident.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["tax_resident"] = "Only letters";
        }
        else { }

        // citizen
        if (!this.state.citizen) {
            formIsValid = false;
            errors["citizen"] = "Cannot be empty";
        }
        else if (!this.state.citizen.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["citizen"] = "Only letters";
        }
        else { }

        // country_of_origin
        if (!this.state.country_of_origin) {
            formIsValid = false;
            errors["country_of_origin"] = "Cannot be empty";
        }
        else if (!this.state.country_of_origin.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["country_of_origin"] = "Only letters";
        }
        else { }

        // preservation_age
        if (!this.state.preservation_age) {
            formIsValid = false;
            errors["preservation_age"] = "Cannot be empty";
        }
        else if (!this.state.preservation_age.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["preservation_age"] = "Only letters";
        }
        else { }

        // age_pension_age
        if (!this.state.age_pension_age) {
            formIsValid = false;
            errors["age_pension_age"] = "Cannot be empty";
        }
        else if (!this.state.age_pension_age.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["age_pension_age"] = "Only letters";
        }
        else { }

        // address
        if (!this.state.address) {
            formIsValid = false;
            errors["address"] = "Cannot be empty";
        }
        else if (!this.state.address.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["address"] = "Only letters";
        }
        else { }

        // mobile
        if (!this.state.mobile) {
            formIsValid = false;
            errors["mobile"] = "Cannot be empty";
        }
        else if (!this.state.mobile.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["mobile"] = "Only letters";
        }
        else { }

        //  home_phone
        if (!this.state.home_phone) {
            formIsValid = false;
            errors["home_phone"] = "Cannot be empty";
        }
        else if (!this.state.home_phone.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors[" home_phone"] = "Only letters";
        }
        else { }

        // work_phone
        if (!this.state.work_phone) {
            formIsValid = false;
            errors["work_phone"] = "Cannot be empty";
        }
        else if (!this.state.work_phone.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["work_phone"] = "Only letters";
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
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            salutation: this.state.salutation,
            preferredName: this.state.preferredName,
            date_of_birth: this.state.date_of_birth,
            sex: this.state.sex,
            marital_status: this.state.marital_status,
            tax_resident: this.state.tax_resident,
            citizen: this.state.citizen,
            country_of_origin: this.state.country_of_origin,
            preservation_age: this.state.preservation_age,
            age_pension_age: this.state.age_pension_age,
            address: this.state.address,
            mobile: this.state.mobile,
            home_phone: this.state.home_phone,
            work_phone: this.state.work_phone,
        }
        var result = this.handleValidation();
        console.log(result);
        if (this.handleValidation()) {
            getUsers().then(response => {
                console.log(response);

                var destination = response.data.map(element => {
                    if (element.email === this.state.email) {
                        console.log('foundmatch');
                        console.log(element.email)
                        return true;
                    }
                }).filter(item => { return item; })[0];
                if (!destination) {
                    inputClientParticulars(userData).then(res => {
                        if (res) {
                            this.props.history.push('/other');
                        }
                    })
                    console.log("Particulars Form submitted");
                }
                else {
                    errors["email"] = "Email already exists";
                    this.setState({ errors: errors });
                }
            })
        }
        else {
            console.log("Form has errors.")
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mt-5 mx-auto'>
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className='h3 mb-3 font-weight normal'>Please Input your Particulars</h1>
                            <div className='form-group'>
                                <label htmlFor='first_name'>First Name</label>
                                <input type='text'
                                    refs='first_name'
                                    className='form-control'
                                    name='first_name'
                                    placeholder='Enter First Name'
                                    value={this.state.first_name}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["first_name"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='last_name'>Last Name</label>
                                <input type='text'
                                    refs='last_name'
                                    className='form-control'
                                    name='last_name'
                                    placeholder='Enter Last Name'
                                    value={this.state.last_name}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["last_name"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='email'>Email Address</label>
                                <input type='email'
                                    refs='email'
                                    className='form-control'
                                    name='email'
                                    placeholder='Enter Email'
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>Password</label>
                                <input type='password'
                                    refs='password'
                                    className='form-control'
                                    name='password'
                                    placeholder='Enter Password'
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='salutation'>salutation</label>
                                <input type='salutation'
                                    refs='salutation'
                                    className='form-control'
                                    name='salutation'
                                    placeholder='Enter Salutation'
                                    value={this.state.salutation}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["salutation"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='preferredName'>Preferred Name</label>
                                <input type='preferredName'
                                    refs='preferredName'
                                    className='form-control'
                                    name='preferredName'
                                    placeholder='Enter Preferred Name'
                                    value={this.state.preferredName}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["date_of_birth"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='date_of_birth'>Date of Birth</label>
                                <input type='date_of_birth'
                                    refs='date_of_birth'
                                    className='form-control'
                                    name='date_of_birth'
                                    placeholder='Enter Date of Birth'
                                    value={this.state.date_of_birth}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["date_of_birth"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='sex'>Sex</label>
                                <input type='sex'
                                    refs='sex'
                                    className='form-control'
                                    name='sex'
                                    placeholder='Enter Sex'
                                    value={this.state.sex}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["sex"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='marital_status'>Martital Status</label>
                                <input type='marital_status'
                                    refs='marital_status'
                                    className='form-control'
                                    name='marital_status'
                                    placeholder='Enter Marital Status'
                                    value={this.state.marital_status}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["marital_status"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='tax_resident'>Tax Resident</label>
                                <input type='tax_resident'
                                    refs='tax_resident'
                                    className='form-control'
                                    name='tax_resident'
                                    placeholder='Enter Tax Residence Status'
                                    value={this.state.tax_resident}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["tax_resident"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='citizen'>Citizen</label>
                                <input type='citizen'
                                    refs='citizen'
                                    className='form-control'
                                    name='citizen'
                                    placeholder='Enter Citizen Status'
                                    value={this.state.citizen}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["citizen"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='country_of_origin'>Country of Origin</label>
                                <input type='country_of_origin'
                                    refs='country_of_origin'
                                    className='form-control'
                                    name='country_of_origin'
                                    placeholder='Enter Country of Origin'
                                    value={this.state.country_of_origin}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["country_of_origin"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='preservation_age'>Preservation Age</label>
                                <input type='preservation_age'
                                    refs='preservation_age'
                                    className='form-control'
                                    name='preservation_age'
                                    placeholder='Enter Preservation Age'
                                    value={this.state.preservation_age}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["preservation_age"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='age_pension_age'>Age Pension Age</label>
                                <input type='age_pension_age'
                                    refs='age_pension_age'
                                    className='form-control'
                                    name='age_pension_age'
                                    placeholder='Enter Age Pension Age'
                                    value={this.state.age_pension_age}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["age_pension_age"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='address'>Address</label>
                                <input type='address'
                                    refs='address'
                                    className='form-control'
                                    name='address'
                                    placeholder='Enter Address'
                                    value={this.state.address}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["address"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='mobile'>Mobile Phone Number</label>
                                <input type='mobile'
                                    refs='mobile'
                                    className='form-control'
                                    name='mobile'
                                    placeholder='Enter Mobile Phone Number'
                                    value={this.state.mobile}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["mobile"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='home_phone'>Home Phone Number</label>
                                <input type='home_phone'
                                    refs='home_phone'
                                    className='form-control'
                                    name='home_phone'
                                    placeholder='Enter Home Phone Number'
                                    value={this.state.home_phone}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["home_phone"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='work_phone'>Work Phone Number</label>
                                <input type='work_phone'
                                    refs='work_phone'
                                    className='form-control'
                                    name='work_phone'
                                    placeholder='Enter Work Phone Number'
                                    value={this.state.work_phone}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["work_phone"]}</span>
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

export default InputClientParticulars;
