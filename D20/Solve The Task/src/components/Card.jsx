import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, CardActionArea } from '@mui/material';

import { Link } from 'react-router-dom';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard({ movie, imgPath }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 350 }}>
            <CardHeader

                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={movie.title}

                subheader={`Release Date: ${movie.release_date}`}

            />
            <CardMedia
                component="img"
                height="300"
                image={imgPath + movie.poster_path}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {movie.title}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>

                <CardActions>
                    <Link to={`/movies/${movie.id}`}>
                        <Button size="small" color="primary">View More Details</Button>
                    </Link>
                </CardActions>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Details:</Typography>
                    <Typography paragraph>
                        {`Movie ID: ${movie.id}`}
                        <br />
                        {`Release Date: ${movie.release_date}`}
                    </Typography>



                </CardContent>
            </Collapse>
        </Card>
    );
}