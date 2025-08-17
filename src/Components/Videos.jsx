import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function Videos() {
    const videoSet = [
        {
            title: "Abuja Therapy",
            video: "/abuja.mp4",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore impedit voluptatibus totam in sapiente, quod distinctio quam itaque blanditiis veniam soluta nihil necessitatibus voluptas repellendus quia alias? Repellat, quod facere."
        },
        {
            title: "Port-Harcourt Therapy",
            video: "/bgvideo.mp4",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore impedit voluptatibus totam in sapiente, quod distinctio quam itaque blanditiis veniam soluta nihil necessitatibus voluptas repellendus quia alias? Repellat, quod facere."
        },
    ];

    return (
        <>
            <div className="container mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {videoSet.map((items, index) => {
                        return (
                            <div key={index} className="rounded-lg h-auto  bg-black overflow-hidden">
                                <Card className='border-slate-500 w-full border-2'>
                                    <CardActionArea>
                                        <CardMedia
                                            alt={items.title} >
                                            <video width="100%" height="240" src={items.video} controls muted preload='none'></video>
                                        </CardMedia>
                                        <CardContent className='p-3' >
                                            <Typography className='font-semibold' gutterBottom >
                                                <h5 className="text-lg lg:text-2xl">
                                                    {items.title}
                                                </h5>
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                {items.text}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>

    )
}

export default Videos