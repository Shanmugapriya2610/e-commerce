import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { ThemeProvider, createTheme } from "@mui/material";
import { mainLayoutStyle } from './styles'
import './layout.scss'
export function MainLayout(props) {


  const [theme, setTheme] = useState({
    palette: {
      primary: {
        main: "#1A4BA1",
      },

      secondary: {
        main: "#FBFBFB",
      },
    },
  });

  const muiTheme = createTheme(theme, {
    setTheme,
  });



  const classes = mainLayoutStyle();
  return (
    <>
      <Header />
      <ThemeProvider theme={muiTheme}>
        <div className={classes.root + " mb-5"}>
          <Sidebar classes={classes} />
          <main id="main" className={classes.content}>{props?.children}</main>
        </div>
      </ThemeProvider>
    </>
  );
}

