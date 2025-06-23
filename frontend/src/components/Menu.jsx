import { Button } from "react-bootstrap";

export function Menu({ chosen, onClick, words }) {

    return (
        <div 
            style={{ 
                width: "8%", 
                height: "300px", 
                overflowY: "scroll", 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center", 
                alignItems: "center", 
                border: "1px solid black",
                marginLeft: "30px",
            }}
        >
            {words.map((item, index) => (
                    <Button 
                        key = {index}
                        variant="light"
                        style={{
                            width: "100%",
                        }}
                        disabled = {item === chosen}
                        onClick={() => onClick(item)}
                    >
                        {item}
                    </Button>
                ))}
        </div>
    )

}