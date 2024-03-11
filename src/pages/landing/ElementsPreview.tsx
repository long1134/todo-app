import { forwardRef } from "react";
import { Grid, Box, IconButton, Button, CircularProgress, Snackbar, Alert, AlertProps, Tabs, Tab, Rating, Chip, Avatar, Switch, Radio, FormControlLabel, Checkbox, Fab, Stack, TextField, MenuItem, CardHeader, CardContent, Typography } from "@mui/material";
import { LuSearch, LuTrash2, LuSendHorizonal, LuHeart, LuPhone, LuContact2, LuPlus } from 'react-icons/lu'
import { ContainerBox } from "./Navbar";
import { useToggle, useTabsChange } from "@src/hooks";
import { AvatarBadge } from "../base-ui/Avatars";

import avatar2 from "@src/assets/images/avatars/avatar2.png";
import { UserProfile } from "../base-ui/Cards";

const MuiAlert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <Alert elevation={6} ref={ref} variant="filled" {...props} />
))

const ElementsPreview = () => {

  const { value, handleChange } = useTabsChange();

  const { isOpen, hide, show } = useToggle()

  return (
    <>
      <Box sx={{ backgroundColor: 'background.paper' }} id="elements preview">


        <ContainerBox>
          <Grid container>

            <Grid item lg={6} xs={12} sx={{ order: { lg: 1, xs: 2 } }}>
              <Box sx={{ px: 3, py: 6, gap: 3, display: 'flex', flexDirection: 'column', border: '1px dashed', borderColor: 'divider' }}>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                  <Button variant="contained" color="success" endIcon={<LuSendHorizonal />}>
                    Send
                  </Button>
                  <Button variant="outlined" color="error" startIcon={<LuTrash2 />}>
                    Delete
                  </Button>
                  <Fab color="primary" size="small">
                    <LuPlus size={18} />
                  </Fab>
                  <IconButton color="info">
                    <LuSearch />
                  </IconButton>
                  <CircularProgress color="warning" />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                  <Tabs value={value} onChange={handleChange}>
                    <Tab icon={<LuPhone size={20} />} label="Tailwind" />
                    <Tab icon={<LuHeart size={20} />} label="MUI" />
                    <Tab icon={<LuContact2 size={20} />} label="Bootstrap" />
                  </Tabs>

                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                  <Button variant={"outlined"} color={'warning'} onClick={show}>
                    Open Success snackbar
                  </Button>
                  <Snackbar open={isOpen} autoHideDuration={6000} onClose={hide}>
                    <MuiAlert onClose={hide} severity={'warning'} sx={{ width: "100%" }}>
                      This is a warning message!
                    </MuiAlert>
                  </Snackbar>

                  <Alert action={<Button color="inherit" size="small"> UNDO </Button>}>
                    This is a Warning alert — check it out!
                  </Alert>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
                  <AvatarBadge />
                  <Rating defaultValue={3} />
                  <Chip variant="outlined" label="Cant Close?" avatar={<Avatar src={avatar2} />} onDelete={() => null} clickable />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
                  <FormControlLabel control={<Switch defaultChecked color="primary" />} label="Switch" />
                  <FormControlLabel control={<Radio checked color="success" />} label="Radio" />
                  <FormControlLabel control={<Checkbox defaultChecked color="error" />} label="Checkbox" />
                </Box>

                <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                  <Grid item md={8} xs={12}>
                    <UserProfile />
                  </Grid>

                  <Grid item md={4} xs={12}>
                    <Stack sx={{ gap: 2 }}>
                      <TextField label="Overflowing" defaultValue="Your Bank Balance" error />
                      <TextField
                        label="Temperature"
                        defaultValue="Cool"
                        select
                      >
                        <MenuItem value={'Cool'}>Cool</MenuItem>
                        <MenuItem value={'Normal'}>Normal</MenuItem>
                        <MenuItem value={'Hot'}>Hot</MenuItem>
                      </TextField>
                      <TextField label="Your Address" color={'info'} rows={3} multiline />
                    </Stack>
                  </Grid>
                </Grid>

              </Box>
            </Grid>

            <Grid item lg={6} xs={12} sx={{ order: { lg: 2, xs: 1 } }}>
              <Box sx={{ pr: 3, pl: { lg: 8, xs: 0 }, pt: { lg: 6, xs: 2 } }}>

                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center' }}>
                  <Typography variant="button" color="text.secondary">
                    Interactive Preview of UI Elements
                  </Typography>
                  <Typography variant="h2" component="h2" color="text.primary" sx={{ fontSize: 58 }}>Plethora of Stylish UI Elements</Typography>
                </CardContent>

              </Box>
            </Grid>
          </Grid>
        </ContainerBox >
      </Box >
    </>
  )
};

export default ElementsPreview;
