import { Header, MainContainer, SectionPosts } from "@/styles/pages/home";

import Logo from '../assets/logo.svg';
import notification from '../assets/notificationIcon.svg';
import perfil from '../assets/perfil.svg'
import Image from "next/image";
import { useState } from "react";
import axios from "axios";


export default function Home() {

    const [post, setPost] = useState('');

    const handleChange = (e: any) => {
        setPost(e.target.value);

        console.log(e.target.value.toString());

        const posts = e.target.value.toString();
        console.log(posts.length);

    }

    const handleSubmit = () => {
        axios.post("http://localhost:3001/posts", {
            post: post
        }).then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })

    }

    return(
        <MainContainer>
            <Header>
                <div>
                <Image height={50} width={50} alt="Logo do website" src={Logo}></Image>

                <div>
                    <button>
                        <Image height={35} width={35} alt="Logo do website" src={notification}></Image>
                    </button>

                    <Image height={35} width={35} alt="Logo do website" src={perfil}></Image>
                </div>
                </div>
            </Header>

            <SectionPosts>
                <div>
                    <textarea placeholder="Share something..." value={post} onChange={handleChange}></textarea>
                    <button type="submit" onClick={handleSubmit}>post</button>
                </div>

                <div>
                    <Image src={perfil} width={20} height={20} alt="foto de perfil"></Image>
                    <span>Nome</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur mattis elit in consequat. Aliquam a dui in risus aliquet varius. Vivamus at tellus libero. Donec efficitur sapien ac mattis accumsan.</p>
                </div>
            </SectionPosts>
            
        </MainContainer>
    )
}