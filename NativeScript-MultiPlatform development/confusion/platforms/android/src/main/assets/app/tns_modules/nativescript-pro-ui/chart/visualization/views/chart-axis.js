Object.defineProperty(exports, "__esModule", { value: true });
var axisCommonModule = require("./chart-axis-common");
var publicEnumModule = require("../../misc/chart-public-enum");
var dateHelperModule = require("../../misc/chart-date-helper");
var CategoricalAxis = (function (_super) {
    __extends(CategoricalAxis, _super);
    function CategoricalAxis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CategoricalAxis.prototype, "android", {
        get: function () {
            if (!this._android) {
                this._android = new com.telerik.widget.chart.visualization.cartesianChart.axes.CategoricalAxis();
                this._android.setCanApplyPalette(false);
            }
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    CategoricalAxis.prototype.onMajorTickIntervalChanged = function (oldValue, newValue) {
        if (newValue) {
            this.android.setMajorTickInterval(newValue);
        }
    };
    return CategoricalAxis;
}(axisCommonModule.CategoricalAxis));
exports.CategoricalAxis = CategoricalAxis;
var DateTimeContinuousAxis = (function (_super) {
    __extends(DateTimeContinuousAxis, _super);
    function DateTimeContinuousAxis() {
        return _super.call(this) || this;
    }
    Object.defineProperty(DateTimeContinuousAxis.prototype, "android", {
        get: function () {
            if (!this._android) {
                this._android = new com.telerik.widget.chart.visualization.cartesianChart.axes.DateTimeContinuousAxis();
                this._android.setPlotMode(com.telerik.widget.chart.engine.axes.common.AxisPlotMode.BETWEEN_TICKS);
                //this._android.setMaximumTicks(10);
                this._android.setCanApplyPalette(false);
            }
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    DateTimeContinuousAxis.prototype.onDateFormatChanged = function (oldValue, newValue) {
        if (newValue) {
            this.android.setDateTimeFormat(new java.text.SimpleDateFormat(newValue));
        }
    };
    DateTimeContinuousAxis.prototype.onLabelFormatChanged = function (oldValue, newValue) {
        console.log("WARNING: labelFormat property is not supported for DateTimeCategoricalAxis. Use dateFormat instead.");
    };
    DateTimeContinuousAxis.prototype.onSourceDateFormatChanged = function (oldValue, newValue) {
        if (newValue) {
            this.android.setSourceDateTimeFormat(new java.text.SimpleDateFormat(newValue));
        }
    };
    DateTimeContinuousAxis.prototype.onPlotModeChanged = function (oldValue, newValue) {
        if (newValue) {
            var plotMode = newValue.toLowerCase();
            switch (plotMode) {
                case publicEnumModule.AxisPlotMode.BetweenTicks.toLowerCase():
                    this.android.setPlotMode(com.telerik.widget.chart.engine.axes.common.AxisPlotMode.BETWEEN_TICKS);
                    break;
                case publicEnumModule.AxisPlotMode.OnTicks.toLowerCase():
                    this.android.setPlotMode(com.telerik.widget.chart.engine.axes.common.AxisPlotMode.ON_TICKS);
                    break;
                default:
                    console.log("WARNING: Unsupported plot mode set: " + newValue);
            }
        }
    };
    DateTimeContinuousAxis.prototype.onMinimumChanged = function (oldValue, newValue) {
        if (newValue === undefined) {
            this.android.setMinimum(undefined);
            return;
        }
        if (typeof newValue === "string") {
            var formatter = new java.text.SimpleDateFormat("dd/MM/yyyy");
            var parsedDate = formatter.parse(newValue);
            var millis = parsedDate.getTime();
            var nativeValue = java.util.Calendar.getInstance();
            nativeValue.setTimeInMillis(millis);
            this.android.setMinimum(nativeValue);
        }
        else {
            this.android.setMinimum(dateHelperModule.getCalendarFromDate(newValue));
        }
    };
    DateTimeContinuousAxis.prototype.onMaximumChanged = function (oldValue, newValue) {
        if (newValue === undefined) {
            this.android.setMaximum(undefined);
            return;
        }
        if (typeof newValue === "string") {
            var formatter = new java.text.SimpleDateFormat("dd/MM/yyyy");
            var parsedDate = formatter.parse(newValue);
            var millis = parsedDate.getTime();
            var nativeValue = java.util.Calendar.getInstance();
            nativeValue.setTimeInMillis(millis);
            this.android.setMaximum(nativeValue);
        }
        else {
            this.android.setMaximum(dateHelperModule.getCalendarFromDate(newValue));
        }
    };
    DateTimeContinuousAxis.prototype.onMajorStepChanged = function (oldValue, newValue) {
        if (newValue) {
            switch (newValue.toString().toLowerCase()) {
                case publicEnumModule.DateTimeComponent.Second.toLowerCase():
                    this.android.setMajorStepUnit(com.telerik.widget.chart.engine.axes.common.TimeInterval.SECOND);
                    this.android.setMajorStep(1);
                    break;
                case publicEnumModule.DateTimeComponent.Minute.toLowerCase():
                    this.android.setMajorStepUnit(com.telerik.widget.chart.engine.axes.common.TimeInterval.MINUTE);
                    this.android.setMajorStep(1);
                    break;
                case publicEnumModule.DateTimeComponent.Hour.toLowerCase():
                    this.android.setMajorStepUnit(com.telerik.widget.chart.engine.axes.common.TimeInterval.HOUR);
                    this.android.setMajorStep(1);
                    break;
                case publicEnumModule.DateTimeComponent.Day.toLowerCase():
                    this.android.setMajorStepUnit(com.telerik.widget.chart.engine.axes.common.TimeInterval.DAY);
                    this.android.setMajorStep(1);
                    break;
                case publicEnumModule.DateTimeComponent.Week.toLowerCase():
                    this.android.setMajorStepUnit(com.telerik.widget.chart.engine.axes.common.TimeInterval.WEEK);
                    this.android.setMajorStep(1);
                    break;
                case publicEnumModule.DateTimeComponent.Month.toLowerCase():
                    this.android.setMajorStepUnit(com.telerik.widget.chart.engine.axes.common.TimeInterval.MONTH);
                    this.android.setMajorStep(1);
                    break;
                case publicEnumModule.DateTimeComponent.Year.toLowerCase():
                    this.android.setMajorStepUnit(com.telerik.widget.chart.engine.axes.common.TimeInterval.YEAR);
                    this.android.setMajorStep(1);
                    break;
            }
        }
    };
    return DateTimeContinuousAxis;
}(axisCommonModule.DateTimeContinuousAxis));
exports.DateTimeContinuousAxis = DateTimeContinuousAxis;
var DateTimeCategoricalAxis = (function (_super) {
    __extends(DateTimeCategoricalAxis, _super);
    function DateTimeCategoricalAxis() {
        return _super.call(this) || this;
    }
    Object.defineProperty(DateTimeCategoricalAxis.prototype, "android", {
        get: function () {
            if (!this._android) {
                this._android = new com.telerik.widget.chart.visualization.cartesianChart.axes.DateTimeCategoricalAxis();
                this._android.setCanApplyPalette(false);
            }
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    DateTimeCategoricalAxis.prototype.onDateFormatChanged = function (oldValue, newValue) {
        if (newValue) {
            this.android.setDateTimeFormat(new java.text.SimpleDateFormat(newValue));
        }
    };
    DateTimeCategoricalAxis.prototype.onLabelFormatChanged = function (oldValue, newValue) {
        console.log("WARNING: labelFormat property is not supported for DateTimeCategoricalAxis. Use dateFormat instead.");
    };
    DateTimeCategoricalAxis.prototype.onDateTimeComponentChanged = function (oldValue, newValue) {
        if (newValue) {
            switch (newValue.toLowerCase()) {
                case publicEnumModule.DateTimeComponent.Second.toLowerCase():
                    this.android.setDateTimeComponent(com.telerik.widget.chart.engine.axes.common.DateTimeComponent.SECOND);
                    break;
                case publicEnumModule.DateTimeComponent.Minute.toLowerCase():
                    this.android.setDateTimeComponent(com.telerik.widget.chart.engine.axes.common.DateTimeComponent.MINUTE);
                    break;
                case publicEnumModule.DateTimeComponent.Hour.toLowerCase():
                    this.android.setDateTimeComponent(com.telerik.widget.chart.engine.axes.common.DateTimeComponent.HOUR);
                    break;
                case publicEnumModule.DateTimeComponent.Day.toLowerCase():
                    this.android.setDateTimeComponent(com.telerik.widget.chart.engine.axes.common.DateTimeComponent.DAY);
                    break;
                case publicEnumModule.DateTimeComponent.Week.toLowerCase():
                    this.android.setDateTimeComponent(com.telerik.widget.chart.engine.axes.common.DateTimeComponent.WEEK);
                    break;
                case publicEnumModule.DateTimeComponent.Month.toLowerCase():
                    this.android.setDateTimeComponent(com.telerik.widget.chart.engine.axes.common.DateTimeComponent.MONTH);
                    break;
                case publicEnumModule.DateTimeComponent.Year.toLowerCase():
                    this.android.setDateTimeComponent(com.telerik.widget.chart.engine.axes.common.DateTimeComponent.YEAR);
                    break;
            }
        }
    };
    return DateTimeCategoricalAxis;
}(axisCommonModule.DateTimeCategoricalAxis));
exports.DateTimeCategoricalAxis = DateTimeCategoricalAxis;
////////////////////////////////////////////////////////////////////////
// LogarithmicAxis
////////////////////////////////////////////////////////////////////////
var LogarithmicAxis = (function (_super) {
    __extends(LogarithmicAxis, _super);
    function LogarithmicAxis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LogarithmicAxis.prototype, "android", {
        get: function () {
            if (!this._android) {
                this._android = new com.telerik.widget.chart.visualization.cartesianChart.axes.LogarithmicAxis();
                this._android.setCanApplyPalette(false);
            }
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    LogarithmicAxis.prototype.onExponentStepChanged = function (oldValue, newValue) {
        if (!isNaN(+newValue) && newValue > 0) {
            this.android.setExponentStep(newValue);
        }
    };
    LogarithmicAxis.prototype.onLogarithmBaseChanged = function (oldValue, newValue) {
        if (!isNaN(newValue)) {
            this.android.setLogarithmBase(newValue);
        }
    };
    LogarithmicAxis.prototype.onMajorStepChanged = function (oldValue, newValue) {
        console.log("WARNING: majorStep property is not used for LogarithmicAxis. Use exponentStep property instead.");
    };
    LogarithmicAxis.prototype.onMinimumChanged = function (oldValue, newValue) {
        if (!isNaN(+newValue)) {
            this.android.setMinimum(parseFloat(newValue));
        }
    };
    LogarithmicAxis.prototype.onMaximumChanged = function (oldValue, newValue) {
        if (!isNaN(+newValue)) {
            this.android.setMaximum(parseFloat(newValue));
        }
    };
    return LogarithmicAxis;
}(axisCommonModule.LogarithmicAxis));
exports.LogarithmicAxis = LogarithmicAxis;
var LinearAxis = (function (_super) {
    __extends(LinearAxis, _super);
    function LinearAxis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LinearAxis.prototype, "android", {
        get: function () {
            if (!this._android) {
                this._android = new com.telerik.widget.chart.visualization.cartesianChart.axes.LinearAxis();
                this._android.setCanApplyPalette(false);
            }
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    LinearAxis.prototype.onMajorStepChanged = function (oldValue, newValue) {
        if (!isNaN(+newValue)) {
            this.android.setMajorStep(parseFloat(newValue));
        }
    };
    LinearAxis.prototype.onMinimumChanged = function (oldValue, newValue) {
        if (!isNaN(+newValue)) {
            this.android.setMinimum(parseFloat(newValue));
        }
    };
    LinearAxis.prototype.onMaximumChanged = function (oldValue, newValue) {
        if (!isNaN(+newValue)) {
            this.android.setMaximum(parseFloat(newValue));
        }
    };
    return LinearAxis;
}(axisCommonModule.LinearAxis));
exports.LinearAxis = LinearAxis;
