import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link"

function Login() {
  return (
    <Fragment>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "25vw",
          color: "black",
          color:"#9C2C77",
          background:"#CFD2CF",
          border:"2px solid #5F6F94",
          padding: 8,
        }}
      >
        <Stack spacing={2}>
        <Typography variant="h4">Ba<span style={{color:"#16213E"}}>atCh</span>it</Typography>
          <TextField id="filled" label="Email" variant="filled" />
          <TextField
            id="filled"
            label="Password"
            type="password"
            variant="filled"
          />
          </Stack>
        <Button variant="contained" color="success">
          Login
        </Button>
        <Typography>Don't have account <Link href="/Register" >Register</Link></Typography>
      </Box>
    </div>
  </Fragment>
)
}

export default Login
