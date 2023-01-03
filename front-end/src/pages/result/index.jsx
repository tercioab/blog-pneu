import Header from "../../components/Header";
import { useContext } from 'react';
import myContext from "../../context/context";

export default function CustoKm() {

    const { resultkm } = useContext(myContext);
    
    return (
        <>
            <Header />
            
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
    )
}