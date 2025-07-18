import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import "./infoBox.css"



export default function InfoBox({ Data }) {
    
    const Cold = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    
    const haze = "https://plus.unsplash.com/premium_photo-1666211586138-d40960820390?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhemV8ZW58MHx8MHx8fDA%3D";

    const Hot = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const Rainy = "https://images.unsplash.com/photo-1509635022432-0220ac12960b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D"

    return (
        <div>
            <Typography gutterBottom variant="h5" component="div">
                        Weather Report
                    </Typography>
            <Card sx={{ maxWidth: 450 }}>
                
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="280"
                    width="300"
                    image= {Data.humidity > 80 ? Rainy :
                        Data.temp > 20 ?  Hot 
                        : Cold
                    }
                    alt="green iguana"
                    />
                    <CardContent>
                    
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            City: <b>{Data.city}</b><br></br>
                            Descciption: {Data.weatherDes}<br></br>
                            Temperature: {Data.temp}<br></br>
                            Feels_Like: {Data.feels_like}<br></br>
                            Weather: {Data.weatherMain}<br></br>
                            Wind_speed: {Data.windMain} 
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}