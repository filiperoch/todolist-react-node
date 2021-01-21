import React from "react";
import { useStoreActions, useStoreState } from "../../store/hookStore";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

interface Props{
    //todas as propriedades de tipos aqui
}

/**
 * React.FC = react functional component
 */

const Couter:React.FC<Props> = (props:Props) => {
    const counter = useStoreState((state)=>state.countStore.count);
    const setCounter= useStoreActions((actions)=>actions.countStore.setCount);

    const history = useHistory();

    const goBackToLogin = () => {
        history.goBack();
    }

    return (
        <>
            <h1>Contador</h1>

            <p>Valor do Contador: {counter}</p>
            <Button variant="contained" color="primary" onClick={
                ()=>setCounter(counter+1)
            }>+</Button>

            <Button variant="contained" color="primary" onClick={
                ()=>setCounter(0)
            }>RESET</Button>

            <Button variant="contained" color="primary" onClick={
                ()=>goBackToLogin()
            }>Back to login</Button>
        </>
    );
}

export default Couter;
