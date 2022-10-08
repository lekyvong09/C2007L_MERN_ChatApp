import { Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthBox from "../../app/layout/AuthBox";
import InputWithLabel from "../../app/layout/InputWithLabels";
import PrimaryButton from "../../app/layout/PrimaryButton";
import RedirectInfo from "../../app/layout/RedirectInfo";


export default function LoginPage() {
    const navigate = useNavigate();

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleLogin = () => {
        console.log(`login with email ${mail} and ${password}`);
    }

    const handlePushToRegisterPage = () => {
        navigate('/register');
    }

    return (
        <AuthBox>
            <Typography variant="h5" sx={{color: 'white'}}>Welcome back</Typography>
            <InputWithLabel
                value={mail}
                setValue={setMail}
                label='Email'
                type='text'
                placeholder='Enter email'
            />
            <InputWithLabel
                value={password}
                setValue={setPassword}
                label='Password'
                type='password'
                placeholder='Enter password'
            />

            <PrimaryButton
                label="Login"
                disabled={!isFormValid}
                onClick={handleLogin}
                additionalStyle={{marginTop: '30px'}}
            />
            <RedirectInfo 
                text='Need an account?'
                redirectText=' Create an account'
                redirectHandler={handlePushToRegisterPage}
            />
        </AuthBox>
    );
}