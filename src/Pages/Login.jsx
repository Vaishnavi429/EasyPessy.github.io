import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import {Formik,Form} from "formik";
import * as Yup from "yup";

function Login() {
  const loginValidation = Yup.object().shape({
    email:Yup.string().email('Invalid email').required('enter email'),
    password:Yup.string().required("enter password")
  })
  return (
    <Fragment>
      <Formik 
      initialValues={{
        email:"",
        password:"",
      }}
      validationSchema={loginValidation}
      onSubmit={values=>{
        alert(JSON.stringify(values, null, 2));
      
      }}>
        {({values,handleChange,errors})=>
        <Form >
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
            height: "70vh",
            color: "black",
            color: "#9C2C77",
            background: "#CFD2CF",
            border: "2px solid #5F6F94",
            padding: 8,
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h4">
              Ba<span style={{ color: "#16213E" }}>atCh</span>it
            </Typography>
            <TextField  label="Email" variant="filled" name="email"  
             value={values.email}
              onChange={handleChange}/>
            
            <TextField
              label="Password"
              type="password"
              variant="filled"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </Stack>
          <div style= {{marginTop:"20px"}}>
            <Button variant="contained" color="success" type="submit">
              Login
            </Button>
            <Typography>
              Don't have account <Link href="/Register">Register</Link>
            </Typography>
          </div>
        </Box>
      </div>
      </Form>
        }
      </Formik>
    </Fragment>
  );
}

export default Login;
