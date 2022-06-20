import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Login Here</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <NavDropdown title="Login" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="John" />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group>
                  <Form.Label>FamilyName</Form.Label>
                  <Form.Control type="text" placeholder="Doe" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Adress-email</Form.Label>
              <Form.Control type="email" placeholder="UserName@gmail.com" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="********" />
            </Form.Group>
            <Form.Group>
              <Form.Text clasName="text-muted">
                We'll never share your account information, trust us
              </Form.Text>
            </Form.Group>
          </Form>
          <Button
            type="submit"
            variant="success"
            style={{ width: 200, margin: 15 }}
          >
            Share
          </Button>
        </Container>
        {/* <Card className="mb-3" style={{ color: "#000" }}>
          <Card.Img src="https://picsum.photos/200/100" />
          <Card.Body>
            <Card.Title>Butiful Pictures</Card.Title>
            <Card.Text>
              This is one of the most popular photos that you watched it
            </Card.Text>
            <Button variant="primary">Read more</Button>
          </Card.Body>
        </Card> */}
      </header>
    </div>
  );
}

export default App;
