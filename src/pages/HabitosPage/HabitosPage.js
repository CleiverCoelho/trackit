import styled from "styled-components"
import Logo from "../Logo.png"
import { Link } from "react-router-dom"
import { CircularProgressbar, buildStyles} from "react-circular-progressbar"
import React, { useContext } from "react"
import Habito from "./Habito"
import { BASE_URL } from "../url/BaseUrl"
import { useEffect } from "react"
import UserContext from "../../contexts/UserContext"
import axios from "axios"
import HabitoAPI from "./HabitoAPI"

export default function HabitosPage({setHabitosAPI}){
    
    const [criarHabito, setCriarHabito] = React.useState(false);
    const [habitoCriado, setHabitoCriado] = React.useState({nome: "", dias: []})
    const [useEFControl, setUseEFControl] = React.useState([]);


    const {userInfo, habitosAPI} = useContext(UserContext);

    console.log(habitosAPI);

    function adicionarHabito(){
        if(criarHabito === true){
            alert("Finalize o cadastro aberto")
        }
        setCriarHabito(true);
    }

    useEffect ( () => {
        // para fazer a requisicao é precisao que esteja no formato
        const config = {
            headers: { "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`}
        }
        axios.get(`${BASE_URL}/habits`, config)
        .then((res) => {
            setHabitosAPI(res.data);
        })
        .catch((err) => {
            alert(err.response.data.message);
        })

    }, [useEFControl]);

    return (
        <HabitosContainer>
            <Topo>
                <p>TrackIt</p>
                <img src={Logo} alt="FotoPerfil"></img>
            </Topo>

            <MeusHabitos>
                <p>Meus Habitos</p>
                <ion-icon onClick={adicionarHabito} name="add"></ion-icon>
            </MeusHabitos>

            <ListaHabitos>
                {habitosAPI.map((habito) => {
                    return (
                        <HabitoAPI
                            key={habito.id}
                            id={habito.id}
                            diasSelecionados={habito.days}
                            nome={habito.name}
                        ></HabitoAPI>
                    )
                })}
            </ListaHabitos>

            <ListaHabitos>
                {criarHabito && <Habito 
                    useEFControl={useEFControl}
                    setUseEFControl={setUseEFControl} 
                    criarHabito={criarHabito}
                    habitoCriado={habitoCriado}
                    setHabitoCriado={setHabitoCriado}
                    setCriarHabito={setCriarHabito}
                ></Habito> }    
            </ListaHabitos>


            <Menu>
                <LinkUnderscore to="/habitos">
                    <p>Hábitos</p>
                </LinkUnderscore>
                <LinkUnderscore to="/hoje">
                    <Progresso>
                        <CircularProgressbar
                            value={66}
                            text={`Hoje`}
                            background
                            backgroundPadding={7}
                            styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                            })}
                        />
                    </Progresso>
                </LinkUnderscore>
                
                <LinkUnderscore>
                    <p>Historico</p>
                </LinkUnderscore>
            </Menu>
        </HabitosContainer>
    )
}

const ListaHabitos = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 15px;
`

const MeusHabitos = styled.div`
    display: flex;
    margin-top: 15px;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    width: 375px;
    height: 35px;
    ion-icon {
        width: 40px;
        height: 35px;
        border-radius: 5px;
        background-color: #52B6FF;
        color: white;
    }
    p {
        color: #126BA5;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        text-align: center;
        text-decoration: none;
    }
`

const HabitosContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Progresso = styled.div`
    padding: 10px;
    position: absolute;
    text-align: center;
    bottom: 15px;
    left: 150px;
    width: 91px;
    height: 91px;
    font-weight: 700;
    .CircularProgressbar-text {
        text-anchor: middle;
    }
`

const LinkUnderscore = styled(Link)`
    text-decoration: none;
    margin-top: 15px;
`

const Topo = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    padding: 15px;
    background-color: #126BA5;
    color: white;
    p {
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 39px;
        line-height: 49px;
    }
    img {
        width: 51px;
        height: 51px;
        border-radius: 99px;
    }
`

const Menu = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0px;
    background-color: white;
    display: flex;
    justify-content: space-around;
    p {
        color: #52B6FF;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        text-decoration: none;
    }
`