import React, { useState } from 'react'
import { useCollapse } from 'react-collapsed'



export const ServicesBox = ({ image, title, dec ,subdec}) => {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
    return (
        <div className="servicesBox w-85 m-auto animate__animated ">
            <div className="iconPart hw-xl-100 hw-sm-80 hw-50">
                <img src={image} alt="" className='hw-xl-50 hw-sm-35 hw-20' />
            </div>
            <div className="detailsPart ">
                <div className="fs-xl-26 fs-20 fw-bold text-prime" title={title}>{title}</div>
                <p className="text-gray fw-500 w-90 fs-xl-15 fs-14">
                    <p>{dec}
                        <span
                            {...getToggleProps({
                                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                            })}
                        > {isExpanded ? '' : '...'}

                        </span></p>
                    <p {...getCollapseProps()}>{subdec}</p>

                </p>

                

            </div>
        </div>
    )
}
export default ServicesBox;