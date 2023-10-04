//challenge correcion con MEMO
import {useState} from "react";
import {Son} from "./Son"
//metemos memo
import {useMemo} from "react"
//metamos callback a la funcion increment
import {useCallback} from "react"

//raro caso de callback memorizando el estado y volviendo a inicializar

export const Father = () => {
	const list = [2,4,6,8,10]
	const [valor, setValor] = useState(0)

	let contador = 0

	const increment = useCallback ( (num) => {
		setValor (valor + num)
		contador = contador + num
		console.log("numero: " + num)
		console.log("valor numero: " + valor)
		console.log("contador: " +contador)
		setValor(contador)
	},[])

	//memoricemos la funcion y los valores
	//const memo = useMemo(()=> increment(valor),[valor])
	return(
	<>
		<div>
		<h1> Father </h1>
		<p> Total: {valor} </p>
		<hr />

		{
			list.map((n, idx) =>{
				return (
					<Son
						key={idx}
						numero={n}
						increment={increment}
					/>
				)
			})
		}

		</div>
	</>
	);
}
