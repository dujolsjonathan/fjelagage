// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

interface Props {
    phone: string;
    phoneString: string;
}

const PhoneRight = ({ phone, phoneString }: Props) => {

    return (
        <a className="" href={`tel:${phone}`}>
            <div className="phone-right phone">
                <FontAwesomeIcon
                    icon={faPhone}
                    style={{ fontSize: 35 , padding: 10 }}
                />
                <p>{phoneString}</p>
            </div>
        </a>
    )
}

export default PhoneRight;