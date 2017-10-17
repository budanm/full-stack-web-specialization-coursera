Object.defineProperty(exports, "__esModule", { value: true });
var commonModule = require("./dataform-common");
var color_1 = require("tns-core-modules/color");
var utils = require("tns-core-modules/utils/utils");
var enums = require("tns-core-modules/ui/enums");
require("utils/module-merge").merge(commonModule, exports);
//////////////////////////////////////////////
var TKDataFormDelegateImplementation = (function (_super) {
    __extends(TKDataFormDelegateImplementation, _super);
    function TKDataFormDelegateImplementation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TKDataFormDelegateImplementation.new = function () {
        return _super.new.call(this);
    };
    TKDataFormDelegateImplementation.prototype.initWithOwner = function (owner) {
        this._owner = new WeakRef(owner);
        return this;
    };
    /**
     * Called when a row with the corresponding property is selected.
     */
    TKDataFormDelegateImplementation.prototype.dataFormDidSelectEditorForProperty = function (dataForm, editor, property) {
        var args = {
            eventName: commonModule.RadDataForm.editorSelectedEvent,
            object: this._owner.get(),
            editor: editor,
            entityProperty: property,
            propertyName: property.name,
            group: undefined,
            groupName: property.groupName,
            returnValue: true
        };
        this._owner.get().notify(args);
    };
    /**
     * Called when a row with the corresponding property is deselected.
     */
    TKDataFormDelegateImplementation.prototype.dataFormDidDeselectEditorForProperty = function (dataForm, editor, property) {
        var args = {
            eventName: commonModule.RadDataForm.editorDeselectedEvent,
            object: this._owner.get(),
            editor: editor,
            entityProperty: property,
            propertyName: property.name,
            group: undefined,
            groupName: property.groupName,
            returnValue: true
        };
        this._owner.get().notify(args);
    };
    /**
     * Called after a property is edited.
     */
    TKDataFormDelegateImplementation.prototype.dataFormDidEditProperty = function (dataForm, property) {
        var args = {
            eventName: commonModule.RadDataForm.propertyEditedEvent,
            object: this._owner.get(),
            editor: undefined,
            entityProperty: property,
            propertyName: property.name,
            group: undefined,
            groupName: property.groupName,
            returnValue: true
        };
        this._owner.get().notify(args);
    };
    /**
     * Called after a property is validated.
     */
    TKDataFormDelegateImplementation.prototype.dataFormDidValidatePropertyEditor = function (dataForm, property, editor) {
        var entityProperty = this._owner.get().getPropertyByName(property.name);
        var group = this._owner.get().getGroupByName(property.groupName);
        var args = {
            eventName: commonModule.RadDataForm.propertyValidatedEvent,
            object: this._owner.get(),
            editor: entityProperty.editor,
            entityProperty: entityProperty,
            propertyName: property.name,
            group: group,
            groupName: property.groupName,
            returnValue: true
        };
        this._owner.get().notify(args);
    };
    /**
     * Called after validate method has been called to notify that the process has ended.
     */
    TKDataFormDelegateImplementation.prototype.dataFormDidFinishValidation = function (dataForm, result) {
        if (this._owner.get()._validateResolve != null) {
            this._owner.get()._validateResolve(result);
            this._owner.get()._validateResolve = null;
        }
    };
    /**
     * Called after commit method has been called to notify that the process has ended.
     */
    TKDataFormDelegateImplementation.prototype.dataFormDidFinishCommit = function (dataForm, result) {
        if (this._owner.get()._commitResolve != null) {
            this._owner.get()._commitResolve(result);
            this._owner.get()._commitResolve = null;
        }
    };
    /**
     * Called when a property has to be validated.
     */
    TKDataFormDelegateImplementation.prototype.dataFormValidatePropertyEditor = function (dataForm, property, editor) {
        var entityProperty = this._owner.get().getPropertyByName(property.name);
        var validatedValue = property.valueCandidate;
        var group = this._owner.get().getGroupByName(property.groupName);
        var args = {
            eventName: commonModule.RadDataForm.propertyValidateEvent,
            object: this._owner.get(),
            editor: entityProperty.editor,
            entityProperty: entityProperty,
            propertyName: property.name,
            group: group,
            groupName: property.groupName,
            returnValue: true
        };
        this._owner.get().notify(args);
        var result = Promise.resolve(args.returnValue);
        dataForm.onValidationStartedEditor(property, editor);
        result.then((function (answer) {
            if (answer == false) {
                property.errorMessage = entityProperty.errorMessage;
                dataForm.onValidationResultValuePropertyEditor(false, validatedValue, property, editor);
            }
            else {
                property.positiveMessage = entityProperty.successMessage;
                dataForm.onValidationResultValuePropertyEditor(true, validatedValue, property, editor);
            }
        }));
        return args.returnValue;
    };
    /**
     *  Called once when the data form creates its ediors. This method lets you to set properties that are not going to be changed.
     */
    TKDataFormDelegateImplementation.prototype.dataFormSetupEditorForProperty = function (dataForm, editor, property) {
        var entityProperty = this._owner.get().getPropertyByName(property.name);
        if (!entityProperty) {
            entityProperty = this._owner.get()._createPropertyFromNative(property);
            if (!this._owner.get().properties) {
                this._owner.get().properties = new Array();
            }
            this._owner.get().properties.push(entityProperty);
        }
        entityProperty._updateNativeEditor(editor);
        var args = {
            eventName: commonModule.RadDataForm.editorSetupEvent,
            object: this._owner.get(),
            editor: editor,
            entityProperty: property,
            propertyName: property.name,
            group: undefined,
            groupName: property.groupName,
            returnValue: true
        };
        this._owner.get().notify(args);
    };
    /**
    *  Called when the data is reloaded in the native RadDataForm component (reloadData). This method lets you to set the PropertyChanged callbacks for all {N} properties.
    */
    TKDataFormDelegateImplementation.prototype.dataFormDidFinishEditorIntitialization = function (dataForm) {
        if (this._owner.get().source == undefined) {
            return;
        }
        if (this._owner.get().properties) {
            for (var i = 0; i < this._owner.get().properties.length; i++) {
                var entityProperty = this._owner.get().properties[i];
                this._owner.get()._attachEntityPropertyPropertyChangeListener(entityProperty);
                entityProperty._updateNativeEditor(entityProperty.editor.ios);
            }
        }
        if (this._owner.get().groups) {
            for (var i = 0; i < this._owner.get().groups.length; i++) {
                var group = this._owner.get().groups[i];
                if (group.properties) {
                    for (var j = 0; j < group.properties.length; j++) {
                        var entityProperty = group.properties[j];
                        this._owner.get()._attachEntityPropertyPropertyChangeListener(entityProperty);
                        entityProperty._updateNativeEditor(entityProperty.editor.ios);
                    }
                }
            }
        }
    };
    /**
     * Called before an editor is desplayed to the screen or after validation. This method lets you change the visual styles and setting of TKDataFormEditor object.
     */
    TKDataFormDelegateImplementation.prototype.dataFormUpdateEditorForProperty = function (dataForm, editor, property) {
        var entityProperty = this._owner.get().getPropertyByName(property.name);
        PropertyEditorHelper.applyStyle(entityProperty.editor);
        var args = {
            eventName: commonModule.RadDataForm.editorUpdateEvent,
            object: this._owner.get(),
            editor: editor,
            entityProperty: property,
            propertyName: property.name,
            group: undefined,
            groupName: property.groupName,
            returnValue: true
        };
        this._owner.get().notify(args);
    };
    /**
     * This method lets you change the visual styles and setting of TKEntityPropertyGroupView object.
     */
    TKDataFormDelegateImplementation.prototype.dataFormUpdateGroupViewForGroupAtIndex = function (dataForm, groupView, groupIndex) {
        //apply style customizations for defined in xml groups only and escape the default group with fields not included in xml 
        if (!this._owner.get().groups) {
            groupView.titleView.hidden = true;
            return;
        }
        if (groupView == null || groupView.group == null) {
            return;
        }
        if (groupView.group.name == null) {
            // This is the default group, whose title is null.
            // We can hide it, so that it doesn't take any space.
            groupView.titleView.hidden = true;
            return;
        }
        var groupName = groupView.group.name;
        var group = this._owner.get().getGroupByName(groupName);
        groupView.collapsible = group.collapsible;
        if (group.collapsible) {
            if (groupView.isCollapsed != group.collapsed) {
                if (group.collapsed) {
                    groupView.collapse();
                }
                else {
                    groupView.expand();
                }
            }
        }
        groupView.titleView.hidden = group.titleHidden;
        this._owner.get()._updateGroupLayout(group, groupView);
        this._owner.get()._applyGroupTitleStyle(groupView, group.titleStyle);
        //throw event for additional customizations
        var args = {
            eventName: commonModule.RadDataForm.groupUpdateEvent,
            object: this._owner.get(),
            editor: undefined,
            entityProperty: undefined,
            propertyName: undefined,
            group: groupView,
            groupName: groupName,
            returnValue: true
        };
        this._owner.get().notify(args);
    };
    /**
     * Called just before a property value will be committed to the business object.
     */
    TKDataFormDelegateImplementation.prototype.dataFormWillCommitProperty = function (dataForm, property) {
        var entityProperty = this._owner.get().getPropertyByName(property.name);
        var args = {
            eventName: commonModule.RadDataForm.propertyCommitEvent,
            object: this._owner.get(),
            editor: undefined,
            entityProperty: entityProperty,
            propertyName: property.name,
            group: undefined,
            groupName: property.groupName,
            returnValue: true
        };
        this._owner.get().notify(args);
        return args.returnValue;
    };
    /**
     * Called after a property value is committed to the business object.
     */
    TKDataFormDelegateImplementation.prototype.dataFormDidCommitProperty = function (dataForm, property) {
        if (this._owner.get().source.hasOwnProperty(property.name)) {
            this._owner.get().source[property.name] = property.originalValue;
        }
        var entityProperty = this._owner.get().getPropertyByName(property.name);
        var args = {
            eventName: commonModule.RadDataForm.propertyCommittedEvent,
            object: this._owner.get(),
            editor: null,
            entityProperty: entityProperty,
            propertyName: property.name,
            group: null,
            groupName: property.groupName,
            returnValue: true
        };
        this._owner.get().notify(args);
    };
    /**
     * Called after a group is collapsed.
     */
    TKDataFormDelegateImplementation.prototype.dataFormDidCollapseGroupView = function (dataForm, groupView) {
        var groupName = groupView != null && groupView.group != null ? groupView.group.name : null;
        var group = this._owner.get().getGroupByName(groupName);
        group.collapsed = true;
        var args = {
            eventName: commonModule.RadDataForm.groupCollapsedEvent,
            object: this._owner.get(),
            editor: undefined,
            entityProperty: undefined,
            propertyName: undefined,
            group: groupView,
            groupName: groupName,
            returnValue: true
        };
        this._owner.get().notify(args);
    };
    /**
     * Called after a group is expanded.
     */
    TKDataFormDelegateImplementation.prototype.dataFormDidExpandGroupView = function (dataForm, groupView) {
        var groupName = groupView != null && groupView.group != null ? groupView.group.name : null;
        var group = this._owner.get().getGroupByName(groupName);
        group.collapsed = false;
        var args = {
            eventName: commonModule.RadDataForm.groupExpandedEvent,
            object: this._owner.get(),
            editor: undefined,
            entityProperty: undefined,
            propertyName: undefined,
            group: groupView,
            groupName: groupName,
            returnValue: true
        };
        this._owner.get().notify(args);
    };
    TKDataFormDelegateImplementation.ObjCProtocols = [TKDataFormDelegate];
    return TKDataFormDelegateImplementation;
}(NSObject));
var TKDataFormConverterImplementation = (function (_super) {
    __extends(TKDataFormConverterImplementation, _super);
    function TKDataFormConverterImplementation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TKDataFormConverterImplementation.new = function () {
        return _super.new.call(this);
    };
    TKDataFormConverterImplementation.prototype.initWithConverter = function (converter) {
        this._converter = converter;
        return this;
    };
    TKDataFormConverterImplementation.prototype.convertFrom = function (source) {
        return this._converter.convertFrom(source);
    };
    TKDataFormConverterImplementation.prototype.convertTo = function (source) {
        return this._converter.convertTo(source);
    };
    TKDataFormConverterImplementation.ObjCProtocols = [TKDataFormConverter];
    return TKDataFormConverterImplementation;
}(NSObject));
////////////////////////////////////////////////////////////////////////////
var TKDataFormCustomEditorDelegateImplementation = (function (_super) {
    __extends(TKDataFormCustomEditorDelegateImplementation, _super);
    function TKDataFormCustomEditorDelegateImplementation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TKDataFormCustomEditorDelegateImplementation.new = function () {
        return _super.new.call(this);
    };
    TKDataFormCustomEditorDelegateImplementation.prototype.initWithOwner = function (owner) {
        this._owner = new WeakRef(owner);
        return this;
    };
    TKDataFormCustomEditorDelegateImplementation.prototype.editorWillCreateView = function (editor) {
        var args = {
            eventName: commonModule.CustomPropertyEditor.editorNeedsViewEvent,
            object: this._owner.get(),
            view: undefined,
            context: undefined,
            value: undefined
        };
        this._owner.get().notify(args);
        return args.view;
    };
    TKDataFormCustomEditorDelegateImplementation.prototype.editorShouldApplyValueEditorView = function (editor, value, view) {
        var args = {
            eventName: commonModule.CustomPropertyEditor.editorHasToApplyValueEvent,
            object: this._owner.get(),
            view: view,
            context: undefined,
            value: value
        };
        this._owner.get().notify(args);
    };
    TKDataFormCustomEditorDelegateImplementation.prototype.editorWillReturnValueEditorView = function (editor, view) {
        var args = {
            eventName: commonModule.CustomPropertyEditor.editorNeedsValueEvent,
            object: this._owner.get(),
            view: view,
            context: undefined,
            value: undefined
        };
        this._owner.get().notify(args);
        return args.value;
    };
    TKDataFormCustomEditorDelegateImplementation.ObjCProtocols = [TKDataFormCustomEditorDelegate];
    return TKDataFormCustomEditorDelegateImplementation;
}(NSObject));
////////////////////////////////////////////////////////////////////////////
var TKDataFormValidationProviderDelegateImplementation = (function (_super) {
    __extends(TKDataFormValidationProviderDelegateImplementation, _super);
    function TKDataFormValidationProviderDelegateImplementation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TKDataFormValidationProviderDelegateImplementation.new = function () {
        return _super.new.call(this);
    };
    TKDataFormValidationProviderDelegateImplementation.prototype.initWithOwner = function (owner) {
        this._owner = new WeakRef(owner);
        return this;
    };
    TKDataFormValidationProviderDelegateImplementation.prototype.validatorWillValidate = function (validator, property) {
        return this._owner.get().validate(property.valueCandidate, property.name);
    };
    TKDataFormValidationProviderDelegateImplementation.ObjCProtocols = [TKDataFormValidationProviderDelegate];
    return TKDataFormValidationProviderDelegateImplementation;
}(NSObject));
////////////////////////////////////////////////////////////////////////////
var RadDataForm = (function (_super) {
    __extends(RadDataForm, _super);
    function RadDataForm() {
        var _this = _super.call(this) || this;
        _this._initialized = false;
        _this._ios = TKDataForm.new();
        _this._nativeDelegate = TKDataFormDelegateImplementation.new().initWithOwner(_this);
        var that = new WeakRef(_this);
        _this.entityPropertyChangedHandler = function (data) {
            that.get().onPropertyPropertyChanged(data);
        };
        _this.groupPropertyChangedHandler = function (data) {
            that.get().onGroupPropertyChanged(data);
        };
        _this.groupTitleStylePropertyChangedHandler = function (data) {
            that.get().onGroupTitleStylePropertyChanged(data);
        };
        _this.groupLayoutPropertyChangedHandler = function (data) {
            that.get()._onGroupLayoutPropertyChanged(data.object);
        };
        _this.on("isEnabledChange", _this.isEnabledChanged, _this);
        return _this;
    }
    RadDataForm.prototype.createNativeView = function () {
        return this._ios;
    };
    RadDataForm.prototype.disposeNativeView = function () {
        this._ios.delegate = undefined;
        this._nativeDelegate = undefined;
    };
    RadDataForm.prototype.isEnabledChanged = function (data) {
        this._ios.readOnly = !data.value;
    };
    RadDataForm.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios.delegate = this._nativeDelegate;
    };
    RadDataForm.prototype.onUnloaded = function () {
        _super.prototype.onUnloaded.call(this);
        this._ios.delegate = null;
    };
    RadDataForm.prototype.notifyValidated = function (propertyName, result) {
        var property = this.getPropertyByName(propertyName);
        var editor = property.editor;
        if (!result) {
            property.ios.errorMessage = property.errorMessage;
        }
        this._ios.onValidationResultValuePropertyEditor(result, property.valueCandidate, property.ios, editor.ios);
    };
    Object.defineProperty(RadDataForm.prototype, "editedObject", {
        get: function () {
            var result = this._ios.dataSource.writeJSONToString();
            var parsedResult = JSON.parse(result);
            var finalResult = JSON.stringify(parsedResult);
            return finalResult;
        },
        enumerable: true,
        configurable: true
    });
    RadDataForm.prototype._reset = function () {
        this._dataSource.removeAllGroups();
        this._initDataForm();
    };
    RadDataForm.prototype._applyGroupTitleStyle = function (groupView, titleStyle) {
        if (titleStyle.fillColor) {
            groupView.titleView.style.fill = TKSolidFill.solidFillWithColor((new color_1.Color(titleStyle.fillColor)).ios);
        }
        if (titleStyle.strokeColor || titleStyle.strokeWidth) {
            var stroke = TKStroke.new();
            if (titleStyle.strokeWidth) {
                stroke.width = titleStyle.strokeWidth;
            }
            if (titleStyle.strokeColor) {
                stroke.color = (new color_1.Color(titleStyle.strokeColor)).ios;
            }
            groupView.titleView.style.stroke = stroke;
        }
        if (titleStyle.separatorColor) {
            groupView.titleView.style.separatorColor = TKSolidFill.solidFillWithColor((new color_1.Color(titleStyle.separatorColor)).ios);
        }
        if (titleStyle.labelTextColor) {
            groupView.titleView.titleLabel.textColor = (new color_1.Color(titleStyle.labelTextColor)).ios;
        }
        if (titleStyle.labelFontName || titleStyle.labelTextSize || titleStyle.labelFontStyle) {
            groupView.titleView.titleLabel.font = RadDataForm.getFontWithProperties(titleStyle.labelFontName, titleStyle.labelTextSize, titleStyle.labelFontStyle);
        }
    };
    RadDataForm.prototype._updateGroupLayout = function (propertyGroup, nativeGroup) {
        if (propertyGroup.layout instanceof commonModule.DataFormStackLayout) {
            var nativeLayout = TKStackLayout.alloc().init();
            if (propertyGroup.layout.orientation == enums.Orientation.horizontal) {
                nativeLayout.orientation = 0 /* Horizontal */;
            }
            else {
                nativeLayout.orientation = 1 /* Vertical */;
            }
            nativeGroup.editorsContainer.layout = nativeLayout;
        }
        else if (propertyGroup.layout instanceof commonModule.DataFormGridLayout) {
            nativeGroup.editorsContainer.layout = TKGridLayout.alloc().init();
        }
    };
    RadDataForm.prototype.onGroupPropertyChanged = function (data) {
        if (!this._ios || !this._initialized) {
            return;
        }
        switch (data.propertyName) {
            case "collapsed":
                var propertyGroup = data.object;
                if (!propertyGroup.collapsible) {
                    // If the group is not collapsible, we don't want to collapse it.
                    if (data.value) {
                        console.log("WARNING: collapsible should be true before collapsing a group.");
                    }
                    return;
                }
                var nativeGroup = this.getNativeGroup(propertyGroup.name);
                var groupView = this._ios.groupViewForGroup(nativeGroup);
                if (data.value == groupView.isCollapsed) {
                    // If the group already confronts to the newValue, don't do anything.
                    return;
                }
                if (data.value) {
                    groupView.collapse();
                }
                else {
                    groupView.expand();
                }
                break;
            case "titleHidden":
                var nativeGroup = this.getNativeGroup(data.object.name);
                var nativeGroupView = this._ios.groupViewForGroup(nativeGroup);
                if (nativeGroupView) {
                    nativeGroupView.titleView.hidden = data.value;
                    nativeGroupView.setNeedsLayout();
                }
                break;
            case "hidden":
                var nativeGroup = this.getNativeGroup(data.object.name);
                nativeGroup.hidden = data.value;
                this.reload();
                break;
            case "collapsible":
            case "titleStyle":
                this.reload();
                break;
            case "layout":
                this._onLayoutPropertyChanged(data.object);
            case "name":
                this._reset();
                break;
        }
    };
    RadDataForm.prototype._onLayoutPropertyChanged = function (group) {
        if (!this._ios || !this._initialized) {
            return;
        }
        this._updateLayout(group);
    };
    RadDataForm.prototype._updateLayout = function (group) {
        var nativeGroup = this.getNativeGroup(group.name);
        var nativeGroupView = this._ios.groupViewForGroup(nativeGroup);
        this._updateGroupLayout(group, nativeGroupView);
    };
    RadDataForm.prototype.getNativeGroup = function (name) {
        var groupCount = this._dataSource.numberOfGroupsInDataForm(this._ios);
        for (var i = 0; i < groupCount; i++) {
            var group = this._dataSource.groupAtIndex(i);
            if (group.name == name) {
                return group;
            }
        }
        return null;
    };
    RadDataForm.prototype.onGroupTitleStylePropertyChanged = function (data) {
        if (!this._ios || !this._initialized) {
            return;
        }
        this.reload();
    };
    RadDataForm.prototype._onGroupLayoutPropertyChanged = function (group) {
        if (!this._ios || !this._initialized) {
            return;
        }
        this._updateLayout(group);
    };
    RadDataForm.prototype.onPropertyPropertyChanged = function (data) {
        if (!this._ios || !this._initialized) {
            return;
        }
        var property = data.object;
        if (!property || !property.ios) {
            this.reload();
            return;
        }
        var nativeProperty = property.ios;
        switch (data.propertyName) {
            case "readOnly":
                this._ios.updateEditorForProperty(nativeProperty);
                break;
            case "hintText":
            case "hidden":
            case "index":
            case "displayName":
            case "valuesProvider":
            case "editor":
                this.reload();
                break;
        }
    };
    RadDataForm.prototype._initDataForm = function () {
        if (!this.source || !this._dataSource) {
            return;
        }
        //go through all groups / entity properties
        if (this.groups) {
            for (var i = 0; i < this.groups.length; ++i) {
                var group = this.groups[i];
                var propertyNames = NSMutableArray.alloc().initWithCapacity(group.properties.length);
                if (group.properties) {
                    for (var j = 0; j < group.properties.length; ++j) {
                        var entityProperty = group.properties[j];
                        propertyNames.addObject(entityProperty.name);
                    }
                }
                this._dataSource.addGroupWithNamePropertyNames(group.name, propertyNames);
                // When a group is added to the data source, each property gets a new
                // value for its layoutInfo.row. Since we want the index defined in NS,
                // to have a bigger priority, we make the update after the property is
                // added to the data source.
                if (group.properties) {
                    for (var j = 0; j < group.properties.length; ++j) {
                        var entityProperty = group.properties[j];
                        this._updateNativeProperty(entityProperty);
                    }
                }
                var nativeGroup = this.getNativeGroup(group.name);
                if (group.hidden) {
                    nativeGroup.hidden = true;
                }
                if (!group.titleStyle) {
                    group.titleStyle = new commonModule.GroupTitleStyle();
                }
                if (!group.layout) {
                    group.layout = new commonModule.DataFormStackLayout();
                }
                this._attachGroupChangeListener(group);
            }
        }
        if (this.properties) {
            for (var i = 0; i < this.properties.length; ++i) {
                var entityProperty = this.properties[i];
                this._updateNativeProperty(entityProperty);
            }
        }
        this._ios.dataSource = this._dataSource;
        this._initialized = true;
    };
    RadDataForm.prototype._createPropertyFromNative = function (nativeProperty) {
        var entityProperty = new EntityProperty();
        entityProperty.name = nativeProperty.name;
        entityProperty._linkPropertyWithNative(nativeProperty);
        return entityProperty;
    };
    RadDataForm.prototype._updateNativeProperty = function (entityProperty) {
        var nativeProperty = this._dataSource.propertyWithName(entityProperty.name);
        if (nativeProperty) {
            entityProperty._linkPropertyWithNative(nativeProperty);
        }
        else {
            console.log("Cannot create native TKEntityProperty for EntityProperty with 'name': " + entityProperty.name);
        }
    };
    RadDataForm.prototype._onSourcePropertyChanged = function (oldValue, newValue) {
        if (newValue) {
            var objJSON = JSON.stringify(newValue);
            this._dataSource = TKDataFormEntityDataSource.alloc().initWithJSONStringRootItemKeyPath(objJSON, null);
            this._initDataForm();
        }
    };
    RadDataForm.prototype._onMetadataPropertyChanged = function (oldValue, newValue) {
        if (newValue) {
            var objJSON = JSON.stringify(newValue);
            this._ios.setupWithJSONAnnotationsString(objJSON);
            this.reload();
        }
    };
    RadDataForm.prototype._onIsReadOnlyPropertyChanged = function (oldValue, newValue) {
        this._ios.readOnly = newValue;
    };
    RadDataForm.prototype._onCommitModePropertyChanged = function (oldValue, newValue) {
        if (newValue) {
            switch (commonModule.CommitMode[newValue]) {
                case commonModule.CommitMode.Immediate:
                    this._ios.commitMode = 0 /* Immediate */; //TKDataFormCommitMode
                    break;
                case commonModule.CommitMode.Manual:
                    this._ios.commitMode = 2 /* Manual */; //TKDataFormCommitMode
                    break;
                case commonModule.CommitMode.OnLostFocus:
                    this._ios.commitMode = 1 /* OnLostFocus */; //TKDataFormCommitMode
                    break;
            }
        }
    };
    RadDataForm.prototype._onValidationModePropertyChanged = function (oldValue, newValue) {
        if (newValue) {
            switch (commonModule.ValidationMode[newValue]) {
                case commonModule.ValidationMode.Immediate:
                    this._ios.validationMode = 0 /* Immediate */; //TKDataFormValidationMode
                    break;
                case commonModule.ValidationMode.Manual:
                    this._ios.validationMode = 2 /* Manual */; //TKDataFormValidationMode
                    break;
                case commonModule.ValidationMode.OnLostFocus:
                    this._ios.validationMode = 1 /* OnLostFocus */; //TKDataFormValidationMode
                    break;
            }
        }
    };
    RadDataForm.prototype._onGroupsPropertyChanged = function (oldValue, newValue) {
    };
    RadDataForm.prototype.validateAll = function () {
        var that = new WeakRef(this);
        var promise = new Promise(function (resolve) {
            that.get()._validateResolve = resolve;
        });
        this._ios.validate();
        return promise;
    };
    RadDataForm.prototype.validateAndCommitAll = function () {
        var that = new WeakRef(this);
        var promise = new Promise(function (resolve) {
            that.get()._commitResolve = resolve;
        });
        this._ios.commit();
        return promise;
    };
    RadDataForm.prototype.commitAll = function () {
        this._ios.commitForced();
    };
    RadDataForm.prototype.reload = function () {
        if (this._ios) {
            this._ios.reloadData();
        }
    };
    RadDataForm.prototype.hasValidationErrors = function () {
        if (this._ios) {
            this._ios.validate();
            return this._ios.hasValidationErrors();
        }
    };
    ////////////////////////////////////////////////////////////////////////////
    // Helpers
    RadDataForm.getFontWithProperties = function (fontName, size, style) {
        var font = null;
        var fontSize = !isNaN(+size) ? size : 17;
        if (fontName) {
            font = UIFont.fontWithNameSize(fontName, fontSize);
            if (!font) {
                console.log("WARNING: Cannot create font with given name: " + fontSize);
                return;
            }
        }
        if (!font && !isNaN(+size)) {
            font = UIFont.systemFontOfSize(fontSize);
        }
        if (style) {
            var traits = 0 /* ClassUnknown */;
            switch (commonModule.FontStyles[style]) {
                case commonModule.FontStyles.Bold:
                    traits = 2 /* TraitBold */;
                    break;
                case commonModule.FontStyles.Italic:
                    traits = 1 /* TraitItalic */;
                    break;
                case commonModule.FontStyles.BoldItalic:
                    traits = 2 /* TraitBold */ | 1 /* TraitItalic */;
                    break;
            }
            if (!font) {
                font = UIFont.systemFontOfSize(fontSize);
            }
            var newFont = UIFont.fontWithDescriptorSize(utils.ios.getter(font, font.fontDescriptor).fontDescriptorWithSymbolicTraits(traits), fontSize);
            if (newFont) {
                font = newFont;
            }
        }
        return font;
    };
    return RadDataForm;
}(commonModule.RadDataForm));
exports.RadDataForm = RadDataForm;
///////////////////////////////////////////////
var PropertyGroup = (function (_super) {
    __extends(PropertyGroup, _super);
    function PropertyGroup() {
        return _super.call(this) || this;
    }
    //todo: consider if these properties need handles at all    
    PropertyGroup.prototype.onNameChanged = function (oldValue, newValue) {
    };
    PropertyGroup.prototype.onHiddenChanged = function (oldValue, newValue) {
    };
    PropertyGroup.prototype.onCollapsibleChanged = function (oldValue, newValue) {
    };
    PropertyGroup.prototype.onTitleStyleChanged = function (oldValue, newValue) {
    };
    PropertyGroup.prototype.onPropertiesChanged = function (oldValue, newValue) {
    };
    return PropertyGroup;
}(commonModule.PropertyGroup));
exports.PropertyGroup = PropertyGroup;
var EntityProperty = (function (_super) {
    __extends(EntityProperty, _super);
    function EntityProperty() {
        var _this = _super.call(this) || this;
        _this._shouldSkipEditorUpdate = false;
        return _this;
    }
    Object.defineProperty(EntityProperty.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityProperty.prototype, "isValid", {
        get: function () {
            if (this.ios) {
                return this.ios.isValid;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityProperty.prototype, "value", {
        get: function () {
            if (this.ios) {
                return this.ios.originalValue;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityProperty.prototype, "valueCandidate", {
        get: function () {
            if (this.ios) {
                return this.ios.valueCandidate;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    EntityProperty.prototype._linkPropertyWithNative = function (value) {
        this._ios = value;
        this._ios.pickersUseIndexValue = false;
        this._onNativeSet();
    };
    EntityProperty.prototype._updateNativeEditor = function (nativeEditor) {
        if (!this.editor) {
            this._createEditorFromNative(nativeEditor);
        }
        else {
            PropertyEditorHelper._linkEditorWithNative(this.editor, nativeEditor);
        }
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
    EntityProperty.prototype._onNativeSet = function () {
        this.updateNativeValidators(this.validators);
        this.updateNativeValuesProvider(this.valuesProviderArray);
        this.updateNativeAutoCompleteDisplayMode(this.autoCompleteDisplayMode);
        this.updateNativeDisplayName(this.displayName);
        this.updateNativeIndex(this.index);
        this.updateNativeColumnIndex(this.columnIndex);
        this.updateNativeHidden(this.hidden);
        this.updateNativeReadOnly(this.readOnly);
        this.updateNativeRequired(this.required);
        this.updateNativeHintText(this.hintText);
        this.updateNativeImageResource(this.imageResource);
        this.updateNativeEditorParams(this.editor);
        this.updateNativeEditor(this.editor);
    };
    EntityProperty.prototype.onEditorTypeChanged = function () {
        var newEditor = new PropertyEditor();
        newEditor.type = this.editor.type;
        newEditor.propertyEditorStyle = this.editor.propertyEditorStyle;
        newEditor.params = this.editor.params;
        this.editor = newEditor;
    };
    EntityProperty.prototype.updateNativeEditorParams = function (value) {
        if (!this._ios || !value || !value.params) {
            return;
        }
        var editorParams = value.params;
        if (editorParams.minimum && editorParams.maximum) {
            if (!isNaN(editorParams.minimum) && !isNaN(editorParams.maximum)) {
                this._ios.range = TKRange.rangeWithMinimumAndMaximum(editorParams.minimum, editorParams.maximum);
            }
        }
        if (editorParams.step && !isNaN(editorParams.step)) {
            this._ios.step = editorParams.step;
        }
    };
    EntityProperty.prototype.updateNativeEditor = function (value) {
        if (!this._ios || !value) {
            return;
        }
        if (value instanceof CustomPropertyEditor) {
            this._ios.editorClass = TKDataFormCustomEditor.class();
            return;
        }
        if (value.type == commonModule.EditorType.DatePicker) {
            this._ios.converter = new StringToDateConverter().ios;
        }
        else if (value.type == commonModule.EditorType.TimePicker) {
            this._ios.converter = new StringToTimeConverter().ios;
        }
        this._ios.editorClass = value.editorClass;
    };
    EntityProperty.prototype.updateNativeValidators = function (value) {
        if (!this._ios || !value) {
            return;
        }
        var validatorSet = NSMutableArray.new();
        for (var k = 0; k < value.length; k++) {
            var validatorBase = value[k];
            var aValidator = validatorBase.ios;
            validatorSet.addObject(aValidator);
        }
        this._ios.validators = validatorSet;
    };
    EntityProperty.prototype.updateNativeValuesProvider = function (value) {
        if (!this._ios || !value) {
            return;
        }
        var nativeSource = NSMutableArray.new();
        for (var i = 0; i < value.length; i++) {
            var nativeValue = value[i];
            if (typeof nativeValue == "string") {
                nativeValue = nativeValue.trim();
            }
            nativeSource.addObject(nativeValue);
        }
        this._ios.valuesProvider = nativeSource;
        if (this.editor && this.editor.ios) {
            this.editor.ios.update();
        }
    };
    EntityProperty.prototype.updateNativeAutoCompleteDisplayMode = function (value) {
        if (!this._ios || !value) {
            return;
        }
        var nativeValue;
        switch (value.toLowerCase()) {
            case commonModule.AutoCompleteDisplayMode.Plain.toLowerCase():
                nativeValue = 0 /* Plain */;
                break;
            case commonModule.AutoCompleteDisplayMode.Tokens.toLowerCase():
                nativeValue = 1 /* Tokens */;
                break;
        }
        if (nativeValue !== undefined) {
            this._ios.autoCompleteDisplayMode = nativeValue;
        }
        else {
            console.log("autoCompleteDisplayMode cannot be set to: " + value);
        }
    };
    EntityProperty.prototype.updateNativeImageResource = function (value) {
        if (!this._ios || value === undefined) {
            return;
        }
        if (value != null) {
            var image = UIImage.imageNamed(value);
            this._ios.image = image;
        }
        else {
            this._ios.image = null;
        }
    };
    EntityProperty.prototype.updateNativeDisplayName = function (value) {
        if (!this._ios || value == null) {
            return;
        }
        this._ios.displayName = value;
    };
    EntityProperty.prototype.updateNativeIndex = function (value) {
        if (!this._ios || value == null) {
            return;
        }
        this._ios.index = value;
        this._ios.layoutInfo.row = value;
    };
    EntityProperty.prototype.updateNativeConverter = function (value) {
        if (!this._ios || value == null) {
            return;
        }
        this._ios.converter = TKDataFormConverterImplementation.new().initWithConverter(value);
        if (this.editor && this.editor.ios) {
            this.editor.ios.loadPropertyValue();
        }
    };
    EntityProperty.prototype.updateNativeColumnIndex = function (value) {
        if (!this._ios || value == null) {
            return;
        }
        this._ios.layoutInfo.column = value;
    };
    EntityProperty.prototype.updateNativeHidden = function (value) {
        if (!this._ios || value == null) {
            return;
        }
        this._ios.hidden = value;
    };
    EntityProperty.prototype.updateNativeReadOnly = function (value) {
        if (!this._ios || value == null) {
            return;
        }
        this._ios.readOnly = value;
    };
    EntityProperty.prototype.updateNativeRequired = function (value) {
        if (!this._ios || value == null) {
            return;
        }
        this._ios.required = value;
    };
    EntityProperty.prototype.updateNativeHintText = function (value) {
        if (!this._ios || !value) {
            return;
        }
        this._ios.hintText = value;
    };
    return EntityProperty;
}(commonModule.EntityProperty));
exports.EntityProperty = EntityProperty;
//NOTE: currently we don't have specific class for every one of the editors since they don't have specific properties, with small exceptions
var PropertyEditor = (function (_super) {
    __extends(PropertyEditor, _super);
    function PropertyEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PropertyEditor.prototype, "ios", {
        get: function () {
            return this._ios;
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
    PropertyEditor.prototype.onStylePropertyChanged = function (propertyName) {
        PropertyEditorHelper.applyStyleForProperty(this, propertyName);
    };
    PropertyEditor.prototype.onParamsChanged = function (oldValue, newValue) {
        PropertyEditorHelper._applyParams(this);
    };
    PropertyEditor.prototype.onParamsPropertyChanged = function (propertyName) {
        PropertyEditorHelper._applyParams(this);
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
                this._editorClass = TKDataFormTextFieldEditor.class();
                break;
            case commonModule.EditorType.MultilineText:
                this._editorClass = TKDataFormMultilineTextEditor.class();
                break;
            case commonModule.EditorType.Email:
                this._editorClass = TKDataFormEmailEditor.class();
                break;
            case commonModule.EditorType.Password:
                this._editorClass = TKDataFormPasswordEditor.class();
                break;
            case commonModule.EditorType.Phone:
                this._editorClass = TKDataFormPhoneEditor.class();
                break;
            case commonModule.EditorType.Decimal:
                this._editorClass = TKDataFormDecimalEditor.class();
                break;
            case commonModule.EditorType.Number:
                this._editorClass = TKDataFormNumberEditor.class();
                break;
            case commonModule.EditorType.Switch:
                this._editorClass = TKDataFormSwitchEditor.class();
                break;
            case commonModule.EditorType.Stepper:
                this._editorClass = TKDataFormStepperEditor.class();
                break;
            case commonModule.EditorType.Slider:
                this._editorClass = TKDataFormSliderEditor.class();
                break;
            case commonModule.EditorType.SegmentedEditor:
                this._editorClass = TKDataFormSegmentedEditor.class();
                break;
            case commonModule.EditorType.DatePicker:
                this._editorClass = TKDataFormDatePickerEditor.class();
                break;
            case commonModule.EditorType.TimePicker:
                this._editorClass = TKDataFormTimePickerEditor.class();
                break;
            case commonModule.EditorType.Picker:
                this._editorClass = TKDataFormPickerViewEditor.class();
                break;
            case commonModule.EditorType.List:
                this._editorClass = TKDataFormOptionsEditor.class();
                break;
            case commonModule.EditorType.AutoCompleteInline:
                this._editorClass = TKDataFormAutoCompleteInlineEditor.class();
                break;
            case commonModule.EditorType.Label:
                this._editorClass = TKDataFormLabelEditor.class();
                break;
            default:
                console.log("WARNING: Unsupported editor type: " + this.type);
        }
    };
    PropertyEditor._getNativeEditorType = function (nativeEditor) {
        if (nativeEditor instanceof TKDataFormMultilineTextEditor) {
            return commonModule.EditorType.MultilineText;
        }
        if (nativeEditor instanceof TKDataFormEmailEditor) {
            return commonModule.EditorType.Email;
        }
        if (nativeEditor instanceof TKDataFormPasswordEditor) {
            return commonModule.EditorType.Password;
        }
        if (nativeEditor instanceof TKDataFormPhoneEditor) {
            return commonModule.EditorType.Phone;
        }
        if (nativeEditor instanceof TKDataFormDecimalEditor) {
            return commonModule.EditorType.Decimal;
        }
        if (nativeEditor instanceof TKDataFormNumberEditor) {
            return commonModule.EditorType.Number;
        }
        if (nativeEditor instanceof TKDataFormSwitchEditor) {
            return commonModule.EditorType.Switch;
        }
        if (nativeEditor instanceof TKDataFormStepperEditor) {
            return commonModule.EditorType.Stepper;
        }
        if (nativeEditor instanceof TKDataFormSliderEditor) {
            return commonModule.EditorType.Slider;
        }
        if (nativeEditor instanceof TKDataFormSegmentedEditor) {
            return commonModule.EditorType.SegmentedEditor;
        }
        if (nativeEditor instanceof TKDataFormDatePickerEditor) {
            return commonModule.EditorType.DatePicker;
        }
        if (nativeEditor instanceof TKDataFormTimePickerEditor) {
            return commonModule.EditorType.TimePicker;
        }
        if (nativeEditor instanceof TKDataFormPickerViewEditor) {
            return commonModule.EditorType.Picker;
        }
        if (nativeEditor instanceof TKDataFormOptionsEditor) {
            return commonModule.EditorType.List;
        }
        if (nativeEditor instanceof TKDataFormAutoCompleteInlineEditor) {
            return commonModule.EditorType.AutoCompleteInline;
        }
        if (nativeEditor instanceof TKDataFormLabelEditor) {
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
        var _this = _super.call(this) || this;
        _this._nativeDelegate = TKDataFormCustomEditorDelegateImplementation.new().initWithOwner(_this);
        return _this;
    }
    Object.defineProperty(CustomPropertyEditor.prototype, "ios", {
        get: function () {
            return this._ios;
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
    CustomPropertyEditor.prototype.onStylePropertyChanged = function (propertyName) {
        PropertyEditorHelper.applyStyleForProperty(this, propertyName);
    };
    CustomPropertyEditor.prototype.onParamsChanged = function (oldValue, newValue) {
        PropertyEditorHelper._applyParams(this);
    };
    CustomPropertyEditor.prototype.onParamsPropertyChanged = function (propertyName) {
        PropertyEditorHelper._applyParams(this);
    };
    CustomPropertyEditor.prototype.onTypeChanged = function (oldValue, newValue) {
        console.log("WARNING: You can't change CustomPropertyEditor's type");
    };
    CustomPropertyEditor.prototype.notifyValueChanged = function () {
        if (this.ios) {
            this.ios.notifyValueChange();
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
            editor._ios = value;
        }
        else {
            editor._ios = value;
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
        if (!editor.ios) {
            return;
        }
        if (editor instanceof CustomPropertyEditor) {
            editor.ios.delegate = editor._nativeDelegate;
        }
        else {
            if (!editor.type) {
                editor.type = PropertyEditor._getNativeEditorType(editor.ios);
            }
        }
        PropertyEditorHelper._applyParams(editor);
    };
    PropertyEditorHelper._updateLabelTextColor = function (editor, labelTextColor) {
        if (!editor.ios || labelTextColor === undefined) {
            return;
        }
        editor.ios.textLabel.textColor = (new color_1.Color(labelTextColor)).ios;
    };
    PropertyEditorHelper._updateLabelFont = function (editor, labelFontName, labelTextSize, labelFontStyle) {
        if (!editor.ios ||
            (labelFontName === undefined && labelFontStyle === undefined && labelTextSize === undefined)) {
            return;
        }
        editor.ios.textLabel.font = RadDataForm.getFontWithProperties(labelFontName, labelTextSize, labelFontStyle);
    };
    PropertyEditorHelper._updateLabelOffset = function (editor, labelHorizontalOffset, labelVerticalOffset) {
        if (!editor.ios || (labelHorizontalOffset === undefined && labelVerticalOffset === undefined)) {
            return;
        }
        editor.ios.style.textLabelOffset = {
            horizontal: (isNaN(labelHorizontalOffset)) ? 0 : labelHorizontalOffset,
            vertical: (isNaN(labelVerticalOffset)) ? 0 : labelVerticalOffset
        };
    };
    PropertyEditorHelper._updateEditorOffset = function (editor, editorHorizontalOffset, editorVerticalOffset) {
        if (!editor.ios || (editorHorizontalOffset === undefined && editorVerticalOffset === undefined)) {
            return;
        }
        editor.ios.style.editorOffset = {
            horizontal: (isNaN(editorHorizontalOffset)) ? 0 : editorHorizontalOffset,
            vertical: (isNaN(editorVerticalOffset)) ? 0 : editorVerticalOffset
        };
    };
    PropertyEditorHelper._updateEditorFillColor = function (editor, editorFillColor) {
        if (!editor.ios || editorFillColor === undefined) {
            return;
        }
        editor.ios.style.fill = TKSolidFill.solidFillWithColor((new color_1.Color(editorFillColor)).ios);
    };
    PropertyEditorHelper._updateEditorStroke = function (editor, editorStrokeColor, editorStrokeWidth) {
        if (!editor.ios || (editorStrokeColor === undefined && editorStrokeWidth === undefined)) {
            return;
        }
        var stroke = TKStroke.new();
        if (editorStrokeWidth) {
            stroke.width = editorStrokeWidth;
        }
        if (editorStrokeColor) {
            stroke.color = (new color_1.Color(editorStrokeColor)).ios;
        }
        editor.ios.style.stroke = stroke;
    };
    PropertyEditorHelper._updateLabelHidden = function (editor, labelHidden) {
        if (!editor.ios || labelHidden === undefined) {
            return;
        }
        editor.ios.style.textLabelDisplayMode = labelHidden ? 1 /* Hidden */ : 0 /* Show */;
    };
    PropertyEditorHelper._updateLabelPosition = function (editor, labelPosition) {
        if (!editor.ios || labelPosition === undefined) {
            return;
        }
        var nativeLabelPosition = labelPosition == commonModule.DataFormLabelPosition.Left ?
            0 /* TKDataFormLabelPositionLeft */ :
            1 /* TKDataFormLabelPositionTop */;
        editor.ios.labelPosition = nativeLabelPosition;
        editor.ios.setNeedsLayout();
    };
    PropertyEditorHelper._updateLabelWidth = function (editor, labelWidth) {
        if (!editor.ios || labelWidth === undefined) {
            return;
        }
        editor.ios.style.textLabelWidth = labelWidth;
        editor.ios.setNeedsLayout();
    };
    PropertyEditorHelper._updateSeparatorColor = function (editor, separatorColor) {
        if (!editor.ios || separatorColor === undefined) {
            return;
        }
        editor.ios.style.separatorColor = TKSolidFill.solidFillWithColor((new color_1.Color(separatorColor)).ios);
        editor.ios.setNeedsDisplay();
    };
    PropertyEditorHelper._applyParams = function (editor) {
        var editorParams = editor.params;
        if (!editorParams) {
            return;
        }
        if (editorParams.minimum && editorParams.maximum) {
            if (!isNaN(editorParams.minimum) && !isNaN(editorParams.maximum)) {
                PropertyEditorHelper._updateNativeRange(editor, TKRange.rangeWithMinimumAndMaximum(editorParams.minimum, editorParams.maximum));
            }
        }
        if (editorParams.step && !isNaN(editorParams.step)) {
            PropertyEditorHelper._updateNativeStep(editor, editorParams.step);
        }
    };
    PropertyEditorHelper._updateNativeRange = function (editor, range) {
        if (!editor.ios) {
            return;
        }
        if (editor.ios.property.range == range) {
            return;
        }
        editor.ios.property.range = range;
        editor.ios.update();
    };
    PropertyEditorHelper._updateNativeStep = function (editor, step) {
        if (!editor.ios) {
            return;
        }
        if (editor.ios.property.step == step) {
            return;
        }
        editor.ios.property.step = step;
        editor.ios.update();
    };
    PropertyEditorHelper.applyStyle = function (editor) {
        if (!editor.propertyEditorStyle || !editor.ios) {
            return;
        }
        PropertyEditorHelper._updateLabelTextColor(editor, editor.propertyEditorStyle.labelTextColor);
        PropertyEditorHelper._updateLabelFont(editor, editor.propertyEditorStyle.labelFontName, editor.propertyEditorStyle.labelTextSize, editor.propertyEditorStyle.labelFontStyle);
        PropertyEditorHelper._updateLabelOffset(editor, editor.propertyEditorStyle.labelHorizontalOffset, editor.propertyEditorStyle.labelVerticalOffset);
        PropertyEditorHelper._updateEditorOffset(editor, editor.propertyEditorStyle.editorHorizontalOffset, editor.propertyEditorStyle.editorVerticalOffset);
        PropertyEditorHelper._updateEditorFillColor(editor, editor.propertyEditorStyle.fillColor);
        PropertyEditorHelper._updateEditorStroke(editor, editor.propertyEditorStyle.strokeColor, editor.propertyEditorStyle.strokeWidth);
        PropertyEditorHelper._updateLabelHidden(editor, editor.propertyEditorStyle.labelHidden);
        PropertyEditorHelper._updateLabelPosition(editor, editor.propertyEditorStyle.labelPosition);
        PropertyEditorHelper._updateLabelWidth(editor, editor.propertyEditorStyle.labelWidth);
        PropertyEditorHelper._updateSeparatorColor(editor, editor.propertyEditorStyle.separatorColor);
        PropertyEditorHelper.setNeedsLayout(editor);
        PropertyEditorHelper.setNeedsDisplay(editor);
    };
    PropertyEditorHelper.setNeedsDisplay = function (editor) {
        if (editor.ios) {
            editor.ios.setNeedsDisplay();
        }
    };
    PropertyEditorHelper.setNeedsLayout = function (editor) {
        if (editor.ios) {
            editor.ios.setNeedsLayout();
        }
    };
    PropertyEditorHelper.applyStyleForProperty = function (editor, propertyName) {
        if (!editor.propertyEditorStyle || !editor.ios) {
            return;
        }
        switch (propertyName) {
            case "labelTextColor":
                PropertyEditorHelper._updateLabelTextColor(editor, editor.propertyEditorStyle.labelTextColor);
                break;
            case "labelFontName":
            case "labelFontStyle":
            case "labelTextSize":
                PropertyEditorHelper._updateLabelFont(editor, editor.propertyEditorStyle.labelFontName, editor.propertyEditorStyle.labelTextSize, editor.propertyEditorStyle.labelFontStyle);
                break;
            case "labelHorizontalOffset":
            case "labelVerticalOffset":
                PropertyEditorHelper._updateLabelOffset(editor, editor.propertyEditorStyle.labelHorizontalOffset, editor.propertyEditorStyle.labelVerticalOffset);
                PropertyEditorHelper.setNeedsLayout(editor);
                break;
            case "editorHorizontalOffset":
            case "editorVerticalOffset":
                PropertyEditorHelper._updateEditorOffset(editor, editor.propertyEditorStyle.editorHorizontalOffset, editor.propertyEditorStyle.editorVerticalOffset);
                PropertyEditorHelper.setNeedsLayout(editor);
                break;
            case "fillColor":
                PropertyEditorHelper._updateEditorFillColor(editor, editor.propertyEditorStyle.fillColor);
                PropertyEditorHelper.setNeedsDisplay(editor);
                break;
            case "strokeColor":
            case "strokeWidth":
                PropertyEditorHelper._updateEditorStroke(editor, editor.propertyEditorStyle.strokeColor, editor.propertyEditorStyle.strokeWidth);
                PropertyEditorHelper.setNeedsDisplay(editor);
                break;
            case "labelHidden":
                PropertyEditorHelper._updateLabelHidden(editor, editor.propertyEditorStyle.labelHidden);
                PropertyEditorHelper.setNeedsLayout(editor);
                break;
            case "labelPosition":
                PropertyEditorHelper._updateLabelPosition(editor, editor.propertyEditorStyle.labelPosition);
                PropertyEditorHelper.setNeedsLayout(editor);
                break;
            case "labelWidth":
                PropertyEditorHelper._updateLabelWidth(editor, editor.propertyEditorStyle.labelWidth);
                PropertyEditorHelper.setNeedsLayout(editor);
                break;
            case "separatorColor":
                PropertyEditorHelper._updateSeparatorColor(editor, editor.propertyEditorStyle.separatorColor);
                PropertyEditorHelper.setNeedsDisplay(editor);
                break;
        }
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
        _this._ios = TKDataFormManualValidator.new();
        _this._nativeDelegate = TKDataFormValidationProviderDelegateImplementation.new().initWithOwner(_this);
        _this._ios.delegate = _this._nativeDelegate;
        if (_this.errorMessage == undefined) {
            _this.errorMessage = "This is not valid.";
        }
        return _this;
    }
    Object.defineProperty(PropertyValidator.prototype, "ios", {
        get: function () {
            return this._ios;
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
        _this._ios = TKDataFormMinimumLengthValidator.new();
        return _this;
    }
    Object.defineProperty(MinimumLengthValidator.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    MinimumLengthValidator.prototype.onLengthChanged = function (oldValue, newValue) {
        if (!isNaN(+newValue)) {
            this.ios.minimumLength = newValue;
        }
    };
    return MinimumLengthValidator;
}(commonModule.MinimumLengthValidator));
exports.MinimumLengthValidator = MinimumLengthValidator;
var MaximumLengthValidator = (function (_super) {
    __extends(MaximumLengthValidator, _super);
    function MaximumLengthValidator() {
        var _this = _super.call(this) || this;
        _this._ios = TKDataFormMaximumLengthValidator.new();
        return _this;
    }
    Object.defineProperty(MaximumLengthValidator.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    MaximumLengthValidator.prototype.onLengthChanged = function (oldValue, newValue) {
        if (!isNaN(newValue)) {
            this.ios.maximumLegth = newValue;
        }
    };
    return MaximumLengthValidator;
}(commonModule.MaximumLengthValidator));
exports.MaximumLengthValidator = MaximumLengthValidator;
var EmailValidator = (function (_super) {
    __extends(EmailValidator, _super);
    function EmailValidator() {
        var _this = _super.call(this) || this;
        _this._ios = TKDataFormEmailValidator.new();
        return _this;
    }
    Object.defineProperty(EmailValidator.prototype, "ios", {
        get: function () {
            return this._ios;
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
        _this._ios = TKDataFormNonEmptyValidator.new();
        return _this;
    }
    Object.defineProperty(NonEmptyValidator.prototype, "ios", {
        get: function () {
            return this._ios;
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
        _this._ios = TKDataFormRangeValidator.new();
        return _this;
    }
    Object.defineProperty(RangeValidator.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    RangeValidator.prototype.onMinimumChanged = function (oldValue, newValue) {
        if (!isNaN(+newValue)) {
            if (this.ios.range) {
                this.ios.range.minimum = newValue;
            }
            else {
                this.ios.range = TKRange.rangeWithMinimumAndMaximum(newValue, newValue * 2);
            }
        }
    };
    RangeValidator.prototype.onMaximumChanged = function (oldValue, newValue) {
        if (!isNaN(+newValue)) {
            if (this.ios.range) {
                this.ios.range.maximum = newValue;
            }
            else {
                this.ios.range = TKRange.rangeWithMinimumAndMaximum(newValue / 2, newValue);
            }
        }
    };
    return RangeValidator;
}(commonModule.RangeValidator));
exports.RangeValidator = RangeValidator;
var PhoneValidator = (function (_super) {
    __extends(PhoneValidator, _super);
    function PhoneValidator() {
        var _this = _super.call(this) || this;
        _this._ios = TKDataFormPhoneValidator.new();
        return _this;
    }
    Object.defineProperty(PhoneValidator.prototype, "ios", {
        get: function () {
            return this._ios;
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
        _this._ios = TKDataFormRegExValidator.new();
        return _this;
    }
    Object.defineProperty(RegExValidator.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    RegExValidator.prototype.onRegExChanged = function (oldValue, newValue) {
        this._ios.regEx = newValue;
    };
    return RegExValidator;
}(commonModule.RegExValidator));
exports.RegExValidator = RegExValidator;
var IsTrueValidator = (function (_super) {
    __extends(IsTrueValidator, _super);
    function IsTrueValidator() {
        var _this = _super.call(this) || this;
        _this._ios = TKDataFormIsTrueValidator.new();
        return _this;
    }
    Object.defineProperty(IsTrueValidator.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    return IsTrueValidator;
}(commonModule.IsTrueValidator));
exports.IsTrueValidator = IsTrueValidator;
//////////////////////////////////////////////////////////////////////////////////////////////
// Converters
var StringToDateConverter = (function (_super) {
    __extends(StringToDateConverter, _super);
    function StringToDateConverter() {
        var _this = _super.call(this) || this;
        _this._ios = TKDataFormStringToDateConverter.new();
        return _this;
    }
    Object.defineProperty(StringToDateConverter.prototype, "ios", {
        get: function () {
            return this._ios;
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
        _this._ios = TKDataFormStringToTimeConverter.new();
        return _this;
    }
    Object.defineProperty(StringToTimeConverter.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    return StringToTimeConverter;
}(commonModule.StringToTimeConverter));
exports.StringToTimeConverter = StringToTimeConverter;
