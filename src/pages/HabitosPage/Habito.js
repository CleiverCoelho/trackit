import React, { useContext } from "react";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../../contexts/UserContext";
import { BASE_URL } from "../url/BaseUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Habito({setCriarHabito, habitoCriado, setHabitoCriado, setUseEFControl, useEFControl}) {
    const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [habitoSalvo, setHabitoSalvo] = React.useState(false);

    const {userInfo} = useContext(UserContext);
    const navigate = useNavigate();

    function cancelarHabito(){
        setCriarHabito(false);
        setHabitoSalvo(false);
    }
    function salvarHabito(){
        setHabitoSalvo(true);
        const body = {name: habitoCriado.nome, days: habitoCriado.dias}
        console.log(body);
        const config = {
            headers: { "Authorization": `Bearer ${userInfo.token}` }
        }
        axios.post(`${BASE_URL}/habits`, body, config)
        .then((res) => {
            console.log(res);
            setHabitoSalvo(false);
            setCriarHabito(false);
            setUseEFControl([...useEFControl, useEFControl.length + 1])
        })
        .catch((err) => {
            alert(err.response.data.message);
        })
    }

    function toggleDiaHabito (dia) {
        if(habitoCriado.dias.includes(dia)){
            const novaLista = habitoCriado.dias.filter( key => dia !== key);
            setHabitoCriado({...habitoCriado, ["dias"]: novaLista});
        }else{
            setHabitoCriado({...habitoCriado, ["dias"]: [...habitoCriado.dias, dia]});
        }
    }

    function atualizaHabito(event){
        setHabitoCriado({...habitoCriado, [event.name]:event.value})
    }

    return (
        <HabitoContainer>
            <FormHabito>
                <input 
                    cor={habitoCriado.nome ? "#D4D4D4" : "#666666"}
                    placeholder="nome do hábito"
                    value={habitoCriado.nome}
                    name="nome"
                    type="text"
                    onChange={(event) => atualizaHabito(event.target)}
                ></input>
                <BotoesDia>
                    {diasDaSemana.map( (dia, i) => {
                        return (
                            <BotaoDia 
                                key={i + 87}
                                fundo={habitoCriado.dias.includes(i) ? "#CFCFCF" : "white"}
                                cor={habitoCriado.dias.includes(i) ? "white" : "#DBDBDB"}
                                onClick={() => toggleDiaHabito(i)}
                            >
                                {dia}
                            </BotaoDia>
                        )
                    })}             
                </BotoesDia>
            </FormHabito>
            <ConfirmaHabito>
                    <BotaoCancelar onClick={cancelarHabito}>Cancelar</BotaoCancelar>
                    <BotaoSalvar onClick={salvarHabito}>{!habitoSalvo ? "Salvar" : <ThreeDots 
                        height="20" 
                        width="40" 
                        radius="9"
                        color="white" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />}</BotaoSalvar>
            </ConfirmaHabito>
        </HabitoContainer>
    )
}

const HabitoContainer = styled.div`
    width: 340px;
    height: 180px;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-top: 10px;
`
const FormHabito = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: ${(props) => props.cor};
        background-color: white;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        width: 303px;
        height: 45px;
    }
`
const BotoesDia = styled.div`
    width: 303px;
    height: 32px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
`

const ConfirmaHabito = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 35px;
    button {
        width: 84px;
        height: 35px;
        border-radius: 5px;
        border: none;
        margin-right: 10px;
    }
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

const BotaoSalvar = styled.button`
    background-color: #52B6FF;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

const BotaoCancelar = styled.button`
    color: #52B6FF;
    background-color: white;
`