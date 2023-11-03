import React from 'react'

const Button = ({variant, children, ...props}) => {
    
    let Btn_Name = 'flex justify-center items-center rounded-[2rem] mx-2 h-[2.5rem] font-semibold outline-red-600 border-[1px] border-red-500'

    if (variant === 'primary'){
        Btn_Name += ' bg-red-500 text-white w-[8rem] outline-red-500'
    }
    if (variant === 'secondary'){
        Btn_Name += ' bg-transparent text-red-500 w-[6rem] outline-red-500 '
    }

    return (
    <div className='flex justify-center my-3'>
    <button className={Btn_Name} {...props}>
    {children}
    </button>
    </div>
  )
}

export default Button
