Object.defineProperty(exports, "__esModule", { value: true });
var commonModule = require("./calendar-common");
var color_1 = require("tns-core-modules/color");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var utils = require("tns-core-modules/utils/utils");
require("utils/module-merge").merge(commonModule, exports);
////////////////////////////////////////////////////////////////////////////////////////////////////
var CalendarEvent = (function (_super) {
    __extends(CalendarEvent, _super);
    function CalendarEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CalendarEvent.prototype, "ios", {
        get: function () {
            if (!this._ios) {
                this._ios = TKCalendarEvent.new();
            }
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    CalendarEvent.prototype._setIsAllDay = function (value) {
        this.ios.allDay = value;
    };
    CalendarEvent.prototype._getIsAllDay = function () {
        return this.ios.allDay;
    };
    CalendarEvent.prototype._setEndDate = function (date) {
        this.ios.endDate = date;
    };
    CalendarEvent.prototype._getEndDate = function () {
        return this.ios.endDate;
    };
    CalendarEvent.prototype._setStartDate = function (date) {
        this.ios.startDate = date;
    };
    CalendarEvent.prototype._getStartDate = function () {
        return this.ios.startDate;
    };
    CalendarEvent.prototype._setTitle = function (value) {
        this.ios.title = value;
    };
    CalendarEvent.prototype._getTitle = function () {
        return this.ios.title;
    };
    CalendarEvent.prototype._setEventColor = function (value) {
        this.ios.eventColor = value.ios;
    };
    CalendarEvent.prototype._getEventColor = function () {
        if (this.ios.eventColor) {
            var a = new interop.Reference();
            var r = new interop.Reference();
            var g = new interop.Reference();
            var b = new interop.Reference();
            this.ios.eventColor.getRedGreenBlueAlpha(r, g, b, a);
            return new color_1.Color(Math.round(a.value * 255), Math.round(r.value * 255), Math.round(g.value * 255), Math.round(b.value * 255));
        }
    };
    return CalendarEvent;
}(commonModule.CalendarEvent));
exports.CalendarEvent = CalendarEvent;
/**
 * Helper methods
 */
var Tools = (function () {
    function Tools() {
    }
    Tools.createFont = function (fontName, fontStyle, fontSize) {
        var font = null;
        var size = fontSize || 10;
        if (fontName) {
            font = UIFont.fontWithNameSize(fontName, size);
        }
        else {
            font = UIFont.systemFontOfSize(size);
        }
        if (!font) {
            console.log("WARNING: Cannot create font with given name: " + font + ". System font will be used instead.");
            font = UIFont.systemFontOfSize(size);
            return;
        }
        if (fontStyle) {
            var traits = 0 /* ClassUnknown */;
            switch (fontStyle.toLowerCase()) {
                case commonModule.FontStyles.Bold.toLowerCase():
                    traits = 2 /* TraitBold */;
                    break;
                case commonModule.FontStyles.Italic.toLowerCase():
                    traits = 1 /* TraitItalic */;
                    break;
                case commonModule.FontStyles.BoldItalic.toLowerCase():
                    traits = 2 /* TraitBold */ | 1 /* TraitItalic */;
                    break;
            }
            var newFont = UIFont.fontWithDescriptorSize(utils.ios.getter(font, font.fontDescriptor).fontDescriptorWithSymbolicTraits(traits), size);
            if (newFont) {
                font = newFont;
            }
        }
        return font;
    };
    return Tools;
}());
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                          STYLES FOR DIFFERENT CELL TYPES 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var CellStyleInitializer = (function () {
    function CellStyleInitializer() {
    }
    CellStyleInitializer.prototype.onCellBorderWidthChanged = function (oldValue, newValue, style) {
        if (!isNaN(+newValue)) {
            style.ios.leftBorderWidth = newValue;
            style.ios.rightBorderWidth = newValue;
            style.ios.topBorderWidth = newValue;
            style.ios.bottomBorderWidth = newValue;
        }
        else {
            style.ios.leftBorderWidth = 0;
            style.ios.rightBorderWidth = 0;
            style.ios.topBorderWidth = 0;
            style.ios.bottomBorderWidth = 0;
        }
    };
    CellStyleInitializer.prototype.onCellBorderColorChanged = function (oldValue, newValue, style) {
        if (newValue) {
            var color = new color_1.Color(newValue);
            style.ios.leftBorderColor = color.ios;
            style.ios.rightBorderColor = color.ios;
            style.ios.topBorderColor = color.ios;
            style.ios.bottomBorderColor = color.ios;
        }
        else {
            var color = new color_1.Color('#00000000');
            style.ios.leftBorderColor = color.ios;
            style.ios.rightBorderColor = color.ios;
            style.ios.topBorderColor = color.ios;
            style.ios.bottomBorderColor = color.ios;
        }
    };
    CellStyleInitializer.prototype.onCellBackgroundColorChanged = function (oldValue, newValue, style) {
        if (newValue) {
            style.ios.backgroundColor = (new color_1.Color(newValue)).ios;
        }
        else {
            var color = new color_1.Color('#00000000');
            style.ios.backgroundColor = color.ios;
        }
    };
    CellStyleInitializer.prototype.onCellAlignmentChanged = function (oldValue, newValue, style) {
        if (!newValue) {
            return;
        }
        switch (newValue.toLowerCase()) {
            case commonModule.CalendarCellAlignment.Bottom.toLowerCase():
                style.ios.textAlignment = 8 /* Bottom */;
                break;
            case commonModule.CalendarCellAlignment.Top.toLowerCase():
                style.ios.textAlignment = 4 /* Top */;
                break;
            case commonModule.CalendarCellAlignment.Left.toLowerCase():
                style.ios.textAlignment = 1 /* Left */;
                break;
            case commonModule.CalendarCellAlignment.Right.toLowerCase():
                style.ios.textAlignment = 2 /* Right */;
                break;
            case commonModule.CalendarCellAlignment.HorizontalCenter.toLowerCase():
                style.ios.textAlignment = 16 /* HorizontalCenter */;
                break;
            case commonModule.CalendarCellAlignment.VerticalCenter.toLowerCase():
                style.ios.textAlignment = 32 /* VerticalCenter */;
                break;
            default:
                console.log("WARNING: Unsupported cell alignment value: " + newValue);
        }
    };
    CellStyleInitializer.prototype.onCellPaddingHorizontalChanged = function (oldValue, newValue, style) {
        var vertPadding = (!isNaN(+style.cellPaddingVertical)) ? style.cellPaddingVertical : 0;
        if (!isNaN(+newValue)) {
            style.ios.textInsets = UIEdgeInsetsFromString("{" + vertPadding + ", " + newValue + ", " + vertPadding + ", " + newValue + "}");
            // in android you cannot set event paddings exclusively, there is only cell paddings. That's why we apply the paddings to all of the cell content, including events
            if (style instanceof DayCellStyle) {
                style.ios.eventInsets = UIEdgeInsetsFromString("{" + vertPadding + ", " + newValue + ", " + vertPadding + ", " + newValue + "}");
            }
        }
        else {
            style.ios.textInsets = UIEdgeInsetsFromString("{" + vertPadding + ", " + 0 + ", " + vertPadding + ", " + 0 + "}");
            // in android you cannot set event paddings exclusively, there is only cell paddings. That's why we apply the paddings to all of the cell content, including events
            if (style instanceof DayCellStyle) {
                style.ios.eventInsets = UIEdgeInsetsFromString("{" + vertPadding + ", " + 0 + ", " + vertPadding + ", " + 0 + "}");
            }
        }
    };
    CellStyleInitializer.prototype.onCellPaddingVerticalChanged = function (oldValue, newValue, style) {
        var horzPadding = (!isNaN(+style.cellPaddingHorizontal)) ? style.cellPaddingHorizontal : 0;
        if (!isNaN(+newValue)) {
            style.ios.textInsets = UIEdgeInsetsFromString("{" + newValue + ", " + horzPadding + ", " + newValue + ", " + horzPadding + "}");
            // in android you cannot set event paddings exclusively, there is only cell paddings. That's why we apply the paddings to all of the cell content, including events
            if (style instanceof DayCellStyle) {
                style.ios.eventInsets = UIEdgeInsetsFromString("{" + newValue + ", " + horzPadding + ", " + newValue + ", " + horzPadding + "}");
            }
        }
        else {
            style.ios.textInsets = UIEdgeInsetsFromString("{" + 0 + ", " + horzPadding + ", " + 0 + ", " + horzPadding + "}");
            // in android you cannot set event paddings exclusively, there is only cell paddings. That's why we apply the paddings to all of the cell content, including events
            if (style instanceof DayCellStyle) {
                style.ios.eventInsets = UIEdgeInsetsFromString("{" + 0 + ", " + horzPadding + ", " + 0 + ", " + horzPadding + "}");
            }
        }
    };
    CellStyleInitializer.prototype.onCellTextColorChanged = function (oldValue, newValue, style) {
        if (newValue) {
            style.ios.textColor = (new color_1.Color(newValue)).ios;
        }
    };
    CellStyleInitializer.prototype.onCellTextFontNameChanged = function (oldValue, newValue, style) {
        if (newValue) {
            style.ios.textFont = Tools.createFont(newValue, style.cellTextFontStyle, style.cellTextSize);
        }
    };
    CellStyleInitializer.prototype.onCellTextFontStyleChanged = function (oldValue, newValue, style) {
        if (newValue) {
            style.ios.textFont = Tools.createFont(style.cellTextFontName, newValue, style.cellTextSize);
        }
    };
    CellStyleInitializer.prototype.onCellTextSizeChanged = function (oldValue, newValue, style) {
        if (!isNaN(+newValue)) {
            style.ios.textFont = Tools.createFont(style.cellTextFontName, style.cellTextFontStyle, newValue);
        }
    };
    return CellStyleInitializer;
}());
exports.CellStyleInitializer = CellStyleInitializer;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var CellStyle = (function (_super) {
    __extends(CellStyle, _super);
    function CellStyle() {
        var _this = _super.call(this) || this;
        _this._ios = TKCalendarCellStyle.alloc().init();
        return _this;
    }
    Object.defineProperty(CellStyle.prototype, "initializer", {
        get: function () {
            if (!this._initializer) {
                this._initializer = new CellStyleInitializer();
            }
            return this._initializer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellStyle.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    CellStyle.prototype.onCellBorderWidthChanged = function (oldValue, newValue) {
        this.initializer.onCellBorderWidthChanged(oldValue, newValue, this);
    };
    CellStyle.prototype.onCellBorderColorChanged = function (oldValue, newValue) {
        this.initializer.onCellBorderColorChanged(oldValue, newValue, this);
    };
    CellStyle.prototype.onCellBackgroundColorChanged = function (oldValue, newValue) {
        this.initializer.onCellBackgroundColorChanged(oldValue, newValue, this);
    };
    CellStyle.prototype.onCellTextColorChanged = function (oldValue, newValue) {
        this.initializer.onCellTextColorChanged(oldValue, newValue, this);
    };
    CellStyle.prototype.onCellTextFontNameChanged = function (oldValue, newValue) {
        this.initializer.onCellTextFontNameChanged(oldValue, newValue, this);
    };
    CellStyle.prototype.onCellTextFontStyleChanged = function (oldValue, newValue) {
        this.initializer.onCellTextFontStyleChanged(oldValue, newValue, this);
    };
    CellStyle.prototype.onCellTextSizeChanged = function (oldValue, newValue) {
        this.initializer.onCellTextSizeChanged(oldValue, newValue, this);
    };
    CellStyle.prototype.onCellPaddingHorizontalChanged = function (oldValue, newValue) {
        this.initializer.onCellPaddingHorizontalChanged(oldValue, newValue, this);
    };
    CellStyle.prototype.onCellPaddingVerticalChanged = function (oldValue, newValue) {
        this.initializer.onCellPaddingVerticalChanged(oldValue, newValue, this);
    };
    CellStyle.prototype.onCellAlignmentChanged = function (oldValue, newValue) {
        this.initializer.onCellAlignmentChanged(oldValue, newValue, this);
    };
    return CellStyle;
}(commonModule.CellStyle));
exports.CellStyle = CellStyle;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var DayCellStyle = (function (_super) {
    __extends(DayCellStyle, _super);
    function DayCellStyle() {
        var _this = _super.call(this) || this;
        _this._ios = TKCalendarDayCellStyle.alloc().init();
        return _this;
    }
    Object.defineProperty(DayCellStyle.prototype, "initializer", {
        get: function () {
            if (!this._initializer) {
                this._initializer = new CellStyleInitializer();
            }
            return this._initializer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DayCellStyle.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    DayCellStyle.prototype.onCellBorderWidthChanged = function (oldValue, newValue) {
        this.initializer.onCellBorderWidthChanged(oldValue, newValue, this);
    };
    DayCellStyle.prototype.onCellBorderColorChanged = function (oldValue, newValue) {
        this.initializer.onCellBorderColorChanged(oldValue, newValue, this);
    };
    DayCellStyle.prototype.onCellBackgroundColorChanged = function (oldValue, newValue) {
        this.initializer.onCellBackgroundColorChanged(oldValue, newValue, this);
    };
    DayCellStyle.prototype.onCellTextColorChanged = function (oldValue, newValue) {
        this.initializer.onCellTextColorChanged(oldValue, newValue, this);
    };
    DayCellStyle.prototype.onCellTextFontNameChanged = function (oldValue, newValue) {
        this.initializer.onCellTextFontNameChanged(oldValue, newValue, this);
    };
    DayCellStyle.prototype.onCellTextFontStyleChanged = function (oldValue, newValue) {
        this.initializer.onCellTextFontStyleChanged(oldValue, newValue, this);
    };
    DayCellStyle.prototype.onCellTextSizeChanged = function (oldValue, newValue) {
        this.initializer.onCellTextSizeChanged(oldValue, newValue, this);
    };
    DayCellStyle.prototype.onCellPaddingHorizontalChanged = function (oldValue, newValue) {
        this.initializer.onCellPaddingHorizontalChanged(oldValue, newValue, this);
    };
    DayCellStyle.prototype.onCellPaddingVerticalChanged = function (oldValue, newValue) {
        this.initializer.onCellPaddingVerticalChanged(oldValue, newValue, this);
    };
    DayCellStyle.prototype.onCellAlignmentChanged = function (oldValue, newValue) {
        this.initializer.onCellAlignmentChanged(oldValue, newValue, this);
    };
    //day cell specific properties
    DayCellStyle.prototype.onShowEventsTextChanged = function (oldValue, newValue) {
        this.ios.displayEventsAsText = newValue;
    };
    DayCellStyle.prototype.onEventTextColorChanged = function (oldValue, newValue) {
        if (newValue) {
            this.ios.eventTextColor = (new color_1.Color(newValue)).ios;
        }
    };
    DayCellStyle.prototype.onEventFontNameChanged = function (oldValue, newValue) {
        if (newValue) {
            this.ios.eventFont = Tools.createFont(newValue, this.eventFontStyle, this.eventTextSize);
        }
    };
    DayCellStyle.prototype.onEventFontStyleChanged = function (oldValue, newValue) {
        if (newValue) {
            this.ios.eventFont = Tools.createFont(this.eventFontName, newValue, this.eventTextSize);
        }
    };
    DayCellStyle.prototype.onEventTextSizeChanged = function (oldValue, newValue) {
        if (!isNaN(+newValue)) {
            this.ios.eventFont = Tools.createFont(this.eventFontName, this.eventFontStyle, newValue);
        }
    };
    return DayCellStyle;
}(commonModule.DayCellStyle));
exports.DayCellStyle = DayCellStyle;
/**
 * Cell style class for months in year view mode
 */
var MonthCellStyle = (function (_super) {
    __extends(MonthCellStyle, _super);
    function MonthCellStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MonthCellStyle.prototype, "owner", {
        set: function (value) {
            this._owner = value;
            this.updateNativePresenter();
        },
        enumerable: true,
        configurable: true
    });
    MonthCellStyle.prototype.updateNativePresenter = function () {
        if (this._owner && (this._owner.ios.presenter instanceof TKCalendarYearPresenter)) {
            if (this.dayTextColor)
                this._owner.ios.presenter.style.dayTextColor = (new color_1.Color(this.dayTextColor)).ios;
            if (this.weekendTextColor)
                this._owner.ios.presenter.style.weekendTextColor = (new color_1.Color(this.weekendTextColor)).ios;
            if (this.todayTextColor)
                this._owner.ios.presenter.style.todayTextColor = (new color_1.Color(this.todayTextColor)).ios;
            if (this.dayNameTextColor)
                this._owner.ios.presenter.style.dayNameTextColor = (new color_1.Color(this.dayNameTextColor)).ios;
            if (this.monthNameTextColor)
                this._owner.ios.presenter.style.monthNameTextColor = (new color_1.Color(this.monthNameTextColor)).ios;
            this._owner.ios.presenter.style.dayFont = Tools.createFont(this.dayFontName, this.dayFontStyle, this.dayTextSize);
            this._owner.ios.presenter.style.dayNameFont = Tools.createFont(this.dayNameFontName, this.dayNameFontStyle, this.dayNameTextSize);
            this._owner.ios.presenter.style.monthNameFont = Tools.createFont(this.monthNameFontName, this.monthNameFontStyle, this.monthNameTextSize);
            //note: since android calendar in year view doesn't support shape color, we disable it for ios too
            this._owner.ios.presenter.style.todayShapeFill = null;
        }
    };
    MonthCellStyle.prototype.onWeekendTextColorChanged = function (oldValue, newValue) {
        if (newValue && this._owner) {
            this._owner.ios.presenter.style.weekendTextColor = (new color_1.Color(newValue)).ios;
        }
    };
    MonthCellStyle.prototype.onTodayTextColorChanged = function (oldValue, newValue) {
        if (newValue && this._owner) {
            this._owner.ios.presenter.style.todayTextColor = (new color_1.Color(newValue)).ios;
        }
    };
    MonthCellStyle.prototype.onDayTextColorChanged = function (oldValue, newValue) {
        if (newValue && this._owner) {
            this._owner.ios.presenter.style.dayTextColor = (new color_1.Color(newValue)).ios;
        }
    };
    MonthCellStyle.prototype.onDayFontNameChanged = function (oldValue, newValue) {
        if (this._owner && newValue) {
            this._owner.ios.presenter.style.dayFont = Tools.createFont(newValue, this.dayFontStyle, this.dayTextSize);
        }
    };
    MonthCellStyle.prototype.onDayFontStyleChanged = function (oldValue, newValue) {
        if (this._owner && newValue) {
            this._owner.ios.presenter.style.dayFont = Tools.createFont(this.dayFontName, newValue, this.dayTextSize);
        }
    };
    MonthCellStyle.prototype.onDayTextSizeChanged = function (oldValue, newValue) {
        if (this._owner && !isNaN(+newValue)) {
            this._owner.ios.presenter.style.dayFont = Tools.createFont(this.dayFontName, this.dayFontStyle, newValue);
        }
    };
    MonthCellStyle.prototype.onDayNameTextColorChanged = function (oldValue, newValue) {
        if (newValue && this._owner) {
            this._owner.ios.presenter.style.dayNameTextColor = (new color_1.Color(newValue)).ios;
        }
    };
    MonthCellStyle.prototype.onDayNameFontNameChanged = function (oldValue, newValue) {
        if (this._owner && newValue) {
            this._owner.ios.presenter.style.dayNameFont = Tools.createFont(newValue, this.dayNameFontStyle, this.dayNameTextSize);
        }
    };
    MonthCellStyle.prototype.onDayNameFontStyleChanged = function (oldValue, newValue) {
        if (this._owner && newValue) {
            this._owner.ios.presenter.style.dayNameFont = Tools.createFont(this.dayNameFontName, newValue, this.dayNameTextSize);
        }
    };
    MonthCellStyle.prototype.onDayNameTextSizeChanged = function (oldValue, newValue) {
        if (this._owner && !isNaN(+newValue)) {
            this._owner.ios.presenter.style.dayNameFont = Tools.createFont(this.dayNameFontName, this.dayNameFontStyle, newValue);
        }
    };
    MonthCellStyle.prototype.onMonthNameTextColorChanged = function (oldValue, newValue) {
        if (newValue && this._owner) {
            this._owner.ios.presenter.style.monthNameTextColor = (new color_1.Color(newValue)).ios;
        }
    };
    MonthCellStyle.prototype.onMonthNameFontNameChanged = function (oldValue, newValue) {
        if (this._owner && newValue) {
            this._owner.ios.presenter.style.monthNameFont = Tools.createFont(newValue, this.monthNameFontStyle, this.monthNameTextSize);
        }
    };
    MonthCellStyle.prototype.onMonthNameFontStyleChanged = function (oldValue, newValue) {
        if (this._owner && newValue) {
            this._owner.ios.presenter.style.monthNameFont = Tools.createFont(this.monthNameFontName, newValue, this.monthNameTextSize);
        }
    };
    MonthCellStyle.prototype.onMonthNameTextSizeChanged = function (oldValue, newValue) {
        if (this._owner && !isNaN(+newValue)) {
            this._owner.ios.presenter.style.monthNameFont = Tools.createFont(this.monthNameFontName, this.monthNameFontStyle, newValue);
        }
    };
    return MonthCellStyle;
}(commonModule.MonthCellStyle));
exports.MonthCellStyle = MonthCellStyle;
/**
 * Cell style class for inline events cells in month view
 * property values are used by TKCalendarMonthPresenterDelegateImplementation delegate that's why we don't need extra actions for update
 */
var InlineEventCellStyle = (function (_super) {
    __extends(InlineEventCellStyle, _super);
    function InlineEventCellStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineEventCellStyle.prototype.onCellBackgroundColorChanged = function (oldValue, newValue) { };
    InlineEventCellStyle.prototype.onEventTextColorChanged = function (oldValue, newValue) { };
    InlineEventCellStyle.prototype.onEventFontNameChanged = function (oldValue, newValue) { };
    InlineEventCellStyle.prototype.onEventFontStyleChanged = function (oldValue, newValue) { };
    InlineEventCellStyle.prototype.onEventTextSizeChanged = function (oldValue, newValue) { };
    InlineEventCellStyle.prototype.onTimeTextColorChanged = function (oldValue, newValue) { };
    InlineEventCellStyle.prototype.onTimeFontNameChanged = function (oldValue, newValue) { };
    InlineEventCellStyle.prototype.onTimeFontStyleChanged = function (oldValue, newValue) { };
    InlineEventCellStyle.prototype.onTimeTextSizeChanged = function (oldValue, newValue) { };
    return InlineEventCellStyle;
}(commonModule.InlineEventCellStyle));
exports.InlineEventCellStyle = InlineEventCellStyle;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                          STYLES FOR DIFFERENT VIEW MODES 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Class for month view style
 */
var CalendarMonthViewStyle = (function (_super) {
    __extends(CalendarMonthViewStyle, _super);
    function CalendarMonthViewStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CalendarMonthViewStyle.prototype, "owner", {
        set: function (value) {
            this._owner = value;
            this.updateNativeOwner();
        },
        enumerable: true,
        configurable: true
    });
    CalendarMonthViewStyle.prototype.updateViewStyles = function (forceUpdate) {
        this.updateNativeOwner();
    };
    CalendarMonthViewStyle.prototype.updateNativeOwner = function () {
        if (this._owner && this._owner.ios && (this._owner.ios.presenter instanceof TKCalendarMonthPresenter)) {
            if (this.showWeekNumbers != undefined)
                this._owner.ios.presenter.weekNumbersHidden = !this.showWeekNumbers;
            if (this.showTitle != undefined)
                this._owner.ios.presenter.titleHidden = !this.showTitle;
            if (this.showDayNames != undefined)
                this._owner.ios.presenter.dayNamesHidden = !this.showDayNames;
            if (this.backgroundColor)
                this._owner.ios.presenter.style.backgroundColor = (new color_1.Color(this.backgroundColor)).ios;
            this._owner.updateCalendar();
        }
    };
    CalendarMonthViewStyle.prototype.updateOwner = function () {
        if (this._owner) {
            this._owner.updateCalendar();
        }
    };
    CalendarMonthViewStyle.prototype.onSelectionShapeChanged = function (oldValue, newValue) {
        _super.prototype.onSelectionShapeChanged.call(this, oldValue, newValue);
        this.updateOwner();
    };
    CalendarMonthViewStyle.prototype.onSelectionShapeSizeChanged = function (oldValue, newValue) {
        _super.prototype.onSelectionShapeSizeChanged.call(this, oldValue, newValue);
        this.updateOwner();
    };
    CalendarMonthViewStyle.prototype.onSelectionShapeColorChanged = function (oldValue, newValue) {
        _super.prototype.onSelectionShapeColorChanged.call(this, oldValue, newValue);
        this.updateOwner();
    };
    CalendarMonthViewStyle.prototype.onShowWeekNumbersChanged = function (oldValue, newValue) {
        if (this._owner && this._owner.ios) {
            this._owner.ios.presenter.weekNumbersHidden = !newValue;
        }
        this.updateOwner();
    };
    CalendarMonthViewStyle.prototype.onShowTitleChanged = function (oldValue, newValue) {
        if (this._owner && this._owner.ios) {
            this._owner.ios.presenter.titleHidden = !newValue;
        }
        this.updateOwner();
    };
    CalendarMonthViewStyle.prototype.onShowDayNamesChanged = function (oldValue, newValue) {
        if (this._owner && this._owner.ios) {
            this._owner.ios.presenter.dayNamesHidden = !newValue;
        }
        this.updateOwner();
    };
    CalendarMonthViewStyle.prototype.onBackgroundColorChanged = function (oldValue, newValue) {
        if (newValue && this._owner && this._owner.ios) {
            this._owner.ios.presenter.style.backgroundColor = (new color_1.Color(newValue)).ios;
        }
        this.updateOwner();
    };
    CalendarMonthViewStyle.prototype.onDayCellStyleChanged = function (oldValue, newValue) {
        this.updateOwner();
    };
    CalendarMonthViewStyle.prototype.onSelectedDayCellStyleChanged = function (oldValue, newValue) {
        this.updateOwner();
    };
    CalendarMonthViewStyle.prototype.onTodayCellStyleChanged = function (oldValue, newValue) {
        this.updateOwner();
    };
    CalendarMonthViewStyle.prototype.onWeekNumberCellStyleChanged = function (oldValue, newValue) {
        this.updateOwner();
    };
    CalendarMonthViewStyle.prototype.onWeekendCellStyleChanged = function (oldValue, newValue) {
        this.updateOwner();
    };
    CalendarMonthViewStyle.prototype.onDayNameCellStyleChanged = function (oldValue, newValue) {
        this.updateOwner();
    };
    CalendarMonthViewStyle.prototype.onTitleCellStyleChanged = function (oldValue, newValue) {
        this.updateOwner();
    };
    CalendarMonthViewStyle.prototype.onInlineEventCellStyleChanged = function (oldValue, newValue) {
        this.updateOwner();
    };
    return CalendarMonthViewStyle;
}(commonModule.CalendarMonthViewStyle));
exports.CalendarMonthViewStyle = CalendarMonthViewStyle;
/**
 * The style class for week mode.
 * NOTE: we should consider if we need an explicit class that is the same as the base one
 */
var CalendarWeekViewStyle = (function (_super) {
    __extends(CalendarWeekViewStyle, _super);
    function CalendarWeekViewStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarWeekViewStyle.prototype.updateNativeOwner = function () {
        if (this._owner && (this._owner.ios.presenter instanceof TKCalendarWeekPresenter)) {
            _super.prototype.updateNativeOwner.call(this);
        }
    };
    return CalendarWeekViewStyle;
}(CalendarMonthViewStyle));
exports.CalendarWeekViewStyle = CalendarWeekViewStyle;
/**
 * The style class for month name view mode.
 * NOTE: we should consider if we need an explicit class that is the same as the base one
 */
var CalendarMonthNamesViewStyle = (function (_super) {
    __extends(CalendarMonthNamesViewStyle, _super);
    function CalendarMonthNamesViewStyle() {
        return _super.call(this) || this;
    }
    Object.defineProperty(CalendarMonthNamesViewStyle.prototype, "owner", {
        set: function (value) {
            this._owner = value;
        },
        enumerable: true,
        configurable: true
    });
    CalendarMonthNamesViewStyle.prototype.updateViewStyles = function (forceUpdate) {
        this.updateOwner();
    };
    CalendarMonthNamesViewStyle.prototype.updateOwner = function () {
        if (this._owner && this._owner.viewMode == commonModule.CalendarViewMode.MonthNames) {
            this._owner.updateCalendar();
        }
    };
    CalendarMonthNamesViewStyle.prototype.onTitleCellStyleChanged = function (oldValue, newValue) {
        this.updateOwner();
    };
    CalendarMonthNamesViewStyle.prototype.onMonthNameCellStyleChanged = function (oldValue, newValue) {
        this.updateOwner();
    };
    return CalendarMonthNamesViewStyle;
}(commonModule.CalendarMonthNamesViewStyle));
exports.CalendarMonthNamesViewStyle = CalendarMonthNamesViewStyle;
/**
 * The year mode style class
 */
var CalendarYearViewStyle = (function (_super) {
    __extends(CalendarYearViewStyle, _super);
    function CalendarYearViewStyle() {
        return _super.call(this) || this;
    }
    Object.defineProperty(CalendarYearViewStyle.prototype, "owner", {
        set: function (value) {
            this._owner = value;
            if (this.monthCellStyle) {
                this.monthCellStyle.owner = this._owner;
            }
        },
        enumerable: true,
        configurable: true
    });
    CalendarYearViewStyle.prototype.updateViewStyles = function (forceUpdate) {
        this.monthCellStyle['updateNativePresenter']();
        this.updateOwner();
    };
    CalendarYearViewStyle.prototype.updateOwner = function () {
        if (this._owner) {
            this._owner.updateCalendar();
        }
    };
    CalendarYearViewStyle.prototype.onTitleCellStyleChanged = function (oldValue, newValue) {
        this.updateOwner();
    };
    CalendarYearViewStyle.prototype.onMonthCellStyleChanged = function (oldValue, newValue) {
        if (newValue && this._owner) {
            this.monthCellStyle.owner = this._owner;
        }
        this.updateOwner();
    };
    return CalendarYearViewStyle;
}(commonModule.CalendarYearViewStyle));
exports.CalendarYearViewStyle = CalendarYearViewStyle;
////////////////////////////////////////////////////////////////////////////////////////////////////
var RadCalendar = (function (_super) {
    __extends(RadCalendar, _super);
    function RadCalendar() {
        var _this = _super.call(this) || this;
        _this._ios = TKCalendar.alloc().init();
        _this._nativeDelegate = TKCalendarNativeDelegateImplementation.initWithOwner(new WeakRef(_this));
        _this._nativePresenterDelegate = TKCalendarMonthPresenterDelegateImplementation.initWithOwner(new WeakRef(_this));
        _this._ios.delegate = _this._nativeDelegate;
        if (_this.displayedDate == undefined) {
            _this.loadNativeDisplayedDate();
        }
        _this.setNativeLocale(_this.locale);
        return _this;
    }
    Object.defineProperty(RadCalendar.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    RadCalendar.prototype.createNativeView = function () {
        return this.ios;
    };
    RadCalendar.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios.delegate = this._nativeDelegate;
        this._ios.dataSource = this._dataSource;
        this._ios.presenter.delegate = this._nativePresenterDelegate;
        this._calendarLoaded = true;
    };
    RadCalendar.prototype.onUnloaded = function () {
        _super.prototype.onUnloaded.call(this);
        this._ios.delegate = null;
        this._ios.dataSource = null;
        this._calendarLoaded = false;
        if (this._ios.presenter instanceof TKCalendarPresenterBase) {
            this._ios.presenter.delegate = null;
        }
    };
    RadCalendar.prototype.updateCalendar = function () {
        if (this._calendarLoaded && this.ios.presenter) {
            this.ios.presenter.update(false);
        }
    };
    RadCalendar.prototype.onLocalePropertyChanged = function (oldValue, newValue) {
        _super.prototype.onLocalePropertyChanged.call(this, oldValue, newValue);
        this.setNativeLocale(newValue);
    };
    RadCalendar.prototype.setNativeLocale = function (locale) {
        if (locale) {
            this.ios.locale = NSLocale.alloc().initWithLocaleIdentifier(locale);
            this.updateCalendar();
        }
    };
    RadCalendar.prototype.onDisplayedDateChanged = function (oldValue, newValue) {
        if (newValue) {
            this.ios.navigateToDateAnimated(this.parseDate(newValue), false);
        }
    };
    RadCalendar.prototype.getDisplayedDate = function () {
        return this.ios.displayedDate;
    };
    RadCalendar.prototype.onSelectionModeChanged = function (oldValue, newValue) {
        if (newValue) {
            var selectionMode = newValue.toLowerCase();
            switch (selectionMode) {
                case commonModule.CalendarSelectionMode.None.toLowerCase():
                    this.ios.selectionMode = 0 /* None */;
                    break;
                case commonModule.CalendarSelectionMode.Single.toLowerCase():
                    this.ios.selectionMode = 1 /* Single */;
                    break;
                case commonModule.CalendarSelectionMode.Multiple.toLowerCase():
                    this.ios.selectionMode = 2 /* Multiple */;
                    break;
                case commonModule.CalendarSelectionMode.Range.toLowerCase():
                    this.ios.selectionMode = 3 /* Range */;
                    break;
                default:
                    console.log("WARNING: Unsupported selection mode: " + newValue);
            }
        }
    };
    RadCalendar.prototype.onTransitionModeChanged = function (oldValue, newValue) {
        if (newValue) {
            var transitionMode = newValue.toLowerCase();
            var typedPresenter = this.ios.presenter;
            switch (transitionMode) {
                case commonModule.CalendarTransitionMode.None.toLowerCase():
                    typedPresenter.transitionMode = 0 /* None */;
                    break;
                case commonModule.CalendarTransitionMode.Slide.toLowerCase():
                    typedPresenter.transitionMode = 6 /* Scroll */;
                    break;
                case commonModule.CalendarTransitionMode.Stack.toLowerCase():
                    typedPresenter.transitionMode = 4 /* Card */;
                    break;
                case commonModule.CalendarTransitionMode.Flip.toLowerCase():
                    typedPresenter.transitionMode = 1 /* Flip */;
                    break;
                case commonModule.CalendarTransitionMode.Fold.toLowerCase():
                    typedPresenter.transitionMode = 2 /* Fold */;
                    break;
                case commonModule.CalendarTransitionMode.Float.toLowerCase():
                    typedPresenter.transitionMode = 3 /* Float */;
                    break;
                case commonModule.CalendarTransitionMode.Rotate.toLowerCase():
                    typedPresenter.transitionMode = 5 /* Rotate */;
                    break;
                default:
                    console.log("WARNING: Unsupported transitionMode mode: " + newValue);
            }
        }
    };
    RadCalendar.prototype.onViewModeChanged = function (oldValue, newValue) {
        if (newValue) {
            var viewStyle = void 0;
            var modeString = newValue.toLowerCase();
            switch (modeString) {
                case commonModule.CalendarViewMode.Month.toLowerCase():
                    this.ios.viewMode = 1 /* Month */;
                    viewStyle = this.monthViewStyle;
                    break;
                case commonModule.CalendarViewMode.MonthNames.toLowerCase():
                    this.ios.viewMode = 2 /* MonthNames */;
                    viewStyle = this.monthNamesViewStyle;
                    break;
                case commonModule.CalendarViewMode.Week.toLowerCase():
                    this.ios.viewMode = 0 /* Week */;
                    viewStyle = this.weekViewStyle;
                    break;
                case commonModule.CalendarViewMode.Year.toLowerCase():
                    this.ios.viewMode = 3 /* Year */;
                    viewStyle = this.yearViewStyle;
                    break;
                // case commonModule.CalendarViewMode.Flow.toLocaleLowerCase():
                //     this.ios.viewMode = TKCalendarViewMode.TKCalendarViewModeFlow;
                //     break;
                // case commonModule.CalendarViewMode.YearNumbers.toLocaleLowerCase():
                // 	this.ios.viewMode = TKCalendarViewMode.TKCalendarViewModeYearNumbers;
                // 	break;
                default:
                    console.log("WARNING: Unsupported view mode: " + newValue);
            }
            if (viewStyle) {
                viewStyle.updateViewStyles();
            }
        }
    };
    RadCalendar.prototype.onEventsViewModeChanged = function (oldValue, newValue) {
        if (this.ios.viewMode !== 1 /* Month */ || newValue === undefined) {
            return;
        }
        var eventsViewMode = newValue.toLowerCase();
        var typedPresenter = this.ios.presenter;
        switch (eventsViewMode) {
            case commonModule.CalendarEventsViewMode.None.toLowerCase():
                typedPresenter.inlineEventsViewMode = 0 /* None */;
                break;
            case commonModule.CalendarEventsViewMode.Inline.toLowerCase():
                typedPresenter.inlineEventsViewMode = 1 /* Inline */;
                break;
            case commonModule.CalendarEventsViewMode.Popover.toLowerCase():
                typedPresenter.inlineEventsViewMode = 2 /* Popover */;
                console.log("WARNING: Popover mode for events is not supported for iPhone.");
                break;
            default:
                console.log("WARNING: Unsupported events view mode: " + newValue);
        }
    };
    RadCalendar.prototype.onSelectedDateRangeChanged = function (oldValue, newValue) {
        if (this._forbidDateSelection) {
            return;
        }
        if (newValue instanceof commonModule.DateRange) {
            var tkDateRange = TKDateRange.alloc().initWithStartEnd(this.parseDate(newValue.startDate), this.parseDate(newValue.endDate));
            this.ios.selectedDatesRange = tkDateRange;
        }
    };
    RadCalendar.prototype.onSelectedDatesChanged = function (oldValue, newValue) {
        if (this._forbidDateSelection) {
            return;
        }
        var newDates = newValue;
        if (typeof (newDates) === "string") {
            newDates = newDates.split(",");
        }
        var selectedDates = NSMutableArray.new();
        for (var i = 0; i < newDates.length; i++) {
            var date = this.parseDate(newDates[i]);
            selectedDates.addObject(date);
        }
        this.ios.selectedDates = selectedDates;
    };
    RadCalendar.prototype.onSelectedDateChanged = function (oldValue, newValue) {
        if (this._forbidDateSelection) {
            return;
        }
        this.ios.selectedDate = this.parseDate(newValue);
    };
    RadCalendar.prototype.onMaxDateChanged = function (oldValue, newValue) {
        this.ios.maxDate = this.parseDate(newValue);
    };
    RadCalendar.prototype.onMinDateChanged = function (oldValue, newValue) {
        this.ios.minDate = this.parseDate(newValue);
    };
    RadCalendar.prototype.updateEventSource = function () {
        if (!this.ios) {
            return;
        }
        if (this.eventSource) {
            if (!this._dataSource) {
                this._dataSource = CalendarNativeDataSourceImplementation.new().initWithOwner(this);
                this._dataSource.itemsSource = this.eventSource;
                this._ios.dataSource = this._dataSource;
            }
            else {
                this._dataSource.itemsSource = this.eventSource;
                this._ios.presenter.update(false);
            }
        }
    };
    RadCalendar.prototype.onHorizontalTransitionChanged = function (oldValue, newValue) {
        var horizontalTransition = newValue;
        this.ios.presenter['transitionIsVertical'] = !horizontalTransition;
    };
    RadCalendar.prototype.onMonthViewStyleChanged = function (oldValue, newValue) {
        if (newValue && (newValue instanceof CalendarMonthViewStyle)) {
            this.monthViewStyle.owner = this;
        }
    };
    RadCalendar.prototype.onMonthNamesViewStyleChanged = function (oldValue, newValue) {
        if (newValue && (newValue instanceof CalendarMonthNamesViewStyle)) {
            this.monthNamesViewStyle.owner = this;
        }
    };
    RadCalendar.prototype.onWeekViewStyleChanged = function (oldValue, newValue) {
        if (newValue && (newValue instanceof CalendarWeekViewStyle)) {
            this.weekViewStyle.owner = this;
        }
    };
    RadCalendar.prototype.onYearViewStyleChanged = function (oldValue, newValue) {
        if (newValue && (newValue instanceof CalendarYearViewStyle)) {
            this.yearViewStyle.owner = this;
        }
    };
    RadCalendar.prototype.loadNativeDisplayedDate = function () {
        var nativeDate = RadCalendar.dateWithoutHours(this._ios.displayedDate);
        if (this.displayedDate != nativeDate) {
            this.displayedDate = nativeDate;
        }
    };
    RadCalendar.dateWithoutHours = function (originalDate) {
        return new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate());
    };
    RadCalendar.prototype.reload = function () {
        if (this.ios) {
            this.ios.reloadData();
        }
    };
    RadCalendar.prototype.navigateForward = function () {
        this.ios.navigateForward(true);
    };
    RadCalendar.prototype.navigateBack = function () {
        this.ios.navigateBack(true);
    };
    RadCalendar.prototype.goToDate = function (date) {
        this.ios.navigateToDateAnimated(date, true);
    };
    RadCalendar.prototype.getEventsForDate = function (date) {
        var nativeResult = this.ios.eventsForDate(date);
        var result = new Array();
        var a = new interop.Reference();
        var r = new interop.Reference();
        var g = new interop.Reference();
        var b = new interop.Reference();
        var nativeEvent;
        var event;
        for (var i = 0; i < nativeResult.count; i++) {
            nativeEvent = nativeResult.objectAtIndex(i);
            if (nativeEvent.eventColor) {
                nativeEvent.eventColor.getRedGreenBlueAlpha(r, g, b, a);
            }
            var color = nativeEvent.eventColor ? new color_1.Color(Math.round(a.value * 255), Math.round(r.value * 255), Math.round(g.value * 255), Math.round(b.value * 255)) : null;
            event = new CalendarEvent(nativeEvent.title, nativeEvent.startDate, nativeEvent.endDate, nativeEvent.allDay, color);
            result.push(event);
        }
        return result;
    };
    return RadCalendar;
}(commonModule.RadCalendar));
exports.RadCalendar = RadCalendar;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var CalendarNativeDataSourceImplementation = (function (_super) {
    __extends(CalendarNativeDataSourceImplementation, _super);
    function CalendarNativeDataSourceImplementation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarNativeDataSourceImplementation.new = function () {
        return _super.new.call(this);
    };
    CalendarNativeDataSourceImplementation.prototype.initWithSourceAndOwner = function (source, owner) {
        this.itemsSource = source;
        this._owner = owner;
        return this;
    };
    CalendarNativeDataSourceImplementation.prototype.initWithOwner = function (owner) {
        this._owner = owner;
        return this;
    };
    Object.defineProperty(CalendarNativeDataSourceImplementation.prototype, "itemsSource", {
        get: function () {
            return this._itemsSource;
        },
        set: function (value) {
            if (value instanceof observable_array_1.ObservableArray) {
                var list = new Array();
                for (var i = 0; i < value.length; i++) {
                    list.push(value.getItem(i));
                }
                this._itemsSource = list;
            }
            else {
                this._itemsSource = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    CalendarNativeDataSourceImplementation.prototype.calendarEventsForDate = function (calendar, date) {
        var nativeEvents = NSMutableArray.alloc().init();
        for (var event_1 in this.itemsSource) {
            var startDate = this.itemsSource[event_1].startDate;
            var endDate = this.itemsSource[event_1].endDate;
            if (startDate && endDate) {
                if ((startDate.getDate() == date.getDate() && startDate.getMonth() == date.getMonth() && startDate.getFullYear() == date.getFullYear()) ||
                    (startDate.getDate() == date.getDate() && startDate.getMonth() == date.getMonth() && startDate.getFullYear() == date.getFullYear())) {
                    nativeEvents.addObject(this.itemsSource[event_1].ios);
                }
            }
        }
        return nativeEvents;
    };
    CalendarNativeDataSourceImplementation.prototype.calendarEventsFromDateToDateWithCallback = function (calendar, fromDate, toDate, callback) {
        var nativeEvents = NSMutableArray.alloc().init();
        for (var event_2 in this.itemsSource) {
            var startDate = this.itemsSource[event_2].startDate;
            var endDate = this.itemsSource[event_2].endDate;
            // SD - startDate
            // ED - endDate
            // FD - fromDate
            // TD - toDate
            // -----SD----FD--------ED-----------------------------------------TD---------
            if ((startDate.getTime() <= fromDate.getTime() && endDate.getTime() >= fromDate.getTime()) ||
                // -----SD----FD---------------------------------------------------TD--ED-----
                (startDate.getTime() <= fromDate.getTime() && endDate.getTime() >= toDate.getTime()) ||
                // -----------FD--------------------------------------------SD-----TD--ED-----
                (startDate.getTime() <= toDate.getTime() && endDate.getTime() >= toDate.getTime()) ||
                // -----------FD---SD---------------------------------------ED-----TD---------
                (startDate.getTime() >= fromDate.getTime() && endDate.getTime() <= toDate.getTime())) {
                nativeEvents.addObject(this.itemsSource[event_2].ios);
            }
        }
        return nativeEvents;
    };
    CalendarNativeDataSourceImplementation.ObjCProtocols = [TKCalendarDataSource];
    return CalendarNativeDataSourceImplementation;
}(NSObject));
exports.CalendarNativeDataSourceImplementation = CalendarNativeDataSourceImplementation;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var TKCalendarMonthPresenterDelegateImplementation = (function (_super) {
    __extends(TKCalendarMonthPresenterDelegateImplementation, _super);
    function TKCalendarMonthPresenterDelegateImplementation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TKCalendarMonthPresenterDelegateImplementation.initWithOwner = function (owner) {
        var instance = _super.new.call(this);
        instance._owner = owner;
        return instance;
    };
    TKCalendarMonthPresenterDelegateImplementation.prototype.monthPresenterInlineEventSelected = function (presenter, event) {
        var inlineEventData = new CalendarEvent(event.title, event.startDate, event.endDate, event.allDay);
        var args = {
            eventName: commonModule.RadCalendar.inlineEventSelectedEvent,
            object: this._owner.get(),
            eventData: inlineEventData
        };
        this._owner.get().notify(args);
    };
    //called for every inline event cell and we use to set the styling properties if any. 
    TKCalendarMonthPresenterDelegateImplementation.prototype.monthPresenterUpdateVisualsForInlineEventCell = function (presenter, cell) {
        if (this._owner.get().monthViewStyle) {
            var style = this._owner.get().monthViewStyle.inlineEventCellStyle;
            if (style) {
                if (style.cellBackgroundColor) {
                    cell.style.backgroundColor = (new color_1.Color(style.cellBackgroundColor)).ios;
                }
                if (style.eventTextColor) {
                    cell.style.eventColor = (new color_1.Color(style.eventTextColor)).ios;
                }
                if (style.timeTextColor) {
                    cell.style.timeColor = (new color_1.Color(style.timeTextColor)).ios;
                }
                if (style.eventFontName || style.eventFontStyle || style.eventTextSize) {
                    cell.style.eventFont = Tools.createFont(style.eventFontName, style.eventFontStyle, style.eventTextSize);
                }
                if (style.timeTextColor || style.timeFontName || style.timeFontStyle) {
                    cell.style.timeFont = Tools.createFont(style.timeFontName, style.timeFontStyle, style.timeTextSize);
                }
            }
        }
    };
    TKCalendarMonthPresenterDelegateImplementation.ObjCProtocols = [TKCalendarMonthPresenterDelegate];
    return TKCalendarMonthPresenterDelegateImplementation;
}(NSObject));
exports.TKCalendarMonthPresenterDelegateImplementation = TKCalendarMonthPresenterDelegateImplementation;
var TKCalendarNativeDelegateImplementation = (function (_super) {
    __extends(TKCalendarNativeDelegateImplementation, _super);
    function TKCalendarNativeDelegateImplementation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TKCalendarNativeDelegateImplementation.initWithOwner = function (owner) {
        var instance = _super.new.call(this);
        instance._owner = owner;
        return instance;
    };
    TKCalendarNativeDelegateImplementation.prototype.calendarDidChangedViewModeFromTo = function (calendar, previousViewMode, viewMode) {
        var args = {
            eventName: commonModule.RadCalendar.viewModeChangedEvent,
            object: this._owner.get(),
            oldValue: this.getViewModeFromTKCalendarViewMode(previousViewMode),
            newValue: this.getViewModeFromTKCalendarViewMode(viewMode)
        };
        this._owner.get().notify(args);
        //this update will trigger update of UI styles for new view mode        
        if (this._owner.get().viewMode != args.newValue) {
            this._owner.get().viewMode = args.newValue;
        }
    };
    TKCalendarNativeDelegateImplementation.prototype.calendarDidDeselectedDate = function (calendar, date) {
        if (this._owner.get().selectionMode === commonModule.CalendarSelectionMode.Multiple) {
            this._owner.get()._forbidDateSelection = true;
            this._owner.get()._removeSelectedDate(date);
            this._owner.get()._forbidDateSelection = false;
        }
        var args = {
            eventName: commonModule.RadCalendar.dateDeselectedEvent,
            object: this._owner.get(),
            date: date
        };
        this._owner.get().notify(args);
    };
    TKCalendarNativeDelegateImplementation.prototype.calendarDidTapCell = function (calendar, cell) {
        var args = {
            eventName: commonModule.RadCalendar.cellTapEvent,
            object: this._owner.get(),
            cell: cell,
            date: cell.date
        };
        this._owner.get().notify(args);
    };
    // Android currently doesn't supoort this event. will implement on a later stage.
    TKCalendarNativeDelegateImplementation.prototype.calendarShouldSelectDate = function (calendar, date) {
        return true;
    };
    // NOTE: In range selection this method is called once for the end date.
    TKCalendarNativeDelegateImplementation.prototype.calendarDidSelectDate = function (calendar, date) {
        this._owner.get()._forbidDateSelection = true;
        if (!this._owner.get().selectedDate || date.getTime() !== this._owner.get().parseDate(this._owner.get().selectedDate).getTime()) {
            this._owner.get().selectedDate = date;
        }
        if (this._owner.get().selectionMode === commonModule.CalendarSelectionMode.Range) {
            this.handleRangeSelection(date);
        }
        else if (this._owner.get().selectionMode === commonModule.CalendarSelectionMode.Multiple) {
            this._owner.get()._addSelectedDate(date);
        }
        this._owner.get()._forbidDateSelection = false;
        var args = {
            eventName: commonModule.RadCalendar.dateSelectedEvent,
            object: this._owner.get(),
            date: date
        };
        this._owner.get().notify(args);
    };
    TKCalendarNativeDelegateImplementation.prototype.calendarDidNavigateToDate = function (calendar, date) {
        var nativeDate = RadCalendar.dateWithoutHours(date);
        var args = {
            eventName: commonModule.RadCalendar.navigatedToDateEvent,
            object: this._owner.get(),
            date: nativeDate
        };
        if (this._owner.get().displayedDate != args.date) {
            this._owner.get().displayedDate = args.date;
        }
        this._owner.get().notify(args);
    };
    TKCalendarNativeDelegateImplementation.prototype.calendarWillNavigateToDate = function (calendar, date) {
        var nativeDate = RadCalendar.dateWithoutHours(date);
        var args = {
            eventName: commonModule.RadCalendar.navigatingToDateStartedEvent,
            object: this._owner.get(),
            date: nativeDate
        };
        this._owner.get().notify(args);
    };
    TKCalendarNativeDelegateImplementation.prototype.calendarUpdateVisualsForCell = function (calendar, cell) {
        if (this._owner.get() && this._owner.get().viewMode) {
            switch (this._owner.get().viewMode.toLowerCase()) {
                case commonModule.CalendarViewMode.Month.toLowerCase():
                    this.applyMonthViewCellStyles(cell);
                    break;
                case commonModule.CalendarViewMode.Year.toLowerCase():
                    this.applyYearViewCellStyles(cell);
                    break;
                case commonModule.CalendarViewMode.Week.toLowerCase():
                    this.applyWeekViewCellStyles(cell);
                    break;
                case commonModule.CalendarViewMode.MonthNames.toLowerCase():
                    this.applyMonthNamesViewCellStyles(cell);
                    break;
            }
        }
    };
    TKCalendarNativeDelegateImplementation.prototype.applyWeekViewCellStyles = function (cell) {
        if ((this._owner.get().viewMode != commonModule.CalendarViewMode.Week) ||
            (!this._owner.get().weekViewStyle)) {
            return;
        }
        if (cell instanceof TKCalendarDayCell) {
            this.applyDayCellStyleToCell(this._owner.get().weekViewStyle, cell);
        }
        else if (cell instanceof TKCalendarWeekNumberCell) {
            this.applyWeekNumberCellStyleToCell(this._owner.get().weekViewStyle, cell);
        }
        else if (cell instanceof TKCalendarDayNameCell) {
            this.applyDayNameCellStyleToCell(this._owner.get().weekViewStyle, cell);
        }
        else if (cell instanceof TKCalendarTitleCell) {
            this.applyTitleCellStyleToCell(this._owner.get().weekViewStyle, cell);
        }
    };
    TKCalendarNativeDelegateImplementation.prototype.applyYearViewCellStyles = function (cell) {
        if ((this._owner.get().viewMode != commonModule.CalendarViewMode.Year) ||
            (!this._owner.get().yearViewStyle)) {
            return;
        }
        //NOTE: only title cell is styled on delegate call, months use presenter members
        if (cell instanceof TKCalendarTitleCell) {
            this.applyTitleCellStyleToCell(this._owner.get().yearViewStyle, cell);
        }
    };
    TKCalendarNativeDelegateImplementation.prototype.applyMonthNamesViewCellStyles = function (cell) {
        if ((this._owner.get().viewMode != commonModule.CalendarViewMode.MonthNames) ||
            (!this._owner.get().monthNamesViewStyle)) {
            return;
        }
        if (cell instanceof TKCalendarTitleCell) {
            this.applyTitleCellStyleToCell(this._owner.get().monthNamesViewStyle, cell);
        }
        if (cell instanceof TKCalendarMonthNameCell) {
            this.applyMonthNameCellStyleToCell(this._owner.get().monthNamesViewStyle, cell);
        }
    };
    TKCalendarNativeDelegateImplementation.prototype.applyMonthViewCellStyles = function (cell) {
        if ((this._owner.get().viewMode != commonModule.CalendarViewMode.Month) ||
            (!this._owner.get().monthViewStyle)) {
            return;
        }
        if (cell instanceof TKCalendarDayCell) {
            this.applyDayCellStyleToCell(this._owner.get().monthViewStyle, cell);
        }
        else if (cell instanceof TKCalendarWeekNumberCell) {
            this.applyWeekNumberCellStyleToCell(this._owner.get().monthViewStyle, cell);
        }
        else if (cell instanceof TKCalendarDayNameCell) {
            this.applyDayNameCellStyleToCell(this._owner.get().monthViewStyle, cell);
        }
        else if (cell instanceof TKCalendarTitleCell) {
            this.applyTitleCellStyleToCell(this._owner.get().monthViewStyle, cell);
        }
    };
    // Private methods
    TKCalendarNativeDelegateImplementation.prototype.handleRangeSelection = function (date) {
        // selected through xml or code. Notify about start date.
        if (this._owner.get().selectedDateRange && this._owner.get().parseDate(this._owner.get().selectedDateRange.endDate).getTime() === date.getTime()) {
            var args = {
                eventName: commonModule.RadCalendar.dateSelectedEvent,
                object: this._owner.get(),
                date: this._owner.get().parseDate(this._owner.get().selectedDateRange.startDate),
            };
            this._owner.get().notify(args);
            return;
        }
        if (this._rangeSelectionStarted) {
            this._rangeSelectionStarted = false;
            this._owner.get().selectedDateRange = new commonModule.DateRange(this._owner.get().selectedDateRange.startDate, date);
        }
        else {
            this._rangeSelectionStarted = true;
            this._owner.get().selectedDateRange = new commonModule.DateRange(date, date);
        }
    };
    /**
     * Generic method that applies regular day style to cell of given view mode
     */
    TKCalendarNativeDelegateImplementation.prototype.applyDayCellStyleToCell = function (viewModeStyle, cell) {
        if (!viewModeStyle) {
            return;
        }
        if (viewModeStyle instanceof CalendarMonthViewStyle && (cell.state & 16 /* Selected */) !== 0) {
            var typedStyle = viewModeStyle;
            var shapeSize = utils.layout.toDevicePixels(viewModeStyle.selectionShapeSize);
            switch (typedStyle.selectionShape.toLowerCase()) {
                case commonModule.SelectionShape.Round.toLowerCase():
                    cell.style().shape = TKPredefinedShape.shapeWithTypeAndSize(2 /* Circle */, new CGSize({ width: shapeSize, height: shapeSize }));
                    break;
                case commonModule.SelectionShape.Square.toLowerCase():
                    cell.style().shape = TKPredefinedShape.shapeWithTypeAndSize(1 /* Square */, new CGSize({ width: shapeSize, height: shapeSize }));
                    break;
                case commonModule.SelectionShape.None.toLowerCase():
                    cell.style().shape = TKPredefinedShape.shapeWithTypeAndSize(0 /* None */, new CGSize({ width: shapeSize, height: shapeSize }));
                    break;
            }
            if (typedStyle.selectionShapeColor) {
                cell.style().shapeFill = new TKSolidFill(new color_1.Color(typedStyle.selectionShapeColor).ios);
            }
        }
        //styles applied by priority: selected, weekend, today, regular day
        var dayCellStyle = null;
        if (viewModeStyle.selectedDayCellStyle &&
            (cell.state & 16 /* Selected */ || cell.state & 128 /* MidInSelection */ ||
                cell.state & 32 /* FirstInSelection */ || cell.state & 64 /* LastInSelection */)) {
            dayCellStyle = viewModeStyle.selectedDayCellStyle;
        }
        else if (cell.state & 2 /* Weekend */ && viewModeStyle.weekendCellStyle) {
            dayCellStyle = viewModeStyle.weekendCellStyle;
        }
        else if (cell.state & 1 /* Today */ && viewModeStyle.todayCellStyle) {
            dayCellStyle = viewModeStyle.todayCellStyle;
        }
        else {
            dayCellStyle = viewModeStyle.dayCellStyle;
        }
        if (!dayCellStyle) {
            //apply default theme style if there is not any style set
            dayCellStyle = new DayCellStyle();
            this.applyCommonCellStyleProperties(cell, dayCellStyle);
            return;
        }
        this.applyCommonCellStyleProperties(cell, dayCellStyle);
        //apply day specific properties
        if (dayCellStyle instanceof DayCellStyle) {
            cell.style().displayEventsAsText = dayCellStyle.ios.displayEventsAsText;
            cell.style().eventInsets = dayCellStyle.ios.eventInsets;
            cell.style().eventTextColor = dayCellStyle.ios.eventTextColor;
            cell.style().eventFont = dayCellStyle.ios.eventFont;
        }
    };
    TKCalendarNativeDelegateImplementation.prototype.applyTitleCellStyleToCell = function (viewModeStyle, cell) {
        if (!viewModeStyle || !viewModeStyle.titleCellStyle) {
            return;
        }
        this.applyCommonCellStyleProperties(cell, viewModeStyle.titleCellStyle);
    };
    TKCalendarNativeDelegateImplementation.prototype.applyDayNameCellStyleToCell = function (viewModeStyle, cell) {
        if (!viewModeStyle || !viewModeStyle.dayNameCellStyle) {
            return;
        }
        this.applyCommonCellStyleProperties(cell, viewModeStyle.dayNameCellStyle);
    };
    TKCalendarNativeDelegateImplementation.prototype.applyMonthNameCellStyleToCell = function (viewModeStyle, cell) {
        if (!viewModeStyle || !viewModeStyle.monthNameCellStyle) {
            return;
        }
        this.applyCommonCellStyleProperties(cell, viewModeStyle.monthNameCellStyle);
    };
    TKCalendarNativeDelegateImplementation.prototype.applyWeekNumberCellStyleToCell = function (viewModeStyle, cell) {
        if (!viewModeStyle || !viewModeStyle.weekNumberCellStyle) {
            return;
        }
        this.applyCommonCellStyleProperties(cell, viewModeStyle.weekNumberCellStyle);
    };
    TKCalendarNativeDelegateImplementation.prototype.applyCommonCellStyleProperties = function (cell, cellStyle) {
        if (cell && cellStyle) {
            cell.style().backgroundColor = cellStyle.ios.backgroundColor;
            cell.style().topBorderColor = cellStyle.ios.topBorderColor;
            cell.style().topBorderWidth = cellStyle.ios.topBorderWidth;
            cell.style().bottomBorderWidth = cellStyle.ios.bottomBorderWidth;
            cell.style().bottomBorderColor = cellStyle.ios.bottomBorderColor;
            cell.style().leftBorderColor = cellStyle.ios.leftBorderColor;
            cell.style().leftBorderWidth = cellStyle.ios.leftBorderWidth;
            cell.style().rightBorderWidth = cellStyle.ios.rightBorderWidth;
            cell.style().rightBorderColor = cellStyle.ios.rightBorderColor;
            cell.style().textColor = cellStyle.ios.textColor;
            cell.style().textFont = cellStyle.ios.textFont;
            cell.style().textInsets = cellStyle.ios.textInsets;
            cell.style().textAlignment = cellStyle.ios.textAlignment;
        }
    };
    TKCalendarNativeDelegateImplementation.prototype.getViewModeFromTKCalendarViewMode = function (viewMode) {
        switch (viewMode) {
            // case TKCalendarViewMode.TKCalendarViewModeFlow: return  commonModule.CalendarViewMode.Flow;
            // case TKCalendarViewMode.TKCalendarViewModeYearNumbers: return = commonModule.CalendarViewMode.YearNumbers;
            case 1 /* Month */:
                return commonModule.CalendarViewMode.Month;
            case 2 /* MonthNames */:
                return commonModule.CalendarViewMode.MonthNames;
            case 0 /* Week */:
                return commonModule.CalendarViewMode.Week;
            case 3 /* Year */:
                return commonModule.CalendarViewMode.Year;
        }
    };
    TKCalendarNativeDelegateImplementation.ObjCProtocols = [TKCalendarDelegate];
    return TKCalendarNativeDelegateImplementation;
}(NSObject));
exports.TKCalendarNativeDelegateImplementation = TKCalendarNativeDelegateImplementation;
