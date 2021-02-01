import React, { Component } from "react";
import { inputClientAssets } from '../UserFunctions/userFunctions';

class InputClientAssets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            principalResidence: '',
            investmentProperty: '',
            homeContents: '',
            primaryCar: '',
            secondaryCar: '',
            cashInBank: '',
            managedFund: '',
            sharePortfolio: '',
            caravanCamper: '',
            boatWatercraft: '',
            otherMachinery: '',
            otherAsset: '',
            errors: {},

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleValidation() {
        let errors = {};
        let formIsValid = true;


        // principalResidence
        if (typeof this.principalResidence !== "undefined") {
            if (!this.state.principalResidence.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["principalResidence"] = "Only numbers";
            }
        }
        else { }

        // investmentProperty
        if (typeof this.investmentProperty !== "undefined") {
            if (!this.state.investmentProperty.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["investmentProperty"] = "Only numbers";
            }
        }
        else { }

        // homeContents
        if (typeof this.homeContents !== "undefined") {
            if (!this.state.homeContents.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["homeContents"] = "Only numbers";
            }
        }
        else { }

        // primaryCar
        if (typeof this.primaryCar !== "undefined") {
            if (!this.state.primaryCar.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["primaryCar"] = "Only numbers";
            }
        }
        else { }

        // secondaryCar
        if (typeof this.secondaryCar !== "undefined") {
            if (!this.state.secondaryCar.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["secondaryCar"] = "Only numbers";
            }
        }
        else { }

        // cashInBank
        if (typeof this.cashInBank !== "undefined") {
            if (!this.state.cashInBank.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["cashInBank"] = "Only numbers";
            }
        }
        else { }

        // managedFund
        if (typeof this.managedFund !== "undefined") {
            if (!this.state.managedFund.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["managedFund"] = "Only numbers";
            }
        }
        else { }

        // sharePortfolio
        if (typeof this.sharePortfolio !== "undefined") {
            if (!this.state.sharePortfolio.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["sharePortfolio"] = "Only numbers";
            }
        }
        else { }

        // caravanCamper
        if (typeof this.caravanCamper !== "undefined") {
            if (!this.state.caravanCamper.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["caravanCamper"] = "Only numbers";
            }
        }
        else { }

        // boatWatercraft
        if (typeof this.boatWatercraft !== "undefined") {
            if (!this.state.boatWatercraft.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["boatWatercraft"] = "Only numbers";
            }
        }
        else { }

        // otherMachinery
        if (typeof this.otherMachinery !== "undefined") {
            if (!this.state.otherMachinery.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["otherMachinery"] = "Only numbers";
            }
        }
        else { }


        // otherAsset
        if (typeof this.otherAsset !== "undefined") {
            if (!this.state.otherAsset.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["otherAsset"] = "Only numbers";
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

            principalResidence: this.state.principalResidence,
            investmentProperty: this.state.investmentProperty,
            homeContents: this.state.homeContents,
            primaryCar: this.state.primaryCar,
            secondaryCar: this.state.secondaryCar,
            cashInBank: this.state.cashInBank,
            managedFund: this.state.managedFund,
            sharePortfolio: this.state.sharePortfolio,
            caravanCamper: this.state.caravanCamper,
            boatWatercraft: this.state.boatWatercraft,
            otherMachinery: this.state.otherMachinery,
            otherAsset: this.state.otherAsset,


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
            inputClientAssets(userData).then(res => {
                this.props.history.push('/other')
            })
            console.log("Form submitted");
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
                            <h1 className='h3 mb-3 font-weight normal'>Please Input your Assets</h1>
                            <div className='form-group'>
                                <label htmlFor='first_name'>Principal Residence Value</label>
                                <input type='text'
                                    refs='principalResidence'
                                    className='form-control'
                                    name='principalResidence'
                                    placeholder='Enter Value of your Principal Residence'
                                    value={this.state.principalResidence}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["principalResidence"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='investmentProperty'>Investment Property</label>
                                <input type='text'
                                    refs='investmentProperty'
                                    className='form-control'
                                    name='investmentProperty'
                                    placeholder='Enter Investment Property Value'
                                    value={this.state.investmentProperty}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["investmentProperty"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='homeContents'>Home Contents Value</label>
                                <input type='text'
                                    refs='homeContents'
                                    className='form-control'
                                    name='homeContents'
                                    placeholder='Enter Value of Home Contents'
                                    value={this.state.homeContents}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["homeContents"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='primaryCar'>Primary Car Value</label>
                                <input type='text'
                                    refs='primaryCar'
                                    className='form-control'
                                    name='primaryCar'
                                    placeholder='Enter Value of Primary Car'
                                    value={this.state.primaryCar}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["primaryCar"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='secondaryCar'>Secondary Car Value</label>
                                <input type='text'
                                    refs='secondaryCar'
                                    className='form-control'
                                    name='secondaryCar'
                                    placeholder='Enter Value of Secondary Car'
                                    value={this.state.secondaryCar}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["secondaryCar"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='cashInBank'>Cash In Bank</label>
                                <input type='text'
                                    refs='cashInBank'
                                    className='form-control'
                                    name='cashInBank'
                                    placeholder='Cash In Bank'
                                    value={this.state.cashInBank}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["cashInBank"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='managedFund'>Managed Fund</label>
                                <input type='text'
                                    refs='managedFund'
                                    className='form-control'
                                    name='managedFund'
                                    placeholder='Value of Managed Fund'
                                    value={this.state.managedFund}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["managedFund"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='sharePortfolio'>Share Portfolio</label>
                                <input type='text'
                                    refs='sharePortfolio'
                                    className='form-control'
                                    name='sharePortfolio'
                                    placeholder='Value of Share Portfolio'
                                    value={this.state.sharePortfolio}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["sharePortfolio"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='caravanCamper'>Caravan/Camper</label>
                                <input type='text'
                                    refs='caravanCamper'
                                    className='form-control'
                                    name='caravanCamper'
                                    placeholder='Value of Caravan/Camper'
                                    value={this.state.caravanCamper}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["caravanCamper"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='boatWatercraft'>Boat/Watercraft</label>
                                <input type='text'
                                    refs='boatWatercraft'
                                    className='form-control'
                                    name='boatWatercraft'
                                    placeholder='Value of Boat/Watercraft'
                                    value={this.state.boatWatercraft}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["boatWatercraft"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='otherMachinery'>Other Machinery</label>
                                <input type='text'
                                    refs='otherMachinery'
                                    className='form-control'
                                    name='otherMachinery'
                                    placeholder='Value of Other Machinery'
                                    value={this.state.otherMachinery}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["otherMachinery"]}</span>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='otherAsset'>Any Other Assets</label>
                                <input type='text'
                                    refs='otherAsset'
                                    className='form-control'
                                    name='otherAsset'
                                    placeholder='Value of Any Other Assets'
                                    value={this.state.otherAsset}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["otherAsset"]}</span>
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

export default InputClientAssets;
