/* eslint-disable no-unreachable */
import React from "react";
import Container from "../../Container/index";
import SearchForm from "../SearchForm/SearchForm";
import FeedbackSearchResults from "../SearchResults/FeedbackSearchResults";
import Alert from "../../Alert/index";
import { useAppContext } from '../../../store';
import { getOneStudentFeedback, getOneStudentByLastName } from "../../UserFunctions/userFunctions";

const FeedbackSearch = () => {

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
        console.log(LastNameForFunction);
        getOneStudentByLastName(LastNameForFunction)
            .then((currentUserData) => {
                console.log(currentUserData);
                console.log(currentUserData.data[0].id);





                getOneStudentFeedback(currentUserData.data[0].id)
                    .then(res => {
                        console.log(res);
                        console.log(res.data);


                        setInputState({
                            ...inputState,
                            results: res.data[0]
                        });
                        console.log(inputState.results);
                    })
                    .catch(err => setInputState({ error: err.message }));

            });


    };


    return (
        <div>
            {/* <Container style={{ minHeight: "80%", width: "100%" }}> */}

            <SearchForm
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
                clients={inputState.clients}
            />
            <FeedbackSearchResults results={inputState.results} />
            {/* </Container> */}
        </div>
    );

}

export default FeedbackSearch;
