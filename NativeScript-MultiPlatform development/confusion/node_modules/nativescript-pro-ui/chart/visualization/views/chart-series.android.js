Object.defineProperty(exports, "__esModule", { value: true });
var seriesCommonModule = require("./chart-series-common");
var utilsModule = require("tns-core-modules/utils/utils");
var PieSeries = (function (_super) {
    __extends(PieSeries, _super);
    function PieSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PieSeries.prototype, "android", {
        get: function () {
            if (!this._android) {
                this._android = new com.telerik.widget.chart.visualization.pieChart.PieSeries();
            }
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return PieSeries;
}(seriesCommonModule.PieSeries));
exports.PieSeries = PieSeries;
var DonutSeries = (function (_super) {
    __extends(DonutSeries, _super);
    function DonutSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DonutSeries.prototype, "android", {
        get: function () {
            if (!this._android) {
                this._android = new com.telerik.widget.chart.visualization.pieChart.DoughnutSeries();
            }
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return DonutSeries;
}(seriesCommonModule.DonutSeries));
exports.DonutSeries = DonutSeries;
var LineSeries = (function (_super) {
    __extends(LineSeries, _super);
    function LineSeries() {
        return _super.call(this) || this;
    }
    Object.defineProperty(LineSeries.prototype, "android", {
        get: function () {
            if (!this._android) {
                this._android = new com.telerik.widget.chart.visualization.cartesianChart.series.categorical.LineSeries();
            }
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return LineSeries;
}(seriesCommonModule.CategoricalSeries));
exports.LineSeries = LineSeries;
var OhlcSeries = (function (_super) {
    __extends(OhlcSeries, _super);
    function OhlcSeries() {
        return _super.call(this) || this;
    }
    Object.defineProperty(OhlcSeries.prototype, "android", {
        get: function () {
            if (!this._android) {
                this._android = new com.telerik.widget.chart.visualization.cartesianChart.series.categorical.OhlcSeries();
            }
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    OhlcSeries.prototype.onValuePropertyChanged = function (oldValue, newValue) {
    };
    OhlcSeries.prototype.onHighPropertyNameChanged = function (oldValue, newValue) {
        if (!newValue) {
            return;
        }
        var highPropertyName = this.highPropertyName;
        var binding = new com.telerik.widget.chart.engine.databinding.GenericDataPointBinding(new com.telerik.android.common.Function({
            apply: function (arg) {
                var item = JSON.parse(arg);
                return item[highPropertyName];
            }
        }));
        this.android.setHighBinding(binding);
    };
    OhlcSeries.prototype.onLowPropertyNameChanged = function (oldValue, newValue) {
        var lowPropertyName = this.lowPropertyName;
        var binding = new com.telerik.widget.chart.engine.databinding.GenericDataPointBinding(new com.telerik.android.common.Function({
            apply: function (arg) {
                var item = JSON.parse(arg);
                return item[lowPropertyName];
            }
        }));
        this.android.setLowBinding(binding);
    };
    OhlcSeries.prototype.onOpenPropertyNameChanged = function (oldValue, newValue) {
        var openPropertyName = this.openPropertyName;
        var binding = new com.telerik.widget.chart.engine.databinding.GenericDataPointBinding(new com.telerik.android.common.Function({
            apply: function (arg) {
                var item = JSON.parse(arg);
                return item[openPropertyName];
            }
        }));
        this.android.setOpenBinding(binding);
    };
    OhlcSeries.prototype.onClosePropertyNameChanged = function (oldValue, newValue) {
        var closePropertyName = this.closePropertyName;
        var binding = new com.telerik.widget.chart.engine.databinding.GenericDataPointBinding(new com.telerik.android.common.Function({
            apply: function (arg) {
                var item = JSON.parse(arg);
                return item[closePropertyName];
            }
        }));
        this.android.setCloseBinding(binding);
    };
    return OhlcSeries;
}(seriesCommonModule.OhlcSeries));
exports.OhlcSeries = OhlcSeries;
var CandlestickSeries = (function (_super) {
    __extends(CandlestickSeries, _super);
    function CandlestickSeries() {
        return _super.call(this) || this;
    }
    Object.defineProperty(CandlestickSeries.prototype, "android", {
        get: function () {
            if (!this._android) {
                this._android = new com.telerik.widget.chart.visualization.cartesianChart.series.categorical.CandlestickSeries();
            }
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return CandlestickSeries;
}(OhlcSeries));
exports.CandlestickSeries = CandlestickSeries;
var SplineSeries = (function (_super) {
    __extends(SplineSeries, _super);
    function SplineSeries() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SplineSeries.prototype, "android", {
        get: function () {
            if (!this._android) {
                this._android = new com.telerik.widget.chart.visualization.cartesianChart.series.categorical.SplineSeries();
            }
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return SplineSeries;
}(LineSeries));
exports.SplineSeries = SplineSeries;
var AreaSeries = (function (_super) {
    __extends(AreaSeries, _super);
    function AreaSeries() {
        return _super.call(this) || this;
    }
    Object.defineProperty(AreaSeries.prototype, "android", {
        get: function () {
            if (!this._android) {
                this._android = new com.telerik.widget.chart.visualization.cartesianChart.series.categorical.AreaSeries();
            }
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return AreaSeries;
}(seriesCommonModule.CategoricalSeries));
exports.AreaSeries = AreaSeries;
var SplineAreaSeries = (function (_super) {
    __extends(SplineAreaSeries, _super);
    function SplineAreaSeries() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SplineAreaSeries.prototype, "android", {
        get: function () {
            if (!this._android) {
                this._android = new com.telerik.widget.chart.visualization.cartesianChart.series.categorical.SplineAreaSeries();
            }
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return SplineAreaSeries;
}(AreaSeries));
exports.SplineAreaSeries = SplineAreaSeries;
var ScatterBubbleSeries = (function (_super) {
    __extends(ScatterBubbleSeries, _super);
    function ScatterBubbleSeries() {
        return _super.call(this) || this;
    }
    Object.defineProperty(ScatterBubbleSeries.prototype, "android", {
        get: function () {
            if (!this._android) {
                this._android = new com.telerik.widget.chart.visualization.cartesianChart.series.scatter.ScatterBubbleSeries();
            }
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return ScatterBubbleSeries;
}(seriesCommonModule.ScatterBubbleSeries));
exports.ScatterBubbleSeries = ScatterBubbleSeries;
var BubbleSeries = (function (_super) {
    __extends(BubbleSeries, _super);
    function BubbleSeries() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BubbleSeries.prototype, "android", {
        get: function () {
            if (!this._android) {
                this._android = new com.telerik.widget.chart.visualization.cartesianChart.series.categorical.BubbleSeries();
            }
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    BubbleSeries.prototype.onBubbleScaleChanged = function (oldValue, newValue) {
        if (newValue) {
            //todo: we use (scale^2) because of bug in Android scale calculation. Update this hack when it is fixed.
            this.android.setBubbleScale(Math.pow(newValue * utilsModule.layout.getDisplayDensity(), 2));
        }
    };
    BubbleSeries.prototype.onBubbleSizePropertyChanged = function (oldValue, newValue) {
        if (!this.bubbleSizeProperty) {
            return;
        }
        var propertyName = this.bubbleSizeProperty;
        var binding = new com.telerik.widget.chart.engine.databinding.GenericDataPointBinding(new com.telerik.android.common.Function({
            apply: function (arg) {
                var item = JSON.parse(arg);
                return item[propertyName];
            }
        }));
        this.android.setBubbleSizeBinding(binding);
    };
    return BubbleSeries;
}(seriesCommonModule.BubbleSeries));
exports.BubbleSeries = BubbleSeries;
var ScatterSeries = (function (_super) {
    __extends(ScatterSeries, _super);
    function ScatterSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ScatterSeries.prototype, "android", {
        get: function () {
            if (!this._android) {
                this._android = new com.telerik.widget.chart.visualization.cartesianChart.series.scatter.ScatterPointSeries();
            }
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return ScatterSeries;
}(seriesCommonModule.ScatterSeries));
exports.ScatterSeries = ScatterSeries;
var BarSeries = (function (_super) {
    __extends(BarSeries, _super);
    function BarSeries() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BarSeries.prototype, "android", {
        get: function () {
            if (!this._android) {
                this._android = new com.telerik.widget.chart.visualization.cartesianChart.series.categorical.BarSeries();
                this._android.setCombineMode(com.telerik.widget.chart.engine.series.combination.ChartSeriesCombineMode.CLUSTER);
                if (!isNaN(this.minBarSize)) {
                    this._android.setMinBarWidth(utilsModule.layout.toDevicePixels(this.minBarSize));
                }
                else {
                    this._android.setMinBarWidth(0);
                }
                if (!isNaN(this.maxBarSize)) {
                    this._android.setMaxBarWidth(utilsModule.layout.toDevicePixels(this.maxBarSize));
                }
                else {
                    this._android.setMaxBarWidth(0);
                }
            }
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return BarSeries;
}(seriesCommonModule.BarSeries));
exports.BarSeries = BarSeries;
var RangeBarSeries = (function (_super) {
    __extends(RangeBarSeries, _super);
    function RangeBarSeries() {
        return _super.call(this) || this;
    }
    Object.defineProperty(RangeBarSeries.prototype, "android", {
        get: function () {
            if (!this._android) {
                this._android = new com.telerik.widget.chart.visualization.cartesianChart.series.categorical.RangeBarSeries();
            }
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    RangeBarSeries.prototype.onValuePropertyChanged = function (oldValue, newValue) {
        console.log("WARNING: Range bar series doesn't use valueProperty property.");
    };
    RangeBarSeries.prototype.onHighPropertyNameChanged = function (oldValue, newValue) {
        if (!newValue) {
            return;
        }
        var highPropertyName = this.highPropertyName;
        var binding = new com.telerik.widget.chart.engine.databinding.GenericDataPointBinding(new com.telerik.android.common.Function({
            apply: function (arg) {
                var item = JSON.parse(arg);
                return item[highPropertyName];
            }
        }));
        this.android.setHighBinding(binding);
    };
    RangeBarSeries.prototype.onLowPropertyNameChanged = function (oldValue, newValue) {
        var lowPropertyName = this.lowPropertyName;
        var binding = new com.telerik.widget.chart.engine.databinding.GenericDataPointBinding(new com.telerik.android.common.Function({
            apply: function (arg) {
                var item = JSON.parse(arg);
                return item[lowPropertyName];
            }
        }));
        this.android.setLowBinding(binding);
    };
    return RangeBarSeries;
}(seriesCommonModule.RangeBarSeries));
exports.RangeBarSeries = RangeBarSeries;
