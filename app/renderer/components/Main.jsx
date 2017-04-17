import React from 'react';
import Headline from './Headline';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton } from 'material-ui';
import AppBar from 'material-ui/AppBar';

class Main extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <AppBar title="Título de Teste" />
            </MuiThemeProvider>
        );
    }
}


export default Main;