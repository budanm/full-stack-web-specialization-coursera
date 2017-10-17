import {
    TemplateRef,
    ElementRef,
    EmbeddedViewRef
} from "@angular/core";
import { RadCartesianChart, RadPieChart } from './../';

/**
 * Represents the RadCartesianChart component. Represents a Cartesian Chart 
 * that uses the cartesian coordinate system to plot the data point values. 
 * The component exposes all major features supported by the native controls 
 * through a unified API suitable for NativeScript developers.
 * 
 * @example
 * '&lt;RadCartesianChart&gt;
 *    ...
 *  &lt;/RadCartesianChart&gt;'
*/
export class RadCartesianChartComponent { 
    /**
     * Gets the NativeScript {@link RadCartesianChart} element.
     */
    cartesianChart: RadCartesianChart;

    /**
     * Gets the NativeScript {@link RadCartesianChart} element.
     */
    nativeElement: RadCartesianChart;
}

/**
 * Represents the RadPieChart component. Represents a chart that 
 * visualizes its values as a slices of a pie. Depending on the
 * associated series the values are visualized as a standard pie or a doughnut. 
 * The component exposes all major features supported by the native controls 
 * through a unified API suitable for NativeScript developers.
 * 
 * @example
 * &lt;RadPieChart&gt;
 *    ...
 *  &lt;/RadPieChart&gt;'
 */
export class RadPieChartComponent { 
    /**
     * Gets the NativeScript {@link RadPieChart} element.
     */
    pieChart: RadPieChart;

    /**
     * Gets the NativeScript {@link RadPieChart} element.
     */
    nativeElement: RadPieChart;
}

/**
 * Directive identifying the RadLegendViewDirective.
 * 
 * @example
 * ' &lt;RadLegendView pieLegend&gt;&lt;/RadLegendView&gt; '
 */
export class RadLegendViewDirective { }

/**
 * Directive identifying the categoricalAxis of the RadCartesianChart component.
 * 
 * @example
 * ' &lt;CategoricalAxis tkCartesianHorizontalAxis&gt;&lt;/CategoricalAxis&gt; '
 */
export class CategoricalAxisDirective { }

/**
 * Directive identifying the LinearAxis.
 * 
 * @example
 * ' &lt;LinearAxis tkCartesianVerticalAxis&gt;&lt;/LinearAxis&gt; '
 */
export class LinearAxisDirective { }

/**
 * Directive identifying the DateTimeCategoricalAxis.
 * 
 * @example
 * ' &lt;DateTimeCategoricalAxis tkCartesianHorizontalAxis dateFormat="yyyy-MM-dd" verticalLocation="Bottom"&gt;&lt;/DateTimeCategoricalAxis&gt; '
 */
export class DateTimeCategoricalAxisDirective { }

/**
 * Directive identifying the DateTimeContinuousAxis.
 * 
 * @example
 * ' &lt;DateTimeContinuousAxis tkCartesianHorizontalAxis dateFormat="yyyy-MM-dd" verticalLocation="Bottom"&gt;&lt;/DateTimeContinuousAxis&gt; '
 */
export class DateTimeContinuousAxisDirective { }

/**
 * Directive identifying the LogarithmicAxis.
 * 
 * @example
 * ' &lt;LogarithmicAxis tkCartesianHorizontalAxis dateFormat="yyyy-MM-dd" verticalLocation="Bottom"&gt;&lt;/LogarithmicAxis&gt; '
 */
export class LogarithmicAxisDirective { }

/**
 * Directive identifying the LineSeries.
 * 
 * @example
 * ' &lt;LineSeries tkCartesianSeries [items]="items" categoryProperty="Country" valueProperty="Amount"&gt;&lt;/LineSeries&gt; '
 */
export class LineSeriesDirective { }

/**
 * Directive identifying the AreaSeries.
 * 
 * @example
 * ' &lt;AreaSeries tkCartesianSeries [items]="items" categoryProperty="Country" valueProperty="Amount"&gt;&lt;/AreaSeries&gt; '
 */
export class AreaSeriesDirective { }

/**
 * Directive identifying the SplineSeries.
 * 
 * @example
 * ' &lt;AreaSeries tkCartesianSeries [items]="items" categoryProperty="Country" valueProperty="Amount"&gt;&lt;/AreaSeries&gt; '
 */
