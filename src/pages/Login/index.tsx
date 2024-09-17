import React, { useState } from 'react';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    // Login com Google
    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, provider);
            navigate('/dashboard'); // Redireciona o usuário ao dashboard após o login
        } catch (err) {
            console.error('Erro ao fazer login com Google: ', err);
            setError('Falha no login com Google. Tente novamente.');
        }
    };

    // Login com Email e Senha
    const handleEmailLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/dashboard'); // Redireciona o usuário ao dashboard após o login
        } catch (err) {
            console.error('Erro ao fazer login com email: ', err);
            setError('Email ou senha inválidos. Tente novamente.');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <button onClick={handleGoogleLogin}>Login com Google</button>
            </div>
            <hr />
            <div>
                <input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleEmailLogin}>Login com Email e Senha</button>
            </div>
        </div>
    );
};

export default Login;
