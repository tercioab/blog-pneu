import React, { useState, useContext } from 'react';
import myContext from '../../context/context';
import Input from "../custoKm/inputs";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router'
import Paper from '@mui/material/Paper';


export default function Form() {
	const router = useRouter()

	const { setResultkm } = useContext(myContext);
	const [isValid, setBtnValid] = useState(false);

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

			((newState[0].marca && newState[0].km && newState[0].price) && setBtnValid(true))
			
			return newState;
		});
	};

	const onSendClick = () => {
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

	const preventForm = e => {
		e.preventDefault();
	};
	
	return (
		<>
			<div className='form-master'>
				<Paper
					 sx={{
						mt: 20,
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
				  
					[`@media (min-width: 1000px)`]: {
					  marginLeft: 65,
					  marginRight: 65,
						},
					
						[`@media (max-width: 1632px)`]: {
							marginLeft: 50,
							marginRight: 50,
						},
					
					
						[`@media (max-width: 1500px)`]: {
							marginLeft: 30,
							marginRight: 30,
						},


						[`@media (max-width: 1072px)`]: {
							marginLeft: 20,
							marginRight: 20,
						},
						

						[`@media (max-width: 720px)`]: {
							marginLeft: 15,
							marginRight: 15,
						},
						
						[`@media (max-width: 668px)`]: {
							marginLeft: 10,
							marginRight: 10,
						},

							
						[`@media (max-width: 464px)`]: {
							marginLeft: 5,
							marginRight: 5,
						},
						
						
						[`@media (max-width: 412px)`]: {
							marginLeft: 1,
							marginRight: 1,
						  },
				
				
						}}
				>				{form.map(({ key, price, marca, km }) => (
					<form key={key} onSubmit={preventForm} className='form-dados'>

						<Input
							phText='KM'
							ph='Digite a kilometragem'
							kmValue={km}
							priceValue={price}
							marcaValue={marca}
							func={event => onHandleChange(key, event)}
						/>
						<Button ariant="contained" sx={{mt: 2}} onClick={addForm}><h3>+</h3></Button>

					</form>
				))}			
				</Paper>

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
				<Button
				    sx={{mt: 3}}
					variant="contained" disabled={ !isValid } onClick={onSendClick} endIcon={<SendIcon />}>
  					enviar
					</Button>
				</Box>
				

				
                
			</div>
			
		</>
	);
}