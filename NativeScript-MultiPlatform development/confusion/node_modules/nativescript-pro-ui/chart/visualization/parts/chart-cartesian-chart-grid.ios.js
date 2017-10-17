Object.defineProperty(exports, "__esModule", { value: true });
var cartesianChartGridModule = require("./chart-cartesian-chart-grid-common");
var color_1 = require("tns-core-modules/color");
////////////////////////////////////////////////////////////////////////
// RadCartesianChartGrid
////////////////////////////////////////////////////////////////////////
//NOTE: The workflow that uses exclusively created TKChartGridStyle instance (this._ios) is dummy, but needed.
//We faced with a bug that grid styling has some statics and if we set properties directly to this.owner.ios.gridStyle
//in view with multiple charts the grid of all of them have the same horizontal/vertial lines.
//The native code should be debug and statics removed.
////////////////////////////////////////////////////////////////////////
var RadCartesianChartGrid = (function (_super) {
    __extends(RadCartesianChartGrid, _super);
    function RadCartesianChartGrid() {
        var _this = _super.call(this) || this;
        _this._ios = TKChartGridStyle.new();
        _this._ios.drawOrder = 1 /* VerticalFirst */;
        return _this;
    }
    RadCartesianChartGrid.prototype.onOwnerChanged = function () {
        this.applyGridStyle();
    };
    RadCartesianChartGrid.prototype.applyGridStyle = function () {
        if (!this.owner) {
            return;
        }
        var style = this.owner.ios.gridStyle;
        style.drawOrder = this._ios.drawOrder;
        style.verticalLineStroke = this._ios.verticalLineStroke;
        ;
        style.verticalLineAlternateStroke = this._ios.verticalLineAlternateStroke;
        style.verticalLinesHidden = this._ios.verticalLinesHidden;
        style.verticalFill = this._ios.verticalFill;
        style.verticalAlternateFill = this._ios.verticalAlternateFill;
        style.horizontalLineStroke = this._ios.horizontalLineStroke;
        style.horizontalLineAlternateStroke = this._ios.horizontalLineAlternateStroke;
        style.horizontalFill = this._ios.horizontalFill;
        style.horizontalAlternateFill = this._ios.horizontalAlternateFill;
        style.horizontalLinesHidden = this._ios.horizontalLinesHidden;
        this.owner.updateChart();
    };
    RadCartesianChartGrid.prototype.updateGridStyle = function () {
        if (this.verticalLinesVisible != undefined)
            this._ios.verticalLinesHidden = (this.verticalLinesVisible) ? false : true;
        if (this.horizontalLinesVisible != undefined)
            this._ios.horizontalLinesHidden = (this.horizontalLinesVisible) ? false : true;
        if (this.verticalStripLineColor != undefined)
            this.updateVerticalFill(this.verticalStripLineColor);
        if (this.horizontalStripLineColor != undefined)
            this.updateHorizontalFill(this.horizontalStripLineColor);
        if (this.verticalStrokeColor) {
            var colors = this.verticalStrokeColor.split(',');
            this._ios.verticalLineStroke.color = (new color_1.Color(colors[0].trim())).ios;
            this._ios.verticalLineAlternateStroke.color = (colors[1] == undefined) ? (new color_1.Color(colors[0].trim())).ios : (new color_1.Color(colors[1].trim())).ios;
        }
        if (this.horizontalStrokeColor) {
            var colors = this.horizontalStrokeColor.split(',');
            this._ios.horizontalLineStroke.color = (new color_1.Color(colors[0].trim())).ios;
            this._ios.horizontalLineAlternateStroke.color = (colors[1] == undefined) ? (new color_1.Color(colors[0].trim())).ios : (new color_1.Color(colors[1].trim())).ios;
        }
        this._ios.verticalLineStroke.width = this.verticalStrokeWidth;
        this._ios.verticalLineAlternateStroke.width = this.verticalStrokeWidth;
        this._ios.horizontalLineStroke.width = this.horizontalStrokeWidth;
        this._ios.horizontalLineAlternateStroke.width = this.horizontalStrokeWidth;
        this.applyGridStyle();
    };
    RadCartesianChartGrid.prototype.updateHorizontalFill = function (color) {
        if (!color || !this.horizontalStripLinesVisible) {
            this._ios.horizontalFill = null;
            this._ios.horizontalAlternateFill = null;
        }
        else {
            var colors = color.split(',');
            // This is a workaround for the fact that in iOS when there is an alternate fill, it is applied first.
            if (colors[1] == undefined) {
                this._ios.horizontalFill = TKSolidFill.solidFillWithColor((new color_1.Color(colors[0].trim())).ios);
                this._ios.horizontalAlternateFill = null;
            }
            else {
                this._ios.horizontalAlternateFill = TKSolidFill.solidFillWithColor((new color_1.Color(colors[0].trim())).ios);
                this._ios.horizontalFill = TKSolidFill.solidFillWithColor((new color_1.Color(colors[1].trim())).ios);
            }
        }
        this.applyGridStyle();
    };
    RadCartesianChartGrid.prototype.updateVerticalFill = function (color) {
        if (!color || !this.verticalStripLinesVisible) {
            this._ios.verticalFill = null;
            this._ios.verticalAlternateFill = null;
        }
        else {
            var colors = color.split(',');
            // This is a workaround for the fact that in iOS when there is an alternate fill, it is applied first.
            if (colors[1] == undefined) {
                this._ios.verticalFill = TKSolidFill.solidFillWithColor((new color_1.Color(colors[0].trim())).ios);
                this._ios.verticalAlternateFill = null;
            }
            else {
                this._ios.verticalAlternateFill = TKSolidFill.solidFillWithColor((new color_1.Color(colors[0].trim())).ios);
                this._ios.verticalFill = TKSolidFill.solidFillWithColor((new color_1.Color(colors[1].trim())).ios);
            }
        }
        this.applyGridStyle();
    };
    RadCartesianChartGrid.prototype.onVerticalLinesVisibleChanged = function (oldValue, newValue) {
        this._ios.verticalLinesHidden = (newValue) ? false : true;
        this.applyGridStyle();
    };
    RadCartesianChartGrid.prototype.onHorizontalLinesVisibleChanged = function (oldValue, newValue) {
        this._ios.horizontalLinesHidden = (newValue) ? false : true;
        this.applyGridStyle();
    };
    RadCartesianChartGrid.prototype.onHorizontalStripLinesVisibleChanged = function (oldValue, newValue) {
        this.updateHorizontalFill((newValue) ? this.horizontalStripLineColor : null);
    };
    RadCartesianChartGrid.prototype.onVerticalStripLinesVisibleChanged = function (oldValue, newValue) {
        this.updateVerticalFill((newValue) ? this.verticalStripLineColor : null);
    };
    RadCartesianChartGrid.prototype.onVerticalStrokeColorChanged = function (oldValue, newValue) {
        if (newValue) {
            var colors = newValue.split(',');
            this._ios.verticalLineStroke.color = (new color_1.Color(colors[0].trim())).ios;
            this._ios.verticalLineAlternateStroke.color = (colors[1] == undefined) ? (new color_1.Color(colors[0].trim())).ios : (new color_1.Color(colors[1].trim())).ios;
            this.applyGridStyle();
        }
    };
    RadCartesianChartGrid.prototype.onHorizontalStrokeColorChanged = function (oldValue, newValue) {
        if (newValue) {
            var colors = newValue.split(',');
            this._ios.horizontalLineStroke.color = (new color_1.Color(colors[0].trim())).ios;
            this._ios.horizontalLineAlternateStroke.color = (colors[1] == undefined) ? (new color_1.Color(colors[0].trim())).ios : (new color_1.Color(colors[1].trim())).ios;
            this.applyGridStyle();
        }
    };
    RadCartesianChartGrid.prototype.onHorizontalStrokeWidthChanged = function (oldValue, newValue) {
        if (!isNaN(+newValue)) {
            this._ios.horizontalLineStroke.width = newValue;
            this._ios.horizontalLineAlternateStroke.width = newValue;
            this.applyGridStyle();
        }
    };
    RadCartesianChartGrid.prototype.onVerticalStrokeWidthChanged = function (oldValue, newValue) {
        if (!isNaN(+newValue)) {
            this._ios.verticalLineStroke.width = newValue;
            this._ios.verticalLineAlternateStroke.width = newValue;
            this.applyGridStyle();
        }
    };
    RadCartesianChartGrid.prototype.onVerticalStripLineColorChanged = function (oldValue, newValue) {
        this.updateVerticalFill(newValue);
    };
    RadCartesianChartGrid.prototype.onHorizontalStripLineColorChanged = function (oldValue, newValue) {
        this.updateHorizontalFill(newValue);
    };
    return RadCartesianChartGrid;
}(cartesianChartGridModule.RadCartesianChartGrid));
exports.RadCartesianChartGrid = RadCartesianChartGrid;
