import styled from "styled-components"
import UserContext from "../../contexts/UserContext";
import React, { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";

export default function HistoricoPage () {

    const { userInfo, porcentagem } = useContext(UserContext);

    return (
        <HistoricoContainer>
            <Topo data-test="header">
                <p>TrackIt</p>
                <img src={userInfo.image} alt="FotoPerfil"></img>
            </Topo>

            <h1>Histórico</h1>
            <EmBreve>
                Em breve você poderá ver o historico
                dos seus habitos aqui!
            </EmBreve>

            <Menu data-test="menu">
                <LinkUnderscore data-test="habits-link" to="/habitos">
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
        </HistoricoContainer>
    )

}

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

const HistoricoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    h1 {
        padding: 15px;
        margin-top: 15px;
        width: 100px;
        height: 29px;
        color: #126BA5;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
    }
`

const EmBreve = styled.p`
    margin-top: 5px;
    padding: 15px;
    width: 338px;
    height: 74px;
    color: #666666;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
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