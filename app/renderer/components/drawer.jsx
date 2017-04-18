import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.props.open}
        >

            {this.props.menuItems.map((item) => (
                <MenuItem key={item.key} onClick={this.props.handleClose}>{item.text}</MenuItem>      
            ))}
        </Drawer>
      </div>
    );
  }
}