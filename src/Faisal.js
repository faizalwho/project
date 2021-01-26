import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import { Container, Jumbotron, Button } from 'reactstrap';
import { ToastContainer ,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useAsync } from "react-async"
import Axios from 'axios';
const Url = "https://api.thingspeak.com/channels/1289760/fields/1.json?api_key=EKHXRHHRGFQAQJAR&results=2";

const loadUsers = async () =>
  await fetch(Url)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())




export default function Faisal() {
   

    const notify = () => {
        Axios.post('https://api.thingspeak.com/update?api_key=DLL93BDDZOQOUERG&field1=0')
        .then(toast("Bill Paid!"));
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
            <h1>Welcome, Faisal. Here's your bill:</h1>
            </Jumbotron>

            

            

            <h3>
            <span> {data.feeds[1].field1 === null ? "you bought 0 chocolates": "you bought " + data.feeds[1].field1 + " chocolates" } </span>
            Your total amount to be paid is Rs. <span className='text-warning' >{data.feeds[1].field1*100}</span>
            </h3>
            
            {data.feeds[1].field1 === null ? '':(
                <Button onClick={notify} className='btn btn-success' >
            Pay Rs <span>{data.feeds[1].field1*100}</span>
            </Button>
            )}
            <ToastContainer />

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
