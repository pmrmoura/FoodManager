import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AuthenticationPage.css';
import { Redirect } from 'react-router-dom';


export default function AuthenticationPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState('');
    const [id, setId] = useState('');

    function onSubmit(event) {
        event.preventDefault();
        console.log(email, password);
    }

    function handleSignIn() {
        setRedirect(`/restaurante/${id}`)
    }

    function handleNewUser(){
        setRedirect('/sign-up');
        console.log(redirect);
    }

    if (redirect) {
        return(
            <Redirect to={redirect} />
        );
    }

    return (
        <div className="authentication-wrapper">
            <div className="title-page">
                <h1>Food Manager</h1>
            </div>
            <Form onSubmit={(event) => {
                onSubmit(event);
            }}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" onChange={(event) => {
                        const { value } = event.target;
                        setEmail(value);
                    }} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" onChange={(event) => {
                        const { value } = event.target;
                        setPassword(value);
                    }} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enter
                </Button>
            </Form>

            <div className="new-user">
                <p onClick = {handleNewUser} >Novo na página? Clique aqui!</p>
            </div>


        </div>
    );

}