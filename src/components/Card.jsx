import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import workshopImage from "../assets/workshop.png";
import logImage from "../assets/log.png";
import joinImage from "../assets/meeting.png";
 function CardCom({type,operation,description,onClick}) {
    if(type=='cm'){
    var img=workshopImage;
    } else {
        if(type=='dc'){
        var img=logImage;}
        else img=joinImage;
    }

  return (
    <Card sx={{ maxWidth: 345 }} onClick={onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="64"
          width="64"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {operation}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default CardCom;