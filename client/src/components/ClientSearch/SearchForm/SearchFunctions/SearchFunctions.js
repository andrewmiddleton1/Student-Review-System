/* eslint-disable no-unreachable */
import React from "react";
import Container from "../../../../components/Container/index";
import SearchForm from "../../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
import Alert from "../../../../components/Alert/index";
import { useAppContext } from '../../../../store';
import { getClientAssetsData, getOneClientByLastName } from "../../../UserFunctions/userFunctions";
import { useEffect } from 'react';

const Search = () => {

    const [state, dispatch] = useAppContext();

    const [inputState, setInputState] = React.useState({
        search: "",
        client: [],
        results: [],
        error: "",
        ...state.user,
        UserId: ""

    });

    const handleInputChange = (event) => {
        // to update the inputState you don't use this.setState anymore but setInputState
        setInputState({
            ...inputState, // you always have to copy the old state like this
            [event.target.name]: event.target.value // and set the property that changed like this
        });
    };


    // 
    const handleFormSubmit = event => {
        event.preventDefault();
        // console.log(inputState.UserId);
        const UserIDforFunction = inputState.UserId;
        console.log(UserIDforFunction);
        getClientAssetsData(UserIDforFunction)
            .then(res => {

                console.log(res);

                setInputState({
                    ...inputState,
                    results: res.data
                });
                console.log(inputState.results);
            })
            .catch(err => setInputState({ error: err.message }));
    };

    useEffect(() => {
        const LastNameForFunction = state.user.last_name;
        console.log(LastNameForFunction);
        getOneClientByLastName(LastNameForFunction)
            .then((currentUserData) => {
                console.log(currentUserData);
                // console.log(currentUserData.data.id);
                // UserEmailId.push(currentUserData);
                // console.log(UserEmailId[0]);
                setInputState({
                    ...inputState,
                    UserId: currentUserData.data.id
                });
            });
    }, []);



    return (
        <div>
            <Container style={{ minHeight: "80%" }}>
                <h1 className="text-center">Welcome to the Planner Tools!</h1>
                <Alert
                    type="danger"
                    style={{ opacity: inputState.error ? 1 : 0, marginBottom: 10 }}
                >
                    {inputState.error}
                </Alert>
                <SearchForm
                    handleFormSubmit={handleFormSubmit}
                    handleInputChange={handleInputChange}
                    clients={inputState.clients}
                />
                <SearchResults results={inputState.results} />
            </Container>
        </div>
    );

}

export default Search;
