import React from 'react'
import './ExpCard.css'


const ExpCard = ({details}) => {
    return(
        <div className='work-exp-card'>
            <h6>{details.title}</h6>
            <div className='work-duration'>{details.date}</div>
            <ul>
                {
                    details.responses.map((res) => {
                        return(
                            <li key={res}>{res}</li>    
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ExpCard