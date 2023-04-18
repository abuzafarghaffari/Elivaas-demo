import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LanguageIcon from '@mui/icons-material/Language';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./card.scss";
import MyModals from './modal/MyModals';

const MyCard =({username,id,deleteHandler,editHandler,list})=>{
    const [show, setShow] = useState(false);
    const [favorate,setFavorate] = useState(false);
  const imageLink =`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const showFav =()=>setFavorate(true);
const hideFav =()=>setFavorate(false);


  const DeleteHandler =(id)=>{
    deleteHandler(id)
  }
  
  return (
    <>
        <Card>
        <CardMedia
        sx={{ 
        backgroundSize:'contain',
        backgroundColor:"#f5f5f5", 
        height:"200px"    
        }}
          alt="green iguana"
          image={imageLink}
        />
        <CardContent sx={{color:"rgba(0,0,0,.65)",fontSize:"1rem"}}>
          <Typography gutterBottom variant="h5" component="div" 
          sx={{color:"rgba(0,0,0,.85)", fontSize:"1.17em"}}
          >
          {list.name}
          </Typography>
          
          <Stack direction="row" spacing={2} sx ={{alignItems:"center"}}>
  <li> <MailOutlineIcon /></li>
  <li>{list.email}</li>
  </Stack>
  <Stack direction="row" spacing={2} sx ={{alignItems:"center"}}>
  <li> <PhoneEnabledIcon /></li>
  <li>{list.phone}</li>
  </Stack>
  <Stack direction="row" spacing={2} sx ={{alignItems:"center"}}>
  <li> <LanguageIcon /> </li>
  <li>{list.website}</li>
  </Stack>  
  
          
         
        </CardContent>
        <CardActions sx={{backgroundColor:"#f5f5f5", justifyContent:"space-around"}}>
            {favorate ?  <FavoriteIcon sx={{color:"red",cursor:"pointer"}} onClick={hideFav}/>: < FavoriteBorderIcon sx={{color:"red",cursor:"pointer"}} onClick={showFav}/>}
         
         
          <BorderColorOutlinedIcon  onClick ={handleShow} sx={{cursor:"pointer"}} />
         <DeleteIcon onClick ={()=>DeleteHandler(id)}  sx={{cursor:"pointer"}}/>
        </CardActions>
      </Card>

      <MyModals show={show} 
      handleClose ={handleClose} 
      id={id}
      editHandler={editHandler}
      list={list}
      />
      </>

    )
}

export default MyCard;