import styled from "styled-components"
import { BASE_URL } from "../url/BaseUrl";
import axios from "axios";
import React from "react";
import loadingIMG from "./loading2.gif"

export default function Tarefa({nome, sequenciaAtual, maiorSequencia, done, 
    id, tarefasConcluidas, setUseEFControl, useEFControl, setPorcentagem, tarefasHoje}){

    const idTarefa = id;
    const [carregando, setCarregando] = React.useState(false);

    function toggleTarefa () {
        setCarregando(true);
        const config = {
            headers: { "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`}
        }
        if(tarefasConcluidas.includes(id)){
            axios.post(`${BASE_URL}/habits/${idTarefa}/uncheck`, {}, config)
                .then((res) => {
                    const novaLista = tarefasConcluidas.filter( (tarefa) => tarefa !== idTarefa);
                    tarefasConcluidas = novaLista;
                    setCarregando(false);
                    // setPorcentagem(tarefasConcluidas.length * 100 / tarefasHoje)
                })
                .catch((err) => {
                    alert(err.response.data.message);
                })
        }else {
            axios.post(`${BASE_URL}/habits/${idTarefa}/check`, {}, config)
                .then((res) => {
                    tarefasConcluidas.push(idTarefa)
                    setCarregando(false);
                    // setPorcentagem(tarefasConcluidas.length * 100 / tarefasHoje)
                })
                .catch((err) => {
                    alert(err.response.data.message);
                })
            }

        setUseEFControl([...useEFControl, useEFControl.length + 1])
    }
    console.log(nome, ": ", done);

    return (
        <TarefaContainer data-test="today-habit-container" colorCheck={done ? "#8FC549" : "#E7E7E7"}>
            <InfoTarefa>
                <h1 data-test="today-habit-name">{nome}</h1>
                <p data-test="today-habit-sequence">Sequencia atual: {sequenciaAtual} dias</p>
                <p data-test="today-habit-record">seu recorde: {maiorSequencia} dias</p>
            </InfoTarefa>
            {carregando ? 
                <DivImg>
                    <img src={loadingIMG} alt="loading"></img>
                </DivImg> :
                <ion-icon data-test="today-habit-check-btn" onClick={toggleTarefa} name={"checkbox"}></ion-icon>
            }

        </TarefaContainer>
    )

}

const TarefaContainer = styled.div`
    width: 340px;
    background-color: white;
    height: 94px;
    display: flex;
    border: none;
    border-radius: 5px;
    justify-content: space-around;
    margin-bottom: 10px;
    ion-icon{
        width: 91px;
        height: 91px;
        color: ${(props) => props.colorCheck};
        margin-left: 100px;
    }
    img {
        /* margin-top: 20px; */
        width: 45px;
        height: 45px;
    }
`
const DivImg = styled.div`
    width: 91px;
    height: 91px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const InfoTarefa = styled.div`
    display: flex;
    padding: 10px;
    justify-content: flex-start;
    flex-direction: column;
    h1 {
        color: #666666;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 5px;
    }
    p {
        color: #666666;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
    }
`