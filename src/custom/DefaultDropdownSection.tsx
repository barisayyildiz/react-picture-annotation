import React from 'react';
import ArrowSvg from './ArrowSvg';

export interface IDropdownSection {
	value : string;
	// placeholder? : string;
	// onChange : (value : string) => void;
	onClick : () => void;
}

export default({
	value,
	onClick
} : IDropdownSection) => {
	return(

		<div className="rp-default-dropdown-section">

			<span>{value}</span>
			<a className="rp-default-dropdown-arrow" onClick={() => onClick()}>
				<ArrowSvg></ArrowSvg>
			</a>

			<div className="rp-default-dropdown-options">
				<ul>
					<li>Item-1</li>
					<li>Item-2</li>
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
