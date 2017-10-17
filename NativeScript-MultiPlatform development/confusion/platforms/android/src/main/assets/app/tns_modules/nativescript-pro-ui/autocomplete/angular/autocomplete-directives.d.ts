import {
    TemplateRef,
    ElementRef,
    EmbeddedViewRef
} from "@angular/core";
import { RadAutoCompleteTextView, SuggestionView } from './../';

/**
* Represents a proxy for the ListItem.
*/
export class ListItemContext extends ElementRef {
    /**
    * Gets the data of the item.
    */
    $implicit: any;

    /**
    * Gets the item.
    */
    item: any;

    /**
    * Gets the index of the item.
    */
    index: number;

    /**
    * Returns boolean value that represents if the item at an even position.
    */
    even: boolean;

    /**
    * Returns boolean value that represents if the item at an odd position.
    */
    odd: boolean;
}

/**
 * Generic scheme for event arguments provided to handlers of events exposed
 * by a {@link SuggestionView}.
 */
export interface ItemEventArgs {

    /**
    * The object that fires the event.
    */
    object: any;

    /**
     * The angular view object that fires the event.
     */
    view: EmbeddedViewRef<any>;

    /**
    * Might point to an object related to a specific event.
    */
    data: any;

    /**
    * Gets the index of the item in the source to which the event relates.
    */
    index: number;

    /**
    * Returns a boolean value which is interpreted in the context with the event.
    */
    returnValue?: boolean;
}

/**
* Represents the RadAutoCompleteTextView component. RadAutoCompleteTextView provides means to perform easy 
 * filtering of data and completion suggestion's according to typed text by the user.
 * Provides tokens, layouts, completion modes.
 * 
 * @example
 * '&lt;RadAutoCompleteTextView&gt;
 *    ...
 *  &lt;/RadAutoCompleteTextView&gt;'
*/
export class RadAutoCompleteTextViewComponent {
    /**
     * Gets the NativeScript {@link RadAutoCompleteTextView} element.
     */
    autoCompleteTextView: RadAutoCompleteTextView;

    /**
     * Gets the NativeScript {@link RadAutoCompleteTextView} element.
     */
    nativeElement: RadAutoCompleteTextView;
}

/**
 * Directive identifying the {@link SuggestionView}.
 * 
 * @example
 * '&lt;SuggestionViewtkAutoCompleteSuggestionView&gt;
 *      &lt;ng-template tkSuggestionItemTemplate&gt;
 *          ...
 *      &lt;/ng-template&gt;
 *  &lt;/SuggestionView&gt;'
 */
export class TKAutoCompleteSuggestionViewDirective {

}

/**
 * Directive identifying the item template of the {@link SuggestionView}.
 * 
 * @example
 * '&lt;SuggestionViewtkAutoCompleteSuggestionView&gt;
 *      &lt;ng-template tkSuggestionItemTemplate&gt;
 *          ...
 *      &lt;/ng-template&gt;
 *  &lt;/SuggestionView&gt;'
 */
export class TKSuggestionItemTemplateDirective {

}

/**
 * Directives identifying the RadAutoCompleteTextView.
 */
export const AUTOCOMPLETETEXTVIEW_DIRECTIVES;

/**
 * NgModule containing all of the RadAutoCompleteTextView directives.
 */
export class NativeScriptUIAutoCompleteTextViewModule {

}