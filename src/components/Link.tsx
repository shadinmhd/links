import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

interface Props {
    children: string,
    to: string,
    icon: IconDefinition
}

const Link: React.FC<Props> = ({ children, to, icon }) => {
    return (
        <a
            target="_blank"
            href={to}
            className="w-56 p-4 flex text-lg items-center justify-evenly font-bold rounded-3xl bg-white text-black text-center"
        >
            <FontAwesomeIcon className="text-2xl" icon={icon} />
            <div>
                {children}
            </div>
        </a>
    )
}

export default Link