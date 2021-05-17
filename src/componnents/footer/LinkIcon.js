import {FaPhoneAlt} from "react-icons/fa"
import {FaMapMarkerAlt} from "react-icons/fa"
import {FaEnvelope} from "react-icons/fa"

const LinkIcon = ({icon, text}) => {
    const icons=[
        (<FaPhoneAlt/>),
        (<FaMapMarkerAlt/>),
        (<FaEnvelope/>)
    ]
    return (
        <div className="link">
            <a href="makitiplus.com"><span className="iconLink">{icons[icon]}</span> {text}</a>
        </div>
    )
}

export default LinkIcon
