import InferenceField from "../components/InferenceField";
import Summary from "../components/Summary";
import { useState } from "react";

export default function Inference() {

    const [input, setInput] = useState("");

    const [show, setShow] = useState(false);

    const [toxic, setToxic] = useState(false);

    const [score, setScore] = useState(null);

    const handleSubmit = async () => {
    try {
        const response = await fetch("http://localhost:5000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: input })
        });

        const data = await response.json();
        setToxic(data.label === "Toxic");
        setScore(data.score);
        setShow(true);
    } catch (error) {
        console.error("Error al hacer la predicción:", error);
        setShow(false);
        setScore(null);
    }
};


    const handleClean = () => {
        setInput("");
        setShow(false);
    }

    return (
        <div>
            <InferenceField 
                input = {input} 
                setInput = {setInput} 
                handleSubmit = {handleSubmit} 
                handleClean={handleClean} 
                show={show} 
                toxic={toxic}
                score={score}
            />
            <Summary input={input} />
        </div>
    )
}