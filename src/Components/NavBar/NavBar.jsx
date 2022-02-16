import { AppBar, Toolbar, Typography } from "@mui/material"
import { Menu } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { Outlet } from "react-router-dom"

function NavBar({children, ...props}) {
  return (
    <div>
      <AppBar position='fixed' elevation={3}>
        <Toolbar sx={{width: '100%'}}>
          <Typography variant="h3">MAiNSTAGE</Typography>
          <IconButton
            size="extra-large"
            color="inherit"
            aria-label="menu"
            sx={{ marginLeft: 'auto', marginRight: '2rem'}}
          >
            <Menu fontSize="large"/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar/>
      <Outlet />
    </div>
  )
}

export default NavBar