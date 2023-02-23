import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ imageSrc, title, preview, id }) {
	return (
		<Card
			sx={{
				maxWidth: 230,
				minWidth: 230,
				m: 2,
			}}
		>
			<CardMedia component='img' height='200' image={imageSrc} alt={title} />
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{preview}
				</Typography>
			</CardContent>
			<CardActions>
				<Button href={`/posts/${id}`} size='small'>
					Ir para o post
				</Button>
			</CardActions>
		</Card>
	);
}
