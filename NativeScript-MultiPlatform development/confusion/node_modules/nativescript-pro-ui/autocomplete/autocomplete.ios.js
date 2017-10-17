Object.defineProperty(exports, "__esModule", { value: true });
var viewModule = require("tns-core-modules/ui/core/view");
var observableArray = require("tns-core-modules/data/observable-array");
var commonModule = require("./autocomplete-common");
var imageModule = require("tns-core-modules/ui/image");
var view_1 = require("tns-core-modules/ui/core/view");
require("utils/module-merge").merge(commonModule, exports);
var knownTemplates;
(function (knownTemplates) {
    knownTemplates.suggestionItemTemplate = "suggestionItemTemplate";
})(knownTemplates = exports.knownTemplates || (exports.knownTemplates = {}));
var SuggestionView = (function (_super) {
    __extends(SuggestionView, _super);
    function SuggestionView() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SuggestionView.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        set: function (value) {
            this._ios = value;
        },
        enumerable: true,
        configurable: true
    });
    SuggestionView.prototype.updateView = function () {
        this.updateHeight();
    };
    SuggestionView.prototype.updateHeight = function () {
        if (this.owner && this.owner.ios && this.suggestionViewHeight) {
            this.owner.ios.suggestionViewHeight = this.suggestionViewHeight;
        }
    };
    SuggestionView.prototype.updateTemplate = function (value) {
        // TODO: Implement this, probably with tns-core-modules/ui/builder same as RadListView templates
        // this._ios.suggestionView = newValue;
        this.updateHeight();
    };
    SuggestionView.prototype.onSuggestionViewHeightChanged = function (oldValue, newValue) {
        this.updateHeight();
    };
    SuggestionView.prototype.onSuggestionItemTemplateChanged = function (oldValue, newValue) {
        this.updateTemplate(newValue);
    };
    return SuggestionView;
}(commonModule.SuggestionView));
exports.SuggestionView = SuggestionView;
var SuggestionViewCell = (function (_super) {
    __extends(SuggestionViewCell, _super);
    function SuggestionViewCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuggestionViewCell.new = function () {
        var instance = _super.new.call(this);
        return instance;
    };
    SuggestionViewCell.class = function () {
        return SuggestionViewCell;
    };
    SuggestionViewCell.prototype.systemLayoutSizeFittingSize = function (targetSize) {
        var dimensions = this.layoutCell(this, undefined);
        return CGSizeMake(view_1.layout.toDeviceIndependentPixels(dimensions.measuredWidth), view_1.layout.toDeviceIndependentPixels(dimensions.measuredHeight));
    };
    SuggestionViewCell.prototype.layoutCell = function (cell, indexPath) {
        var itemViewDimensions = this.measureCell(this.view.itemView, indexPath);
        var cellView = this.view.itemView;
        viewModule.View.layoutChild(this.owner, cellView, 0, 0, itemViewDimensions.measuredWidth, itemViewDimensions.measuredHeight);
        return itemViewDimensions;
    };
    SuggestionViewCell.prototype.measureCell = function (cellView, sizeRestriction) {
        if (cellView) {
            var itemWidth = this.owner.getMeasuredWidth();
            var itemHeight = undefined;
            if (sizeRestriction !== undefined) {
                itemWidth = sizeRestriction.width;
                itemHeight = sizeRestriction.height;
            }
            var heightSpec, widthSpec;
            if (itemHeight === undefined) {
                heightSpec = view_1.layout.makeMeasureSpec(0, view_1.layout.UNSPECIFIED);
            }
            else {
                heightSpec = view_1.layout.makeMeasureSpec(itemHeight, view_1.layout.EXACTLY);
            }
            widthSpec = view_1.layout.makeMeasureSpec(itemWidth, view_1.layout.EXACTLY);
            return viewModule.View.measureChild(this.owner, cellView, widthSpec, heightSpec);
        }
        return undefined;
    };
    return SuggestionViewCell;
}(TKListViewCell));
var TokenModel = (function (_super) {
    __extends(TokenModel, _super);
    function TokenModel(text, image) {
        var _this = _super.call(this, text, image) || this;
        var nativeText = NSString.stringWithCStringEncoding(text, NSUTF8StringEncoding);
        _this._ios = TKAutoCompleteToken.alloc().initWithText(nativeText);
        if (image) {
            if (image.startsWith("res://")) {
                var name = image.substring(6, image.length);
                _this._ios.image = UIImage.imageNamed(name);
            }
            else {
                _this._ios.image = UIImage.imageNamed(image);
            }
        }
        return _this;
    }
    Object.defineProperty(TokenModel.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    return TokenModel;
}(commonModule.TokenModel));
exports.TokenModel = TokenModel;
var CompletionModeImpl = (function (_super) {
    __extends(CompletionModeImpl, _super);
    function CompletionModeImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompletionModeImpl.new = function () {
        return _super.new.call(this);
    };
    ;
    CompletionModeImpl.StartsWith = function (input, suggestions, owner) {
        var result = NSMutableArray.alloc().initWithCapacity(suggestions.length);
        var nsResult = new Array();
        for (var i = 0; i < suggestions.length; i++) {
            var current = suggestions.getItem(i);
            // We are making copies of the original items, in order to allow selecting
            // one item more than once. If we used the original items, select the
            // same token twice and try to remove all tokens we would get an exception
            // since one token will be attampted to be removed twice.
            var clone = new TokenModel(current.text, current.image);
            var upperCase = clone.ios.text.toUpperCase();
            if (upperCase['startsWith'](input.toUpperCase())) {
                result.addObject(clone.ios);
                nsResult.push(clone);
            }
        }
        owner.filteredItems = nsResult;
        return result;
    };
    CompletionModeImpl.Contains = function (input, suggestions, owner) {
        var result = NSMutableArray.alloc().initWithCapacity(suggestions.length);
        var nsResult = new Array();
        for (var i = 0; i < suggestions.length; i++) {
            var current = suggestions.getItem(i);
            // We are making copies of the original items, in order to allow selecting
            // one item more than once. If we used the original items, select the
            // same token twice and try to remove all tokens we would get an exception
            // since one token will be attampted to be removed twice.
            var clone = new TokenModel(current.text, current.image);
            var upperCase = clone.ios.text.toUpperCase();
            if (upperCase.indexOf(input.toUpperCase()) != -1) {
                result.addObject(clone.ios);
                nsResult.push(clone);
            }
        }
        owner.filteredItems = nsResult;
        return result;
    };
    return CompletionModeImpl;
}(NSObject));
//suggestion view data source
var SuggestionViewDataSourceImpl = (function (_super) {
    __extends(SuggestionViewDataSourceImpl, _super);
    function SuggestionViewDataSourceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuggestionViewDataSourceImpl.new = function () {
        return _super.new.call(this);
    };
    SuggestionViewDataSourceImpl.prototype.initWithOwner = function (owner) {
        this._owner = owner;
        return this;
    };
    SuggestionViewDataSourceImpl.prototype.listViewNumberOfItemsInSection = function (listView, section) {
        return this._owner.suggestionView.ios.items ? this._owner.suggestionView.ios.items.count : 0; //todo: update to support custom DataSource object from owner
    };
    SuggestionViewDataSourceImpl.prototype.listViewCellForItemAtIndexPath = function (listView, indexPath) {
        var cell = listView.dequeueReusableCellWithReuseIdentifierForIndexPath("defaultCell", indexPath);
        if (!cell.owner) {
            cell.backgroundView.stroke = null;
            cell.selectedBackgroundView.stroke = null;
            cell.offsetContentViewInMultipleSelection = false;
            cell.owner = this._owner;
            var template = new Object();
            template.itemView = this._owner.getViewForViewType(commonModule.AutoCompleteViewTypes.ItemView);
            cell.view = template;
            cell.contentView.addSubview(template.itemView.ios);
            this._owner._addView(template.itemView);
        }
        var model = this._owner.filteredItems[indexPath.row];
        cell.view.itemView.bindingContext = model;
        var args = {
            eventName: commonModule.RadAutoCompleteTextView.itemLoadingEvent,
            index: indexPath.row,
            view: cell.view.itemView,
            ios: cell,
            data: model
        };
        this._owner.notify(args);
        return cell;
    };
    SuggestionViewDataSourceImpl.prototype.numberOfSectionsInListView = function (listView) {
        return 1;
    };
    SuggestionViewDataSourceImpl.ObjCProtocols = [TKListViewDataSource];
    return SuggestionViewDataSourceImpl;
}(NSObject));
var AutoCompleteAsyncDataSourceImpl = (function (_super) {
    __extends(AutoCompleteAsyncDataSourceImpl, _super);
    function AutoCompleteAsyncDataSourceImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentCompletionMode = CompletionModeImpl.StartsWith;
        return _this;
    }
    AutoCompleteAsyncDataSourceImpl.new = function () {
        return _super.new.call(this);
    };
    AutoCompleteAsyncDataSourceImpl.prototype.initWithOwner = function (owner) {
        this._owner = owner;
        return this;
    };
    AutoCompleteAsyncDataSourceImpl.prototype.autoCompleteCompletionsForString = function (autocomplete, input) {
        var self = this;
        this._owner.asyncCall(input).then(function (items) {
            var result = NSMutableArray.new();
            var nsResult = new Array();
            self._owner.items = new observableArray.ObservableArray();
            if (self._owner.completionMode == commonModule.CompletionMode.StartsWith) {
                for (var i = 0; i < items.length; i++) {
                    var current = items[i];
                    var upperCase = current.ios.text.toUpperCase();
                    if (upperCase.startsWith(input.toUpperCase())) {
                        result.addObject(current.ios);
                        nsResult.push(current);
                        self._owner.items.push(current);
                    }
                }
            }
            else {
                for (var i = 0; i < items.length; i++) {
                    var current = items[i];
                    var upperCase = current.ios.text.toUpperCase();
                    if (upperCase.indexOf(input.toUpperCase()) != -1) {
                        result.addObject(current.ios);
                        nsResult.push(current);
                        self._owner.items.push(current);
                    }
                }
            }
            self._owner.filteredItems = nsResult;
            self._owner._ios.completeSuggestionViewPopulation(result);
        });
    };
    AutoCompleteAsyncDataSourceImpl.ObjCProtocols = [TKAutoCompleteDataSource];
    return AutoCompleteAsyncDataSourceImpl;
}(NSObject));
// AutoCompleteDataSource
var AutoCompleteDataSourceImpl = (function (_super) {
    __extends(AutoCompleteDataSourceImpl, _super);
    function AutoCompleteDataSourceImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentCompletionMode = CompletionModeImpl.StartsWith;
        return _this;
    }
    AutoCompleteDataSourceImpl.new = function () {
        return _super.new.call(this);
    };
    AutoCompleteDataSourceImpl.prototype.initWithOwner = function (owner) {
        this._owner = owner;
        return this;
    };
    AutoCompleteDataSourceImpl.prototype.autoCompleteCompletionForPrefix = function (autocomplete, prefix) {
        var suggestions = NSMutableArray.new();
        if (prefix == "") {
            this._owner.ios.suggestionView.hide();
            return suggestions;
        }
        else {
            return this.currentCompletionMode(prefix, this._owner.items, this._owner);
        }
    };
    AutoCompleteDataSourceImpl.ObjCProtocols = [TKAutoCompleteDataSource];
    return AutoCompleteDataSourceImpl;
}(NSObject));
//AutoCompleteDelagate
var AutoCompleteDelegateImpl = (function (_super) {
    __extends(AutoCompleteDelegateImpl, _super);
    function AutoCompleteDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoCompleteDelegateImpl.new = function () {
        return _super.new.call(this);
    };
    AutoCompleteDelegateImpl.prototype.initWithOwner = function (owner) {
        this._owner = owner;
        this._firstInput = true;
        return this;
    };
    AutoCompleteDelegateImpl.prototype.autoCompleteWillShowSuggestionList = function (autocomplete, suggestionList) {
        var args = new commonModule.AutoCompleteEventData(this._owner, commonModule.RadAutoCompleteTextView.suggestionViewBecameVisibleEvent, undefined, undefined);
        this._owner.notify(args);
    };
    AutoCompleteDelegateImpl.prototype.autoCompleteDidAddToken = function (autocomplete, token) {
        var tokenModel = this._owner.tokenModelWithText(token.text);
        var args = new commonModule.AutoCompleteEventData(this._owner, commonModule.RadAutoCompleteTextView.tokenAddedEvent, token.text, tokenModel);
        this._owner.notify(args);
    };
    AutoCompleteDelegateImpl.prototype.autoCompleteDidRemoveToken = function (autocomplete, token) {
        var tokenModel = this._owner.tokenModelWithText(token.text);
        var args = new commonModule.AutoCompleteEventData(this._owner, commonModule.RadAutoCompleteTextView.tokenRemovedEvent, token.text, tokenModel);
        this._owner.notify(args);
    };
    AutoCompleteDelegateImpl.prototype.autoCompleteDidSelectToken = function (autocomplete, token) {
        var tokenModel = this._owner.tokenModelWithText(token.text);
        var args = new commonModule.AutoCompleteEventData(this._owner, commonModule.RadAutoCompleteTextView.tokenSelectedEvent, token.text, tokenModel);
        this._owner.notify(args);
    };
    AutoCompleteDelegateImpl.prototype.autoCompleteDidDeselectToken = function (autocomplete, token) {
        var tokenModel = this._owner.tokenModelWithText(token.text);
        var args = new commonModule.AutoCompleteEventData(this._owner, commonModule.RadAutoCompleteTextView.tokenDeselectedEvent, token.text, tokenModel);
        this._owner.notify(args);
    };
    AutoCompleteDelegateImpl.prototype.autoCompleteDidAutoComplete = function (autocomplete, token) {
        var args = new commonModule.AutoCompleteEventData(this._owner, commonModule.RadAutoCompleteTextView.didAutoCompleteEvent, token.text, undefined);
        this._owner.notify(args);
    };
    AutoCompleteDelegateImpl.ObjCProtocols = [TKAutoCompleteDelegate];
    return AutoCompleteDelegateImpl;
}(NSObject));
var RadAutoCompleteTextView = (function (_super) {
    __extends(RadAutoCompleteTextView, _super);
    function RadAutoCompleteTextView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filteredItems = new Array();
        return _this;
    }
    RadAutoCompleteTextView.prototype.createNativeView = function () {
        this._ios = TKAutoCompleteTextView.new();
        this._ios.minimumCharactersToSearch = 1;
        if (!this._dataSource) {
            this._dataSource = AutoCompleteDataSourceImpl.new().initWithOwner(this);
            this._dataSource.currentCompletionMode = CompletionModeImpl.StartsWith;
            this._ios.dataSource = this._dataSource;
            this.adjustCompletionMode(this.completionMode);
        }
        this._ios.suggestionView.registerClassForCellWithReuseIdentifier(SuggestionViewCell.class(), "defaultCell");
        this._suggestionViewDataSource = SuggestionViewDataSourceImpl.new().initWithOwner(this);
        this._ios.suggestionView.dataSource = this._suggestionViewDataSource;
        this._delegate = AutoCompleteDelegateImpl.new().initWithOwner(this);
        this._ios.delegate = this._delegate;
        return this._ios;
    };
    RadAutoCompleteTextView.prototype.disposeNativeView = function () {
        this._ios.delegate = undefined;
        this._ios.dataSource = undefined;
        this._dataSource = undefined;
        this._ios = undefined;
        this._delegate = undefined;
    };
    RadAutoCompleteTextView.prototype.resetAutocomplete = function () {
        this._ios.resetAutocompleteState();
    };
    RadAutoCompleteTextView.prototype.addToken = function (token) {
        var text = NSString.stringWithCStringEncoding(token.text, NSUTF8StringEncoding);
        var native = TKAutoCompleteToken.alloc().initWithText(text);
        this._ios.addToken(native);
    };
    RadAutoCompleteTextView.prototype.insertTokenAtIndex = function (token, index) {
        var text = NSString.stringWithCStringEncoding(token.text, NSUTF8StringEncoding);
        var native = TKAutoCompleteToken.alloc().initWithText(text);
        this._ios.insertTokenAtIndex(native, index);
    };
    RadAutoCompleteTextView.prototype.removeToken = function (token) {
        var text = NSString.stringWithCStringEncoding(token.text, NSUTF8StringEncoding);
        var native = TKAutoCompleteToken.alloc().initWithText(text);
        this._ios.removeToken(native);
    };
    RadAutoCompleteTextView.prototype.removeTokenAtIndex = function (index) {
        this._ios.removeTokenAtIndex(index);
    };
    RadAutoCompleteTextView.prototype.removeAllTokens = function () {
        this._ios.removeAllTokens();
    };
    RadAutoCompleteTextView.prototype.tokens = function () {
        return this._ios.tokens;
    };
    RadAutoCompleteTextView.prototype.tokenAtIndex = function (index) {
        return this._ios.tokenAtIndex(index);
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.displayModeProperty.setNative] = function (newValue) {
        this.adjustDisplayMode(newValue);
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.layoutModeProperty.setNative] = function (newValue) {
        this.adjustLayoutMode(newValue);
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.suggestModeProperty.setNative] = function (newValue) {
        this.adjustSuggestMode(newValue);
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.loadSuggestionsAsyncProperty.setNative] = function (newValue) {
        this.asyncCall = newValue;
        this._dataSource = AutoCompleteAsyncDataSourceImpl.new().initWithOwner(this);
        this._dataSource.currentCompletionMode = CompletionModeImpl.StartsWith;
        this._ios.dataSource = this._dataSource;
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.completionModeProperty.setNative] = function (newValue) {
        this.adjustCompletionMode(newValue);
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.suggestionViewProperty.setNative] = function (newValue) {
        var suggestionView = newValue;
        suggestionView.owner = this;
        suggestionView.ios = this._ios.suggestionView;
        if (suggestionView.suggestionViewHeight) {
            this._ios.suggestionViewHeight = suggestionView.suggestionViewHeight;
        }
        this._ios.suggestionView.reloadData();
        suggestionView.updateView();
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.minimumCharactersToSearchProperty.setNative] = function (newValue) {
        this._ios.minimumCharactersToSearch = newValue;
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.showCloseButtonProperty.setNative] = function (newValue) {
        this._ios.showCloseButton = newValue;
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.closeButtonImageSrcProperty.setNative] = function (newValue) {
        var image = new imageModule.Image();
        image.src = this.closeButtonImageSrc;
        if (image) {
            this._ios.closeButton.setImageForState(image.ios.image, 0 /* Normal */);
        }
    };
    RadAutoCompleteTextView.prototype.tokenModelWithText = function (text) {
        if (this.items) {
            for (var i = 0; i < this.items.length; i++) {
                var current = this.items.getItem(i);
                if (current.text == text) {
                    return current;
                }
            }
        }
        return null;
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.readOnlyProperty.setNative] = function (newValue) {
        this._ios.readOnly = newValue;
    };
    RadAutoCompleteTextView.prototype.adjustCompletionMode = function (value) {
        if (this._ios && value && this._dataSource) {
            if (value == commonModule.CompletionMode.StartsWith) {
                this._dataSource.currentCompletionMode = CompletionModeImpl.StartsWith;
            }
            else {
                this._dataSource.currentCompletionMode = CompletionModeImpl.Contains;
            }
        }
    };
    RadAutoCompleteTextView.prototype.adjustDisplayMode = function (value) {
        if (this._ios && value) {
            this._ios.displayMode = (value === commonModule.DisplayMode.Plain) ?
                0 /* Plain */ :
                1 /* Tokens */;
        }
    };
    RadAutoCompleteTextView.prototype.adjustSuggestMode = function (value) {
        if (this._ios && value) {
            if (value == commonModule.SuggestMode.Suggest) {
                this._ios.suggestMode = 0 /* Suggest */;
            }
            else if (value == commonModule.SuggestMode.Append) {
                this._ios.suggestMode = 1 /* Append */;
            }
            else {
                this._ios.suggestMode = 2 /* SuggestAppend */;
            }
        }
    };
    RadAutoCompleteTextView.prototype.adjustLayoutMode = function (value) {
        if (value && this._ios) {
            this._ios.layoutMode = (value === commonModule.LayoutMode.Horizontal) ?
                0 /* Horizontal */ :
                1 /* Wrap */;
        }
    };
    return RadAutoCompleteTextView;
}(commonModule.RadAutoCompleteTextView));
exports.RadAutoCompleteTextView = RadAutoCompleteTextView;
