import { ObservableArray } from "tns-core-modules/data/observable-array";
import { View, ViewBase, Property } from "tns-core-modules/ui/core/view";
import { EventData } from "tns-core-modules/data/observable";

/**
* This class is a base for all types of charts. It provides common properties
* like {@link palette} and {@link legend}.
*/
declare class RadChartBase extends View {

    /**
    * This event is fired after selecting a series.
    * The event exposes an instance of the {@link ChartEventData} class.
    */
    static seriesSelectedEvent: string;

    /**
    * This event is fired after deselecting a series.
    * The event exposes an instance of the {@link ChartEventData} class.
    */
    static seriesDeselectedEvent: string;

    /**
    * This event is fired after selecting a point in series.
    * The event exposes an instance of the {@link ChartEventData} class.
    */
    static pointSelectedEvent: string;

    /**
    * This event is fired after deselecting a point in series.
    * The event exposes an instance of the {@link ChartEventData} class.
    */
    static pointDeselectedEvent: string;

    /**
    * This event is fired after zooming the chart.
    * The event exposes an instance of the {@link ChartEventData} class.
    */
    static chartZoomFinishedEvent: string;

    /**
    * This event is fired after panning the chart.
    * The event exposes an instance of the {@link ChartEventData} class.
    */
    static chartPanFinishedEvent: string;

    /**
    * This event is fired after trackball tracks selection.
    * The event exposes an instance of the {@link TrackballSelection} class.
    */
    static trackballTrackedSelectionEvent: string;

    /**
    * Identifies the {@link legend} dependency property.
    */
    public static legendProperty: Property<RadChartBase, RadLegendView>;

    /**
    * Identifies the {@link palette} dependency property.
    */
    public static palettesProperty: Property<RadChartBase, ObservableArray<Palette>>;

    /**
    * Identifies the {@link annotations} dependency property.
    */
    public static annotationsProperty: Property<RadChartBase, ObservableArray<any>>;

    /**
    * Identifies the series dependency property.
    */
    public static seriesProperty: Property<RadChartBase, ObservableArray<any>>;

    /**
     * Identifies the selectionMode dependency property.
     */
    public static selectionModeProperty: Property<RadChartBase, string>;

    /**
     * Identifies the series selection dependency property.
     */
    public static seriesSelectionModeProperty: Property<RadChartBase, string>;

    /**
     * Identifies the data point selection dependency property.
     */
    public static pointSelectionModeProperty: Property<RadChartBase, string>;

    /**
    * Gets or sets the series collection associated with this chart.
    */
    series: ObservableArray<any>;

    /**
    * Gets or sets the palettes collection associated with this chart.
    */
    palettes: ObservableArray<Palette>;

    /**
     * Gets or sets the collection with chart annotations.
     */
    annotations: ObservableArray<CartesianChartAnnotation>;

    /**
    * Gets or sets an instance of the {@link RadLegendView} class representing
    * the legend associated with this class.
    */
    legend: RadLegendView;

    /**
     * Gets or sets the selection mode of chart. Use values exported from {@link ChartSelectionMode}.
     * NOTE: This property is deprecated. Use {@link seriesSelectionMode} instead.
     */
    selectionMode: string;

    /**
     * Gets or sets the selection mode of series in chart. Use values exported from {@link SeriesSelectionMode}.
     */
    seriesSelectionMode: string;

    /**
     * Gets or sets the selection mode for datapoints of series in chart. Use values exported from {@link ChartSelectionMode}.
     */
    pointSelectionMode: string;

    /**
     * [Deprecated: Please use the getAxisByID() instead].
     */
    public getAxixByID(axisID: string): CartesianAxis;

    /**
     * Returns the CartesianAxis with an 'id' that matches the provided string.
     */
    public getAxisByID(axisID: string): CartesianAxis;
}

/*
* Lists the possible stack modes for chart series.
*/
export module SeriesStackMode {
    /**
     * Series are not stacked
     * */
    export var None;
    /**
     *  Stack series
     */
    export var Stack;
    /**
     * Stack series up to 100%.
     * */
    export var Stack100;
}

/**
 * Font styles
 */
export module FontStyles {
    /**
     * Regular font style
     */
    export var Normal;
    /**
     * Bold font style
     */
    export var Bold;
    /**
     * Italic font style
     */
    export var Italic;
    /**
     * Combine Bold and Italic styles
     */
    export var BoldItalic;
}

/**
 * Defines available selection modes for series
 */
declare module SeriesSelectionMode {
    /**
     * Series selection disabled.
     */
    export var None;
    /**
     * Series selection not set. The selection mode set to chart will be used.
     */
    export var NotSet;
    /**
     * Select the whole series.
     */
    export var Series;
    /**
     * Select a single data point.
     */
    export var DataPoint;
    /**
     * Select multiple points.
     */
    export var DataPointMultiple;
}

/**
 * Defines whether a single or multiple items (series or points) can be selected in chart.
 */
export module ChartSelectionMode {
    /**
     *  Only a single item (series or point) can be selected at a time.
     */
    export var Single;
    /**
     * Multiple series/points can be selected.
     */
    export var Multiple;

    /**
     * Selection disabled.
     */
    export var None;
}

declare module TrackballSnapMode {
    /**
    * Only the closest point is selected.
    */
    var ClosestPoint;

    /**
    * All points within the specified range are selected.
    */
    var AllClosestPoints;
}

/*
* Defines the different places where the legend can be positioned.
*/
declare module ChartLegendPosition {
    /**
     * The legend is positioned at the left side of the chart.
     */
    var Left: string;
    /**
     * The legend is positioned at the right side of the chart.
     */
    var Right: string;
    /**
     * The legend is positioned at the top side of the chart.
     */
    var Top: string;
    /**
     * The legend is positioned at the bottom side of the chart.
     */
    var Bottom: string;
    /**
     * The legend is floating. The default offset origin for this mode is TopLeft with offset values (0,0).
     */
    var Floating: string;
}

