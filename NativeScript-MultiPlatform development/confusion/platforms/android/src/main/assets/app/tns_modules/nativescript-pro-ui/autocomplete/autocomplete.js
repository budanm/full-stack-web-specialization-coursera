Object.defineProperty(exports, "__esModule", { value: true });
var commonModule = require("./autocomplete-common");
var utilsModule = require("tns-core-modules/utils/utils");
var layoutsModule = require("tns-core-modules/ui/layouts/stack-layout");
require("utils/module-merge").merge(commonModule, exports);
var knownTemplates;
(function (knownTemplates) {
    knownTemplates.suggestionItemTemplate = "suggestionItemTemplate";
})(knownTemplates = exports.knownTemplates || (exports.knownTemplates = {}));
var TokenModel = (function (_super) {
    __extends(TokenModel, _super);
    function TokenModel(text, imageName) {
        var _this = _super.call(this, text, imageName) || this;
        if (imageName != undefined) {
            var drawable = RadAutoCompleteTextView.resolveDrawableFromResource(imageName);
            _this._android = new com.telerik.widget.autocomplete.TokenModel(text, drawable);
            _this._android.setNsImageName(imageName);
        }
        else {
            _this._android = new com.telerik.widget.autocomplete.TokenModel(text, null);
        }
        return _this;
    }
    Object.defineProperty(TokenModel.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    return TokenModel;
}(commonModule.TokenModel));
exports.TokenModel = TokenModel;
var SuggestionView = (function (_super) {
    __extends(SuggestionView, _super);
    function SuggestionView(parent) {
        return _super.call(this) || this;
    }
    Object.defineProperty(SuggestionView.prototype, "android", {
        get: function () {
            return this._android;
        },
        set: function (value) {
            this._android = value;
        },
        enumerable: true,
        configurable: true
    });
    return SuggestionView;
}(commonModule.SuggestionView));
exports.SuggestionView = SuggestionView;
var AutoCompleteAdapterClass;
function ensureAutoCompleteAdapter() {
    if (AutoCompleteAdapterClass) {
        return AutoCompleteAdapterClass;
    }
    var AutoCompleteAdapter = (function (_super) {
        __extends(AutoCompleteAdapter, _super);
        function AutoCompleteAdapter(owner, items) {
            var _this = _super.call(this, utilsModule.ad.getApplicationContext(), items, null) || this;
            _this.suggestionsMap = {};
            _this.owner = owner;
            return global.__native(_this);
        }
        AutoCompleteAdapter.prototype.onCreateViewHolder = function (parent, viewType) {
            var view = this.owner.getViewForViewType(commonModule.AutoCompleteViewTypes.ItemView);
            var parentView = new layoutsModule.StackLayout();
            parentView.orientation = "vertical";
            parentView.addChild(view);
            this.owner._addView(parentView);
            var layoutParams = new org.nativescript.widgets.CommonLayoutParams();
            layoutParams.width = org.nativescript.widgets.CommonLayoutParams.MATCH_PARENT;
            layoutParams.height = org.nativescript.widgets.CommonLayoutParams.WRAP_CONTENT;
            var holder = new com.telerik.widget.list.ListViewHolder(parentView.android);
            parentView.android.setLayoutParams(layoutParams);
            holder['nsView'] = parentView;
            return holder;
        };
        AutoCompleteAdapter.prototype.onBindViewHolder = function (holder, position) {
            var nativeItem = this.getFilteredList().get(position);
            var img = nativeItem.getNsImageName();
            var model = new TokenModel(nativeItem.getText(), img);
            holder.nsView.bindingContext = model;
            var args = {
                eventName: commonModule.RadAutoCompleteTextView.itemLoadingEvent,
                index: position,
                view: holder['nsView']._subViews[0],
                android: holder,
                data: model
            };
            this.owner.notify(args);
        };
        return AutoCompleteAdapter;
    }(com.telerik.widget.autocomplete.AutoCompleteAdapter));
    AutoCompleteAdapterClass = AutoCompleteAdapter;
}
var AutoCompleteRemoteFetchAdapterClass;
function ensureAutoCompleteRemoteFetchAdapter() {
    if (AutoCompleteRemoteFetchAdapterClass) {
        return AutoCompleteRemoteFetchAdapterClass;
    }
    var AutoCompleteRemoteFetchAdapter = (function (_super) {
        __extends(AutoCompleteRemoteFetchAdapter, _super);
        function AutoCompleteRemoteFetchAdapter(owner, items) {
            var _this = _super.call(this, utilsModule.ad.getApplicationContext(), items, null) || this;
            _this.suggestionsMap = {};
            _this.owner = owner;
            return global.__native(_this);
        }
        AutoCompleteRemoteFetchAdapter.prototype.filter = function (charText) {
            this.owner.android.getAdapter().getFilteredList().clear();
            charText = charText.toLowerCase();
            var self = this;
            if (charText.length != 0) {
                this.owner.asyncCall(charText).then(function (items) {
                    var result = new java.util.ArrayList();
                    var nsResult = new Array();
                    if (self.owner.completionMode == commonModule.CompletionMode.StartsWith) {
                        for (var i = 0; i < items.length; i++) {
                            var current = items[i];
                            var upperCase = current.android.getText().toLowerCase();
                            if (upperCase.startsWith(charText)) {
                                result.add(current.android);
                                nsResult.push(current);
                            }
                        }
                    }
                    else {
                        for (var i = 0; i < items.length; i++) {
                            var current = items[i];
                            var upperCase = current.android.getText().toLowerCase();
                            if (upperCase.indexOf(charText != -1)) {
                                result.add(current.android);
                                nsResult.push(current);
                            }
                        }
                    }
                    if (self.owner.isLoaded) {
                        self.setItems(result);
                        self.owner.android.getAdapter().setFilteredList(result);
                        self.owner.android.resolveAfterFilter(self.owner.android.getTextField().getText().toString(), true);
                        self.owner.filteredItems = nsResult;
                    }
                });
            }
        };
        AutoCompleteRemoteFetchAdapter.prototype.onCreateViewHolder = function (parent, viewType) {
            var view = this.owner.getViewForViewType(commonModule.AutoCompleteViewTypes.ItemView);
            var parentView = new layoutsModule.StackLayout();
            parentView.orientation = "vertical";
            parentView.addChild(view);
            this.owner._addView(parentView);
            var layoutParams = new org.nativescript.widgets.CommonLayoutParams();
            layoutParams.width = org.nativescript.widgets.CommonLayoutParams.MATCH_PARENT;
            layoutParams.height = org.nativescript.widgets.CommonLayoutParams.WRAP_CONTENT;
            var holder = new com.telerik.widget.list.ListViewHolder(parentView.android);
            parentView.android.setLayoutParams(layoutParams);
            holder.nsView = parentView;
            return holder;
        };
        AutoCompleteRemoteFetchAdapter.prototype.onBindViewHolder = function (holder, position) {
            var nativeItem = this.getFilteredList().get(position);
            var img = nativeItem.getNsImageName();
            var model = new TokenModel(nativeItem.getText(), img);
            if (holder.nsView != undefined) {
                holder.nsView.bindingContext = model;
            }
            var args = {
                eventName: commonModule.RadAutoCompleteTextView.itemLoadingEvent,
                index: position,
                view: holder['nsView']._subViews[0],
                android: holder,
                data: model
            };
            this.owner.notify(args);
        };
        return AutoCompleteRemoteFetchAdapter;
    }(com.telerik.widget.autocomplete.AutoCompleteAdapter));
    AutoCompleteRemoteFetchAdapterClass = AutoCompleteRemoteFetchAdapter;
}
var RadAutoCompleteTextView = (function (_super) {
    __extends(RadAutoCompleteTextView, _super);
    function RadAutoCompleteTextView() {
        var _this = _super.call(this) || this;
        _this.filteredItems = new Array();
        _this._androidViewId = -1;
        return _this;
    }
    RadAutoCompleteTextView.prototype.createNativeView = function () {
        this._android = new com.telerik.widget.autocomplete.RadAutoCompleteTextView(this._context);
        var that = new WeakRef(this);
        this._android.addShowSuggestionListListener(new com.telerik.widget.autocomplete.ShowSuggestionListListener({
            onShowSuggestionList: function (autoComplete, suggestions) {
                var args = new commonModule.AutoCompleteEventData(that.get(), commonModule.RadAutoCompleteTextView.suggestionViewBecameVisibleEvent, undefined, undefined);
                that.get().notify(args);
            }
        }));
        this._android.addTokenAddedListener(new com.telerik.widget.autocomplete.TokenAddedListener({
            onTokenAdded: function (autoComplete, token) {
                var tokenModel = new TokenModel(token.getText(), token.getNsImageName());
                var args = new commonModule.AutoCompleteEventData(that.get(), commonModule.RadAutoCompleteTextView.tokenAddedEvent, token.getText(), tokenModel);
                that.get().notify(args);
            }
        }));
        this._android.addTokenSelectedListener(new com.telerik.widget.autocomplete.TokenSelectedListener({
            onTokenSelected: function (autoComplete, token) {
                var tokenModel = new TokenModel(token.getText(), token.getNsImageName());
                var args = new commonModule.AutoCompleteEventData(that.get(), commonModule.RadAutoCompleteTextView.tokenSelectedEvent, token.getText(), tokenModel);
                that.get().notify(args);
            }
        }));
        this._android.addTokenDeselectedListener(new com.telerik.widget.autocomplete.TokenDeselectedListener({
            onTokenDeselected: function (autoComplete, token) {
                var tokenModel = new TokenModel(token.getText(), token.getNsImageName());
                var args = new commonModule.AutoCompleteEventData(that.get(), commonModule.RadAutoCompleteTextView.tokenDeselectedEvent, token.getText(), tokenModel);
                that.get().notify(args);
            }
        }));
        this._android.addTokenRemovedListener(new com.telerik.widget.autocomplete.TokenRemovedListener({
            onTokenRemoved: function (autoComplete, token) {
                var tokenModel = new TokenModel(token.getText(), token.getNsImageName());
                var args = new commonModule.AutoCompleteEventData(that.get(), commonModule.RadAutoCompleteTextView.tokenRemovedEvent, token.getText(), tokenModel);
                that.get().notify(args);
            }
        }));
        this._android.addDidAutoCompleteListener(new com.telerik.widget.autocomplete.DidAutoCompleteListener({
            onDidAutoComplete: function (autoComplete, text) {
                var args = new commonModule.AutoCompleteEventData(that.get(), commonModule.RadAutoCompleteTextView.didAutoCompleteEvent, text, undefined);
                that.get().notify(args);
            }
        }));
        if (this.displayMode) {
            this.adjustDisplayMode(this.displayMode);
        }
        if (this.suggestMode) {
            this.adjustSuggestMode(this.suggestMode);
        }
        if (this.layoutMode) {
            this.adjustLayoutMode(this.layoutMode);
        }
        if (this.completionMode) {
            this.adjustCompletionMode(this.completionMode);
        }
        if (this.suggestionView) {
            this.adjustSuggestionView(this.suggestionView);
        }
        if (this.minimumCharactersToSearch) {
            this.adjustMinimumCharactersToSearch(this.minimumCharactersToSearch);
        }
        if (this.closeButtonImageSrc) {
            this.adjustCloseButtonImage(this.closeButtonImageSrc);
        }
        this.adjustShowCloseButton(this.showCloseButton);
        if (this.asyncCall) {
            this.adjustAsyncCall(true);
        }
        else {
            this.loadData(false);
        }
        return this._nativeView;
    };
    RadAutoCompleteTextView.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        if (this._androidViewId < 0) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._nativeView.setId(this._androidViewId);
    };
    Object.defineProperty(RadAutoCompleteTextView.prototype, "_nativeView", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    RadAutoCompleteTextView.prototype.resetAutocomplete = function () {
        this._android.resetAutocomplete();
    };
    RadAutoCompleteTextView.prototype.addToken = function (token) {
        var nativeObject = new com.telerik.widget.autocomplete.TokenModel(token.text, null);
        var nativeTokenView = new com.telerik.widget.autocomplete.TokenView(this._context);
        nativeTokenView.setModel(nativeObject);
        this._android.addToken(nativeTokenView);
    };
    RadAutoCompleteTextView.prototype.insertTokenAtIndex = function (token, index) {
        var nativeObject = new com.telerik.widget.autocomplete.TokenModel(token.text, null);
        var nativeTokenView = new com.telerik.widget.autocomplete.TokenView(this._context);
        nativeTokenView.setModel(nativeObject);
        this._android.insertTokenAt(index, nativeTokenView);
    };
    RadAutoCompleteTextView.prototype.removeToken = function (token) {
        var nativeObject = new com.telerik.widget.autocomplete.TokenModel(token.text, null);
        var nativeTokenView = new com.telerik.widget.autocomplete.TokenView(this._context);
        nativeTokenView.setModel(nativeObject);
        this._android.removeToken(nativeTokenView);
    };
    RadAutoCompleteTextView.prototype.removeTokenAtIndex = function (index) {
        this._android.removeTokenAt(index);
    };
    RadAutoCompleteTextView.prototype.removeAllTokens = function () {
        this._android.removeAllTokens();
    };
    RadAutoCompleteTextView.prototype.tokens = function () {
        return this._android.getTokens();
    };
    RadAutoCompleteTextView.prototype.tokenAtIndex = function (index) {
        return this._android.getTokenAt(index);
    };
    RadAutoCompleteTextView.prototype.onDisplayModeChanged = function (oldValue, newValue) {
        this.adjustDisplayMode(newValue);
    };
    RadAutoCompleteTextView.prototype.onLayoutModeChanged = function (oldValue, newValue) {
        this.adjustLayoutMode(newValue);
    };
    RadAutoCompleteTextView.prototype.onSuggestModeChanged = function (oldValue, newValue) {
        this.adjustSuggestMode(newValue);
    };
    RadAutoCompleteTextView.prototype.onCompletionModeChanged = function (oldValue, newValue) {
        this.adjustCompletionMode(newValue);
    };
    RadAutoCompleteTextView.prototype.onItemsChanged = function (oldValue, newValue) {
        this.loadData(false);
    };
    RadAutoCompleteTextView.prototype.onSuggestionViewChanged = function (oldValue, newValue) {
        this.adjustSuggestionView(newValue);
    };
    RadAutoCompleteTextView.prototype.onMinimumCharactersToSearchChanged = function (oldValue, newValue) {
        this.adjustMinimumCharactersToSearch(newValue);
    };
    RadAutoCompleteTextView.prototype.onLoadSuggestionsAsyncChanged = function (oldValue, newValue) {
        this.asyncCall = newValue;
        this.adjustAsyncCall(true);
    };
    RadAutoCompleteTextView.prototype.onShowCloseButtonChanged = function (oldValue, newValue) {
        this.adjustShowCloseButton(newValue);
    };
    RadAutoCompleteTextView.prototype.onCloseButtonImageSrcChanged = function (oldValue, newValue) {
        this.adjustCloseButtonImage(newValue);
    };
    RadAutoCompleteTextView.prototype.onReadOnlyChanged = function (oldValue, newValue) {
        this._android.setReadOnly(newValue);
    };
    RadAutoCompleteTextView.prototype.adjustAsyncCall = function (value) {
        if (this._android && value) {
            this._android.setUsingAsyncData(value);
            this.loadData(true);
        }
    };
    RadAutoCompleteTextView.prototype.adjustMinimumCharactersToSearch = function (value) {
        if (this._android && value) {
            this._android.setMinimumCharactersToSearch(value);
        }
    };
    RadAutoCompleteTextView.prototype.adjustSuggestionView = function (value) {
        if (this._android && value) {
            var suggestionView = value;
            suggestionView.android = this._android.getSuggestionView();
            if (suggestionView.suggestionViewHeight) {
                var heightInPixels = utilsModule.layout.toDevicePixels(suggestionView.suggestionViewHeight);
                this._android.setSuggestionViewHeight(heightInPixels);
            }
        }
    };
    RadAutoCompleteTextView.prototype.adjustCompletionMode = function (value) {
        if (this._android && value) {
            if (value == commonModule.CompletionMode.Contains) {
                this._android.getAdapter().setCompletionMode(com.telerik.widget.autocomplete.CompletionMode.CONTAINS);
            }
            else {
                this._android.getAdapter().setCompletionMode(com.telerik.widget.autocomplete.CompletionMode.STARTS_WITH);
            }
        }
    };
    RadAutoCompleteTextView.prototype.adjustDisplayMode = function (value) {
        if (this._android && value) {
            this._android.setDisplayMode((value === commonModule.DisplayMode.Plain) ?
                com.telerik.widget.autocomplete.DisplayMode.PLAIN :
                com.telerik.widget.autocomplete.DisplayMode.TOKENS);
        }
    };
    RadAutoCompleteTextView.prototype.adjustSuggestMode = function (value) {
        if (this._android && value) {
            if (value == commonModule.SuggestMode.Suggest) {
                this._android.setSuggestMode(com.telerik.widget.autocomplete.SuggestMode.SUGGEST);
            }
            else if (value == commonModule.SuggestMode.Append) {
                this._android.setSuggestMode(com.telerik.widget.autocomplete.SuggestMode.APPEND);
            }
            else {
                this._android.setSuggestMode(com.telerik.widget.autocomplete.SuggestMode.SUGGEST_APPEND);
            }
        }
    };
    RadAutoCompleteTextView.prototype.adjustLayoutMode = function (value) {
        if (value && this._android) {
            this._android.setTokensLayoutMode((value === commonModule.LayoutMode.Horizontal) ?
                com.telerik.widget.autocomplete.LayoutMode.HORIZONTAL :
                com.telerik.widget.autocomplete.LayoutMode.WRAP);
        }
    };
    RadAutoCompleteTextView.prototype.adjustShowCloseButton = function (value) {
        if (this._android) {
            this._android.setShowCloseButton(value);
        }
    };
    RadAutoCompleteTextView.prototype.adjustCloseButtonImage = function (value) {
        if (this._android) {
            if (value != undefined) {
                var drawable = RadAutoCompleteTextView.resolveDrawableFromResource(value);
                if (drawable) {
                    this._android.getCloseButtonView().setBackgroundDrawable(drawable);
                }
            }
        }
    };
    RadAutoCompleteTextView.prototype.loadData = function (isRemote) {
        if (this._nativeView != undefined) {
            if ((this.items == undefined && isRemote == true) || this.items != undefined) {
                var nativeSource = new java.util.ArrayList();
                if (this.items != undefined) {
                    for (var i = 0; i < this.items.length; i++) {
                        var a = this.items.getItem(i);
                        nativeSource.add(a.android);
                    }
                }
                var adapter;
                if (isRemote) {
                    ensureAutoCompleteRemoteFetchAdapter();
                    adapter = new AutoCompleteRemoteFetchAdapterClass(this, nativeSource);
                }
                else {
                    ensureAutoCompleteAdapter();
                    adapter = new AutoCompleteAdapterClass(this, nativeSource);
                }
                this._android.setAdapter(adapter);
                this.adjustCompletionMode(this.completionMode);
            }
        }
    };
    RadAutoCompleteTextView.resolveDrawableFromResource = function (imageName) {
        var nativeValue = imageName;
        var drawable;
        if (imageName.startsWith("res://")) {
            nativeValue = imageName.substring(6, imageName.length);
        }
        var appResources = utilsModule.ad.getApplicationContext().getResources();
        var packageName = utilsModule.ad.getApplication().getPackageName();
        if (appResources) {
            var identifier = appResources.getIdentifier(nativeValue, 'drawable', packageName);
            if (identifier > 0) {
                drawable = appResources.getDrawable(identifier);
            }
            else {
                console.log("WARNING: Can't find drawable with name: " + nativeValue);
            }
        }
        return drawable;
    };
    return RadAutoCompleteTextView;
}(commonModule.RadAutoCompleteTextView));
exports.RadAutoCompleteTextView = RadAutoCompleteTextView;
