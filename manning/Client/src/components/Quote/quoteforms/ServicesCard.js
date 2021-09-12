import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import tshirt1 from '../../../images/tshirt1.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ServiceCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="blank t-shirt"
          height="140"
          image={tshirt1}
          title="tshirt"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Apparel
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica blah blah blah lakjd;lakjf
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}