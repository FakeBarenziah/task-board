import React from 'react'

export default function ColumnHead(props){

    return(
        <div className="name-plate">
            <p>{props.contributorName}</p>
        </div>
    )
}