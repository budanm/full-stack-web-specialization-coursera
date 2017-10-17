import {
    TemplateRef,
    ElementRef,
    EmbeddedViewRef
} from "@angular/core";
import { RadDataForm } from './../';


/**
* Represents the RadDataForm component. RadDataForm is based on the
* already familiar native Android and iOS components from Progress Telerik UI for Android
* and Progress Telerik UI for iOS. The component exposes all major features supported
* by the native controls through a unified API suitable for NativeScript developers.
*/
export class RadDataFormComponent {
    /**
     * Gets the NativeScript {@link RadDataForm} element.
     */
    dataForm: RadDataForm;

    /**
     * Gets the NativeScript {@link RadDataForm} element.
     */
    nativeElement: RadDataForm;
}

/**
 * Directive identifying the EntityProperty.
 * 
 * @example
 * ' &lt;TKEntityProperty tkDataFormPropert&lt;&gt/TKEntityProperty&gt '
 */
export class TKEntityPropertyDirective {
}

/**
 * Directive identifying the PropertyGroup.
 * 
 * @example
 * ' &lt;TKPropertyGroup tkDataFormGroups&lt;&gt/TKPropertyGroup&gt '
 */
export class TKPropertyGroupDirective {
}

/**
 * Directive identifying the PropertyEditor.
 * 
 * @example
 * ' &lt;TKPropertyEditor tkEntityPropertyEditor&lt;&gt/TKPropertyEditor&gt '
 */
export class TKPropertyEditorDirective {
}

/**
 * Directive identifying the PropertyEditor.
 * 
 * @example
 * ' &lt;TKCustomPropertyEditor tkEntityPropertyEditor&lt;&gt/TKCustomPropertyEditor&gt '
 */
export class TKCustomPropertyEditorDirective {
}

/**
 * Directive identifying an EntityProperty object of the 'properties' collection of the RadDataForm.
 * 
 * @example
 * ' &lt;TKEntityProperty tkDataFormPropert&lt;&gt/TKEntityProperty&gt '
 */
export class TKDataFormPropertyDirective {
}

/**
 * Directive identifying the PropertyGroup.
 * 
 * @example
 * ' &lt;TKPropertyGroup tkDataFormGroups&lt;&gt/TKPropertyGroup&gt '
 */
export class TKDataFormGroupsDirective {
}

/**
 * Directive identifying the titleStyle of the PropertyGroup.
 * 
 * @example
 * ' &lt;TKGroupTitleStyle tkPropertyGroupTitleStyle&lt;&gt/TKGroupTitleStyle&gt '
 */
export class TKPropertyGroupTitleStyleDirective {
}

/**
 * Directive identifying the style of the PropertyEditor.
 * 
 * @example
 * ' &lt;TKPropertyEditorStyle tkPropertyEditorStyle&lt;&gt/TKPropertyEditorStyle&gt '
 */
export class TKPropertyEditorStyleDirective {
}

/**
 * Directive identifying the style of the PropertyEditor.
 * 
 * @example
 * ' &lt;TKPropertyEditorStyle tkCustomPropertyEditorStyle&lt;&gt/TKPropertyEditorStyle&gt '
 */
export class TKCustomPropertyEditorStyleDirective {
}

/**
* Directive identifying an EntityProperty object of the 'properties' collection of the PropertyGroup.
 * 
 * @example
 * ' &lt;TKEntityProperty tkPropertyGroupProperties&lt;&gt/TKEntityProperty&gt '
 */
export class TKPropertyGroupPropertiesDirective {
}

/**
 * Directive identifying the editor of the PropertyEditor.
 * 
 * @example
 * ' &lt;TKPropertyEditor tkEntityPropertyEditor&lt;&gt/TKPropertyEditor&gt '
 */
export class TKEntityPropertyEditorDirective {
}

/**
 * Directive identifying the DataFormGridLayout.
 * 
 * @example
 * ' &lt;TKDataFormGridLayout tkPropertyGroupLayout&lt;&gt/TKDataFormGridLayout&gt '
 */
export class TKDataFormGridLayoutDirective {
}

/**
 * Directive identifying the DataFormStackLayout.
 * 
 * @example
 * ' &lt;TKDataFormStackLayout tkPropertyGroupLayout&lt;&gt/TKDataFormStackLayout&gt '
 */
export class TKDataFormStackLayoutDirective {
}

/**
 * Directive identifying the 'layout' of the PropertyGroup.
 * 
 * @example
 * ' &lt;TKDataFormStackLayout tkPropertyGroupLayout&lt;&gt/TKDataFormStackLayout&gt '
 */
export class TKPropertyGroupLayoutDirective {
}

/**
* Directive identifying an EntityProperty object of the 'validators' collection of the EntityProperty.
 * 
 * @example
 * ' &lt;TKNonEmptyValidator tkEntityPropertyValidators&lt;&gt/TKNonEmptyValidator&gt '
 */
export class TKEntityPropertyValidatorsDirective {
}

/**
 * Directives identifying the RadDataForm.
 */
export const DATAFORM_DIRECTIVES;

/**
 * NgModule containing all of the RadDataForm directives.
 */
export class NativeScriptUIDataFormModule {

}
