import React from 'react';
import DeleteButton from '../DeleteButton';

export default({
	value,
	left,
	top,
	onDelete,
	toggle,
	isOpen,
	onInputCommentChange,
	dropdownOptions
}) => {
	return(

		<div className="rp-default-dropdown-section"
			style={{
				position : 'absolute',
				left,
				top
			}}
		>
			<div className="rp-default-dropdown-section-header"  onClick={() => toggle()} >
				<span className={value ? 'selected' : ''}>{value ? value : 'pick something...'}</span>
				<a className="rp-default-dropdown-svg" onClick={() => onDelete()}>
					<DeleteButton></DeleteButton>
				</a>
			</div>
			{
				isOpen && (
					<div className="rp-default-dropdown-options">
						<ul>
							{
								dropdownOptions.map(item => {
									return(
										<li onClick={() => onInputCommentChange(item)}>
											<a>{item}</a>
										</li>
									)
								})
							}
						</ul>
					</div>
				)
			}
		</div>
	)
}

