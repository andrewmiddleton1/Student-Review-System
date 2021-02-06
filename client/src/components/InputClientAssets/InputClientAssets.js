import React from "react";
import { getOneClientByEmail, inputClientAssets, getUsers } from "../UserFunctions/userFunctions";
import { useAppContext } from '../../store';
import { useEffect } from 'react';

// props are the argument of the function
const InputClientAssets = (props) => {
    const [state, dispatch] = useAppContext();
    // in a class component you would initialize the state in the constructor,
    // with functional components you do it in the useState Hook, i called
    // this state 'inputState', you can have more than one state


    const [inputState, setInputState] = React.useState({
        principalResidence: "",
        investmentProperty: "",
        homeContents: "",
        primaryCar: "",
        secondaryCar: "",
        cashInBank: "",
        managedFund: "",
        sharePortfolio: "",
        caravanCamper: "",
        boatWatercraft: "",
        otherMachinery: "",
        otherAsset: "",
        ...state.user,

        UserID: "",

        errors: {}


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


    });




    const handleValidation = () => {
        let errors = {};
        let formIsValid = true;

        // principalResidence
        if (
            !!inputState.principalResidence &&
            !inputState.principalResidence.match(/^[0-9]*$/)
        ) {
            formIsValid = false;
            errors["principalResidence"] = "Only numbers";
        } else {
        }

        // investmentProperty
        if (
            !!inputState.investmentProperty &&
            !inputState.investmentProperty.match(/^[0-9]*$/)
        ) {
            formIsValid = false;
            errors["investmentProperty"] = "Only numbers";
        } else {
        }

        // homeContents
        if (
            !!inputState.homeContents &&
            !inputState.homeContents.match(/^[0-9]*$/)
        ) {
            formIsValid = false;
            errors["homeContents"] = "Only numbers";
        } else {
        }

        // primaryCar
        if (!!inputState.primaryCar && !inputState.primaryCar.match(/^[0-9]*$/)) {
            formIsValid = false;
            errors["primaryCar"] = "Only numbers";
        } else {
        }

        // secondaryCar
        if (
            !!inputState.secondaryCar &&
            !inputState.secondaryCar.match(/^[0-9]*$/)
        ) {
            formIsValid = false;
            errors["secondaryCar"] = "Only numbers";
        } else {
        }

        // cashInBank
        if (!!inputState.cashInBank && !inputState.cashInBank.match(/^[0-9]*$/)) {
            formIsValid = false;
            errors["cashInBank"] = "Only numbers";
        } else {
        }

        // managedFund
        if (!!inputState.managedFund && !inputState.managedFund.match(/^[0-9]*$/)) {
            formIsValid = false;
            errors["managedFund"] = "Only numbers";
        } else {
        }

        // sharePortfolio
        if (
            !!inputState.sharePortfolio &&
            !inputState.sharePortfolio.match(/^[0-9]*$/)
        ) {
            formIsValid = false;
            errors["sharePortfolio"] = "Only numbers";
        } else {
        }

        // caravanCamper
        if (
            !!inputState.caravanCamper &&
            !inputState.caravanCamper.match(/^[0-9]*$/)
        ) {
            formIsValid = false;
            errors["caravanCamper"] = "Only numbers";
        } else {
        }

        // boatWatercraft
        if (
            !!inputState.boatWatercraft &&
            !inputState.boatWatercraft.match(/^[0-9]*$/)
        ) {
            formIsValid = false;
            errors["boatWatercraft"] = "Only numbers";
        } else {
        }

        // otherMachinery
        if (
            !!inputState.otherMachinery &&
            !inputState.otherMachinery.match(/^[0-9]*$/)
        ) {
            formIsValid = false;
            errors["otherMachinery"] = "Only numbers";
        } else {
        }

        // otherAsset
        if (!!inputState.otherAsset && !inputState.otherAsset.match(/^[0-9]*$/)) {
            formIsValid = false;
            errors["otherAsset"] = "Only numbers";
        } else {
        }

        setInputState({
            ...inputState,
            errors: errors
        });

        return formIsValid;
    };

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
            principalResidence: inputState.principalResidence,
            investmentProperty: inputState.investmentProperty,
            homeContents: inputState.homeContents,
            primaryCar: inputState.primaryCar,
            secondaryCar: inputState.secondaryCar,
            cashInBank: inputState.cashInBank,
            managedFund: inputState.managedFund,
            sharePortfolio: inputState.sharePortfolio,
            caravanCamper: inputState.caravanCamper,
            boatWatercraft: inputState.boatWatercraft,
            otherMachinery: inputState.otherMachinery,
            otherAsset: inputState.otherAsset,
            // UserId: currentUserData,


        };
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
            inputClientAssets(userData).then((res) => {
                props.history.push("/other");
            });
            console.log("Form submitted");
            // });
            // else {
            //     errors["email"] = "Email already exists";
            //     this.setState({ errors: errors });
            // }
        } else {
            console.log("Form has errors.");
        }
    };

    // inside return you put whatever was in the return of the render method
    // dont forget to change variable names, this.state, this.onChange and this.onSubmit
    // don't exist anymore (there's no `this` in functional components), they become respectively:
    // inputState, onChange, onSubmit
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <form noValidate onSubmit={onSubmit}>
                        <h1 className="h3 mb-3 font-weight normal">
                            Please Input your Assets
            </h1>
                        <div className="form-group">
                            <label htmlFor="first_name">Principal Residence Value</label>
                            <input
                                type="text"
                                refs="principalResidence"
                                className="form-control"
                                name="principalResidence"
                                placeholder="Enter Value of your Principal Residence"
                                value={inputState.principalResidence}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>
                                {inputState.errors["principalResidence"]}
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="investmentProperty">Investment Property</label>
                            <input
                                type="text"
                                refs="investmentProperty"
                                className="form-control"
                                name="investmentProperty"
                                placeholder="Enter Investment Property Value"
                                value={inputState.investmentProperty}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>
                                {inputState.errors["investmentProperty"]}
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="homeContents">Home Contents Value</label>
                            <input
                                type="text"
                                refs="homeContents"
                                className="form-control"
                                name="homeContents"
                                placeholder="Enter Value of Home Contents"
                                value={inputState.homeContents}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>
                                {inputState.errors["homeContents"]}
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="primaryCar">Primary Car Value</label>
                            <input
                                type="text"
                                refs="primaryCar"
                                className="form-control"
                                name="primaryCar"
                                placeholder="Enter Value of Primary Car"
                                value={inputState.primaryCar}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>
                                {inputState.errors["primaryCar"]}
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="secondaryCar">Secondary Car Value</label>
                            <input
                                type="text"
                                refs="secondaryCar"
                                className="form-control"
                                name="secondaryCar"
                                placeholder="Enter Value of Secondary Car"
                                value={inputState.secondaryCar}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>
                                {inputState.errors["secondaryCar"]}
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="cashInBank">Cash In Bank</label>
                            <input
                                type="text"
                                refs="cashInBank"
                                className="form-control"
                                name="cashInBank"
                                placeholder="Cash In Bank"
                                value={inputState.cashInBank}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>
                                {inputState.errors["cashInBank"]}
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="managedFund">Managed Fund</label>
                            <input
                                type="text"
                                refs="managedFund"
                                className="form-control"
                                name="managedFund"
                                placeholder="Value of Managed Fund"
                                value={inputState.managedFund}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>
                                {inputState.errors["managedFund"]}
                            </span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="sharePortfolio">Share Portfolio</label>
                            <input
                                type="text"
                                refs="sharePortfolio"
                                className="form-control"
                                name="sharePortfolio"
                                placeholder="Value of Share Portfolio"
                                value={inputState.sharePortfolio}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>
                                {inputState.errors["sharePortfolio"]}
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="caravanCamper">Caravan/Camper</label>
                            <input
                                type="text"
                                refs="caravanCamper"
                                className="form-control"
                                name="caravanCamper"
                                placeholder="Value of Caravan/Camper"
                                value={inputState.caravanCamper}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>
                                {inputState.errors["caravanCamper"]}
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="boatWatercraft">Boat/Watercraft</label>
                            <input
                                type="text"
                                refs="boatWatercraft"
                                className="form-control"
                                name="boatWatercraft"
                                placeholder="Value of Boat/Watercraft"
                                value={inputState.boatWatercraft}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>
                                {inputState.errors["boatWatercraft"]}
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="otherMachinery">Other Machinery</label>
                            <input
                                type="text"
                                refs="otherMachinery"
                                className="form-control"
                                name="otherMachinery"
                                placeholder="Value of Other Machinery"
                                value={inputState.otherMachinery}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>
                                {inputState.errors["otherMachinery"]}
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="otherAsset">Any Other Assets</label>
                            <input
                                type="text"
                                refs="otherAsset"
                                className="form-control"
                                name="otherAsset"
                                placeholder="Value of Any Other Assets"
                                value={inputState.otherAsset}
                                onChange={onChange}
                            />
                            <span style={{ color: "red" }}>
                                {inputState.errors["otherAsset"]}
                            </span>
                        </div>

                        <button type="submit" className="btn btn-lg btn-primary btn-block">
                            Register
            </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InputClientAssets;