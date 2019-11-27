import React from "react";
import {
  Paper,
  Grid,
  Typography,
  Divider,
  createStyles,
  WithStyles,
  Theme,
  withStyles
} from "@material-ui/core";
import {
  format,
  differenceInCalendarMonths,
  differenceInCalendarDays,
  differenceInCalendarYears
} from "date-fns";
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";
import Month from "./Month";
import DefinedRanges from "./DefinedRanges";
import { DateRange, DefinedRange, Setter, NavigationAction } from "../types";
import { MARKERS } from "..";

const styles = (theme: Theme) =>
  createStyles({
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
      borderLeft: `1px solid ${theme.palette.action.hover}`
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

interface MenuProps extends WithStyles<typeof styles> {
  dateRange: DateRange;
  ranges: DefinedRange[];
  hoverDay: any;
  minDate: Date;
  maxDate: Date;
  firstMonth: Date;
  secondMonth: Date;
  setFirstMonth: Setter<Date>;
  setSecondMonth: Setter<Date>;
  setDateRange: Setter<DateRange>;
  helpers: {
    inHoverRange: (day: Date) => boolean;
    isInvalidRange: (endDate: any, startDate: any) => boolean;
  };
  handlers: {
    onDayClick: (day: Date) => void;
    onDayHover: (day: Date) => void;
    onMonthNavigate: (marker: symbol, action: NavigationAction) => void;
  };
}

const Menu: React.FunctionComponent<MenuProps> = props => {
  const {
    classes,
    ranges,
    dateRange,
    hoverDay,
    minDate,
    maxDate,
    firstMonth,
    setFirstMonth,
    secondMonth,
    setSecondMonth,
    setDateRange,
    helpers,
    handlers
  } = props;
  const { startDate, endDate } = dateRange;
  const canNavigateCloser =
    differenceInCalendarMonths(secondMonth, firstMonth) >= 2;
  const canNavigateCloserYear =
    differenceInCalendarMonths(secondMonth, firstMonth) > 12;
  const commonProps = {
    hoverDay,
    dateRange,
    minDate,
    maxDate,
    helpers,
    handlers
  };
  return (
    <Paper elevation={1} square>
      <Grid container direction="row">
        <Grid>
          {/* <Grid container className={classes.header} alignItems="center">
            <Grid item className={classes.headerItem}>
              Start Date
            </Grid>
            <Grid item className={classes.headerItem}>
              End Date
            </Grid>
          </Grid>
          <Divider /> */}
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Month
              {...commonProps}
              value={firstMonth}
              setValue={setFirstMonth}
              navState={[true, canNavigateCloser]}
              navStateYear={[true, canNavigateCloserYear]}
              marker={MARKERS.FIRST_MONTH}
            />
            <div className={classes.divider} />
            <Month
              {...commonProps}
              value={secondMonth}
              setValue={setSecondMonth}
              navState={[canNavigateCloser, true]}
              navStateYear={[canNavigateCloserYear, true]}
              marker={MARKERS.SECOND_MONTH}
            />
          </Grid>
          <Divider />
          <Grid>
            {/* <DefinedRanges
						selectedRange={dateRange}
						ranges={ranges}
						setRange={setDateRange}
					/> */}
            <Typography className={classes.p}>
              <span className={classes.daysLabel}>Days: </span>
              <span>
                {dateRange.endDate && dateRange.startDate
                  ? differenceInCalendarDays(
                      dateRange.endDate,
                      dateRange.startDate
                    )
                  : 0}
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(styles)(Menu);
