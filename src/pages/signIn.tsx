import { MainContainer } from "@/styles/pages/signUp";
import { Container } from "@/styles/pages/signIn";
import Image from "next/image";

import Logo from '../assets/logo.svg'
import { useState } from "react";

export default function SignUp() {

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

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
                        <input name="username" type="text" placeholder="Username"
                        ></input>

                        <label>Password</label>
                        <input name="password"  type="password" placeholder="Password"
                        ></input>
                        
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </Container>
        </MainContainer>
    )
}