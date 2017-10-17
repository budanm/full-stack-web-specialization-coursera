Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Font styles
 */
var FontStyles;
(function (FontStyles) {
    FontStyles.Normal = "Normal";
    FontStyles.Bold = "Bold";
    FontStyles.Italic = "Italic";
    FontStyles.BoldItalic = "BoldItalic";
})(FontStyles = exports.FontStyles || (exports.FontStyles = {}));
/*
* Lists the possible ways a DateTime value can be interpreted
* in the context of an axis.
*/
var DateTimeComponent;
(function (DateTimeComponent) {
    DateTimeComponent.Second = "Second";
    DateTimeComponent.Minute = "Minute";
    DateTimeComponent.Hour = "Hour";
    DateTimeComponent.Day = "Day";
    DateTimeComponent.Week = "Week";
    DateTimeComponent.Month = "Month";
    DateTimeComponent.Year = "Year";
})(DateTimeComponent = exports.DateTimeComponent || (exports.DateTimeComponent = {}));
/**
 * Defines whether a single or multiple items (series or points) can be selected in chart.
 */
var ChartSelectionMode;
(function (ChartSelectionMode) {
    /**
     *  Only a single item (series or point) can be selected at a time.
     */
    ChartSelectionMode.Single = "Single";
    /**
     * Multiple series/points can be selected.
     */
    ChartSelectionMode.Multiple = "Multiple";
    /**
     * Selection disabled.
     */
    ChartSelectionMode.None = "None";
})(ChartSelectionMode = exports.ChartSelectionMode || (exports.ChartSelectionMode = {}));
;
var ChartAnnotationZPosition;
(function (ChartAnnotationZPosition) {
    /**
    * The annotation is rendered below the series (default).
    */
    ChartAnnotationZPosition.BelowSeries = "BelowSeries";
    /**
    * The annotation is rendered above the series.
    */
    ChartAnnotationZPosition.AboveSeries = "AboveSeries";
})(ChartAnnotationZPosition = exports.ChartAnnotationZPosition || (exports.ChartAnnotationZPosition = {}));
/*
* Lists the possible use cases for palette entries.
*/
var PaletteEntryUseState;
(function (PaletteEntryUseState) {
    /**
     * The palette entry will be used when the series is not selected
     */
    PaletteEntryUseState.Normal = "Normal";
    /**
     * The palette entry will be used when the series is selected
     */
    PaletteEntryUseState.Selected = "Selected";
})(PaletteEntryUseState = exports.PaletteEntryUseState || (exports.PaletteEntryUseState = {}));
var TrackballSnapMode;
(function (TrackballSnapMode) {
    /**
     Only the closest point is selected.
     */
    TrackballSnapMode.ClosestPoint = "ClosestPoint";
    /**
     All points within the specified range are selected.
     */
    TrackballSnapMode.AllClosestPoints = "AllClosestPoints";
})(TrackballSnapMode = exports.TrackballSnapMode || (exports.TrackballSnapMode = {}));
/*
* Lists the possible values for label fit modes
*/
var AxisLabelFitMode;
(function (AxisLabelFitMode) {
    AxisLabelFitMode.None = "None";
    AxisLabelFitMode.Multiline = "Multiline";
    AxisLabelFitMode.Rotate = "Rotate";
})(AxisLabelFitMode = exports.AxisLabelFitMode || (exports.AxisLabelFitMode = {}));
/*
* Lists the possible axis label layout  modes.
*/
var AxisLabelLayoutMode;
(function (AxisLabelLayoutMode) {
    AxisLabelLayoutMode.Outer = "Outer";
    AxisLabelLayoutMode.Inner = "Inner";
})(AxisLabelLayoutMode = exports.AxisLabelLayoutMode || (exports.AxisLabelLayoutMode = {}));
/*
* Lists the possible location for a horizontal axis.
*/
var AxisHorizontalLocation;
(function (AxisHorizontalLocation) {
    AxisHorizontalLocation.Left = "Left";
    AxisHorizontalLocation.Right = "Right";
})(AxisHorizontalLocation = exports.AxisHorizontalLocation || (exports.AxisHorizontalLocation = {}));
/*
* Lists the possible locations for a vertical axis.
*/
var AxisVerticalLocation;
(function (AxisVerticalLocation) {
    AxisVerticalLocation.Top = "Top";
    AxisVerticalLocation.Bottom = "Bottom";
})(AxisVerticalLocation = exports.AxisVerticalLocation || (exports.AxisVerticalLocation = {}));
/*
* Lists the possible axis plot modes.
*/
var AxisPlotMode;
(function (AxisPlotMode) {
    AxisPlotMode.BetweenTicks = "BetweenTicks";
    AxisPlotMode.OnTicks = "OnTicks";
    //  OnTicksPadded //NOTE: not supported in iOS
})(AxisPlotMode = exports.AxisPlotMode || (exports.AxisPlotMode = {}));
/*
* Defines the different places where the legend can be positioned.
*/
var ChartLegendPosition;
(function (ChartLegendPosition) {
    ChartLegendPosition.Left = "Left"; // The legend is positioned at the left side of the chart.
    ChartLegendPosition.Right = "Right"; // The legend is positioned at the right side of the chart.
    ChartLegendPosition.Top = "Top"; // The legend is positioned at the top side of the chart.
    ChartLegendPosition.Bottom = "Bottom"; // The legend is positioned at the bottom side of the chart.
    ChartLegendPosition.Floating = "Floating"; // The legend is floating.
})(ChartLegendPosition = exports.ChartLegendPosition || (exports.ChartLegendPosition = {}));
/*
* Defines the offset origin in case of Floating legend position.
*/
var ChartLegendOffsetOrigin;
(function (ChartLegendOffsetOrigin) {
    ChartLegendOffsetOrigin.TopLeft = "TopLeft"; // The offset is relative to the top left corner.
    ChartLegendOffsetOrigin.TopRight = "TopRight"; // The offset is relative to the top right corner.
    ChartLegendOffsetOrigin.BottomLeft = "BottomLeft"; // The offset is relative to the bottom left corner.
    ChartLegendOffsetOrigin.BottomRight = "BottomRight"; // The offset is relative to the bottom right corner.
})(ChartLegendOffsetOrigin = exports.ChartLegendOffsetOrigin || (exports.ChartLegendOffsetOrigin = {}));
/*
* Defines the known properties that are collections. This is used by the XML parser.
*/
var knownCollections;
(function (knownCollections) {
    knownCollections.series = "series";
    knownCollections.entries = "entries";
    knownCollections.palettes = "palettes";
    knownCollections.annotations = "annotations";
})(knownCollections = exports.knownCollections || (exports.knownCollections = {}));
exports.seriesName = "seriesName";
