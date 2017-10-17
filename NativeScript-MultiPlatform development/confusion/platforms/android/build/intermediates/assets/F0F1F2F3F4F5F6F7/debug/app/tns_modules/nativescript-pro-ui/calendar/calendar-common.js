Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("tns-core-modules/ui/core/view");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var observable_1 = require("tns-core-modules/data/observable");
var weakEvents = require("tns-core-modules/ui/core/weak-event-listener");
var CalendarViewMode;
(function (CalendarViewMode) {
    CalendarViewMode.Week = "Week";
    CalendarViewMode.Month = "Month";
    CalendarViewMode.MonthNames = "MonthNames";
    CalendarViewMode.Year = "Year";
    //    export var YearNumbers = "YearNumbers";
    //    export var Flow = "Flow";
})(CalendarViewMode = exports.CalendarViewMode || (exports.CalendarViewMode = {}));
var SelectionShape;
(function (SelectionShape) {
    SelectionShape.Round = "Round";
    SelectionShape.Square = "Square";
    SelectionShape.None = "None";
})(SelectionShape = exports.SelectionShape || (exports.SelectionShape = {}));
var CalendarEventsViewMode;
(function (CalendarEventsViewMode) {
    CalendarEventsViewMode.None = "None";
    CalendarEventsViewMode.Inline = "Inline";
    CalendarEventsViewMode.Popover = "Popover";
})(CalendarEventsViewMode = exports.CalendarEventsViewMode || (exports.CalendarEventsViewMode = {}));
var CalendarSelectionMode;
(function (CalendarSelectionMode) {
    CalendarSelectionMode.None = "None";
    CalendarSelectionMode.Single = "Single";
    CalendarSelectionMode.Multiple = "Multiple";
    CalendarSelectionMode.Range = "Range";
})(CalendarSelectionMode = exports.CalendarSelectionMode || (exports.CalendarSelectionMode = {}));
var CalendarTransitionMode;
(function (CalendarTransitionMode) {
    CalendarTransitionMode.None = "None";
    CalendarTransitionMode.Slide = "Slide";
    CalendarTransitionMode.Stack = "Stack";
    CalendarTransitionMode.Flip = "Flip";
    CalendarTransitionMode.Fold = "Fold";
    CalendarTransitionMode.Float = "Float";
    CalendarTransitionMode.Rotate = "Rotate";
    CalendarTransitionMode.Plain = "Plain";
    CalendarTransitionMode.Free = "Free";
    CalendarTransitionMode.Combo = "Combo";
    CalendarTransitionMode.Overlap = "Overlap";
})(CalendarTransitionMode = exports.CalendarTransitionMode || (exports.CalendarTransitionMode = {}));
/**
 * Font styles
 */
