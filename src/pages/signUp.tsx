import { MainContainer } from "@/styles/pages/signUp";
import { Container } from "@/styles/pages/signUp";
import Image from "next/image";

import Logo from '../assets/logo.svg'
import { useEffect, useState } from "react";

import axios from "axios";


export default function SignUp() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    const handleChange = (e: any) => {
        e.preventDefault();
        if (e.target.name === 'name') { 
            setName(e.target.value);
            console.log(name)
         } else if ( e.target.name === 'email' ) {
            setEmail(e.target.value);
         } else if ( e.target.name === 'username' ) {
            setUsername(e.target.value)
         } else if ( e.target.name === 'password' ) {
            setPassword(e.target.value)
         }

    }

    const handleSubmit = () => {
        axios.post("http://localhost:3001/", {
            name: name,
            email: email,
            username: username,
            password: password
        }).then((response) => {
            console.log(response)
        })
    }
      


   
    return(
        <MainContainer>
            <Container>
                <div>
                    <h1>Sign up</h1>
                    <Image src={Logo} height={60} width={60} alt="Logo do blog"></Image>
                </div>
                <div>
                    <form>
                        <label>Name</label>
                        <input name="name" value={name} type="text" placeholder="Name"
                        onChange={handleChange} 
                        ></input>

                        <label>Email</label>
                        <input name="email" value={email} type="text" placeholder="Email"
                        onChange={handleChange} 
                        ></input>

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