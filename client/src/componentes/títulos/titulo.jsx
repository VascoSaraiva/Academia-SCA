
export default function Titulo(props){
    return(
        <h1 className={`font-unbounded text-titulo_pequeno md:text-titulo_grande font-semibold text-center my-5 ${props.className}`}>{props.children}</h1>
    )
}