export class SplineSeriesDirective { }

/**
 * Directive identifying the SplineAreaSeries.
 * 
 * @example
 * ' &lt;SplineAreaSeries tktkCartesianSeries seriesName="SplineArea" [items]="negativeValues" categoryProperty="Period" valueProperty="Amount"&gt;&lt;/SplineAreaSeries&gt; '
 */
export class SplineAreaSeriesDirective { }

/**
 * Directive identifying the BarSeries.
 * 
 * @example
 * ' &lt;BarSeries tkCartesianSeries seriesName="Bar" stackMode="Stack" [items]="items" categoryProperty="Country" valueProperty="Amount"&gt;&lt;/BarSeries&gt; '
 */
export class BarSeriesDirective { }

/**
 * Directive identifying the RangeBarSeries.
 * 
 * @example
 * ' &lt;RangeBarSeries tkCartesianSeries [items]="rangeItems" showLabels="true" legendTitle="Ranges" categoryProperty="Name" lowPropertyName="Low" highPropertyName="High"&gt;&lt;/RangeBarSeries&gt; '
 */
export class RangeBarSeriesDirective { }

/**
 * Directive identifying the BubbleSeries.
 * 
 * @example
 * ' &lt;BubbleSeries tkCartesianSeries [items]="highDataModel" bubbleScale="5" categoryProperty="Year" valueProperty="Amount" bubbleSizeProperty="Impact"&gt;&lt;/BubbleSeries&gt; '
 */
export class BubbleSeriesDirective { }

/**
 * Directive identifying the ScatterBubbleSeries.
 * 
 * @example
 * ' &lt;ScatterBubbleSeries tkCartesianSeries [items]="highDataModel" bubbleScale="5" xProperty="Year" yProperty="Amount" bubbleSizeProperty="Impact"&gt;&lt;/ScatterBubbleSeries&gt; '
 */
export class ScatterBubbleSeriesDirective { }

/**
 * Directive identifying the ScatterSeries.
 * 
 * @example
 * ' &lt;ScatterSeries tkCartesianSeries [items]="highDataModel" bubbleScale="5" xProperty="Year" yProperty="Amount" bubbleSizeProperty="Impact"&gt;&lt;/ScatterSeries&gt; '
 */
export class ScatterSeriesDirective { }

/**
 * Directive identifying the Palette.
 * 
 * @example
 * ' &lt;Palette tkCartesianPalette seriesName="Bar" [entries]="myEntries"&gt;&lt;/Palette&gt; '
 */
export class PaletteDirective { }

/**
 * Directive identifying the PieSeries.
 * 
 * @example
 * ' &lt;PieSeries tkPieSeries [items]="items" selectionMode="DataPoint" expandRadius="1.3" outerRadiusFactor="0.7" valueProperty="Amount" showPercentage="true" showLabels="true" seriesName="MyPie" legendLabel="Country"&gt;&lt;/PieSeries&gt; '
 */
export class PieSeriesDirective { }

/**
 * Directive identifying the DonutSeries.
 * 
 * @example
 * ' &lt;DonutSeries tkPieSeries [items]="items" valueProperty="Amount"  showPercentage="true" showLabels="true" seriesName="MyPie" legendLabel="Country"&gt;&lt;/DonutSeries&gt; '
 */
export class DonutSeriesDirective { }

/**
 * Directive identifying the CandlestickSeries.
 * 
 * @example
 * ' &lt;CandlestickSeries tkCartesianSeries categoryProperty="Date" openPropertyName="Open" highPropertyName="High" lowPropertyName="Low" closePropertyName="Close" [items]="candleStickSourceItems"&gt;&lt;/CandlestickSeries&gt; '
 */
export class CandlestickSeriesDirective { }

/**
 * Directive identifying the OhlcSeries.
 * 
 * @example
 * ' &lt;OhlcSeries tkCartesianSeries categoryProperty="Date" openPropertyName="Open" highPropertyName="High" lowPropertyName="Low" closePropertyName="Close" [items]="ohlcSourceItems"&gt;&lt;/OhlcSeries&gt; '
 */
export class OhlcSeriesDirective { }

/**
 * Directive identifying the PointLabelStyle.
 * 
 * @example
 * ' &lt;PointLabelStyle tkLineLabelStyle margin="15" fillcolor="blue"&gt;&lt;/PointLabelStyle&gt; '
 */
