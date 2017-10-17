import { RadRadialGauge, RadialBarIndicator, RadialScale, RadialNeedle } from './../';

/**
* Represents the RadRadialGauge component.
 * 
 *  * @example
 * '&lt;RadRadialGauge&gt;
 *    ...
 *  &lt;/RadRadialGauge&gt;'
*/
export class RadRadialGaugeComponent {
    /**
     * Gets the NativeScript {@link RadRadialGauge} element.
     */
    radialGauge: RadRadialGauge;

    /**
     * Gets the NativeScript {@link RadRadialGauge} element.
     */
    nativeElement: RadRadialGauge;
}

/**
 * Directive identifying the {@link RadialScale}.
 * 
 * @example
 * '&lt;RadialScale tkRadialGaugeScales&gt;
 *  &lt;/RadialScale&gt;'
 */
export class TKRadialScaleDirective { }

/**
 * Directive identifying the item template of the {@link RadialBarIndicator}.
 * 
 *  @example
 * '&lt;RadialBarIndicator tkRadialScaleIndicators&gt;
 *  &lt;/RadialBarIndicator&gt;'
 */
export class TKRadialBarIndicatorDirective { }

/**
 * Directive identifying the item template of the {@link RadialNeedle}.
 * 
 * @example
 * '&lt;RadialNeedle tkRadialScaleIndicators&gt;
 *  &lt;/RadialNeedle&gt;'
 */
export class TKRadialNeedleDirective { }

/**
 * Directive identifying the 'scales' property of the of the {@link RadRadialGauge}.
 * 
 * @example
 * '&lt;RadialScale tkRadialGaugeScales&gt;
 *  &lt;/RadialScale&gt;'
 */
export class TKRadialGaugeScalesDirective { }

/**
 * Directive identifying the 'style' property of the of the {@link RadialScale}.
 * 
 * @example
 * '&lt;RadialScale tkRadialScaleStyle&gt;
 *  &lt;/RadialScale&gt;'
 */
export class TKRadialScaleStyleDirective { }

/**
 * Directive identifying the 'indicators' property of the of the {@link RadialScale}.
 * 
 * @example
 * '&lt;RadialBarIndicator tkRadialScaleIndicators&gt;
 *  &lt;/RadialBarIndicator&gt;'
 */
export class TKRadialScaleIndicatorsDirective { }

/**
 * Directive identifying the 'indicatorStyle' property of the of the {@link RadialBarIndicator}.
 * 
 * @example
 * '&lt;BarIndicatorStyle tkRadialBarIndicatorStyle&gt;
 *  &lt;/BarIndicatorStyle&gt;'
 */
export class TKRadialBarIndicatorStyleDirective { }

/**
 * Directive identifying the 'titleStyle' property of the of the {@link RadRadialGauge}.
 * 
 * @example
 * '&lt;TitleStyle tkRadialGaugeTitleStyle&gt;
 *  &lt;/TitleStyle&gt;'
 */
export class TKRadialGaugeTitleStyleDirective { }

/**
 * Directive identifying the 'subtitleStyle' property of the of the {@link RadRadialGauge}.
 * 
 * @example
 * '&lt;SubtitleStyle tkRadialGaugeSubtitleStyle&gt;
 *  &lt;/SubtitleStyle&gt;'
 */
export class TKRadialGaugeSubtitleStyleDirective { }

/**
 * Directive identifying the 'needleStyle' property of the of the {@link RadialNeedle}.
 * 
 * @example
 * '&lt;NeedleStyle tkRadialNeedleStyle&gt;
 *  &lt;/NeedleStyle&gt;'
 */
export class TKRadialNeedleStyleDirective { }

/**
 * Directives identifying the RadAutoCompleteTextView.
 */
export const GAUGES_DIRECTIVES;

/**
 * NgModule containing all of the RadGauge directives.
 */
export class NativeScriptUIGaugesModule {

}
