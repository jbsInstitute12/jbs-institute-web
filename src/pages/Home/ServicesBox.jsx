import React, { useState } from 'react'
import { useCollapse } from 'react-collapsed'



export const ServicesBox = ({ image, title, dec ,subdec}) => {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
    return (
        <div className="servicesBox  ">
            <div className="iconPart hw-xl-100 hw-sm-80 hw-50">
                <img src={image} alt="" className='hw-xl-50 hw-sm-35 hw-20' />
            </div>
            <div className="detailsPart ">
                <div className="fs-xl-18 fs-14 fw-bold service-title" title={title}>{title}</div>
                <p className="section-text fw-500 fs-xl-14 fs-md-12 fs-12">
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