/*
* Defines the offset origin in case of Floating legend position.
*/
declare module ChartLegendOffsetOrigin {
    /**
     * The offset is relative to the top left corner.
     */
    var TopLeft: string;
    /**
     * The offset is relative to the top right corner.
     */
    var TopRight: string;
    /**
     * The offset is relative to the bottom left corner.
     */
    var BottomLeft: string;
    /**
     * The offset is relative to the bottom right corner.
     */
    var BottomRight: string;
}

/*
* Lists the possible use cases for palette entries.
*/
export module PaletteEntryUseState {
    /**
     * The palette entry will be used when the series is not selected
     */
    var Normal: string;
    /**
     * The palette entry will be used when the series is selected
     */
    var Selected: string;
}

/**
* This class represents the Chart legend. You can use this class to show a legend
* in your chart, as well as customize its behavior.
*/
declare class RadLegendView extends View {

    /**
     * Identifies the enableSelection dependency property.
     */
    public static enableSelectionProperty: Property<RadLegendView, boolean>;

    /**
    * Identifies the position dependency property.
    */
    public static positionProperty: Property<RadLegendView, string>;

    /**
    * Identifies the offsetOrigin dependency property.
    */
    public static offsetOriginProperty: Property<RadLegendView, string>;

    /**
    * Identifies the horizontalOffset dependency property.
    */
    public static horizontalOffsetProperty: Property<RadLegendView, number>;

    /**
    * Identifies the verticalOffset dependency property.
    */
    public static verticalOffsetProperty: Property<RadLegendView, number>;

    /**
    * Identifies the legend title dependency property.
    */
    public static titleProperty: Property<RadLegendView, string>;

    /**
    * Identifies the legend title font size dependency property.
    */
    public static titleSizeProperty: Property<RadLegendView, number>;

    /**
    * Identifies the legend title color dependency property.
    */
    public static titleColorProperty: Property<RadLegendView, string>;

    /**
     * Determines if selecting a legend item will automatically select the corresponding
     * data-point or series in the Chart depending on the current selection settings.
     * true if automatic selection should occur, otherwise false. The default
     * value of this property is false.
     */
    enableSelection: boolean;

    /**
     *  Gets or sets the font size for the legend title. The value must
     * be in device independent pixels.
     */
    titleSize: number;

    /**
     *  Gets or sets the title color of the legend title.
     */
    titleColor: number;

    /**
     *  The title of the legend.
     */
    title: string;

    /**
     *  The position of the legend. Use values exported from {@link ChartLegendPosition}.
     */
    position: string;

    /**
     *  The starting point for the horizontal and vertical offset properties. Use values exported from {@link ChartLegendOffsetOrigin}.
     */
    offsetOrigin: string;

    /**
     * The horizontal offset from starting point specified by offsetOrigin property.
     */
    horizontalOffset: number;

    /**
     * The vertical offset from starting point specified by offsetOrigin property.
     */
    verticalOffset: number;
}

/**
* Represents a Cartesian Chart that uses the cartesian coordinate system to plot
* the data point values.
*/
declare class RadCartesianChart extends RadChartBase {
    android: any;
    ios: any;

    /**
    * Identifies the {@link horizontalAxis} dependency property.
    */
    public static horizontalAxisProperty: Property<RadCartesianChart, CartesianAxis>;

    /**
    * Identifies the {@link verticalAxis} dependency property.
    */
    public static verticalAxisProperty: Property<RadCartesianChart, CartesianAxis>;

    /**
    * Identifies the {@link grid} dependency property.
    */
    public static gridProperty: Property<RadCartesianChart, RadCartesianChartGrid>;

    /**
    * Identifies the {@link verticalZoom} dependency property.
    */
    public static verticalZoomProperty: Property<RadCartesianChart, number>;

    /**
    * Identifies the {@link horizontalZoom} dependency property.
    */
    public static horizontalZoomProperty: Property<RadCartesianChart, number>;

    /**
    * Identifies the {@link trackballProperty} dependency property.
    */
    public static trackballProperty: Property<RadCartesianChart, Trackball>;

    /**
    * Gets or sets the horizontal axis associated with this chart.
    */
    horizontalAxis: CartesianAxis;

    /**
    * Gets or sets the vertical axis associated with this chart.
    */
    verticalAxis: CartesianAxis;

    /**
    * Gets or sets the grid associated with this chart.
    */
    grid: RadCartesianChartGrid;

    /**
    * Gets or sets the vertical zoom level for chart.
    */
    verticalZoom: number;

    /**
    * Gets or sets the horizontal zoom level for chart.
    */
    horizontalZoom: number;

    /**
    * Gets or sets the trackball for the chart.
    */
    trackball: Trackball;
}

/**
* Represents a chart that visualizes its values as a slices of a pie. Depending on the
* associated series the values are visualized as a standard pie or a doughnut.
*/
declare class RadPieChart extends RadChartBase {
}

/**
* Represents chart's trackball. It can display a vertical line across the chart plot area
* and also display visual indicators (rectangle by default) at points where the trackball
* line crosses the visualization of a series object.
*/
declare class Trackball extends ViewBase {

    /**
     * Fired when the {@link Trackball} is about to be displayed. Can be used to provide a custom
     * content for the trackball. If custom content is defined, the default appearance of the trackball
     * for the current series changes. The event arguments are an instance of the {@link TrackballCustomContentData} class.
     */
    static trackBallContentRequestedEvent: string 

    /**
    * Identifies the snap mode of the trackball.
    */
    static snapModeProperty: Property<Trackball, string>;

    /**
    * Gets or sets the snap mode of the trackball.
    */
    snapMode: string;

    /**
     * Determines if intersection points should be rendered.
     */
    static showIntersectionPointsProperty: Property<Trackball, boolean>;

    /**
     * Gets or sets intersection points rendering of the trackball.
     */
    showIntersectionPoints: boolean;
}
/**
* A base class for all cartesian axes.
*/
declare class CartesianAxis extends ViewBase {

