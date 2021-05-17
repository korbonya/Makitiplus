import {FaPhoneAlt} from "react-icons/fa"
import {FaPaperPlane} from "react-icons/fa"

const Button = ({color, icon, text}) => {
    if(icon==="Call"){
        icon=(<FaPhoneAlt/>)
    }else{
        icon=(<FaPaperPlane/>)
    }
    return (
        <button style={{'background':color}} className="btn-main">
        {icon} {text}
        </button>
    )
}

export default Button
