"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var date_fns_1 = require("date-fns");
var utils_1 = require("../utils");
;
var styles = function (theme) {
    return core_1.createStyles({
        selectedRange: {
            border: "1px solid " + theme.palette.primary.dark + " !important",
            backgroundColor: theme.palette.primary.light,
            borderRadius: 3
        },
        listItem: {
            width: "auto",
            border: "1px solid transparent",
            padding: 0,
            marginRight: 5
        }
    });
};
var isSameRange = function (first, second) {
    var fStart = first.startDate, fEnd = first.endDate;
    var sStart = second.startDate, sEnd = second.endDate;
    if (fStart && sStart && fEnd && sEnd) {
        return date_fns_1.isSameDay(fStart, sStart) && date_fns_1.isSameDay(fEnd, sEnd);
    }
    return false;
};
var DefinedRanges = function (props) {
    var classes = props.classes;
    return (react_1.default.createElement(core_1.List, { style: { display: "inline-flex", padding: "8px 20px", textAlign: "center" } }, props.ranges.map(function (range, idx) { return (react_1.default.createElement(core_1.ListItem, { className: utils_1.combine(classes.listItem, isSameRange(range, props.selectedRange) && classes.selectedRange), button: true, key: idx, onClick: function () { return props.setRange(range); } },
        react_1.default.createElement(core_1.ListItemText, { primaryTypographyProps: {
                variant: "body2",
                style: {
                    padding: "0px 8px",
                    fontWeight: isSameRange(range, props.selectedRange)
                        ? "bold"
                        : "normal"
                }
            } }, range.label))); })));
};
exports.default = core_1.withStyles(styles)(DefinedRanges);
//# sourceMappingURL=DefinedRanges.js.map