    /**
     * Identifies the id dependency property of each axis.
     */
    public static idProperty: Property<CartesianAxis, string>;

    /**
    * Identifies the horizontalLocation dependency property.
    */
    public static horizontalLocationProperty: Property<CartesianAxis, any>;

    /**
    * Identifies the verticalLocation dependency property.
    */
    public static verticalLocationProperty: Property<CartesianAxis, string>;

    /**
    * Identifies the labelSize dependency property.
    */
    public static labelSizeProperty: Property<CartesianAxis, any>;

    /**
    * Identifies the labelFormat dependency property.
    */
    public static labelFormatProperty: Property<CartesianAxis, any>;

    /**
    * Identifies the labelMargin dependency property.
    */
    public static labelMarginProperty: Property<CartesianAxis, any>;

    /**
    * Identifies the labelRotationAngle dependency property.
    */
    public static labelRotationAngleProperty: Property<CartesianAxis, any>;

    /**
    * Identifies the labelFitMode dependency property.
    */
    public static labelFitModeProperty: Property<CartesianAxis, any>;

    /**
    * Identifies the labelLayoutMode dependency property.
    */
    public labelLayoutModeProperty: Property<CartesianAxis, any>;

    /**
    * Identifies the labelTextColor dependency property.
    */
    public static labelTextColorProperty: Property<CartesianAxis, string>;

    /**
    * Identifies the lineColor dependency property.
    */
    public static lineColorProperty: Property<CartesianAxis, string>;

    /**
    * Identifies the lineThickness dependency property.
    */
    public static lineThicknessProperty: Property<CartesianAxis, number>;

    /**
    * Identifies the lineHidden dependency property.
    */
    public static lineHiddenProperty: Property<CartesianAxis, boolean>;

    /**
    * Identifies the allowPan dependency property.
    */
    public static allowPanProperty: Property<CartesianAxis, boolean>;

    /**
    * Identifies the allowZoom dependency property.
    */
    public static allowZoomProperty: Property<CartesianAxis, boolean>;

    /**
    * Identifies the hidden dependency property.
    */
    public static hiddenProperty: Property<CartesianAxis, boolean>;


    /**
     * Gets or sets the id for this axis.
     */
    id: string;

    /**
    * Gets or sets the horizontal location of the axis. Use values exported from {@link AxisHorizontalLocation}.
    */
    horizontalLocation: string;

    /**
    * Gets or sets the vertical location of the axis. Use values exported from {@link AxisVerticalLocation}.
    */
    verticalLocation: string;

    /**
    * Gets or sets the size of the text labels displayed by the axis.
    */
    labelSize: number

    /**
    * Gets or sets the format of the labels displayed by the axis.
    */
    labelFormat: string;

    /**
    * Gets or sets the margin of axis label.
    */
    labelMargin: number;

    /**
     * Gets or sets the rotation angle for axis labels. Requires "Rotation" fit mode for labelFitMode property to be set.
     */
    labelRotationAngle: number;

    /**
     * Gets or sets the fit mode for axis labels. Use exported values from {@link AxisLabelFitMode}.
     */
    labelFitMode: string;

    /**
     * Gets or sets the layout mode for axis labels. Use exported values from {@link AxisLabelLayoutMode}.
     */
    labelLayoutMode: string;

    /**
    * Gets or sets the color of the labels displayed by the chart.
    */
    labelTextColor: string;

    /**
    * Gets or sets the color of the axis line.
    */
    lineColor: string;

    /**
    * Gets or sets the thickness of the axis line.
    */
    lineThickness: number;

    /**
    * Gets or sets if the axis line is hidden.
    */
    lineHidden: boolean;

    /**
    * Enables the pan gesture on the axis.
    */
    allowPan: boolean;

    /**
    * Enables chart zoom gesture on the axis.
    */
    allowZoom: boolean;

    /**
    * Gets or sets the visibility status of axis.
    */
    hidden: boolean;

    ios: any;

}

/*
* The possible values for label fit modes
*/
declare module AxisLabelFitMode {
    /**
     * The default single line mode
     */
    var None: string;
    /**
     * Axis labels are on multiple lines.
     */
    var Multiline: string;
    /**
     * Axis labels are rotated. Use labelRotationAngle to set the corresponding rotation angle.
     */
    var Rotate: string;
}

/*
 * The possible values for axis labels layout mode
 */
declare module AxisLabelLayoutMode {
    /*
     * The labels will be outside for the chart. Otherwise said, for horizontal axis the label will be on bottom and for vertical on right side of axis.
     */
    var Outer: string;
    /*
     * The labels will be inside of the chart. Otherwise said, for horizontal axis the label will be on top and for vertical on left side of axis.
     */
    var Inner: string;
}


/**
* Lists the possible location values for the horizontal positioning of a vertical axis.
*/
declare module AxisHorizontalLocation {
    /**
    * The axis is positioned at the left side of the plotting area.
    */
    var Left: string;

    /**
    * The axis is positioned at the right side of the plotting area.
    */
    var Right: string;
}

/**
* Lists the possible location values for the vertical positioning of a horizontal axis.
*/
declare module AxisVerticalLocation {
    /**
    * The axis is positioned at the top of the plotting area.
    */
    var Top: string;

    /**
    * The axis is positioned at the bottom of the plotting area.
    */
    var Bottom: string;
}

/**
* Lists the possible axis plot modes.
*/
declare module AxisPlotMode {
    /**
    * Data points are plotted between the ticks.
    */
    var BetweenTicks: string;

    /**
    * Data points are plotted on the ticks.
    */
    var OnTicks: string;
}

/**
* Lists the possible ways a DateTime value can be interpreted
* in the context of an axis.
*/
declare module DateTimeComponent {

    /**
    * The 'seconds' value of the DateTime object will be considered.
    */
    var Second: string;

    /**
    * The 'minutes' value of the DateTime object will be considered.
    */
    var Minute: string;

    /**
    * The 'hours' value of the DateTime object will be considered.
    */
    var Hour: string;

