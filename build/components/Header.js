"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var react_1 = __importDefault(require("react"));
var ChevronLeft_1 = __importDefault(require("@material-ui/icons/ChevronLeft"));
var ArrowLeft_1 = __importDefault(require("@material-ui/icons/ArrowLeft"));
var ChevronRight_1 = __importDefault(require("@material-ui/icons/ChevronRight"));
var ArrowRight_1 = __importDefault(require("@material-ui/icons/ArrowRight"));
var date_fns_1 = require("date-fns");
var styles = function (theme) {
    return core_1.createStyles({
        root: {
            color: theme.palette.primary.main,
            fontSize: 15,
            "& p": {
                paddingTop: 7,
                fontWeight: "bold"
            }
        },
        iconContainer: {
            padding: 5
        },
        icon: {
            padding: "3px 10px 0",
            "&:hover": {
                background: "none"
            }
        }
    });
};
var MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
];
var generateYears = function (relativeTo, count) {
    var half = Math.floor(count / 2);
    return Array(count)
        .fill(0)
        .map(function (y, i) { return relativeTo.getFullYear() - half + i; }); // TODO: make part of the state
};
var Header = function (_a) {
    var date = _a.date, classes = _a.classes, setDate = _a.setDate, marker = _a.marker, nextDisabled = _a.nextDisabled, prevDisabled = _a.prevDisabled, nextDisabledYear = _a.nextDisabledYear, prevDisabledYear = _a.prevDisabledYear, onClickNext = _a.onClickNext, onClickPrevious = _a.onClickPrevious, onClickNextYear = _a.onClickNextYear, onClickPreviousYear = _a.onClickPreviousYear;
    var handleMonthChange = function (event) {
        setDate(date_fns_1.setMonth(date, parseInt(event.target.value)));
    };
    var handleYearChange = function (event) {
        setDate(date_fns_1.setYear(date, parseInt(event.target.value)));
    };
    return (react_1.default.createElement(core_1.Grid, { container: true, justify: "space-between", alignItems: "center", className: classes.root },
        react_1.default.createElement(core_1.Grid, { item: true, className: classes.iconContainer },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(core_1.IconButton, { className: classes.icon, disabled: prevDisabled, onClick: onClickPreviousYear },
                    react_1.default.createElement(ArrowLeft_1.default, { color: prevDisabledYear ? "disabled" : "action" })),
                react_1.default.createElement(core_1.IconButton, { className: classes.icon, disabled: prevDisabled, onClick: onClickPrevious },
                    react_1.default.createElement(ChevronLeft_1.default, { color: prevDisabled ? "disabled" : "action" })))),
        react_1.default.createElement(core_1.Grid, { item: true },
            react_1.default.createElement(core_1.Typography, null,
                MONTHS[date_fns_1.getMonth(date)],
                " ",
                date_fns_1.getYear(date))),
        react_1.default.createElement(core_1.Grid, { item: true, className: classes.iconContainer },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(core_1.IconButton, { className: classes.icon, disabled: nextDisabled, onClick: onClickNext },
                    react_1.default.createElement(ChevronRight_1.default, { color: nextDisabled ? "disabled" : "action" })),
                react_1.default.createElement(core_1.IconButton, { className: classes.icon, disabled: nextDisabled, onClick: onClickNextYear },
                    react_1.default.createElement(ArrowRight_1.default, { color: nextDisabledYear ? "disabled" : "action" }))))));
};
exports.default = core_1.withStyles(styles)(Header);
//# sourceMappingURL=Header.js.map