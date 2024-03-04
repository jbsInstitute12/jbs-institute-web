import React, { useState } from 'react'
import { useCollapse } from 'react-collapsed'

function BlogBox({ item }) {

    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
    return (
        <div>
            <div className="card">
                <div className="image">
                    <img className='img-1' src={item.image} alt="" />
                </div>
            </div>
            <div className="card-body">
                <div className='title my-2'>{item.title}</div>
                <div className='desc'>
                    <p>{item.content}  
                    <span
                        {...getToggleProps({
                            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                        })}
                    > {isExpanded ? '' : '...'}
                       
                    </span></p>
                    <p {...getCollapseProps()}>{item.additionalContent}</p>

                </div>
            </div>
        </div>
    )
}

export default BlogBox
