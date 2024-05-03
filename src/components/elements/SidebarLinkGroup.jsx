/* eslint-disable react/prop-types */
import  { useState } from 'react';

const SidebarLinkGroup = ({ children, activeCondition }) => {
    const [open, setOpen] = useState(activeCondition);

    const handleClick = () => {
        setOpen(!open);
    };

    return <li className='hover:bg-[#e8eaed37] duration-300 ease-in-out rounded-lg'>{children(handleClick, open)}</li>;
};

export default SidebarLinkGroup;
