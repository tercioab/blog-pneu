import React, { useState, useContext } from 'react';
import myContext from '../../context/context';
import Input from "../custoKm/inputs";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router'

export default function Form() {
	const router = useRouter()
	const { setResultkm } = useContext(myContext);
	
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
			router.push('/result')
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
				  
					[`@media (min-width: 1000px)`]: {
					  marginLeft: 60,
					  marginRight: 60,
						},
					
					
						[`@media (max-width: 1500px)`]: {
							marginLeft: 30,
							marginRight: 30,
						},
						
						[`@media (max-width: 828px)`]: {
							marginLeft: 20,
							marginRight: 20,
						},
						
						[`@media (max-width: 668px)`]: {
							marginLeft: 10,
							marginRight: 10,
						},
						
						[`@media (max-width: 412px)`]: {
							marginLeft: 1,
							marginRight: 1,
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
			
		</>
	);
}