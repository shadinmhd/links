import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

interface Props {
    children: string,
    to: string,
    icon: IconDefinition,
    index: number,
}

const Link: React.FC<Props> = ({ children, to, icon, index }) => {
    return (
        <motion.a
            target="_blank"
            href={to}
            className="w-56 p-4 flex text-lg items-center justify-evenly font-bold rounded-3xl bg-white text-[#101010] text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.3,transition: { delay: 0, duration: 0.1, ease: "linear" }}}
            transition={{ delay: 0.2 + (0.1 * index), duration: 0.5 }}
        >
            <motion.div
                className="flex items-center justify-center"
            >
                <FontAwesomeIcon className="text-2xl" icon={icon} />
            </motion.div>
            <motion.div>
                {children}
            </motion.div>
        </motion.a>
    )
}

export default Link