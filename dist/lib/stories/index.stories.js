var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { withA11y } from "@storybook/addon-a11y";
import { addDecorator, storiesOf } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { DefaultInputSection, defaultShapeStyle, ReactPictureAnnotation, } from "../src";
addDecorator(function (storyFn) { return React.createElement("div", null, storyFn()); });
storiesOf("Hello World", module)
    .addDecorator(withA11y)
    .add("with text", function () {
    var AnnotationComponent = function () {
        var _a = useState({
            width: window.innerWidth - 16,
            height: window.innerHeight - 16,
        }), size = _a[0], setSize = _a[1];
        var _b = useState([
            {
                id: "a",
                comment: "HA HA HA",
                mark: {
                    type: "RECT",
                    width: 161,
                    height: 165,
                    x: 229,
                    y: 92,
                },
            },
        ]), annotationData = _b[0], setAnnotationData = _b[1];
        var _c = useState("a"), selectedId = _c[0], setSelectedId = _c[1];
        var onResize = function () {
            setSize({
                width: window.innerWidth - 16,
                height: window.innerHeight - 16,
            });
        };
        useEffect(function () {
            window.addEventListener("resize", onResize);
            return function () {
                window.removeEventListener("resize", onResize);
            };
        }, []);
        return (React.createElement(ReactPictureAnnotation, { width: size.width, height: size.height, annotationData: annotationData, onChange: function (data) { return setAnnotationData(data); }, selectedId: selectedId, onSelect: function (e) { return setSelectedId(e); }, annotationStyle: __assign(__assign({}, defaultShapeStyle), { shapeStrokeStyle: "#2193ff", transformerBackground: "black" }), defaultAnnotationSize: [120, 90], image: "https://bequank.oss-cn-beijing.aliyuncs.com/landpage/large/60682895_p0_master1200.jpg", inputElement: function (value, onChange, onDelete) { return (React.createElement(DefaultInputSection, __assign({ placeholder: "Hello world" }, { value: value, onChange: onChange, onDelete: onDelete }))); }, dropdownOptions: [] }));
    };
    return React.createElement(AnnotationComponent, null);
});
//# sourceMappingURL=index.stories.js.map