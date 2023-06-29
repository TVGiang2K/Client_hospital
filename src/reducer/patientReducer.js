const PatientReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };

        case "SET_API_DATA":
            const featureData = action.payload.filter((curPatient) => {
                return curPatient.status === true;
            });
            return {
                ...state,
                isLoading: false,
                patients: action.payload,
                featurePatients: featureData,
            };

        case "SET_API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            };

        case "SET_SINGLE_PATIENT":
           
            return {
                ...state,
                isSingleLoading: false,
                singlePatient:{ ...action.payload },
            };

        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true,
            };
        default:
            return state;
    }
};

export default PatientReducer;