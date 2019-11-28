import {
  WithStyles,
  Grid,
  createStyles,
  withStyles,
  IconButton,
  Select,
  MenuItem,
  Typography,
  Theme
} from "@material-ui/core";
import React from "react";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ArrowRight from "@material-ui/icons/ArrowRight";
import { setMonth, getMonth, setYear, getYear } from "date-fns";

interface HeaderProps extends WithStyles<typeof styles> {
  date: Date;
  setDate: (date: Date) => void;
  nextDisabled: boolean;
  prevDisabled: boolean;
  nextDisabledYear: boolean;
  prevDisabledYear: boolean;
  marker: symbol;
  onClickNext: () => void;
  onClickPrevious: () => void;
  onClickNextYear: () => void;
  onClickPreviousYear: () => void;
}
const styles = (theme: Theme) =>
  createStyles({
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

const MONTHS = [
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

const generateYears = (relativeTo: Date, count: number) => {
  const half = Math.floor(count / 2);
  return Array(count)
    .fill(0)
    .map((y, i) => relativeTo.getFullYear() - half + i); // TODO: make part of the state
};

const Header: React.FunctionComponent<HeaderProps> = ({
  date,
  classes,
  setDate,
  marker,
  nextDisabled,
  prevDisabled,
  nextDisabledYear,
  prevDisabledYear,
  onClickNext,
  onClickPrevious,
  onClickNextYear,
  onClickPreviousYear
}) => {
  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDate(setMonth(date, parseInt(event.target.value)));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDate(setYear(date, parseInt(event.target.value)));
  };

  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className={classes.root}
    >
      <Grid item className={classes.iconContainer}>
        {/* {marker.toString() == "Symbol(firstMonth)" &&  */}
        <React.Fragment>
          <IconButton
            className={classes.icon}
            disabled={prevDisabled}
            onClick={onClickPreviousYear}
          >
            <ArrowLeft color={prevDisabledYear ? "disabled" : "action"} />
          </IconButton>
          <IconButton
            className={classes.icon}
            disabled={prevDisabled}
            onClick={onClickPrevious}
          >
            <ChevronLeft color={prevDisabled ? "disabled" : "action"} />
          </IconButton>
        </React.Fragment>
        {/* // } */}
      </Grid>
      <Grid item>
        <Typography>
          {MONTHS[getMonth(date)]} {getYear(date)}
        </Typography>
        {/* {getMonth(date)}
				{MONTHS.filter((month, idx) => {
					return (idx == date)
				})} */}
        {/* <Select
					value={getMonth(date)}
					onChange={handleMonthChange}
					MenuProps={{ disablePortal: true }}>
					{MONTHS.map((month, idx) => (
						<MenuItem key={month} value={idx}>
							{month}
						</MenuItem>
					))}
				</Select> */}
      </Grid>

      <Grid item className={classes.iconContainer}>
        {/* {marker.toString() == "Symbol(secondMonth)" && */}
        <React.Fragment>
          <IconButton
            className={classes.icon}
            disabled={nextDisabled}
            onClick={onClickNext}
          >
            <ChevronRight color={nextDisabled ? "disabled" : "action"} />
          </IconButton>
          <IconButton
            className={classes.icon}
            disabled={nextDisabled}
            onClick={onClickNextYear}
          >
            <ArrowRight color={nextDisabledYear ? "disabled" : "action"} />
          </IconButton>
        </React.Fragment>
        {/* } */}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Header);
