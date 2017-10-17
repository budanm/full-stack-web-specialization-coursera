Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var _1 = require("./../");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var RadRadialGaugeComponent = (function () {
    function RadRadialGaugeComponent(_elementRef) {
        this._elementRef = _elementRef;
        this._radialGauge = _elementRef.nativeElement;
    }
    Object.defineProperty(RadRadialGaugeComponent.prototype, "nativeElement", {
        get: function () {
            return this._radialGauge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadRadialGaugeComponent.prototype, "radialGauge", {
        get: function () {
            return this._radialGauge;
        },
        enumerable: true,
        configurable: true
    });
    RadRadialGaugeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "RadRadialGauge",
                    template: ""
                },] },
    ];
    /** @nocollapse */
    RadRadialGaugeComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return RadRadialGaugeComponent;
}());
exports.RadRadialGaugeComponent = RadRadialGaugeComponent;
var TKRadialScaleDirective = (function () {
    function TKRadialScaleDirective(_elementRef) {
        this._elementRef = _elementRef;
        this._radialScale = this._elementRef.nativeElement;
    }
    Object.defineProperty(TKRadialScaleDirective.prototype, "radialScale", {
        get: function () {
            return this._radialScale;
        },
        enumerable: true,
        configurable: true
    });
    TKRadialScaleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "RadialScale"
                },] },
    ];
    /** @nocollapse */
    TKRadialScaleDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKRadialScaleDirective;
}());
exports.TKRadialScaleDirective = TKRadialScaleDirective;
var TKRadialBarIndicatorDirective = (function () {
    function TKRadialBarIndicatorDirective(_elementRef) {
        this._elementRef = _elementRef;
        this._barIndicator = this._elementRef.nativeElement;
    }
    Object.defineProperty(TKRadialBarIndicatorDirective.prototype, "radialScale", {
        get: function () {
            return this._barIndicator;
        },
        enumerable: true,
        configurable: true
    });
    TKRadialBarIndicatorDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "RadialBarIndicator"
                },] },
    ];
    /** @nocollapse */
    TKRadialBarIndicatorDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKRadialBarIndicatorDirective;
}());
exports.TKRadialBarIndicatorDirective = TKRadialBarIndicatorDirective;
var TKRadialNeedleDirective = (function () {
    function TKRadialNeedleDirective(_elementRef) {
        this._elementRef = _elementRef;
        this._radialNeedle = this._elementRef.nativeElement;
    }
    Object.defineProperty(TKRadialNeedleDirective.prototype, "radialNeedle", {
        get: function () {
            return this._radialNeedle;
        },
        enumerable: true,
        configurable: true
    });
    TKRadialNeedleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "RadialNeedle",
                },] },
    ];
    /** @nocollapse */
    TKRadialNeedleDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKRadialNeedleDirective;
}());
exports.TKRadialNeedleDirective = TKRadialNeedleDirective;
var TKRadialGaugeScalesDirective = (function () {
    function TKRadialGaugeScalesDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKRadialGaugeScalesDirective.prototype.ngOnInit = function () {
        var scale = this._elementRef.nativeElement;
        var gauge = this.owner.radialGauge;
        if (gauge.scales) {
            gauge.scales.push(scale);
        }
        else {
            gauge.scales = new observable_array_1.ObservableArray([scale]);
        }
    };
    TKRadialGaugeScalesDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkRadialGaugeScales]"
                },] },
    ];
    /** @nocollapse */
    TKRadialGaugeScalesDirective.ctorParameters = function () { return [
        { type: RadRadialGaugeComponent, decorators: [{ type: core_1.Inject, args: [RadRadialGaugeComponent,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKRadialGaugeScalesDirective;
}());
exports.TKRadialGaugeScalesDirective = TKRadialGaugeScalesDirective;
var TKRadialScaleStyleDirective = (function () {
    function TKRadialScaleStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKRadialScaleStyleDirective.prototype.ngOnInit = function () {
        var radialScaleStyle = this._elementRef.nativeElement;
        this.owner.radialScale.scaleStyle = radialScaleStyle;
    };
    TKRadialScaleStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkRadialScaleStyle]"
                },] },
    ];
    /** @nocollapse */
    TKRadialScaleStyleDirective.ctorParameters = function () { return [
        { type: TKRadialScaleDirective, decorators: [{ type: core_1.Inject, args: [TKRadialScaleDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKRadialScaleStyleDirective;
}());
exports.TKRadialScaleStyleDirective = TKRadialScaleStyleDirective;
var TKRadialScaleIndicatorsDirective = (function () {
    function TKRadialScaleIndicatorsDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKRadialScaleIndicatorsDirective.prototype.ngOnInit = function () {
        var barIndicator = this._elementRef.nativeElement;
        var scale = this.owner.radialScale;
        if (scale.indicators) {
            scale.indicators.push(barIndicator);
        }
        else {
            scale.indicators = new observable_array_1.ObservableArray([barIndicator]);
        }
    };
    TKRadialScaleIndicatorsDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkRadialScaleIndicators]"
                },] },
    ];
    /** @nocollapse */
    TKRadialScaleIndicatorsDirective.ctorParameters = function () { return [
        { type: TKRadialScaleDirective, decorators: [{ type: core_1.Inject, args: [TKRadialScaleDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKRadialScaleIndicatorsDirective;
}());
exports.TKRadialScaleIndicatorsDirective = TKRadialScaleIndicatorsDirective;
var TKRadialBarIndicatorStyleDirective = (function () {
    function TKRadialBarIndicatorStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKRadialBarIndicatorStyleDirective.prototype.ngOnInit = function () {
        var indicatorStyle = this._elementRef.nativeElement;
        this.owner.radialScale.indicatorStyle = indicatorStyle;
    };
    TKRadialBarIndicatorStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkRadialBarIndicatorStyle]"
                },] },
    ];
    /** @nocollapse */
    TKRadialBarIndicatorStyleDirective.ctorParameters = function () { return [
        { type: TKRadialBarIndicatorDirective, decorators: [{ type: core_1.Inject, args: [TKRadialBarIndicatorDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKRadialBarIndicatorStyleDirective;
}());
exports.TKRadialBarIndicatorStyleDirective = TKRadialBarIndicatorStyleDirective;
var TKRadialGaugeTitleStyleDirective = (function () {
    function TKRadialGaugeTitleStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKRadialGaugeTitleStyleDirective.prototype.ngOnInit = function () {
        var style = this._elementRef.nativeElement;
        this.owner.radialGauge.titleStyle = style;
    };
    TKRadialGaugeTitleStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkRadialGaugeTitleStyle]"
                },] },
    ];
    /** @nocollapse */
    TKRadialGaugeTitleStyleDirective.ctorParameters = function () { return [
        { type: RadRadialGaugeComponent, decorators: [{ type: core_1.Inject, args: [RadRadialGaugeComponent,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKRadialGaugeTitleStyleDirective;
}());
exports.TKRadialGaugeTitleStyleDirective = TKRadialGaugeTitleStyleDirective;
var TKRadialGaugeSubtitleStyleDirective = (function () {
    function TKRadialGaugeSubtitleStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKRadialGaugeSubtitleStyleDirective.prototype.ngOnInit = function () {
        var style = this._elementRef.nativeElement;
        this.owner.radialGauge.subtitleStyle = style;
    };
    TKRadialGaugeSubtitleStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkRadialGaugeSubtitleStyle]"
                },] },
    ];
    /** @nocollapse */
    TKRadialGaugeSubtitleStyleDirective.ctorParameters = function () { return [
        { type: RadRadialGaugeComponent, decorators: [{ type: core_1.Inject, args: [RadRadialGaugeComponent,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKRadialGaugeSubtitleStyleDirective;
}());
exports.TKRadialGaugeSubtitleStyleDirective = TKRadialGaugeSubtitleStyleDirective;
var TKRadialNeedleStyleDirective = (function () {
    function TKRadialNeedleStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKRadialNeedleStyleDirective.prototype.ngOnInit = function () {
        var style = this._elementRef.nativeElement;
        this.owner.radialNeedle.needleStyle = style;
    };
    TKRadialNeedleStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkRadialNeedleStyle]"
                },] },
    ];
    /** @nocollapse */
    TKRadialNeedleStyleDirective.ctorParameters = function () { return [
        { type: TKRadialNeedleDirective, decorators: [{ type: core_1.Inject, args: [TKRadialNeedleDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKRadialNeedleStyleDirective;
}());
exports.TKRadialNeedleStyleDirective = TKRadialNeedleStyleDirective;
exports.GAUGES_DIRECTIVES = [RadRadialGaugeComponent, TKRadialScaleDirective, TKRadialGaugeScalesDirective, TKRadialScaleStyleDirective, TKRadialScaleIndicatorsDirective, TKRadialBarIndicatorStyleDirective, TKRadialBarIndicatorDirective, TKRadialGaugeTitleStyleDirective, TKRadialNeedleStyleDirective, TKRadialNeedleDirective, TKRadialGaugeSubtitleStyleDirective];
element_registry_1.registerElement("RadRadialGauge", function () { return _1.RadRadialGauge; });
element_registry_1.registerElement("RadialScale", function () { return _1.RadialScale; });
element_registry_1.registerElement("ScaleStyle", function () { return _1.ScaleStyle; });
element_registry_1.registerElement("RadialBarIndicator", function () { return _1.RadialBarIndicator; });
element_registry_1.registerElement("BarIndicatorStyle", function () { return _1.BarIndicatorStyle; });
element_registry_1.registerElement("RadialNeedle", function () { return _1.RadialNeedle; });
element_registry_1.registerElement("TitleStyle", function () { return _1.TitleStyle; });
element_registry_1.registerElement("SubtitleStyle", function () { return _1.SubtitleStyle; });
element_registry_1.registerElement("NeedleStyle", function () { return _1.NeedleStyle; });
var NativeScriptUIGaugesModule = (function () {
    function NativeScriptUIGaugesModule() {
    }
    NativeScriptUIGaugesModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [exports.GAUGES_DIRECTIVES],
                    exports: [exports.GAUGES_DIRECTIVES]
                },] },
    ];
    /** @nocollapse */
    NativeScriptUIGaugesModule.ctorParameters = function () { return []; };
    return NativeScriptUIGaugesModule;
}());
exports.NativeScriptUIGaugesModule = NativeScriptUIGaugesModule;
