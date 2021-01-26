import './App.css';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Button
} from 'reactstrap';


function App() {
  

  return (
    <div className="App">
    <Container className="App-header">
    <h1>BE Project: Smart Shopping Mall
    </h1>
    <h3>Please Log In</h3>
     <Button className="btn-light" >
     <Link to="/Faisal">
          Faisal
        </Link>
     </Button> 
<br />
     <Button className="btn-light" >
     <Link to="/Ruksar">
          Ruksar
        </Link>
     </Button> 
      
      </Container>
      
    </div>
  );
}

export default App;
