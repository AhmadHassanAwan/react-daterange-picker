import * as React from "react";
import {
  IconButton,
  Typography,
  createStyles,
  Theme,
  WithStyles,
  withStyles
} from "@material-ui/core";
import { combine } from "../utils";
import { yellow } from "@matharumanpreet00/react-daterange-picker/node_modules/@material-ui/core/colors";

interface DayProps extends WithStyles<typeof styles> {
  filled?: boolean;
  outlined?: boolean;
  highlighted?: boolean;
  disabled?: boolean;
  startOfRange?: boolean;
  endOfRange?: boolean;
  isInvalid?: boolean;
  secondWithinRange?: boolean;
  secondLastWithinRange?: boolean;
  onClick?: () => void;
  onHover?: () => void;
  value: number | string;
}

const styles = (theme: Theme) =>
  createStyles({
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
      border: `1px solid ${theme.palette.primary.dark}`,
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

const Day: React.FunctionComponent<DayProps> = props => {
  const { classes } = props;
  return (
    <div
      className={combine(
        classes.buttonContainer,
        props.startOfRange && classes.leftBorderRadius,
        props.endOfRange && classes.rightBorderRadius
      )}
    >
      <IconButton
        className={combine(
          classes.button,
          !props.disabled && props.outlined && classes.outlined,
          !props.disabled && props.filled && classes.filled,
          !props.disabled &&
            !props.filled &&
            props.highlighted &&
            classes.highlighted,
          props.secondWithinRange &&
            !props.secondLastWithinRange &&
            classes.secondWithinRange,
          props.secondLastWithinRange &&
            !props.secondWithinRange &&
            classes.secondLastWithinRange,
          props.secondWithinRange &&
            props.secondLastWithinRange &&
            classes.onlyHighlighted,
          props.isInvalid && classes.invalid
        )}
        disabled={props.disabled}
        onClick={props.onClick}
        onMouseOver={props.onHover}
      >
        <Typography
          color={!props.disabled ? "default" : "textSecondary"}
          className={combine(
            classes.buttonText,
            !props.disabled && props.filled && classes.contrast
          )}
          variant="body2"
        >
          {props.value}
        </Typography>
      </IconButton>
    </div>
  );
};

export default withStyles(styles)(Day);
