import React, { useEffect, useState } from 'react'

const Modal = ({isVisible, onClose,element}) => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    useEffect(() => {
        if (element) {
            const rect = element.getBoundingClientRect();
            setPosition({ top: rect.y + 40, left: rect.x - 100 });
        }
    }, [element]);
    if (!isVisible) return null;
    const handleClose = (e) =>{
        if(e.target.id === 'wrapper') onClose();
    }
return (
    <div className='fixed inset-0  flex' id="wrapper" onClick={handleClose}>
        <div className="absolute w-32 flex flex-col bg-white p-2 rounded-xl h-60" style={{ top: `${position.top}px`, left: `${position.left}px` }} >
            <div className="bg-white p-2 h-flex rounded-xl h-60"></div>
        </div>
    </div>
);
}

export default Modal;