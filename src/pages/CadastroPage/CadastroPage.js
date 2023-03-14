import styled from "styled-components";
import Logo from "../Logo.png"
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { BASE_URL } from "../url/BaseUrl";

export default function CadastroPage(){
    const [carregando, setCarregando] = React.useState(false);
    const [form, setForm] = React.useState({nome: "", email: "", senha: "", foto: ""})
    const navigate = useNavigate();

    function atualizaForm(event){
        setForm({...form, [event.target.name]: event.target.value})
    }

    function efetuarCadastro(event){
        event.preventDefault();
        setCarregando(true);

        const body = {
            email: form.email,
            name: form.nome,
            image: form.foto,
            password: form.senha
        }

        axios.post(`${BASE_URL}/sign-up`, body)
        .then((res) => navigate("/"))
        .catch((err) => {
            alert(err.response.data.message);
            window.location.reload();
        })

    }

    return (
        <Cadastro>
            <img src={Logo}
                alt="Logo"
            ></img>
            <FormContainer onSubmit={efetuarCadastro}>
                <input 
                    placeholder="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(event) => atualizaForm(event)}
                    required    
                ></input>
                <input 
                    placeholder="senha"
                    type="password"
                    name="senha"
                    value={form.senha}
                    onChange={(event) => atualizaForm(event)}
                    required    
                ></input>
                <input 
                    placeholder="nome"
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={(event) => atualizaForm(event)}
                    required    
                ></input>
                <input 
                    placeholder="foto"
                    type="url"
                    name="foto"
                    value={form.foto}
                    onChange={(event) => atualizaForm(event)}
                    required    
                ></input>

                <button type="submit">{carregando ? 
                    <ThreeDots 
                        height="40" 
                        width="40" 
                        radius="9"
                        color="white" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    /> : 
                    "Cadastrar"}
                </button>
            </FormContainer>
            <Link to={`/`}>
                <FraseLogin>Já tem uma conta? Faça login! </FraseLogin>
            </Link>
        </Cadastro>
    )
}

const Cadastro = styled.div`z
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;

    img{
        width: 180px;
        height: 200px;
    }
`

const FormContainer = styled.form`
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    input{
        margin: 10px 0px;
        width: 303px;
        height: 45px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }
    button{
        margin: 10px 0px;
        width: 303px;
        height: 45px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        background-color: #52B6FF;
        color: white;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const FraseLogin = styled.p`
    text-decoration: underline;
    color: #52B6FF;
`