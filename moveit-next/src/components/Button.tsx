import {useState} from 'react' // é um hoop para utilizar estados

interface ButtonProps{
  color:string;
  children: string;
}
// quando quer escrever algo do javascript dentro do HTML tem que colocar entre chaves
export function Button(props: ButtonProps){

  const [counter,setCounter]= useState(1)
  function increment() {
    setCounter(counter+1);
  }
  return (
    <button 
    type="button"
    style= {{backgroundColor: props.color }}
    onClick={increment}>
      Botão <strong>{counter}</strong>
      {props.color}
      {props.children}
      </button>
  );
}