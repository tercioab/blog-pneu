import React, { useState, useContext } from "react";
import myContext from "../context/context";
import postsJson from "../utils/posts.json";
import { Box, Button } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";

export default function SearchBar() {
	const { setResults } = useContext(myContext);
	const [query, setQuery] = useState("");

	const handleSubmit = async event => {
		event.preventDefault();
		const postResults = await postsJson.filter(({ title }) =>
			title.toUpperCase().includes(query.toUpperCase()),
		);
		setResults(postResults);
		setQuery("");
	};

	const clear = () => {
		setResults([]);
	};

	return (
		<Box
			sx={{
				mt: 6,
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",

				[`@media (max-width: 599px)`]: {
					marginLeft: 0,
					marginRight: 0,
				},

				[`@media (min-width: 600px)`]: {
					marginLeft: 8,
					marginRight: 8,
				},

				[`@media (min-width: 960px)`]: {
					marginLeft: 30,
					marginRight: 30,
				},
			}}
		>
			<Paper
				component='form'
				onSubmit={handleSubmit}
				sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
			>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder='O que procura?'
					inputProps={{ "aria-label": "O que procura ?" }}
					value={query}
					onChange={event => setQuery(event.target.value)}
				/>
				<IconButton type='submit' sx={{ p: "10px" }} aria-label='search'>
					<SearchIcon />
				</IconButton>
			</Paper>
			<Box item>
				<Button onClick={clear}>limpar</Button>
			</Box>
		</Box>
	);
}
