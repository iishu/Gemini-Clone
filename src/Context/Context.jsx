import {useState, createContext } from "react";
import runChat from "../config/Gemini";
export const Context=createContext();

const ContextProvider=(props)=>{
    const [input, setInput]=useState(""); //save the input data in prompt
    const [recentPrompt, setRecentPrompt]=useState(""); //
    const [prevPrompt, setPrevPrompt]=useState([]);
    const [showResult, setShowResult]=useState(false);
    const [loadings, setLoadings]=useState(false);
    const [resultData,setResultData]=useState("");

    const onSent=async(prompt)=>{
       await  runChat(input)
    }
     const contextValue={
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loadings,
        resultData,
        input,
        setInput

        
}
return(
   <Context.Provider value={contextValue} >
    {props.children}
   </Context.Provider> 
)
}
export default ContextProvider;