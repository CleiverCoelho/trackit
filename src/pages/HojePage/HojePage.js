import styled from "styled-components"
import { Link } from "react-router-dom"
import Tarefa from "./Tarefa"
import { CircularProgressbar, buildStyles} from "react-circular-progressbar"
import UserContext from "../../contexts/UserContext"
import React, { useContext } from "react"
import { BASE_URL } from "../url/BaseUrl";
import axios from "axios";
import { useEffect } from "react";

export default function HojePage({setPorcentagem}){
    const now = new Date ()
    const diasSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
    const pos = now.getDay();
    const dia = now.getDate();
    const mes = now.getMonth();

    const {userInfo} = useContext(UserContext);
    const [tarefasHoje, setTarefasHoje] = React.useState([]);
    let tarefasConcluidas = [];
    const [useEFControl, setUseEFControl] = React.useState([]);    
    
    const {porcentagem} = useContext(UserContext);

    useEffect ( () => {
        // para fazer a requisicao é precisao que esteja no formato
        const config = {
            headers: { "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`}
        }
        axios.get(`${BASE_URL}/habits/today`, config)
        .then((res) => {
            setTarefasHoje(res.data);
        })
        .catch((err) => {
            alert(err.response.data.message);
        })

    }, [useEFControl]);

    return (
        <HojeContainer>
            <Topo data-test="header">
                <p>TrackIt</p>
                <img src={userInfo.image} alt="FotoPerfil"></img>
            </Topo>
            
            <DiaContainer>
                <TextoDiaSemana data-test="today">{diasSemana[pos]}, {dia}/{mes < 9 && "0"}{mes + 1}</TextoDiaSemana>
                <TextoHabitosConcluidos data-test="today-counter"
                    cor={porcentagem === 0 ? "#BABABA" : "#8FC549"}
                    >
                        {porcentagem === 0 ? "Nenhum hábito concluido ainda" : 
                            `${porcentagem}% dos habitos concluídos`    
                        }
                </TextoHabitosConcluidos>
            </DiaContainer>
            <TarefasContainer>
                {tarefasHoje.map( (tarefa, index) => {
                        if(tarefa.done){
                            tarefasConcluidas.push(tarefa.id);
                            console.log(index);
                        }
                        if(index === tarefasHoje.length - 1){

                            setPorcentagem(tarefasConcluidas.length * 100 / tarefasHoje.length)
                        }
                        return (
                            <Tarefa key={tarefa.id}
                                tarefasHoje={tarefasHoje.length}
                                setPorcentagem={setPorcentagem}
                                useEFControl={useEFControl}
                                setUseEFControl={setUseEFControl}
                                nome={tarefa.name}
                                id={tarefa.id}
                                maiorSequencia={tarefa.highestSequence}
                                sequenciaAtual = {tarefa.currentSequence}
                                done={tarefa.done}
                                tarefasConcluidas={tarefasConcluidas}
                            ></Tarefa>
                        )
                    } )}
            </TarefasContainer>
                

            <Menu data-test="menu">
                <LinkUnderscore data-test="habit-link" to="/habitos">
                    <p>Hábitos</p>
                </LinkUnderscore>
                <LinkUnderscore data-test="today-link" to="/hoje">
                    <Progresso>
                        <CircularProgressbar
                            value={porcentagem}
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
                
                <LinkUnderscore to="/historico" data-test="history-link">
                    <p>Historico</p>
                </LinkUnderscore>
            </Menu>
        </HojeContainer>
    )
}

const TarefasContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 340px;
    height: auto;
    padding: 15px;
`

const DiaContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 20px;
`
const TextoDiaSemana = styled.p`
    margin-top: 7px;
    width: 300px;
    height: 29px;
    color: #126BA5;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
`

const TextoHabitosConcluidos = styled.p`
    color: ${(props) => props.cor};
    margin-top: 7px;
    width: 300px;
    height: 29px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
`

const HojeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 90px;
`

const Progresso = styled.div`
    padding: 10px;
    position: absolute;
    text-align: center;
    bottom: 15px;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    left: 145px;
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