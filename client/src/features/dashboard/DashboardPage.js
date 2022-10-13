import { styled } from '@mui/system';

const Wrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex'
});

const SideBar = styled('div')({
    width: '72px',
    height: '100%',
    backgroundColor: '#202225'
});

const FriendsSideBar = styled('div')({
    width: '224px',
    height: '100%',
    backgroundColor: '#2F3136'
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

export default function DashboardPage() {
    return (
        <Wrapper>
            <SideBar></SideBar>
            <FriendsSideBar></FriendsSideBar>
            <AppBar></AppBar>
            <Messenger></Messenger>
        </Wrapper>
    );
}