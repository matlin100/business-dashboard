import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const Sidebare = () => {

  return (
    <Sidebar>
    <Menu>
      <SubMenu label="Charts">
        <MenuItem> Pie charts </MenuItem>
        <MenuItem> Line charts </MenuItem>
      </SubMenu>
    </Menu>
  </Sidebar>
  );
};

export default Sidebare;
