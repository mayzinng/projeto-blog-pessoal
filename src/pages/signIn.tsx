import { MainContainer } from "@/styles/pages/signUp";
import { Container } from "@/styles/pages/signIn";
import Image from "next/image";

import Logo from '../assets/logo.svg'
import { useState } from "react";
import axios from "axios";

export default function SignUp() {

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');


    const handleChange = (e: any) => {
        e.preventDefault();
        if(e.target.name === 'username') {
            setUsername(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        } 

    }

    const handleSubmit = () => {
        axios.get("http://localhost:3001/", {
            password: password,
            username: username,
        }).then((response) => {
            console.log(response)
        });

        const user = {
            username: username,
        }

        const setUser = localStorage.setItem('username', JSON.stringify(user));
        const getUser = localStorage.getItem('username');
        console.log(getUser);

        const convertUser = JSON.parse(getUser);
        console.log(convertUser.username);
    }
      

    return(
        <MainContainer>
            <Container>
                <div>
                    <h1>Sign In</h1>
                    <Image src={Logo} height={60} width={60} alt="Logo do blog"></Image>
                </div>
                <div>
                    <form>
                        <label>Username</label>
                        <input name="username" value={username} type="text" placeholder="Username"
                        onChange={handleChange}
                        ></input>

                        <label>Password</label>
                        <input name="password" value={password} type="password" placeholder="Password"
                        onChange={handleChange}
                        ></input>
                        
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </Container>
        </MainContainer>
    )
}