import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    alignContent: 'center',
    alignItems: 'center',
    
  },
  cover: {
      width: '100%',
  },
  img: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center'
  }
});

export default function ServiceCard({img, primaryText, secondaryText, key, root, cover}) {
  const classes = useStyles();

  return (
      <>
    <Card className={root} key={key}>
      <CardActionArea>
        <div className={classes.img}>
        <CardMedia
          className={cover}
          component="img"
          height="160"
          alt={primaryText}
          image={img}
          title={primaryText}
        />
        </div>
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