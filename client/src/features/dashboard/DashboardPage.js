import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import GroupsIcon from '@mui/icons-material/Groups';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import AddFriendDialog from './AddFriendDialog';
import CustomAvatar from '../../app/layout/CustomAvatar';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch } from 'react-redux';
import { logoutReducer, setUserDetailsReducer } from '../../app/reducers/authSlice';


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
    borderBottom: '1px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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

const handleAcceptInvitation = () => {

}

const handleRejectInvitation = () => {
    
}

const friends = [
    {id: '1', username: 'Ray', isOnline: true},
    {id: '2', username: 'Tommy', isOnline: false},
    {id: '3', username: 'Bob', isOnline: true},
];

const invitations = [
    {_id: '1', senderId: {username: 'Bob', mail: 'bob@email.com'}},
    {_id: '2', senderId: {username: 'Tommy', mail: 'tommy@email.com'}},
];

export default function DashboardPage() {
    const dispatch = useDispatch();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseAddFriendDialog = () => {
        setIsDialogOpen(false);
    };

    const handleOpenAddFriendDialog = () => {
        setIsDialogOpen(true);
    }

    const handleLogout = useCallback (() => {
        dispatch(logoutReducer());
    }, [dispatch]);

    useEffect(() => {
        const userDetails = localStorage.getItem('user');
        if (!userDetails || userDetails === 'undefined') {
            handleLogout();
        } else {
            dispatch(setUserDetailsReducer(JSON.parse(userDetails)));
        }
    }, [dispatch, handleLogout]);

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

                <FriendsList>
                    {
                        friends.map(f => (
                            <Button
                                style={{
                                    width: '100%',
                                    height: '42px',
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    color: 'black',
                                    marginTop: '10px',
                                    textTransform: 'none',
                                    position: 'relative',
                                }}
                                key={f.id}
                            >
                                <CustomAvatar username={f.username} />
                                <Typography
                                    style={{
                                        marginLeft: '7px',
                                        fontWeight: 700,
                                        color: '#8e9297'
                                    }}
                                    variant='subtitle1'
                                    align='left'
                                >
                                    {f.username}
                                </Typography>
                                { f.isOnline && 
                                    (<Box sx={{
                                        display: 'flex',
                                        position: 'absolute',
                                        right: '5px',
                                        color: '#3ba55d',
                                        alignItems: 'center'
                                    }}>
                                        <FiberManualRecordIcon />
                                    </Box>)
                                }
                            </Button>
                        ))
                    }
                </FriendsList>

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

                <PendingInvitationList>
                    {
                        invitations.map(i => (
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '42px',
                                    marginTop: '10px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                                key={i._id}
                            >
                                <CustomAvatar username={i.senderId.username} />
                                <Typography
                                    sx={{
                                        marginLeft: '7px',
                                        fontWeight: 700,
                                        color: '#8e9297',
                                        flexGrow: 1
                                    }}
                                    variant='subtitle1'
                                >
                                    {i.senderId.username}
                                </Typography>
                                <Box sx={{display: 'flex'}}>
                                    <IconButton style={{color: 'white'}} onClick={handleAcceptInvitation}>
                                        <CheckIcon />
                                    </IconButton>
                                    <IconButton style={{color: 'white'}} onClick={handleRejectInvitation}>
                                        <ClearIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        ))
                    }
                </PendingInvitationList>

            </FriendsSideBar>
            <AppBar>
                <IconButton 
                    style={{color: 'white'}}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </AppBar>

            <Messenger></Messenger>
        </Wrapper>
    );
}