    /**
    * The 'days' value of the DateTime object will be considered.
    */
    var Day: string;

    /**
    * The 'weeks' value of the DateTime object will be considered.
    */
    var Week: string;

    /**
    * The 'months' value of the DateTime object will be considered.
    */
    var Month: string;

    /**
    * The 'years' value of the DateTime object will be considered.
    */
    var Year: string;
}

/**
* Represents a linear axis within a cartesian chart. A Linear axis plots its values
* according to the datapoint relative position between a minimum and a maximum.
*/
declare class LinearAxis extends CartesianAxis {
    /**
    * Creates an instance of the {@link LinearAxis} class.
    */
    constructor();

    /**
    * Identifies the minimum dependency property.
    */
    public static minimumProperty: Property<LinearAxis, any>;

    /**
    * Identifies the maximum dependency property.
    */
    public static maximumProperty: Property<LinearAxis, any>;

    /**
    * Identifies the majorStep dependency property.
    */
    public static majorStepProperty: Property<LinearAxis, string>;

    /**
    * Gets or sets a user-defined minimum for the axis.
    * In case of linear axis with numeric values you should use number as a value.
    * In case of DateTimeCategoricalAxis or DateTimeContinuousAxis axis you can specify the minimum value as string in format "dd/MM/yyyy" or with a Date object.
    */
    minimum: any;

    /**
    * Gets or sets a user-defined maximum for the axis.
    * In case of linear axis with numeric values you should use number as a value.
    * In case of DateTimeCategoricalAxis or DateTimeContinuousAxis axis you can specify the minimum value as string in format "dd/MM/yyyy" or with a Date object.
    */
    maximum: any;

    /**
    * Gets or sets major tick mark frequency for the axis.
    * In case of DateTimeContinuousAxis you should use values exported from module {@link DateTimeComponent}.
    */
    majorStep: string;
}

/**
* Represents a categorical axis within a cartesian chart.
*/
declare class CategoricalAxis extends CartesianAxis {

    /**
    * Creates an instance of the {@link CategoricalAxis} class.
    */
    constructor();

    /**
    * Identifies the plotMode dependency property.
    */
    public static plotModeProperty: Property<CategoricalAxis, string>;

    /**
    * Identifies the majorTickInterval dependency property.
    */
    public static majorTickIntervalProperty: Property<CategoricalAxis, number>;

    /**
    * Gets or sets the major tick interval.
    */
    majorTickInterval: number;

    /**
    * Gets or sets plot mode for the axis. Use values exported from {@link AxisPlotMode}.
    */
    plotMode: string;
}

/**
* Represents a date-time categorical axis  within a cartesian chart.
* This axis type inherits all properties from {@link CategoricalAxis}.
*/
declare class DateTimeCategoricalAxis extends CategoricalAxis {

    /**
    * Creates an instance of the {@link DateTimeCategoricalAxis} class.
    */
    constructor();

    /**
    * Identifies the dateTimeComponent dependency property.
    */
    public static dateTimeComponentProperty: Property<DateTimeCategoricalAxis, string>;

    /**
    * Identifies the dateFormat dependency property.
    */
    public static dateFormatProperty: Property<DateTimeCategoricalAxis, string>;

    /**
    * Gets or sets the date display format string for axes labels.
    */
    dateFormat: string;

    /**
    * Gets or sets the date-time component which will be used to plot the values. Use values exported from {@link DateTimeComponent}.
    */
    dateTimeComponent: string;
}

/**
* Represents a date-time continuous axis  within a cartesian chart.
* This axis inherits properties form {@link LinearAxis} with some specifics.
* The minimum and maximum properties can be initialized with string in format "dd/MM/yyyy" or with a Date class instance.
* The majorStep property should use values exported from module {@link DateTimeComponent}.
*/
declare class DateTimeContinuousAxis extends LinearAxis {

    /**
    * Creates an instance of the {@link DateTimeContinuousAxis} class.
    */
    constructor();

    /**
    * Identifies the plotMode dependency property.
    */
    public static plotModeProperty: Property<DateTimeContinuousAxis, string>;

    /**
    * Identifies the dateFormat dependency property.
    */
    public static dateFormatProperty: Property<DateTimeContinuousAxis, string>;

    /**
    * Gets or sets the date display format string for axes labels.
    */
    dateFormat: string;

    /**
    * Gets or sets plot mode for the axis. Use {@link AxisPlotMode} module for possible values.
    */
    plotMode: string;
}

/**
* Represents a logarithmic axis within a cartesian chart.
*/
declare class LogarithmicAxis extends LinearAxis {

    /**
    * Creates an instance of the {@link LogarithmicAxis} class.
    */
    constructor();

    /**
    * Identifies the {@link exponentStep} dependency property.
    */
    public static exponentStepProperty: Property<LogarithmicAxis, number>;

    /**
    * Identifies the {@link logarithmBase} dependency property.
    */
    public static logarithmBaseProperty: Property<LogarithmicAxis, number>;

    /**
     * Sets the exponent step between each axis tick.
     * By default the axis itself will calculate the exponent step, depending on the plotted data points.
     * You can reset this property by setting it to 0 to restore the default behavior.
     */
    logarithmBase: number;

    /**
    * Gets or sets the super of the logarithm used for normalizing data points' values.
    */
    exponentStep: number;
}

/**
* Represents the base class for all series supported by the Chart.
*/
declare class ChartSeries extends ViewBase {
    /**
    * Identifies the {@link items} dependency property.
    */
    public static itemsProperty: Property<ChartSeries, any>;

    /**
    * Identifies the {@link value} dependency property.
    */
    public static valueProperty: Property<ChartSeries, any>;

    /**
    * Identifies the {@link legendTitle} dependency property.
    */
    public static legendTitleProperty: Property<ChartSeries, string>;

    /**
     * Identifies the selectionMode dependency property.
     */
    public static selectionModeProperty: Property<ChartSeries, string>;

    /**
     * Identifies the labelStyle dependency property.
     */
    public static labelStyleProperty: Property<ChartSeries, any>;

