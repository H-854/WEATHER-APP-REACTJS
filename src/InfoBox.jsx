import './InfoBox.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function InfoBox({info}){
    let HOT_URL = "https://images.unsplash.com/photo-1577985759186-0854dfd3f218?q=80&w=757&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
        <div className='InfoBox'>
                <h1>Weather Information</h1>
                <div className="container">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={
                                info.temp > 15 ? HOT_URL : COLD_URL
                            }
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {
                                info.city
                            }
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>
                                <b>Temperature</b> = {info.temp}&deg;C
                            </p>
                            <p>
                                <b>Humidity</b> = {info.humidity}
                            </p>
                            <p><b>Minimum Temperature</b> = {info.tempMin}&deg;C</p>
                            <p><b>Maximum Temperature</b> = {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;c</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
        </div>
    )
}