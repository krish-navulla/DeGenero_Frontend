import React from 'react'

const Button =({id, title, rightIcon, leftIcon, containerClass, scrollToId})=> {
    const handleClick = () => {
        const element = document.getElementById(scrollToId);
        if (element) {
            element.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    };
    return (
        <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden
        rounded-full px-7 py-3 text-black ${containerClass}`}
        onClick={handleClick}>
            <span className="relative incline-flex overflow-hidden font-general text-xs uppercase ">
                <div>
                    {title}
                </div>
            </span>
            {rightIcon}
        </button>
    )
}

export default Button