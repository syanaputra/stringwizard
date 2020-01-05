import React, {useReducer} from "react";
import {TextField, Grid, Button} from "@material-ui/core";
import StringOptions from "../StringOptions";
import jsonStringParse from "@syanaputra/json-string-parser/src/jsonStringParse"

const INITIAL_STATE = {
    input: '',
    output: '',
    selectedRules: [
        {
            "type": "trim",
        },
        {
            "type": "split",
            "value": ",",
        },
    ],
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_INPUT':
            return {
                ...state,
                input: action.value
            };

        case 'PROCESS_OUTPUT':
            return {
                ...state,
                output: jsonStringParse(state.input, state.selectedRules)
            };

        case 'ADD_RULE':
            return {
                ...state,
            };

        case 'DELETE_RULE':
            return {
                ...state,
            };

        case 'SET_RULES':
            return {
                ...state,
            };

        default:
            throw new Error();
    }
}

function Workspace(props) {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const {input, output, selectedRules} = state;

    const handleInputUpdate = e => {
        e.preventDefault();

        dispatch({
            type: 'SET_INPUT',
            value: e.target.value
        });
    };

    const process = e => {
        e.preventDefault();

        dispatch({
            type: 'PROCESS_OUTPUT',
        });
    };

    return (
        <React.Fragment>
            <TextField
                multiline={true}
                placeholder="Your text here"
                label="Your Text"
                rows="4"
                onChange={handleInputUpdate}
                value={input}
            />

            <StringOptions
                value={selectedRules}
            />

            <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={process}
            >
                Process
            </Button>

            <TextField
                multiline={true}
                disabled={true}
                placeholder="Your text here"
                label="Results"
                rows="4"
                value={output}
            />
        </React.Fragment>
    );
}

export default Workspace;
