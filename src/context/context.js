import { createContext, useContext, useEffect, useReducer} from "react";
import axios from "axios";
import reducer from "../reducer/patientReducer";
import GetLink from "./api";

const AppContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    patients: [],
    featurePatients: [],
    isSingleLoading: false,
    singlePatient: {},
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getPatients = async (url) => {
        dispatch({type: "SET_LOADING"});
        try{
            const res = await axios.get(url);
            const patients = await res.data;
            dispatch({type: "SET_API_DATA", payload: patients});
        } catch(error){
            dispatch({type: "SET_API_ERROR"});
        }
       
    };

    const getSinglePatient = async (url) => {
        dispatch({type: "SET_SINGLE_LOADING"});
        try{
            const res = await axios.get(url);
            const singlePatient = await res.data;
            dispatch({type: "SET_SINGLE_PATIENT", payload: singlePatient});
        } catch(error){
            dispatch({type: "SET_SINGLE_ERROR"});
        }
    }

    const updateSinglePatient = async (url) => {
        dispatch({type: "SET_UPDATE_LOADING"});
        try{
            const res = await axios.get(url);
            const singlePatient = await res.data;
            dispatch({type: "SET_SINGLE_PATIENT", payload: singlePatient});
        } catch(error){
            dispatch({type: "SET_SINGLE_ERROR"});
        }
    }

    useEffect(() => {
        getPatients(`${GetLink.API}/patient`);
    },[])
    
    return (
        <AppContext.Provider value={{ ...state,  getSinglePatient}}>
            {children}
        </AppContext.Provider>
    );
        
    
};


const usePatientContext = () => {
    return useContext(AppContext);
};


export {AppProvider, AppContext, usePatientContext };