var FontStyles;
(function (FontStyles) {
    /**
    * Regular font style
    */
    FontStyles.Normal = "Normal";
    /**
    * Bold font style
    */
    FontStyles.Bold = "Bold";
    /**
     * Italic font style
     */
    FontStyles.Italic = "Italic";
    /**
     * Combine Bold and Italic styles
     */
    FontStyles.BoldItalic = "BoldItalic";
})(FontStyles = exports.FontStyles || (exports.FontStyles = {}));
/**
* Defines the alignment options for cells in Calendar component.
*/
var CalendarCellAlignment;
(function (CalendarCellAlignment) {
    /**
     The cell content is aligned to left.
     */
    CalendarCellAlignment.Left = "Left";
    /**
     The cell content is aligned to right.
     */
    CalendarCellAlignment.Right = "Right";
    /**
     The cell content is aligned to top.
     */
    CalendarCellAlignment.Top = "Top";
    /**
     The cell content is aligned to bottom.
     */
    CalendarCellAlignment.Bottom = "Bottom";
    /**
     The cell content is aligned horizontally.
     */
    CalendarCellAlignment.HorizontalCenter = "HorizontalCenter";
    /**
     The cell content is aligned vertically.
     */
    CalendarCellAlignment.VerticalCenter = "VerticalCenter";
})(CalendarCellAlignment = exports.CalendarCellAlignment || (exports.CalendarCellAlignment = {}));
;
var DateRange = (function () {
    //constructor();
    function DateRange(startDate, endDate) {
        this._startDate = startDate;
        this._endDate = endDate;
        this.normalize();
    }
    Object.defineProperty(DateRange.prototype, "startDate", {
        get: function () {
            return this._startDate;
        },
        set: function (value) {
            this._startDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateRange.prototype, "endDate", {
        get: function () {
            return this._endDate;
        },
        set: function (value) {
            this._endDate = value;
        },
        enumerable: true,
        configurable: true
    });
    DateRange.prototype.normalize = function () {
        var comparisonStartDate = this._startDate;
        if (!(comparisonStartDate instanceof Date)) {
            comparisonStartDate = new Date(this._startDate);
        }
        var comparisonEndDate = this._endDate;
        if (!(comparisonEndDate instanceof Date)) {
            comparisonEndDate = new Date(this._endDate);
        }
        if (comparisonEndDate < comparisonStartDate) {
            var temp = this._endDate;
            this._endDate = this._startDate;
            this._startDate = temp;
        }
    };
    return DateRange;
}());
exports.DateRange = DateRange;
var CalendarEvent = (function () {
    function CalendarEvent(title, startDate, endDate, isAllDay, eventColor) {
        this.title = title;
        this.endDate = endDate;
        this.startDate = startDate;
        if (isAllDay) {
            this.isAllDay = isAllDay;
        }
        if (eventColor) {
            this.eventColor = eventColor;
        }
    }
    Object.defineProperty(CalendarEvent.prototype, "android", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "ios", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "title", {
        get: function () {
            return this._getTitle();
        },
        set: function (value) {
            this._setTitle(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "startDate", {
        get: function () {
            return this._getStartDate();
        },
        set: function (value) {
            this._setStartDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "endDate", {
        get: function () {
            return this._getEndDate();
        },
        set: function (value) {
            this._setEndDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "isAllDay", {
        get: function () {
            return this._getIsAllDay();
        },
        set: function (value) {
            this._setIsAllDay(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "eventColor", {
        get: function () {
            return this._getEventColor();
        },
        set: function (value) {
            this._setEventColor(value);
        },
        enumerable: true,
        configurable: true
    });
    CalendarEvent.prototype._setIsAllDay = function (value) { };
    CalendarEvent.prototype._getIsAllDay = function () {
        return false;
    };
    CalendarEvent.prototype._setEndDate = function (date) { };
    CalendarEvent.prototype._getEndDate = function () {
        return undefined;
    };
    CalendarEvent.prototype._setStartDate = function (date) { };
    CalendarEvent.prototype._getStartDate = function () {
        return undefined;
    };
    CalendarEvent.prototype._setTitle = function (value) { };
    CalendarEvent.prototype._getTitle = function () {
        return undefined;
    };
    CalendarEvent.prototype._setEventColor = function (value) { };
    CalendarEvent.prototype._getEventColor = function () {
        return undefined;
    };
    return CalendarEvent;
}());
exports.CalendarEvent = CalendarEvent;
//////////////////////////////////////////////////////////////////////////////////////////
// <EventDataDefinitions>
var CalendarViewModeChangedEventData = (function () {
    function CalendarViewModeChangedEventData() {
    }
    return CalendarViewModeChangedEventData;
}());
exports.CalendarViewModeChangedEventData = CalendarViewModeChangedEventData;
var CalendarCellTapEventData = (function () {
    function CalendarCellTapEventData() {
    }
    return CalendarCellTapEventData;
}());
exports.CalendarCellTapEventData = CalendarCellTapEventData;
var CalendarSelectionEventData = (function () {
    function CalendarSelectionEventData() {
    }
    return CalendarSelectionEventData;
}());
exports.CalendarSelectionEventData = CalendarSelectionEventData;
var CalendarInlineEventSelectedData = (function () {
    function CalendarInlineEventSelectedData() {
    }
    return CalendarInlineEventSelectedData;
}());
exports.CalendarInlineEventSelectedData = CalendarInlineEventSelectedData;
var CalendarNavigationEventData = (function () {
    function CalendarNavigationEventData() {
    }
    return CalendarNavigationEventData;
}());
exports.CalendarNavigationEventData = CalendarNavigationEventData;
var CalendarMonthViewStyle = (function (_super) {
    __extends(CalendarMonthViewStyle, _super);
    function CalendarMonthViewStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarMonthViewStyle.prototype.updateViewStyles = function (forceUpdate) {
    };
    CalendarMonthViewStyle.prototype.onSelectionShapePropertyChanged = function (oldValue, newValue) {
        this.onSelectionShapeChanged(oldValue, newValue);
    };
    CalendarMonthViewStyle.prototype.onSelectionShapeChanged = function (oldValue, newValue) { };
    CalendarMonthViewStyle.prototype.onSelectionShapeSizePropertyChanged = function (oldValue, newValue) {
        this.onSelectionShapeSizeChanged(oldValue, newValue);
    };
    CalendarMonthViewStyle.prototype.onSelectionShapeSizeChanged = function (oldValue, newValue) { };
    CalendarMonthViewStyle.prototype.onSelectionShapeColorPropertyChanged = function (oldValue, newValue) {
        this.onSelectionShapeColorChanged(oldValue, newValue);
    };
    CalendarMonthViewStyle.prototype.onSelectionShapeColorChanged = function (oldValue, newValue) { };
    CalendarMonthViewStyle.prototype.onShowWeekNumbersPropertyChanged = function (oldValue, newValue) {
        this.onShowWeekNumbersChanged(oldValue, newValue);
    };
    CalendarMonthViewStyle.prototype.onShowWeekNumbersChanged = function (oldValue, newValue) { };
    CalendarMonthViewStyle.prototype.onShowTitlePropertyChanged = function (oldValue, newValue) {
        this.onShowTitleChanged(oldValue, newValue);
    };
    CalendarMonthViewStyle.prototype.onShowTitleChanged = function (oldValue, newValue) { };
    CalendarMonthViewStyle.prototype.onShowDayNamesPropertyChanged = function (oldValue, newValue) {
        this.onShowDayNamesChanged(oldValue, newValue);
    };
    CalendarMonthViewStyle.prototype.onShowDayNamesChanged = function (oldValue, newValue) { };
    CalendarMonthViewStyle.prototype.onCellBackgroundColorPropertyChanged = function (oldValue, newValue) {
        this.onBackgroundColorChanged(oldValue, newValue);
    };
    CalendarMonthViewStyle.prototype.onBackgroundColorChanged = function (oldValue, newValue) { };
    CalendarMonthViewStyle.prototype.onDayCellStylePropertyChanged = function (oldValue, newValue) {
        this.onDayCellStyleChanged(oldValue, newValue);
    };
    CalendarMonthViewStyle.prototype.onDayCellStyleChanged = function (oldValue, newValue) { };
    ;
    CalendarMonthViewStyle.prototype.onSelectedDayCellStylePropertyChanged = function (oldValue, newValue) {
        this.onSelectedDayCellStyleChanged(oldValue, newValue);
    };
    CalendarMonthViewStyle.prototype.onSelectedDayCellStyleChanged = function (oldValue, newValue) { };
    ;
    CalendarMonthViewStyle.prototype.onTodayCellStylePropertyChanged = function (oldValue, newValue) {
        this.onTodayCellStyleChanged(oldValue, newValue);
    };
    CalendarMonthViewStyle.prototype.onTodayCellStyleChanged = function (oldValue, newValue) { };
    ;
    CalendarMonthViewStyle.prototype.onDayNameCellStylePropertyChanged = function (oldValue, newValue) {
        this.onDayNameCellStyleChanged(oldValue, newValue);
    };
    CalendarMonthViewStyle.prototype.onDayNameCellStyleChanged = function (oldValue, newValue) { };
    ;
    CalendarMonthViewStyle.prototype.onWeekNumberCellStylePropertyChanged = function (oldValue, newValue) {
        this.onWeekNumberCellStyleChanged(oldValue, newValue);
    };
    CalendarMonthViewStyle.prototype.onWeekNumberCellStyleChanged = function (oldValue, newValue) { };
    ;
    CalendarMonthViewStyle.prototype.onWeekendCellStylePropertyChanged = function (oldValue, newValue) {
        this.onWeekendCellStyleChanged(oldValue, newValue);
    };
    CalendarMonthViewStyle.prototype.onWeekendCellStyleChanged = function (oldValue, newValue) { };
    ;
    CalendarMonthViewStyle.prototype.onTitleCellStylePropertyChanged = function (oldValue, newValue) {
        this.onTitleCellStyleChanged(oldValue, newValue);
    };
    CalendarMonthViewStyle.prototype.onTitleCellStyleChanged = function (oldValue, newValue) { };
    ;
    CalendarMonthViewStyle.prototype.onInlineEventCellStylePropertyChanged = function (oldValue, newValue) {
        this.onInlineEventCellStyleChanged(oldValue, newValue);
    };
    CalendarMonthViewStyle.prototype.onInlineEventCellStyleChanged = function (oldValue, newValue) { };
    ;
    CalendarMonthViewStyle.showWeekNumbersProperty = new view_1.Property({
        name: "showWeekNumbers",
        defaultValue: undefined,
        valueConverter: view_1.booleanConverter,
        valueChanged: function (target, oldValue, newValue) {
            target.onShowWeekNumbersPropertyChanged(oldValue, newValue);
        },
    });
    CalendarMonthViewStyle.selectionShapeProperty = new view_1.Property({
        name: "selectionShape",
        defaultValue: SelectionShape.None,
        valueChanged: function (target, oldValue, newValue) {
            target.onSelectionShapePropertyChanged(oldValue, newValue);
        },
    });
    CalendarMonthViewStyle.selectionShapeSizeProperty = new view_1.Property({
        name: "selectionShapeSize",
        defaultValue: 15,
        valueConverter: parseFloat,
        valueChanged: function (target, oldValue, newValue) {
            target.onSelectionShapeSizePropertyChanged(oldValue, newValue);
        },
    });
    CalendarMonthViewStyle.selectionShapeColorProperty = new view_1.Property({
        name: "selectionShapeColor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onSelectionShapeColorPropertyChanged(oldValue, newValue);
        },
    });
    CalendarMonthViewStyle.showTitleProperty = new view_1.Property({
        name: "showTitle",
        defaultValue: undefined,
        valueConverter: view_1.booleanConverter,
        valueChanged: function (target, oldValue, newValue) {
            target.onShowTitlePropertyChanged(oldValue, newValue);
        },
    });
    CalendarMonthViewStyle.showDayNamesProperty = new view_1.Property({
        name: "showDayNames",
        defaultValue: undefined,
        valueConverter: view_1.booleanConverter,
        valueChanged: function (target, oldValue, newValue) {
            target.onShowDayNamesPropertyChanged(oldValue, newValue);
        },
    });
    CalendarMonthViewStyle.backgroundColorProperty = new view_1.Property({
        name: "backgroundColor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onCellBackgroundColorPropertyChanged(oldValue, newValue);
        },
    });
    CalendarMonthViewStyle.dayCellStyleProperty = new view_1.Property({
        name: "dayCellStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onDayCellStylePropertyChanged(oldValue, newValue);
        },
    });
    CalendarMonthViewStyle.selectedDayCellStyleProperty = new view_1.Property({
        name: "selectedDayCellStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onSelectedDayCellStylePropertyChanged(oldValue, newValue);
        },
    });
    CalendarMonthViewStyle.todayCellStyleProperty = new view_1.Property({
        name: "todayCellStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onTodayCellStylePropertyChanged(oldValue, newValue);
        },
    });
    CalendarMonthViewStyle.dayNameCellStyleProperty = new view_1.Property({
        name: "dayNameCellStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onDayNameCellStylePropertyChanged(oldValue, newValue);
        },
    });
    CalendarMonthViewStyle.weekNumberCellStyleProperty = new view_1.Property({
        name: "weekNumberCellStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onWeekNumberCellStylePropertyChanged(oldValue, newValue);
        },
    });
    CalendarMonthViewStyle.weekendCellStyleProperty = new view_1.Property({
        name: "weekendCellStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onWeekendCellStylePropertyChanged(oldValue, newValue);
        },
    });
    CalendarMonthViewStyle.titleCellStyleProperty = new view_1.Property({
        name: "titleCellStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onTitleCellStylePropertyChanged(oldValue, newValue);
        },
    });
    CalendarMonthViewStyle.inlineEventCellStyleProperty = new view_1.Property({
        name: "inlineEventCellStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onInlineEventCellStylePropertyChanged(oldValue, newValue);
        },
    });
    return CalendarMonthViewStyle;
}(view_1.ViewBase));
exports.CalendarMonthViewStyle = CalendarMonthViewStyle;
CalendarMonthViewStyle.showWeekNumbersProperty.register(CalendarMonthViewStyle);
CalendarMonthViewStyle.selectionShapeProperty.register(CalendarMonthViewStyle);
CalendarMonthViewStyle.selectionShapeSizeProperty.register(CalendarMonthViewStyle);
CalendarMonthViewStyle.selectionShapeColorProperty.register(CalendarMonthViewStyle);
CalendarMonthViewStyle.showTitleProperty.register(CalendarMonthViewStyle);
CalendarMonthViewStyle.showDayNamesProperty.register(CalendarMonthViewStyle);
CalendarMonthViewStyle.backgroundColorProperty.register(CalendarMonthViewStyle);
CalendarMonthViewStyle.dayCellStyleProperty.register(CalendarMonthViewStyle);
CalendarMonthViewStyle.selectedDayCellStyleProperty.register(CalendarMonthViewStyle);
CalendarMonthViewStyle.todayCellStyleProperty.register(CalendarMonthViewStyle);
CalendarMonthViewStyle.dayNameCellStyleProperty.register(CalendarMonthViewStyle);
CalendarMonthViewStyle.weekNumberCellStyleProperty.register(CalendarMonthViewStyle);
CalendarMonthViewStyle.weekendCellStyleProperty.register(CalendarMonthViewStyle);
CalendarMonthViewStyle.titleCellStyleProperty.register(CalendarMonthViewStyle);
CalendarMonthViewStyle.inlineEventCellStyleProperty.register(CalendarMonthViewStyle);
//////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style class for Week view mode
 */
var CalendarWeekViewStyle = (function (_super) {
    __extends(CalendarWeekViewStyle, _super);
    function CalendarWeekViewStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CalendarWeekViewStyle;
}(CalendarMonthViewStyle));
exports.CalendarWeekViewStyle = CalendarWeekViewStyle;
//////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style class for Year view mode
 */
var CalendarYearViewStyle = (function (_super) {
    __extends(CalendarYearViewStyle, _super);
    function CalendarYearViewStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarYearViewStyle.prototype.onTitleCellStylePropertyChanged = function (oldValue, newValue) {
        this.onTitleCellStyleChanged(oldValue, newValue);
    };
    CalendarYearViewStyle.prototype.onTitleCellStyleChanged = function (oldValue, newValue) {
    };
    ;
    CalendarYearViewStyle.prototype.onMonthCellStylePropertyChanged = function (oldValue, newValue) {
        this.onMonthCellStyleChanged(oldValue, newValue);
    };
    CalendarYearViewStyle.prototype.onMonthCellStyleChanged = function (oldValue, newValue) {
    };
    ;
    CalendarYearViewStyle.titleCellStyleProperty = new view_1.Property({
        name: "titleCellStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onTitleCellStylePropertyChanged(oldValue, newValue);
        },
    });
    CalendarYearViewStyle.monthCellStyleProperty = new view_1.Property({
        name: "monthCellStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onMonthCellStylePropertyChanged(oldValue, newValue);
        },
    });
    return CalendarYearViewStyle;
}(view_1.ViewBase));
exports.CalendarYearViewStyle = CalendarYearViewStyle;
CalendarYearViewStyle.titleCellStyleProperty.register(CalendarYearViewStyle);
CalendarYearViewStyle.monthCellStyleProperty.register(CalendarYearViewStyle);
//////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style class for year view with month names only view mode
 */
