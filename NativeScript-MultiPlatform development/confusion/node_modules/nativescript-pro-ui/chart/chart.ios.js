Object.defineProperty(exports, "__esModule", { value: true });
var commonModule = require("./chart-common");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var color_1 = require("tns-core-modules/color");
var publicEnumModule = require("./misc/chart-public-enum");
var eventDataCommonModule = require("./misc/chart-event-data-common");
var axisCommonModule = require("./visualization/views/chart-axis-common");
var labelStyleCommonModule = require("./visualization/parts/chart-label-style-common");
var paletteCommonModule = require("./visualization/parts/chart-palette-common");
var trackBallCommonModule = require("./visualization/parts/chart-track-ball-common");
var cartesianChartGridCommonModule = require("./visualization/parts/chart-cartesian-chart-grid-common");
var legendViewModule = require("./visualization/views/chart-legend-view");
var axisModule = require("./visualization/views/chart-axis");
var seriesModule = require("./visualization/views/chart-series");
var annotationModule = require("./visualization/parts/chart-annotation");
var cartesianChartGridModule = require("./visualization/parts/chart-cartesian-chart-grid");
var trackBallModule = require("./visualization/parts/chart-track-ball");
require("utils/module-merge").merge(commonModule, exports);
require("utils/module-merge").merge(publicEnumModule, exports);
require("utils/module-merge").merge(eventDataCommonModule, exports);
require("utils/module-merge").merge(legendViewModule, exports);
require("utils/module-merge").merge(axisModule, exports);
require("utils/module-merge").merge(labelStyleCommonModule, exports);
require("utils/module-merge").merge(seriesModule, exports);
require("utils/module-merge").merge(paletteCommonModule, exports);
require("utils/module-merge").merge(annotationModule, exports);
require("utils/module-merge").merge(cartesianChartGridCommonModule, exports);
require("utils/module-merge").merge(cartesianChartGridModule, exports);
require("utils/module-merge").merge(trackBallModule, exports);
var ChartDelegateImpl = (function (_super) {
    __extends(ChartDelegateImpl, _super);
    function ChartDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartDelegateImpl.new = function () {
        return _super.new.call(this);
    };
    ChartDelegateImpl.prototype.initWithOwner = function (owner) {
        this._owner = owner;
        return this;
    };
    ChartDelegateImpl.prototype.chartTrackballLabelForDatapointInSeries = function (chart, point, series) {
        if (this._owner instanceof commonModule.RadCartesianChart) {
            var cartesianChart = this._owner;
            if (cartesianChart.trackball) {
                var chartSeries = this._owner.series.getItem ? this._owner.series.getItem(series.index) : this._owner.series[series.index];
                var pointIndex = series.items.indexOfObject(point);
                var eventData = {
                    object: cartesianChart.trackball,
                    eventName: trackBallCommonModule.Trackball.trackBallContentRequestedEvent,
                    pointIndex: pointIndex,
                    seriesIndex: series.index,
                    series: chartSeries,
                    pointData: chartSeries.getItemAtIndex(pointIndex),
                    content: undefined
                };
                cartesianChart.trackball.notify(eventData);
                return eventData.content;
            }
        }
        return undefined;
    };
    ChartDelegateImpl.prototype.chartDidSelectSeries = function (chart, series) {
        var selectedSeries = null;
        for (var i = 0; i < this._owner.series.length; i++) {
            if (this._owner.series.getItem(i).ios.index == series.index) {
                selectedSeries = this._owner.series.getItem(i);
                break;
            }
        }
        var args = {
            eventName: commonModule.RadChartBase.seriesSelectedEvent,
            object: this._owner,
            series: selectedSeries,
            pointIndex: null,
            pointData: null
        };
        this._owner.notify(args);
    };
    ChartDelegateImpl.prototype.chartDidDeselectSeries = function (chart, series) {
        var deselectedSeries = null;
        for (var i = 0; i < this._owner.series.length; i++) {
            if (this._owner.series.getItem(i).ios.index == series.index) {
                deselectedSeries = this._owner.series.getItem(i);
                break;
            }
        }
        var args = {
            eventName: commonModule.RadChartBase.seriesDeselectedEvent,
            object: this._owner,
            series: deselectedSeries,
            pointIndex: null,
            pointData: null
        };
        this._owner.notify(args);
    };
    ChartDelegateImpl.prototype.chartDidSelectPointInSeriesAtIndex = function (chart, point, series, index) {
        var args = {
            eventName: commonModule.RadChartBase.pointSelectedEvent,
            object: this._owner,
            series: series,
            pointIndex: index,
            pointData: point
        };
        this._owner.notify(args);
    };
    ChartDelegateImpl.prototype.chartDidDeselectPointInSeriesAtIndex = function (chart, point, series, index) {
        var args = {
            eventName: commonModule.RadChartBase.pointDeselectedEvent,
            object: this._owner,
            series: series,
            pointIndex: index,
            pointData: point
        };
        this._owner.notify(args);
    };
    ChartDelegateImpl.prototype.chartDidZoom = function (chart) {
        var args = {
            eventName: commonModule.RadChartBase.chartZoomedEvent,
            object: this._owner,
            pointData: null,
            pointIndex: null,
            series: null
        };
        this._owner.notify(args);
    };
    ChartDelegateImpl.prototype.chartDidPan = function (chart) {
        var args = {
            eventName: commonModule.RadChartBase.chartPannedEvent,
            object: this._owner,
            pointData: null,
            pointIndex: null,
            series: null
        };
        this._owner.notify(args);
    };
    ChartDelegateImpl.prototype.chartTrackballDidTrackSelection = function (chart, selection) {
        var args = {
            eventName: commonModule.RadChartBase.trackballTrackedSelectionEvent,
            object: this._owner,
            selection: selection
        };
        this._owner.notify(args);
    };
    ChartDelegateImpl.prototype.chartPaletteItemForSeriesAtIndex = function (chart, series, index) {
        //check and return palette items if any for SELECTED state from top to low priority of property values
        if (series.isSelected &&
            (2 /* Series */ == series.selection ||
                0 /* None */ !== chart.seriesSelectionMode)) {
            return this._owner.getPaletteItemWithIndexForStateOfSeries("selected", series.index, series.tag);
        }
        if (series.pointIsSelected(index) &&
            (3 /* DataPoint */ == series.selection ||
                4 /* DataPointMultiple */ == series.selection)) {
            if (this._owner instanceof RadPieChart) {
                if (this._owner.chartSelectionPalette) {
                    return this._owner.chartSelectionPalette.items[index % this._owner.chartSelectionPalette.items.count];
                }
                else {
                    return null;
                }
            }
            return this._owner.getPaletteItemWithIndexForStateOfSeries("selected", series.index, series.tag);
        }
        //check and return palette items if any for NORMAL state
        var retVal = null;
        if (this._owner instanceof RadPieChart) {
            retVal = (this._owner.chartPalette) ? this._owner.chartPalette.items[index % this._owner.chartPalette.items.count] : null;
        }
        else {
            retVal = this._owner.getPaletteItemWithIndexForStateOfSeries("normal", series.index, series.tag);
        }
        return retVal;
    };
    ChartDelegateImpl.ObjCProtocols = [TKChartDelegate];
    return ChartDelegateImpl;
}(NSObject));
var RadPieChart = (function (_super) {
    __extends(RadPieChart, _super);
    function RadPieChart() {
        var _this = _super.call(this) || this;
        _this._loaded = false;
        _this._ios = TKChart.new();
        _this._ios.dataPointSelectionMode = 0 /* None */;
        _this._ios.seriesSelectionMode = 0 /* None */;
        _this._delegate = ChartDelegateImpl.new().initWithOwner(_this);
        _this._ios.allowAnimations = true;
        _this.updateLegend();
        return _this;
    }
    Object.defineProperty(RadPieChart.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    RadPieChart.prototype.addSeries = function (newSeries) {
        this.ios.removeAllData();
        this.ios.addSeries(newSeries);
        if (this.palettes) {
            this.loadPalette(this.palettes);
        }
        if (this.chartPalette) {
            this.series.getItem(0).ios.style.paletteMode = 1 /* UseItemIndex */;
            this.ios.legend.update();
        }
    };
    RadPieChart.prototype.createNativeView = function () {
        return this.ios;
    };
    RadPieChart.prototype.updateChart = function () {
        if (this._loaded) {
            this.ios.update();
        }
    };
    RadPieChart.prototype.updateLegend = function () {
        if (this._loaded && this.legend) {
            this.legend.updateLegendView(this);
        }
    };
    RadPieChart.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios.delegate = this._delegate;
        this._loaded = true;
        this.updateLegend();
    };
    RadPieChart.prototype.onUnloaded = function () {
        _super.prototype.onUnloaded.call(this);
        this._ios.delegate = null;
        this._loaded = false;
    };
    RadPieChart.prototype.onSeriesChanged = function (oldValue, newValue) {
        _super.prototype.onSeriesChanged.call(this, oldValue, newValue);
        if (oldValue) {
            for (var i = 0; i < oldValue.length; ++i) {
                oldValue[i].owner = undefined;
            }
        }
        if (this.series) {
            for (var i = 0; i < this.series.length; ++i) {
                this.series.getItem(i).owner = this;
                if (this.series.getItem(i).ios) {
                    this.addSeries(this.series.getItem(i).ios);
                }
            }
        }
        this.updateChart();
    };
    RadPieChart.prototype.onSelectionModeChanged = function (oldValue, newValue) {
        _super.prototype.onSelectionModeChanged.call(this, oldValue, newValue);
        if (!this.ios) {
            return;
        }
        if (newValue) {
            if (publicEnumModule.ChartSelectionMode.Single.toLowerCase() === newValue.toLowerCase()) {
                this.ios.seriesSelectionMode = 1 /* Single */;
            }
            else if (publicEnumModule.ChartSelectionMode.Multiple.toLowerCase() === newValue.toLowerCase()) {
                this.ios.seriesSelectionMode = 2 /* Multiple */;
            }
        }
        this.updateChart();
    };
    RadPieChart.prototype.onPalettesChanged = function (oldValue, newValue) {
        _super.prototype.onPalettesChanged.call(this, oldValue, newValue);
        if (newValue instanceof observable_array_1.ObservableArray) {
            var newPalettes = newValue;
            for (var i = 0; i < newPalettes.length; ++i) {
                newPalettes.getItem(i).owner = this;
            }
        }
        this.loadPalette(this.palettes);
        this.updateChart();
    };
    RadPieChart.prototype.reloadPalettes = function () {
        this.loadPalette(this.palettes);
        this.updateChart();
    };
    RadPieChart.prototype.loadPalette = function (newPalettes) {
        if (!this.ios || !this.series) {
            return;
        }
        if (newPalettes) {
            for (var i = 0; i < this.series.length; ++i) {
                var palettesForSeries = this.getPalettesForSeries(newPalettes, this.series.getItem(i));
                if (palettesForSeries.length > 0) {
                    this.applyPalettesToSeries(palettesForSeries, this.series.getItem(i));
                }
            }
        }
    };
    RadPieChart.prototype.PalettesCollectionChangedInternal = function (data) {
        this.loadPalette(this.palettes);
        this.updateChart();
    };
    RadPieChart.prototype.getPalettesForSeries = function (source, series) {
        var palettes = [];
        for (var i = 0; i < source.length; i++) {
            var palette = source.getItem(i);
            if (palette.seriesName === series[publicEnumModule.seriesName]) {
                palettes.push(palette);
            }
        }
        return palettes;
    };
    RadPieChart.prototype.applyPalettesToSeries = function (palette, series) {
        if (!series.ios) {
            return;
        }
        var selectionPalette, normalPalette;
        for (var i = 0; i < palette.length; ++i) {
            if (palette[i].seriesState && palette[i].seriesState.toLowerCase() === publicEnumModule.PaletteEntryUseState.Selected.toLowerCase()) {
                selectionPalette = palette[i];
            }
            else {
                normalPalette = palette[i];
            }
        }
        this.chartPalette = (normalPalette) ? this.buildNativePaletteForSeries(normalPalette, series) : null;
        this.chartSelectionPalette = (selectionPalette) ? this.buildNativePaletteForSeries(selectionPalette, series) : null;
        if (this.chartPalette && this.series && this.series.length > 0) {
            this.series.getItem(0).ios.style.paletteMode = 1 /* UseItemIndex */;
            this.ios.legend.update();
        }
    };
    RadPieChart.prototype.buildNativePaletteForSeries = function (palette, series) {
        var seriesPalette = TKChartPalette.new();
        var paletteEntry;
        var currentPaletteEntry;
        for (var i = 0; i < palette.entries.length; ++i) {
            currentPaletteEntry = (series.ios.style.palette) ? series.ios.style.palette.items[i % series.ios.style.palette.itemsCount] : null;
            paletteEntry = palette.entries.getItem(i);
            var stroke = TKStroke.new();
            if (!isNaN(paletteEntry.strokeWidth)) {
                stroke.width = paletteEntry.strokeWidth;
            }
            else {
                stroke.width = (currentPaletteEntry && currentPaletteEntry.stroke) ? currentPaletteEntry.stroke.width : 2;
            }
            if (paletteEntry.strokeColor) {
                stroke.color = (new color_1.Color(paletteEntry.strokeColor)).ios;
            }
            else {
                stroke.color = (currentPaletteEntry && currentPaletteEntry.stroke) ? currentPaletteEntry.stroke.color : (new color_1.Color("Black")).ios;
            }
            var solidFill = TKSolidFill.new();
            if (paletteEntry.fillColor) {
                solidFill.color = (new color_1.Color(paletteEntry.fillColor)).ios;
            }
            else {
                solidFill.color = (currentPaletteEntry && currentPaletteEntry.fill) ? currentPaletteEntry.fill.color : (new color_1.Color("Blue")).ios;
            }
            seriesPalette.addPaletteItem(TKChartPaletteItem.paletteItemWithStrokeAndFill(stroke, solidFill));
        }
        return seriesPalette;
    };
    RadPieChart.prototype.onSeriesSelectionModeChanged = function (oldValue, newValue) {
        if (!this.ios) {
            return;
        }
        if (newValue) {
            if (publicEnumModule.ChartSelectionMode.Single === newValue) {
                this.ios.seriesSelectionMode = 1 /* Single */;
            }
            else if (publicEnumModule.ChartSelectionMode.Multiple === newValue) {
                this.ios.seriesSelectionMode = 2 /* Multiple */;
            }
            else if (publicEnumModule.ChartSelectionMode.None === newValue) {
                this.ios.seriesSelectionMode = 0 /* None */;
            }
        }
    };
    RadPieChart.prototype.onPointSelectionModeChanged = function (oldValue, newValue) {
        if (!this.ios) {
            return;
        }
        if (newValue) {
            if (publicEnumModule.ChartSelectionMode.Single === newValue) {
                this.ios.dataPointSelectionMode = 1 /* Single */;
            }
            else if (publicEnumModule.ChartSelectionMode.Multiple === newValue) {
                this.ios.dataPointSelectionMode = 2 /* Multiple */;
            }
            else if (publicEnumModule.ChartSelectionMode.None === newValue) {
                this.ios.dataPointSelectionMode = 0 /* None */;
            }
        }
    };
    return RadPieChart;
}(commonModule.RadPieChart));
exports.RadPieChart = RadPieChart;
var RadCartesianChart = (function (_super) {
    __extends(RadCartesianChart, _super);
    function RadCartesianChart() {
        var _this = _super.call(this) || this;
        _this._ios = TKChart.new();
        _this._ios.dataPointSelectionMode = 0 /* None */;
        _this._ios.seriesSelectionMode = 0 /* None */;
        _this._ios.allowAnimations = true;
        _this._delegate = ChartDelegateImpl.new().initWithOwner(_this);
        _this._chartNormalPalettesMap = new Map();
        _this._chartSelectionPalettesMap = new Map();
        return _this;
    }
    Object.defineProperty(RadCartesianChart.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    RadCartesianChart.prototype.createNativeView = function () {
        return this.ios;
    };
    RadCartesianChart.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios.delegate = this._delegate;
        this._loaded = true;
    };
    RadCartesianChart.prototype.onUnloaded = function () {
        _super.prototype.onUnloaded.call(this);
        this._ios.delegate = null;
        this._loaded = false;
    };
    RadCartesianChart.prototype.updateChart = function () {
        if (this._loaded) {
            this.ios.update();
        }
    };
    RadCartesianChart.prototype.reloadPalettes = function () {
        this.loadPalette(this.palettes);
        this.updateChart();
    };
    RadCartesianChart.prototype.SeriesCollectionChangedInternal = function (data) {
        var curSeries;
        for (var i = 0; i < this.series.length; ++i) {
            curSeries = this.series.getItem(i);
            curSeries.owner = this;
            //in case of bar series we need to recreate the ios instance according to the owner structure
            if (curSeries instanceof seriesModule.BarSeries || curSeries instanceof seriesModule.RangeBarSeries) {
                curSeries['updateNative']();
            }
        }
        this.loadChart();
    };
    RadCartesianChart.prototype.onSeriesChanged = function (oldValue, newValue) {
        _super.prototype.onSeriesChanged.call(this, oldValue, newValue);
        if (oldValue) {
            for (var i = 0; i < oldValue.length; ++i) {
                oldValue.getItem(i).owner = undefined;
            }
        }
        if (this.series) {
            for (var i = 0; i < this.series.length; ++i) {
                this.series.getItem(i).owner = this;
            }
        }
        this.loadChart();
    };
    RadCartesianChart.prototype.addSeries = function (newSeries) {
        this.loadChart();
    };
    RadCartesianChart.prototype.getAxixByID = function (axisID) {
        return this.getAxisByID(axisID);
    };
    RadCartesianChart.prototype.getAxisByID = function (axisID) {
        if (this.horizontalAxis && this.horizontalAxis.id === axisID) {
            return this.horizontalAxis;
        }
        if (this.verticalAxis && this.verticalAxis.id === axisID) {
            return this.verticalAxis;
        }
        if (this.series) {
            var axes = void 0;
            for (var i = 0; i < this.series.length; ++i) {
                axes = this.series.getItem(i).horizontalAxis;
                if (axes && axes.id === axisID) {
                    return axes;
                }
                axes = this.series.getItem(i).verticalAxis;
                if (axes && axes.id === axisID) {
                    return axes;
                }
            }
        }
        return null;
    };
    RadCartesianChart.prototype.AnnotationsCollectionChangedInternal = function (data) {
        if (data.eventName && data.eventName.toLowerCase() === "change") {
            if (data.action && data.action.toLowerCase() === "add") {
                if (this.ios && this.annotations) {
                    for (var i = 0; i < data.addedCount; i++) {
                        this.ios.addAnnotation(this.annotations.getItem(data.index + i).ios);
                        this.annotations.getItem(data.index + i).owner = this;
                    }
                }
                return;
            }
            if (data.action && data.action.toLowerCase() === "splice") {
                for (var annIdx = 0; annIdx < data.removed.length; annIdx++) {
                    this.ios.removeAnnotation(data.removed[annIdx].ios);
                }
                return;
            }
        }
    };
    RadCartesianChart.prototype.onAnnotationsChanged = function (oldValue, newValue) {
        _super.prototype.onAnnotationsChanged.call(this, oldValue, newValue);
        if (oldValue) {
            for (var i = 0; i < oldValue.length; ++i) {
                oldValue[i].owner = undefined;
            }
        }
        if (this.annotations) {
            for (var i = 0; i < this.annotations.length; ++i) {
                this.annotations.getItem(i).owner = this;
            }
        }
        this.loadChart();
    };
    RadCartesianChart.prototype.onHorizontalAxisChanged = function (oldValue, newValue) {
        _super.prototype.onHorizontalAxisChanged.call(this, oldValue, newValue);
        //since label alignment requires info about horizontal or vertical the axis is, we set appropriate values here
        var theAxis = newValue;
        if (theAxis && theAxis.labelLayoutMode) {
            if (theAxis.labelLayoutMode.toLowerCase() === publicEnumModule.AxisLabelLayoutMode.Inner.toLowerCase()) {
                theAxis.ios.style.labelStyle.textAlignment = 4 /* Top */;
            }
            else {
                theAxis.ios.style.labelStyle.textAlignment = 8 /* Bottom */;
            }
        }
        //in case of oready added bar series we need to recreate the ios instance according to the owner structure
        if (this.series && this.series.length > 0) {
            for (var i = 0; i < this.series.length; ++i) {
                if (this.series.getItem(i) instanceof seriesModule.BarSeries || this.series.getItem(i) instanceof seriesModule.RangeBarSeries) {
                    this.series.getItem(i).updateNative();
                }
            }
        }
    };
    RadCartesianChart.prototype.onVerticalAxisChanged = function (oldValue, newValue) {
        _super.prototype.onVerticalAxisChanged.call(this, oldValue, newValue);
        var theAxis = newValue;
        if (theAxis && theAxis.labelLayoutMode) {
            if (theAxis.labelLayoutMode.toLowerCase() === publicEnumModule.AxisLabelLayoutMode.Inner.toLowerCase()) {
                theAxis.ios.style.labelStyle.textAlignment = 2 /* Right */;
            }
            else {
                theAxis.ios.style.labelStyle.textAlignment = 1 /* Left */;
            }
        }
        //in case of oready added bar series we need to recreate the ios instance according to the owner structure
        if (this.series && this.series.length > 0) {
            for (var i = 0; i < this.series.length; ++i) {
                if (this.series.getItem(i) instanceof seriesModule.BarSeries || this.series.getItem(i) instanceof seriesModule.RangeBarSeries) {
                    this.series.getItem(i).updateNative();
                }
            }
        }
    };
    RadCartesianChart.prototype.loadChart = function () {
        if (this.ios && this.series) {
            this.ios.removeAllData();
            if (this.horizontalAxis) {
                if (!this.horizontalAxis.verticalLocation) {
                    this.horizontalAxis.ios.position = 3 /* Bottom */;
                }
                this.ios.addAxis(this.horizontalAxis.ios);
                this.ios.xAxis = this.horizontalAxis.ios;
                this.horizontalAxis.owner = this;
            }
            if (this.verticalAxis) {
                if (!this.verticalAxis.horizontalLocation) {
                    this.verticalAxis.ios.position = 0 /* Left */;
                }
                this.ios.addAxis(this.verticalAxis.ios);
                this.ios.yAxis = this.verticalAxis.ios;
                this.verticalAxis.owner = this;
            }
            for (var i = 0; i < this.series.length; ++i) {
                if (this.series.getItem(i).ios) {
                    var axis = this.series.getItem(i).horizontalAxis;
                    if (axis) {
                        if (!this.ios.xAxis) {
                            this.ios.xAxis = axis.ios;
                        }
                        this.ios.addAxis(axis.ios);
                        axis.owner = this;
                    }
                    axis = this.series.getItem(i).verticalAxis;
                    if (axis) {
                        if (!this.ios.yAxis) {
                            this.ios.yAxis = axis.ios;
                        }
                        this.ios.addAxis(axis.ios);
                        axis.owner = this;
                    }
                    this.ios.addSeries(this.series.getItem(i).ios);
                }
            }
            if (this.horizontalZoom || this.verticalZoom) {
                this.updateZoom();
            }
            if (this.palettes) {
                for (var i = 0; i < this.series.length; ++i) {
                    if (this.series.getItem(i).ios) {
                        this.series.getItem(i).ios.tag = i; //tag will keep the number of series in current collection
                    }
                }
                this.loadPalette(this.palettes);
            }
            if (this.grid) {
                this.grid.applyGridStyle();
            }
            if (this.annotations) {
                for (var i = 0; i < this.annotations.length; ++i) {
                    if (this.annotations.getItem(i).ios && this.annotations.getItem(i).axisId) {
                        this.ios.addAnnotation(this.annotations.getItem(i).ios);
                    }
                }
            }
            this.ios.update();
        }
    };
    RadCartesianChart.prototype.updateZoom = function () {
        if (!this.horizontalZoom && !this.verticalZoom) {
            return;
        }
        if (this.horizontalZoom && this.horizontalAxis) {
            this.horizontalAxis.ios.zoom = this.horizontalZoom;
        }
        if (this.verticalZoom && this.verticalAxis) {
            this.verticalAxis.ios.zoom = this.verticalZoom;
        }
        if (this.series) {
            for (var i = 0; i < this.series.length; ++i) {
                if (this.series.getItem(i).ios) {
                    if (this.series.getItem(i).horizontalAxis && this.horizontalZoom) {
                        this.series.getItem(i).horizontalAxis.ios.zoom = this.horizontalZoom;
                    }
                    if (this.series.getItem(i).verticalAxis && this.verticalZoom) {
                        this.series.getItem(i).verticalAxis.ios.zoom = this.verticalZoom;
                    }
                }
            }
        }
    };
    RadCartesianChart.prototype.onGridChanged = function (oldValue, newValue) {
        if (newValue instanceof cartesianChartGridModule.RadCartesianChartGrid) {
            newValue.owner = this;
        }
    };
    RadCartesianChart.prototype.onPalettesChanged = function (oldValue, newValue) {
        _super.prototype.onPalettesChanged.call(this, oldValue, newValue);
        if (newValue instanceof observable_array_1.ObservableArray) {
            var newPalettes = newValue;
            for (var i = 0; i < newPalettes.length; ++i) {
                newPalettes.getItem(i).owner = this;
            }
        }
        this.loadPalette(this.palettes);
    };
    RadCartesianChart.prototype.PalettesCollectionChangedInternal = function (data) {
        this.loadPalette(this.palettes);
        this.updateChart();
    };
    RadCartesianChart.prototype.loadPalette = function (palettes) {
        if (!this.ios || !this.series) {
            return;
        }
        if (this.palettes && this.palettes.length > 0) {
            for (var i = 0; i < this.series.length; ++i) {
                var entriesForSeries = this.getPalettesForSeries(palettes, this.series.getItem(i));
                if (entriesForSeries.length > 0) {
                    this.applyPalettesToSeries(entriesForSeries, this.series.getItem(i));
                }
            }
        }
    };
    RadCartesianChart.prototype.getPalettesForSeries = function (source, series) {
        var palettes = [];
        for (var i = 0; i < source.length; i++) {
            var palette = source.getItem(i);
            if (palette.seriesName === series[publicEnumModule.seriesName]) {
                palettes.push(palette);
            }
        }
        return palettes;
    };
    RadCartesianChart.prototype.applyPalettesToSeries = function (palettes, series) {
        if (!series.ios) {
            return;
        }
        var selectionPalette, normalPalette;
        for (var i = 0; i < palettes.length; ++i) {
            if (palettes[i].seriesState && palettes[i].seriesState.toLowerCase() === publicEnumModule.PaletteEntryUseState.Selected.toLowerCase()) {
                selectionPalette = palettes[i];
            }
            else {
                normalPalette = palettes[i];
            }
        }
        var normal = (normalPalette) ? this.buildNativePaletteForSeries(normalPalette, series) : null;
        if (normal) {
            if (normal) {
                this._chartNormalPalettesMap.set(normalPalette.seriesName, normal);
            }
        }
        var tmp = (selectionPalette) ? this._chartSelectionPalettesMap.get(selectionPalette.seriesName) : null;
        if (!tmp) {
            var selection = (selectionPalette) ? this.buildNativePaletteForSeries(selectionPalette, series) : null;
            if (selection) {
                this._chartSelectionPalettesMap.set(selectionPalette.seriesName, selection);
            }
        }
    };
    RadCartesianChart.prototype.buildNativePaletteForSeries = function (palette, series) {
        var seriesPalette = TKChartPalette.new();
        var paletteEntry;
        var currentPaletteEntry;
        for (var i = 0; i < palette.entries.length; ++i) {
            currentPaletteEntry = (series.ios.style.palette) ? series.ios.style.palette.items.objectAtIndex(i % series.ios.style.palette.itemsCount) : null;
            paletteEntry = palette.entries.getItem(i);
            var stroke = TKStroke.new();
            if (!isNaN(paletteEntry.strokeWidth)) {
                stroke.width = paletteEntry.strokeWidth;
            }
            else {
                stroke.width = (currentPaletteEntry && currentPaletteEntry.stroke) ? currentPaletteEntry.stroke.width : 2;
            }
            if (paletteEntry.strokeColor) {
                stroke.color = (new color_1.Color(paletteEntry.strokeColor)).ios;
            }
            else {
                stroke.color = (currentPaletteEntry && currentPaletteEntry.stroke) ? currentPaletteEntry.stroke.color : (new color_1.Color("Black")).ios;
            }
            var solidFill = TKSolidFill.new();
            if (paletteEntry.fillColor) {
                solidFill.color = (new color_1.Color(paletteEntry.fillColor)).ios;
            }
            else {
                solidFill.color = (currentPaletteEntry && currentPaletteEntry.fill) ? currentPaletteEntry.fill.color : (new color_1.Color("Blue")).ios;
            }
            seriesPalette.addPaletteItem(TKChartPaletteItem.paletteItemWithStrokeAndFill(stroke, solidFill));
        }
        return seriesPalette;
    };
    /** Finds the corresponding palette item for selected series
     * @param nativeIndex - the index of series in native control
     * @param seriesIndex - the index of series in {N} chart's series collection
     */
    RadCartesianChart.prototype.getPaletteItemWithIndexForStateOfSeries = function (state, nativeIndex, seriesIndex) {
        var item = null;
        var map = (state === "selected") ? this._chartSelectionPalettesMap : this._chartNormalPalettesMap;
        var palette = (this.series.getItem(seriesIndex)) ? map.get(this.series.getItem(seriesIndex).seriesName) : null;
        var groupName = this.series.getItem(seriesIndex).seriesName;
        if (palette) {
            //find the series' consequent number in group of series with the same seriesName value
            var itemIndex = 0;
            var seriesName = void 0;
            for (var i = 0; i < this.series.length; ++i) {
                seriesName = this.series.getItem(i).seriesName;
                if (seriesName === groupName && this.series.getItem(i).ios && this.series.getItem(i).ios.index < nativeIndex) {
                    itemIndex++;
                }
            }
            item = palette.items[itemIndex % palette.items.count];
        }
        return item;
    };
    RadCartesianChart.prototype.onSelectionModeChanged = function (oldValue, newValue) {
        _super.prototype.onSelectionModeChanged.call(this, oldValue, newValue);
        if (!this.ios) {
            return;
        }
        if (newValue) {
            var newVal = newValue.toLowerCase();
            if (publicEnumModule.ChartSelectionMode.Single.toLowerCase() === newVal) {
                this.ios.seriesSelectionMode = 1 /* Single */;
            }
            else if (publicEnumModule.ChartSelectionMode.Multiple.toLowerCase() === newVal) {
                this.ios.seriesSelectionMode = 2 /* Multiple */;
            }
        }
    };
    RadCartesianChart.prototype.onSeriesSelectionModeChanged = function (oldValue, newValue) {
        if (!this.ios) {
            return;
        }
        if (newValue) {
            switch (newValue.toLowerCase()) {
                case publicEnumModule.ChartSelectionMode.Single.toLowerCase():
                    this.ios.seriesSelectionMode = 1 /* Single */;
                    break;
                case publicEnumModule.ChartSelectionMode.Multiple.toLowerCase():
                    this.ios.seriesSelectionMode = 2 /* Multiple */;
                    break;
                case publicEnumModule.ChartSelectionMode.None.toLowerCase():
                    this.ios.seriesSelectionMode = 0 /* None */;
                    break;
            }
        }
    };
    RadCartesianChart.prototype.onPointSelectionModeChanged = function (oldValue, newValue) {
        if (!this.ios) {
            return;
        }
        if (newValue) {
            switch (newValue.toLowerCase()) {
                case publicEnumModule.ChartSelectionMode.Single.toLowerCase():
                    this.ios.dataPointSelectionMode = 1 /* Single */;
                    break;
                case publicEnumModule.ChartSelectionMode.Multiple.toLowerCase():
                    this.ios.dataPointSelectionMode = 2 /* Multiple */;
                    break;
                case publicEnumModule.ChartSelectionMode.None.toLowerCase():
                    this.ios.dataPointSelectionMode = 0 /* None */;
                    break;
            }
        }
    };
    RadCartesianChart.prototype.onHorizontalZoomChanged = function (oldValue, newValue) {
        if (!this.ios) {
            return;
        }
        if (!isNaN(+newValue) && newValue > 1) {
            this.updateZoom();
        }
        else {
            console.log("WARNING: Horizontal zoom must be a number greater or equal to 1");
        }
    };
    RadCartesianChart.prototype.onVerticalZoomChanged = function (oldValue, newValue) {
        if (!this.ios) {
            return;
        }
        if (!isNaN(+newValue) && newValue > 1) {
            this.updateZoom();
        }
        else {
            console.log("WARNING: Vertical zoom must be a number greater or equal to 1");
        }
    };
    RadCartesianChart.prototype.onTrackballChanged = function (oldValue, newValue) {
        _super.prototype.onTrackballChanged.call(this, oldValue, newValue);
        if (newValue && (newValue instanceof trackBallCommonModule.Trackball)) {
            this.ios.allowTrackball = true;
            this.trackball.ios = this.ios.trackball;
        }
        else {
            this.ios.allowTrackball = false;
        }
    };
    __decorate([
        Deprecated,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", axisCommonModule.CartesianAxis)
    ], RadCartesianChart.prototype, "getAxixByID", null);
    return RadCartesianChart;
}(commonModule.RadCartesianChart));
exports.RadCartesianChart = RadCartesianChart;
