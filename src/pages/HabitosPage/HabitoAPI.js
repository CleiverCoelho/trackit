import styled from "styled-components"
import UserContext from "../../contexts/UserContext"
import { useContext } from "react"
import axios from "axios";
import { BASE_URL } from "../url/BaseUrl";

export default function HabitosAPI({diasSelecionados, nome, id, useEFControl, setUseEFControl}){

    const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];
    const idHabito = id;

    function excluirHabito(){
        if(!window.confirm(`Deseja deletar o Habito: ${nome}?`)){
            return null
        }
        const config = {
            headers: { "Authorization": `Bearer ${localStorage.getItem("TOKEN")}` }
        }
        axios.delete(`${BASE_URL}/habits/${idHabito}`, config)
        .then((res) => setUseEFControl([...useEFControl, useEFControl.length + 1])
        )
        .catch((err) => alert("ERRO AO DELETAR HABITO"));
    }

    return (
        <HabitoContainer data-test="habit-container">
            <HabitoNome data-test="habit-name">
                {nome}
            </HabitoNome>
            <BotoesDia>
                {diasDaSemana.map( (dia, i) => {
                    return (
                        <BotaoDia 
                            key={i + 87}
                            data-test="habit-day"
                            fundo={diasSelecionados.includes(i) ? "#CFCFCF" : "white"}
                            cor={diasSelecionados.includes(i) ? "white" : "#DBDBDB"}
                        >
                            {dia}
                        </BotaoDia>
                    )
                })}     
                <BotaoExcluir >
                    <ion-icon data-test="habit-delete-btn" onClick={excluirHabito} name="trash-outline"></ion-icon>
                </BotaoExcluir>        
            </BotoesDia>

        </HabitoContainer>
    )
}

const BotaoExcluir = styled.div`
    position: absolute;
    bottom: 45px;
    left: 300px;
    ion-icon{
        color: #666666;
    }
`

const HabitoNome = styled.p`
    width: 208px;
    height: 25px;
    color: #666666;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
`

const HabitoContainer = styled.div`
    width: 340px;
    height: 91px;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-top: 10px;
`
const BotoesDia = styled.div`
    width: 303px;
    height: 32px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    position: relative;
`
const BotaoDia = styled.button`
    background-color: ${(props) => props.fundo};
    color: ${(props) => props.cor};
    border: 1px solid #D4D4D4;
    margin-right: 5px;
    border-radius: 5px;
    width: 30px;
    height: 30px;
`