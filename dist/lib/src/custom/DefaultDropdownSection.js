import React from 'react';
import DeleteButton from '../DeleteButton';
export default (function (_a) {
    var value = _a.value, left = _a.left, top = _a.top, onDelete = _a.onDelete, toggle = _a.toggle, isOpen = _a.isOpen, onInputCommentChange = _a.onInputCommentChange, dropdownOptions = _a.dropdownOptions;
    return (React.createElement("div", { className: "rp-default-dropdown-section", style: {
            position: 'absolute',
            left: left,
            top: top
        } },
        React.createElement("div", { className: "rp-default-dropdown-section-header", onClick: function () { return toggle(); } },
            React.createElement("span", { className: value ? 'selected' : '' }, value ? value : 'pick something...'),
            React.createElement("a", { className: "rp-default-dropdown-svg", onClick: function () { return onDelete(); } },
                React.createElement(DeleteButton, null))),
        isOpen && (React.createElement("div", { className: "rp-default-dropdown-options" },
            React.createElement("ul", null, dropdownOptions.map(function (item) {
                return (React.createElement("li", { onClick: function () { return onInputCommentChange(item); } },
                    React.createElement("a", null, item)));
            }))))));
});
//# sourceMappingURL=DefaultDropdownSection.js.map