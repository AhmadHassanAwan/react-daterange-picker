"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var date_fns_1 = require("date-fns");
var utils_1 = require("../utils");
var Header_1 = __importDefault(require("./Header"));
var Day_1 = __importDefault(require("./Day"));
var types_1 = require("../types");
var WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
var styles = function (theme) {
    return core_1.createStyles({
        root: {
            // width: 290
            width: "calc(50% - 0.5px)",
            minWidth: 340
        },
        container: {
            alignItems: "flex-start"
        },
        weekDaysContainer: {
            paddingLeft: 30,
            paddingRight: 30
        },
        daysContainer: {
            paddingLeft: 15,
            paddingRight: 15,
            marginTop: 10,
            marginBottom: 10
        },
        divider: {
            border: "1px solid " + theme.palette.action.disabledBackground,
            width: "100%",
            margin: "5px 25px",
            height: 1
        }
    });
};
var Month = function (props) {
    var classes = props.classes, helpers = props.helpers, handlers = props.handlers, date = props.value, dateRange = props.dateRange, marker = props.marker, setDate = props.setValue, minDate = props.minDate, maxDate = props.maxDate, hoverDay = props.hoverDay;
    var _a = props.navState, back = _a[0], forward = _a[1];
    var _b = props.navStateYear, yearBack = _b[0], yearForward = _b[1];
    return (React.createElement(core_1.Grid, { container: true, className: classes.root },
        React.createElement(Header_1.default, { marker: marker, date: date, setDate: setDate, nextDisabled: !forward, prevDisabled: !back, nextDisabledYear: !yearForward, prevDisabledYear: !yearBack, onClickPrevious: function () {
                return handlers.onMonthNavigate(marker, types_1.NavigationAction.Previous);
            }, onClickPreviousYear: function () { return handlers.onMonthNavigate(marker, -12); }, onClickNextYear: function () { return handlers.onMonthNavigate(marker, 12); }, onClickNext: function () {
                return handlers.onMonthNavigate(marker, types_1.NavigationAction.Next);
            } }),
        React.createElement("div", { className: classes.divider }),
        React.createElement(core_1.Grid, { item: true, container: true, direction: "row", justify: "space-between", className: classes.weekDaysContainer }, WEEK_DAYS.map(function (day) { return (React.createElement(core_1.Typography, { color: "textSecondary", key: day, variant: "caption" }, day)); })),
        React.createElement("div", { className: classes.divider }),
        React.createElement(core_1.Grid, { item: true, container: true, direction: "column", justify: "space-between", className: classes.daysContainer }, utils_1.chunks(utils_1.getDaysInMonth(date), 7).map(function (week, idx) { return (React.createElement(core_1.Grid, { key: idx, container: true, direction: "row", justify: "center" }, week.map(function (day) {
            var isStart = utils_1.isStartOfRange(dateRange, day);
            var isSecondWithinRange = utils_1.isStartOfRange(dateRange, new Date(day.getTime() - 24 * 60 * 60 * 1000));
            var isSecondLastWithinRange = utils_1.isEndOfRange(dateRange, new Date(day.getTime() + 24 * 60 * 60 * 1000));
            var isEnd = utils_1.isEndOfRange(dateRange, day);
            var isRangeOneDay = utils_1.isRangeSameDay(dateRange);
            var highlighted = utils_1.inDateRange(dateRange, day) || helpers.inHoverRange(day);
            var isInvalid = !dateRange.endDate &&
                highlighted &&
                !(isStart && !isRangeOneDay) &&
                helpers.isInvalidRange(hoverDay, dateRange.startDate);
            return (React.createElement(Day_1.default, { key: date_fns_1.format(day, "MM-DD-YYYY"), filled: isStart || isEnd, outlined: date_fns_1.isToday(day), highlighted: highlighted && !isRangeOneDay, disabled: !date_fns_1.isSameMonth(date, day) ||
                    !date_fns_1.isWithinRange(day, minDate, maxDate), isInvalid: isInvalid, secondWithinRange: isSecondWithinRange && highlighted && !isRangeOneDay, secondLastWithinRange: isSecondLastWithinRange && highlighted && !isRangeOneDay, startOfRange: isStart && !isRangeOneDay, endOfRange: isEnd && !isRangeOneDay, onClick: function () { return handlers.onDayClick(day); }, onHover: function () {
                    handlers.onDayHover(day);
                }, value: date_fns_1.getDate(day) }));
        }))); }))));
};
exports.default = core_1.withStyles(styles)(Month);
//# sourceMappingURL=Month.js.map