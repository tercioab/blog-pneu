import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function FeaturedCard({ imageSrc, title, preview, id }) {
	return (
		<Card sx={{ maxWidth: 557, minWidth: 250, m: 2 }}>
			<CardMedia component='img' height='330' image={imageSrc} alt={title} />
			<CardContent>
				<Typography gutterBottom variant='h4' component='div'>
					{title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{preview}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small' href={`posts/${id}`}>
					Ir para o post
				</Button>
			</CardActions>
		</Card>
	);
}
