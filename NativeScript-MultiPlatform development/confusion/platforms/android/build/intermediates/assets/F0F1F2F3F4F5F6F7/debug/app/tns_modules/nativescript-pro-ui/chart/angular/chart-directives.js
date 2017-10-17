Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var elementRegistryModule = require("nativescript-angular/element-registry");
var chartModule = require("./../");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var SeriesComponentBase = (function () {
    function SeriesComponentBase() {
    }
    Object.defineProperty(SeriesComponentBase.prototype, "nativeSeries", {
        get: function () {
            return this._nativeSeries;
        },
        enumerable: true,
        configurable: true
    });
    return SeriesComponentBase;
}());
exports.SeriesComponentBase = SeriesComponentBase;
var RadCartesianChartComponent = (function () {
    function RadCartesianChartComponent(_elementRef) {
        this._elementRef = _elementRef;
        this._nativeChart = _elementRef.nativeElement;
    }
    Object.defineProperty(RadCartesianChartComponent.prototype, "nativeElement", {
        get: function () {
            return this._nativeChart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadCartesianChartComponent.prototype, "cartesianChart", {
        get: function () {
            return this._nativeChart;
        },
        enumerable: true,
        configurable: true
    });
    RadCartesianChartComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "RadCartesianChart",
                    template: "",
                },] },
    ];
    /** @nocollapse */
    RadCartesianChartComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return RadCartesianChartComponent;
}());
exports.RadCartesianChartComponent = RadCartesianChartComponent;
var RadPieChartComponent = (function () {
    function RadPieChartComponent(_elementRef) {
        this._elementRef = _elementRef;
        this._nativeChart = _elementRef.nativeElement;
    }
    Object.defineProperty(RadPieChartComponent.prototype, "nativeElement", {
        get: function () {
            return this._nativeChart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadPieChartComponent.prototype, "pieChart", {
        get: function () {
            return this._nativeChart;
        },
        enumerable: true,
        configurable: true
    });
    RadPieChartComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "RadPieChart",
                    template: "",
                },] },
    ];
    /** @nocollapse */
    RadPieChartComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return RadPieChartComponent;
}());
exports.RadPieChartComponent = RadPieChartComponent;
var RadLegendViewDirective = (function () {
    function RadLegendViewDirective() {
    }
    RadLegendViewDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "RadLegendView"
                },] },
    ];
    /** @nocollapse */
    RadLegendViewDirective.ctorParameters = function () { return []; };
    return RadLegendViewDirective;
}());
exports.RadLegendViewDirective = RadLegendViewDirective;
var CategoricalAxisDirective = (function () {
    function CategoricalAxisDirective() {
    }
    CategoricalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "CategoricalAxis"
                },] },
    ];
    /** @nocollapse */
    CategoricalAxisDirective.ctorParameters = function () { return []; };
    return CategoricalAxisDirective;
}());
exports.CategoricalAxisDirective = CategoricalAxisDirective;
var LinearAxisDirective = (function () {
    function LinearAxisDirective() {
    }
    LinearAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "LinearAxis"
                },] },
    ];
    /** @nocollapse */
    LinearAxisDirective.ctorParameters = function () { return []; };
    return LinearAxisDirective;
}());
exports.LinearAxisDirective = LinearAxisDirective;
var DateTimeCategoricalAxisDirective = (function () {
    function DateTimeCategoricalAxisDirective() {
    }
    DateTimeCategoricalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "DateTimeCategoricalAxis"
                },] },
    ];
    /** @nocollapse */
    DateTimeCategoricalAxisDirective.ctorParameters = function () { return []; };
    return DateTimeCategoricalAxisDirective;
}());
exports.DateTimeCategoricalAxisDirective = DateTimeCategoricalAxisDirective;
var DateTimeContinuousAxisDirective = (function () {
    function DateTimeContinuousAxisDirective() {
    }
    DateTimeContinuousAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "DateTimeContinuousAxis"
                },] },
    ];
    /** @nocollapse */
    DateTimeContinuousAxisDirective.ctorParameters = function () { return []; };
    return DateTimeContinuousAxisDirective;
}());
exports.DateTimeContinuousAxisDirective = DateTimeContinuousAxisDirective;
var LogarithmicAxisDirective = (function () {
    function LogarithmicAxisDirective() {
    }
    LogarithmicAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "LogarithmicAxis"
                },] },
    ];
    /** @nocollapse */
    LogarithmicAxisDirective.ctorParameters = function () { return []; };
    return LogarithmicAxisDirective;
}());
exports.LogarithmicAxisDirective = LogarithmicAxisDirective;
var LineSeriesDirective = (function (_super) {
    __extends(LineSeriesDirective, _super);
    function LineSeriesDirective(_elementRef) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._nativeSeries = _this._elementRef.nativeElement;
        return _this;
    }
    LineSeriesDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "LineSeries"
                },] },
    ];
    /** @nocollapse */
    LineSeriesDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return LineSeriesDirective;
}(SeriesComponentBase));
exports.LineSeriesDirective = LineSeriesDirective;
var AreaSeriesDirective = (function (_super) {
    __extends(AreaSeriesDirective, _super);
    function AreaSeriesDirective(_elementRef) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._nativeSeries = _this._elementRef.nativeElement;
        return _this;
    }
    AreaSeriesDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "AreaSeries"
                },] },
    ];
    /** @nocollapse */
    AreaSeriesDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return AreaSeriesDirective;
}(SeriesComponentBase));
exports.AreaSeriesDirective = AreaSeriesDirective;
var SplineSeriesDirective = (function (_super) {
    __extends(SplineSeriesDirective, _super);
    function SplineSeriesDirective(_elementRef) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._nativeSeries = _this._elementRef.nativeElement;
        return _this;
    }
    SplineSeriesDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "SplineSeries"
                },] },
    ];
    /** @nocollapse */
    SplineSeriesDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return SplineSeriesDirective;
}(SeriesComponentBase));
exports.SplineSeriesDirective = SplineSeriesDirective;
var SplineAreaSeriesDirective = (function (_super) {
    __extends(SplineAreaSeriesDirective, _super);
    function SplineAreaSeriesDirective(_elementRef) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._nativeSeries = _this._elementRef.nativeElement;
        return _this;
    }
    SplineAreaSeriesDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "SplineAreaSeries"
                },] },
    ];
    /** @nocollapse */
    SplineAreaSeriesDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return SplineAreaSeriesDirective;
}(SeriesComponentBase));
exports.SplineAreaSeriesDirective = SplineAreaSeriesDirective;
var BarSeriesDirective = (function (_super) {
    __extends(BarSeriesDirective, _super);
    function BarSeriesDirective(_elementRef) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._nativeSeries = _this._elementRef.nativeElement;
        return _this;
    }
    BarSeriesDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "BarSeries"
                },] },
    ];
    /** @nocollapse */
    BarSeriesDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return BarSeriesDirective;
}(SeriesComponentBase));
exports.BarSeriesDirective = BarSeriesDirective;
var RangeBarSeriesDirective = (function (_super) {
    __extends(RangeBarSeriesDirective, _super);
    function RangeBarSeriesDirective(_elementRef) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._nativeSeries = _this._elementRef.nativeElement;
        return _this;
    }
    RangeBarSeriesDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "RangeBarSeries"
                },] },
    ];
    /** @nocollapse */
    RangeBarSeriesDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return RangeBarSeriesDirective;
}(SeriesComponentBase));
exports.RangeBarSeriesDirective = RangeBarSeriesDirective;
var BubbleSeriesDirective = (function (_super) {
    __extends(BubbleSeriesDirective, _super);
    function BubbleSeriesDirective(_elementRef) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._nativeSeries = _this._elementRef.nativeElement;
        return _this;
    }
    BubbleSeriesDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "BubbleSeries"
                },] },
    ];
    /** @nocollapse */
    BubbleSeriesDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return BubbleSeriesDirective;
}(SeriesComponentBase));
exports.BubbleSeriesDirective = BubbleSeriesDirective;
var ScatterBubbleSeriesDirective = (function (_super) {
    __extends(ScatterBubbleSeriesDirective, _super);
    function ScatterBubbleSeriesDirective(_elementRef) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._nativeSeries = _this._elementRef.nativeElement;
        return _this;
    }
    ScatterBubbleSeriesDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "ScatterBubbleSeries"
                },] },
    ];
    /** @nocollapse */
    ScatterBubbleSeriesDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return ScatterBubbleSeriesDirective;
}(SeriesComponentBase));
exports.ScatterBubbleSeriesDirective = ScatterBubbleSeriesDirective;
var ScatterSeriesDirective = (function (_super) {
    __extends(ScatterSeriesDirective, _super);
    function ScatterSeriesDirective(_elementRef) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._nativeSeries = _this._elementRef.nativeElement;
        return _this;
    }
    ScatterSeriesDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "ScatterSeries"
                },] },
    ];
    /** @nocollapse */
    ScatterSeriesDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return ScatterSeriesDirective;
}(SeriesComponentBase));
exports.ScatterSeriesDirective = ScatterSeriesDirective;
var PaletteDirective = (function (_super) {
    __extends(PaletteDirective, _super);
    function PaletteDirective(_elementRef) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._nativeSeries = _this._elementRef.nativeElement;
        return _this;
    }
    PaletteDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "Palette"
                },] },
    ];
    /** @nocollapse */
    PaletteDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return PaletteDirective;
}(SeriesComponentBase));
exports.PaletteDirective = PaletteDirective;
var PieSeriesDirective = (function (_super) {
    __extends(PieSeriesDirective, _super);
    function PieSeriesDirective(_elementRef) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._nativeSeries = _this._elementRef.nativeElement;
        return _this;
    }
    PieSeriesDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "PieSeries"
                },] },
    ];
    /** @nocollapse */
    PieSeriesDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return PieSeriesDirective;
}(SeriesComponentBase));
exports.PieSeriesDirective = PieSeriesDirective;
var DonutSeriesDirective = (function (_super) {
    __extends(DonutSeriesDirective, _super);
    function DonutSeriesDirective(_elementRef) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._nativeSeries = _this._elementRef.nativeElement;
        return _this;
    }
    DonutSeriesDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "DonutSeries"
                },] },
    ];
    /** @nocollapse */
    DonutSeriesDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return DonutSeriesDirective;
}(SeriesComponentBase));
exports.DonutSeriesDirective = DonutSeriesDirective;
var CandlestickSeriesDirective = (function (_super) {
    __extends(CandlestickSeriesDirective, _super);
    function CandlestickSeriesDirective(_elementRef) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._nativeSeries = _this._elementRef.nativeElement;
        return _this;
    }
    CandlestickSeriesDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "CandlestickSeries"
                },] },
    ];
    /** @nocollapse */
    CandlestickSeriesDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return CandlestickSeriesDirective;
}(SeriesComponentBase));
exports.CandlestickSeriesDirective = CandlestickSeriesDirective;
var OhlcSeriesDirective = (function (_super) {
    __extends(OhlcSeriesDirective, _super);
    function OhlcSeriesDirective(_elementRef) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._nativeSeries = _this._elementRef.nativeElement;
        return _this;
    }
    OhlcSeriesDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "OhlcSeries"
                },] },
    ];
    /** @nocollapse */
    OhlcSeriesDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return OhlcSeriesDirective;
}(SeriesComponentBase));
exports.OhlcSeriesDirective = OhlcSeriesDirective;
var RadCartesianChartGridDirective = (function () {
    function RadCartesianChartGridDirective() {
    }
    RadCartesianChartGridDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "RadCartesianChartGrid"
                },] },
    ];
    /** @nocollapse */
    RadCartesianChartGridDirective.ctorParameters = function () { return []; };
    return RadCartesianChartGridDirective;
}());
exports.RadCartesianChartGridDirective = RadCartesianChartGridDirective;
var ChartGridLineAnnotationDirective = (function () {
    function ChartGridLineAnnotationDirective() {
    }
    ChartGridLineAnnotationDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "ChartGridLineAnnotation"
                },] },
    ];
    /** @nocollapse */
    ChartGridLineAnnotationDirective.ctorParameters = function () { return []; };
    return ChartGridLineAnnotationDirective;
}());
exports.ChartGridLineAnnotationDirective = ChartGridLineAnnotationDirective;
var ChartPlotBandAnnotationDirective = (function () {
    function ChartPlotBandAnnotationDirective() {
    }
    ChartPlotBandAnnotationDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "ChartPlotBandAnnotation"
                },] },
    ];
    /** @nocollapse */
    ChartPlotBandAnnotationDirective.ctorParameters = function () { return []; };
    return ChartPlotBandAnnotationDirective;
}());
exports.ChartPlotBandAnnotationDirective = ChartPlotBandAnnotationDirective;
var TrackballDirective = (function () {
    function TrackballDirective() {
    }
    TrackballDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "Trackball"
                },] },
    ];
    /** @nocollapse */
    TrackballDirective.ctorParameters = function () { return []; };
    return TrackballDirective;
}());
exports.TrackballDirective = TrackballDirective;
var PointLabelStyleDirective = (function () {
    function PointLabelStyleDirective() {
    }
    PointLabelStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "PointLabelStyle"
                },] },
    ];
    /** @nocollapse */
    PointLabelStyleDirective.ctorParameters = function () { return []; };
    return PointLabelStyleDirective;
}());
exports.PointLabelStyleDirective = PointLabelStyleDirective;
var TKPieLabelStyleDirective = (function () {
    function TKPieLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKPieLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKPieLabelStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkPieLabelStyle]"
                },] },
    ];
    /** @nocollapse */
    TKPieLabelStyleDirective.ctorParameters = function () { return [
        { type: PieSeriesDirective, decorators: [{ type: core_1.Inject, args: [PieSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKPieLabelStyleDirective;
}());
exports.TKPieLabelStyleDirective = TKPieLabelStyleDirective;
var TKDonutLabelStyleDirective = (function () {
    function TKDonutLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKDonutLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKDonutLabelStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkDonutLabelStyle]"
                },] },
    ];
    /** @nocollapse */
    TKDonutLabelStyleDirective.ctorParameters = function () { return [
        { type: DonutSeriesDirective, decorators: [{ type: core_1.Inject, args: [DonutSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKDonutLabelStyleDirective;
}());
exports.TKDonutLabelStyleDirective = TKDonutLabelStyleDirective;
var TKLineLabelStyleDirective = (function () {
    function TKLineLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKLineLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKLineLabelStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkLineLabelStyle]"
                },] },
    ];
    /** @nocollapse */
    TKLineLabelStyleDirective.ctorParameters = function () { return [
        { type: LineSeriesDirective, decorators: [{ type: core_1.Inject, args: [LineSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKLineLabelStyleDirective;
}());
exports.TKLineLabelStyleDirective = TKLineLabelStyleDirective;
var TKBarLabelStyleDirective = (function () {
    function TKBarLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKBarLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKBarLabelStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkBarLabelStyle]"
                },] },
    ];
    /** @nocollapse */
    TKBarLabelStyleDirective.ctorParameters = function () { return [
        { type: BarSeriesDirective, decorators: [{ type: core_1.Inject, args: [BarSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKBarLabelStyleDirective;
}());
exports.TKBarLabelStyleDirective = TKBarLabelStyleDirective;
var TKRangeBarLabelStyleDirective = (function () {
    function TKRangeBarLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKRangeBarLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKRangeBarLabelStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkRangeBarLabelStyle]"
                },] },
    ];
    /** @nocollapse */
    TKRangeBarLabelStyleDirective.ctorParameters = function () { return [
        { type: RangeBarSeriesDirective, decorators: [{ type: core_1.Inject, args: [RangeBarSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKRangeBarLabelStyleDirective;
}());
exports.TKRangeBarLabelStyleDirective = TKRangeBarLabelStyleDirective;
var TKAreaLabelStyleDirective = (function () {
    function TKAreaLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKAreaLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKAreaLabelStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkAreaLabelStyle]"
                },] },
    ];
    /** @nocollapse */
    TKAreaLabelStyleDirective.ctorParameters = function () { return [
        { type: AreaSeriesDirective, decorators: [{ type: core_1.Inject, args: [AreaSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKAreaLabelStyleDirective;
}());
exports.TKAreaLabelStyleDirective = TKAreaLabelStyleDirective;
var TKSplineLabelStyleDirective = (function () {
    function TKSplineLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKSplineLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKSplineLabelStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkSplineLabelStyle]",
                },] },
    ];
    /** @nocollapse */
    TKSplineLabelStyleDirective.ctorParameters = function () { return [
        { type: SplineSeriesDirective, decorators: [{ type: core_1.Inject, args: [SplineSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKSplineLabelStyleDirective;
}());
exports.TKSplineLabelStyleDirective = TKSplineLabelStyleDirective;
var TKSplineAreaLabelStyleDirective = (function () {
    function TKSplineAreaLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKSplineAreaLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKSplineAreaLabelStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkSplineAreaLabelStyle]",
                },] },
    ];
    /** @nocollapse */
    TKSplineAreaLabelStyleDirective.ctorParameters = function () { return [
        { type: SplineAreaSeriesDirective, decorators: [{ type: core_1.Inject, args: [SplineAreaSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKSplineAreaLabelStyleDirective;
}());
exports.TKSplineAreaLabelStyleDirective = TKSplineAreaLabelStyleDirective;
var TKBubbleLabelStyleDirective = (function () {
    function TKBubbleLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKBubbleLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKBubbleLabelStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkBubbleLabelStyle]"
                },] },
    ];
    /** @nocollapse */
    TKBubbleLabelStyleDirective.ctorParameters = function () { return [
        { type: BubbleSeriesDirective, decorators: [{ type: core_1.Inject, args: [BubbleSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKBubbleLabelStyleDirective;
}());
exports.TKBubbleLabelStyleDirective = TKBubbleLabelStyleDirective;
var TKScatterBubbleLabelStyleDirective = (function () {
    function TKScatterBubbleLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKScatterBubbleLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKScatterBubbleLabelStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkScatterBubbleLabelStyle]"
                },] },
    ];
    /** @nocollapse */
    TKScatterBubbleLabelStyleDirective.ctorParameters = function () { return [
        { type: ScatterBubbleSeriesDirective, decorators: [{ type: core_1.Inject, args: [ScatterBubbleSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKScatterBubbleLabelStyleDirective;
}());
exports.TKScatterBubbleLabelStyleDirective = TKScatterBubbleLabelStyleDirective;
var TKCandlestickLabelStyleDirective = (function () {
    function TKCandlestickLabelStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCandlestickLabelStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKCandlestickLabelStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkCandlestickLabelStyle]"
                },] },
    ];
    /** @nocollapse */
    TKCandlestickLabelStyleDirective.ctorParameters = function () { return [
        { type: CandlestickSeriesDirective, decorators: [{ type: core_1.Inject, args: [CandlestickSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKCandlestickLabelStyleDirective;
}());
exports.TKCandlestickLabelStyleDirective = TKCandlestickLabelStyleDirective;
var TKOhlcStyleDirective = (function () {
    function TKOhlcStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKOhlcStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKOhlcStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkOhlcLabelStyle]"
                },] },
    ];
    /** @nocollapse */
    TKOhlcStyleDirective.ctorParameters = function () { return [
        { type: OhlcSeriesDirective, decorators: [{ type: core_1.Inject, args: [OhlcSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKOhlcStyleDirective;
}());
exports.TKOhlcStyleDirective = TKOhlcStyleDirective;
var TKScatterStyleDirective = (function () {
    function TKScatterStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKScatterStyleDirective.prototype.ngOnInit = function () {
        var labelStyle = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.labelStyle = labelStyle;
    };
    TKScatterStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkScatterLabelStyle]"
                },] },
    ];
    /** @nocollapse */
    TKScatterStyleDirective.ctorParameters = function () { return [
        { type: ScatterSeriesDirective, decorators: [{ type: core_1.Inject, args: [ScatterSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKScatterStyleDirective;
}());
exports.TKScatterStyleDirective = TKScatterStyleDirective;
var TKCartesianGridDirective = (function () {
    function TKCartesianGridDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCartesianGridDirective.prototype.ngOnInit = function () {
        var grid = this._elementRef.nativeElement;
        var cartesianChart = this.owner.cartesianChart;
        cartesianChart.grid = grid;
    };
    TKCartesianGridDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkCartesianGrid]"
                },] },
    ];
    /** @nocollapse */
    TKCartesianGridDirective.ctorParameters = function () { return [
        { type: RadCartesianChartComponent, decorators: [{ type: core_1.Inject, args: [RadCartesianChartComponent,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKCartesianGridDirective;
}());
exports.TKCartesianGridDirective = TKCartesianGridDirective;
var TKCartesianSeriesDirective = (function () {
    function TKCartesianSeriesDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCartesianSeriesDirective.prototype.ngOnInit = function () {
        var series = this._elementRef.nativeElement;
        if (this.owner.cartesianChart.series) {
            this.owner.cartesianChart.series.push(series);
        }
        else {
            this.owner.cartesianChart.series = new observable_array_1.ObservableArray([series]);
        }
    };
    TKCartesianSeriesDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkCartesianSeries]"
                },] },
    ];
    /** @nocollapse */
    TKCartesianSeriesDirective.ctorParameters = function () { return [
        { type: RadCartesianChartComponent, decorators: [{ type: core_1.Inject, args: [RadCartesianChartComponent,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKCartesianSeriesDirective;
}());
exports.TKCartesianSeriesDirective = TKCartesianSeriesDirective;
var TKPieChartSeriesDirective = (function () {
    function TKPieChartSeriesDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKPieChartSeriesDirective.prototype.ngOnInit = function () {
        var series = this._elementRef.nativeElement;
        if (this.owner.pieChart.series) {
            this.owner.pieChart.series.push(series);
        }
        else {
            this.owner.pieChart.series = new observable_array_1.ObservableArray([series]);
        }
    };
    TKPieChartSeriesDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkPieSeries]"
                },] },
    ];
    /** @nocollapse */
    TKPieChartSeriesDirective.ctorParameters = function () { return [
        { type: RadPieChartComponent, decorators: [{ type: core_1.Inject, args: [RadPieChartComponent,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKPieChartSeriesDirective;
}());
exports.TKPieChartSeriesDirective = TKPieChartSeriesDirective;
var TKCartesianPaletteDirective = (function () {
    function TKCartesianPaletteDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCartesianPaletteDirective.prototype.ngOnInit = function () {
        this._nativePalette = this._elementRef.nativeElement;
        if (this.owner.cartesianChart.palettes) {
            this.owner.cartesianChart.palettes.push(this._nativePalette);
        }
        else {
            this.owner.cartesianChart.palettes = new observable_array_1.ObservableArray([this._nativePalette]);
        }
    };
    Object.defineProperty(TKCartesianPaletteDirective.prototype, "nativePalette", {
        get: function () {
            return this._nativePalette;
        },
        enumerable: true,
        configurable: true
    });
    TKCartesianPaletteDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkCartesianPalette]"
                },] },
    ];
    /** @nocollapse */
    TKCartesianPaletteDirective.ctorParameters = function () { return [
        { type: RadCartesianChartComponent, decorators: [{ type: core_1.Inject, args: [RadCartesianChartComponent,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKCartesianPaletteDirective;
}());
exports.TKCartesianPaletteDirective = TKCartesianPaletteDirective;
var TKPiePaletteDirective = (function () {
    function TKPiePaletteDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKPiePaletteDirective.prototype.ngOnInit = function () {
        this._nativePalette = this._elementRef.nativeElement;
        if (this.owner.pieChart.palettes) {
            this.owner.pieChart.palettes.push(this._nativePalette);
        }
        else {
            this.owner.pieChart.palettes = new observable_array_1.ObservableArray([this._nativePalette]);
        }
    };
    Object.defineProperty(TKPiePaletteDirective.prototype, "nativePalette", {
        get: function () {
            return this._nativePalette;
        },
        enumerable: true,
        configurable: true
    });
    TKPiePaletteDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkPiePalette]"
                },] },
    ];
    /** @nocollapse */
    TKPiePaletteDirective.ctorParameters = function () { return [
        { type: RadPieChartComponent, decorators: [{ type: core_1.Inject, args: [RadPieChartComponent,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKPiePaletteDirective;
}());
exports.TKPiePaletteDirective = TKPiePaletteDirective;
var TKCartesianPaletteEntryDirective = (function () {
    function TKCartesianPaletteEntryDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCartesianPaletteEntryDirective.prototype.ngOnInit = function () {
        var entry = this._elementRef.nativeElement;
        if (this.owner.nativePalette.entries) {
            this.owner.nativePalette.entries.push(entry);
            this.owner.nativePalette.updateOwner();
        }
        else {
            this.owner.nativePalette.entries = new observable_array_1.ObservableArray([entry]);
        }
    };
    TKCartesianPaletteEntryDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkCartesianPaletteEntry]"
                },] },
    ];
    /** @nocollapse */
    TKCartesianPaletteEntryDirective.ctorParameters = function () { return [
        { type: TKCartesianPaletteDirective, decorators: [{ type: core_1.Inject, args: [TKCartesianPaletteDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKCartesianPaletteEntryDirective;
}());
exports.TKCartesianPaletteEntryDirective = TKCartesianPaletteEntryDirective;
var TKPiePaletteEntryDirective = (function () {
    function TKPiePaletteEntryDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKPiePaletteEntryDirective.prototype.ngOnInit = function () {
        var entry = this._elementRef.nativeElement;
        if (this.owner.nativePalette.entries) {
            this.owner.nativePalette.entries.push(entry);
            this.owner.nativePalette.updateOwner();
        }
        else {
            this.owner.nativePalette.entries = new observable_array_1.ObservableArray([entry]);
        }
    };
    TKPiePaletteEntryDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkPiePaletteEntry]"
                },] },
    ];
    /** @nocollapse */
    TKPiePaletteEntryDirective.ctorParameters = function () { return [
        { type: TKPiePaletteDirective, decorators: [{ type: core_1.Inject, args: [TKPiePaletteDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKPiePaletteEntryDirective;
}());
exports.TKPiePaletteEntryDirective = TKPiePaletteEntryDirective;
var TKCartesianHorizontalAxisDirective = (function () {
    function TKCartesianHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCartesianHorizontalAxisDirective.prototype.ngOnInit = function () {
        var axis = this._elementRef.nativeElement;
        var cartesianChart = this.owner.cartesianChart;
        cartesianChart.horizontalAxis = axis;
    };
    TKCartesianHorizontalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkCartesianHorizontalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKCartesianHorizontalAxisDirective.ctorParameters = function () { return [
        { type: RadCartesianChartComponent, decorators: [{ type: core_1.Inject, args: [RadCartesianChartComponent,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKCartesianHorizontalAxisDirective;
}());
exports.TKCartesianHorizontalAxisDirective = TKCartesianHorizontalAxisDirective;
var TKCartesianVerticalAxisDirective = (function () {
    function TKCartesianVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCartesianVerticalAxisDirective.prototype.ngOnInit = function () {
        var axis = this._elementRef.nativeElement;
        var cartesianChart = this.owner.cartesianChart;
        cartesianChart.verticalAxis = axis;
    };
    TKCartesianVerticalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkCartesianVerticalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKCartesianVerticalAxisDirective.ctorParameters = function () { return [
        { type: RadCartesianChartComponent, decorators: [{ type: core_1.Inject, args: [RadCartesianChartComponent,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKCartesianVerticalAxisDirective;
}());
exports.TKCartesianVerticalAxisDirective = TKCartesianVerticalAxisDirective;
var TKLineVerticalAxisDirective = (function () {
    function TKLineVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKLineVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKLineVerticalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkLineVerticalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKLineVerticalAxisDirective.ctorParameters = function () { return [
        { type: LineSeriesDirective, decorators: [{ type: core_1.Inject, args: [LineSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKLineVerticalAxisDirective;
}());
exports.TKLineVerticalAxisDirective = TKLineVerticalAxisDirective;
var TKLineHorizontalAxisDirective = (function () {
    function TKLineHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKLineHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKLineHorizontalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkLineHorizontalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKLineHorizontalAxisDirective.ctorParameters = function () { return [
        { type: LineSeriesDirective, decorators: [{ type: core_1.Inject, args: [LineSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKLineHorizontalAxisDirective;
}());
exports.TKLineHorizontalAxisDirective = TKLineHorizontalAxisDirective;
var TKBarVerticalAxisDirective = (function () {
    function TKBarVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKBarVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKBarVerticalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkBarVerticalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKBarVerticalAxisDirective.ctorParameters = function () { return [
        { type: BarSeriesDirective, decorators: [{ type: core_1.Inject, args: [BarSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKBarVerticalAxisDirective;
}());
exports.TKBarVerticalAxisDirective = TKBarVerticalAxisDirective;
var TKBarHorizontalAxisDirective = (function () {
    function TKBarHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKBarHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKBarHorizontalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkBarHorizontalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKBarHorizontalAxisDirective.ctorParameters = function () { return [
        { type: BarSeriesDirective, decorators: [{ type: core_1.Inject, args: [BarSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKBarHorizontalAxisDirective;
}());
exports.TKBarHorizontalAxisDirective = TKBarHorizontalAxisDirective;
var TKRangeBarVerticalAxisDirective = (function () {
    function TKRangeBarVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKRangeBarVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKRangeBarVerticalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkRangeBarVerticalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKRangeBarVerticalAxisDirective.ctorParameters = function () { return [
        { type: RangeBarSeriesDirective, decorators: [{ type: core_1.Inject, args: [RangeBarSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKRangeBarVerticalAxisDirective;
}());
exports.TKRangeBarVerticalAxisDirective = TKRangeBarVerticalAxisDirective;
var TKRangeBarHorizontalAxisDirective = (function () {
    function TKRangeBarHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKRangeBarHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKRangeBarHorizontalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkRangeBarHorizontalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKRangeBarHorizontalAxisDirective.ctorParameters = function () { return [
        { type: RangeBarSeriesDirective, decorators: [{ type: core_1.Inject, args: [RangeBarSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKRangeBarHorizontalAxisDirective;
}());
exports.TKRangeBarHorizontalAxisDirective = TKRangeBarHorizontalAxisDirective;
var TKAreaVerticalAxisDirective = (function () {
    function TKAreaVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKAreaVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKAreaVerticalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkAreaVerticalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKAreaVerticalAxisDirective.ctorParameters = function () { return [
        { type: AreaSeriesDirective, decorators: [{ type: core_1.Inject, args: [AreaSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKAreaVerticalAxisDirective;
}());
exports.TKAreaVerticalAxisDirective = TKAreaVerticalAxisDirective;
var TKAreaHorizontalAxisDirective = (function () {
    function TKAreaHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKAreaHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKAreaHorizontalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkAreaHorizontalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKAreaHorizontalAxisDirective.ctorParameters = function () { return [
        { type: AreaSeriesDirective, decorators: [{ type: core_1.Inject, args: [AreaSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKAreaHorizontalAxisDirective;
}());
exports.TKAreaHorizontalAxisDirective = TKAreaHorizontalAxisDirective;
var TKSplineVerticalAxisDirective = (function () {
    function TKSplineVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKSplineVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKSplineVerticalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkSplineVerticalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKSplineVerticalAxisDirective.ctorParameters = function () { return [
        { type: SplineSeriesDirective, decorators: [{ type: core_1.Inject, args: [SplineSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKSplineVerticalAxisDirective;
}());
exports.TKSplineVerticalAxisDirective = TKSplineVerticalAxisDirective;
var TKSplineHorizontalAxisDirective = (function () {
    function TKSplineHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKSplineHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKSplineHorizontalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkSplineHorizontalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKSplineHorizontalAxisDirective.ctorParameters = function () { return [
        { type: SplineSeriesDirective, decorators: [{ type: core_1.Inject, args: [SplineSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKSplineHorizontalAxisDirective;
}());
exports.TKSplineHorizontalAxisDirective = TKSplineHorizontalAxisDirective;
var TKSplineAreaVerticalAxisDirective = (function () {
    function TKSplineAreaVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKSplineAreaVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKSplineAreaVerticalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkSplineAreaVerticalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKSplineAreaVerticalAxisDirective.ctorParameters = function () { return [
        { type: SplineAreaSeriesDirective, decorators: [{ type: core_1.Inject, args: [SplineAreaSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKSplineAreaVerticalAxisDirective;
}());
exports.TKSplineAreaVerticalAxisDirective = TKSplineAreaVerticalAxisDirective;
var TKSplineAreaHorizontalAxisDirective = (function () {
    function TKSplineAreaHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKSplineAreaHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKSplineAreaHorizontalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkSplineAreaHorizontalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKSplineAreaHorizontalAxisDirective.ctorParameters = function () { return [
        { type: SplineAreaSeriesDirective, decorators: [{ type: core_1.Inject, args: [SplineAreaSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKSplineAreaHorizontalAxisDirective;
}());
exports.TKSplineAreaHorizontalAxisDirective = TKSplineAreaHorizontalAxisDirective;
var TKBubbleVerticalAxisDirective = (function () {
    function TKBubbleVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKBubbleVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKBubbleVerticalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkBubbleVerticalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKBubbleVerticalAxisDirective.ctorParameters = function () { return [
        { type: BubbleSeriesDirective, decorators: [{ type: core_1.Inject, args: [BubbleSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKBubbleVerticalAxisDirective;
}());
exports.TKBubbleVerticalAxisDirective = TKBubbleVerticalAxisDirective;
var TKBubbleHorizontalAxisDirective = (function () {
    function TKBubbleHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKBubbleHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKBubbleHorizontalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkBubbleHorizontalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKBubbleHorizontalAxisDirective.ctorParameters = function () { return [
        { type: BubbleSeriesDirective, decorators: [{ type: core_1.Inject, args: [BubbleSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKBubbleHorizontalAxisDirective;
}());
exports.TKBubbleHorizontalAxisDirective = TKBubbleHorizontalAxisDirective;
var TKScatterBubbleVerticalAxisDirective = (function () {
    function TKScatterBubbleVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKScatterBubbleVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKScatterBubbleVerticalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkScatterBubbleVerticalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKScatterBubbleVerticalAxisDirective.ctorParameters = function () { return [
        { type: ScatterBubbleSeriesDirective, decorators: [{ type: core_1.Inject, args: [ScatterBubbleSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKScatterBubbleVerticalAxisDirective;
}());
exports.TKScatterBubbleVerticalAxisDirective = TKScatterBubbleVerticalAxisDirective;
var TKScatterBubbleHorizontalAxisDirective = (function () {
    function TKScatterBubbleHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKScatterBubbleHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKScatterBubbleHorizontalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkScatterBubbleHorizontalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKScatterBubbleHorizontalAxisDirective.ctorParameters = function () { return [
        { type: ScatterBubbleSeriesDirective, decorators: [{ type: core_1.Inject, args: [ScatterBubbleSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKScatterBubbleHorizontalAxisDirective;
}());
exports.TKScatterBubbleHorizontalAxisDirective = TKScatterBubbleHorizontalAxisDirective;
var TKCandlestickVerticalAxisDirective = (function () {
    function TKCandlestickVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCandlestickVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKCandlestickVerticalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkCandlestickVerticalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKCandlestickVerticalAxisDirective.ctorParameters = function () { return [
        { type: CandlestickSeriesDirective, decorators: [{ type: core_1.Inject, args: [CandlestickSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKCandlestickVerticalAxisDirective;
}());
exports.TKCandlestickVerticalAxisDirective = TKCandlestickVerticalAxisDirective;
var TKCandlestickHorizontalAxisDirective = (function () {
    function TKCandlestickHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCandlestickHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKCandlestickHorizontalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkCandlestickHorizontalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKCandlestickHorizontalAxisDirective.ctorParameters = function () { return [
        { type: CandlestickSeriesDirective, decorators: [{ type: core_1.Inject, args: [CandlestickSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKCandlestickHorizontalAxisDirective;
}());
exports.TKCandlestickHorizontalAxisDirective = TKCandlestickHorizontalAxisDirective;
var TKOhlcVerticalAxisDirective = (function () {
    function TKOhlcVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKOhlcVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKOhlcVerticalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkOhlcVerticalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKOhlcVerticalAxisDirective.ctorParameters = function () { return [
        { type: OhlcSeriesDirective, decorators: [{ type: core_1.Inject, args: [OhlcSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKOhlcVerticalAxisDirective;
}());
exports.TKOhlcVerticalAxisDirective = TKOhlcVerticalAxisDirective;
var TKOhlcHorizontalAxisDirective = (function () {
    function TKOhlcHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKOhlcHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKOhlcHorizontalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkOhlcHorizontalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKOhlcHorizontalAxisDirective.ctorParameters = function () { return [
        { type: OhlcSeriesDirective, decorators: [{ type: core_1.Inject, args: [OhlcSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKOhlcHorizontalAxisDirective;
}());
exports.TKOhlcHorizontalAxisDirective = TKOhlcHorizontalAxisDirective;
var TKScatterVerticalAxisDirective = (function () {
    function TKScatterVerticalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKScatterVerticalAxisDirective.prototype.ngOnInit = function () {
        var verticalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.verticalAxis = verticalAxis;
    };
    TKScatterVerticalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkScatterVerticalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKScatterVerticalAxisDirective.ctorParameters = function () { return [
        { type: ScatterSeriesDirective, decorators: [{ type: core_1.Inject, args: [ScatterSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKScatterVerticalAxisDirective;
}());
exports.TKScatterVerticalAxisDirective = TKScatterVerticalAxisDirective;
var TKScatterHorizontalAxisDirective = (function () {
    function TKScatterHorizontalAxisDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKScatterHorizontalAxisDirective.prototype.ngOnInit = function () {
        var horizontalAxis = this._elementRef.nativeElement;
        var series = this.owner.nativeSeries;
        series.horizontalAxis = horizontalAxis;
    };
    TKScatterHorizontalAxisDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkScatterHorizontalAxis]"
                },] },
    ];
    /** @nocollapse */
    TKScatterHorizontalAxisDirective.ctorParameters = function () { return [
        { type: ScatterSeriesDirective, decorators: [{ type: core_1.Inject, args: [ScatterSeriesDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKScatterHorizontalAxisDirective;
}());
exports.TKScatterHorizontalAxisDirective = TKScatterHorizontalAxisDirective;
var TKPieLegendDirective = (function () {
    function TKPieLegendDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKPieLegendDirective.prototype.ngOnInit = function () {
        var legend = this._elementRef.nativeElement;
        var pieChart = this.owner.pieChart;
        pieChart.legend = legend;
    };
    TKPieLegendDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkPieLegend]",
                },] },
    ];
    /** @nocollapse */
    TKPieLegendDirective.ctorParameters = function () { return [
        { type: RadPieChartComponent, decorators: [{ type: core_1.Inject, args: [RadPieChartComponent,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKPieLegendDirective;
}());
exports.TKPieLegendDirective = TKPieLegendDirective;
var TKCartesianLegendDirective = (function () {
    function TKCartesianLegendDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCartesianLegendDirective.prototype.ngOnInit = function () {
        var legend = this._elementRef.nativeElement;
        var cartesianChart = this.owner.cartesianChart;
        cartesianChart.legend = legend;
    };
    TKCartesianLegendDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkCartesianLegend]",
                },] },
    ];
    /** @nocollapse */
    TKCartesianLegendDirective.ctorParameters = function () { return [
        { type: RadCartesianChartComponent, decorators: [{ type: core_1.Inject, args: [RadCartesianChartComponent,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKCartesianLegendDirective;
}());
exports.TKCartesianLegendDirective = TKCartesianLegendDirective;
var TKCartesianTrackballDirective = (function () {
    function TKCartesianTrackballDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCartesianTrackballDirective.prototype.ngOnInit = function () {
        var trackball = this._elementRef.nativeElement;
        var cartesianChart = this.owner.cartesianChart;
        cartesianChart.trackball = trackball;
    };
    TKCartesianTrackballDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkCartesianTrackball]"
                },] },
    ];
    /** @nocollapse */
    TKCartesianTrackballDirective.ctorParameters = function () { return [
        { type: RadCartesianChartComponent, decorators: [{ type: core_1.Inject, args: [RadCartesianChartComponent,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKCartesianTrackballDirective;
}());
exports.TKCartesianTrackballDirective = TKCartesianTrackballDirective;
var TKCartesianAnnotationsDirective = (function () {
    function TKCartesianAnnotationsDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCartesianAnnotationsDirective.prototype.ngOnInit = function () {
        var annotation = this._elementRef.nativeElement;
        if (this.owner.cartesianChart.annotations) {
            this.owner.cartesianChart.annotations.push(annotation);
        }
        else {
            this.owner.cartesianChart.annotations = new observable_array_1.ObservableArray([annotation]);
        }
    };
    TKCartesianAnnotationsDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkCartesianAnnotations]"
                },] },
    ];
    /** @nocollapse */
    TKCartesianAnnotationsDirective.ctorParameters = function () { return [
        { type: RadCartesianChartComponent, decorators: [{ type: core_1.Inject, args: [RadCartesianChartComponent,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKCartesianAnnotationsDirective;
}());
exports.TKCartesianAnnotationsDirective = TKCartesianAnnotationsDirective;
exports.CHART_DIRECTIVES = [RadCartesianChartComponent, RadPieChartComponent, LineSeriesDirective, AreaSeriesDirective, SplineSeriesDirective, SplineAreaSeriesDirective, BarSeriesDirective, RangeBarSeriesDirective, BubbleSeriesDirective, ScatterBubbleSeriesDirective, ScatterSeriesDirective, PieSeriesDirective, TKPieChartSeriesDirective, TKCartesianSeriesDirective, PieSeriesDirective, TKCartesianHorizontalAxisDirective, TKCartesianVerticalAxisDirective, LinearAxisDirective, DateTimeCategoricalAxisDirective, CategoricalAxisDirective, RadCartesianChartGridDirective, TKCartesianGridDirective, PaletteDirective, TKCartesianPaletteDirective, CandlestickSeriesDirective, OhlcSeriesDirective, RadLegendViewDirective, DonutSeriesDirective, TKPieLegendDirective, TKCartesianLegendDirective, ChartGridLineAnnotationDirective, TKCartesianAnnotationsDirective, ChartPlotBandAnnotationDirective, TKCartesianTrackballDirective, TrackballDirective, PointLabelStyleDirective, TKPieLabelStyleDirective, TKLineLabelStyleDirective, TKBarLabelStyleDirective, TKRangeBarLabelStyleDirective, TKAreaLabelStyleDirective, TKSplineLabelStyleDirective, TKBubbleLabelStyleDirective, TKScatterBubbleLabelStyleDirective, TKCandlestickLabelStyleDirective, TKOhlcStyleDirective, TKScatterStyleDirective, TKDonutLabelStyleDirective, DateTimeContinuousAxisDirective, TKCartesianPaletteEntryDirective, LogarithmicAxisDirective, TKLineVerticalAxisDirective, TKLineHorizontalAxisDirective, TKBarVerticalAxisDirective, TKBarHorizontalAxisDirective, TKRangeBarVerticalAxisDirective, TKRangeBarHorizontalAxisDirective, TKAreaVerticalAxisDirective, TKAreaHorizontalAxisDirective, TKSplineVerticalAxisDirective, TKSplineHorizontalAxisDirective, TKSplineAreaVerticalAxisDirective, TKSplineAreaHorizontalAxisDirective, TKBubbleVerticalAxisDirective, TKBubbleHorizontalAxisDirective, TKScatterBubbleVerticalAxisDirective, TKScatterBubbleHorizontalAxisDirective, TKCandlestickVerticalAxisDirective, TKCandlestickHorizontalAxisDirective, TKOhlcVerticalAxisDirective, TKOhlcHorizontalAxisDirective, TKScatterVerticalAxisDirective, TKScatterHorizontalAxisDirective, TKPiePaletteDirective, TKPiePaletteEntryDirective, TKSplineAreaLabelStyleDirective];
elementRegistryModule.registerElement("RadCartesianChart", function () { return chartModule.RadCartesianChart; });
elementRegistryModule.registerElement("RadPieChart", function () { return chartModule.RadPieChart; });
elementRegistryModule.registerElement("RadLegendView", function () { return chartModule.RadLegendView; });
elementRegistryModule.registerElement("LineSeries", function () { return chartModule.LineSeries; });
elementRegistryModule.registerElement("PieSeries", function () { return chartModule.PieSeries; });
elementRegistryModule.registerElement("DonutSeries", function () { return chartModule.DonutSeries; });
elementRegistryModule.registerElement("AreaSeries", function () { return chartModule.AreaSeries; });
elementRegistryModule.registerElement("CategoricalAxis", function () { return chartModule.CategoricalAxis; });
elementRegistryModule.registerElement("LinearAxis", function () { return chartModule.LinearAxis; });
elementRegistryModule.registerElement("DateTimeCategoricalAxis", function () { return chartModule.DateTimeCategoricalAxis; });
elementRegistryModule.registerElement("SplineSeries", function () { return chartModule.SplineSeries; });
elementRegistryModule.registerElement("BarSeries", function () { return chartModule.BarSeries; });
elementRegistryModule.registerElement("RangeBarSeries", function () { return chartModule.RangeBarSeries; });
elementRegistryModule.registerElement("BubbleSeries", function () { return chartModule.BubbleSeries; });
elementRegistryModule.registerElement("ScatterBubbleSeries", function () { return chartModule.ScatterBubbleSeries; });
elementRegistryModule.registerElement("ScatterSeries", function () { return chartModule.ScatterSeries; });
elementRegistryModule.registerElement("OhlcSeries", function () { return chartModule.OhlcSeries; });
elementRegistryModule.registerElement("CandlestickSeries", function () { return chartModule.CandlestickSeries; });
elementRegistryModule.registerElement("RadCartesianChartGrid", function () { return chartModule.RadCartesianChartGrid; });
elementRegistryModule.registerElement("Palette", function () { return chartModule.Palette; });
elementRegistryModule.registerElement("PaletteEntry", function () { return chartModule.PaletteEntry; });
elementRegistryModule.registerElement("ChartGridLineAnnotation", function () { return chartModule.ChartGridLineAnnotation; });
elementRegistryModule.registerElement("ChartPlotBandAnnotation", function () { return chartModule.ChartPlotBandAnnotation; });
elementRegistryModule.registerElement("Trackball", function () { return chartModule.Trackball; });
elementRegistryModule.registerElement("PointLabelStyle", function () { return chartModule.PointLabelStyle; });
elementRegistryModule.registerElement("DateTimeContinuousAxis", function () { return chartModule.DateTimeContinuousAxis; });
elementRegistryModule.registerElement("LogarithmicAxis", function () { return chartModule.LogarithmicAxis; });
elementRegistryModule.registerElement("SplineAreaSeries", function () { return chartModule.SplineAreaSeries; });
var NativeScriptUIChartModule = (function () {
    function NativeScriptUIChartModule() {
    }
    NativeScriptUIChartModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [exports.CHART_DIRECTIVES],
                    exports: [exports.CHART_DIRECTIVES]
                },] },
    ];
    /** @nocollapse */
    NativeScriptUIChartModule.ctorParameters = function () { return []; };
    return NativeScriptUIChartModule;
}());
exports.NativeScriptUIChartModule = NativeScriptUIChartModule;
