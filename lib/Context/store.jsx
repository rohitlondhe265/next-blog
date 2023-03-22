'use client';

import axios from "../axios";
import { createContext, useContext } from "react";


export const PostContext = createContext({});

const initialState = {
    isLoading: true,
    data: [],
    page: 0,
    totalPages: 0,
    limit: 6
}

export const PostContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);

    dispatch({type: "SET_LOADING"});

    const getApiData = (url) => {
    try {
        const res = axios.get(url);
        dispatch({
            type: "GET_POSTS",
            payload: {
                data: res.data,
                totalPages: res.totalPages
            }
        })
    } catch (error) {
        console.log(error)
    } }

    const getNextPage = () => {
        dispatch({type: "NEXT_PAGE"});
    }
    const getPrevPage = () => {
        dispatch({type: "PREV_PAGE"});
    }
    
    return (
        <PostContext.Provider value={{...state, getApiData, getNextPage, getPrevPage }}>
            {children}
        </PostContext.Provider>
    )
};

export default useGlobalContext = () => useContext(PostContext);