    /**
     * Identifies the showLabels dependency property.
     */
    public static showLabelsProperty: Property<ChartSeries, boolean>;

    /**
    * Gets or sets a collection of objects used to initialize the series.
    */
    items: any;

    /**
    * Gets or sets a title for this series which will be used in the legend.
    */
    legendTitle: string;

    /**
    * Gets or sets the name of the property on the business entity which will
    * be used to plot it on the provided axis.
    */
    valueProperty: string;

    /**
    * Gets or sets the selection mode of series. Use values exported from {@link SeriesSelectionMode}.
    */
    selectionMode: string;

    /**
    * Gets or sets name of the series. This 'name' is used when applying the 'palettes' of the Chart.
    */
    seriesName: string;

    /**
     * Gets or sets the label style customized with properties of {@link PointLabelStyle} class.
     */
    labelStyle: PointLabelStyle;

    /**
     * Gets or sets the hidden state of labels.
     */
    showLabels: boolean;

    android: any;
    ios: any;
}

/**
* This class is a base for all series that work with a Cartesian coordinate
* system.
*/
declare class CartesianSeries extends ChartSeries {
    /**
    * Identifies the {@link horizontalAxis} dependency property.
    */
    public static horizontalAxisProperty: Property<CartesianSeries, CartesianAxis>;

    /**
    * Identifies the {@link verticalAxis} dependency property.
    */
    public static verticalAxisProperty: Property<CartesianSeries, CartesianAxis>;

    /**
    * Gets or sets the horizontal axis associated with the this series.
    */
    horizontalAxis: CartesianAxis;

    /**
    * Gets or sets the vertical axis associated with the this series.
    */
    verticalAxis: CartesianAxis;
}

/**
* The {@link OhlcSeries} class is used to represent financial data using the
* Open-High-Low-Close standard: {@link https://en.wikipedia.org/wiki/Open-high-low-close_chart}.
*/
declare class OhlcSeries extends CartesianSeries {
    /**
    * Creates an instance of the {@link OhlcSeries} class.
    */
    constructor();

    /**
    * Identifies the {@link openPropertyName} dependency property.
    */
    public static openPropertyNameProperty: Property<OhlcSeries, string>;

    /**
    * Identifies the {@link closePropertyName} dependency property.
    */
    public static closePropertyNameProperty: Property<OhlcSeries, string>;

    /**
    * Identifies the {@link highPropertyName} dependency property.
    */
    public static highPropertyNameProperty: Property<OhlcSeries, string>;

    /**
    * Identifies the {@link lowPropertyName} dependency property.
    */
    public static lowPropertyNameProperty: Property<OhlcSeries, string>;

    /**
    * Gets or sets the name of the property defined on the data-source object
    * which will be used to acquire the 'open' value used for plotting the datapoint.
    */
    openPropertyName: string;

    /**
    * Gets or sets the name of the property defined on the data-source object
    * which will be used to acquire the 'close' value used for plotting the datapoint.
    */
    closePropertyName: string;

    /**
    * Gets or sets the name of the property defined on the data-source object
    * which will be used to acquire the 'high' value used for plotting the datapoint.
    */
    highPropertyName: string;

    /**
    * Gets or sets the name of the property defined on the data-source object
    * which will be used to acquire the 'low' value used for plotting the datapoint.
    */
    lowPropertyName: string;

}

/**
* The {@link OhlcSeries} class is used to represent financial data using the
* Open-High-Low-Close standard: {@link https://en.wikipedia.org/wiki/Open-high-low-close_chart}.
*/
declare class CandlestickSeries extends OhlcSeries {

    /**
    * Creates an instance of the {@link CandlestickSeries} class.
    */
    constructor();
}

/**
* This is a base for all categorical series. This class exposes common properties
* for this type of series like: {@link categoryProperty} and {@link stackMode}.
*/
declare class CategoricalSeries extends CartesianSeries {
    /**
    * Identifies the categoryProperty dependency property.
    */
    public static categoryPropertyProperty: Property<CategoricalSeries, string>;

    /**
    * Identifies the stackMode dependency property.
    */
    public static stackModeProperty: Property<CategoricalSeries, string>;

    /**
    * Gets or sets the name of the property which returns the value
    * used for plotting the data object on a categorical axis.
    */
    categoryProperty: string;

    /**
    * Gets or sets the mode in which the series are stacked in case multiple
    * series are defined in the chart.
    */
    stackMode: string;
}

/**
* Defines series that represent the data as a Pie separated in segments
* corresponding to each data object from the source.
*/
declare class PieSeries extends ChartSeries {
    /**
    * Creates an instance of the {@link PieSeries} class.
    */
    constructor();

    /**
     * Identifies the expandRadius dependency property.
     */
    public static expandRadiusProperty: Property<PieSeries, number>;

    /**
     * Identifies the outerRadius dependency property.
     */
    public static outerRadiusFactorProperty: Property<PieSeries, number>;

    /**
     * Identifies the startAngle dependency property.
     */
    public static startAngleProperty: Property<PieSeries, number>;

    /**
     * Identifies the endAngle dependency property.
     */
    public static endAngleProperty: Property<PieSeries, number>;

    /**
     * Identifies the legendLabel dependency property.
     */
    public static legendLabelProperty: Property<PieSeries, any>;

    /**
     * Identifies the showPercentage dependency property.
     */
    public static showPercentageProperty: Property<PieSeries, boolean>;

    /**
     * The pie series radius factor. Valid values are between 0 and 1.
     */
    outerRadiusFactor: number;

    /**
     * The radius factor to which a pie slice will expand when selected. Valid values are between 0 and 1.
     */
    expandRadius: number;

    /**
     * The start angle of the series. Use this property along with endAngle to define a pie segment that will be used to present all points in this series.
     * By default, the startAngle property is 0 degrees.
     */
    startAngle: number;

    /**
     * The end angle of the series. Use this property along with startAngle to define a pie segment that will be used to present all points in this series.
     * By default, the endAngle property is 360 degrees.
     */
    endAngle: number;

