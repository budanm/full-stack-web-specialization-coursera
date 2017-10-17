Object.defineProperty(exports, "__esModule", { value: true });
var commonModule = require("./dataform-common");
var color_1 = require("tns-core-modules/color");
var utilsModule = require("tns-core-modules/utils/utils");
var observableModule = require("tns-core-modules/data/observable");
var enums = require("tns-core-modules/ui/enums");
require("utils/module-merge").merge(commonModule, exports);
var RadDataForm = (function (_super) {
    __extends(RadDataForm, _super);
    function RadDataForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._loaded = false;
        return _this;
    }
    RadDataForm.prototype.createNativeView = function () {
        if (!this._android) {
            this._android = new com.telerik.widget.dataform.visualization.RadDataForm(this._context);
            this._layoutManager = new com.telerik.widget.dataform.visualization.DataFormGroupLayoutManager(this._context);
            this._android.setLayoutManager(this._layoutManager);
        }
        var that = new WeakRef(this);
        this.entityPropertyChangedHandler = function (propertyChangeData) {
            var property = propertyChangeData.object;
            if (!property._shouldSkipEditorUpdate || propertyChangeData.propertyName != "editor") {
                if (!that.get()._android || !that.get()._loaded) {
                    return;
                }
                switch (propertyChangeData.propertyName) {
                    case 'index':
                    case 'hidden':
                    case 'editor':
                        that.get().reload();
                        break;
                }
            }
        };
        this.groupTitleStylePropertyChangedHandler = function (propertyChangeData) {
            if (!that.get()._android || !that.get()._loaded) {
                return;
            }
            that.get()._layoutManager.applyEditorGroupCustomizations();
        };
        this.groupLayoutPropertyChangedHandler = function (propertyChangeData) {
            if (!that.get()._android || !that.get()._loaded) {
                return;
            }
            that.get().android.arrangeEditors();
        };
        this.groupPropertyChangedHandler = function (propertyChangeData) {
            if (!that.get()._android || !that.get()._loaded) {
                return;
            }
            switch (propertyChangeData.propertyName) {
                case "collapsed":
                    var propertyGroup = propertyChangeData.object;
                    if (!propertyGroup.collapsible) {
                        // If the group is not collapsible, we don't want to collapse it.
                        if (propertyChangeData.value) {
                            console.log("WARNING: collapsible should be true before collapsing a group.");
                        }
                        return;
                    }
                    var nativeGroup = that.get().getNativeGroup(propertyGroup.name);
                    nativeGroup.setIsExpanded(!propertyChangeData.value);
                    break;
                case "hidden":
                case "titleHidden":
                case "collapsible":
                case "layout":
                    that.get()._android.arrangeEditors();
                    if (propertyChangeData.propertyName === 'layout') {
                        that.get()._attachGroupLayoutChangeListener(undefined, propertyChangeData.value);
                    }
                    break;
                case "titleStyle":
                    that.get()._layoutManager.applyEditorGroupCustomizations();
                    that.get()._attachGroupTitleStyleChangeListener(undefined, propertyChangeData.value);
                    break;
                case "name":
                    var group = propertyChangeData.object;
                    if (group.properties) {
                        for (var i = 0; i < group.properties.length; i++) {
                            var property = group.properties[i];
                            if (property.android) {
                                property.android.setGroupName(group.name);
                            }
                        }
                        that.get().reload();
                    }
                    break;
            }
        };
        this._setupGroups();
        this._updateEditorStyles();
        this._updateGroupStyles();
        this._updateSource();
        this._updateMetadata();
        this._updateIsReadOnly();
        this._updateCommitMode();
        this._updateValidationMode();
        this._addValidationListener();
        this._addCommitListener();
        this._loaded = true;
        return this._android;
    };
    RadDataForm.prototype.notifyValidated = function (propertyName, result) {
        var property = this.getPropertyByName(propertyName);
        var editor = property.editor;
        if (property.android) {
            var message = result ? property.successMessage : property.errorMessage;
            property.android.onValidationResult(property.valueCandidate, result, message);
        }
    };
    RadDataForm.prototype._setupGroups = function () {
        var that = new WeakRef(this);
        this._layoutManager.setCreateGroup(new com.telerik.android.common.Function2({
            apply: function (context, name) {
                if (that.get().groups) {
                    for (var i = 0; i < that.get().groups.length; i++) {
                        var propertyGroup = that.get().groups[i];
                        if (propertyGroup.name === name.toString()) {
                            var group_1 = void 0;
                            if (propertyGroup.collapsible) {
                                group_1 = new com.telerik.widget.dataform.visualization.ExpandableEditorGroup(context, name.toString());
                                that.get()._addIsExpandedChangedListener(group_1);
                                if (propertyGroup.collapsed) {
                                    group_1.setIsExpanded(false);
                                }
                            }
                            else {
                                group_1 = new com.telerik.widget.dataform.visualization.EditorGroup(context, name.toString());
                            }
                            if (propertyGroup.hidden) {
                                group_1.rootLayout().setVisibility(android.view.View.GONE);
                            }
                            if (propertyGroup.titleHidden) {
                                group_1.getHeaderContainer().setVisibility(android.view.View.GONE);
                            }
                            if (!propertyGroup.titleStyle) {
                                propertyGroup.titleStyle = new commonModule.GroupTitleStyle();
                            }
                            if (!propertyGroup.layout) {
                                propertyGroup.layout = new commonModule.DataFormStackLayout();
                            }
                            that.get()._updateGroupLayout(propertyGroup, group_1);
                            that.get()._attachGroupChangeListener(propertyGroup);
                            return group_1;
                        }
                    }
                }
                var group = new com.telerik.widget.dataform.visualization.EditorGroup(context, name.toString());
                if (group.getHeaderView()) {
                    group.getHeaderView().setVisibility(android.view.View.GONE);
                }
                return group;
            }
        }));
        this._android.arrangeEditors();
    };
    RadDataForm.prototype._updateGroupLayout = function (propertyGroup, nativeGroup) {
        var context = nativeGroup.rootLayout().getContext();
        if (propertyGroup.layout instanceof commonModule.DataFormStackLayout) {
            var nativeLinearLayout = new com.telerik.widget.dataform.visualization.DataFormLinearLayoutManager(context);
            if (propertyGroup.layout.orientation == enums.Orientation.horizontal) {
                nativeLinearLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
            }
            else {
                nativeLinearLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
            }
            nativeGroup.setLayoutManager(nativeLinearLayout);
        }
        else if (propertyGroup.layout instanceof commonModule.DataFormGridLayout) {
            var nativeTableLayout = new com.telerik.widget.dataform.visualization.DataFormTableLayoutManager(context);
            nativeGroup.setLayoutManager(nativeTableLayout);
        }
    };
    RadDataForm.prototype._updateSource = function () {
        if (!this._android || !this.source) {
            return;
        }
        this._android.setReloadSuspended(true);
        var objJSON = JSON.stringify(this.source);
        var jsonObject = new org.json.JSONObject(objJSON);
        this._android.setEntity(jsonObject);
        this._syncPropertiesWithNativeProperties();
        this._updateNativeGroups();
        this._android.setReloadSuspended(false);
        this.reload();
    };
    RadDataForm.prototype._updateMetadata = function () {
        if (!this._android || !this.metadata) {
            return;
        }
        this._android.setReloadSuspended(true);
        var objJSON = JSON.stringify(this.metadata);
        var jsonObject = new org.json.JSONObject(objJSON);
        var metadata = new com.telerik.widget.dataform.engine.DataFormMetadata(jsonObject);
        this._android.setMetadata(metadata);
        this._android.setReloadSuspended(false);
        this.reload();
    };
    RadDataForm.prototype._syncPropertiesWithNativeProperties = function () {
        var nativeEntity = this._android.getEntity();
        var nativeProperties = nativeEntity.properties();
        // We probably need to use the for(let  ) loop here
        var length = nativeProperties.size();
        for (var i = 0; i < length; i++) {
            var nativeProperty = nativeProperties.get(i);
            var property = this.getPropertyByName(nativeProperty.name());
            if (property == null) {
                var property = this._createPropertyFromNative(nativeProperty);
                if (!this.properties) {
                    this.properties = new Array();
                }
                this.properties.push(property);
            }
            else {
                property._linkPropertyWithNative(nativeProperty);
            }
            this._attachEntityPropertyPropertyChangeListener(property);
        }
    };
    RadDataForm.prototype.updateNativePropertyEditorDisplayMode = function (editor, value) {
        var nativeValue;
        switch (value.toLowerCase()) {
            case commonModule.AutoCompleteDisplayMode.Plain.toLowerCase():
                nativeValue = com.telerik.widget.autocomplete.DisplayMode.PLAIN;
                break;
            case commonModule.AutoCompleteDisplayMode.Tokens.toLowerCase():
                nativeValue = com.telerik.widget.autocomplete.DisplayMode.TOKENS;
                break;
        }
        if (value && editor) {
            editor.setDisplayMode(nativeValue);
        }
        else {
            console.log("autoCompleteDisplayMode cannot be set to: " + value);
        }
    };
    RadDataForm.prototype._updateNativeGroups = function () {
        if (!this.source) {
            return;
        }
        //go through all groups / entity properties
        if (this.groups) {
            for (var i = 0; i < this.groups.length; i++) {
                if (this.groups[i].properties) {
                    for (var j = 0; j < this.groups[i].properties.length; j++) {
                        var entityProperty = this.groups[i].properties[j];
                        if (entityProperty.android) {
                            entityProperty.android.setGroupName(this.groups[i].name);
                        }
                    }
                }
            }
        }
    };
    RadDataForm.prototype.getNativeGroup = function (name) {
        var groupCount = this._layoutManager.editorGroups().size();
        for (var i = 0; i < groupCount; i++) {
            var group = this._layoutManager.editorGroups().get(i);
            if (group.name() == name) {
                return group;
            }
        }
        return null;
    };
    RadDataForm.prototype._updateEditorStyles = function () {
        var that = new WeakRef(this);
        this._android.setEditorCustomizations(new com.telerik.android.common.Procedure({
            apply: function (editor) {
                var property = that.get().getPropertyByName(editor.property().name());
                if (property.editor) {
                    PropertyEditorHelper.applyStyle(property.editor);
                }
                var groupName = property.android ? property.android.getGroupName() : undefined;
                var args = {
                    eventName: commonModule.RadDataForm.editorUpdateEvent,
                    object: that.get(),
                    editor: editor,
                    entityProperty: property.android,
                    propertyName: property.name,
                    group: undefined,
                    groupName: groupName,
                    returnValue: true
                };
                that.get().notify(args);
            }
        }));
    };
    RadDataForm.prototype._updateGroupStyles = function () {
        var that = new WeakRef(this);
        this._layoutManager.setEditorGroupCustomizations(new com.telerik.android.common.Procedure({
            apply: function (editorGroup) {
                var group = that.get().getGroupByName(editorGroup.name());
                if (group == null || group.titleStyle == null) {
                    return;
                }
                that.get()._applyGroupTitleStyle(editorGroup, group.titleStyle);
                //throw event for additional customizations
                var groupName = editorGroup.name();
                var args = {
                    eventName: commonModule.RadDataForm.groupUpdateEvent,
                    object: this._owner,
                    editor: undefined,
                    entityProperty: undefined,
                    propertyName: undefined,
                    group: editorGroup,
                    groupName: groupName,
                    returnValue: true
                };
                that.get().notify(args);
            }
        }));
    };
    RadDataForm.prototype._createPropertyFromNative = function (nativeProperty) {
        var entityProperty = new EntityProperty();
        entityProperty.name = nativeProperty.name();
        entityProperty._linkPropertyWithNative(nativeProperty);
        return entityProperty;
    };
    RadDataForm.prototype._addValidationListener = function () {
        var that = new WeakRef(this);
        this._android.addValidationListener(new com.telerik.widget.dataform.engine.EntityPropertyValidationListener({
            onValidate: function (property) {
                var entityProperty = that.get().getPropertyByName(property.name());
                var group = that.get().getGroupByName(property.getGroupName());
                var args = {
                    eventName: commonModule.RadDataForm.propertyValidateEvent,
                    object: that.get(),
                    editor: entityProperty.editor,
                    entityProperty: entityProperty,
                    propertyName: property.name(),
                    group: group,
                    groupName: property.getGroupName(),
                    returnValue: true
                };
                that.get().notify(args);
                var result = Promise.resolve(args.returnValue);
                property.onValidationStarted();
                var validationValue = entityProperty.valueCandidate;
                result.then((function (answer) {
                    if (answer == false) {
                        property.onValidationResult(validationValue, false, entityProperty.errorMessage);
                    }
                    else {
                        property.onValidationResult(validationValue, true, entityProperty.successMessage);
                    }
                }));
            },
            onDidValidate: function (property) {
                var entityProperty = that.get().getPropertyByName(property.name());
                var group = that.get().getGroupByName(property.getGroupName());
                var args = {
                    eventName: commonModule.RadDataForm.propertyValidatedEvent,
                    object: that.get(),
                    editor: entityProperty.editor,
                    entityProperty: entityProperty,
                    propertyName: property.name(),
                    group: group,
                    groupName: property.getGroupName(),
                    returnValue: true
                };
                that.get().notify(args);
            }
        }));
    };
    RadDataForm.prototype._addCommitListener = function () {
        var that = new WeakRef(this);
        this._android.addCommitListener(new com.telerik.widget.dataform.engine.EntityPropertyCommitListener({
            onBeforeCommit: function (property) {
                var entityProperty = that.get().getPropertyByName(property.name());
                var args = {
                    eventName: commonModule.RadDataForm.propertyCommitEvent,
                    object: that.get(),
                    editor: undefined,
                    entityProperty: entityProperty,
                    propertyName: property.name(),
                    group: undefined,
                    groupName: property.getGroupName(),
                    returnValue: true
                };
                that.get().notify(args);
                return !args.returnValue;
            },
            onAfterCommit: function (property) {
                var entityProperty = that.get().getPropertyByName(property.name());
                if (that.get().source.hasOwnProperty(property.name())) {
                    var oldValue = that.get().source[property.name()];
                    var newValue = that.get().android.getEditedObject().get(property.name());
                    if (typeof oldValue == "number") {
                        newValue = Number(newValue);
                    }
                    if (typeof oldValue == "boolean") {
                        newValue = Boolean(newValue);
                    }
                    that.get().source[property.name()] = newValue;
                    var args = {
                        eventName: commonModule.RadDataForm.propertyCommittedEvent,
                        object: that.get(),
                        editor: undefined,
                        entityProperty: entityProperty,
                        propertyName: property.name(),
                        group: undefined,
                        groupName: property.getGroupName(),
                        returnValue: true
                    };
                    that.get().notify(args);
                }
            }
        }));
    };
    RadDataForm.prototype._addIsExpandedChangedListener = function (group) {
        var that = new WeakRef(this);
        group.addIsExpandedChangedListener(new com.telerik.widget.dataform.visualization.ExpandableEditorGroup.IsExpandedChangedListener({
            onChanged: function (isExpanded) {
                var name = isExpanded ?
                    commonModule.RadDataForm.groupExpandedEvent :
                    commonModule.RadDataForm.groupCollapsedEvent;
                var propertyGroup = that.get().getGroupByName(group.name());
                propertyGroup.collapsed = !isExpanded;
                var args = {
                    eventName: name,
                    object: that.get(),
                    editor: undefined,
                    entityProperty: undefined,
                    propertyName: undefined,
                    group: group,
                    groupName: group.name(),
                    returnValue: true
                };
                that.get().notify(args);
            }
        }));
    };
    RadDataForm.prototype._applyGroupTitleStyle = function (nativeGroup, titleStyle) {
        if (titleStyle.fillColor) {
            nativeGroup.getHeaderContainer().setBackgroundColor(RadDataForm._makeAndroidColor(titleStyle.fillColor));
        }
        if (titleStyle.strokeColor || titleStyle.strokeWidth) {
            var drawable = new android.graphics.drawable.GradientDrawable();
            var strokeWidthDips = titleStyle.strokeWidth ? titleStyle.strokeWidth : 2;
            var strokeWidth = strokeWidthDips * utilsModule.layout.getDisplayDensity();
            var strokeColor = titleStyle.strokeColor ?
                RadDataForm._makeAndroidColor(titleStyle.strokeColor) :
                android.graphics.Color.BLACK;
            var fillColor = titleStyle.fillColor ?
                RadDataForm._makeAndroidColor(titleStyle.fillColor) :
                android.graphics.Color.TRANSPARENT;
            drawable.setStroke(strokeWidth, strokeColor);
            drawable.setColor(fillColor);
            nativeGroup.getHeaderContainer().setBackgroundDrawable(drawable);
        }
        if (titleStyle.labelTextColor) {
            nativeGroup.getHeaderView().setTextColor(RadDataForm._makeAndroidColor(titleStyle.labelTextColor));
        }
        if (titleStyle.labelFontName || titleStyle.labelFontStyle) {
            var editorTypeface = RadDataForm._makeTypeface(titleStyle.labelFontName, titleStyle.labelFontStyle);
            nativeGroup.getHeaderView().setTypeface(editorTypeface);
        }
        if (titleStyle.labelTextSize) {
            nativeGroup.getHeaderView().setTextSize(titleStyle.labelTextSize);
        }
    };
    Object.defineProperty(RadDataForm.prototype, "editedObject", {
        get: function () {
            var editedObject = this._android.getEditedObject();
            if (editedObject) {
                return editedObject.toString();
            }
        },
        enumerable: true,
        configurable: true
    });
    RadDataForm.prototype._onIsReadOnlyPropertyChanged = function (oldValue, newValue) {
        this._updateIsReadOnly();
    };
    RadDataForm.prototype._onCommitModePropertyChanged = function (oldValue, newValue) {
        this._updateCommitMode();
    };
    RadDataForm.prototype._onValidationModePropertyChanged = function (oldValue, newValue) {
        this._updateValidationMode();
    };
    RadDataForm.prototype._updateIsReadOnly = function () {
        if (!this._android) {
            return;
        }
        this._android.setEnabled(!this.isReadOnly);
    };
    RadDataForm.prototype._updateCommitMode = function () {
        if (!this._android) {
            return;
        }
        switch (this.commitMode) {
            case commonModule.CommitMode.Immediate:
                this._android.setCommitMode(com.telerik.widget.dataform.visualization.core.CommitMode.IMMEDIATE);
                break;
            case commonModule.CommitMode.Manual:
                this._android.setCommitMode(com.telerik.widget.dataform.visualization.core.CommitMode.MANUAL);
                break;
            case commonModule.CommitMode.OnLostFocus:
                this._android.setCommitMode(com.telerik.widget.dataform.visualization.core.CommitMode.ON_LOST_FOCUS);
                break;
        }
    };
    RadDataForm.prototype._updateValidationMode = function () {
        if (!this._android) {
            return;
        }
        switch (this.validationMode) {
            case commonModule.ValidationMode.Immediate:
                this._android.setValidationMode(com.telerik.widget.dataform.visualization.core.ValidationMode.IMMEDIATE);
                break;
            case commonModule.ValidationMode.Manual:
                this._android.setValidationMode(com.telerik.widget.dataform.visualization.core.ValidationMode.MANUAL);
                break;
            case commonModule.ValidationMode.OnLostFocus:
                this._android.setValidationMode(com.telerik.widget.dataform.visualization.core.ValidationMode.ON_LOST_FOCUS);
                break;
        }
    };
    RadDataForm.prototype.reload = function () {
        if (this._android) {
            this._android.reload();
            if (!this._android.isReloadSuspended()) {
                this._syncEditorsWithNativeEditors();
            }
        }
    };
    RadDataForm.prototype.validateAll = function () {
        if (!this._android) {
            return null;
        }
        var that = new WeakRef(this);
        var promise = new Promise(function (resolve) {
            that.get()._validateResolve = resolve;
        });
        this._android.validateChanges(new com.telerik.android.common.Procedure({
            apply: function (info) {
                that.get().onValidateChangesEnded(!info.hasErrors());
            }
        }));
        return promise;
    };
    RadDataForm.prototype.onValidateChangesEnded = function (value) {
        if (this._validateResolve) {
            this._validateResolve(value);
            this._validateResolve = null;
        }
    };
    RadDataForm.prototype.validateAndCommitAll = function () {
        if (!this._android) {
            return null;
        }
        var that = new WeakRef(this);
        return new Promise(function (resolve) {
            that.get().validateAll().then(function (result) {
                if (result) {
                    that.get().android.commitForced();
                }
                resolve(result);
            });
        });
    };
    RadDataForm.prototype.commitAll = function () {
        if (!this._android) {
            return;
        }
        this._android.commitForced();
    };
    RadDataForm.prototype.hasValidationErrors = function () {
        if (this._android) {
            this._android.validateChanges();
            return this._android.hasValidationErrors();
        }
    };
    RadDataForm.prototype._onSourcePropertyChanged = function (oldValue, newValue) {
        this._updateSource();
    };
    RadDataForm.prototype._onMetadataPropertyChanged = function (oldValue, newValue) {
        this._updateMetadata();
    };
    RadDataForm.prototype._updateNativeEditor = function (entityProperty) {
        var nativeEditor = this._android.getExistingEditorForProperty(entityProperty.name);
        if (nativeEditor == null) {
            return;
        }
        if (!entityProperty.editor) {
            entityProperty._createEditorFromNative(nativeEditor);
        }
        else {
            PropertyEditorHelper._linkEditorWithNative(entityProperty.editor, nativeEditor);
            if (entityProperty.autoCompleteDisplayMode) {
                this.updateNativePropertyEditorDisplayMode(nativeEditor, entityProperty.autoCompleteDisplayMode);
            }
        }
    };
    RadDataForm.prototype._syncEditorsWithNativeEditors = function () {
        if (!this.source) {
            return;
        }
        if (this.groups) {
            for (var i = 0; i < this.groups.length; i++) {
                if (this.groups[i].properties) {
                    for (var j = 0; j < this.groups[i].properties.length; j++) {
                        var entityProperty = this.groups[i].properties[j];
                        this._updateNativeEditor(entityProperty);
                    }
                }
            }
        }
        if (this.properties) {
            for (var i = 0; i < this.properties.length; i++) {
                var entityProperty = this.properties[i];
                this._updateNativeEditor(entityProperty);
            }
        }
    };
    RadDataForm._makeAndroidColor = function (colorValue) {
        var nsColor = new color_1.Color(colorValue);
        return nsColor.android;
    };
    RadDataForm._makeTypeface = function (fontName, style) {
        var fontStyle = android.graphics.Typeface.NORMAL;
        if (style) {
            switch (commonModule.FontStyles[style]) {
                case commonModule.FontStyles.Bold:
                    fontStyle = android.graphics.Typeface.BOLD;
                    break;
                case commonModule.FontStyles.Italic:
                    fontStyle = android.graphics.Typeface.ITALIC;
                    break;
                case commonModule.FontStyles.BoldItalic:
                    fontStyle = android.graphics.Typeface.BOLD_ITALIC;
                    break;
            }
        }
        return android.graphics.Typeface.create(fontName, fontStyle);
    };
    return RadDataForm;
}(commonModule.RadDataForm));
exports.RadDataForm = RadDataForm;
var EntityProperty = (function (_super) {
    __extends(EntityProperty, _super);
    function EntityProperty() {
        var _this = _super.call(this) || this;
        _this._shouldSkipEditorUpdate = false;
        return _this;
    }
    Object.defineProperty(EntityProperty.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityProperty.prototype, "isValid", {
        get: function () {
            if (this.android) {
                return this.android.isValid();
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityProperty.prototype, "value", {
        get: function () {
            if (this.android) {
                return this.android.getValue();
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityProperty.prototype, "valueCandidate", {
        get: function () {
            if (this.android) {
                return this.android.getValueCandidate();
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    EntityProperty.prototype._linkPropertyWithNative = function (value) {
        this._android = value;
        this._onNativeSet();
    };
    EntityProperty.prototype._createEditorFromNative = function (nativeEditor) {
        var type = PropertyEditor._getNativeEditorType(nativeEditor);
        this._shouldSkipEditorUpdate = true;
        var propertyEditor = new PropertyEditor();
        propertyEditor.type = type;
        PropertyEditorHelper._linkEditorWithNative(propertyEditor, nativeEditor);
        this.editor = propertyEditor;
        this._shouldSkipEditorUpdate = false;
    };
    EntityProperty.prototype.onEditorChanged = function (oldValue, newValue) {
        if (oldValue) {
            oldValue.off(observableModule.Observable.propertyChangeEvent);
        }
        if (newValue instanceof commonModule.PropertyEditor) {
            var that = new WeakRef(this);
            newValue.on(observableModule.Observable.propertyChangeEvent, function (propertyChangeData) {
                if (propertyChangeData.propertyName === "type") {
                    that.get()._onEditorTypeChanged(propertyChangeData);
                }
            });
            if (!this._shouldSkipEditorUpdate) {
                this.updateNativeEditor(newValue);
            }
        }
    };
    EntityProperty.prototype._onEditorTypeChanged = function (data) {
        var newEditor = new PropertyEditor();
        newEditor.type = this.editor.type;
        newEditor.propertyEditorStyle = this.editor.propertyEditorStyle;
        newEditor.params = this.editor.params;
        this.editor = newEditor;
    };
    EntityProperty.prototype._onNativeSet = function () {
        if (!this._android) {
            return;
        }
        this.updateNativeEditor(this.editor);
        this.updateNativeValidators(this.validators);
        this.updateNativeConverter(this.converter);
        this.updateNativeValuesProvider(this.valuesProviderArray);
        this.updateNativeDisplayName(this.displayName);
        this.updateNativeIndex(this.index);
        this.updateNativeColumnIndex(this.columnIndex);
        this.updateNativeHidden(this.hidden);
        this.updateNativeReadOnly(this.readOnly);
        this.updateNativeRequired(this.required);
        this.updateNativeHintText(this.hintText);
        this.updateNativeImageResource(this.imageResource);
    };
    EntityProperty.prototype.updateNativeEditor = function (value) {
        if (!this._android || !value) {
            return;
        }
        if (value instanceof CustomPropertyEditor) {
            this._android.setEditorType(com.telerik.widget.dataform.visualization.editors.DataFormCustomEditor.class);
            return;
        }
        if (value.type == commonModule.EditorType.DatePicker) {
            this.android.setConverter(new StringToDateConverter().android);
        }
        else if (value.type == commonModule.EditorType.TimePicker) {
            this.android.setConverter(new StringToTimeConverter().android);
        }
        this._android.setEditorType(value.editorClass);
        this._android.setEditorParams(value.editorParams);
    };
    EntityProperty.prototype.updateNativeValidators = function (value) {
        if (!this._android || !value) {
            return;
        }
        var validatorSet = new com.telerik.widget.dataform.engine.PropertyValidatorSet();
        for (var k = 0; k < value.length; k++) {
            var validatorBase = value[k];
            var aValidator = validatorBase.android;
            validatorSet.add(aValidator);
        }
        this._android.setValidator(validatorSet);
    };
    EntityProperty.prototype.updateNativeValuesProvider = function (value) {
        if (!this._android || !value) {
            return;
        }
        var nativeSource = new java.util.ArrayList();
        for (var i = 0; i < value.length; i++) {
            var nativeValue = value[i];
            if (typeof nativeValue == "string") {
                nativeValue = nativeValue.trim();
            }
            if (typeof nativeValue == "number") {
                nativeValue = new java.lang.Integer(nativeValue);
            }
            nativeSource.add(nativeValue);
        }
        var nativeList = nativeSource.toArray();
        this._android.updateValues(nativeList);
        if (this.editor && this.editor.android) {
            this.editor.android.notifyEntityPropertyChanged();
        }
    };
    EntityProperty.prototype.updateNativeImageResource = function (value) {
        if (!this._android || value === undefined) {
            return;
        }
        if (value != null) {
            var nativeValue = value;
            var appResources = utilsModule.ad.getApplicationContext().getResources();
            var packageName = utilsModule.ad.getApplication().getPackageName();
            if (appResources) {
                var identifier = appResources.getIdentifier(nativeValue, 'drawable', packageName);
                nativeValue = identifier;
            }
            this._android.setImageResource(nativeValue);
        }
        else {
            this._android.setImageResource(0);
        }
        if (this.editor && this.editor.android) {
            this.editor.android.notifyEntityPropertyChanged();
        }
    };
    EntityProperty.prototype.updateNativeDisplayName = function (value) {
        if (!this._android || value == null) {
            return;
        }
        this._android.setHeader(value);
        if (this.editor && this.editor.android) {
            this.editor.android.notifyEntityPropertyChanged();
        }
    };
    EntityProperty.prototype.updateNativeIndex = function (value) {
        if (!this._android || value == null) {
            return;
        }
        this._android.setPosition(value);
    };
    EntityProperty.prototype.updateNativeConverter = function (value) {
        if (!this._android || value == null) {
            return;
        }
        this._android.setConverter(new com.telerik.widget.dataform.engine.PropertyConverter({
            convertTo: function (source) {
                var result = value.convertTo(source);
                return result;
            },
            convertFrom: function (source) {
                var result = value.convertFrom(source);
                return result;
            }
        }));
        if (this.editor && this.editor.android) {
            this.editor.android.loadPropertyValue();
        }
    };
    EntityProperty.prototype.updateNativeColumnIndex = function (value) {
        if (!this._android || value == null) {
            return;
        }
        this._android.setColumnPosition(value);
    };
    EntityProperty.prototype.updateNativeHidden = function (value) {
        if (!this._android || value == null) {
            return;
        }
        this._android.setSkip(value);
    };
    EntityProperty.prototype.updateNativeReadOnly = function (value) {
        if (!this._android || value == null) {
            return;
        }
        if (this.editor) {
            PropertyEditorHelper.setReadOnly(this.editor, value);
            if (this.editor.android) {
                this.editor.android.setEnabled(!value);
            }
        }
    };
    EntityProperty.prototype.updateNativeRequired = function (value) {
        if (!this._android || value == null) {
            return;
        }
        this._android.setRequired(value);
    };
    EntityProperty.prototype.updateNativeHintText = function (value) {
        if (!this._android || !value) {
            return;
        }
        this._android.setHintText(value);
        if (this.editor && this.editor.android) {
            this.editor.android.notifyEntityPropertyChanged();
        }
    };
    return EntityProperty;
}(commonModule.EntityProperty));
exports.EntityProperty = EntityProperty;
//////////////////////////////////////////////////////////////////////////////////////////////
// Editors
var PropertyEditor = (function (_super) {
    __extends(PropertyEditor, _super);
    function PropertyEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._readOnly = false;
        return _this;
    }
    Object.defineProperty(PropertyEditor.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyEditor.prototype, "editorClass", {
        get: function () {
            return this._editorClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyEditor.prototype, "editorParams", {
        get: function () {
            return this._editorParams;
        },
        enumerable: true,
        configurable: true
    });
    PropertyEditor.prototype.onPropertyEditorStyleChanged = function (oldValue, newValue) {
        PropertyEditorHelper.applyStyle(this);
    };
    PropertyEditor.prototype.onStylePropertyChanged = function (propertyName) {
        PropertyEditorHelper.applyStyleForProperty(this, propertyName);
    };
    PropertyEditor.prototype.onParamsChanged = function (oldValue, newValue) {
        PropertyEditorHelper.applyParams(this);
    };
    PropertyEditor.prototype.onParamsPropertyChanged = function (propertyName) {
        PropertyEditorHelper.applyParams(this);
    };
    PropertyEditor.prototype.onTypeChanged = function (oldValue, newValue) {
        this._updateEditorClass();
    };
    PropertyEditor.prototype._updateEditorClass = function () {
        if (this.type == null) {
            return;
        }
        switch (commonModule.EditorType[this.type]) {
            case commonModule.EditorType.Text:
                this._editorClass = com.telerik.widget.dataform.visualization.editors.DataFormTextEditor.class;
                break;
            case commonModule.EditorType.MultilineText:
                this._editorClass = com.telerik.widget.dataform.visualization.editors.DataFormMultilineTextEditor.class;
                break;
            case commonModule.EditorType.Email:
                this._editorClass = com.telerik.widget.dataform.visualization.editors.DataFormEmailEditor.class;
                break;
            case commonModule.EditorType.Password:
                this._editorClass = com.telerik.widget.dataform.visualization.editors.DataFormPasswordEditor.class;
                break;
            case commonModule.EditorType.Phone:
                this._editorClass = com.telerik.widget.dataform.visualization.editors.DataFormPhoneEditor.class;
                break;
            case commonModule.EditorType.Decimal:
                this._editorClass = com.telerik.widget.dataform.visualization.editors.DataFormDecimalEditor.class;
                break;
            case commonModule.EditorType.Number:
                this._editorClass = com.telerik.widget.dataform.visualization.editors.DataFormIntegerEditor.class;
                break;
            case commonModule.EditorType.Switch:
                this._editorClass = com.telerik.widget.dataform.visualization.editors.DataFormSwitchEditor.class;
                break;
            case commonModule.EditorType.Stepper:
                this._editorClass = com.telerik.widget.dataform.visualization.editors.DataFormNumberPickerEditor.class;
                break;
            case commonModule.EditorType.Slider:
                this._editorClass = com.telerik.widget.dataform.visualization.editors.DataFormSeekBarEditor.class;
                break;
            case commonModule.EditorType.SegmentedEditor:
                this._editorClass = com.telerik.widget.dataform.visualization.editors.DataFormSegmentedEditor.class;
                break;
            case commonModule.EditorType.DatePicker:
                this._editorClass = com.telerik.widget.dataform.visualization.editors.DataFormDateEditor.class;
                break;
            case commonModule.EditorType.TimePicker:
                this._editorClass = com.telerik.widget.dataform.visualization.editors.DataFormTimeEditor.class;
                break;
            case commonModule.EditorType.Picker:
                this._editorClass = com.telerik.widget.dataform.visualization.editors.DataFormSpinnerEditor.class;
                break;
            case commonModule.EditorType.List:
                this._editorClass = com.telerik.widget.dataform.visualization.editors.DataFormListViewEditor.class;
                break;
            case commonModule.EditorType.AutoCompleteInline:
                this._editorClass = com.telerik.widget.dataform.visualization.editors.DataFormRadAutoCompleteEditor.class;
                break;
            case commonModule.EditorType.Label:
                this._editorClass = com.telerik.widget.dataform.visualization.editors.DataFormLabelEditor.class;
                break;
            default:
                console.log("WARNING: Unsupported editor type: " + this.type);
        }
    };
    PropertyEditor._getNativeEditorType = function (nativeEditor) {
        var nativeEditorClass = nativeEditor.getClass();
        if (nativeEditorClass == com.telerik.widget.dataform.visualization.editors.DataFormMultilineTextEditor.class) {
            return commonModule.EditorType.MultilineText;
        }
        if (nativeEditorClass == com.telerik.widget.dataform.visualization.editors.DataFormEmailEditor.class) {
            return commonModule.EditorType.Email;
        }
        if (nativeEditorClass == com.telerik.widget.dataform.visualization.editors.DataFormPasswordEditor.class) {
            return commonModule.EditorType.Password;
        }
        if (nativeEditorClass == com.telerik.widget.dataform.visualization.editors.DataFormPhoneEditor.class) {
            return commonModule.EditorType.Phone;
        }
        if (nativeEditorClass == com.telerik.widget.dataform.visualization.editors.DataFormDecimalEditor.class) {
            return commonModule.EditorType.Decimal;
        }
        if (nativeEditorClass == com.telerik.widget.dataform.visualization.editors.DataFormIntegerEditor.class) {
            return commonModule.EditorType.Number;
        }
        if (nativeEditorClass == com.telerik.widget.dataform.visualization.editors.DataFormSwitchEditor.class) {
            return commonModule.EditorType.Switch;
        }
        if (nativeEditorClass == com.telerik.widget.dataform.visualization.editors.DataFormNumberPickerEditor.class) {
            return commonModule.EditorType.Stepper;
        }
        if (nativeEditorClass == com.telerik.widget.dataform.visualization.editors.DataFormSeekBarEditor.class) {
            return commonModule.EditorType.Slider;
        }
        if (nativeEditorClass == com.telerik.widget.dataform.visualization.editors.DataFormSegmentedEditor.class) {
            return commonModule.EditorType.SegmentedEditor;
        }
        if (nativeEditorClass == com.telerik.widget.dataform.visualization.editors.DataFormDateEditor.class) {
            return commonModule.EditorType.DatePicker;
        }
        if (nativeEditorClass == com.telerik.widget.dataform.visualization.editors.DataFormTimeEditor.class) {
            return commonModule.EditorType.TimePicker;
        }
        if (nativeEditorClass == com.telerik.widget.dataform.visualization.editors.DataFormSpinnerEditor.class) {
            return commonModule.EditorType.Picker;
        }
        if (nativeEditorClass == com.telerik.widget.dataform.visualization.editors.DataFormListViewEditor.class) {
            return commonModule.EditorType.List;
        }
        if (nativeEditorClass == com.telerik.widget.dataform.visualization.editors.DataFormRadAutoCompleteEditor.class) {
            return commonModule.EditorType.AutoCompleteInline;
        }
        if (nativeEditorClass == com.telerik.widget.dataform.visualization.editors.DataFormLabelEditor.class) {
            return commonModule.EditorType.Label;
        }
        return commonModule.EditorType.Text;
    };
    return PropertyEditor;
}(commonModule.PropertyEditor));
exports.PropertyEditor = PropertyEditor;
var CustomPropertyEditor = (function (_super) {
    __extends(CustomPropertyEditor, _super);
    function CustomPropertyEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._readOnly = false;
        return _this;
    }
    Object.defineProperty(CustomPropertyEditor.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomPropertyEditor.prototype, "editorClass", {
        get: function () {
            return this._editorClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomPropertyEditor.prototype, "editorParams", {
        get: function () {
            return this._editorParams;
        },
        enumerable: true,
        configurable: true
    });
    CustomPropertyEditor.prototype.onPropertyEditorStyleChanged = function (oldValue, newValue) {
        PropertyEditorHelper.applyStyle(this);
    };
    CustomPropertyEditor.prototype.onStylePropertyChanged = function (propertyName) {
        PropertyEditorHelper.applyStyleForProperty(this, propertyName);
    };
    CustomPropertyEditor.prototype.onParamsChanged = function (oldValue, newValue) {
        PropertyEditorHelper.applyParams(this);
    };
    CustomPropertyEditor.prototype.onParamsPropertyChanged = function (propertyName) {
        PropertyEditorHelper.applyParams(this);
    };
    CustomPropertyEditor.prototype.onTypeChanged = function (oldValue, newValue) {
        console.log("WARNING: You can't change CustomPropertyEditor's type");
    };
    CustomPropertyEditor.prototype.createView = function (context) {
        var args = {
            eventName: commonModule.CustomPropertyEditor.editorNeedsViewEvent,
            object: this,
            view: undefined,
            context: context,
            value: undefined
        };
        this.notify(args);
        return args.view;
    };
    CustomPropertyEditor.prototype.applyValueToEditor = function (value, view) {
        var args = {
            eventName: commonModule.CustomPropertyEditor.editorHasToApplyValueEvent,
            object: this,
            view: view,
            context: view.getContext(),
            value: value
        };
        this.notify(args);
    };
    CustomPropertyEditor.prototype.value = function (view) {
        var args = {
            eventName: commonModule.CustomPropertyEditor.editorNeedsValueEvent,
            object: this,
            view: view,
            context: view.getContext(),
            value: undefined
        };
        this.notify(args);
        return args.value;
    };
    CustomPropertyEditor.prototype.notifyValueChanged = function () {
        if (this.android) {
            this.android.notifyEditorValueChanged();
        }
    };
    return CustomPropertyEditor;
}(commonModule.CustomPropertyEditor));
exports.CustomPropertyEditor = CustomPropertyEditor;
var PropertyEditorHelper = (function () {
    function PropertyEditorHelper() {
    }
    PropertyEditorHelper._linkEditorWithNative = function (editor, value) {
        if (editor instanceof CustomPropertyEditor) {
            editor._android = value;
        }
        else {
            editor._android = value;
        }
        if (!editor.propertyEditorStyle) {
            editor.propertyEditorStyle = new commonModule.PropertyEditorStyle();
        }
        if (!editor.params) {
            editor.params = new commonModule.PropertyEditorParams();
        }
        PropertyEditorHelper._onNativeSet(editor);
    };
    PropertyEditorHelper._onNativeSet = function (editor) {
        if (!editor.android) {
            return;
        }
        if (editor instanceof CustomPropertyEditor) {
            editor.android.setProvider(new com.telerik.widget.dataform.visualization.editors.DataFormCustomEditor.DataFormCustomEditorProvider({
                createView: function (context) {
                    return editor.createView(context);
                },
                applyValueToEditor: function (value, view) {
                    editor.applyValueToEditor(value, view);
                },
                getValue: function (view) {
                    return editor.value(view);
                }
            }));
        }
        else {
            if (!editor.type) {
                editor.type = PropertyEditor._getNativeEditorType(editor.android);
            }
        }
        PropertyEditorHelper.applyStyle(editor);
        PropertyEditorHelper.applyParams(editor);
        var editorEnabled = !PropertyEditorHelper.isReadOnly(editor);
        editor.android.setEnabled(editorEnabled);
        editor.android.notifyEntityPropertyChanged();
    };
    PropertyEditorHelper._updateLabelTextColor = function (editor, labelTextColor) {
        if (!editor.android || labelTextColor === undefined) {
            return;
        }
        var nsColor = RadDataForm._makeAndroidColor(labelTextColor);
        // <<<<<<< HEAD:nativescript-telerik-ui-pro/dataform/dataform.android.ts
        //         (<android.widget.TextView>this._android.getHeaderView()).setTextColor(nsColor);
        // =======
        editor.android.getHeaderView().setTextColor(nsColor);
        //>>>>>>> master:dataform/dev_env/app/component/dataform.android.ts
    };
    PropertyEditorHelper._updateLabelFont = function (editor, labelFontName, labelFontStyle) {
        if (!editor._android || (labelFontName === undefined && labelFontStyle === undefined)) {
            return;
        }
        var editorTypeface = RadDataForm._makeTypeface(labelFontName, labelFontStyle);
        editor.android.getHeaderView().setTypeface(editorTypeface);
    };
    PropertyEditorHelper._updateLabelTextSize = function (editor, labelTextSize) {
        if (!editor.android || labelTextSize === undefined) {
            return;
        }
        editor.android.getHeaderView().setTextSize(labelTextSize);
    };
    PropertyEditorHelper._updateLabelHorizontalOffset = function (editor, labelHorizontalOffset) {
        if (!editor.android || labelHorizontalOffset === undefined) {
            return;
        }
        editor.android.getHeaderView().setTranslationX(labelHorizontalOffset);
    };
    PropertyEditorHelper._updateLabelVerticalOffset = function (editor, labelVerticalOffset) {
        if (!editor.android || labelVerticalOffset === undefined) {
            return;
        }
        editor.android.getHeaderView().setTranslationY(labelVerticalOffset);
    };
    PropertyEditorHelper._updateEditorHorizontalOffset = function (editor, editorHorizontalOffset) {
        if (!editor.android || editorHorizontalOffset === undefined) {
            return;
        }
        editor.android.getEditorView().setTranslationX(editorHorizontalOffset);
    };
    PropertyEditorHelper._updateEditorVerticalOffset = function (editor, editorVerticalOffset) {
        if (!editor.android || editorVerticalOffset === undefined) {
            return;
        }
        editor.android.getEditorView().setTranslationY(editorVerticalOffset);
    };
    PropertyEditorHelper._updateEditorFillColor = function (editor, editorFillColor) {
        if (!editor.android || editorFillColor === undefined) {
            return;
        }
        var nsColor = RadDataForm._makeAndroidColor(editorFillColor);
        editor.android.rootLayout().setBackgroundColor(nsColor);
    };
    PropertyEditorHelper._updateEditorStroke = function (editor, editorStrokeColor, editorStrokeWidth, editorFillColor) {
        if (!editor.android || (editorStrokeColor === undefined && editorStrokeWidth === undefined)) {
            return;
        }
        var drawable = new android.graphics.drawable.GradientDrawable();
        var strokeWidthDips = editorStrokeWidth ? editorStrokeWidth : 2;
        var strokeWidth = strokeWidthDips * utilsModule.layout.getDisplayDensity();
        var strokeColor = editorStrokeColor ?
            RadDataForm._makeAndroidColor(editorStrokeColor) :
            android.graphics.Color.BLACK;
        var fillColor = editorFillColor ?
            RadDataForm._makeAndroidColor(editorFillColor) :
            android.graphics.Color.TRANSPARENT;
        drawable.setStroke(strokeWidth, strokeColor);
        drawable.setColor(fillColor);
        editor.android.rootLayout().setBackgroundDrawable(drawable);
    };
    PropertyEditorHelper._updateLabelHidden = function (editor, labelHidden) {
        if (!editor.android || labelHidden === undefined) {
            return;
        }
        var visibility = labelHidden ? android.view.View.GONE : android.view.View.VISIBLE;
        editor.android.getHeaderView().setVisibility(visibility);
    };
    PropertyEditorHelper._updateLabelPosition = function (editor, labelPosition) {
        if (!editor.android || labelPosition === undefined) {
            return;
        }
        var nativeLabelPosition = labelPosition == commonModule.DataFormLabelPosition.Left ?
            com.telerik.widget.dataform.engine.LabelPosition.LEFT :
            com.telerik.widget.dataform.engine.LabelPosition.TOP;
        editor.android.setLabelPosition(nativeLabelPosition);
    };
    PropertyEditorHelper._updateLabelWidth = function (editor, labelWidth) {
        if (!editor.android || labelWidth === undefined) {
            return;
        }
        var nativeLabelWidth = labelWidth * utilsModule.layout.getDisplayDensity();
        editor.android.setLabelWidth(nativeLabelWidth);
    };
    PropertyEditorHelper.applyParams = function (editor) {
        var editorParams = editor.params;
        if (!editorParams) {
            return;
        }
        editor._editorParams = new java.util.HashMap();
        if (editorParams.minimum) {
            var min = new java.lang.Float(editorParams.minimum);
            editor._editorParams.put("minimum", min);
        }
        if (editorParams.maximum) {
            var max = new java.lang.Float(editorParams.maximum);
            editor._editorParams.put("maximum", max);
        }
        if (editorParams.step) {
            var step = new java.lang.Float(editorParams.step);
            editor._editorParams.put("step", step);
        }
        if (editor.android) {
            editor.android.applyParams(editor.editorParams);
        }
    };
    PropertyEditorHelper.applyStyle = function (editor) {
        if (!editor.propertyEditorStyle) {
            return;
        }
        PropertyEditorHelper._updateLabelTextColor(editor, editor.propertyEditorStyle.labelTextColor);
        PropertyEditorHelper._updateLabelFont(editor, editor.propertyEditorStyle.labelFontName, editor.propertyEditorStyle.labelFontStyle);
        PropertyEditorHelper._updateLabelTextSize(editor, editor.propertyEditorStyle.labelTextSize);
        PropertyEditorHelper._updateLabelHorizontalOffset(editor, editor.propertyEditorStyle.labelHorizontalOffset);
        PropertyEditorHelper._updateLabelVerticalOffset(editor, editor.propertyEditorStyle.labelVerticalOffset);
        PropertyEditorHelper._updateEditorHorizontalOffset(editor, editor.propertyEditorStyle.editorHorizontalOffset);
        PropertyEditorHelper._updateEditorVerticalOffset(editor, editor.propertyEditorStyle.editorVerticalOffset);
        PropertyEditorHelper._updateEditorFillColor(editor, editor.propertyEditorStyle.fillColor);
        PropertyEditorHelper._updateEditorStroke(editor, editor.propertyEditorStyle.strokeColor, editor.propertyEditorStyle.strokeWidth, editor.propertyEditorStyle.fillColor);
        PropertyEditorHelper._updateLabelHidden(editor, editor.propertyEditorStyle.labelHidden);
        PropertyEditorHelper._updateLabelPosition(editor, editor.propertyEditorStyle.labelPosition);
        PropertyEditorHelper._updateLabelWidth(editor, editor.propertyEditorStyle.labelWidth);
    };
    PropertyEditorHelper.applyStyleForProperty = function (editor, propertyName) {
        if (!editor.propertyEditorStyle) {
            return;
        }
        switch (propertyName) {
            case "labelTextColor":
                PropertyEditorHelper._updateLabelTextColor(editor, editor.propertyEditorStyle.labelTextColor);
                break;
            case "labelFontName":
            case "labelFontStyle":
                PropertyEditorHelper._updateLabelFont(editor, editor.propertyEditorStyle.labelFontName, editor.propertyEditorStyle.labelFontStyle);
                break;
            case "labelTextSize":
                PropertyEditorHelper._updateLabelTextSize(editor, editor.propertyEditorStyle.labelTextSize);
                break;
            case "labelHorizontalOffset":
                PropertyEditorHelper._updateLabelHorizontalOffset(editor, editor.propertyEditorStyle.labelHorizontalOffset);
                break;
            case "labelVerticalOffset":
                PropertyEditorHelper._updateLabelVerticalOffset(editor, editor.propertyEditorStyle.labelVerticalOffset);
                break;
            case "editorHorizontalOffset":
                PropertyEditorHelper._updateEditorHorizontalOffset(editor, editor.propertyEditorStyle.editorHorizontalOffset);
                break;
            case "editorVerticalOffset":
                PropertyEditorHelper._updateEditorVerticalOffset(editor, editor.propertyEditorStyle.editorVerticalOffset);
                break;
            case "fillColor":
                PropertyEditorHelper._updateEditorFillColor(editor, editor.propertyEditorStyle.fillColor);
                PropertyEditorHelper._updateEditorStroke(editor, editor.propertyEditorStyle.strokeColor, editor.propertyEditorStyle.strokeWidth, editor.propertyEditorStyle.fillColor);
                break;
            case "strokeColor":
            case "strokeWidth":
                PropertyEditorHelper._updateEditorStroke(editor, editor.propertyEditorStyle.strokeColor, editor.propertyEditorStyle.strokeWidth, editor.propertyEditorStyle.fillColor);
                break;
            case "labelHidden":
                PropertyEditorHelper._updateLabelHidden(editor, editor.propertyEditorStyle.labelHidden);
                break;
            case "labelPosition":
                PropertyEditorHelper._updateLabelPosition(editor, editor.propertyEditorStyle.labelPosition);
            case "labelWidth":
                PropertyEditorHelper._updateLabelWidth(editor, editor.propertyEditorStyle.labelWidth);
                break;
        }
    };
    PropertyEditorHelper.isReadOnly = function (editor) {
        if (editor instanceof CustomPropertyEditor) {
            return editor._readOnly;
        }
        return editor._readOnly;
    };
    PropertyEditorHelper.setReadOnly = function (editor, value) {
        if (editor instanceof CustomPropertyEditor) {
            editor._readOnly = value;
        }
        editor._readOnly = value;
    };
    return PropertyEditorHelper;
}());
exports.PropertyEditorHelper = PropertyEditorHelper;
//////////////////////////////////////////////////////////////////////////////////////////////
// Validators
var PropertyValidator = (function (_super) {
    __extends(PropertyValidator, _super);
    function PropertyValidator() {
        var _this = _super.call(this) || this;
        _this._android = new com.telerik.widget.dataform.engine.PropertyValidatorManual();
        var that = new WeakRef(_this);
        _this._android.setValidationProvider(new com.telerik.widget.dataform.engine.PropertyValidatorManual.ValidationProvider({
            validate: function (value, propertyName) {
                return that.get().validate(value, propertyName);
            }
        }));
        if (_this.errorMessage == undefined) {
            _this.errorMessage = "This is not valid.";
        }
        return _this;
    }
    Object.defineProperty(PropertyValidator.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    PropertyValidator.prototype.validate = function (value, propertyName) {
        return true;
    };
    return PropertyValidator;
}(commonModule.PropertyValidator));
exports.PropertyValidator = PropertyValidator;
var MinimumLengthValidator = (function (_super) {
    __extends(MinimumLengthValidator, _super);
    function MinimumLengthValidator() {
        var _this = _super.call(this) || this;
        _this._android = new com.telerik.widget.dataform.engine.MinimumLengthValidator();
        return _this;
    }
    Object.defineProperty(MinimumLengthValidator.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    MinimumLengthValidator.prototype.onLengthChanged = function (oldValue, newValue) {
        if (!isNaN(+newValue)) {
            this.android.setMinimumLength(newValue);
        }
    };
    return MinimumLengthValidator;
}(commonModule.MinimumLengthValidator));
exports.MinimumLengthValidator = MinimumLengthValidator;
var MaximumLengthValidator = (function (_super) {
    __extends(MaximumLengthValidator, _super);
    function MaximumLengthValidator() {
        var _this = _super.call(this) || this;
        _this._android = new com.telerik.widget.dataform.engine.MaximumLengthValidator();
        return _this;
    }
    Object.defineProperty(MaximumLengthValidator.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    MaximumLengthValidator.prototype.onLengthChanged = function (oldValue, newValue) {
        if (!isNaN(+newValue)) {
            this.android.setMaximumLength(newValue);
        }
    };
    return MaximumLengthValidator;
}(commonModule.MaximumLengthValidator));
exports.MaximumLengthValidator = MaximumLengthValidator;
var EmailValidator = (function (_super) {
    __extends(EmailValidator, _super);
    function EmailValidator() {
        var _this = _super.call(this) || this;
        _this._android = new com.telerik.widget.dataform.engine.MailValidator();
        return _this;
    }
    Object.defineProperty(EmailValidator.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return EmailValidator;
}(commonModule.EmailValidator));
exports.EmailValidator = EmailValidator;
var NonEmptyValidator = (function (_super) {
    __extends(NonEmptyValidator, _super);
    function NonEmptyValidator() {
        var _this = _super.call(this) || this;
        _this._android = new com.telerik.widget.dataform.engine.NonEmptyValidator();
        return _this;
    }
    Object.defineProperty(NonEmptyValidator.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return NonEmptyValidator;
}(commonModule.NonEmptyValidator));
exports.NonEmptyValidator = NonEmptyValidator;
var RangeValidator = (function (_super) {
    __extends(RangeValidator, _super);
    function RangeValidator() {
        var _this = _super.call(this) || this;
        _this._android = new com.telerik.widget.dataform.engine.RangeValidator();
        return _this;
    }
    Object.defineProperty(RangeValidator.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    RangeValidator.prototype.onMinimumChanged = function (oldValue, newValue) {
        if (!isNaN(+newValue)) {
            this._android.setMin(newValue);
        }
    };
    RangeValidator.prototype.onMaximumChanged = function (oldValue, newValue) {
        if (!isNaN(+newValue)) {
            this._android.setMax(newValue);
        }
    };
    return RangeValidator;
}(commonModule.RangeValidator));
exports.RangeValidator = RangeValidator;
var PhoneValidator = (function (_super) {
    __extends(PhoneValidator, _super);
    function PhoneValidator() {
        var _this = _super.call(this) || this;
        _this._android = new com.telerik.widget.dataform.engine.PhoneValidator();
        return _this;
    }
    Object.defineProperty(PhoneValidator.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return PhoneValidator;
}(commonModule.PhoneValidator));
exports.PhoneValidator = PhoneValidator;
var RegExValidator = (function (_super) {
    __extends(RegExValidator, _super);
    function RegExValidator() {
        var _this = _super.call(this) || this;
        _this._android = new com.telerik.widget.dataform.engine.RegExValidator();
        return _this;
    }
    Object.defineProperty(RegExValidator.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    RegExValidator.prototype.onRegExChanged = function (oldValue, newValue) {
        this._android.setRegEx(newValue);
    };
    return RegExValidator;
}(commonModule.RegExValidator));
exports.RegExValidator = RegExValidator;
var IsTrueValidator = (function (_super) {
    __extends(IsTrueValidator, _super);
    function IsTrueValidator() {
        var _this = _super.call(this) || this;
        _this._android = new com.telerik.widget.dataform.engine.IsTrueValidator();
        return _this;
    }
    Object.defineProperty(IsTrueValidator.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return IsTrueValidator;
}(commonModule.IsTrueValidator));
exports.IsTrueValidator = IsTrueValidator;
var StringToDateConverter = (function (_super) {
    __extends(StringToDateConverter, _super);
    function StringToDateConverter() {
        var _this = _super.call(this) || this;
        _this._android = new com.telerik.widget.dataform.engine.StringToDateConverter();
        return _this;
    }
    Object.defineProperty(StringToDateConverter.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return StringToDateConverter;
}(commonModule.StringToDateConverter));
exports.StringToDateConverter = StringToDateConverter;
var StringToTimeConverter = (function (_super) {
    __extends(StringToTimeConverter, _super);
    function StringToTimeConverter() {
        var _this = _super.call(this) || this;
        _this._android = new com.telerik.widget.dataform.engine.StringToTimeConverter();
        return _this;
    }
    Object.defineProperty(StringToTimeConverter.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return StringToTimeConverter;
}(commonModule.StringToTimeConverter));
exports.StringToTimeConverter = StringToTimeConverter;
