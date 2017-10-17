Object.defineProperty(exports, "__esModule", { value: true });
var seriesCommonModule = require("./chart-series-common");
// NOTE: This is a dummy file used to fix Typescript errors while developing.
// The NativeScript build overwrites it with one of the corresponding .ios.ts or .android.ts
// files from the same folder.
var PieSeries = (function (_super) {
    __extends(PieSeries, _super);
    function PieSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PieSeries;
}(seriesCommonModule.PieSeries));
exports.PieSeries = PieSeries;
var DonutSeries = (function (_super) {
    __extends(DonutSeries, _super);
    function DonutSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DonutSeries;
}(seriesCommonModule.DonutSeries));
exports.DonutSeries = DonutSeries;
////////////////////////////////////////////////////////////////////////
// BarSeries
////////////////////////////////////////////////////////////////////////
var BarSeries = (function (_super) {
    __extends(BarSeries, _super);
    function BarSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BarSeries;
}(seriesCommonModule.BarSeries));
exports.BarSeries = BarSeries;
////////////////////////////////////////////////////////////////////////
// RangeBarSeries
////////////////////////////////////////////////////////////////////////
var RangeBarSeries = (function (_super) {
    __extends(RangeBarSeries, _super);
    function RangeBarSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RangeBarSeries;
}(seriesCommonModule.RangeBarSeries));
exports.RangeBarSeries = RangeBarSeries;
////////////////////////////////////////////////////////////////////////
// LineSeries
////////////////////////////////////////////////////////////////////////
var LineSeries = (function (_super) {
    __extends(LineSeries, _super);
    function LineSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LineSeries;
}(seriesCommonModule.CategoricalSeries));
exports.LineSeries = LineSeries;
var SplineSeries = (function (_super) {
    __extends(SplineSeries, _super);
    function SplineSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SplineSeries;
}(LineSeries));
exports.SplineSeries = SplineSeries;
var AreaSeries = (function (_super) {
    __extends(AreaSeries, _super);
    function AreaSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AreaSeries;
}(LineSeries));
exports.AreaSeries = AreaSeries;
var SplineAreaSeries = (function (_super) {
    __extends(SplineAreaSeries, _super);
    function SplineAreaSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SplineAreaSeries;
}(LineSeries));
exports.SplineAreaSeries = SplineAreaSeries;
var BubbleSeries = (function (_super) {
    __extends(BubbleSeries, _super);
    function BubbleSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BubbleSeries;
}(seriesCommonModule.BubbleSeries));
exports.BubbleSeries = BubbleSeries;
var ScatterSeries = (function (_super) {
    __extends(ScatterSeries, _super);
    function ScatterSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ScatterSeries;
}(seriesCommonModule.ScatterSeries));
exports.ScatterSeries = ScatterSeries;
var ScatterBubbleSeries = (function (_super) {
    __extends(ScatterBubbleSeries, _super);
    function ScatterBubbleSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ScatterBubbleSeries;
}(seriesCommonModule.ScatterBubbleSeries));
exports.ScatterBubbleSeries = ScatterBubbleSeries;
var OhlcSeries = (function (_super) {
    __extends(OhlcSeries, _super);
    function OhlcSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OhlcSeries;
}(seriesCommonModule.OhlcSeries));
exports.OhlcSeries = OhlcSeries;
var CandlestickSeries = (function (_super) {
    __extends(CandlestickSeries, _super);
    function CandlestickSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CandlestickSeries;
}(OhlcSeries));
exports.CandlestickSeries = CandlestickSeries;
