import * as ReactBootStrap from "react-bootstrap";
function Navbar(){
    return(
        <>
        <ReactBootStrap.Navbar bg="dark" variant="dark">
    <ReactBootStrap.Container>
    <ReactBootStrap.Navbar.Brand href="#home">Profile</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="#home">Skills</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#features">Marks</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing">Experience</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
    </ReactBootStrap.Container>
  </ReactBootStrap.Navbar>

        </>
    );
};
export default Navbar;