export class PointLabelStyleDirective { }

/**
 * Directive identifying the 'labelStyle' property of the PieSeries.
 * 
 * @example
 * ' &lt;PointLabelStyle tkPieLabelStyle margin="15" fillcolor="blue"&gt;&lt;/PointLabelStyle&gt; '
 */
export class TKPieLabelStyleDirective { }

/**
 * Directive identifying the 'labelStyle' property of the DonutSeries.
 * 
 * @example
 * ' &lt;PointLabelStyle tkDonutLabelStyle margin="15" fillcolor="blue"&gt;&lt;/PointLabelStyle&gt; '
 */
export class TKDonutLabelStyleDirective { }

/**
 * Directive identifying the 'labelStyle' property of the LineSeries.
 * 
 * @example
 * ' &lt;PointLabelStyle tkLineLabelStyle margin="15" fillcolor="blue"&gt;&lt;/PointLabelStyle&gt; '
 */
export class TKLineLabelStyleDirective { }

/**
 * Directive identifying the 'labelStyle' property of the BarSeries.
 * 
 * @example
 * ' &lt;PointLabelStyle tkBarLabelStyle margin="15" fillcolor="blue"&gt;&lt;/PointLabelStyle&gt; '
 */
export class TKBarLabelStyleDirective { }

/**
 * Directive identifying the 'labelStyle' property of the RangeBarSeries.
 * 
 * @example
 * ' &lt;PointLabelStyle tkRangeBarLabelStyle margin="15" fillcolor="blue"&gt;&lt;/PointLabelStyle&gt; '
 */
export class TKRangeBarLabelStyleDirective { }

/**
 * Directive identifying the 'labelStyle' property of the AreaSeries.
 * 
 * @example
 * ' &lt;PointLabelStyle tkAreaLabelStyle margin="15" fillcolor="blue"&gt;&lt;/PointLabelStyle&gt; '
 */
export class TKAreaLabelStyleDirective { }

/**
 * Directive identifying the 'labelStyle' property of the SplineSeries.
 * 
 * @example
 * ' &lt;PointLabelStyle tkSplineLabelStyle margin="15" fillcolor="blue"&gt;&lt;/PointLabelStyle&gt; '
 */
export class TKSplineLabelStyleDirective { }

/**
 * Directive identifying the 'labelStyle' property of the SplineSeries.
 * 
 * @example
 * ' &lt;PointLabelStyle tkSplineAreaLabelStyle margin="15" fillcolor="blue"&gt;&lt;/PointLabelStyle&gt; '
 */
export class TKSplineAreaLabelStyleDirective { }

/**
 * Directive identifying the 'labelStyle' property of the BubbleSeries.
 * 
 * @example
 * ' &lt;PointLabelStyle tkBubbleLabelStyle margin="15" fillcolor="blue"&gt;&lt;/PointLabelStyle&gt; '
 */
export class TKBubbleLabelStyleDirective { }

/**
 * Directive identifying the 'labelStyle' property of the ScatterBubbleSeries.
 * 
 * @example
 * ' &lt;PointLabelStyle tkScatterBubbleLabelStyle margin="15" fillcolor="blue"&gt;&lt;/PointLabelStyle&gt; '
 */
export class TKScatterBubbleLabelStyleDirective { }

/**
 * Directive identifying the 'labelStyle' property of the CandlestickSeries.
 * 
 * @example
 * ' &lt;PointLabelStyle tkCandlestickLabelStyle margin="15" fillcolor="blue"&gt;&lt;/PointLabelStyle&gt; '
 */
export class TKCandlestickLabelStyleDirective { }

/**
 * Directive identifying the 'labelStyle' property of the OhlcSeries.
 * 
 * @example
 * ' &lt;PointLabelStyle tkOhlcLabelStyle margin="15" fillcolor="blue"&gt;&lt;/PointLabelStyle&gt; '
 */
export class TKOhlcStyleDirective { }

/**
 * Directive identifying the 'labelStyle' property of the ScatterSeries.
 * 
 * @example
 * ' &lt;PointLabelStyle tkScatterLabelStyle margin="15" fillcolor="blue"&gt;&lt;/PointLabelStyle&gt; '
 */
export class TKScatterStyleDirective { }

