"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var utils_1 = require("../utils");
var styles = function (theme) {
    return core_1.createStyles({
        invalid: {
            backgroundColor: theme.palette.error[100] + " !important"
        },
        secondWithinRange: {
            borderRadius: "5px 0 0 5px !important",
            marginTop: 10,
            padding: "0 8px 0 8px !important"
        },
        secondLastWithinRange: {
            borderRadius: "0 5px 5px 0 !important",
            marginTop: 10,
            padding: "0 8px 0 8px !important"
        },
        onlyHighlighted: {
            borderRadius: "5px !important",
            marginTop: 10,
            padding: "0 8px 0 8px !important"
        },
        leftBorderRadius: {
            borderRadius: "5px 0 0 5px"
        },
        rightBorderRadius: {
            borderRadius: "0 5px 5px 0"
        },
        buttonContainer: {
            display: "flex"
        },
        button: {
            height: 28,
            width: 44,
            padding: "0 12px",
            margin: "8px 0",
            borderRadius: 5
        },
        buttonText: {
            lineHeight: 1.6
        },
        outlined: {
            border: "1px solid " + theme.palette.primary.dark,
            width: 32,
            margin: "8px 6px"
        },
        filled: {
            "&:hover": {
                backgroundColor: theme.palette.secondary.main
            },
            width: 32,
            margin: "8px 6px",
            backgroundColor: theme.palette.secondary.main
        },
        highlighted: {
            width: "44px !important",
            height: "24px !important",
            margin: "10px 0",
            borderRadius: 0,
            backgroundColor: theme.palette.secondary.light
        },
        contrast: {
            color: theme.palette.primary.contrastText
        }
    });
};
var Day = function (props) {
    var classes = props.classes;
    return (React.createElement("div", { className: utils_1.combine(classes.buttonContainer, props.startOfRange && classes.leftBorderRadius, props.endOfRange && classes.rightBorderRadius) },
        React.createElement(core_1.IconButton, { className: utils_1.combine(classes.button, !props.disabled && props.outlined && classes.outlined, !props.disabled && props.filled && classes.filled, !props.disabled &&
                !props.filled &&
                props.highlighted &&
                classes.highlighted, props.secondWithinRange &&
                !props.secondLastWithinRange &&
                classes.secondWithinRange, props.secondLastWithinRange &&
                !props.secondWithinRange &&
                classes.secondLastWithinRange, props.secondWithinRange &&
                props.secondLastWithinRange &&
                classes.onlyHighlighted, props.isInvalid && classes.invalid), disabled: props.disabled, onClick: props.onClick, onMouseOver: props.onHover },
            React.createElement(core_1.Typography, { color: !props.disabled ? "default" : "textSecondary", className: utils_1.combine(classes.buttonText, !props.disabled && props.filled && classes.contrast), variant: "body2" }, props.value))));
};
exports.default = core_1.withStyles(styles)(Day);
//# sourceMappingURL=Day.js.map