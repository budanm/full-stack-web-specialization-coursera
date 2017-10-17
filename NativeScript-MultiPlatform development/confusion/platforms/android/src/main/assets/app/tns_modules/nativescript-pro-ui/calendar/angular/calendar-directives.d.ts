import {
    TemplateRef,
    ElementRef,
    EventEmitter,
    EmbeddedViewRef
} from "@angular/core";
import { RadCalendar } from './../';

/**
* Represents the RadCalendar component. RadCalendar is based on the
* already familiar native Android and iOS components from Progress Telerik UI for Android
* and Progress Telerik UI for iOS. The component exposes all major features supported
* by the native controls through a unified API suitable for NativeScript developers.
*/
export class RadCalendarComponent {

    /**
     * Gets or sets the current event source in the {@link RadCalendar} instance.
     */
    eventSource: any;

    /**
     * Gets the NativeScript {@link RadListView} element.
     */
    calendar: RadCalendar;

    /**
     * Gets the NativeScript {@link RadListView} element.
     */
    nativeElement: RadCalendar;
}

/**
 * Directives identifying the RadCalendar.
 */
export const CALENDAR_DIRECTIVES;

/**
 * NgModule containing all of the RadCalendar directives.
 */
export class NativeScriptUICalendarModule {

}