/**
 * Directive identifying the 'grid' property of the RadCartesianChart.
 * 
 * @example
 * ' &lt;RadCartesianChartGrid tkCartesianGrid horizontalLinesVisible="true" verticalLinesVisible="true" horizontalStripLinesVisible="true" verticalStripLinesVisible="true" verticalStrokeColor="#804d0026" horizontalStrokeColor="#ffffcc80" horizontalStrokeWidth="2" verticalStrokeWidth=" 3" horizontalStripLineColor="#8059005c, #804d0026"&gt;&lt;/RadCartesianChartGrid&gt; '
 */
export class TKCartesianGridDirective { }

/**
 * Directive identifying the RadCartesianChartGrid.
 * 
 * @example
 * ' &lt;RadCartesianChartGrid tkCartesianGrid horizontalLinesVisible="true" verticalLinesVisible="true" horizontalStripLinesVisible="true" verticalStripLinesVisible="true" verticalStrokeColor="#804d0026" horizontalStrokeColor="#ffffcc80" horizontalStrokeWidth="2" verticalStrokeWidth=" 3" horizontalStripLineColor="#8059005c, #804d0026"&gt;&lt;/RadCartesianChartGrid&gt; '
 */
export class RadCartesianChartGridDirective { }

/**
 * Directive identifying the TrackballDirective.
 * 
 * @example
 * ' &lt;Trackball tkCartesianTrackball snapMode="AllClosestPoints" showIntersectionPoints="true"&gt;&lt;/Trackball&gt; '
 */
export class TrackballDirective { }

/**
 * Directive identifying the 'trackball' property of the RadCartesianChart.
 * 
 * @example
 * ' &lt;Trackball tkCartesianTrackball snapMode="AllClosestPoints" showIntersectionPoints="true"&gt;&lt;/Trackball&gt; '
 */
export class TKCartesianTrackballDirective { }

/**
 * Directive identifying the 'annotations' collection of the RadCartesianChart.
 * 
 * @example
 * ' &lt;ChartGridLineAnnotation tkCartesianAnnotations&gt;&lt;/ChartGridLineAnnotation&gt; '
 */
export class TKCartesianAnnotationsDirective { }

/**
 * Directive identifying the ChartGridLineAnnotation.
 * 
 * @example
 * ' &lt;ChartGridLineAnnotation tkCartesianAnnotations axisId="hAxis" hidden="false" value="50" zPosition="AboveSeries" strokeWidth="1" strokeColor="#EB916580"&gt;&lt;/ChartGridLineAnnotation&gt; '
 */
export class ChartGridLineAnnotationDirective { }

/**
 * Directive identifying the ChartPlotBandAnnotation.
 * 
 * @example
 * ' &lt;ChartPlotBandAnnotation tkCartesianAnnotations axisId="vAxis" hidden="false" value="20000" zPosition="AboveSeries" minValue="2500" maxValue="5000" fillColor="#AC74E880" strokeColor="#AC74E880"&gt;&lt;/ChartPlotBandAnnotation&gt; '
 */
export class ChartPlotBandAnnotationDirective { }

/**
 * Directive identifying the annotations of the RadCartesianChart component.
 * @example
 * ' &lt;ChartGridLineAnnotation tkCartesianAnnotations &gt;&lt;/ChartGridLineAnnotation&gt; '
 */
export class CartesianAnnotationsDirective { }

/**
 * Directive identifying the grid of the RadCartesianChart component.
 * @example
 * ' &lt;RadCartesianChartGrid cartesianChartGrid &gt;&lt;/RadCartesianChartGrid&gt; '
 */
export class CartesianChartGridDirective { }

/**
 * Directive identifying the series of the RadCartesianChart component.
 * @example
 * ' &lt;LineSeries tkCartesianSeries &gt;&lt;/LineSeries&gt; '
 */
export class TKCartesianSeriesDirective { }

/**
 * Directive identifying the series of the RadPieChart component.
 * @example
 * ' &lt;PieSeries tkPieSeries &gt;&lt;/PieSeries&gt; '
 */
export class TKPieChartSeriesDirective { }

/**
 * Directive identifying the palette objects of the RadCartesianChart component.
 * @example
 * ' &lt;Palette tkCartesianPalette &gt;&lt;/Palette&gt; '
 */
export class TKCartesianPaletteDirective { }

