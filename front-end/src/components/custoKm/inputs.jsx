import TextField from "@mui/material/TextField";

export default function Input({ marcaValue, priceValue, kmValue, func, ph, phText }) {
	return (
		<>
			<TextField
				sx={{
					m: 1,
					[`@media (max-width: 599px)`]: {
						width: "4rem",
					},

					[`@media (min-width: 600px)`]: {
						width: "6rem",
					},

					[`@media (min-width: 1020px)`]: {
						width: "10rem",
					},
				}}
				id='MARCA'
				label='MARCA'
				placeholder='digite a marca'
				type='text'
				name='marca'
				value={marcaValue}
				onChange={func}
			/>
			<TextField
				sx={{
					m: 1,
					[`@media (max-width: 599px)`]: {
						width: "4rem",
					},

					[`@media (min-width: 600px)`]: {
						width: "6rem",
					},

					[`@media (min-width: 1020px)`]: {
						width: "10rem",
					},
				}}
				id='PREÇO'
				label='PREÇO'
				placeholder='digite o preço'
				type='number'
				name='price'
				value={priceValue}
				onChange={func}
			/>
			<TextField
				sx={{
					m: 1,

					[`@media (max-width: 599px)`]: {
						width: "4rem",
					},

					[`@media (min-width: 600px)`]: {
						width: "6rem",
					},

					[`@media (min-width: 1020px)`]: {
						width: "10rem",
					},
				}}
				id='KM'
				label={phText}
				placeholder={ph}
				type='number'
				name='km'
				value={kmValue}
				onChange={func}
			/>
		</>
	);
}
