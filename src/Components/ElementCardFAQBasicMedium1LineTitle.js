import React from 'react'
import './ElementCardFAQBasicMedium1LineTitle.css'
export default function ElementCardFAQBasicMedium1LineTitle (props) {
	return (
		<div className={`ElementCardFAQBasicMedium1LineTitle_ElementCardFAQBasicMedium1LineTitle ${props.className}`}>
			<span className='Body'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. <br/>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,</span>
			<span className='Title'>Who Is This For?</span>
		</div>
	)
}