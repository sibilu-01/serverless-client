import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import LoaderButton from "../components/LoaderButton";
import { Auth } from "aws-amplify";
import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";
import { onError } from "../libs/errorLib";
import "./Login.css";

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const { userHasAuthenticated } = useAppContext();
    const [field, handleFieldChange] = useFormFields({
        email: "",
        password: ""
    })

    function validateForm() {
        return field.email.length > 0 && field.password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        
        setIsLoading(true);
        try {
            await Auth.signIn(field.email, field.password);
            userHasAuthenticated(true);
        } catch (e) {
            onError(e)
            setIsLoading(false)
        }
    }

    return (
        <div className="Login">
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
                autoFocus
                type="email"
                value={field.email}
                onChange={handleFieldChange}
            />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                value={field.password}
                onChange={handleFieldChange}
            />
            </Form.Group>
            <LoaderButton
                block
                size="lg"
                type="submit"
                isLoading={isLoading}
                disabled={!validateForm()}
                >
                Login
            </LoaderButton>
        </Form>
        </div>
    );
}