var CalendarMonthNamesViewStyle = (function (_super) {
    __extends(CalendarMonthNamesViewStyle, _super);
    function CalendarMonthNamesViewStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarMonthNamesViewStyle.prototype.onTitleCellStylePropertyChanged = function (oldValue, newValue) {
        this.onTitleCellStyleChanged(oldValue, newValue);
    };
    CalendarMonthNamesViewStyle.prototype.onTitleCellStyleChanged = function (oldValue, newValue) {
    };
    ;
    CalendarMonthNamesViewStyle.prototype.onMonthNameCellStylePropertyChanged = function (oldValue, newValue) {
        this.onMonthNameCellStyleChanged(oldValue, newValue);
    };
    CalendarMonthNamesViewStyle.prototype.onMonthNameCellStyleChanged = function (oldValue, newValue) {
    };
    ;
    CalendarMonthNamesViewStyle.titleCellStyleProperty = new view_1.Property({
        name: "titleCellStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onTitleCellStylePropertyChanged(oldValue, newValue);
        },
    });
    CalendarMonthNamesViewStyle.monthNameCellStyleProperty = new view_1.Property({
        name: "monthNameCellStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onMonthNameCellStylePropertyChanged(oldValue, newValue);
        },
    });
    return CalendarMonthNamesViewStyle;
}(view_1.ViewBase));
exports.CalendarMonthNamesViewStyle = CalendarMonthNamesViewStyle;
CalendarMonthNamesViewStyle.titleCellStyleProperty.register(CalendarMonthNamesViewStyle);
CalendarMonthNamesViewStyle.monthNameCellStyleProperty.register(CalendarMonthNamesViewStyle);
/**
 * The style class with customization properties for months in year view
 * Note: this class is not inherited from CellStyle
 */
