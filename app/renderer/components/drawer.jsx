import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: this.props.open};

    
    // this.handleToggle = this.handleToggle.bind(this);
    // this.handleClose = this.handleClose.bind(this);
  }

//   handleToggle = () => this.setState({open: !this.state.open});
// handleToggle() {
//     this.setState({open: !this.state.open});
// } 

//   handleClose = () => this.setState({open: false});
// handleClose() {
//     this.setState({open: false});
// } 

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.props.open}
        >
          <MenuItem onClick={this.props.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.props.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}