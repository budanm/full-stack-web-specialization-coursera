Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var _1 = require("./../");
var ListItemContext = (function (_super) {
    __extends(ListItemContext, _super);
    function ListItemContext($implicit, item, index, even, odd) {
        var _this = _super.call(this, item) || this;
        _this.$implicit = $implicit;
        _this.item = item;
        _this.index = index;
        _this.even = even;
        _this.odd = odd;
        return _this;
    }
    return ListItemContext;
}(core_1.ElementRef));
exports.ListItemContext = ListItemContext;
var NG_VIEW = "ng_view";
var RadAutoCompleteTextViewComponent = (function () {
    function RadAutoCompleteTextViewComponent(_elementRef, loader) {
        var _this = this;
        this._elementRef = _elementRef;
        this.loader = loader;
        this.setupItemView = new core_1.EventEmitter();
        this._autoCompleteTextView = _elementRef.nativeElement;
        var component = this;
        this._autoCompleteTextView.itemViewLoader = function (viewType) {
            switch (viewType) {
                case _1.AutoCompleteViewTypes.ItemView:
                    if (component._itemTemplate && _this.loader) {
                        var nativeItem = _this.loader.createEmbeddedView(component._itemTemplate, new ListItemContext(), 0);
                        var typedView = getItemViewRoot(nativeItem);
                        typedView[NG_VIEW] = nativeItem;
                        return typedView;
                    }
                    break;
            }
        };
    }
    Object.defineProperty(RadAutoCompleteTextViewComponent.prototype, "nativeElement", {
        get: function () {
            return this._autoCompleteTextView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadAutoCompleteTextViewComponent.prototype, "autoCompleteTextView", {
        get: function () {
            return this._autoCompleteTextView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadAutoCompleteTextViewComponent.prototype, "itemTemplate", {
        set: function (value) {
            this._itemTemplate = value;
        },
        enumerable: true,
        configurable: true
    });
    RadAutoCompleteTextViewComponent.prototype.onItemLoading = function (args) {
        var index = args.index;
        var currentItem = args.data;
        var ngView = args.view[NG_VIEW];
        if (ngView) {
            this.setupViewRef(ngView, currentItem, index);
            this.detectChangesOnChild(ngView, index);
        }
    };
    RadAutoCompleteTextViewComponent.prototype.setupViewRef = function (viewRef, data, index) {
        var context = viewRef.context;
        context.$implicit = data;
        context.item = data;
        context.index = index;
        context.even = (index % 2 == 0);
        context.odd = !context.even;
        this.setupItemView.next({ view: viewRef, data: data, index: index, context: context });
    };
    RadAutoCompleteTextViewComponent.prototype.detectChangesOnChild = function (viewRef, index) {
        // Manually detect changes in child view ref
        // TODO: Is there a better way of getting viewRef's change detector
        var childChangeDetector = viewRef;
        childChangeDetector.markForCheck();
        childChangeDetector.detectChanges();
    };
    RadAutoCompleteTextViewComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "RadAutoCompleteTextView",
                    template: ""
                },] },
    ];
    /** @nocollapse */
    RadAutoCompleteTextViewComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
        { type: core_1.ViewContainerRef, decorators: [{ type: core_1.Inject, args: [core_1.ViewContainerRef,] },] },
    ]; };
    RadAutoCompleteTextViewComponent.propDecorators = {
        'setupItemView': [{ type: core_1.Output },],
        'onItemLoading': [{ type: core_1.HostListener, args: ["itemLoading", ['$event'],] },],
    };
    return RadAutoCompleteTextViewComponent;
}());
exports.RadAutoCompleteTextViewComponent = RadAutoCompleteTextViewComponent;
var TKAutoCompleteSuggestionViewDirective = (function () {
    function TKAutoCompleteSuggestionViewDirective(owner, _elementRef) {
        this.owner = owner;
        this._elementRef = _elementRef;
    }
    TKAutoCompleteSuggestionViewDirective.prototype.ngOnInit = function () {
        this._suggestionView = this._elementRef.nativeElement;
        this.owner.autoCompleteTextView.suggestionView = this._suggestionView;
    };
    Object.defineProperty(TKAutoCompleteSuggestionViewDirective.prototype, "nativeElement", {
        get: function () {
            return this._suggestionView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TKAutoCompleteSuggestionViewDirective.prototype, "autoCompleteTextView", {
        get: function () {
            return this._suggestionView;
        },
        enumerable: true,
        configurable: true
    });
    TKAutoCompleteSuggestionViewDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkAutoCompleteSuggestionView]"
                },] },
    ];
    /** @nocollapse */
    TKAutoCompleteSuggestionViewDirective.ctorParameters = function () { return [
        { type: RadAutoCompleteTextViewComponent, decorators: [{ type: core_1.Inject, args: [RadAutoCompleteTextViewComponent,] },] },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    return TKAutoCompleteSuggestionViewDirective;
}());
exports.TKAutoCompleteSuggestionViewDirective = TKAutoCompleteSuggestionViewDirective;
var TKSuggestionItemTemplateDirective = (function () {
    function TKSuggestionItemTemplateDirective(owner, template) {
        this.owner = owner;
        this.template = template;
    }
    TKSuggestionItemTemplateDirective.prototype.ngOnInit = function () {
        this.owner.itemTemplate = this.template;
    };
    TKSuggestionItemTemplateDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[tkSuggestionItemTemplate]"
                },] },
    ];
    /** @nocollapse */
    TKSuggestionItemTemplateDirective.ctorParameters = function () { return [
        { type: RadAutoCompleteTextViewComponent, decorators: [{ type: core_1.Inject, args: [RadAutoCompleteTextViewComponent,] },] },
        { type: core_1.TemplateRef, decorators: [{ type: core_1.Inject, args: [core_1.TemplateRef,] },] },
    ]; };
    return TKSuggestionItemTemplateDirective;
}());
exports.TKSuggestionItemTemplateDirective = TKSuggestionItemTemplateDirective;
function getItemViewRoot(viewRef, rootLocator) {
    if (rootLocator === void 0) { rootLocator = element_registry_1.getSingleViewRecursive; }
    var rootView = rootLocator(viewRef.rootNodes, 0);
    rootView.on("unloaded", function () {
        viewRef.destroy();
        delete rootView[NG_VIEW];
    });
    return rootView;
}
exports.AUTOCOMPLETETEXTVIEW_DIRECTIVES = [RadAutoCompleteTextViewComponent, TKAutoCompleteSuggestionViewDirective, TKSuggestionItemTemplateDirective];
element_registry_1.registerElement("RadAutoCompleteTextView", function () { return _1.RadAutoCompleteTextView; });
element_registry_1.registerElement("SuggestionView", function () { return _1.SuggestionView; });
var NativeScriptUIAutoCompleteTextViewModule = (function () {
    function NativeScriptUIAutoCompleteTextViewModule() {
    }
    NativeScriptUIAutoCompleteTextViewModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [exports.AUTOCOMPLETETEXTVIEW_DIRECTIVES],
                    exports: [exports.AUTOCOMPLETETEXTVIEW_DIRECTIVES]
                },] },
    ];
    /** @nocollapse */
    NativeScriptUIAutoCompleteTextViewModule.ctorParameters = function () { return []; };
    return NativeScriptUIAutoCompleteTextViewModule;
}());
exports.NativeScriptUIAutoCompleteTextViewModule = NativeScriptUIAutoCompleteTextViewModule;
