import * as ReactBootStrap from 'react-bootstrap' ;
import img from '../images/mycv.jpeg';


function Profile(){
    return(
        <>
          
        <ReactBootStrap.Card style={{ width: '18rem' }}>
  <ReactBootStrap.Card.Img variant="top" src={img} />
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title><strong>Sunil V </strong></ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text>
     Data Scientist
    </ReactBootStrap.Card.Text>
  
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>

        </>

);
};
export default Profile;