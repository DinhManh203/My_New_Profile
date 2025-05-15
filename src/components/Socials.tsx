import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: '' },
    { icon: <FaLinkedinIn />, path: '' },
    { icon: <FaYoutube />, path: '' },
    { icon: <FaTwitter />, path: '' },
];

type SocialsProps = {
    containerStyles?: string;
    iconStyles?: string;
};

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link
                    key={index}
                    href={item.path}
                    className={iconStyles}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {item.icon}
                </Link>
            ))}
        </div>
    );
};

export default Socials;
