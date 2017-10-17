Object.defineProperty(exports, "__esModule", { value: true });
var commonModule = require("./gauges-common");
var color_1 = require("tns-core-modules/color");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var weakEvents = require("tns-core-modules/ui/core/weak-event-listener");
exports.knownCollections = commonModule.knownCollections;
var RadRadialGauge = (function (_super) {
    __extends(RadRadialGauge, _super);
    function RadRadialGauge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RadRadialGauge.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadRadialGauge.prototype, "nativeObject", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    RadRadialGauge.prototype.createNativeView = function () {
        this._android = new com.telerik.widget.gauge.RadRadialGaugeView(this._context);
        if (this.scales) {
            weakEvents.addWeakEventListener(this.scales, observable_array_1.ObservableArray.changeEvent, this.scalesCollectionChanged, this);
            this.initializer.updateNativeObject(this);
            this.reloadScales();
        }
        return this._android;
    };
    return RadRadialGauge;
}(commonModule.RadRadialGauge));
exports.RadRadialGauge = RadRadialGauge;
var RadialScale = (function (_super) {
    __extends(RadialScale, _super);
    function RadialScale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RadialScale.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialScale.prototype, "nativeObject", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialScale.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (value) {
            this._owner = value;
            this._android = new com.telerik.widget.scales.GaugeRadialScale(this._owner._context);
            if (this.indicators) {
                weakEvents.addWeakEventListener(this.indicators, observable_array_1.ObservableArray.changeEvent, this.indicatorsCollectionChanged, this);
            }
            this.initializer.updateNativeObject(this);
            this.updateNativeRadialScale();
        },
        enumerable: true,
        configurable: true
    });
    RadialScale.prototype.updateNativeRadialScale = function () {
        this._android.setStartAngle(this.startAngle);
        this._android.setSweepAngle(this.sweepAngle);
        this._android.setRadius(this.radius);
    };
    RadialScale.prototype._onStartAnglePropertyChanged = function (oldValue, newValue) {
        if (!this._android) {
            return;
        }
        this._android.setStartAngle(newValue);
    };
    RadialScale.prototype._onSweepAnglePropertyChanged = function (oldValue, newValue) {
        if (!this._android) {
            return;
        }
        this._android.setSweepAngle(newValue);
    };
    RadialScale.prototype._onRadiusPropertyChanged = function (oldValue, newValue) {
        if (!this._android) {
            return;
        }
        this._android.setRadius(newValue);
    };
    return RadialScale;
}(commonModule.RadialScale));
exports.RadialScale = RadialScale;
var ScaleStyle = (function (_super) {
    __extends(ScaleStyle, _super);
    function ScaleStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScaleStyle.prototype._onLineColorPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setStrokeColor(new color_1.Color(newValue).android);
        }
    };
    ScaleStyle.prototype._onLineThicknessPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            if (newValue == 0) {
                this.owner.android.setLineVisible(false);
            }
            else {
                this.owner.android.setLineVisible(true);
            }
            this.owner.android.setStrokeWidth(newValue);
        }
    };
    ScaleStyle.prototype._onTicksVisiblePropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setTicksVisible(newValue);
        }
    };
    ScaleStyle.prototype._onMajorTicksCountPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setMajorTicksCount(newValue);
        }
    };
    ScaleStyle.prototype._onMinorTicksCountPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setMinorTicksCount(newValue);
        }
    };
    ScaleStyle.prototype._onТicksOffsetPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setTicksOffset(newValue);
        }
    };
    ScaleStyle.prototype._onTicksLayoutModePropertyChanged = function (oldValue, newValue) {
        if (!this.shouldUpdateNativeObject()) {
            return;
        }
        if (newValue == commonModule.ScaleTicksLayoutMode.Inner) {
            this.owner.android.setTicksLayoutMode(com.telerik.widget.scales.GaugeScaleTicksLayoutMode.INNER);
        }
        else if (newValue == commonModule.ScaleTicksLayoutMode.Outer) {
            this.owner.android.setTicksLayoutMode(com.telerik.widget.scales.GaugeScaleTicksLayoutMode.OUTER);
        }
    };
    ScaleStyle.prototype._onMajorTicksWidthPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setMajorTicksWidth(newValue);
        }
    };
    ScaleStyle.prototype._onMinorTicksWidthPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setMinorTicksWidth(newValue);
        }
    };
    ScaleStyle.prototype._onMajorTicksLengthPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setMajorTicksLength(newValue);
        }
    };
    ScaleStyle.prototype._onMinorTicksLengthPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setMinorTicksLength(newValue);
        }
    };
    ScaleStyle.prototype._onMajorTicksStrokeColorPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setMajorTicksStrokeColor(new color_1.Color(newValue).android);
        }
    };
    ScaleStyle.prototype._onМinorTicksStrokeColorPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setMinorTickStrokeColor(new color_1.Color(newValue).android);
        }
    };
    ScaleStyle.prototype._onMajorTicksFillColorPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setMajorTicksFillColor(new color_1.Color(newValue).android);
        }
    };
    ScaleStyle.prototype._onMinorTicksFillColorPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setMinorTicksFillColor(new color_1.Color(newValue).android);
        }
    };
    ScaleStyle.prototype._onМajorTicksStrokeWidthPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.getMajorTicksStrokePaint().setStrokeWidth(newValue);
        }
    };
    ScaleStyle.prototype._onМinorTicksStrokeWidthPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.getMinorTicksStrokePaint().setStrokeWidth(newValue);
        }
    };
    ScaleStyle.prototype._onLabelsVisiblePropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setLabelsVisible(newValue);
        }
    };
    ScaleStyle.prototype._onLabelsCountPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setLabelsCount(newValue);
        }
    };
    ScaleStyle.prototype._onLabelsLayoutModePropertyChanged = function (oldValue, newValue) {
        if (!this.shouldUpdateNativeObject()) {
            return;
        }
        if (newValue == commonModule.ScaleLabelsLayoutMode.Inner) {
            this.owner.android.setLabelsLayoutMode(com.telerik.widget.scales.GaugeScaleLabelsLayoutMode.INNER);
        }
        else if (newValue == commonModule.ScaleLabelsLayoutMode.Outer) {
            this.owner.android.setLabelsLayoutMode(com.telerik.widget.scales.GaugeScaleLabelsLayoutMode.OUTER);
        }
    };
    ScaleStyle.prototype._onLabelsOffsetPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setLabelsOffset(newValue);
        }
    };
    ScaleStyle.prototype._onLabelsSizePropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.getLabelsPaint().setTextSize(newValue);
        }
    };
    ScaleStyle.prototype._onLabelsColorPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setLabelsColor(new color_1.Color(newValue).android);
        }
    };
    return ScaleStyle;
}(commonModule.ScaleStyle));
exports.ScaleStyle = ScaleStyle;
var TitleStyle = (function (_super) {
    __extends(TitleStyle, _super);
    function TitleStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TitleStyle.prototype._onTextSizePropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.getTitle().setTextSize(newValue);
        }
    };
    TitleStyle.prototype._onTextColorPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.getTitle().setTextColor(new color_1.Color(newValue).android);
        }
    };
    TitleStyle.prototype._onHorizontalOffsetPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setTitleHorizontalOffset(newValue);
        }
    };
    TitleStyle.prototype._onVerticalOffsetPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setTitleVerticalOffset(newValue);
        }
    };
    return TitleStyle;
}(commonModule.TitleStyle));
exports.TitleStyle = TitleStyle;
var SubtitleStyle = (function (_super) {
    __extends(SubtitleStyle, _super);
    function SubtitleStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubtitleStyle.prototype._onTextSizePropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.getSubtitle().setTextSize(newValue);
        }
    };
    SubtitleStyle.prototype._onTextColorPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.getSubtitle().setTextColor(new color_1.Color(newValue).android);
        }
    };
    SubtitleStyle.prototype._onHorizontalOffsetPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setSubtitleHorizontalOffset(newValue);
        }
    };
    SubtitleStyle.prototype._onVerticalOffsetPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setSubtitleVerticalOffset(newValue);
        }
    };
    return SubtitleStyle;
}(commonModule.SubtitleStyle));
exports.SubtitleStyle = SubtitleStyle;
/////////////////////////// INDICATORS
var RadialNeedle = (function (_super) {
    __extends(RadialNeedle, _super);
    function RadialNeedle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._androidViewId = -1;
        return _this;
    }
    RadialNeedle.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        if (this._androidViewId < 0) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._android.setId(this._androidViewId);
    };
    Object.defineProperty(RadialNeedle.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialNeedle.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (value) {
            this._owner = value;
            var gaugeView = value.owner;
            this._android = new com.telerik.widget.indicators.GaugeRadialNeedle(gaugeView._context);
            this.initializer.updateNativeObject(this);
            if (this.value != undefined) {
                this._android.setValue(this.value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialNeedle.prototype, "nativeObject", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    RadialNeedle.prototype._onValuePropertyChanged = function (oldValue, newValue) {
        if (!this._android) {
            return;
        }
        this._android.setValue(newValue);
    };
    return RadialNeedle;
}(commonModule.RadialNeedle));
exports.RadialNeedle = RadialNeedle;
var NeedleStyle = (function (_super) {
    __extends(NeedleStyle, _super);
    function NeedleStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NeedleStyle.prototype._onLengthPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setLength(newValue);
        }
    };
    NeedleStyle.prototype._onBottomWidthPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setBottomWidth(newValue);
        }
    };
    NeedleStyle.prototype._onTopWidthPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setTopWidth(newValue);
        }
    };
    NeedleStyle.prototype._onCircleRadiusPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setCircleRadius(newValue);
        }
    };
    NeedleStyle.prototype._onCircleInnerRadiusPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setCircleInnerRadius(newValue);
        }
    };
    NeedleStyle.prototype._onOffsetPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setOffset(newValue);
        }
    };
    NeedleStyle.prototype._onCircleFillColorPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setCircleFillColor(new color_1.Color(newValue).android);
        }
    };
    NeedleStyle.prototype._onCircleStrokeColorPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setCircleStrokeColor(new color_1.Color(newValue).android);
        }
    };
    NeedleStyle.prototype._onCircleStrokeWidthPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.getCircleStrokePaint().setStrokeWidth(newValue);
        }
    };
    NeedleStyle.prototype._onFillColorPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setFillColor(new color_1.Color(newValue).android);
        }
    };
    NeedleStyle.prototype._onStrokeColorPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setStrokeColor(new color_1.Color(newValue).android);
        }
    };
    NeedleStyle.prototype._onStrokeWidthPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setStrokeWidth(newValue);
        }
    };
    return NeedleStyle;
}(commonModule.NeedleStyle));
exports.NeedleStyle = NeedleStyle;
var RadialBarIndicator = (function (_super) {
    __extends(RadialBarIndicator, _super);
    function RadialBarIndicator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._androidViewId = -1;
        return _this;
    }
    RadialBarIndicator.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        if (this._androidViewId < 0) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._android.setId(this._androidViewId);
    };
    Object.defineProperty(RadialBarIndicator.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (value) {
            this._owner = value;
            var gaugeView = value.owner;
            this._android = new com.telerik.widget.indicators.GaugeRadialBarIndicator(gaugeView._context);
            this.initializer.updateNativeObject(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialBarIndicator.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadialBarIndicator.prototype, "nativeObject", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return RadialBarIndicator;
}(commonModule.RadialBarIndicator));
exports.RadialBarIndicator = RadialBarIndicator;
var BarIndicatorStyle = (function (_super) {
    __extends(BarIndicatorStyle, _super);
    function BarIndicatorStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarIndicatorStyle.prototype._onCapPropertyChanged = function (oldValue, newValue) {
        if (!this.shouldUpdateNativeObject()) {
            return;
        }
        if (newValue == commonModule.BarIndicatorCapMode.Edge) {
            this.owner.android.setCap(com.telerik.widget.indicators.GaugeBarIndicatorCapMode.EDGE);
        }
        else if (newValue == commonModule.BarIndicatorCapMode.Round) {
            this.owner.android.setCap(com.telerik.widget.indicators.GaugeBarIndicatorCapMode.ROUND);
        }
    };
    BarIndicatorStyle.prototype._onBarWidthPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setBarWidth(newValue);
        }
    };
    BarIndicatorStyle.prototype._onFillColorPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setFillColor(new color_1.Color(newValue).android);
        }
    };
    BarIndicatorStyle.prototype._onStrokeColorPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setStrokeColor(new color_1.Color(newValue).android);
        }
    };
    BarIndicatorStyle.prototype._onStrokeWidthPropertyChanged = function (oldValue, newValue) {
        if (this.shouldUpdateNativeObject()) {
            this.owner.android.setStrokeWidth(newValue);
        }
    };
    return BarIndicatorStyle;
}(commonModule.BarIndicatorStyle));
exports.BarIndicatorStyle = BarIndicatorStyle;
