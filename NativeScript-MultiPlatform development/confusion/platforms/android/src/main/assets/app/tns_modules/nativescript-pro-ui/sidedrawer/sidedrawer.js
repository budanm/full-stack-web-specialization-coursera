Object.defineProperty(exports, "__esModule", { value: true });
var commonModule = require("./sidedrawer-common");
var utils = require("tns-core-modules/utils/utils");
var style_properties_1 = require("tns-core-modules/ui/styling/style-properties");
var platform = require("tns-core-modules/platform");
var grid_layout_1 = require("tns-core-modules/ui/layouts/grid-layout");
require("utils/module-merge").merge(commonModule, exports);
var RadSideDrawer = (function (_super) {
    __extends(RadSideDrawer, _super);
    function RadSideDrawer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._androidViewId = -1;
        return _this;
    }
    Object.defineProperty(RadSideDrawer.prototype, "_nativeView", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    RadSideDrawer.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        var page = this.page;
        var drawer = this._android;
        var grid = page.nativeView;
        if (this.getSdkVersion() < 21) {
            if (grid) {
                grid.bringChildToFront(this._android);
            }
        }
        if (drawer && this.showOverNavigation) {
            var parent_1 = drawer.getParent();
            var owner_1 = new WeakRef(this);
            this.layoutChangeFunction = new android.view.View.OnLayoutChangeListener({
                onLayoutChange: function (v, left, top, right, bottom, oldLeft, oldTop, oldRight, oldBottom) {
                    var grid = v.getParent();
                    if (grid.getChildCount() > 1) {
                        var margin = style_properties_1.PercentLength.toDevicePixels(page.actionBar.marginTop) + style_properties_1.PercentLength.toDevicePixels(page.actionBar.marginBottom);
                        var height = v.getBottom() - v.getTop() + margin;
                        var sideDrawer = owner_1.get();
                        if (!sideDrawer) {
                            return;
                        }
                        var mainContent = sideDrawer.mainContent;
                        if (!mainContent || !mainContent.nativeView) {
                            return;
                        }
                        sideDrawer._mainContentNativeView = mainContent.nativeView;
                        if (sideDrawer._actionBarHeight !== height) {
                            sideDrawer._actionBarHeight = height;
                            var lp = sideDrawer._mainContentNativeView.getLayoutParams();
                            lp.topMargin = height;
                            sideDrawer._mainContentNativeView.setLayoutParams(lp);
                        }
                    }
                }
            });
            page.actionBar.nativeView.addOnLayoutChangeListener(this.layoutChangeFunction);
            grid_layout_1.GridLayout.setRow(this, 0);
            grid_layout_1.GridLayout.setRowSpan(this, 2);
        }
    };
    RadSideDrawer.prototype.onUnloaded = function () {
        _super.prototype.onUnloaded.call(this);
        this._actionBarHeight = undefined;
        if (this._mainContentNativeView) {
            var lp = this._mainContentNativeView.getLayoutParams();
            lp.topMargin = 0;
            this._mainContentNativeView.setLayoutParams(lp);
        }
        if (this.page) {
            this.page.actionBar.nativeView.removeOnLayoutChangeListener(this.layoutChangeFunction);
        }
    };
    RadSideDrawer.prototype._addViewToNativeVisualTree = function (child) {
        if (this._android && child.android) {
            if (this.mainContent === child) {
                this._android.setMainContent(child.android);
                return true;
            }
            if (this.drawerContent === child) {
                this._android.setDrawerContent(child.android);
                return true;
            }
        }
        return false;
    };
    RadSideDrawer.prototype._removeViewFromNativeVisualTree = function (child) {
        if (this._android && child.android) {
            //TODO: Remove listener
            if (this.mainContent === child) {
                this._android.setMainContent(null);
                child._isAddedToNativeVisualTree = false;
            }
            if (this.drawerContent === child) {
                this._android.setDrawerContent(null);
                child._isAddedToNativeVisualTree = false;
            }
        }
    };
    RadSideDrawer.prototype.initDrawer = function () {
        this._android = new com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer(this._context);
        if (this.getSdkVersion() >= 21) {
            this._android.setZ(1100);
        }
        var that = new WeakRef(this);
        this._android.addChangeListener(new com.telerik.android.primitives.widget.sidedrawer.DrawerChangeListener({
            onDrawerOpening: function (drawer) {
                if (that.get().hasListeners(commonModule.RadSideDrawer.drawerOpeningEvent)) {
                    var args = {
                        eventName: commonModule.RadSideDrawer.drawerOpeningEvent,
                        object: that.get(),
                        returnValue: false
                    };
                    that.get().notify(args);
                    if (args.returnValue) {
                        return args.returnValue;
                    }
                }
                return false;
            },
            onDrawerOpened: function (drawer) {
                if (that.get().hasListeners(commonModule.RadSideDrawer.drawerOpenedEvent)) {
                    var args = {
                        eventName: commonModule.RadSideDrawer.drawerOpenedEvent,
                        object: that.get()
                    };
                    that.get().notify(args);
                }
            },
            onDrawerClosing: function (drawer) {
                if (that.get().hasListeners(commonModule.RadSideDrawer.drawerClosingEvent)) {
                    var args = {
                        eventName: commonModule.RadSideDrawer.drawerClosingEvent,
                        object: that.get(),
                        returnValue: false
                    };
                    that.get().notify(args);
                    if (args.returnValue) {
                        return args.returnValue;
                    }
                }
                return false;
            },
            onDrawerClosed: function (drawer) {
                if (that.get().hasListeners(commonModule.RadSideDrawer.drawerClosedEvent)) {
                    var args = {
                        eventName: commonModule.RadSideDrawer.drawerClosedEvent,
                        object: that.get()
                    };
                    that.get().notify(args);
                }
            },
            onDrawerPan: function (drawer) {
                if (that.get().hasListeners(commonModule.RadSideDrawer.drawerPanEvent)) {
                    var args = {
                        eventName: commonModule.RadSideDrawer.drawerPanEvent,
                        object: that.get()
                    };
                    that.get().notify(args);
                }
            }
        }));
    };
    RadSideDrawer.prototype.getSdkVersion = function () {
        return parseInt(platform.device.sdkVersion);
    };
    RadSideDrawer.prototype.createNativeView = function () {
        this.page.on("navigatingFrom", this.onNavigatingFrom, this);
        this.initDrawer();
        this._android.setDrawerSize(utils.layout.getDisplayDensity() * this.drawerContentSize);
        this._android.setIsLocked(!this.gesturesEnabled);
        if (this.drawerTransition) {
            this._android.setDrawerTransition(this.drawerTransition.getNativeContent());
        }
        if (this.drawerLocation) {
            this.setDrawerLocation(this.drawerLocation);
        }
        return this._android;
    };
    RadSideDrawer.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        if (this._androidViewId < 0) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._nativeView.setId(this._androidViewId);
    };
    RadSideDrawer.prototype.disposeNativeView = function () {
        this.page.off("navigatingFrom", this.onNavigatingFrom, this);
    };
    RadSideDrawer.prototype.onNavigatingFrom = function (args) {
        if (this.getIsOpen()) {
            this.closeDrawer();
        }
    };
    Object.defineProperty(RadSideDrawer.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    RadSideDrawer.prototype._onGesturesEnabledChanged = function (oldValue, newValue) {
        var value = newValue;
        if (!this.android) {
            return;
        }
        this.android.setIsLocked(!value);
    };
    RadSideDrawer.prototype._onDrawerContentSizeChanged = function (oldValue, newValue) {
        if (!this.android) {
            return;
        }
        if (newValue) {
            this.android.setDrawerSize(utils.layout.getDisplayDensity() * newValue);
        }
    };
    RadSideDrawer.prototype._onDrawerTransitionChanged = function (oldValue, newValue) {
        if (!newValue) {
            return;
        }
        var finalVal;
        if (typeof newValue == "string") {
            switch (newValue.toLowerCase()) {
                case commonModule.FadeTransitionString: {
                    finalVal = new FadeTransition();
                    break;
                }
                case commonModule.PushTransitionString: {
                    finalVal = new PushTransition();
                    break;
                }
                case commonModule.RevealTransitionString: {
                    finalVal = new RevealTransition();
                    break;
                }
                case commonModule.ReverseSlideOutTransitionString: {
                    finalVal = new ReverseSlideOutTransition();
                    break;
                }
                case commonModule.ScaleDownPusherTransitionString: {
                    finalVal = new ScaleDownPusherTransition();
                    break;
                }
                case commonModule.ScaleUpTransitionString: {
                    finalVal = new ScaleUpTransition();
                    break;
                }
                case commonModule.SlideAlongTransitionString: {
                    finalVal = new SlideAlongTransition();
                    break;
                }
                case commonModule.SlideInOnTopTransitionString: {
                    finalVal = new SlideInOnTopTransition();
                    break;
                }
                default: {
                    console.log("Error: Not supported value (" + newValue + ") set to 'drawerTransition'");
                    finalVal = new SlideInOnTopTransition();
                    break;
                }
            }
            if (this.drawerTransition !== finalVal) {
                this.drawerTransition = finalVal;
                return;
            }
        }
        else {
            finalVal = newValue;
        }
        if (this.android) {
            this.android.setDrawerTransition(finalVal.getNativeContent());
        }
    };
    RadSideDrawer.prototype._onDrawerLocationChanged = function (oldValue, newValue) {
        _super.prototype._onDrawerLocationChanged.call(this, oldValue, newValue);
        if (!this.android) {
            return;
        }
        if (!newValue) {
            return;
        }
        this.setDrawerLocation(newValue);
    };
    RadSideDrawer.prototype.setDrawerLocation = function (newLocation) {
        var newLocationToLower = newLocation.toLocaleLowerCase();
        switch (newLocationToLower) {
            case commonModule.SideDrawerLocation.Left.toLocaleLowerCase():
                this.android.setDrawerLocation(com.telerik.android.primitives.widget.sidedrawer.DrawerLocation.LEFT);
                break;
            case commonModule.SideDrawerLocation.Right.toLocaleLowerCase():
                this.android.setDrawerLocation(com.telerik.android.primitives.widget.sidedrawer.DrawerLocation.RIGHT);
                break;
            case commonModule.SideDrawerLocation.Top.toLocaleLowerCase():
                this.android.setDrawerLocation(com.telerik.android.primitives.widget.sidedrawer.DrawerLocation.TOP);
                break;
            case commonModule.SideDrawerLocation.Bottom.toLocaleLowerCase():
                this.android.setDrawerLocation(com.telerik.android.primitives.widget.sidedrawer.DrawerLocation.BOTTOM);
                break;
        }
    };
    RadSideDrawer.prototype.closeDrawer = function () {
        if (this.android) {
            this.android.setIsOpen(false);
            _super.prototype.closeDrawer.call(this);
        }
    };
    RadSideDrawer.prototype.showDrawer = function () {
        if (this._android) {
            this._android.setIsOpen(true);
            _super.prototype.showDrawer.call(this);
        }
    };
    return RadSideDrawer;
}(commonModule.RadSideDrawer));
exports.RadSideDrawer = RadSideDrawer;
var DrawerTransitionBase = (function () {
    function DrawerTransitionBase() {
    }
    DrawerTransitionBase.prototype.getNativeContent = function () {
        return undefined;
    };
    return DrawerTransitionBase;
}());
exports.DrawerTransitionBase = DrawerTransitionBase;
var FadeTransition = (function (_super) {
    __extends(FadeTransition, _super);
    function FadeTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FadeTransition.prototype.getNativeContent = function () {
        return new com.telerik.android.primitives.widget.sidedrawer.transitions.FadeTransition();
    };
    return FadeTransition;
}(DrawerTransitionBase));
exports.FadeTransition = FadeTransition;
var PushTransition = (function (_super) {
    __extends(PushTransition, _super);
    function PushTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PushTransition.prototype.getNativeContent = function () {
        return new com.telerik.android.primitives.widget.sidedrawer.transitions.PushTransition();
    };
    return PushTransition;
}(DrawerTransitionBase));
exports.PushTransition = PushTransition;
var RevealTransition = (function (_super) {
    __extends(RevealTransition, _super);
    function RevealTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RevealTransition.prototype.getNativeContent = function () {
        return new com.telerik.android.primitives.widget.sidedrawer.transitions.RevealTransition();
    };
    return RevealTransition;
}(DrawerTransitionBase));
exports.RevealTransition = RevealTransition;
var ReverseSlideOutTransition = (function (_super) {
    __extends(ReverseSlideOutTransition, _super);
    function ReverseSlideOutTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReverseSlideOutTransition.prototype.getNativeContent = function () {
        return new com.telerik.android.primitives.widget.sidedrawer.transitions.ReverseSlideOutTransition();
    };
    return ReverseSlideOutTransition;
}(DrawerTransitionBase));
exports.ReverseSlideOutTransition = ReverseSlideOutTransition;
var ScaleDownPusherTransition = (function (_super) {
    __extends(ScaleDownPusherTransition, _super);
    function ScaleDownPusherTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScaleDownPusherTransition.prototype.getNativeContent = function () {
        return new com.telerik.android.primitives.widget.sidedrawer.transitions.ScaleDownPusherTransition();
    };
    return ScaleDownPusherTransition;
}(DrawerTransitionBase));
exports.ScaleDownPusherTransition = ScaleDownPusherTransition;
var ScaleUpTransition = (function (_super) {
    __extends(ScaleUpTransition, _super);
    function ScaleUpTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScaleUpTransition.prototype.getNativeContent = function () {
        return new com.telerik.android.primitives.widget.sidedrawer.transitions.ScaleUpTransition();
    };
    return ScaleUpTransition;
}(DrawerTransitionBase));
exports.ScaleUpTransition = ScaleUpTransition;
var SlideAlongTransition = (function (_super) {
    __extends(SlideAlongTransition, _super);
    function SlideAlongTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SlideAlongTransition.prototype.getNativeContent = function () {
        return new com.telerik.android.primitives.widget.sidedrawer.transitions.SlideAlongTransition();
    };
    return SlideAlongTransition;
}(DrawerTransitionBase));
exports.SlideAlongTransition = SlideAlongTransition;
var SlideInOnTopTransition = (function (_super) {
    __extends(SlideInOnTopTransition, _super);
    function SlideInOnTopTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SlideInOnTopTransition.prototype.getNativeContent = function () {
        return new com.telerik.android.primitives.widget.sidedrawer.transitions.SlideInOnTopTransition();
    };
    return SlideInOnTopTransition;
}(DrawerTransitionBase));
exports.SlideInOnTopTransition = SlideInOnTopTransition;
