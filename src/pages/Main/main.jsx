import { useEffect, useState } from "react";
import Header from "../../components/Header";
import CardPerfil from "../../components/card_perfil";
import './style.css';
import axios from "axios";
import SoftSkils from "../../components/soft_skils";
import imgReact from './img/react.svg'
import imgJavascript from './img/javascript.svg'
import imgPostgres from './img/postgres.svg'
import Projetos from "../../components/projetos";
function Main() {
  const [Perfil, setPerfil] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get('https://api.github.com/users/gustavosilvabr');
        console.log(response.data);
        setPerfil(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);


  return (
    <>
      <Header nome_logo='Gustavo pereira Dev front-end' />
      <div className="container-perfil-soft-skils">
        <CardPerfil
        imgPerfil={Perfil.avatar_url} 
        gitHub={Perfil.login}
        Nome={Perfil.name}
        Email={'Gutzs1212@gmail.com'}
        Telefone={'(61) 995167585'}
        Localização={Perfil.location}
        />    
        <div className="container-soft-projetos">
          <SoftSkils
            nomeSkil1='JavaScript'
            imgSkil1={imgJavascript}
            nomeSkil2='ReactJS'
            imgSkil2={imgReact}
            nomeSkil3='PostgresSql'
            imgSkil3={imgPostgres}
            />
            < Projetos/>
        </div>
          
      </div>
    </>
  )
}
export default Main;
