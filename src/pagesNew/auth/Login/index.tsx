import { Box, Button, Divider, Grid, IconButton, InputBase, Paper, PaperProps, Theme, Tooltip, Typography, alpha, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckboxInput, PageMetaData } from "@src/components";

import useLogin from "./useLogin";
import AuthLayout from "@src/pages/auth/AuthLayout";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AppleIcon from '@mui/icons-material/Apple';
import FormInput from "./Form/FormInput";
import PasswordInput from "./Form/PasswordInput";

const listLogin=[
  {
    width:300,
    icon:<GoogleIcon sx={{color:"white"}}/>,
    bg:"#DB4437"
  },
  {
    width:"40px",
    icon:<FacebookIcon sx={{color:"white"}}/>,
    bg:"#1874eb",
    title:"Sign in with Facebook"
  },
  {
    width:"40px",
    icon:<TwitterIcon sx={{color:"white"}}/>,
    bg:"#00ACEE",
    title:"Sign in with Twitter"
  },
  {
    width:"40px",
    icon:<LinkedInIcon sx={{color:"white"}}/>,
    bg:"#0E76A8",
    title:"Sign in with LinkedIn"
  },
  {
    width:"40px",
    icon:<AppleIcon sx={{color:"white"}}/>,
    bg:"#000000",
    title:"Sign in with apple"
  }
]
interface ItemProps extends PaperProps {
  bg?: string;
}
const Item = styled(Paper)<ItemProps>(({ theme,bg }) => ({
  backgroundColor:bg ,
  ...theme.typography.body2,
  color: "black",
display:"flex",
alignItems:"center",
justifyContent:"center",
boxShadow:"none"
}));

const Login = () => {
  const { loading, login, control } = useLogin();

  return (
    <Box>
      <PageMetaData title={"Login"} />
      <Box sx={{ flexGrow: 1}}>
      <Grid container sx={{height:"100vh"}} >
        <Grid xs={12} md={5} sx={{ display: { xs: "none", md: "block" } ,background:"#bceedf"}}>
        <Box sx={{width:"80%",m:"auto",height:"30vh",pt:7}}>
                      <Link to="/kanban"><img src={"https://harnishdesign.net/demo/html/oxyy/images/logo-teal.png"} alt="logo" height={34} /></Link></Box>
          <Item bg="#bceedf">
         
          
                  <Box sx={{width:"80%",m:"auto"}}>
                    <Typography sx={{fontSize:"1.25rem !important",mb:2}} >We are glad to see you again!</Typography>
                    <Typography sx={{fontWeight:"bold"}} variant="h1">Join the largest Designer community in the world.</Typography>
                
               </Box>
          </Item>
        </Grid>
        <Grid xs={12} md={7} >
        <Box sx={{width:"80%",m:"auto",pt:7,height: { xs: "10vh", md: "20vh" }}}>
             <Box sx={{float:"right",display:"flex"}}>  <Typography>Not a member? </Typography>  
            <Link to="/kanban"><Typography sx={{textDecoration:"underline",color:"#20c997"}}>Sign Up</Typography></Link>
            </Box>
            </Box>
          <Item >
       <Box sx={{width: { xs: "80%", md: "70%" },m:"auto",display:"flex",flexDirection:"column",gap:3}}>
                    <Typography variant="h3" sx={{fontWeight:"bold"}}>Sign in to Oxyy</Typography>
                    <Box sx={{display:"flex",gap:2,flexWrap:"wrap"}}>
                    {listLogin.map((item,index)=>{
                      return (
                      <Tooltip placement="top"  title={item.title ? <Typography sx={{p:1}}>{item.title}</Typography>:undefined}>
                          <Button   sx={{height:"40px",background:item.bg,minWidth:item.width,
                          '&:hover': {
                            opacity:0.8,
                          backgroundColor: item.bg,
                        }}}>
                           {item.icon} {index===0 && <Typography sx={{ml:2,color:"white"}}>Sign up with Google</Typography>} 
                          </Button>   
                      </Tooltip>
                      )
                    })}
                    </Box>
                  <Divider sx={{fontSize:"0.975rem ",color:"#212529bf",mb:2}}>Or with Email</Divider>
                    
               <form onSubmit={login}>
          <FormInput name="email" type="email" label="Email Address" control={control} />

          <Box sx={{ mt: 2 }}>
            <PasswordInput isPassword={false} name="password" type="password" label={"Password"} control={control} />
          </Box>

       
            <Button sx={{mt:3,padding:"15px 45px",background:"#68ca9a",'&:hover': {
                            opacity:0.8,
                          backgroundColor: "#68ca9a",
                        }}} variant="contained" color="primary" type="submit" disabled={loading} size={"large"}>
             Sign In
            </Button>
        
        </form>
               </Box>

          </Item>
        </Grid>
       
      </Grid>
    </Box>
    </Box>
  );
};

export default Login;