/**
 * Directive identifying the palette objects of the RadPieChart component.
 * @example
 * ' &lt;Palette tkPiePaletteEntry &gt;&lt;/Palette&gt; '
 */
export class TKPiePaletteDirective { }

/**
 * Directive identifying an object of 'entries' collection of the Palette.
 * @example
 * ' &lt;PaletteEntry tkCartesianPaletteEntry &gt;&lt;/PaletteEntry&gt; '
 */
export class TKCartesianPaletteEntryDirective { }

/**
 * Directive identifying an object of 'entries' collection of the Palette.
 * @example
 * ' &lt;PaletteEntry tkPiePaletteEntry &gt;&lt;/PaletteEntry&gt; '
 */
export class TKPiePaletteEntryDirective { }

/**
 * Directive identifying the horizontalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkCartesianHorizontalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKCartesianHorizontalAxisDirective { }

/**
 * Directive identifying the verticalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkCartesianVerticalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKCartesianVerticalAxisDirective { }

/**
 * Directive identifying the horizontalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkLineVerticalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKLineVerticalAxisDirective { }

/**
 * Directive identifying the verticalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkLineHorizontalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKLineHorizontalAxisDirective { }

/**
 * Directive identifying the horizontalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkBarVerticalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKBarVerticalAxisDirective { }

/**
 * Directive identifying the verticalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkBarHorizontalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKBarHorizontalAxisDirective { }

/**
 * Directive identifying the horizontalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkRangeBarVerticalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKRangeBarVerticalAxisDirective { }

/**
 * Directive identifying the verticalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkRangeBarHorizontalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKRangeBarHorizontalAxisDirective { }

/**
 * Directive identifying the horizontalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkAreaVerticalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKAreaVerticalAxisDirective { }

/**
 * Directive identifying the verticalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkAreaHorizontalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKAreaHorizontalAxisDirective { }

/**
 * Directive identifying the horizontalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkSplineVerticalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKSplineVerticalAxisDirective { }

/**
 * Directive identifying the verticalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkSplineHorizontalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKSplineHorizontalAxisDirective { }

/**
 * Directive identifying the horizontalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkSplineAreaVerticalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKSplineAreaVerticalAxisDirective { }

/**
 * Directive identifying the verticalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkSplineHorizontalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKSplineAreaHorizontalAxisDirective { }

/**
 * Directive identifying the horizontalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkBubbleVerticalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKBubbleVerticalAxisDirective { }

/**
 * Directive identifying the verticalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkBubbleHorizontalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKBubbleHorizontalAxisDirective { }

/**
 * Directive identifying the horizontalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkScatterBubbleVerticalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKScatterBubbleVerticalAxisDirective { }

/**
 * Directive identifying the verticalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkScatterBubbleHorizontalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKScatterBubbleHorizontalAxisDirective { }

/**
 * Directive identifying the horizontalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkCandlestickVerticalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKCandlestickVerticalAxisDirective { }

/**
 * Directive identifying the verticalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkCandlestickHorizontalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKCandlestickHorizontalAxisDirective { }

/**
 * Directive identifying the horizontalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkOhlcVerticalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKOhlcVerticalAxisDirective { }

/**
 * Directive identifying the verticalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkOhlcHorizontalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKOhlcHorizontalAxisDirective { }

/**
 * Directive identifying the horizontalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkScatterVerticalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKScatterVerticalAxisDirective { }

/**
 * Directive identifying the verticalAxis of the RadCartesianChart component.
 * @example
 * ' &lt;LinearAxis tkScatterHorizontalAxis &gt;&lt;/LinearAxis&gt; '
 */
export class TKScatterHorizontalAxisDirective { }

/**
 * Directive identifying the legend of the of the RadPieChart component.
 * @example
 * ' &lt;RadLegendView tkPieLegend &gt;&lt;/RadLegendView&gt; '
 */
export class TKPieLegendDirective { }

/**
 * Directive identifying the legend of the of the RadPieChart component.
 * @example
 * ' &lt;RadLegendView tkCartesianLegend &gt;&lt;/RadLegendView&gt; '
 */
export class TKCartesianLegendDirective { }

/**
 * Directives identifying the RadChart.
 */
export const CHART_DIRECTIVES;

/**
 * NgModule containing all of the RadChart directives.
 */
export class NativeScriptUIChartModule {

}
