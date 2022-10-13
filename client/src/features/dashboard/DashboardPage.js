import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import GroupsIcon from '@mui/icons-material/Groups';
import { Typography } from '@mui/material';
import { useState } from 'react';
import AddFriendDialog from './AddFriendDialog';

const Wrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex'
});

const SideBar = styled('div')({
    width: '72px',
    height: '100%',
    backgroundColor: '#202225',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
});

const FriendsSideBar = styled('div')({
    width: '224px',
    height: '100%',
    backgroundColor: '#2F3136',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
});

const AppBar = styled('div')({
    height: '48px',
    width: 'calc(100% - 326px)',
    backgroundColor: '#36393f',
    right: '0',
    top: '0',
    position: 'absolute',
    padding: '0 15px',
    borderBottom: '1px solid black'
});

const Messenger = styled('div')({
    backgroundColor: '#36393f',
    marginTop: '48px',
    flexGrow: 1,
});

const PendingInvitationList = styled('div')({
    width: '100%',
    height: '22%'
})

const FriendsList = styled('div')({
    width: '100%',
    flexGrow: 1
});

export default function DashboardPage() {

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleCloseAddFriendDialog = () => {
        setIsDialogOpen(false);
    };

    const handleOpenAddFriendDialog = () => {
        setIsDialogOpen(true);
    }

    return (
        <Wrapper>
            <SideBar>
                <Button style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '16px',
                    margin: 0,
                    padding: 0,
                    marginTop: '10px',
                    color: 'white',
                    backgroundColor: '#5865F2'
                }}>
                    <GroupsIcon />
                </Button>
            </SideBar>
            <FriendsSideBar>
                <Button
                    style={{
                        marginTop: '10px',
                        color: 'white',
                        background: '#3ba55d',
                        width: '80%',
                        height: '30px',
                    }}
                    onClick={handleOpenAddFriendDialog}
                >
                    Add Friend
                </Button>

                <AddFriendDialog open={isDialogOpen} closeAddFriendDialog={handleCloseAddFriendDialog}/>

                <Typography
                    sx={{
                        color: '#8e9297',
                        fontSize: '14px',
                        marginTop: '10px',
                        textTransform: 'uppercase'
                    }}
                >
                    Private Message
                </Typography>

                <FriendsList />

                <Typography
                    sx={{
                        color: '#8e9297',
                        fontSize: '14px',
                        marginTop: '10px',
                        textTransform: 'uppercase'
                    }}
                >
                    Invitation
                </Typography>

                <PendingInvitationList />

            </FriendsSideBar>
            <AppBar></AppBar>
            <Messenger></Messenger>
        </Wrapper>
    );
}