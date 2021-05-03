import React from 'react';
import DeleteButton from '../DeleteButton';
// export interface IDropdownSection {
// 	value : string;
// 	// placeholder? : string;
// 	// onChange : (value : string) => void;
// 	onClick : () => void;
// }
export default (function (_a) {
    var value = _a.value, left = _a.left, top = _a.top, onDelete = _a.onDelete;
    return (React.createElement("div", { className: "rp-default-dropdown-section", style: {
            position: 'absolute',
            left: left,
            top: top
        } },
        React.createElement("div", { className: "rp-default-dropdown-section-header" },
            React.createElement("span", null, value),
            React.createElement("a", { className: "rp-default-dropdown-arrow", onClick: function () { return onDelete(); } },
                React.createElement(DeleteButton, null))),
        React.createElement("div", { className: "rp-default-dropdown-options" },
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("a", null, "Item-1")),
                React.createElement("li", null,
                    React.createElement("a", null, "Item-2"))))));
});
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
//# sourceMappingURL=DefaultDropdownSection.js.map