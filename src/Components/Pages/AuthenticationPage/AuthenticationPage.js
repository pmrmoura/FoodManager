import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AuthenticationPage.css';
import { Redirect } from 'react-router-dom';
import API from '../../../services/api';


export default function AuthenticationPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState('');
    const [id, setId] = useState('');

    function onSubmit(event) {
        event.preventDefault();
        login(username, password);
    }

    function login(username, password) {
        API.post('api/auth/signin', {
            username : username,
            password : password
        }).then((response) => {
            const { id } = response;
            setId(id);
            document.cookie = JSON.stringify(response);
            handleSignIn();
        }).cacth((error) => {
            console.log(error);
        })
    }

    function handleSignIn() {
        setRedirect(`/restaurante/${id}`)
    }

    function handleNewUser(){
        setRedirect('/sign-up');
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
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" onChange={(event) => {
                        const { value } = event.target;
                        setUsername(value);
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