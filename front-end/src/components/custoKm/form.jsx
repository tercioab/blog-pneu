import React, { useState, useContext } from 'react';
import myContext from '../../context/context';
import Input from "../custoKm/inputs";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';

export default function Form() {

	const { setResultkm, resultkm } = useContext(myContext);
	
	const [form, setform] = useState([
		{
			marca: "",
			km: "",
			price: "",
			key: Date.now(),
		},
	]);

	

	const addForm = () => {
		setform(prev => [
			...prev,
			{
				marca: "",
				km: "",
				price: "",
				key: Date.now(),
			},
		]);
	};

	const onHandleChange = (key, { target }) => {
		const { name, value } = target;
		setform(prev => {
			const newState = prev.map(product => {
				if (product.key === key) {
					return {
						...product,
						[name]: value,
					};
				}
				return product;
			});
			return newState;
		});
	};

	const onClick = () => {
		form.forEach(({ marca, price, km }) => {

			const finalResult = {
				result: ((price / km) * 1000).toFixed(2),
				marca,
				km,
				price,
			};
			setResultkm(prev => [...prev, finalResult]);
		});

		setform([
			{
				marca: "",
				km: "",
				price: "",
				key: Date.now(),
			},
		]);
	};

	const prevent = e => {
		e.preventDefault();
	};

	return (
		<>
			<div className='form-master'>
				<Box
					 sx={{
						mt: 20,
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
				  
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
				>				{form.map(({ key, price, marca, km }) => (
					<form key={key} onSubmit={prevent} className='form-dados'>

						<Input
							phText='KM'
							ph='Digite a kilometragem'
							kmValue={km}
							priceValue={price}
							marcaValue={marca}
							func={event => onHandleChange(key, event)}
						/>
						<button onClick={addForm}>+</button>

					</form>
				))}			
				</Box>

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
				<Button
				
					variant="contained" onClick={onClick} endIcon={<SendIcon />}>
  					enviar
					</Button>
				</Box>
				

				
                
			</div>
			
			{resultkm
				.sort((a, b) => a.result - b.result)
				.map(
					({ result, marca, km, price }, index) =>
						price &&
						marca &&
						km && (
							<div key={index} className='result-div'>
								<h3>Marca:{marca}</h3>
								<h3>Km:{km}</h3>
								<h3>Preço:{price}</h3>
								<h3 id={`l${index}`}>Valor Por Km:{result}</h3>
							</div>
						),
				)}
		</>
	);
}