var MonthCellStyle = (function (_super) {
    __extends(MonthCellStyle, _super);
    function MonthCellStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonthCellStyle.prototype.onWeekendТextColorPropertyChanged = function (oldValue, newValue) {
        this.onWeekendTextColorChanged(oldValue, newValue);
    };
    MonthCellStyle.prototype.onWeekendTextColorChanged = function (oldValue, newValue) {
    };
    MonthCellStyle.prototype.onTodayТextColorPropertyChanged = function (oldValue, newValue) {
        this.onTodayTextColorChanged(oldValue, newValue);
    };
    MonthCellStyle.prototype.onTodayTextColorChanged = function (oldValue, newValue) {
    };
    MonthCellStyle.prototype.onDayТextColorPropertyChanged = function (oldValue, newValue) {
        this.onDayTextColorChanged(oldValue, newValue);
    };
    MonthCellStyle.prototype.onDayTextColorChanged = function (oldValue, newValue) {
    };
    MonthCellStyle.prototype.onDayFontNamePropertyChanged = function (oldValue, newValue) {
        this.onDayFontNameChanged(oldValue, newValue);
    };
    MonthCellStyle.prototype.onDayFontNameChanged = function (oldValue, newValue) {
    };
    MonthCellStyle.prototype.onDayFontStylePropertyChanged = function (oldValue, newValue) {
        this.onDayFontStyleChanged(oldValue, newValue);
    };
    MonthCellStyle.prototype.onDayFontStyleChanged = function (oldValue, newValue) {
    };
    MonthCellStyle.prototype.onDayTextSizePropertyChanged = function (oldValue, newValue) {
        this.onDayTextSizeChanged(oldValue, newValue);
    };
    MonthCellStyle.prototype.onDayTextSizeChanged = function (oldValue, newValue) {
    };
    MonthCellStyle.prototype.onDayNameТextColorPropertyChanged = function (oldValue, newValue) {
        this.onDayNameTextColorChanged(oldValue, newValue);
    };
    MonthCellStyle.prototype.onDayNameTextColorChanged = function (oldValue, newValue) {
    };
    MonthCellStyle.prototype.onDayNameFontNamePropertyChanged = function (oldValue, newValue) {
        this.onDayNameFontNameChanged(oldValue, newValue);
    };
    MonthCellStyle.prototype.onDayNameFontNameChanged = function (oldValue, newValue) {
    };
    MonthCellStyle.prototype.onDayNameFontStylePropertyChanged = function (oldValue, newValue) {
        this.onDayNameFontStyleChanged(oldValue, newValue);
    };
    MonthCellStyle.prototype.onDayNameFontStyleChanged = function (oldValue, newValue) {
    };
    MonthCellStyle.prototype.onDayNameTextSizePropertyChanged = function (oldValue, newValue) {
        this.onDayNameTextSizeChanged(oldValue, newValue);
    };
    MonthCellStyle.prototype.onDayNameTextSizeChanged = function (oldValue, newValue) {
    };
    MonthCellStyle.prototype.onMonthNameТextColorPropertyChanged = function (oldValue, newValue) {
        this.onMonthNameTextColorChanged(oldValue, newValue);
    };
    MonthCellStyle.prototype.onMonthNameTextColorChanged = function (oldValue, newValue) {
    };
    MonthCellStyle.prototype.onMonthNameFontNamePropertyChanged = function (oldValue, newValue) {
        this.onMonthNameFontNameChanged(oldValue, newValue);
    };
    MonthCellStyle.prototype.onMonthNameFontNameChanged = function (oldValue, newValue) {
    };
    MonthCellStyle.prototype.onMonthNameFontStylePropertyChanged = function (oldValue, newValue) {
        this.onMonthNameFontStyleChanged(oldValue, newValue);
    };
    MonthCellStyle.prototype.onMonthNameFontStyleChanged = function (oldValue, newValue) {
    };
    MonthCellStyle.prototype.onMonthNameTextSizePropertyChanged = function (oldValue, newValue) {
        this.onMonthNameTextSizeChanged(oldValue, newValue);
    };
    MonthCellStyle.prototype.onMonthNameTextSizeChanged = function (oldValue, newValue) {
    };
    MonthCellStyle.weekendTextColorProperty = new view_1.Property({
        name: "weekendTextColor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onWeekendТextColorPropertyChanged(oldValue, newValue);
        },
    });
    MonthCellStyle.todayTextColorProperty = new view_1.Property({
        name: "todayTextColor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onTodayТextColorPropertyChanged(oldValue, newValue);
        },
    });
    MonthCellStyle.dayTextColorProperty = new view_1.Property({
        name: "dayTextColor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onDayТextColorPropertyChanged(oldValue, newValue);
        },
    });
    MonthCellStyle.dayFontNameProperty = new view_1.Property({
        name: "dayFontName",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onDayFontNamePropertyChanged(oldValue, newValue);
        },
    });
    MonthCellStyle.dayFontStyleProperty = new view_1.Property({
        name: "dayFontStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onDayFontStylePropertyChanged(oldValue, newValue);
        },
    });
    MonthCellStyle.dayTextSizeProperty = new view_1.Property({
        name: "dayTextSize",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onDayTextSizePropertyChanged(oldValue, newValue);
        },
    });
    // Day name properties    
    MonthCellStyle.dayNameTextColorProperty = new view_1.Property({
        name: "dayNameTextColor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onDayNameТextColorPropertyChanged(oldValue, newValue);
        },
    });
    MonthCellStyle.dayNameFontNameProperty = new view_1.Property({
        name: "dayNameFontName",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onDayNameFontNamePropertyChanged(oldValue, newValue);
        },
    });
    MonthCellStyle.dayNameFontStyleProperty = new view_1.Property({
        name: "dayNameFontStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onDayNameFontStylePropertyChanged(oldValue, newValue);
        },
    });
    MonthCellStyle.dayNameTextSizeProperty = new view_1.Property({
        name: "dayNameTextSize",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onDayNameTextSizePropertyChanged(oldValue, newValue);
        },
    });
    /// Month name properties    
    MonthCellStyle.monthNameTextColorProperty = new view_1.Property({
        name: "monthNameTextColor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onMonthNameТextColorPropertyChanged(oldValue, newValue);
        },
    });
    MonthCellStyle.monthNameFontNameProperty = new view_1.Property({
        name: "monthNameFontName",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onMonthNameFontNamePropertyChanged(oldValue, newValue);
        },
    });
    MonthCellStyle.monthNameFontStyleProperty = new view_1.Property({
        name: "monthNameFontStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onMonthNameFontStylePropertyChanged(oldValue, newValue);
        },
    });
    MonthCellStyle.monthNameTextSizeProperty = new view_1.Property({
        name: "monthNameTextSize",
        defaultValue: undefined,
        valueConverter: parseFloat,
        valueChanged: function (target, oldValue, newValue) {
            target.onMonthNameTextSizePropertyChanged(oldValue, newValue);
        },
    });
    return MonthCellStyle;
}(view_1.ViewBase));
exports.MonthCellStyle = MonthCellStyle;
MonthCellStyle.weekendTextColorProperty.register(MonthCellStyle);
MonthCellStyle.todayTextColorProperty.register(MonthCellStyle);
MonthCellStyle.dayTextColorProperty.register(MonthCellStyle);
MonthCellStyle.dayFontNameProperty.register(MonthCellStyle);
MonthCellStyle.dayFontStyleProperty.register(MonthCellStyle);
MonthCellStyle.dayTextSizeProperty.register(MonthCellStyle);
MonthCellStyle.dayNameTextColorProperty.register(MonthCellStyle);
MonthCellStyle.dayNameFontNameProperty.register(MonthCellStyle);
MonthCellStyle.dayNameFontStyleProperty.register(MonthCellStyle);
MonthCellStyle.dayNameTextSizeProperty.register(MonthCellStyle);
MonthCellStyle.monthNameTextColorProperty.register(MonthCellStyle);
MonthCellStyle.monthNameFontNameProperty.register(MonthCellStyle);
MonthCellStyle.monthNameFontStyleProperty.register(MonthCellStyle);
MonthCellStyle.monthNameTextSizeProperty.register(MonthCellStyle);
//////////////////////////////////////////////// 
/// Cell styles
// properties left to implement but available only in iOS :  shapeStroke , shapeFill, shape 
var CellStyle = (function (_super) {
    __extends(CellStyle, _super);
    function CellStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CellStyle.prototype, "ios", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellStyle.prototype, "android", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    CellStyle.prototype.onCellBorderWidthPropertyChanged = function (oldValue, newValue) {
        this.onCellBorderWidthChanged(oldValue, newValue);
    };
    CellStyle.prototype.onCellBorderWidthChanged = function (oldValue, newValue) { };
    CellStyle.prototype.onCellBorderColorPropertyChanged = function (oldValue, newValue) {
        this.onCellBorderColorChanged(oldValue, newValue);
    };
    CellStyle.prototype.onCellBorderColorChanged = function (oldValue, newValue) { };
    CellStyle.prototype.onCellBackgroundColorPropertyChanged = function (oldValue, newValue) {
        this.onCellBackgroundColorChanged(oldValue, newValue);
    };
    CellStyle.prototype.onCellBackgroundColorChanged = function (oldValue, newValue) { };
    CellStyle.prototype.onCellAlignmentPropertyChanged = function (oldValue, newValue) {
        this.onCellAlignmentChanged(oldValue, newValue);
    };
    CellStyle.prototype.onCellAlignmentChanged = function (oldValue, newValue) { };
    CellStyle.prototype.onCellТextColorPropertyChanged = function (oldValue, newValue) {
        this.onCellTextColorChanged(oldValue, newValue);
    };
    CellStyle.prototype.onCellTextColorChanged = function (oldValue, newValue) {
    };
    CellStyle.prototype.onCellTextFontNamePropertyChanged = function (oldValue, newValue) {
        this.onCellTextFontNameChanged(oldValue, newValue);
    };
    CellStyle.prototype.onCellTextFontNameChanged = function (oldValue, newValue) {
    };
    CellStyle.prototype.onCellTextFontStylePropertyChanged = function (oldValue, newValue) {
        this.onCellTextFontStyleChanged(oldValue, newValue);
    };
    CellStyle.prototype.onCellTextFontStyleChanged = function (oldValue, newValue) {
    };
    CellStyle.prototype.onCellTextSizePropertyChanged = function (oldValue, newValue) {
        this.onCellTextSizeChanged(oldValue, newValue);
    };
    CellStyle.prototype.onCellTextSizeChanged = function (oldValue, newValue) {
    };
    CellStyle.prototype.onCellPaddingHorizontalPropertyChanged = function (oldValue, newValue) {
        this.onCellPaddingHorizontalChanged(oldValue, newValue);
    };
    CellStyle.prototype.onCellPaddingHorizontalChanged = function (oldValue, newValue) {
    };
    CellStyle.prototype.onCellPaddingVerticalPropertyChanged = function (oldValue, newValue) {
        this.onCellPaddingVerticalChanged(oldValue, newValue);
    };
    CellStyle.prototype.onCellPaddingVerticalChanged = function (oldValue, newValue) {
    };
    CellStyle.cellBorderWidthProperty = new view_1.Property({
        name: "cellBorderWidth",
        defaultValue: undefined,
        valueConverter: parseFloat,
        valueChanged: function (target, oldValue, newValue) {
            target.onCellBorderWidthPropertyChanged(oldValue, newValue);
        },
    });
    CellStyle.cellBorderColorProperty = new view_1.Property({
        name: "cellBorderColor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onCellBorderColorPropertyChanged(oldValue, newValue);
        },
    });
    CellStyle.cellBackgroundColorProperty = new view_1.Property({
        name: "cellBackgroundColor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onCellBackgroundColorPropertyChanged(oldValue, newValue);
        },
    });
    CellStyle.cellAlignmentProperty = new view_1.Property({
        name: "cellAlignment",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onCellAlignmentPropertyChanged(oldValue, newValue);
        },
    });
    CellStyle.cellTextColorProperty = new view_1.Property({
        name: "cellTextColor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onCellТextColorPropertyChanged(oldValue, newValue);
        },
    });
    CellStyle.cellTextFontNameProperty = new view_1.Property({
        name: "cellTextFontName",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onCellTextFontNamePropertyChanged(oldValue, newValue);
        },
    });
    CellStyle.cellTextFontStyleProperty = new view_1.Property({
        name: "cellTextFontStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onCellTextFontStylePropertyChanged(oldValue, newValue);
        },
    });
    CellStyle.cellTextSizeProperty = new view_1.Property({
        name: "cellTextSize",
        defaultValue: undefined,
        valueConverter: parseFloat,
        valueChanged: function (target, oldValue, newValue) {
            target.onCellTextSizePropertyChanged(oldValue, newValue);
        },
    });
    CellStyle.cellPaddingHorizontalProperty = new view_1.Property({
        name: "cellPaddingHorizontal",
        defaultValue: undefined,
        valueConverter: parseInt,
        valueChanged: function (target, oldValue, newValue) {
            target.onCellPaddingHorizontalPropertyChanged(oldValue, newValue);
        },
    });
    CellStyle.cellPaddingVerticalProperty = new view_1.Property({
        name: "cellPaddingVertical",
        defaultValue: undefined,
        valueConverter: parseInt,
        valueChanged: function (target, oldValue, newValue) {
            target.onCellPaddingVerticalPropertyChanged(oldValue, newValue);
        },
    });
    return CellStyle;
}(view_1.ViewBase));
exports.CellStyle = CellStyle;
CellStyle.cellBorderWidthProperty.register(CellStyle);
CellStyle.cellBorderColorProperty.register(CellStyle);
CellStyle.cellBackgroundColorProperty.register(CellStyle);
CellStyle.cellAlignmentProperty.register(CellStyle);
CellStyle.cellTextColorProperty.register(CellStyle);
CellStyle.cellTextFontNameProperty.register(CellStyle);
CellStyle.cellTextFontStyleProperty.register(CellStyle);
CellStyle.cellTextSizeProperty.register(CellStyle);
CellStyle.cellPaddingHorizontalProperty.register(CellStyle);
CellStyle.cellPaddingVerticalProperty.register(CellStyle);
////////////////////////////////////////////////////////////////////////////////////////////////////
//  DayCellStyle
////////////////////////////////////////////////////////////////////////////////////////////////////
// properties available in ios only: allDayEventTextColor, eventAlignment, eventSpacing, eventShape, eventOrientation, stretchEvents, maxEventsCount, wrapEventText
var DayCellStyle = (function (_super) {
    __extends(DayCellStyle, _super);
    function DayCellStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayCellStyle.prototype.onShowEventsTextPropertyChanged = function (oldValue, newValue) {
        this.onShowEventsTextChanged(oldValue, newValue);
    };
    DayCellStyle.prototype.onShowEventsTextChanged = function (oldValue, newValue) { };
    DayCellStyle.prototype.onEventTextColorPropertyChanged = function (oldValue, newValue) {
        this.onEventTextColorChanged(oldValue, newValue);
    };
    DayCellStyle.prototype.onEventTextColorChanged = function (oldValue, newValue) { };
    DayCellStyle.prototype.onEventFontNamePropertyChanged = function (oldValue, newValue) {
        this.onEventFontNameChanged(oldValue, newValue);
    };
    DayCellStyle.prototype.onEventFontNameChanged = function (oldValue, newValue) { };
    DayCellStyle.prototype.onEventFontStylePropertyChanged = function (oldValue, newValue) {
        this.onEventFontStyleChanged(oldValue, newValue);
    };
    DayCellStyle.prototype.onEventFontStyleChanged = function (oldValue, newValue) { };
    DayCellStyle.prototype.onEventTextSizePropertyChanged = function (oldValue, newValue) {
        this.onEventTextSizeChanged(oldValue, newValue);
    };
    DayCellStyle.prototype.onEventTextSizeChanged = function (oldValue, newValue) {
    };
    DayCellStyle.showEventsTextProperty = new view_1.Property({
        name: "showEventsText",
        defaultValue: undefined,
        valueConverter: view_1.booleanConverter,
        valueChanged: function (target, oldValue, newValue) {
            target.onShowEventsTextPropertyChanged(oldValue, newValue);
        },
    });
    DayCellStyle.eventTextColorProperty = new view_1.Property({
        name: "eventTextColor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onEventTextColorPropertyChanged(oldValue, newValue);
        },
    });
    DayCellStyle.eventFontNameProperty = new view_1.Property({
        name: "eventFontName",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onEventFontNamePropertyChanged(oldValue, newValue);
        },
    });
    DayCellStyle.eventFontStyleProperty = new view_1.Property({
        name: "eventFontStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onEventFontStylePropertyChanged(oldValue, newValue);
        },
    });
    DayCellStyle.eventTextSizeProperty = new view_1.Property({
        name: "eventTextSize",
        defaultValue: undefined,
        valueConverter: parseFloat,
        valueChanged: function (target, oldValue, newValue) {
            target.onEventTextSizePropertyChanged(oldValue, newValue);
        },
    });
    return DayCellStyle;
}(CellStyle));
exports.DayCellStyle = DayCellStyle;
DayCellStyle.showEventsTextProperty.register(DayCellStyle);
DayCellStyle.eventTextColorProperty.register(DayCellStyle);
DayCellStyle.eventFontNameProperty.register(DayCellStyle);
DayCellStyle.eventFontStyleProperty.register(DayCellStyle);
DayCellStyle.eventTextSizeProperty.register(DayCellStyle);
/**
 * Cell style class for inline events cells in month view
 */
