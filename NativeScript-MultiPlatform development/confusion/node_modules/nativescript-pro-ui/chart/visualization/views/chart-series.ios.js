Object.defineProperty(exports, "__esModule", { value: true });
var seriesCommonModule = require("./chart-series-common");
var initializersImpl = require("../../initializers/chart-initializers");
var commonModule = require("../../chart-common");
var PieSeries = (function (_super) {
    __extends(PieSeries, _super);
    function PieSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PieSeries.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        set: function (value) {
            this._ios = value;
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
    Object.defineProperty(DonutSeries.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        set: function (value) {
            this._ios = value;
        },
        enumerable: true,
        configurable: true
    });
    DonutSeries.prototype.updateOwnerChart = function () {
        if (this.owner && (this.owner instanceof commonModule.RadPieChart)) {
            this.owner.updateChart();
        }
    };
    Object.defineProperty(DonutSeries.prototype, "initializer", {
        get: function () {
            if (!this._initializer) {
                this._initializer = new initializersImpl.DonutSeriesValueMapper();
            }
            return this._initializer;
        },
        enumerable: true,
        configurable: true
    });
    DonutSeries.prototype.onInnerRadiusFactorChanged = function (oldValue, newValue) {
        this.initializer.onInnerRadiusFactorChanged(oldValue, newValue, this);
    };
    return DonutSeries;
}(seriesCommonModule.DonutSeries));
exports.DonutSeries = DonutSeries;
////////////////////////////////////////////////////////////////////////
// BarSeries
////////////////////////////////////////////////////////////////////////
var BarSeries = (function (_super) {
    __extends(BarSeries, _super);
    function BarSeries() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BarSeries.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        set: function (value) {
            this._ios = value;
        },
        enumerable: true,
        configurable: true
    });
    BarSeries.prototype.updateNative = function () {
        this.initializer.updateNative(this);
    };
    return BarSeries;
}(seriesCommonModule.BarSeries));
exports.BarSeries = BarSeries;
////////////////////////////////////////////////////////////////////////
// RangeBarSeries
////////////////////////////////////////////////////////////////////////
var RangeBarSeries = (function (_super) {
    __extends(RangeBarSeries, _super);
    function RangeBarSeries() {
        return _super.call(this) || this;
    }
    Object.defineProperty(RangeBarSeries.prototype, "initializer", {
        get: function () {
            if (!this._initializer) {
                this._initializer = new initializersImpl.RangeBarSeriesValueMapper();
            }
            return this._initializer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeBarSeries.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        set: function (value) {
            this._ios = value;
        },
        enumerable: true,
        configurable: true
    });
    RangeBarSeries.prototype.updateNative = function () {
        this.initializer.updateNative(this);
    };
    RangeBarSeries.prototype.onHighPropertyNameChanged = function (oldValue, newValue) {
        this.initializer.onHighPropertyNameChanged(oldValue, newValue, this);
    };
    RangeBarSeries.prototype.onLowPropertyNameChanged = function (oldValue, newValue) {
        this.initializer.onLowPropertyNameChanged(oldValue, newValue, this);
    };
    RangeBarSeries.prototype.onValuePropertyChanged = function (oldValue, newValue) {
        console.log("WARNING: Range bar series doesn't use valueProperty property.");
    };
    return RangeBarSeries;
}(seriesCommonModule.RangeBarSeries));
exports.RangeBarSeries = RangeBarSeries;
////////////////////////////////////////////////////////////////////////
// LineSeries
////////////////////////////////////////////////////////////////////////
var LineSeries = (function (_super) {
    __extends(LineSeries, _super);
    function LineSeries() {
        return _super.call(this) || this;
    }
    Object.defineProperty(LineSeries.prototype, "initializer", {
        get: function () {
            if (!this._initializer) {
                this._initializer = new initializersImpl.LineSeriesValueMapper();
            }
            return this._initializer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LineSeries.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        set: function (value) {
            this._ios = value;
        },
        enumerable: true,
        configurable: true
    });
    return LineSeries;
}(seriesCommonModule.CategoricalSeries));
exports.LineSeries = LineSeries;
var SplineSeries = (function (_super) {
    __extends(SplineSeries, _super);
    function SplineSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SplineSeries.prototype, "initializer", {
        get: function () {
            if (!this._initializer) {
                this._initializer = new initializersImpl.SplineSeriesValueMapper();
            }
            return this._initializer;
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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AreaSeries.prototype, "initializer", {
        get: function () {
            if (!this._initializer) {
                this._initializer = new initializersImpl.AreaSeriesValueMapper();
            }
            return this._initializer;
        },
        enumerable: true,
        configurable: true
    });
    return AreaSeries;
}(LineSeries));
exports.AreaSeries = AreaSeries;
var SplineAreaSeries = (function (_super) {
    __extends(SplineAreaSeries, _super);
    function SplineAreaSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SplineAreaSeries.prototype, "initializer", {
        get: function () {
            if (!this._initializer) {
                this._initializer = new initializersImpl.SplineAreaSeriesValueMapper();
            }
            return this._initializer;
        },
        enumerable: true,
        configurable: true
    });
    return SplineAreaSeries;
}(LineSeries));
exports.SplineAreaSeries = SplineAreaSeries;
var BubbleSeries = (function (_super) {
    __extends(BubbleSeries, _super);
    function BubbleSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BubbleSeries.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        set: function (value) {
            this._ios = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BubbleSeries.prototype, "initializer", {
        get: function () {
            if (!this._initializer) {
                this._initializer = new initializersImpl.BubbleSeriesValueMapper();
            }
            return this._initializer;
        },
        enumerable: true,
        configurable: true
    });
    BubbleSeries.prototype.onBubbleScaleChanged = function (oldValue, newValue) {
        this.initializer.onBubbleScalePropertyChanged(oldValue, newValue, this);
    };
    BubbleSeries.prototype.onBubbleSizePropertyChanged = function (oldValue, newValue) {
        this.initializer.onBubbleSizePropertyChanged(oldValue, newValue, this);
    };
    return BubbleSeries;
}(seriesCommonModule.BubbleSeries));
exports.BubbleSeries = BubbleSeries;
var ScatterSeries = (function (_super) {
    __extends(ScatterSeries, _super);
    function ScatterSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ScatterSeries.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        set: function (value) {
            this._ios = value;
        },
        enumerable: true,
        configurable: true
    });
    return ScatterSeries;
}(seriesCommonModule.ScatterSeries));
exports.ScatterSeries = ScatterSeries;
var ScatterBubbleSeries = (function (_super) {
    __extends(ScatterBubbleSeries, _super);
    function ScatterBubbleSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ScatterBubbleSeries.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        set: function (value) {
            this._ios = value;
        },
        enumerable: true,
        configurable: true
    });
    return ScatterBubbleSeries;
}(seriesCommonModule.ScatterBubbleSeries));
exports.ScatterBubbleSeries = ScatterBubbleSeries;
var OhlcSeries = (function (_super) {
    __extends(OhlcSeries, _super);
    function OhlcSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OhlcSeries.prototype, "ios", {
        get: function () {
            return this._series;
        },
        set: function (value) {
            this._series = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OhlcSeries.prototype, "initializer", {
        get: function () {
            if (!this._initializer) {
                this._initializer = new initializersImpl.OhlcSeriesValueMapper();
            }
            return this._initializer;
        },
        enumerable: true,
        configurable: true
    });
    OhlcSeries.prototype.onHighPropertyNameChanged = function (oldValue, newValue) {
        this.initializer.onHighPropertyNameChanged(oldValue, newValue, this);
    };
    OhlcSeries.prototype.onLowPropertyNameChanged = function (oldValue, newValue) {
        this.initializer.onLowPropertyNameChanged(oldValue, newValue, this);
    };
    OhlcSeries.prototype.onOpenPropertyNameChanged = function (oldValue, newValue) {
        this.initializer.onOpenPropertyNameChanged(oldValue, newValue, this);
    };
    OhlcSeries.prototype.onClosePropertyNameChanged = function (oldValue, newValue) {
        this.initializer.onClosePropertyNameChanged(oldValue, newValue, this);
    };
    OhlcSeries.prototype.onValuePropertyChanged = function (oldValue, newValue) {
        console.log("WARNING: OHLC series doesn't use valueProperty property.");
    };
    return OhlcSeries;
}(seriesCommonModule.OhlcSeries));
exports.OhlcSeries = OhlcSeries;
var CandlestickSeries = (function (_super) {
    __extends(CandlestickSeries, _super);
    function CandlestickSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CandlestickSeries.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        set: function (value) {
            this._ios = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CandlestickSeries.prototype, "initializer", {
        get: function () {
            if (!this._initializer) {
                this._initializer = new initializersImpl.CandlestickSeriesValueMapper();
            }
            return this._initializer;
        },
        enumerable: true,
        configurable: true
    });
    return CandlestickSeries;
}(OhlcSeries));
exports.CandlestickSeries = CandlestickSeries;
