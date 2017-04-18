import React from 'react';
import Headline from './Headline';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton } from 'material-ui';
import AppBar from 'material-ui/AppBar';
import DrawerUndockedExample from './drawer';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        // this.handleToggle = this.handleToggle.bind(this);
        // this.handleClose = this.handleClose.bind(this);
    }
 
    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});


    render() {
        return (
            <MuiThemeProvider>
                <div className="contentFull">
                    <div className="contentHeader">
                        <AppBar
                            title="Título de Teste"
                            iconElementLeft={<IconButton onClick={this.handleToggle}><MenuIcon /></IconButton>} />
                    </div>
                    <div className="contentBody">
                        <DrawerUndockedExample
                        open={this.state.open}
                        handleClose={this.handleClose}
                        handleToggle={this.handleToggle}   />
                    </div>
                </div>

            </MuiThemeProvider>
        );
    }
}


export default Main;