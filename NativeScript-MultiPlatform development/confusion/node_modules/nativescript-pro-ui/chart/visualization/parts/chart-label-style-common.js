Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("tns-core-modules/ui/core/view");
var PointLabelStyle = (function (_super) {
    __extends(PointLabelStyle, _super);
    function PointLabelStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PointLabelStyle.strokeColorProperty = new view_1.Property({
        name: "strokeColor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) { },
    });
    PointLabelStyle.fillColorProperty = new view_1.Property({
        name: "fillColor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) { },
    });
    PointLabelStyle.textColorProperty = new view_1.Property({
        name: "textColor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) { },
    });
    PointLabelStyle.textSizeProperty = new view_1.Property({
        name: "textSize",
        defaultValue: 10,
        valueConverter: parseFloat,
        valueChanged: function (target, oldValue, newValue) { },
    });
    PointLabelStyle.marginProperty = new view_1.Property({
        name: "margin",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) { },
    });
    PointLabelStyle.textFormatProperty = new view_1.Property({
        name: "textFormat",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
        },
    });
    PointLabelStyle.fontNameProperty = new view_1.Property({
        name: "fontName",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) { },
    });
    PointLabelStyle.fontStyleProperty = new view_1.Property({
        name: "fontStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) { },
    });
    return PointLabelStyle;
}(view_1.ViewBase));
exports.PointLabelStyle = PointLabelStyle;
PointLabelStyle.strokeColorProperty.register(PointLabelStyle);
PointLabelStyle.fillColorProperty.register(PointLabelStyle);
PointLabelStyle.textColorProperty.register(PointLabelStyle);
PointLabelStyle.textSizeProperty.register(PointLabelStyle);
PointLabelStyle.marginProperty.register(PointLabelStyle);
PointLabelStyle.textFormatProperty.register(PointLabelStyle);
PointLabelStyle.fontNameProperty.register(PointLabelStyle);
PointLabelStyle.fontStyleProperty.register(PointLabelStyle);
