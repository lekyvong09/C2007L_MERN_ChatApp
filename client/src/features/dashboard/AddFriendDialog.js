import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";
import InputWithLabel from "../../app/layout/InputWithLabels";
import PrimaryButton from "../../app/layout/PrimaryButton";
import { validateEmail } from "../../app/validators/validator";


export default function AddFriendDialog({open, closeAddFriendDialog}) {
    const [mail, setMail] = useState('');
    const [isFormValid, setIsFormValid] = useState('');

    useEffect(() => {
        setIsFormValid(validateEmail(mail));
    }, [mail]);

    const handleSendInvitation = () => {

    }

    return (
        <Dialog open={open} onClose={closeAddFriendDialog}>
            <DialogTitle>Invite a Friend</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter email address of friend which you would like to invite
                </DialogContentText>
                <InputWithLabel 
                    value={mail}
                    setValue={setMail}
                    label='Mail'
                    type='text'
                    placeholder='Enter email address'
                />
            </DialogContent>
            <DialogActions>
                <PrimaryButton 
                    onClick={handleSendInvitation}
                    disabled={!isFormValid}
                    label='Send'
                    additionalStyle={{
                        marginLeft: '15px',
                        marginRight: '15px',
                        marginBottom: '10px',
                    }}
                />
            </DialogActions>
        </Dialog>
    );
}