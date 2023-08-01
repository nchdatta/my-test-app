import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Radio } from '@mui/material';

const CheckboxIcon = styled('span')(({ theme }) => ({
    display: 'inline-block',
    borderRadius: '4px',
    width: '16px',
    height: '16px',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.grey[400]}`,
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
}));

const CheckboxCheckedIcon = styled(CheckboxIcon)({
    backgroundColor: 'rgb(25, 118, 210)',
    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 18 18\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill=\'none\' stroke=\'white\' d=\'M4,9 L7,12 L14,5\'/%3E%3C/svg%3E")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
});

// Radio button that looks like a checkbox
const CheckboxRadio = (props) => {
    return (
        <Radio
            disableRipple
            color="default"
            checkedIcon={<CheckboxCheckedIcon />}
            icon={<CheckboxIcon />}
            {...props}
        />
    );
}

export default CheckboxRadio;