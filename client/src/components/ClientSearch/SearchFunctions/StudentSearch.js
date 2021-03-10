/* eslint-disable no-unreachable */
import React from "react";
import Container from "../../Container/index";
import SearchForm from "../SearchForm/SearchForm";
import StudentSearchResults from "../SearchResults/StudentSearchResults";
import { useAppContext } from '../../../store';
import { getOneStudent } from "../../UserFunctions/userFunctions";

const StudentSearch = () => {

    const [state, dispatch] = useAppContext();

    const [inputState, setInputState] = React.useState({
        search: "",
        client: [],
        results: [],
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
    const handleFormSubmit = event => {
        event.preventDefault();


        const LastNameForFunction = inputState.search;
        getOneStudent(LastNameForFunction)
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


    return (
        <div>
            <Container style={{ minHeight: "80%" }}>

                <SearchForm
                    handleFormSubmit={handleFormSubmit}
                    handleInputChange={handleInputChange}
                    clients={inputState.clients}
                />
                <StudentSearchResults results={inputState.results} />
            </Container>
        </div>
    );

}

export default StudentSearch;
