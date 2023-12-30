import Icones from "../../assets/ícones/lista_icones.jsx";


export default function Icone(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" id={props.id} fill={props.fill} style={props.style} className={props.className} viewBox={props.viewbox} onClick={props.onClick}>
            {Icones[`${props.tipo}`]}
        </svg>
    )
}







