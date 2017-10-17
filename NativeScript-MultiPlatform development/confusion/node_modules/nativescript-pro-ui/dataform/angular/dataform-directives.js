Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var _1 = require("./../");
var RadDataFormComponent = (function () {
    function RadDataFormComponent(_elementRef) {
        this._elementRef = _elementRef;
        this._dataForm = _elementRef.nativeElement;
    }
    Object.defineProperty(RadDataFormComponent.prototype, "nativeElement", {
        get: function () {
            return this._dataForm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadDataFormComponent.prototype, "dataForm", {
        get: function () {
            return this._dataForm;
        },
        enumerable: true,
        configurable: true
    });
    RadDataFormComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "RadDataForm",
                    template: ""
                },] },
    ];
    /** @nocollapse */
    RadDataFormComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return RadDataFormComponent;
}());
exports.RadDataFormComponent = RadDataFormComponent;
var TKEntityPropertyDirective = (function () {
    function TKEntityPropertyDirective(_elementRef) {
        this._elementRef = _elementRef;
        this._entityProperty = this._elementRef.nativeElement;
    }
    Object.defineProperty(TKEntityPropertyDirective.prototype, "entityProperty", {
        get: function () {
            return this._entityProperty;
        },
        enumerable: true,
        configurable: true
    });
    TKEntityPropertyDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "TKEntityProperty"
                },] },
    ];
    /** @nocollapse */
    TKEntityPropertyDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKEntityPropertyDirective;
}());
exports.TKEntityPropertyDirective = TKEntityPropertyDirective;
var TKDataFormGridLayoutDirective = (function () {
    function TKDataFormGridLayoutDirective(_elementRef) {
        this._elementRef = _elementRef;
        this._dataFormGridLayout = this._elementRef.nativeElement;
    }
    Object.defineProperty(TKDataFormGridLayoutDirective.prototype, "dataFormGridLayout", {
        get: function () {
            return this._dataFormGridLayout;
        },
        enumerable: true,
        configurable: true
    });
    TKDataFormGridLayoutDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "TKDataFormGridLayout"
                },] },
    ];
    /** @nocollapse */
    TKDataFormGridLayoutDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKDataFormGridLayoutDirective;
}());
exports.TKDataFormGridLayoutDirective = TKDataFormGridLayoutDirective;
var TKDataFormStackLayoutDirective = (function () {
    function TKDataFormStackLayoutDirective(_elementRef) {
        this._elementRef = _elementRef;
        this._dataFormStackLayout = this._elementRef.nativeElement;
    }
    Object.defineProperty(TKDataFormStackLayoutDirective.prototype, "dataFormStackLayout", {
        get: function () {
            return this._dataFormStackLayout;
        },
        enumerable: true,
        configurable: true
    });
    TKDataFormStackLayoutDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "TKDataFormStackLayout"
                },] },
    ];
    /** @nocollapse */
    TKDataFormStackLayoutDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKDataFormStackLayoutDirective;
}());
exports.TKDataFormStackLayoutDirective = TKDataFormStackLayoutDirective;
var TKPropertyGroupDirective = (function () {
    function TKPropertyGroupDirective(_elementRef) {
        this._elementRef = _elementRef;
        this._propertyGroup = this._elementRef.nativeElement;
    }
    Object.defineProperty(TKPropertyGroupDirective.prototype, "propertyGroup", {
        get: function () {
            return this._propertyGroup;
        },
        enumerable: true,
        configurable: true
    });
    TKPropertyGroupDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "TKPropertyGroup"
                },] },
    ];
    /** @nocollapse */
    TKPropertyGroupDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKPropertyGroupDirective;
}());
exports.TKPropertyGroupDirective = TKPropertyGroupDirective;
var TKPropertyEditorDirective = (function () {
    function TKPropertyEditorDirective(_elementRef) {
        this._elementRef = _elementRef;
        this._propertyEditor = this._elementRef.nativeElement;
    }
    Object.defineProperty(TKPropertyEditorDirective.prototype, "propertyEditor", {
        get: function () {
            return this._propertyEditor;
        },
        enumerable: true,
        configurable: true
    });
    TKPropertyEditorDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "TKPropertyEditor"
                },] },
    ];
    /** @nocollapse */
    TKPropertyEditorDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKPropertyEditorDirective;
}());
exports.TKPropertyEditorDirective = TKPropertyEditorDirective;
var TKCustomPropertyEditorDirective = (function () {
    function TKCustomPropertyEditorDirective(_elementRef) {
        this._elementRef = _elementRef;
        this._propertyEditor = this._elementRef.nativeElement;
    }
    Object.defineProperty(TKCustomPropertyEditorDirective.prototype, "propertyEditor", {
        get: function () {
            return this._propertyEditor;
        },
        enumerable: true,
        configurable: true
    });
    TKCustomPropertyEditorDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "TKCustomPropertyEditor"
                },] },
    ];
    /** @nocollapse */
    TKCustomPropertyEditorDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKCustomPropertyEditorDirective;
}());
exports.TKCustomPropertyEditorDirective = TKCustomPropertyEditorDirective;
var TKDataFormPropertyDirective = (function () {
    function TKDataFormPropertyDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKDataFormPropertyDirective.prototype.ngOnInit = function () {
        var property = this._elementRef.nativeElement;
        if (this.owner.dataForm.properties) {
            this.owner.dataForm.properties.push(property);
        }
        else {
            this.owner.dataForm.properties = new Array(property);
        }
    };
    TKDataFormPropertyDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkDataFormProperty]"
                },] },
    ];
    /** @nocollapse */
    TKDataFormPropertyDirective.ctorParameters = function () { return [
        { type: RadDataFormComponent, decorators: [{ type: core_1.Inject, args: [RadDataFormComponent,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKDataFormPropertyDirective;
}());
exports.TKDataFormPropertyDirective = TKDataFormPropertyDirective;
var TKPropertyGroupLayoutDirective = (function () {
    function TKPropertyGroupLayoutDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKPropertyGroupLayoutDirective.prototype.ngOnInit = function () {
        var layout = this._elementRef.nativeElement;
        this.owner.propertyGroup.layout = layout;
    };
    TKPropertyGroupLayoutDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkPropertyGroupLayout]"
                },] },
    ];
    /** @nocollapse */
    TKPropertyGroupLayoutDirective.ctorParameters = function () { return [
        { type: TKPropertyGroupDirective, decorators: [{ type: core_1.Inject, args: [TKPropertyGroupDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKPropertyGroupLayoutDirective;
}());
exports.TKPropertyGroupLayoutDirective = TKPropertyGroupLayoutDirective;
var TKDataFormGroupsDirective = (function () {
    function TKDataFormGroupsDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKDataFormGroupsDirective.prototype.ngOnInit = function () {
        var property = this._elementRef.nativeElement;
        if (this.owner.dataForm.groups) {
            this.owner.dataForm.groups.push(property);
        }
        else {
            this.owner.dataForm.groups = new Array(property);
        }
    };
    TKDataFormGroupsDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkDataFormGroups]"
                },] },
    ];
    /** @nocollapse */
    TKDataFormGroupsDirective.ctorParameters = function () { return [
        { type: RadDataFormComponent, decorators: [{ type: core_1.Inject, args: [RadDataFormComponent,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKDataFormGroupsDirective;
}());
exports.TKDataFormGroupsDirective = TKDataFormGroupsDirective;
var TKPropertyGroupTitleStyleDirective = (function () {
    function TKPropertyGroupTitleStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKPropertyGroupTitleStyleDirective.prototype.ngOnInit = function () {
        var titleStyle = this._elementRef.nativeElement;
        this.owner.propertyGroup.titleStyle = titleStyle;
    };
    TKPropertyGroupTitleStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkPropertyGroupTitleStyle]"
                },] },
    ];
    /** @nocollapse */
    TKPropertyGroupTitleStyleDirective.ctorParameters = function () { return [
        { type: TKPropertyGroupDirective, decorators: [{ type: core_1.Inject, args: [TKPropertyGroupDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKPropertyGroupTitleStyleDirective;
}());
exports.TKPropertyGroupTitleStyleDirective = TKPropertyGroupTitleStyleDirective;
var TKPropertyEditorStyleDirective = (function () {
    function TKPropertyEditorStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKPropertyEditorStyleDirective.prototype.ngOnInit = function () {
        var style = this._elementRef.nativeElement;
        this.owner.propertyEditor.propertyEditorStyle = style;
    };
    TKPropertyEditorStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkPropertyEditorStyle]"
                },] },
    ];
    /** @nocollapse */
    TKPropertyEditorStyleDirective.ctorParameters = function () { return [
        { type: TKPropertyEditorDirective, decorators: [{ type: core_1.Inject, args: [TKPropertyEditorDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKPropertyEditorStyleDirective;
}());
exports.TKPropertyEditorStyleDirective = TKPropertyEditorStyleDirective;
var TKCustomPropertyEditorStyleDirective = (function () {
    function TKCustomPropertyEditorStyleDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKCustomPropertyEditorStyleDirective.prototype.ngOnInit = function () {
        var style = this._elementRef.nativeElement;
        this.owner.propertyEditor.propertyEditorStyle = style;
    };
    TKCustomPropertyEditorStyleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkCustomPropertyEditorStyle]"
                },] },
    ];
    /** @nocollapse */
    TKCustomPropertyEditorStyleDirective.ctorParameters = function () { return [
        { type: TKCustomPropertyEditorDirective, decorators: [{ type: core_1.Inject, args: [TKCustomPropertyEditorDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKCustomPropertyEditorStyleDirective;
}());
exports.TKCustomPropertyEditorStyleDirective = TKCustomPropertyEditorStyleDirective;
var TKPropertyGroupPropertiesDirective = (function () {
    function TKPropertyGroupPropertiesDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKPropertyGroupPropertiesDirective.prototype.ngOnInit = function () {
        var property = this._elementRef.nativeElement;
        if (this.owner.propertyGroup.properties) {
            this.owner.propertyGroup.properties.push(property);
        }
        else {
            this.owner.propertyGroup.properties = new Array(property);
        }
    };
    TKPropertyGroupPropertiesDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkPropertyGroupProperties]"
                },] },
    ];
    /** @nocollapse */
    TKPropertyGroupPropertiesDirective.ctorParameters = function () { return [
        { type: TKPropertyGroupDirective, decorators: [{ type: core_1.Inject, args: [TKPropertyGroupDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKPropertyGroupPropertiesDirective;
}());
exports.TKPropertyGroupPropertiesDirective = TKPropertyGroupPropertiesDirective;
var TKEntityPropertyEditorDirective = (function () {
    function TKEntityPropertyEditorDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKEntityPropertyEditorDirective.prototype.ngOnInit = function () {
        var editor = this._elementRef.nativeElement;
        this.owner.entityProperty.editor = editor;
    };
    TKEntityPropertyEditorDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkEntityPropertyEditor]"
                },] },
    ];
    /** @nocollapse */
    TKEntityPropertyEditorDirective.ctorParameters = function () { return [
        { type: TKEntityPropertyDirective, decorators: [{ type: core_1.Inject, args: [TKEntityPropertyDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKEntityPropertyEditorDirective;
}());
exports.TKEntityPropertyEditorDirective = TKEntityPropertyEditorDirective;
var TKEntityPropertyValidatorsDirective = (function () {
    function TKEntityPropertyValidatorsDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKEntityPropertyValidatorsDirective.prototype.ngOnInit = function () {
        var validator = this._elementRef.nativeElement;
        if (this.owner.entityProperty.validators) {
            this.owner.entityProperty.validators.push(validator);
        }
        else {
            this.owner.entityProperty.validators = new Array(validator);
        }
    };
    TKEntityPropertyValidatorsDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkEntityPropertyValidators]"
                },] },
    ];
    /** @nocollapse */
    TKEntityPropertyValidatorsDirective.ctorParameters = function () { return [
        { type: TKEntityPropertyDirective, decorators: [{ type: core_1.Inject, args: [TKEntityPropertyDirective,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKEntityPropertyValidatorsDirective;
}());
exports.TKEntityPropertyValidatorsDirective = TKEntityPropertyValidatorsDirective;
exports.DATAFORM_DIRECTIVES = [RadDataFormComponent, TKDataFormPropertyDirective, TKEntityPropertyEditorDirective, TKEntityPropertyDirective, TKDataFormGroupsDirective, TKPropertyGroupPropertiesDirective, TKPropertyGroupDirective, TKPropertyGroupTitleStyleDirective, TKPropertyEditorDirective, TKPropertyEditorStyleDirective, TKEntityPropertyValidatorsDirective, TKDataFormGridLayoutDirective, TKDataFormStackLayoutDirective, TKPropertyGroupLayoutDirective, TKCustomPropertyEditorDirective, TKCustomPropertyEditorStyleDirective];
element_registry_1.registerElement("RadDataForm", function () { return _1.RadDataForm; });
element_registry_1.registerElement("TKEntityProperty", function () { return _1.EntityProperty; });
element_registry_1.registerElement("TKPropertyEditor", function () { return _1.PropertyEditor; });
element_registry_1.registerElement("TKCustomPropertyEditor", function () { return _1.CustomPropertyEditor; });
element_registry_1.registerElement("TKPropertyGroup", function () { return _1.PropertyGroup; });
element_registry_1.registerElement("TKGroupTitleStyle", function () { return _1.GroupTitleStyle; });
element_registry_1.registerElement("TKPropertyEditorStyle", function () { return _1.PropertyEditorStyle; });
element_registry_1.registerElement("TKPropertyValidator", function () { return _1.PropertyValidator; });
element_registry_1.registerElement("TKNonEmptyValidator", function () { return _1.NonEmptyValidator; });
element_registry_1.registerElement("TKMaximumLengthValidator", function () { return _1.MaximumLengthValidator; });
element_registry_1.registerElement("TKMinimumLengthValidator", function () { return _1.MinimumLengthValidator; });
element_registry_1.registerElement("TKEmailValidator", function () { return _1.EmailValidator; });
element_registry_1.registerElement("TKRangeValidator", function () { return _1.RangeValidator; });
element_registry_1.registerElement("TKPhoneValidator", function () { return _1.PhoneValidator; });
element_registry_1.registerElement("TKIsTrueValidator", function () { return _1.IsTrueValidator; });
element_registry_1.registerElement("TKRegExValidator", function () { return _1.RegExValidator; });
element_registry_1.registerElement("TKDataFormGridLayout", function () { return _1.DataFormGridLayout; });
element_registry_1.registerElement("TKDataFormStackLayout", function () { return _1.DataFormStackLayout; });
var NativeScriptUIDataFormModule = (function () {
    function NativeScriptUIDataFormModule() {
    }
    NativeScriptUIDataFormModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [exports.DATAFORM_DIRECTIVES],
                    exports: [exports.DATAFORM_DIRECTIVES]
                },] },
    ];
    /** @nocollapse */
    NativeScriptUIDataFormModule.ctorParameters = function () { return []; };
    return NativeScriptUIDataFormModule;
}());
exports.NativeScriptUIDataFormModule = NativeScriptUIDataFormModule;
