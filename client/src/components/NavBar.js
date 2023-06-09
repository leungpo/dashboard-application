import React, {useState} from 'react'
import { 
    LightModeOutlined, 
    DarkModeOutlined, 
    Menu as MenuIcon, 
    Search, 
    SettingsOutlined,
    ArrowDropDownOutlined 
} from '@mui/icons-material';
import FlexBetween from "components/FlexBetween";
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import profileImage from "assets/icon.png";
import ChangeMode from "scenes/layout/ChangeMode";
import { AppBar, Icon, IconButton, InputBase, Toolbar, useTheme } from '@mui/material';

export default function NavBar({
    isSidebarOpen,
    setIsSidebarOpen
}) {
    const dispatch = useDispatch();
    const theme = useTheme();
    
  return (
   <AppBar
    sx={{
        position: "static",
        background: "none",
        boxShadow: "none"
    }}
   >
    <Toolbar sx={{ justifyContent: "space-between"}}>
        {/* Left side */}
        <FlexBetween>
            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <MenuIcon />
            </IconButton>
            <FlexBetween
                backgroundColor={theme.palette.background.alt}
                borderRadius="9px"
                gap="3rem"
                p="0.1rem 1.2rem" 
            >
                <InputBase placeholder="Search..." />
                <IconButton>
                    <Search />
                </IconButton>
            </FlexBetween>
        </FlexBetween>

        {/* Right side */}
        <FlexBetween gap="1.5rem">
            <IconButton onClick={() => dispatch(setMode())}>
                <ChangeMode theme={theme}/>
            </IconButton>
            <IconButton>
                <SettingsOutlined sx={{fontSize: "25px"}} />
            </IconButton>
        </FlexBetween>
    </Toolbar>

   </AppBar>
  )
}
