import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    alignContent: 'center'
  },
  cover: {
      width: 200,
  }
});

export default function ServiceCard({img, primaryText, secondaryText, key}) {
  const classes = useStyles();

  return (
      <>
    <Card className={classes.root} key={key}>
      <CardActionArea>
        <CardMedia
          className={classes.cover}
          component="img"
          alt="blank t-shirt"
          height="160"
          image={img}
          title="tshirt"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {primaryText}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {secondaryText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}