//missing for ios: separatorColor & shape size
var InlineEventCellStyle = (function (_super) {
    __extends(InlineEventCellStyle, _super);
    function InlineEventCellStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineEventCellStyle.prototype.onCellBackgroundColorPropertyChanged = function (oldValue, newValue) {
        this.onCellBackgroundColorChanged(oldValue, newValue);
    };
    InlineEventCellStyle.prototype.onCellBackgroundColorChanged = function (oldValue, newValue) { };
    InlineEventCellStyle.prototype.onEventTextColorPropertyChanged = function (oldValue, newValue) {
        this.onEventTextColorChanged(oldValue, newValue);
    };
    InlineEventCellStyle.prototype.onEventTextColorChanged = function (oldValue, newValue) { };
    InlineEventCellStyle.prototype.onEventFontNamePropertyChanged = function (oldValue, newValue) {
        this.onEventFontNameChanged(oldValue, newValue);
    };
    InlineEventCellStyle.prototype.onEventFontNameChanged = function (oldValue, newValue) { };
    InlineEventCellStyle.prototype.onEventFontStylePropertyChanged = function (oldValue, newValue) {
        this.onEventFontStyleChanged(oldValue, newValue);
    };
    InlineEventCellStyle.prototype.onEventFontStyleChanged = function (oldValue, newValue) { };
    InlineEventCellStyle.prototype.onEventTextSizePropertyChanged = function (oldValue, newValue) {
        this.onEventTextSizeChanged(oldValue, newValue);
    };
    InlineEventCellStyle.prototype.onEventTextSizeChanged = function (oldValue, newValue) {
    };
    InlineEventCellStyle.prototype.onTimeTextColorPropertyChanged = function (oldValue, newValue) {
        this.onTimeTextColorChanged(oldValue, newValue);
    };
    InlineEventCellStyle.prototype.onTimeTextColorChanged = function (oldValue, newValue) { };
    InlineEventCellStyle.prototype.onTimeFontNamePropertyChanged = function (oldValue, newValue) {
        this.onTimeFontNameChanged(oldValue, newValue);
    };
    InlineEventCellStyle.prototype.onTimeFontNameChanged = function (oldValue, newValue) { };
    InlineEventCellStyle.prototype.onTimeFontStylePropertyChanged = function (oldValue, newValue) {
        this.onTimeFontStyleChanged(oldValue, newValue);
    };
    InlineEventCellStyle.prototype.onTimeFontStyleChanged = function (oldValue, newValue) { };
    InlineEventCellStyle.prototype.onTimeTextSizePropertyChanged = function (oldValue, newValue) {
        this.onTimeTextSizeChanged(oldValue, newValue);
    };
    InlineEventCellStyle.prototype.onTimeTextSizeChanged = function (oldValue, newValue) { };
    InlineEventCellStyle.cellBackgroundColorProperty = new view_1.Property({
        name: "cellBackgroundColor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onCellBackgroundColorPropertyChanged(oldValue, newValue);
        },
    });
    InlineEventCellStyle.eventTextColorProperty = new view_1.Property({
        name: "eventTextColor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onEventTextColorPropertyChanged(oldValue, newValue);
        },
    });
    InlineEventCellStyle.eventFontNameProperty = new view_1.Property({
        name: "eventFontName",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onEventFontNamePropertyChanged(oldValue, newValue);
        },
    });
    InlineEventCellStyle.eventFontStyleProperty = new view_1.Property({
        name: "eventFontStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onEventFontStylePropertyChanged(oldValue, newValue);
        },
    });
    InlineEventCellStyle.eventTextSizeProperty = new view_1.Property({
        name: "eventTextSize",
        defaultValue: undefined,
        valueConverter: parseFloat,
        valueChanged: function (target, oldValue, newValue) {
            target.onEventTextSizePropertyChanged(oldValue, newValue);
        },
    });
    InlineEventCellStyle.timeTextColorProperty = new view_1.Property({
        name: "timeTextColor",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onTimeTextColorPropertyChanged(oldValue, newValue);
        },
    });
    InlineEventCellStyle.timeFontNameProperty = new view_1.Property({
        name: "timeFontName",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onTimeFontNamePropertyChanged(oldValue, newValue);
        },
    });
    InlineEventCellStyle.timeFontStyleProperty = new view_1.Property({
        name: "timeFontStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onTimeFontStylePropertyChanged(oldValue, newValue);
        },
    });
    InlineEventCellStyle.timeTextSizeProperty = new view_1.Property({
        name: "timeTextSize",
        defaultValue: undefined,
        valueConverter: parseFloat,
        valueChanged: function (target, oldValue, newValue) {
            target.onTimeTextSizePropertyChanged(oldValue, newValue);
        },
    });
    return InlineEventCellStyle;
}(view_1.ViewBase));
exports.InlineEventCellStyle = InlineEventCellStyle;
InlineEventCellStyle.cellBackgroundColorProperty.register(InlineEventCellStyle);
InlineEventCellStyle.eventTextColorProperty.register(InlineEventCellStyle);
InlineEventCellStyle.eventFontNameProperty.register(InlineEventCellStyle);
InlineEventCellStyle.eventFontStyleProperty.register(InlineEventCellStyle);
InlineEventCellStyle.eventTextSizeProperty.register(InlineEventCellStyle);
InlineEventCellStyle.timeTextColorProperty.register(InlineEventCellStyle);
InlineEventCellStyle.timeFontNameProperty.register(InlineEventCellStyle);
InlineEventCellStyle.timeFontStyleProperty.register(InlineEventCellStyle);
InlineEventCellStyle.timeTextSizeProperty.register(InlineEventCellStyle);
////////////////////////////////////////////////////////////////////////////////////////////////////
var RadCalendar = (function (_super) {
    __extends(RadCalendar, _super);
    function RadCalendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RadCalendar.prototype, "android", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadCalendar.prototype, "ios", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    RadCalendar.prototype.onLocalePropertyChanged = function (oldValue, newValue) {
    };
    RadCalendar.prototype.onMinDatePropertyChanged = function (oldValue, newValue) {
        this.onMinDateChanged(oldValue, newValue);
    };
    RadCalendar.prototype.onMaxDatePropertyChanged = function (oldValue, newValue) {
        this.onMaxDateChanged(oldValue, newValue);
    };
    RadCalendar.prototype.onSelectedDatePropertyChanged = function (oldValue, newValue) {
        this.onSelectedDateChanged(oldValue, newValue);
    };
    RadCalendar.prototype.onSelectedDatesPropertyChanged = function (oldValue, newValue) {
        this.onSelectedDatesChanged(oldValue, newValue);
    };
    RadCalendar.prototype.onSelectedDateRangePropertyChanged = function (oldValue, newValue) {
        this.onSelectedDateRangeChanged(oldValue, newValue);
    };
    RadCalendar.prototype.onViewModePropertyChanged = function (oldValue, newValue) {
        this.onViewModeChanged(oldValue, newValue);
    };
    RadCalendar.prototype.onEventsViewModePropertyChanged = function (oldValue, newValue) {
        this.onEventsViewModeChanged(oldValue, newValue);
    };
    RadCalendar.prototype.onSelectionModePropertyChanged = function (oldValue, newValue) {
        this.onSelectionModeChanged(oldValue, newValue);
    };
    RadCalendar.prototype.onTransitionModePropertyChanged = function (oldValue, newValue) {
        this.onTransitionModeChanged(oldValue, newValue);
    };
    RadCalendar.prototype.onDisplayedDatePropertyChanged = function (oldValue, newValue) {
        this.onDisplayedDateChanged(oldValue, newValue);
    };
    RadCalendar.prototype.onEventSourcePropertyChanged = function (oldValue, newValue) {
        this.onEventSourceChanged(oldValue, newValue);
    };
    RadCalendar.prototype.onHorizontalTransitionPropertyChanged = function (oldValue, newValue) {
        this.onHorizontalTransitionChanged(oldValue, newValue);
    };
    RadCalendar.prototype.onMonthViewStylePropertyChanged = function (oldValue, newValue) {
        this.onMonthViewStyleChanged(oldValue, newValue);
    };
    RadCalendar.prototype.onWeekViewStylePropertyChanged = function (oldValue, newValue) {
        this.onWeekViewStyleChanged(oldValue, newValue);
    };
    RadCalendar.prototype.onYearViewStylePropertyChanged = function (oldValue, newValue) {
        this.onYearViewStyleChanged(oldValue, newValue);
    };
    RadCalendar.prototype.onMonthNamesViewStylePropertyChanged = function (oldValue, newValue) {
        this.onMonthNamesViewStyleChanged(oldValue, newValue);
    };
    RadCalendar.prototype.reload = function () { };
    RadCalendar.prototype.navigateForward = function () { };
    RadCalendar.prototype.navigateBack = function () { };
    RadCalendar.prototype.goToDate = function (date) { };
    RadCalendar.prototype.getEventsForDate = function (date) {
        return undefined;
    };
    RadCalendar.prototype.parseDate = function (value) {
        var date;
        if (value instanceof Date) {
            date = value;
        }
        else {
            date = new Date(value);
        }
        var time = date.getTime();
        if (isNaN(time)) {
            throw new TypeError("Incorrect date format!");
        }
        return date;
    };
    RadCalendar.prototype.getSelectedDatesList = function () {
        var current = this.selectedDates;
        if (typeof (this.selectedDates) === "string") {
            current = this.selectedDates.split(",");
        }
        return current;
    };
    RadCalendar.prototype._addSelectedDate = function (date) {
        var newSelection = new Array();
        if (this.selectedDates) {
            var currentSelection = this.getSelectedDatesList();
            for (var i = 0; i < currentSelection.length; i++) {
                var selectedDate = this.parseDate(currentSelection[i]);
                newSelection.push(selectedDate);
                if (selectedDate.getTime() === date.getTime()) {
                    return;
                }
            }
        }
        newSelection.push(date);
        this.selectedDates = newSelection;
    };
    RadCalendar.prototype._removeSelectedDate = function (date) {
        var newSelection = new Array();
        var currentSelection = this.getSelectedDatesList();
        for (var i = 0; i < currentSelection.length; i++) {
            var selectedDate = this.parseDate(currentSelection[i]);
            if (selectedDate.getTime() !== date.getTime()) {
                newSelection.push(selectedDate);
            }
        }
        this.selectedDates = newSelection;
        if (newSelection.length > 0) {
            this.selectedDate = newSelection[newSelection.length - 1];
        }
        else {
            this.selectedDate = undefined;
        }
    };
    RadCalendar.prototype.onEventSourceChanged = function (oldValue, newValue) {
        this.updateEventSource();
        if (oldValue instanceof observable_1.Observable) {
            weakEvents.removeWeakEventListener(oldValue, observable_array_1.ObservableArray.changeEvent, this.EventSourceChangedInternal, this);
        }
        if (newValue instanceof observable_1.Observable) {
            weakEvents.addWeakEventListener(newValue, observable_array_1.ObservableArray.changeEvent, this.EventSourceChangedInternal, this);
        }
    };
    ;
    RadCalendar.prototype.EventSourceChangedInternal = function (data) {
        this.updateEventSource();
    };
    RadCalendar.prototype.updateEventSource = function () { };
    ;
    RadCalendar.prototype.onDisplayedDateChanged = function (oldValue, newValue) { };
    ;
    RadCalendar.prototype.onSelectionModeChanged = function (oldValue, newValue) { };
    ;
    RadCalendar.prototype.onTransitionModeChanged = function (oldValue, newValue) { };
    ;
    RadCalendar.prototype.onViewModeChanged = function (oldValue, newValue) { };
    ;
    RadCalendar.prototype.onEventsViewModeChanged = function (oldValue, newValue) { };
    ;
    RadCalendar.prototype.onSelectedDateRangeChanged = function (oldValue, newValue) { };
    ;
    RadCalendar.prototype.onSelectedDatesChanged = function (oldValue, newValue) { };
    ;
    RadCalendar.prototype.onSelectedDateChanged = function (oldValue, newValue) { };
    ;
    RadCalendar.prototype.onMaxDateChanged = function (oldValue, newValue) { };
    ;
    RadCalendar.prototype.onMinDateChanged = function (oldValue, newValue) { };
    ;
    RadCalendar.prototype.onHorizontalTransitionChanged = function (oldValue, newValue) { };
    ;
    RadCalendar.prototype.onMonthViewStyleChanged = function (oldValue, newValue) { };
    ;
    RadCalendar.prototype.onWeekViewStyleChanged = function (oldValue, newValue) { };
    ;
    RadCalendar.prototype.onYearViewStyleChanged = function (oldValue, newValue) { };
    ;
    RadCalendar.prototype.onMonthNamesViewStyleChanged = function (oldValue, newValue) { };
    ;
    // public static dateSelectingEvent : string = "dateSelecting";
    RadCalendar.dateSelectedEvent = "dateSelected";
    RadCalendar.dateDeselectedEvent = "dateDeselected";
    RadCalendar.cellTapEvent = "cellTap";
    RadCalendar.inlineEventSelectedEvent = "inlineEventSelected";
    RadCalendar.navigatedToDateEvent = "navigatedToDate";
    RadCalendar.navigatingToDateStartedEvent = "navigatingToDateStarted";
    RadCalendar.viewModeChangedEvent = "viewModeChanged";
    RadCalendar.localeProperty = new view_1.Property({
        name: "locale",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onLocalePropertyChanged(oldValue, newValue);
        }
    });
    RadCalendar.minDateProperty = new view_1.Property({
        name: "minDate",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onMinDatePropertyChanged(oldValue, newValue);
        },
    });
    RadCalendar.maxDateProperty = new view_1.Property({
        name: "maxDate",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onMaxDatePropertyChanged(oldValue, newValue);
        },
    });
    RadCalendar.selectedDateProperty = new view_1.Property({
        name: "selectedDate",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onSelectedDatePropertyChanged(oldValue, newValue);
        },
    });
    RadCalendar.selectedDatesProperty = new view_1.Property({
        name: "selectedDates",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onSelectedDatesPropertyChanged(oldValue, newValue);
        },
    });
    RadCalendar.selectedDateRangeProperty = new view_1.Property({
        name: "selectedDateRange",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onSelectedDateRangePropertyChanged(oldValue, newValue);
        },
    });
    RadCalendar.viewModeProperty = new view_1.Property({
        name: "viewMode",
        defaultValue: "Month",
        valueChanged: function (target, oldValue, newValue) {
            target.onViewModePropertyChanged(oldValue, newValue);
        },
    });
    RadCalendar.eventsViewModeProperty = new view_1.Property({
        name: "eventsViewMode",
        defaultValue: "None",
        valueChanged: function (target, oldValue, newValue) {
            target.onEventsViewModePropertyChanged(oldValue, newValue);
        },
    });
    RadCalendar.selectionModeProperty = new view_1.Property({
        name: "selectionMode",
        defaultValue: "Single",
        valueChanged: function (target, oldValue, newValue) {
            target.onSelectionModePropertyChanged(oldValue, newValue);
        },
    });
    RadCalendar.transitionModeProperty = new view_1.Property({
        name: "transitionMode",
        defaultValue: "Slide",
        valueChanged: function (target, oldValue, newValue) {
            target.onTransitionModePropertyChanged(oldValue, newValue);
        },
    });
    // Perhaps currentDate would be a better name for this :/
    RadCalendar.displayedDateProperty = new view_1.Property({
        name: "displayedDate",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onDisplayedDatePropertyChanged(oldValue, newValue);
        },
    });
    RadCalendar.eventSourceProperty = new view_1.Property({
        name: "eventSource",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onEventSourcePropertyChanged(oldValue, newValue);
        },
    });
    RadCalendar.horizontalTransitionProperty = new view_1.Property({
        name: "horizontalTransition",
        defaultValue: true,
        valueConverter: view_1.booleanConverter,
        valueChanged: function (target, oldValue, newValue) {
            target.onHorizontalTransitionPropertyChanged(oldValue, newValue);
        },
    });
    RadCalendar.monthViewStyleProperty = new view_1.Property({
        name: "monthViewStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onMonthViewStylePropertyChanged(oldValue, newValue);
        },
    });
    RadCalendar.weekViewStyleProperty = new view_1.Property({
        name: "weekViewStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onWeekViewStylePropertyChanged(oldValue, newValue);
        },
    });
    RadCalendar.yearViewStyleProperty = new view_1.Property({
        name: "yearViewStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onYearViewStylePropertyChanged(oldValue, newValue);
        },
    });
    RadCalendar.monthNamesViewStyleProperty = new view_1.Property({
        name: "monthNamesViewStyle",
        defaultValue: undefined,
        valueChanged: function (target, oldValue, newValue) {
            target.onMonthNamesViewStylePropertyChanged(oldValue, newValue);
        },
    });
    return RadCalendar;
}(view_1.View));
exports.RadCalendar = RadCalendar;
RadCalendar.localeProperty.register(RadCalendar);
RadCalendar.minDateProperty.register(RadCalendar);
RadCalendar.maxDateProperty.register(RadCalendar);
RadCalendar.selectedDateProperty.register(RadCalendar);
RadCalendar.selectedDatesProperty.register(RadCalendar);
RadCalendar.selectedDateRangeProperty.register(RadCalendar);
RadCalendar.viewModeProperty.register(RadCalendar);
RadCalendar.eventsViewModeProperty.register(RadCalendar);
RadCalendar.selectionModeProperty.register(RadCalendar);
RadCalendar.transitionModeProperty.register(RadCalendar);
RadCalendar.displayedDateProperty.register(RadCalendar);
RadCalendar.eventSourceProperty.register(RadCalendar);
RadCalendar.horizontalTransitionProperty.register(RadCalendar);
RadCalendar.monthViewStyleProperty.register(RadCalendar);
RadCalendar.weekViewStyleProperty.register(RadCalendar);
RadCalendar.yearViewStyleProperty.register(RadCalendar);
RadCalendar.monthNamesViewStyleProperty.register(RadCalendar);
