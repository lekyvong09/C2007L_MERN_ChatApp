import { Button } from "@mui/material";


export default function PrimaryButton({label, additionalStyle, disabled, onClick}) {
    return(
        <Button
            variant="contained"
            sx={{
                backgroundColor: '#5865F2',
                color: 'white',
                textTransform: 'none',
                fontSize: '16px',
                width: '100%',
                height: '40px'
            }}
            style={additionalStyle ? additionalStyle : {}}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </Button>
    );
}