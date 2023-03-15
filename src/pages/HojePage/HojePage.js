import styled from "styled-components"
import Logo from "../Logo.png"
import { Link } from "react-router-dom"
import { CircularProgressbar, buildStyles} from "react-circular-progressbar"
import { findByLabelText } from "@testing-library/react"
import dayjs from "dayjs"

export default function HojePage(){
    const now = new Date
    const diasSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
    const pos = now.getDay();
    const dia = now.getDate();
    const mes = now.getMonth();
    console.log(diasSemana[pos])
    
    return (
        <HojeContainer>
            <Topo>
                <p>TrackIt</p>
                <img src={Logo} alt="FotoPerfil"></img>
            </Topo>
            
            <DiaContainer>
                <TextoDiaSemana>{diasSemana[pos]}, {dia}/{mes < 9 && "0"}{mes + 1}</TextoDiaSemana>
                <TextoHabitosConcluidos>56% dos Hábitos Concluidos</TextoHabitosConcluidos>

            </DiaContainer>

            <TarefasContainer>
                <Tarefa>
                    <InfoTarefa>
                        <h1>Ler 1 capitulo de livro</h1>
                        <p>Sequencia atual: 3 dias</p>
                        <p>seu recorde: 5 dias</p>
                    </InfoTarefa>
                    <ion-icon name="checkbox-outline"></ion-icon>
                </Tarefa>
                
            </TarefasContainer>

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
const Tarefa = styled.div`
    width: 340px;
    height: 94px;
`

const InfoTarefa = styled.div`
    display: flex;
    background-color: white;
    padding: 10px;
    justify-content: flex-start;
    flex-direction: column;
    h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }
    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
    }
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
    color: #8FC549;
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