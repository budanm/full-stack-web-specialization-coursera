Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("tns-core-modules/color");
var chart_axis_common_1 = require("../visualization/views/chart-axis-common");
var chart_public_enum_1 = require("../misc/chart-public-enum");
var chart_series_common_1 = require("../visualization/views/chart-series-common");
var utils = require("tns-core-modules/utils/utils");
var ChartBaseValueMapper = (function () {
    function ChartBaseValueMapper() {
    }
    ChartBaseValueMapper.prototype.onLegendChanged = function (oldValue, newValue, chart) {
    };
    ChartBaseValueMapper.prototype.onPalettesChanged = function (data, chart) {
    };
    ChartBaseValueMapper.prototype.onPalettesPropertyChanged = function (oldValue, newValue, chart) {
    };
    ChartBaseValueMapper.prototype.onSeriesChanged = function (data, chart) {
    };
    ChartBaseValueMapper.prototype.onSeriesPropertyChanged = function (oldValue, newValue, chart) {
    };
    ChartBaseValueMapper.prototype.onAnnotationsChanged = function (data, chart) {
    };
    ChartBaseValueMapper.prototype.onAnnotationsPropertyChanged = function (oldValue, newValue, chart) {
    };
    ChartBaseValueMapper.prototype.onSelectionModeChanged = function (oldValue, newValue, chart) {
    };
    ChartBaseValueMapper.prototype.loadSeries = function (chart) {
    };
    ChartBaseValueMapper.prototype.loadAnnotations = function (chart) {
    };
    ChartBaseValueMapper.prototype.reloadPalettes = function (chart) {
    };
    ChartBaseValueMapper.prototype.updateHorizontalAxisPalette = function (chart) {
    };
    ChartBaseValueMapper.prototype.updateVerticalAxisPalette = function (chart) {
    };
    return ChartBaseValueMapper;
}());
exports.ChartBaseValueMapper = ChartBaseValueMapper;
var CartesianAxisValueMapper = (function () {
    function CartesianAxisValueMapper() {
    }
    CartesianAxisValueMapper.prototype.onLineThicknessChanged = function (oldValue, newValue, axis) {
        if (newValue) {
            axis.ios.style.lineStroke = TKStroke.strokeWithColorWidth(axis.lineColor ? new color_1.Color(axis.lineColor).ios : axis.ios.style.lineStroke.color, newValue);
            axis.update();
        }
    };
    CartesianAxisValueMapper.prototype.onLineColorChanged = function (oldValue, newValue, axis) {
        if (newValue != null && newValue != undefined) {
            axis.ios.style.lineStroke = TKStroke.strokeWithColorWidth((new color_1.Color(newValue)).ios, axis.lineThickness ? axis.lineThickness : axis.ios.style.lineStroke.width);
            axis.update();
        }
    };
    CartesianAxisValueMapper.prototype.onLineHiddenChanged = function (oldValue, newValue, axis) {
        if (!newValue && !isNaN(+axis.lineThickness)) {
            axis.ios.style.lineStroke.width = axis.lineThickness;
        }
        axis.ios.style.lineHidden = newValue;
        axis.update();
    };
    CartesianAxisValueMapper.prototype.onLabelTextColorChanged = function (oldValue, newValue, axis) {
        if (newValue) {
            axis.ios.style.labelStyle.textColor = (new color_1.Color(newValue)).ios;
            axis.update();
        }
    };
    CartesianAxisValueMapper.prototype.onLabelMarginChanged = function (oldValue, newValue, axis) {
        if (!isNaN(newValue)) {
            axis.ios.style.labelStyle.textOffset = { horizontal: newValue, vertical: newValue };
            axis.update();
        }
    };
    CartesianAxisValueMapper.prototype.onLabelRotationAngleChanged = function (oldValue, newValue, axis) {
        if (!isNaN(newValue)) {
            axis.ios.style.labelStyle.rotationAngle = newValue;
            axis.update();
        }
    };
    CartesianAxisValueMapper.prototype.onLabelFitModeChanged = function (oldValue, newValue, axis) {
        if (newValue) {
            if (chart_public_enum_1.AxisLabelFitMode.Multiline.toLowerCase() === newValue.toLowerCase()) {
                axis.ios.style.labelStyle.fitMode = 1 /* Multiline */;
            }
            else if (chart_public_enum_1.AxisLabelFitMode.Rotate.toLowerCase() === newValue.toLowerCase()) {
                axis.ios.style.labelStyle.fitMode = 2 /* Rotate */;
            }
            else {
                axis.ios.style.labelStyle.fitMode = 0 /* None */;
            }
            axis.update();
        }
    };
    //NOTE: initially we cannot set new mode to native object since initially we don't know if the axis is horizontal or vertical
    //that's why we set the mode in owner's axis changed call (see CartesianSeriesValueMapper::onHorizontalAxisChanged)
    //But, we need this update for cases when layout mode is changed from code after the chart is shown        
    CartesianAxisValueMapper.prototype.onLabelLayoutModeChanged = function (oldValue, newValue, axis) {
        if (!newValue) {
            return;
        }
        if (axis.ios.isVertical) {
            axis.ios.style.labelStyle.textAlignment = (newValue.toLowerCase() === chart_public_enum_1.AxisLabelLayoutMode.Inner.toLowerCase()) ?
                2 /* Right */ : 1 /* Left */;
        }
        else {
            axis.ios.style.labelStyle.textAlignment = (newValue.toLowerCase() === chart_public_enum_1.AxisLabelLayoutMode.Inner.toLowerCase()) ?
                4 /* Top */ : 8 /* Bottom */;
        }
        axis.update();
    };
    CartesianAxisValueMapper.prototype.onLabelFormatChanged = function (oldValue, newValue, axis) {
        if (newValue) {
            axis.ios.labelFormat = (newValue);
            axis.update();
        }
    };
    CartesianAxisValueMapper.prototype.onHorizontalLocationChanged = function (oldValue, newValue, axis) {
        if (newValue) {
            if (chart_public_enum_1.AxisHorizontalLocation.Left.toLowerCase() === newValue.toLowerCase()) {
                axis.ios.position = 0 /* Left */;
            }
            else if (chart_public_enum_1.AxisHorizontalLocation.Right.toLowerCase() === newValue.toLowerCase()) {
                axis.ios.position = 1 /* Right */;
            }
            axis.update();
        }
    };
    CartesianAxisValueMapper.prototype.onVerticalLocationChanged = function (oldValue, newValue, axis) {
        if (newValue) {
            if (chart_public_enum_1.AxisVerticalLocation.Top.toLowerCase() === newValue.toLowerCase()) {
                axis.ios.position = 2 /* Top */;
            }
            else if (chart_public_enum_1.AxisVerticalLocation.Bottom.toLowerCase() === newValue.toLowerCase()) {
                axis.ios.position = 3 /* Bottom */;
            }
            axis.update();
        }
    };
    CartesianAxisValueMapper.prototype.onLabelSizeChanged = function (oldValue, newValue, axis) {
        if (newValue) {
            var fontName = axis.ios.style.labelStyle.font.fontName;
            axis.ios.style.labelStyle.font = UIFont.fontWithNameSize(fontName, newValue);
            axis.update();
        }
    };
    CartesianAxisValueMapper.prototype.onAllowZoomChanged = function (oldValue, newValue, axis) {
        axis.ios.allowZoom = newValue;
        axis.update();
    };
    CartesianAxisValueMapper.prototype.onAllowPanChanged = function (oldValue, newValue, axis) {
        axis.ios.allowPan = newValue;
        axis.update();
    };
    CartesianAxisValueMapper.prototype.onHiddenChanged = function (oldValue, newValue, axis) {
        axis.ios.hidden = newValue;
        axis.update();
    };
    return CartesianAxisValueMapper;
}());
exports.CartesianAxisValueMapper = CartesianAxisValueMapper;
var CategoricalAxisValueMapper = (function (_super) {
    __extends(CategoricalAxisValueMapper, _super);
    function CategoricalAxisValueMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoricalAxisValueMapper.prototype.onMajorTickIntervalChanged = function (oldValue, newValue, axis) {
        console.log("WARNING: majorTickInterval property is not supported for iOS.");
        // if (!isNaN(+newValue)) {
        //     axis.ios.majorTickInterval = newValue;
        //     axis.update();
        // }
    };
    CategoricalAxisValueMapper.prototype.onPlotModeChanged = function (oldValue, newValue, axis) {
        if (newValue) {
            switch (newValue.toLowerCase()) {
                case chart_public_enum_1.AxisPlotMode.BetweenTicks.toLowerCase():
                    axis.ios.setPlotMode(1 /* BetweenTicks */);
                    break;
                case chart_public_enum_1.AxisPlotMode.OnTicks.toLowerCase():
                    axis.ios.setPlotMode(0 /* OnTicks */);
                    break;
                default:
                    console.log("WARNING: Unsupported plot mode set: " + newValue);
            }
            axis.update();
        }
    };
    return CategoricalAxisValueMapper;
}(CartesianAxisValueMapper));
exports.CategoricalAxisValueMapper = CategoricalAxisValueMapper;
////////////////////////////////////////////////////////////////////////////////////////////
//  Series value mappers
////////////////////////////////////////////////////////////////////////////////////////////
var ChartSeriesValueMapper = (function () {
    function ChartSeriesValueMapper() {
    }
    ChartSeriesValueMapper.prototype.onItemsChanged = function (oldValue, newValue, series) { };
    ChartSeriesValueMapper.prototype.onValuePropertyChanged = function (oldValue, newValue, series) { };
    ChartSeriesValueMapper.prototype.onShowLabelsChanged = function (oldValue, newValue, series) {
        if (series.ios && newValue) {
            this.applyLabelStyle(series);
        }
    };
    ChartSeriesValueMapper.prototype.onLegendTitleChanged = function (oldValue, newValue, series) {
        if (series.ios && newValue) {
            series.ios.title = newValue;
            if (series.owner) {
                series.owner.ios.legend.reloadItems();
            }
        }
    };
    ChartSeriesValueMapper.prototype.onSelectionModeChanged = function (oldValue, newValue, series) {
        if (series.ios && newValue) {
            this.applySelectionMode(series);
            if (series.owner) {
                series.updateOwnerChart();
            }
        }
    };
    ChartSeriesValueMapper.prototype.applySelectionMode = function (series) {
        var newValue = series.selectionMode;
        switch (newValue.toLowerCase()) {
            case chart_series_common_1.SeriesSelectionMode.Series.toLowerCase():
                series.ios.selection = 2 /* Series */;
                break;
            case chart_series_common_1.SeriesSelectionMode.DataPoint.toLowerCase():
                series.ios.selection = 3 /* DataPoint */;
                break;
            case chart_series_common_1.SeriesSelectionMode.None.toLowerCase():
                series.ios.selection = 1 /* None */;
                break;
            case (chart_series_common_1.SeriesSelectionMode.NotSet.toLowerCase()):
                series.ios.selection = 0 /* NotSet */;
                break;
            case chart_series_common_1.SeriesSelectionMode.DataPointMultiple.toLowerCase():
                series.ios.selection = 4 /* DataPointMultiple */;
                break;
            default:
                console.log("WARNING: Unsupported selection mode: " + newValue);
        }
    };
    ChartSeriesValueMapper.prototype.onLabelStyleChanged = function (oldValue, newValue, series) {
        if (series.ios && newValue) {
            this.applyLabelStyle(series);
        }
    };
    ChartSeriesValueMapper.prototype.applyLabelStyle = function (series) {
        if (!series || !series.ios) {
            return;
        }
        series.ios.style.pointLabelStyle.textHidden = !series.showLabels;
        if (series.labelStyle) {
            if (series.labelStyle.textColor) {
                series.ios.style.pointLabelStyle.textColor = (new color_1.Color(series.labelStyle.textColor)).ios;
            }
            if (series.labelStyle.fillColor) {
                series.ios.style.pointLabelStyle.fill = TKSolidFill.solidFillWithColor((new color_1.Color(series.labelStyle.fillColor)).ios);
            }
            if (series.labelStyle.strokeColor) {
                series.ios.style.pointLabelStyle.stroke = TKStroke.strokeWithColor((new color_1.Color(series.labelStyle.strokeColor)).ios);
            }
            if (series.labelStyle.margin) {
                series.ios.style.pointLabelStyle.labelOffset = { horizontal: series.labelStyle.margin, vertical: series.labelStyle.margin };
            }
            if (series.labelStyle.textFormat) {
                series.ios.style.pointLabelStyle.stringFormat = series.labelStyle.textFormat;
            }
            var font = null;
            var fontSize = !isNaN(+series.labelStyle.textSize) ? series.labelStyle.textSize : 10;
            if (series.labelStyle.fontName) {
                font = UIFont.fontWithNameSize(series.labelStyle.fontName, fontSize);
                if (!font) {
                    console.log("WARNING: Cannot create font with given name: " + series.labelStyle.fontName);
                    return;
                }
            }
            if (!font) {
                font = UIFont.systemFontOfSize(fontSize);
            }
            if (series.labelStyle.fontStyle) {
                var traits = 0 /* ClassUnknown */;
                var fontStyle = series.labelStyle.fontStyle.toLowerCase();
                switch (fontStyle) {
                    case chart_public_enum_1.FontStyles.Bold.toLowerCase():
                        traits = 2 /* TraitBold */;
                        break;
                    case chart_public_enum_1.FontStyles.Italic.toLowerCase():
                        traits = 1 /* TraitItalic */;
                        break;
                    case chart_public_enum_1.FontStyles.BoldItalic.toLowerCase():
                        traits = 2 /* TraitBold */ | 1 /* TraitItalic */;
                        break;
                }
                var newFont = UIFont.fontWithDescriptorSize(utils.ios.getter(font, font.fontDescriptor).fontDescriptorWithSymbolicTraits(traits), fontSize);
                if (newFont) {
                    font = newFont;
                }
            }
            if (font) {
                series.ios.style.pointLabelStyle.font = font;
            }
        }
        if (series.owner) {
            series.updateOwnerChart();
        }
    };
    return ChartSeriesValueMapper;
}());
exports.ChartSeriesValueMapper = ChartSeriesValueMapper;
var PieSeriesValueMapper = (function (_super) {
    __extends(PieSeriesValueMapper, _super);
    function PieSeriesValueMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PieSeriesValueMapper.prototype.onShowLabelsChanged = function (oldValue, newValue, series) {
        if (!series.ios) {
            this.bind(series);
        }
        else {
            this.applyLabelStyle(series);
        }
    };
    PieSeriesValueMapper.prototype.onValuePropertyChanged = function (oldValue, newValue, series) {
        this.bind(series);
    };
    PieSeriesValueMapper.prototype.onItemsChanged = function (oldValue, newValue, series) {
        this.bind(series);
    };
    PieSeriesValueMapper.prototype.onLabelPropertyChanged = function (oldValue, newValue, series) {
        this.bind(series);
    };
    PieSeriesValueMapper.prototype.onLabelStyleChanged = function (oldValue, newValue, series) {
        if (!series.ios) {
            this.bind(series);
        }
        else {
            this.applyLabelStyle(series);
        }
    };
    PieSeriesValueMapper.prototype.onExpandRadiusChanged = function (oldValue, newValue, series) {
        if (!series.ios) {
            this.bind(series);
        }
        else {
            var radius = newValue;
            if (isNaN(+radius) || radius < 0.0 || radius > 1.0) {
                console.log("WARNING : Expand radius factor must be number in range [0,1]");
            }
            else {
                series.ios.expandRadius = radius + 1;
            }
        }
    };
    PieSeriesValueMapper.prototype.onOuterRadiusFactorChanged = function (oldValue, newValue, series) {
        if (!series.ios) {
            this.bind(series);
        }
        else {
            var radius = newValue;
            if (isNaN(+radius) || radius < 0.0 || radius > 1.0) {
                console.log("WARNING : Outer radius factor must be number in range [0,1]");
            }
            else {
                series.ios.outerRadius = radius;
                series.updateOwnerChart();
            }
        }
    };
    PieSeriesValueMapper.prototype.onShowPercentageChanged = function (oldValue, newValue, series) {
        if (!series.ios) {
            this.bind(series);
        }
        else {
            series.ios.displayPercentage = (newValue) ? true : false;
            series.updateOwnerChart();
        }
    };
    PieSeriesValueMapper.prototype.onStartAngleChanged = function (oldValue, newValue, series) {
        if (!series.ios) {
            this.bind(series);
        }
        else {
            if (!isNaN(+newValue)) {
                series.ios.startAngle = newValue * Math.PI / 180;
                series.updateOwnerChart();
            }
        }
    };
    PieSeriesValueMapper.prototype.onEndAngleChanged = function (oldValue, newValue, series) {
        if (!series.ios) {
            this.bind(series);
        }
        else {
            if (!isNaN(+newValue)) {
                series.ios.endAngle = series.endAngle * Math.PI / 180;
                series.updateOwnerChart();
            }
        }
    };
    PieSeriesValueMapper.prototype.onLegendTitleChanged = function (oldValue, newValue, series) {
        console.log("WARNING: legendTitle property is not applicable to Pie series. Use 'legendLabel' instead.");
    };
    PieSeriesValueMapper.prototype.getNativeData = function (series) {
        var length = series.items.length;
        var nativeSource = NSMutableArray.new();
        var item, name, value;
        for (var i = 0; i < length; i++) {
            item = series.getItemAtIndex(i);
            value = item[series.valueProperty];
            if (series.legendLabel) {
                name = item[series.legendLabel];
            }
            else {
                name = "Series " + (i + 1);
            }
            nativeSource.addObject(TKChartDataPoint.alloc().initWithNameValue(name, value));
        }
        return nativeSource;
    };
    PieSeriesValueMapper.prototype.setCommonProperties = function (series) {
        var radius = series.expandRadius;
        if (radius) {
            if (isNaN(+radius) || radius < 0.0 || radius > 1.0) {
                console.log("WARNING : Expand radius factor must be number in range [0,1]");
            }
            else {
                series.ios.expandRadius = radius + 1;
            }
        }
        radius = series.outerRadiusFactor;
        if (radius) {
            if (isNaN(+radius) || radius < 0.0 || radius > 1.0) {
                console.log("WARNING : Outer radius factor must be number in range [0,1]");
            }
            else {
                series.ios.outerRadius = radius;
            }
        }
        if (!isNaN(series.startAngle)) {
            series.ios.startAngle = series.startAngle * Math.PI / 180;
        }
        if (!isNaN(series.endAngle)) {
            series.ios.endAngle = series.endAngle * Math.PI / 180;
        }
    };
    PieSeriesValueMapper.prototype.bind = function (series) {
        if (!(series.items && series.valueProperty)) {
            return;
        }
        series.ios = TKChartPieSeries.alloc().initWithItems(this.getNativeData(series));
        series.ios.adjustSizeToFit = false;
        this.setCommonProperties(series);
        this.applyLabelStyle(series);
        this.applySelectionMode(series);
        series.ios.labelDisplayMode = 2 /* Outside */;
        series.ios.visibleInLegend = true;
        series.ios.rotationEnabled = false;
        series.ios.displayPercentage = (series.showPercentage === undefined) ? true : series.showPercentage;
        if (series.owner && series.owner['addSeries']) {
            series.owner['addSeries'](series.ios);
        }
    };
    return PieSeriesValueMapper;
}(ChartSeriesValueMapper));
exports.PieSeriesValueMapper = PieSeriesValueMapper;
var DonutSeriesValueMapper = (function (_super) {
    __extends(DonutSeriesValueMapper, _super);
    function DonutSeriesValueMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DonutSeriesValueMapper.prototype.onInnerRadiusFactorChanged = function (oldValue, newValue, series) {
        if (!series.ios) {
            this.bind(series);
        }
        else {
            var radius = newValue;
            if (isNaN(+radius) || radius < 0.0 || radius > 1.0) {
                console.log("WARNING : Inner radius factor must be number in range (0,1)");
            }
            else {
                series.ios.innerRadius = (series.innerRadiusFactor) ? series.innerRadiusFactor : 0.5;
                series.updateOwnerChart();
            }
        }
    };
    DonutSeriesValueMapper.prototype.bind = function (series) {
        if (!(series.items && series.valueProperty)) {
            return;
        }
        series.ios = TKChartDonutSeries.alloc().initWithItems(this.getNativeData(series));
        series.ios.adjustSizeToFit = false;
        var radius = series.innerRadiusFactor;
        if (isNaN(+radius) || radius < 0.0 || radius > 1.0) {
            console.log("WARNING : Inner radius factor must be number in range (0,1)");
        }
        else {
            series.ios.innerRadius = (series.innerRadiusFactor) ? series.innerRadiusFactor : 0.5;
        }
        this.setCommonProperties(series);
        this.applyLabelStyle(series);
        this.applySelectionMode(series);
        series.ios.labelDisplayMode = 2 /* Outside */;
        series.ios.visibleInLegend = true;
        series.ios.rotationEnabled = false;
        series.ios.displayPercentage = (series.showPercentage === undefined) ? true : series.showPercentage;
        if (series.owner && series.owner['addSeries']) {
            series.owner['addSeries'](series.ios);
        }
    };
    return DonutSeriesValueMapper;
}(PieSeriesValueMapper));
exports.DonutSeriesValueMapper = DonutSeriesValueMapper;
var CartesianSeriesValueMapper = (function (_super) {
    __extends(CartesianSeriesValueMapper, _super);
    function CartesianSeriesValueMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CartesianSeriesValueMapper.prototype.onHorizontalAxisChanged = function (oldValue, newValue, series) {
        //since label alignment requires info about horizontal or vertical the axis is, we set appropriate values here
        var labelLayoutMode = series.horizontalAxis.labelLayoutMode;
        if (labelLayoutMode) {
            if (labelLayoutMode.toLowerCase() === chart_public_enum_1.AxisLabelLayoutMode.Inner.toLowerCase()) {
                series.horizontalAxis.ios.style.labelStyle.textAlignment = 4 /* Top */;
            }
            else {
                series.horizontalAxis.ios.style.labelStyle.textAlignment = 8 /* Bottom */;
            }
        }
        var chart = series.owner;
        if (chart) {
            this.bindSeriesAxes(series);
        }
    };
    CartesianSeriesValueMapper.prototype.onVerticalAxisChanged = function (oldValue, newValue, series) {
        var labelLayoutMode = series.verticalAxis.labelLayoutMode;
        if (labelLayoutMode) {
            if (labelLayoutMode.toLowerCase() === chart_public_enum_1.AxisLabelLayoutMode.Inner.toLowerCase()) {
                series.verticalAxis.ios.style.labelStyle.textAlignment = 2 /* Right */;
            }
            else {
                series.verticalAxis.ios.style.labelStyle.textAlignment = 1 /* Left */;
            }
        }
        var chart = series.owner;
        if (chart) {
            this.bindSeriesAxes(series);
        }
    };
    CartesianSeriesValueMapper.prototype.bindSeriesAxes = function (series) {
        if (!series.ios) {
            return;
        }
        if (series.horizontalAxis) {
            series.ios.xAxis = series.horizontalAxis.ios;
        }
        if (series.verticalAxis) {
            series.ios.yAxis = series.verticalAxis.ios;
        }
    };
    return CartesianSeriesValueMapper;
}(ChartSeriesValueMapper));
exports.CartesianSeriesValueMapper = CartesianSeriesValueMapper;
var CategoricalSeriesValueMapper = (function (_super) {
    __extends(CategoricalSeriesValueMapper, _super);
    function CategoricalSeriesValueMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoricalSeriesValueMapper.prototype.onCategoryPropertyChanged = function (oldValue, newValue, series) {
        if (series.horizontalAxis && series.verticalAxis && series.ios) {
            series.ios.setHorizontalAxis(series.horizontalAxis.ios);
            series.ios.setVerticalAxis(series.verticalAxis.ios);
        }
        if (series.items && series.valueProperty) {
            this.bind(series);
        }
    };
    CategoricalSeriesValueMapper.prototype.onValuePropertyChanged = function (oldValue, newValue, series) {
        if (series.items && series.categoryProperty) {
            this.bind(series);
        }
    };
    CategoricalSeriesValueMapper.prototype.onItemsChanged = function (oldValue, newValue, series) {
        if (series.valueProperty && series.categoryProperty) {
            this.bind(series);
        }
    };
    CategoricalSeriesValueMapper.prototype.onShowLabelsChanged = function (oldValue, newValue, series) {
        if (!series.ios) {
            if (series.items && series.valueProperty && series.categoryProperty) {
                this.bind(series);
            }
        }
        else {
            this.applyLabelStyle(series);
        }
    };
    CategoricalSeriesValueMapper.prototype.onStackModePropertyChanged = function (oldValue, newValue, series) {
        if (!series.ios) {
            if (series.items && series.valueProperty && series.categoryProperty && series.stackMode) {
                this.bind(series);
            }
        }
        else {
            this.setStackInfo(series);
        }
    };
    CategoricalSeriesValueMapper.prototype.onLabelStyleChanged = function (oldValue, newValue, series) {
        if (series.ios && newValue) {
            this.applyLabelStyle(series);
        }
    };
    CategoricalSeriesValueMapper.prototype.updateNative = function (series) {
        if (series.items && series.categoryProperty && series.valueProperty) {
            this.bind(series);
        }
    };
    CategoricalSeriesValueMapper.prototype.bind = function (series) {
        console.log("WARNING: You should override this bind in class specific initializer");
    };
    // This method must be called by every bind override at an appropriate place where the series should be given a combine mode
    CategoricalSeriesValueMapper.prototype.setStackInfo = function (series) {
        if (!series.stackMode) {
            return;
        }
        switch (series.stackMode.toLowerCase()) {
            case chart_series_common_1.SeriesStackMode.Stack.toLowerCase():
                series.ios.stackInfo = TKChartStackInfo.alloc().initWithIDWithStackMode(1, 0 /* Stack */);
                break;
            case chart_series_common_1.SeriesStackMode.Stack100.toLowerCase():
                series.ios.stackInfo = TKChartStackInfo.alloc().initWithIDWithStackMode(1, 1 /* Stack100 */);
                break;
            case chart_series_common_1.SeriesStackMode.None.toLowerCase():
                series.ios.stackInfo = null;
                break;
        }
        if (series.owner && series.owner.ios) {
            series.owner.ios.reloadData();
        }
    };
    /**
    *  Cleans the axes from previous data categories if any.
    *  This method should be called if series items collection is changed.
    */
    CategoricalSeriesValueMapper.prototype.cleanCategoryAxes = function (series) {
        if (series.ios && series.ios.items) {
            series.ios.items.removeAllObjects();
            if (series.horizontalAxis &&
                (series.horizontalAxis instanceof chart_axis_common_1.CategoricalAxis)) {
                series.horizontalAxis.ios.removeAllCategories();
            }
            else if (series.owner.horizontalAxis &&
                (series.owner.horizontalAxis instanceof chart_axis_common_1.CategoricalAxis)) {
                series.owner.horizontalAxis.ios.removeAllCategories();
            }
            if (series.verticalAxis &&
                (series.verticalAxis instanceof chart_axis_common_1.CategoricalAxis)) {
                series.verticalAxis.ios.removeAllCategories();
            }
            else if (series.owner.verticalAxis &&
                (series.owner.verticalAxis instanceof chart_axis_common_1.CategoricalAxis)) {
                series.owner.verticalAxis.ios.removeAllCategories();
            }
        }
    };
    return CategoricalSeriesValueMapper;
}(CartesianSeriesValueMapper));
exports.CategoricalSeriesValueMapper = CategoricalSeriesValueMapper;
var BarSeriesValueMapper = (function (_super) {
    __extends(BarSeriesValueMapper, _super);
    function BarSeriesValueMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarSeriesValueMapper.prototype.onMinBarSizeChanged = function (oldValue, newValue, series) {
        if (series.ios) {
            if (!isNaN(newValue)) {
                series.ios.minBarHeight = utils.layout.toDevicePixels(newValue);
                series.ios.minColumnWidth = utils.layout.toDevicePixels(newValue);
            }
            else {
                series.ios.maxBarHeight = 0;
                series.ios.maxColumnWidth = 0;
            }
        }
    };
    BarSeriesValueMapper.prototype.onMaxBarSizeChanged = function (oldValue, newValue, series) {
        if (series.ios) {
            if (!isNaN(newValue)) {
                series.ios.maxBarHeight = utils.layout.toDevicePixels(newValue);
                series.ios.maxColumnWidth = utils.layout.toDevicePixels(newValue);
            }
            else {
                series.ios.maxBarHeight = 0;
                series.ios.maxColumnWidth = 0;
            }
        }
    };
    BarSeriesValueMapper.prototype.bind = function (series) {
        var useColumnSeries;
        if (series.horizontalAxis instanceof chart_axis_common_1.CategoricalAxis ||
            (series.owner && series.owner.horizontalAxis instanceof chart_axis_common_1.CategoricalAxis)) {
            useColumnSeries = true;
        }
        this.cleanCategoryAxes(series);
        var nativeSource = NSMutableArray.new();
        if (series && series.items) {
            var length_1 = series.items.length;
            for (var i = 0; i < length_1; i++) {
                var item = series.getItemAtIndex(i);
                var value = item[series.valueProperty];
                var category = item[series.categoryProperty];
                nativeSource.addObject(useColumnSeries ?
                    TKChartDataPoint.alloc().initWithXY(category, value) :
                    TKChartDataPoint.alloc().initWithXY(value, category));
            }
        }
        series.ios = useColumnSeries ?
            TKChartColumnSeries.alloc().initWithItems(nativeSource) :
            TKChartBarSeries.alloc().initWithItems(nativeSource);
        if (!isNaN(series.minBarSize)) {
            series.ios.minColumnWidth = utils.layout.toDevicePixels(series.minBarSize);
            series.ios.minBarHeight = utils.layout.toDevicePixels(series.minBarSize);
        }
        else {
            series.ios.minColumnWidth = 0;
            series.ios.minBarHeight = 0;
        }
        if (!isNaN(series.maxBarSize)) {
            series.ios.maxColumnWidth = utils.layout.toDevicePixels(series.maxBarSize);
            series.ios.maxBarHeight = utils.layout.toDevicePixels(series.maxBarSize);
        }
        else {
            series.ios.maxColumnWidth = 0;
            series.ios.maxBarHeight = 0;
        }
        this.applyLabelStyle(series);
        this.applySelectionMode(series);
        series.ios.title = series.legendTitle;
        this.setStackInfo(series);
        this.bindSeriesAxes(series);
        if (series.owner) {
            series.owner['addSeries'](series);
        }
    };
    return BarSeriesValueMapper;
}(CategoricalSeriesValueMapper));
exports.BarSeriesValueMapper = BarSeriesValueMapper;
var RangeBarSeriesValueMapper = (function (_super) {
    __extends(RangeBarSeriesValueMapper, _super);
    function RangeBarSeriesValueMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeBarSeriesValueMapper.prototype.onHighPropertyNameChanged = function (oldValue, newValue, series) {
        this.bind(series);
    };
    RangeBarSeriesValueMapper.prototype.onLowPropertyNameChanged = function (oldValue, newValue, series) {
        this.bind(series);
    };
    RangeBarSeriesValueMapper.prototype.onItemsChanged = function (oldValue, newValue, series) {
        if (series.categoryProperty) {
            this.bind(series);
        }
    };
    RangeBarSeriesValueMapper.prototype.bind = function (series) {
        if (!(series.items && series.highPropertyName && series.lowPropertyName)) {
            return;
        }
        var useColumnSeries = false;
        if (series.horizontalAxis instanceof chart_axis_common_1.CategoricalAxis ||
            (series.owner && series.owner.horizontalAxis instanceof chart_axis_common_1.CategoricalAxis)) {
            useColumnSeries = true;
        }
        var length = series.items.length;
        var nativeSource = NSMutableArray.new();
        var item = null;
        for (var i = 0; i < length; i++) {
            item = series.getItemAtIndex(i);
            nativeSource.addObject(useColumnSeries ?
                TKChartRangeDataPoint.alloc().initWithXLowHigh(item[series.categoryProperty], item[series.lowPropertyName], item[series.highPropertyName]) :
                TKChartRangeDataPoint.alloc().initWithYLowHigh(item[series.categoryProperty], item[series.lowPropertyName], item[series.highPropertyName]));
        }
        this.cleanCategoryAxes(series);
        series.ios = useColumnSeries ?
            TKChartRangeColumnSeries.alloc().initWithItems(nativeSource) :
            TKChartRangeBarSeries.alloc().initWithItems(nativeSource);
        this.applyLabelStyle(series);
        this.applySelectionMode(series);
        series.ios.title = series.legendTitle;
        this.setStackInfo(series);
        this.bindSeriesAxes(series);
        if (series.owner) {
            series.owner['addSeries'](series);
        }
    };
    return RangeBarSeriesValueMapper;
}(CategoricalSeriesValueMapper));
exports.RangeBarSeriesValueMapper = RangeBarSeriesValueMapper;
var LineSeriesValueMapper = (function (_super) {
    __extends(LineSeriesValueMapper, _super);
    function LineSeriesValueMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineSeriesValueMapper.prototype.getDataPointsForSeries = function (series) {
        var isCatAxisVertical = false;
        if (series.verticalAxis instanceof chart_axis_common_1.CategoricalAxis ||
            (series.owner && series.owner.verticalAxis instanceof chart_axis_common_1.CategoricalAxis)) {
            isCatAxisVertical = true;
        }
        var nativeSource = NSMutableArray.new();
        var length = series.items.length;
        var item = null;
        for (var i = 0; i < length; i++) {
            item = series.getItemAtIndex(i);
            nativeSource.addObject(TKChartDataPoint.alloc().initWithXY((isCatAxisVertical) ? item[series.valueProperty] : item[series.categoryProperty], (isCatAxisVertical) ? item[series.categoryProperty] : item[series.valueProperty]));
        }
        return nativeSource;
    };
    LineSeriesValueMapper.prototype.bind = function (series) {
        this.cleanCategoryAxes(series);
        series.ios = TKChartLineSeries.alloc().initWithItems(this.getDataPointsForSeries(series));
        this.applyLabelStyle(series);
        this.applySelectionMode(series);
        series.ios.title = series.legendTitle;
        this.setStackInfo(series);
        this.bindSeriesAxes(series);
        if (series.owner) {
            series.owner['addSeries'](series);
        }
    };
    return LineSeriesValueMapper;
}(CategoricalSeriesValueMapper));
exports.LineSeriesValueMapper = LineSeriesValueMapper;
var SplineSeriesValueMapper = (function (_super) {
    __extends(SplineSeriesValueMapper, _super);
    function SplineSeriesValueMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplineSeriesValueMapper.prototype.bind = function (series) {
        this.cleanCategoryAxes(series);
        series.ios = TKChartSplineSeries.alloc().initWithItems(this.getDataPointsForSeries(series));
        this.applyLabelStyle(series);
        this.applySelectionMode(series);
        series.ios.title = series.legendTitle;
        this.setStackInfo(series);
        this.bindSeriesAxes(series);
        if (series.owner) {
            series.owner['addSeries'](series);
        }
    };
    return SplineSeriesValueMapper;
}(LineSeriesValueMapper));
exports.SplineSeriesValueMapper = SplineSeriesValueMapper;
var AreaSeriesValueMapper = (function (_super) {
    __extends(AreaSeriesValueMapper, _super);
    function AreaSeriesValueMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AreaSeriesValueMapper.prototype.bind = function (series) {
        this.cleanCategoryAxes(series);
        series.ios = TKChartAreaSeries.alloc().initWithItems(this.getDataPointsForSeries(series));
        this.applyLabelStyle(series);
        this.applySelectionMode(series);
        series.ios.title = series.legendTitle;
        this.setStackInfo(series);
        this.bindSeriesAxes(series);
        if (series.owner) {
            series.owner['addSeries'](series);
        }
    };
    return AreaSeriesValueMapper;
}(LineSeriesValueMapper));
exports.AreaSeriesValueMapper = AreaSeriesValueMapper;
var SplineAreaSeriesValueMapper = (function (_super) {
    __extends(SplineAreaSeriesValueMapper, _super);
    function SplineAreaSeriesValueMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplineAreaSeriesValueMapper.prototype.bind = function (series) {
        this.cleanCategoryAxes(series);
        series.ios = TKChartSplineAreaSeries.alloc().initWithItems(this.getDataPointsForSeries(series));
        this.applyLabelStyle(series);
        this.applySelectionMode(series);
        series.ios.title = series.legendTitle;
        this.setStackInfo(series);
        this.bindSeriesAxes(series);
        if (series.owner) {
            series.owner['addSeries'](series);
        }
    };
    return SplineAreaSeriesValueMapper;
}(LineSeriesValueMapper));
exports.SplineAreaSeriesValueMapper = SplineAreaSeriesValueMapper;
var BubbleSeriesValueMapper = (function (_super) {
    __extends(BubbleSeriesValueMapper, _super);
    function BubbleSeriesValueMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BubbleSeriesValueMapper.prototype.onBubbleSizePropertyChanged = function (oldValue, newValue, series) {
        //todo: this property update should recreate the data point, that's why we will remove the current native instance and must create a new one
        if (series.items) {
            this.bind(series);
        }
    };
    BubbleSeriesValueMapper.prototype.onBubbleScalePropertyChanged = function (oldValue, newValue, series) {
        if (!series.ios) {
            if (series.items) {
                this.bind(series);
            }
        }
        else {
            if (!isNaN(+newValue))
                series.ios.scale = newValue;
        }
    };
    BubbleSeriesValueMapper.prototype.bind = function (series) {
        var nativeSource = NSMutableArray.new();
        var length = series.items.length;
        var item = null;
        for (var i = 0; i < length; i++) {
            item = series.getItemAtIndex(i);
            nativeSource.addObject(TKChartBubbleDataPoint.alloc().initWithXYArea(item[series.categoryProperty], item[series.valueProperty], item[series.bubbleSizeProperty]));
        }
        this.cleanCategoryAxes(series);
        series.ios = TKChartBubbleSeries.alloc().initWithItems(nativeSource);
        series.ios.scale = series.bubbleScale;
        this.applyLabelStyle(series);
        this.applySelectionMode(series);
        series.ios.title = series.legendTitle;
        this.bindSeriesAxes(series);
        if (series.owner) {
            series.owner['addSeries'](series);
        }
    };
    return BubbleSeriesValueMapper;
}(CategoricalSeriesValueMapper));
exports.BubbleSeriesValueMapper = BubbleSeriesValueMapper;
var OhlcSeriesValueMapper = (function (_super) {
    __extends(OhlcSeriesValueMapper, _super);
    function OhlcSeriesValueMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OhlcSeriesValueMapper.prototype.onHighPropertyNameChanged = function (oldValue, newValue, series) {
        this.bind(series);
    };
    OhlcSeriesValueMapper.prototype.onLowPropertyNameChanged = function (oldValue, newValue, series) {
        this.bind(series);
    };
    OhlcSeriesValueMapper.prototype.onOpenPropertyNameChanged = function (oldValue, newValue, series) {
        this.bind(series);
    };
    OhlcSeriesValueMapper.prototype.onClosePropertyNameChanged = function (oldValue, newValue, series) {
        this.bind(series);
    };
    OhlcSeriesValueMapper.prototype.onCategoryPropertyChanged = function (oldValue, newValue, series) {
        _super.prototype.onCategoryPropertyChanged.call(this, oldValue, newValue, series);
        this.bind(series);
    };
    OhlcSeriesValueMapper.prototype.onValuePropertyChanged = function (oldValue, newValue, series) {
        console.log("WARNING: OHLC series doesn't use valueProperty property.");
    };
    OhlcSeriesValueMapper.prototype.onItemsChanged = function (oldValue, newValue, series) {
        if (series.categoryProperty) {
            this.bind(series);
        }
    };
    // public onShowLabelsChanged(data: PropertyChangeData, series: chartCommonModule.OhlcSeries) {
    //     if (series.items && series.categoryProperty) {
    //         this.bind(series);
    //     }
    // }
    OhlcSeriesValueMapper.prototype.bind = function (series) {
        if (!(series.items && series.openPropertyName && series.highPropertyName && series.lowPropertyName && series.closePropertyName && series.categoryProperty)) {
            return;
        }
        var nativeSource = NSMutableArray.new();
        var currentItem = null;
        for (var i = 0; i < series.items.length; i++) {
            currentItem = series.getItemAtIndex(i);
            var categoryValue = currentItem[series.categoryProperty];
            var date = getDateObject(categoryValue);
            nativeSource.addObject(TKChartFinancialDataPoint.dataPointWithXOpenHighLowClose(date, currentItem[series.openPropertyName], currentItem[series.highPropertyName], currentItem[series.lowPropertyName], currentItem[series.closePropertyName]));
        }
        this.cleanCategoryAxes(series);
        series.ios = TKChartOhlcSeries.alloc().initWithItems(nativeSource);
        this.applyLabelStyle(series);
        this.applySelectionMode(series);
        series.ios.title = series.legendTitle;
        this.bindSeriesAxes(series);
        if (series.owner) {
            series.owner['addSeries'](series);
        }
    };
    return OhlcSeriesValueMapper;
}(CategoricalSeriesValueMapper));
exports.OhlcSeriesValueMapper = OhlcSeriesValueMapper;
var CandlestickSeriesValueMapper = (function (_super) {
    __extends(CandlestickSeriesValueMapper, _super);
    function CandlestickSeriesValueMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CandlestickSeriesValueMapper.prototype.bind = function (series) {
        if (!(series.items && series.categoryProperty && series.openPropertyName && series.highPropertyName && series.lowPropertyName && series.closePropertyName)) {
            return;
        }
        var nativeSource = NSMutableArray.new();
        var item = null;
        for (var i = 0; i < series.items.length; i++) {
            item = series.getItemAtIndex(i);
            var categoryValue = item[series.categoryProperty];
            var date = getDateObject(categoryValue);
            nativeSource.addObject(TKChartFinancialDataPoint.dataPointWithXOpenHighLowClose(date, item[series.openPropertyName], item[series.highPropertyName], item[series.lowPropertyName], item[series.closePropertyName]));
        }
        this.cleanCategoryAxes(series);
        series.ios = TKChartCandlestickSeries.alloc().initWithItems(nativeSource);
        this.applyLabelStyle(series);
        series.ios.title = series.legendTitle;
        this.bindSeriesAxes(series);
        if (series.owner) {
            series.owner['addSeries'](series);
        }
    };
    return CandlestickSeriesValueMapper;
}(OhlcSeriesValueMapper));
exports.CandlestickSeriesValueMapper = CandlestickSeriesValueMapper;
var ScatterSeriesValueMapper = (function (_super) {
    __extends(ScatterSeriesValueMapper, _super);
    function ScatterSeriesValueMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScatterSeriesValueMapper.prototype.onXPropertyChanged = function (oldValue, newValue, series) {
        this.bind(series);
    };
    ScatterSeriesValueMapper.prototype.onYPropertyChanged = function (oldValue, newValue, series) {
        this.bind(series);
    };
    ScatterSeriesValueMapper.prototype.onItemsChanged = function (oldValue, newValue, series) {
        this.bind(series);
    };
    ScatterSeriesValueMapper.prototype.bind = function (series) {
        if (!(series.items && series.xProperty && series.yProperty)) {
            return;
        }
        var nativeSource = NSMutableArray.new();
        var length = series.items.length;
        var item = null;
        for (var i = 0; i < length; i++) {
            item = series.getItemAtIndex(i);
            //NOTE: scatter series are intended for numeric data on X & Y
            nativeSource.addObject(TKChartDataPoint.alloc().initWithXY(item[series.xProperty], item[series.yProperty]));
        }
        series.ios = TKChartScatterSeries.alloc().initWithItems(nativeSource);
        this.applyLabelStyle(series);
        this.applySelectionMode(series);
        series.ios.title = series.legendTitle;
        this.bindSeriesAxes(series);
        if (series.owner) {
            series.owner['addSeries'](series);
        }
    };
    return ScatterSeriesValueMapper;
}(CartesianSeriesValueMapper));
exports.ScatterSeriesValueMapper = ScatterSeriesValueMapper;
var ScatterBubbleSeriesValueMapper = (function (_super) {
    __extends(ScatterBubbleSeriesValueMapper, _super);
    function ScatterBubbleSeriesValueMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScatterBubbleSeriesValueMapper.prototype.onBubbleSizePropertyChanged = function (oldValue, newValue, series) {
        if (series.items) {
            this.bind(series);
        }
    };
    ScatterBubbleSeriesValueMapper.prototype.onBubbleScaleChanged = function (oldValue, newValue, series) {
        if (series.ios) {
            if (!isNaN(+newValue))
                series.ios.scale = newValue;
        }
        else {
            if (series.items) {
                this.bind(series);
            }
        }
    };
    ScatterBubbleSeriesValueMapper.prototype.bind = function (series) {
        if (!series.items) {
            return;
        }
        var nativeSource = NSMutableArray.new();
        var length = series.items.length;
        var item = null;
        for (var i = 0; i < length; i++) {
            item = series.getItemAtIndex(i);
            nativeSource.addObject(TKChartBubbleDataPoint.alloc().initWithXYArea(item[series.xProperty], item[series.yProperty], item[series.bubbleSizeProperty]));
        }
        series.ios = TKChartBubbleSeries.alloc().initWithItems(nativeSource);
        series.ios.scale = series.bubbleScale;
        this.applyLabelStyle(series);
        this.applySelectionMode(series);
        series.ios.title = series.legendTitle;
        this.bindSeriesAxes(series);
        if (series.owner) {
            series.owner['addSeries'](series);
        }
    };
    return ScatterBubbleSeriesValueMapper;
}(ScatterSeriesValueMapper));
exports.ScatterBubbleSeriesValueMapper = ScatterBubbleSeriesValueMapper;
function getDateObject(categoryValue) {
    var dateFormatter = NSDateFormatter.alloc().init();
    dateFormatter.dateFormat = "dd/MM/yyyy"; //todo: this date format have to be added as property
    if (typeof categoryValue === "string") {
        return dateFormatter.dateFromString(categoryValue);
    }
    else {
        if (categoryValue instanceof Date) {
            return categoryValue;
        }
    }
    console.log("Error: Not supported value set to 'categoryProperty'");
    return undefined;
}
