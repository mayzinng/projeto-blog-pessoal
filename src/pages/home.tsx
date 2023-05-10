import { Header, MainContainer, SectionPosts } from "@/styles/pages/home";

import Logo from '../assets/logo.svg';
import notification from '../assets/notificationIcon.svg';
import perfil from '../assets/perfil.svg'
import Image from "next/image";


export default function Home() {
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
                    <textarea placeholder="Share something..."></textarea>
                    <button type="submit">post</button>
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