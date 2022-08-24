import React, { useState } from 'react';
import {Session} from '../requests';

function SignInPage(props){
    const { onSignIn } = props;

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState([])

    function handleSubmit(event){
        event.preventDefault();
        const params = {
            email: email,
            password: password
        }

        Session.create(params).then(data => {
            if (data.status === 404) {
                setErrors([...errors, {message: "Wrong email or password"}])
            }
            else if (data.id){
                console.log(data)
                onSignIn()
                console.log(props)
                props.history.push('/items')
            }
        })
    }

    return(
        <main>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                {errors.length > 0 ? (
                    <div>
                        <h4>Failed to Sign In</h4>
                        <p>{errors.map(error => error.message).join(", ")}</p>
                    </div>
                ) : (
                    ""
                )}

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" onChange={event => {
                        setEmail(event.currentTarget.value)}} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={event => {
                        setPassword(event.currentTarget.value)}} />
                </div>
                <input type="submit" value="Sign In" />
            </form>
        </main>
    )
}

export default SignInPage;
