import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../actions/userAction";

function CheckProfile ({children}){
    const { listUserResult, listUserLoading, listUserError } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("1. use effect component did mount")
        dispatch(getCurrentUser());
    }, [dispatch])
    console.log(listUserResult.alamat)
    if(listUserResult.alamat === null) return <Navigate to='/lengkapi-profil'/>

    return children
}

export default CheckProfile