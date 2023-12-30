

export default function TituloHeader(props){
    return(
        <h1 className="text-[1.5rem] xxs:text-[2rem] lg:text-[3.5rem] font-medium text-center font-unbounded leading-tight">{props.children}</h1>
    )
}