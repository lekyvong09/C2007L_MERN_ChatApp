import { Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthBox from "../../app/layout/AuthBox";
import InputWithLabel from "../../app/layout/InputWithLabels";
import PrimaryButton from "../../app/layout/PrimaryButton";
import RedirectInfo from "../../app/layout/RedirectInfo";
import { validateEmail, validatePassword } from "../../app/validators/validator";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../app/reducers/authSlice";


export default function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateEmail(mail) && validatePassword(password));
    }, [mail, password]);

    const handleLogin = () => {
        dispatch(loginThunk({email: mail, password: password}));
        // navigate('/dashboard');
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
            <Tooltip title={!isFormValid 
                                ? 'Enter correct email and password. Password should be between 6 and characters'
                                : 'Press to login'}
            >
                <div>
                    <PrimaryButton
                        label="Login"
                        disabled={!isFormValid}
                        onClick={handleLogin}
                        additionalStyle={{marginTop: '30px'}}
                    />
                </div>
            </Tooltip>
            
            <RedirectInfo 
                text='Need an account?'
                redirectText=' Create an account'
                redirectHandler={handlePushToRegisterPage}
            />
        </AuthBox>
    );
}