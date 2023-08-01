import React, {useState, useEffect, Fragment} from 'react';
import {Alert, AlertTitle, Snackbar, Stack, Typography} from "@mui/material";
import {RiSignalWifiErrorFill} from "react-icons/ri";

const NoInternetConnection = (props) => {
    // state variable holds the state of the internet connection
    const [isOnline, setOnline] = useState(true);

    // On initization set the isOnline state.
    useEffect(() => {
        setOnline(navigator.onLine)
    }, [])

    // event listeners to update the state
    window.addEventListener('online', () => {
        setOnline(true)
    });

    window.addEventListener('offline', () => {
        setOnline(false)
    });

    // if user is online, return the child component else return a custom component

    return (
        <Fragment>
            {props.children}
            {!isOnline &&
                <Snackbar open={true} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
                    <Alert severity="error" variant={"filled"}>
                        <AlertTitle><Stack direction={"row"} alignItems={"center"}><RiSignalWifiErrorFill size={20} style={{marginRight: "10px"}}/>No Internet!</Stack></AlertTitle>
                        You are not connected to internet right now. Please try again later.
                    </Alert>
                </Snackbar>
            }
        </Fragment>
    )

}

export default NoInternetConnection;