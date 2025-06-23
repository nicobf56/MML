import BarGraph from "./BarGraph";
import { Menu } from "./Menu";
import { useEffect, useState } from "react";

export default function Summary({ input }) {
    const [words, setWords] = useState([]);
    const [wordData, setWordData] = useState({
        word: "",
        data: [
            { name: 'Not Toxic', Frequency: 0 },
            { name: 'Toxic', Frequency: 0 },
        ]
    });

    useEffect(() => {
        const fetchWordStats = async () => {
            // Limpiar y extraer palabras únicas
            const extractedWords = [...new Set(input.toLowerCase().match(/\b\w+\b/g))];
            if (!extractedWords || extractedWords.length === 0) {
                setWords([]);
                setWordData({
                    word: "",
                    data: [
                        { name: 'Not Toxic', Frequency: 0 },
                        { name: 'Toxic', Frequency: 0 },
                    ]
                });
                return;
            }

            // Llamadas al backend para cada palabra
            const results = await Promise.all(
                extractedWords.map(async (word) => {
                    const res = await fetch(`http://localhost:5000/word_stats?word=${word}`);
                    return await res.json();
                })
            );

            setWords(results);
            setWordData(results[0]); // Mostrar la primera por defecto
        };

        if (input.trim() !== "") {
            fetchWordStats();
        } else {
            setWords([]);
            setWordData({
                word: "",
                data: [
                    { name: 'Not Toxic', Frequency: 0 },
                    { name: 'Toxic', Frequency: 0 },
                ]
            });
        }
    }, [input]);

    const handleWordChange = (word) => {
        const selectedWord = words.find(w => w.word === word);
        setWordData(selectedWord);
    };

    return (
        <div style={{ width: "100%", height: "300px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }}>
            <BarGraph data={wordData.data} />
            <Menu chosen={wordData.word} onClick={handleWordChange} words={words.map(w => w.word)} />
        </div>
    );
}
