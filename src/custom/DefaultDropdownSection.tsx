import React from 'react';
import DeleteButton from '../DeleteButton';

// export interface IDropdownSection {
// 	value : string;
// 	// placeholder? : string;
// 	// onChange : (value : string) => void;
// 	onClick : () => void;
// }

export default({
	value,
	left,
	top,
	onDelete
}) => {
	return(

		<div className="rp-default-dropdown-section"
		
			style={{
				position : 'absolute',
				left,
				top
			}}
		
		>

			<div className="rp-default-dropdown-section-header">

				<span>{value}</span>
				<a className="rp-default-dropdown-arrow" onClick={() => onDelete()}>
					<DeleteButton></DeleteButton>
				</a>

			</div>

			<div className="rp-default-dropdown-options">
				<ul>
					<li>
						<a>Item-1</a>
					</li>
					<li>
						<a>Item-2</a>
					</li>
				</ul>
			</div>

		</div>



	)
}

// import React from "react";
// import DeleteButton from "./DeleteButton";

// export interface IDefaultInputSection {
//   value: string;
//   placeholder?: string;
//   onChange: (value: string) => void;
//   onDelete: () => void;
// }

// export default ({
//   value,
//   onChange,
//   onDelete,
//   placeholder = "INPUT TAG HERE!!!!!",
// }: IDefaultInputSection) => {
//   return (
//     <div className="rp-default-input-section">
//       <input
//         className="rp-default-input-section_input"
//         placeholder={placeholder}
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//       />
//       <a className="rp-default-input-section_delete" onClick={() => onDelete()}>
//         <DeleteButton />
//       </a>
//     </div>
//   );
// };
