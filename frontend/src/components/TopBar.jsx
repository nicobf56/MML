import { Container, Navbar } from "react-bootstrap";

export default function TopBar() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="https://industrial.uniandes.edu.co/sites/default/files/imagenes/uniandeslogo.png"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
                        style={{ marginRight: "15px" }}
                    />
                    <span style={{height: "100%", verticalAlign: "center"}}>
                        Hate Speech Detection - Machine Learning Techniques
                    </span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}