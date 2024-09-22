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

    const delayPara=(index, nextWord)=>{

    }
    const onSent=async(prompt)=>{
        setResultData("")
        setLoadings(true)
        setShowResult(true)
        setRecentPrompt(input)
        const response=await runChat(input)
        let responseArray=response.split("**")
        let newResponse;
        for(let i=0;i<responseArray.length;i++)
        {
            if(i==0||i%2!==1){
               newResponse+=responseArray[i] ;

            }
            else{
                newResponse+="<b>"+responseArray[i]+"</b>"
            }
        }
        setResultData(newResponse)
        setLoadings(false)
        setInput("")

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