import './App.css';
import * as React from 'react';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Box} from "@mui/material";


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#28c1d4', ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function App() {
    return (<Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xl={12} lg={8} md={3} sm={4} xs={12}>
                    <Item>xl=12 lg=8 md=3 sm=4 xs=12</Item>
                </Grid>
                <Grid item xl={12} lg={4} md={3} sm={8} xs={12}>
                    <Item>xl=12 lg=8 md=3 sm=4 xs=12</Item>
                </Grid>
                <Grid item xl={12} lg={4} md={3} sm={8} xs={12}>
                    <Item>xl=12 lg=8 md=3 sm=4 xs=12</Item>
                </Grid>
                <Grid item xl={12} lg={8} md={3} sm={4} xs={12}>
                    <Item>xl=12 lg=8 md=3 sm=4 xs=12</Item>
                </Grid>
            </Grid>
        </Box>);
}

export default App;