    /**
     * The title for the pie data points shown in legend. It can be bound to the data source object property.
     * Note: Available for iOS only.
     */
    legendLabel: string;

    /**
     * Set to determine if pie segments should show percentage or raw values.
     */
    showPercentage: boolean;
}

/**
* Defines series that represent the data as a Donut separated in segments
* corresponding to each data object from the source.
*/
declare class DonutSeries extends PieSeries {
    /**
    * Creates an instance of the {@link PieSeries} class.
    */
    constructor();

    /**
     * Identifies the innerRadiusFactor dependency property.
     */
    public static innerRadiusFactorProperty: Property<DonutSeries, any>;

    /**
     * The inner radius of the donut series. A non-zero radius produces a donut chart.
     * Valid values are between 0 and 1.
     */
    innerRadiusFactor: number;
}


/**
* Defines series that represent the data as points connected with lines.
*/
declare class LineSeries extends CategoricalSeries {
    /**
    * Creates an instance of the {@link LineSeries}.
    */
    constructor();
}

/**
* Defines series that represent the data as bars which height corresponds
* to the value of the data object from the source.
*/
declare class BarSeries extends CategoricalSeries {
    /**
    * Creates an instance of the {@link BarSeries}.
    */
    constructor();

    /**
    * Identifies the {@link minBarSize} dependency property.
    */
    public static minBarSizeProperty: Property<BarSeries, number>;

    /**
    * Identifies the {@link maxBarSize} dependency property.
    */
    public static maxBarSizeProperty: Property<BarSeries, number>;

    /**
     * Gets or sets the minimum allowed size for a bar within the series.
     */
    minBarSize: number;

    /**
     * Gets or sets the maximum allowed size for a bar within the series.
     */
    maxBarSize: number;
}

/**
* Defines series that represent the data as bars where the width of each bar denotes the difference between data point's low and high value.
*/
declare class RangeBarSeries extends CategoricalSeries {
    /**
    * Creates an instance of the {@link RangeBarSeries} class.
    */
    constructor();

    /**
    * Identifies the {@link highPropertyName} dependency property.
    */
    public static highPropertyNameProperty: Property<RangeBarSeries, string>;

    /**
    * Identifies the {@link lowPropertyName} dependency property.
    */
    public static lowPropertyNameProperty: Property<RangeBarSeries, string>;

    /**
    * Gets or sets the name of the property defined on the data-source object
    * which will be used to acquire the 'high' value used for plotting the datapoint.
    */
    highPropertyName: string;

    /**
    * Gets or sets the name of the property defined on the data-source object
    * which will be used to acquire the 'low' value used for plotting the datapoint.
    */
    lowPropertyName: string;
}

/**
* Defines series that represent the data as points connected with a spline.
*/
declare class SplineSeries extends LineSeries {
    /**
    * Creates an instance of the {@link SplineSeries} class.
    */
    constructor();
}

/**
* Defines series that represent the data as points connected with a line which
* encloses the area between the line and the axis.
*/
declare class AreaSeries extends CategoricalSeries {
    /**
    * Creates an instance of the {@link AreaSeries} class.
    */
    constructor();
}

/**
* Defines series that represent the data as points connected with a spline which
* encloses the area between the line and the axis.
*/
declare class SplineAreaSeries extends AreaSeries {
    /**
    * Creates an instance of the {@link SplineAreaSeries} class.
    */
    constructor();
}

/**
* Defines series that represent the data as points using two dimensional values (x,y) for horizontal and vertical axes respectively.
* NOTE: All scatter series are incompatible with all categorical axes.
*/
declare class ScatterSeries extends CartesianSeries {

    /**
    * Identifies the {@link xProperty} dependency property.
    */
    public static xPropertyProperty: Property<ScatterSeries, string>;

    /**
    * Identifies the {@link yProperty} dependency property.
    */
    public static yPropertyProperty: Property<ScatterSeries, string>;

    /**
     *  Gets or sets the name of the property defined on the data-source object
     *  which will be used to acquire the 'X' value used for plotting the datapoint.
     */
    xProperty: string;

    /**
     *  Gets or sets the name of the property defined on the data-source object
     *  which will be used to acquire the 'Y' value used for plotting the datapoint.
     */
    yProperty: string;
}

/**
* Represents a scatter bubble series. ScatterBubbleSeries like all other scatter series require two numerical axes to function properly.
* Instead of valueProperty & categoryProperty you need to specify xProperty & yProperty values for data points.
* NOTE: All scatter series are incompatible with all categorical axes.
*/
declare class ScatterBubbleSeries extends ScatterSeries {

    /**
    * Identifies the {@link bubbleScale} dependency property.
    */
    public static bubbleScaleProperty: Property<ScatterBubbleSeries, number>;

    /**
    * Identifies the {@link bubbleSizePropertyName} dependency property.
    */
    public static bubbleSizePropertyNameProperty: Property<ScatterBubbleSeries, string>;

    /**
    * Gets or sets the size-scale applied to each data point to adjust the bubble size.
    */
    bubbleScale: number;

    /**
    * Gets or sets the name of the property on the business entity used to determine
    * the size of each bubble.
    */
    bubbleSizeProperty: string;
}

/**
* Represents a categorical bubble series. This type of chart series uses 3 parameters
* from the business entity to visualize the data points - category, Y-value and size of
* the bubble.
*/
declare class BubbleSeries extends CategoricalSeries {

    /**
    * Identifies the {@link bubbleScale} dependency property.
    */
    public static bubbleScaleProperty: Property<BubbleSeries, number>;

    /**
    * Identifies the {@link bubbleSizePropertyName} dependency property.
    */
    public static bubbleSizePropertyProperty: Property<BubbleSeries, string>;

    /**
    * Gets or sets the size-scale applied to each data point to adjust the bubble size.
    */
    bubbleScale: number;

    /**
    * Gets or sets the name of the property on the business entity used to determine
    * the size of each bubble.
    */
    bubbleSizeProperty: string;
}


