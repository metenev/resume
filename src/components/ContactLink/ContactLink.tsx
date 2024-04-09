import { FC } from "react"
import "./ContactLink.scss"

type Props = {
    text: string,
    href?: string,
    icon?: JSX.Element;
};

export const ContactLink: FC<Props> = ({ href, text, icon }) => {
    return <a href={href} target="_blank" className="contact-link">
        {
            icon
                ? <span className="icon">{icon}</span>
                : <></>
        }
        <span className="text">{text}</span>
    </a>
}