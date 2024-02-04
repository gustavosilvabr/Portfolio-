import './style.css';
import { FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
export default function CardPerfil({ imgPerfil, Nome, Email, Telefone, Localização, gitHub }){
    return (
        <div className='container-perfil'>
            <img src={imgPerfil} alt="" />
            <div className='contato'>
                <ul>
                    <li>
                        <IoPeopleCircleOutline size={55}/>
                        Nome: {Nome}</li>
                    <li>
                        <FaGithub size={45}/>GitHub: {gitHub}
                    </li>
                    <li>
                        <MdOutlineEmail size={45}/> Email: {Email}
                    </li>
                    <li>
                        <IoCallOutline size={45}/>Telefone: {Telefone}
                    </li>
                    <li>
                        <MdOutlineEmail size={45}/>Localização: {Localização}
                    </li>
                </ul>
            </div>
        </div>
    )
}