/**
* Represents a grid in a cartesian chart. A cartesian grid draws vertical and horizontal
* lines aligned to each tick from the vertical or horizontal axis.
*/
declare class RadCartesianChartGrid extends ViewBase {

    /**
    * Identifies the {@link horizontalStrokeColor} dependency property.
    */
    public static horizontalStrokeColorProperty: Property<RadCartesianChartGrid, string>;

    /**
    * Identifies the {@link verticalStrokeColor} dependency property.
    */
    public static verticalStrokeColorProperty: Property<RadCartesianChartGrid, string>;

    /**
    * Identifies the {@link horizontalStrokeWidth} dependency property.
    */
    public static horizontalStrokeWidthProperty: Property<RadCartesianChartGrid, number>;

    /**
    * Identifies the {@link verticalStrokeWidth} dependency property.
    */
    public static verticalStrokeWidthProperty: Property<RadCartesianChartGrid, number>;

    /**
    * Identifies the {@link verticalStripLineColor} dependency property.
    */
    public static verticalStripLineColorProperty: Property<RadCartesianChartGrid, string>;

    /**
    * Identifies the {@link horizontalStripLineColor} dependency property.
    */
    public static horizontalStripLineColorProperty: Property<RadCartesianChartGrid, string>;

    /**
    * Identifies the {@link verticalLinesVisible} dependency property.
    */
    public static verticalLinesVisibleProperty: Property<RadCartesianChartGrid, boolean>;

    /**
    * Identifies the {@link horizontalLinesVisible} dependency property.
    */
    public static horizontalLinesVisibleProperty: Property<RadCartesianChartGrid, boolean>;

    /**
    * Identifies the {@link verticalStripLinesVisible} dependency property.
    */
    public static verticalStripLinesVisibleProperty: Property<RadCartesianChartGrid, boolean>;

    /**
    * Identifies the {@link horizontalStripLinesVisible} dependency property.
    */
    public static horizontalStripLinesVisibleProperty: Property<RadCartesianChartGrid, boolean>;

    /**
    * Gets or sets the color used to draw the horizontal lines of the grid.
    */
    horizontalStrokeColor: string;

    /**
    * Gets or sets the color used to draw the vertical lines of the grid.
    */
    verticalStrokeColor: string;

    /**
    * Gets or sets the thickness of the horizontal lines.
    */
    horizontalStrokeWidth: number;

    /**
    * Gets or sets the thickness of the vertical lines.
    */
    verticalStrokeWidth: number;

    /**
    * Gets or sets the color of the fill drawn between the horizontal lines. Multiple
    * colors can be defined by separating them with commas (e.g. "red, green, #ff32a4bb").
    */
    horizontalStripLineColor: string;

    /**
    * Gets or sets the color of the fill drawn between the horizontal lines. Multiple
    * colors can be defined by separating them with commas (e.g. "red, green, #ff32a4bb").
    */
    verticalStripLineColor: string;

    /**
    * Gets or sets a boolean value determining whether vertical grid lines are visible.
    */
    verticalLinesVisible: boolean;

    /**
    * Gets or sets a boolean value determining whether horizontal grid lines are visible.
    */
    horizontalLinesVisible: boolean;

    /*
    * Gets or sets a boolean value determining whether vertical strip lines are visible.
    */
    verticalStripLinesVisible: boolean;

    /**
    * Gets or sets a boolean value determining whether horizontal strip lines are visible.
    */
    horizontalStripLinesVisible: boolean;

    android: any;
    ios: any;
}

/**
* Represents a palette that can be associated with a chart to visually style
* the series defined in it.
*/
declare class Palette extends ViewBase {

    /**
    * Identifies the {@link entries} dependency property.
    */
    public static entriesProperty: Property<Palette, ObservableArray<PaletteEntry>>;

    /**
    * Identifies the {@link seriesName} dependency property.
    */
    public static seriesNameProperty: Property<Palette, string>;

    /**
    * Identifies the {@link seriesState} dependency property. Use values exported from {@link PaletteEntryUseState} module.
    */
    public static seriesStateProperty: Property<Palette, string>;

    /**
    * Gets or sets a collection of PaletteEntry instances that represent the palette.
    * A PaletteEntry is a property bag containing values for common style-related
    * properties that are applied to a single series within a chart.
    */
    entries: ObservableArray<PaletteEntry>;

    /**
    * Gets or sets the name of the series to which this palette will be applied.
    */
    seriesName: string;

    /**
    * Gets or sets the state of series when the given palette will be used.
    */
    seriesState: string

    /**
    * Updates the owner RadChart by reloading its Palettes.
    */
    updateOwner();
}

/**
* A PaletteEntry is a property bag containing values for common style-related
* properties that are applied to a single series within a chart.
*/
declare class PaletteEntry extends ViewBase {

    /**
    * Identifies the fillColor dependency property.
    */
    public static fillColorProperty: Property<PaletteEntry, string>;

    /**
    * Identifies the strokeColor dependency property.
    */
    public static strokeColorProperty: Property<PaletteEntry, string>;

    /**
    * Identifies the strokeWidth dependency property.
    */
    public static strokeWidth: Property<PaletteEntry, number>;

    /**
    * Gets or sets the color associated with fills.
    */
    fillColor: string;

    /**
    * Gets or sets the color associated with lines/strokes.
    */
    strokeColor: string;

    /**
    * Gets or sets the thickness used to draw a line/stroke.
    */
    strokeWidth: number;
}


/**
* The annotation's position according to the series.
*/
declare module ChartAnnotationZPosition {
    /**
    * The annotation is rendered below the series (default).
    */
    var BelowSeries: string;
    /**
    * The annotation is rendered above the series.
    */
    var AboveSeries: string;
}

/**
*   The base class for annotations.
*/
declare class CartesianChartAnnotation extends ViewBase {
    /**
    * Identifies the axisID dependency property.
    */
    public static axisIdProperty: Property<CartesianChartAnnotation, string>;

