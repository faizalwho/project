import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Jumbotron, Button } from 'reactstrap';
import { ToastContainer ,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useAsync } from "react-async"
import Axios from 'axios';
const Url = "https://api.thingspeak.com/channels/1289760/fields/2.json?api_key=EKHXRHHRGFQAQJAR&results=2";

const loadUsers = async () =>
  await fetch(Url)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())




export default function Faisal() {
   

    const notify = () => {
        Axios.post('https://api.thingspeak.com/update?api_key=DLL93BDDZOQOUERG&field2=0');
        toast("Bill Paid!");
        window.location.reload();
    };
    const { data, error, isLoading } = useAsync({ promiseFn: loadUsers })
  if (isLoading) return "Loading..."
  if (error) return `Something went wrong: ${error.message}`
  if (data)
    return (
        <div className="App" >
            <Container>
            <Jumbotron>
            <h1>Welcome, Ruksar. Here's your bill:</h1>
            </Jumbotron>

            

            

            <h3>
             <span> {data.feeds[1].field2 === null ? "you bought 0 chocolates": "you bought " + data.feeds[1].field2 + " chocolates" } </span>
            Your total amount to be paid is Rs. <span className='text-warning' >{data.feeds[1].field2*100}</span>
            </h3>
            <div>

            {data.feeds[1].field2 === null ? '':(<Button onClick={notify} className='btn btn-success' >
            Pay Rs <span>{data.feeds[1].field2*100}</span>
            </Button>)}
            
            
            <ToastContainer />
            </div>
            <br />

            <Button className='btn btn-light' >
            <Link className='text-primary' to="/">
                 Back to Home
               </Link>
            </Button> 
            </Container>
        </div>
    )
}
