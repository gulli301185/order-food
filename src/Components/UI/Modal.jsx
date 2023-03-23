
import  ReactDOM from "react-dom"


function ModalOverLay(props){
    return(
        <div>{props.children}</div>
    )
}


function Modal(props){
   return(
    <div>
        {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,document.getElementById("food"))}
    </div>
   )
}

export default Modal