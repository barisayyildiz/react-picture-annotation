import { DefaultAnnotationState } from "./DefaultAnnotationState";
var CreatingAnnotationState = /** @class */ (function () {
    function CreatingAnnotationState(context) {
        var _this = this;
        this.onMouseDown = function () { return undefined; };
        this.onMouseMove = function (positionX, positionY) {
            var shapes = _this.context.shapes;
            if (shapes.length > 0) {
                var currentShape = shapes[shapes.length - 1];
                var _a = currentShape.getAnnotationData().mark, x = _a.x, y = _a.y;
                currentShape.adjustMark({
                    width: positionX - x,
                    height: positionY - y,
                });
            }
        };
        this.onMouseUp = function () {
            var _a = _this.context, shapes = _a.shapes, onShapeChange = _a.onShapeChange, setAnnotationState = _a.setAnnotationState;
            var data = shapes.pop();
            if (data &&
                data.getAnnotationData().mark.width !== 0 &&
                data.getAnnotationData().mark.height !== 0) {
                shapes.push(data);
            }
            else {
                if (data && _this.applyDefaultAnnotationSize(data)) {
                    shapes.push(data);
                    onShapeChange();
                }
                else {
                    _this.context.selectedId = null;
                    onShapeChange();
                }
            }
            setAnnotationState(new DefaultAnnotationState(_this.context));
        };
        this.applyDefaultAnnotationSize = function (shape) {
            if (_this.context.selectedId) {
                // Don't capture clicks meant to de-select another annotation.
                return false;
            }
            if (!_this.context.defaultAnnotationSize ||
                _this.context.defaultAnnotationSize.length !== 2) {
                return false;
            }
            var _a = _this.context.defaultAnnotationSize, width = _a[0], height = _a[1];
            shape.adjustMark({
                width: width,
                height: height,
            });
            return true;
        };
        this.onMouseLeave = function () { return _this.onMouseUp(); };
        this.context = context;
    }
    return CreatingAnnotationState;
}());
export default CreatingAnnotationState;
//# sourceMappingURL=CreatingAnnotationState.js.map