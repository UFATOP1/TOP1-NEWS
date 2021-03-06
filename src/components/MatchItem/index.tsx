import React, { FC } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";



import IGame from "../../types/Game";
import useStyles from "./styles";

const MatchItem: FC<IGame> = ({
  title,
  id,
  thumbnail,
  date,
  competition: { name },
}) => {
  const classes = useStyles();
  return (
    // <Card variant="outlined" className={classes.root}>
    //   <CardActionArea>
    //     <CardMedia className={classes.media} image={thumbnail} title={title} />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h3">
    //         {title}
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         {name}
    //         <br />
    //         <Moment format="DD MMMM YYYY - HH:mm">{date}</Moment>
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
      
    //   <Button variant="contained" size="small" color="secondary" component={Link} to={"/" + id}>
    //       ดู Highlight
    //     </Button>
    //   </CardActions>
    // </Card>
    <Card variant="outlined" className={classes.root}>
      <CardActionArea>
    <CardMedia  className={classes.media} image={thumbnail} title={title} />
    <CardContent>
          <Typography gutterBottom variant="h5" color="secondary" component="h6">
             {title}
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
             {name}
             <br />
             <Moment format="DD MMMM YYYY - HH:mm">{date}</Moment>
           </Typography>
         </CardContent>
       </CardActionArea>
    <CardActions>
    <Button variant="contained" size="small" color="secondary" component={Link} to={"/" + id}> ดู Highlight </Button>
    
    </CardActions>
  </Card>
  );
};

export default MatchItem;
