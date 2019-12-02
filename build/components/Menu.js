"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var date_fns_1 = require("date-fns");
var Month_1 = __importDefault(require("./Month"));
var __1 = require("..");
var styles = function (theme) {
    return core_1.createStyles({
        header: {
            padding: "15px 0px 8px"
        },
        headerItem: {
            flex: 1,
            textAlign: "left",
            fontSize: 12,
            fontWeight: 500,
            padding: "0 20px"
        },
        divider: {
            borderLeft: "1px solid " + theme.palette.action.hover
        },
        p: {
            float: "right",
            padding: "11px 20px",
            fontSize: "12px !important"
        },
        daysLabel: {
            color: theme.palette.grey[400]
        }
    });
};
var Menu = function (props) {
    var classes = props.classes, ranges = props.ranges, dateRange = props.dateRange, hoverDay = props.hoverDay, minDate = props.minDate, maxDate = props.maxDate, firstMonth = props.firstMonth, setFirstMonth = props.setFirstMonth, secondMonth = props.secondMonth, setSecondMonth = props.setSecondMonth, setDateRange = props.setDateRange, helpers = props.helpers, handlers = props.handlers;
    var startDate = dateRange.startDate, endDate = dateRange.endDate;
    var canNavigateCloser = date_fns_1.differenceInCalendarMonths(secondMonth, firstMonth) >= 2;
    var canNavigateCloserYear = date_fns_1.differenceInCalendarMonths(secondMonth, firstMonth) > 12;
    var commonProps = {
        hoverDay: hoverDay,
        dateRange: dateRange,
        minDate: minDate,
        maxDate: maxDate,
        helpers: helpers,
        handlers: handlers
    };
    return (react_1.default.createElement(core_1.Paper, { elevation: 1, square: true },
        react_1.default.createElement(core_1.Grid, { container: true, direction: "row" },
            react_1.default.createElement(core_1.Grid, null,
                react_1.default.createElement(core_1.Grid, { container: true, direction: "row", justify: "center", alignItems: "flex-start" },
                    react_1.default.createElement(Month_1.default, __assign({}, commonProps, { value: firstMonth, setValue: setFirstMonth, navState: [true, canNavigateCloser], navStateYear: [true, canNavigateCloserYear], marker: __1.MARKERS.FIRST_MONTH })),
                    react_1.default.createElement("div", { className: classes.divider }),
                    react_1.default.createElement(Month_1.default, __assign({}, commonProps, { value: secondMonth, setValue: setSecondMonth, navState: [canNavigateCloser, true], navStateYear: [canNavigateCloserYear, true], marker: __1.MARKERS.SECOND_MONTH }))),
                react_1.default.createElement(core_1.Divider, null),
                react_1.default.createElement(core_1.Grid, null,
                    react_1.default.createElement(core_1.Typography, { className: classes.p },
                        react_1.default.createElement("span", { className: classes.daysLabel }, "Days: "),
                        react_1.default.createElement("span", null, dateRange.endDate && dateRange.startDate
                            ? date_fns_1.differenceInCalendarDays(dateRange.endDate, dateRange.startDate)
                            : 0)))))));
};
exports.default = core_1.withStyles(styles)(Menu);
//# sourceMappingURL=Menu.js.map