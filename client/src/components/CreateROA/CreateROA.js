/* eslint-disable no-unreachable */
import React from "react";
import Container from "../Container/index";
import ROASearchForm from "./ROASearchForm/ROASearchForm";
import ROAResults from "./ROAResults";
import { useAppContext } from '../../store';
import { getClientAssetsData, getOneClientByLastName, getClientParticulars, getClientLiabilitiesData, getClientIncomeData, getClientExpensesData } from "../UserFunctions/userFunctions";

const CreateROA = () => {

    const [state, dispatch] = useAppContext();

    const [inputState, setInputState] = React.useState({
        search: "",
        client: [],
        particulars: [],
        assets: [],
        liabilities: [],
        income: [],
        expenses: [],
        error: "",
        UserId: ""

    });

    const handleInputChange = async (event) => {
        // to update the inputState you don't use this.setState anymore but setInputState
        setInputState({
            ...inputState, // you always have to copy the old state like this
            search: event.target.value // and set the property that changed like this
        });

    };

    // 
    const handleFormSubmit = (event) => {
        event.preventDefault();


        const LastNameForFunction = inputState.search;
        console.log(LastNameForFunction);
        getOneClientByLastName(LastNameForFunction)
            .then((currentUserData) => {
                console.log(currentUserData);
                console.log(currentUserData.data.id);


                getClientAssetsData(currentUserData.data.id)
                    .then(res => {
                        console.log(res);

                        setInputState({
                            ...inputState,
                            assets: res.data
                        });
                        console.log(inputState.assets);
                    })
                    .catch(err => setInputState({ error: err.message }));

                // getClientParticulars(currentUserData.data.id)
                //     .then(res => {
                //         console.log(res);

                //         setInputState({
                //             ...inputState,
                //             particulars: res.data
                //         });
                //         console.log(inputState.particulars);
                //     })
                //     .catch(err => setInputState({ error: err.message }));

                // getClientIncomeData(currentUserData.data.id)
                //     .then(res => {
                //         console.log(res);

                //         setInputState({
                //             ...inputState,
                //             income: res.data
                //         });
                //         console.log(inputState.income);
                //     })
                //     .catch(err => setInputState({ error: err.message }));

                // getClientExpensesData(currentUserData.data.id)
                //     .then(res => {
                //         console.log(res);

                //         setInputState({
                //             ...inputState,
                //             expenses: res.data
                //         });
                //         console.log(inputState.expenses);
                //     })
                //     .catch(err => setInputState({ error: err.message }));

                // getClientLiabilitiesData(currentUserData.data.id)
                //     .then(res => {
                //         console.log(res);

                //         setInputState({
                //             ...inputState,
                //             liabilities: res.data
                //         });
                //         console.log(inputState.liabilities);
                //     })
                //     .catch(err => setInputState({ error: err.message }));
            });
    };


    return (
        <div>
            <Container style={{ minHeight: "80%" }}>

                <ROASearchForm
                    handleFormSubmit={handleFormSubmit}
                    handleInputChange={handleInputChange}
                    clients={inputState.clients}


                />
                <ROAResults assets={inputState.assets}
                    liabilities={inputState.liabilities}
                    expenses={inputState.expenses}
                    income={inputState.income}
                    particulars={inputState.particulars} />
            </Container>
        </div>
    );

}

export default CreateROA;
