import { TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import { useStoreActions, useStoreState } from "../../store/hookStore";
import { Link } from "react-router-dom";

function Login(){

    const counter = useStoreState((state)=>state.countStore.count);
    const setCounter= useStoreActions((actions)=>actions.countStore.setCount);

    return (
        <>
            <Typography variant="h1" >
                Tela de login
            </Typography>
            <Typography variant="body1" >
                valor inicial para o counter
            </Typography>

            <TextField
                defaultValue = {counter}
                onChange={
                    (event)=>setCounter(parseInt(event.target.value))
                } id="standard-required"
            />

            <Link to="app" >
                Ir para a tela do contador
            </Link>
        </>
    );
}

export default Login;
