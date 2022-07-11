import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import jwtDecode from 'jwt-decode';
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../actions/userAction";

function CheckProfile ({children}){
    const token = localStorage.getItem("token");
    console.log(token);
    const decoded = jwtDecode(token);
    const { listUserResult, listUserLoading, listUserError } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("1. use effect component did mount")
        dispatch(getCurrentUser());
    }, [dispatch])

    listUserResult ? (
        listUserResult.map((user) => {
            return (
                console.log("uzah getto")
            )
        })
    ) : listUserLoading ? (
        console.log("loding cuy")
    ) : (
        console.log("eror cuy")
    )

    return children
}

export default CheckProfile