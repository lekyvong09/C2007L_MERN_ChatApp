import { styled } from '@mui/system';
import { Box } from '@mui/material';

const BoxWrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#5865F2',
});

export default function AuthBox(props) {
    return (
        <BoxWrapper>
            <Box
                sx={{
                    width: 700,
                    heigh: 400,
                    backgroundColor: '#36393f',
                    borderRadius: '5px',
                    boxShadow: '0 2px 10px 0 rgba(0 0 0 / 20%)',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '25px',
                }}
            >
                {props.children}
            </Box>
        </BoxWrapper>
    );
}