    /**
    * Identifies the zPosition dependency property.
    */
    public static zPositionProperty: Property<CartesianChartAnnotation, string>;

    /**
    * Identifies the hidden dependency property.
    */
    public static hiddenProperty: Property<CartesianChartAnnotation, boolean>;

    /**
    * Identifies the strokeWidth dependency property.
    */
    public static strokeWidthProperty: Property<CartesianChartAnnotation, number>;

    /**
    * Identifies the strokeColor dependency property.
    */
    public static strokeColorProperty: Property<CartesianChartAnnotation, string>;

    /**
    * Identifies the strokeDashPattern dependency property.
    */
    public static strokeDashPatternProperty: Property<CartesianChartAnnotation, string>;

    /**
    *  The axis to which this annotation belongs.
    */
    axisId: string;

    /**
    * Determines the z-order position of the annotation. Every annotation can be positioned below or above the series collection. Use values exported from {@link ChartAnnotationZPosition}
    */
    zPosition: string;

    /**
    *  Indicates whether the annotation is visible.
    */
    hidden: boolean;

    /**
    *  The stroke's width.
    */
    strokeWidth: number;

    /**
    * The stroke's fill color
    */
    strokeColor: string;

    /**
    *  The dash patterns of the stroke. An string with numbers that specify the lengths of the painted segments and unpainted segments, respectively, of the dash pattern.
    *  For example, the string "2, 3"" sets a dash pattern that alternates between a 2-user-space-unit-long painted segment and a 3-user-space-unit-long unpainted segment.
    *  The string "1, 3, 4, 2"" sets the pattern to a 1-unit painted segment, a 3-unit unpainted segment, a 4-unit painted segment, and a 2-unit unpainted segment.
    */
    strokeDashPattern: string;
}

/**
 * A vertical or horizontal line annotation.
 */
declare class ChartGridLineAnnotation extends CartesianChartAnnotation {

    /**
    * Identifies the value dependency property.
    */
    public static valueProperty: Property<ChartGridLineAnnotation, any>;

    /**
    *  The value used when positioning the annotation.
    */
    value: any;
}

/**
*  A band annotation. The band specifies a horizontal or vertical range of specific axis.
*/
declare class ChartPlotBandAnnotation extends CartesianChartAnnotation {

    /**
    * Identifies the minValue dependency property.
    */
    public static minValueProperty: Property<ChartPlotBandAnnotation, any>;

    /**
    * Identifies the maxValue dependency property.
    */
    public static maxValueProperty: Property<ChartPlotBandAnnotation, any>;

    /**
    * Identifies the fillColor dependency property.
    */
    public static fillColorProperty: Property<ChartPlotBandAnnotation, string>;

    /**
    *  The min value of range used when positioning the annotation.
    */
    minValue: any;

    /**
    *  The max value of range used when positioning the annotation.
    */
    maxValue: any;

    /**
    *  The vertical band fill.
    */
    fillColor: string;
}

declare class PointLabelStyle extends ViewBase {

    /**
    * Identifies the fillColor dependency property.
    */
    public static fillColorProperty: Property<PointLabelStyle, string>;

    /**
    * Identifies the strokeColor dependency property.
    */
    public static strokeColorProperty: Property<PointLabelStyle, string>;

    /**
    * Identifies the textColor dependency property.
    */
    public static textColorProperty: Property<PointLabelStyle, string>;

    /**
    * Identifies the textSize dependency property.
    */
    public static textSizeProperty: Property<PointLabelStyle, number>;

    /**
    * Identifies the margin dependency property.
    */
    public static marginProperty: Property<PointLabelStyle, string>;

    /**
    * Identifies the textFormat dependency property.
    */
    public static textFormatProperty: Property<PointLabelStyle, string>;

    /**
    * Identifies the fontName dependency property.
    */
    public static fontNameProperty: Property<PointLabelStyle, string>;

    /**
    * Identifies the fontStyle dependency property.
    */
    public static fontStyleProperty: Property<PointLabelStyle, string>;

    /**
    * Gets or sets the color associated with label fill.
    */
    fillColor: string;

    /**
    * Gets or sets the color associated with the color of label stroke.
    */
    strokeColor: string;

    /**
    * Gets or sets the color of the label text.
    */
    textColor: string;

    /**
    * Gets or sets the size of the font of the label.
    */
    textSize: number;

    /**
    * Gets or sets the margin of label.
    */
    margin: number;

    /**
    * Gets or sets the format string of the label text. This format must comply to IEEE printf Specification : {@link http://pubs.opengroup.org/onlinepubs/009695399/functions/printf.html}
    */
    textFormat: string;

    /**
    * Gets or sets the name of font used for label text.
    */
    fontName: string;

    /**
    * Gets or sets the font style for label text. Use {@link FontStyles} enumeration for possible values. The default value is "Normal"
    */
    fontStyle: string;
}


/**
 * Generic scheme for event arguments provided to handlers of events exposed
 * by a {@link RadCartesianChart} and {@link RadPieChart}.
 */
declare class ChartEventData implements EventData {

    /**
    *Returns the name of the event that has been fired.
    */
    eventName: string;

    /**
    * The object that fires the event.
    */
    object: any;

    /**
    * Gets the index of the data point in the series to which the event relates.
    */
    pointIndex: number;

    /**
    * Gets the selected series to which the event relates.
    */
    series: any;

    /**
    * Native instance of point data class specific to the OS
    */
    pointData: any;
}

/**
* A scheme for event arguments used when Trackball tracks selection.
*/
declare class TrackballSelection implements EventData {
    /**
    * Returns the name of the event that has been fired.
    */
    eventName: string;
    /**
    * The object that fires the event.
    */
    object: any;
    /*
    * Array of selections.
    */
    selection: Array<any>[];
}

declare class TrackballCustomContentData extends ChartEventData {
    /**
     * The custom trackball content for the provided data point within the provided series.
     */
    content: string;

    /**
     * The index of the series within the series collection of the current chart.
     */
    seriesIndex: number;
}
