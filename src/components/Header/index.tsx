import React, { FC, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Link,
  Toolbar,
  Typography,
  InputBase,
} from "@material-ui/core";
//import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";

import SearchIcon from "@material-ui/icons/Search";

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
    
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link component={RouterLink} to="/" color="inherit">
              {/* <SportsSoccerIcon />  */}
            <img 
            src="https://ufapro888s.co/wp-content/uploads/2021/07/cropped-LOGO.png"
            alt="ทางเข้า UFABET"  width="15%"
            />{title}
            </Link>
          </Typography>
          <form className={classes.search} onSubmit={handleSubmit}>
          
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="ค้นหา..."
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
