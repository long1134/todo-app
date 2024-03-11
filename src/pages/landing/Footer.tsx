import logo from "@src/assets/images/logo.png";
import logoDark from "@src/assets/images/logo-dark.png";
import { LuShoppingCart } from "react-icons/lu";
import { Box, Button, Link, Typography, } from "@mui/material";
import { alpha } from "@mui/material/styles";

import { ContainerBox } from "./Navbar";
import LogoBox from "@src/layouts/LeftSideBar/LogoBox";
import { useLayoutContext } from "@src/states";

const Footer = () => {
  const { themeMode } = useLayoutContext();
  return (
    <Box sx={{ position: 'relative', backgroundSize: 'cover', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundColor: "background.paper" }}>
      <Box sx={{ paddingBottom: '40px', paddingTop: '80px' }} data-aos="fade-up" data-aos-duration={1000}>
        <ContainerBox sx={{ position: 'relative' }}>
          <Box sx={{ textAlign: 'center', height: '400px', borderRadius: '8px', display: 'flex', justifyContent: 'space-around', flexDirection: 'column', backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.15) }}>
            <Box sx={{ mx: 'auto', }}>
              <img style={{ height: 40 }} src={themeMode == 'light' ? logoDark : logo} />
              <Typography variant="h2" sx={{ mt: 8, maxWidth: '390px', color: 'text.primary', "&>span": { color: 'primary.main' } }}>
                Get <span> Attex MUI </span> for yourself to get started with your project now
              </Typography>
            </Box>

            <Box>
              <Button
                variant="contained"
                color="primary"
                startIcon={<LuShoppingCart size={20} />}
              >
                Buy Now
              </Button>
            </Box>

          </Box>
        </ContainerBox>
      </Box>
      <ContainerBox>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pb: 4 }}>
          <LogoBox defaultTheme={themeMode} />
          <Typography variant="caption" sx={{ textAlign: 'center', mx: 'auto', color: 'text.secondary', "&>a": { color: 'text.secondary', fontWeight: 600 } }}>
            {new Date().getFullYear()} © Attex
            <br />
            Crafted and Coded with <span> ❤️ </span> by &nbsp;
            <Link href="https://coderthemes.com/" target="_blank">
              Coderthemes
            </Link>
          </Typography>
        </Box>
      </ContainerBox>
    </Box>
  )
}

export default Footer