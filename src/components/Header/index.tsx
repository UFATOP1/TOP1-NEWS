import React, { FC, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import companyLogo from './logo.png';
import {
  AppBar,
  Link,
  Toolbar,
  Typography,
  Button,
  InputBase,
} from "@material-ui/core";
//import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import SearchIcon from "@material-ui/icons/Search";

//import { View, Image, StyleSheet } from 'react';

import { withGame, IGameState } from "../../store/GameProvider";


import useStyles from "./styles";


interface IProps extends IGameState {
  title: string;
}

const Header: FC<IProps> = ({ title, filterGamesByText }) => {
  const [searchText, setSearchText] = useState("");
  const classes = useStyles();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => setSearchText(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    filterGamesByText(searchText);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link component={RouterLink} to="/" color="primary">
            <img src={companyLogo} width="50px" alt="UFATOP1 logo"/> :: {title}
            </Link>
          </Typography>
          <div>
         <Button size="small" color="primary" variant="outlined" onClick={()=> window.open("someLink", "#")}>สาวไทย น่ารัก</Button>
          </div>
          <form className={classes.search} onSubmit={handleSubmit}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="ค้นหา highlight…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={handleChange}
              value={searchText}
            />
          </form>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withGame((props: IProps) => <Header {...props} />);
