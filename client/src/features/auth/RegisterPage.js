import { Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthBox from "../../app/layout/AuthBox";
import InputWithLabel from "../../app/layout/InputWithLabels";
import PrimaryButton from "../../app/layout/PrimaryButton";
import RedirectInfo from "../../app/layout/RedirectInfo";
import { validateEmail, validatePassword, validateUsername } from "../../app/validators/validator";


export default function RegisterPage() {
    const navigate = useNavigate();

    const [mail, setMail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateEmail(mail) && validatePassword(password) && validateUsername(username));
    }, [mail, password, username]);

    const handleRegister = () => {
        console.log(`register with email ${mail} and ${password}`);
    }

    const handlePushToLoginPage = () => {
        navigate('/login');
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
                value={username}
                setValue={setUsername}
                label='Username'
                type='text'
                placeholder='Enter username'
            />
            <InputWithLabel
                value={password}
                setValue={setPassword}
                label='Password'
                type='password'
                placeholder='Enter password'
            />
            <Tooltip title={!isFormValid 
                                ? 'Enter correct email and password. Username should be at least 3 characters. Password should be between 6 and characters'
                                : 'Press to login'}
            >
                <div>
                    <PrimaryButton
                        label="Register"
                        disabled={!isFormValid}
                        onClick={handleRegister}
                        additionalStyle={{marginTop: '30px'}}
                    />
                </div>
            </Tooltip>
            
            <RedirectInfo 
                text='Already have an account?'
                redirectText=' Login'
                redirectHandler={handlePushToLoginPage}
            />
        </AuthBox>
    );
}