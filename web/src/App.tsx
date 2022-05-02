import { Widget } from "./components/Widget";



interface ButtonProps{
  text?: string; //?: faz com que o elemento seja opcional
}
//utilizar rem ao contrario de px para questoes de acessibilidade
function Button(props: ButtonProps){
  return(
    <button className="bg-violet-500 px-2 h-7 rounded text-violet-100 hover:bg-violet-800 transition-colors">{props.text ?? 'Default'}</button> //o texto apos ?? se torna o default caso o componente nao envie nada
  )
}

export function App() {
  return (
    //<div className="flex gap-2"> 
    //  <h1>Hello world!</h1>
    //  <Button text="Enviar"/>
    //  <Button text="Ok"/>
    //  <Button/>
    //  </div>
    <Widget/>
   
  )
}