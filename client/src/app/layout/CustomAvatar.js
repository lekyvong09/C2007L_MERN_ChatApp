import { styled } from '@mui/system';

const AvatarPreview = styled('div')({
    height: '42px',
    width: '42px',
    borderRadius: '42px',
    fontSize: '20px',
    color: 'white',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5865f2',
});

export default function CustomAvatar(props) {
    return(
        <AvatarPreview>
            {props.username.substring(0, 2)}
        </AvatarPreview>
    );
}