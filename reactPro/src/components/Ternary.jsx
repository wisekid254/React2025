import Code from "./Code";
import ConditionalComponent from "./ConditionalComponent";

export default function Ternary(){
    const display = false;
    return display?<ConditionalComponent/>:<Code/> 

}