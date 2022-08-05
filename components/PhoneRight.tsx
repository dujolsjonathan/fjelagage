interface Props {
    phone: string;
    phoneString: string;
  }

const PhoneRight = ({phone, phoneString}: Props) => {

    return (
        <a className="" href={`tel:${phone}`}>
            <div className="phone-right phone">
                <i className="fa fa-phone"></i>
                <p>{phoneString}</p>
            </div>
        </a>
    )
}

export default PhoneRight;