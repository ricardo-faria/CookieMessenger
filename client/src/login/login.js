import React, { useState } from 'react';
import API from '../config/axiosInit';
import Cookies from 'universal-cookie';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msgAlert, setMsgAlert] = useState(false);
    const cookie = new Cookies();
    
    const onChangeEmail = event => {
        setEmail(event.target.value);
    }

    const onChangePassword = event => {
        setPassword(event.target.value);
    }

    const login = (event) => {
        event.preventDefault();
        API
            .post('/api/user/login', {
                email: email,
                password: password
            })
            .then(res => {
                cookie.set('cookieMessengerToken', res.data.token, {path: '/'});
                setEmail('');
                setPassword('');
                props.history.push({pathname:'/messenger'});
            })
            .catch(err =>{
                console.log("falha no login");
                setEmail('');
                setPassword('');
                setMsgAlert(true);
            });
    };

    const AlertLoginError = () => {
            return (
                <div className="alert alert-warning" role="alert">
                    <label>falha no login. tente novamente!</label>
                </div>
            );
    };

    return (
        <form className="container">
            { msgAlert ? <AlertLoginError /> : null }
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={onChangeEmail} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input type="password" value={password} onChange={onChangePassword} className="form-control" id="password" placeholder="Senha" />
            </div>
            <p>não tem uma conta? crie uma clicando <a href="/">aqui</a></p>
            <input type="submit" value="Entrar" onClick={login} className="btn btn-primary"/>
        </form>
    );
}

export default Login;