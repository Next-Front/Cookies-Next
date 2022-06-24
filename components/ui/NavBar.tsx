import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material"
import { MenuOutlined } from "@mui/icons-material"
import NextLink from "next/link"


const NavBar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton>
          <MenuOutlined />
        </IconButton>

        <NextLink href='/' passHref>
          <Link>
            <Typography variant="h6" color='white'>CookieMaster</Typography>
          </Link>
        </NextLink>
        <div style={{ flex: 1 }} />
        <NextLink href='/theme' passHref>
          <Link>
            <Typography variant="h6" color='white'>Cambiar Tema</Typography>
          </Link>
        </NextLink>

      </Toolbar>
    </AppBar>
  )
}

export default NavBar