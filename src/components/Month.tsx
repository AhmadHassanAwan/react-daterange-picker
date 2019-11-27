import * as React from "react";
import {
	Paper,
	Grid,
	Typography,
	createStyles,
	Theme,
	WithStyles,
	withStyles,
	Divider
} from "@material-ui/core";
import { getDate, isSameMonth, isToday, format, isWithinRange } from "date-fns";
import {
	chunks,
	getDaysInMonth,
	isStartOfRange,
	isEndOfRange,
	inDateRange,
	isRangeSameDay
} from "../utils";
import Header from "./Header";
import Day from "./Day";
import { NavigationAction, DateRange } from "../types";

const WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const styles = (theme: Theme) =>
	createStyles({
		root: {
			// width: 290
			
			width: "calc(50% - 0.5px)",
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
			border: `1px solid ${theme.palette.action.disabledBackground}`,
			width: "100%",
			margin: "5px 25px",
			height: 1
		}
	});

interface MonthProps extends WithStyles<typeof styles> {
	value: Date;
	marker: symbol;
	dateRange: DateRange;
	hoverDay: any;
	minDate: Date;
	maxDate: Date;
	navState: [boolean, boolean];
	navStateYear: [boolean, boolean];
	setValue: (date: Date) => void;
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

const Month: React.FunctionComponent<MonthProps> = props => {
	const {
		classes,
		helpers,
		handlers,
		value: date,
		dateRange,
		marker,
		setValue: setDate,
		minDate,
		maxDate,
		hoverDay
	} = props;

	const [back, forward] = props.navState;
	const [yearBack, yearForward] = props.navStateYear;
	return (
			<Grid container className={classes.root}>
				<Header
					marker={marker}
					date={date}
					setDate={setDate}
					nextDisabled={!forward}
					prevDisabled={!back}
					nextDisabledYear={!yearForward}
					prevDisabledYear={!yearBack}
					onClickPrevious={() =>
						handlers.onMonthNavigate(marker, NavigationAction.Previous)
					}
					onClickPreviousYear={() =>
						handlers.onMonthNavigate(marker, -12)
					}
					onClickNextYear={() =>
						handlers.onMonthNavigate(marker, 12)
					}
					onClickNext={() => handlers.onMonthNavigate(marker, NavigationAction.Next)}
				/>
				<div className={classes.divider}></div>

				<Grid
					item
					container
					direction="row"
					justify="space-between"
					className={classes.weekDaysContainer}>
					{WEEK_DAYS.map(day => (
						<Typography color="textSecondary" key={day} variant="caption">
							{day}
						</Typography>
					))}
				</Grid>
				<div className={classes.divider}></div>

				<Grid
					item
					container
					direction="column"
					justify="space-between"
					className={classes.daysContainer}>
					{chunks(getDaysInMonth(date), 7).map((week, idx) => (
						<Grid key={idx} container direction="row" justify="center">
							{week.map(day => {
								const isStart = isStartOfRange(dateRange, day);
								const isSecondWithinRange = isStartOfRange(dateRange, new Date(day.getTime() - 24*60*60*1000));
								const isSecondLastWithinRange = isEndOfRange(dateRange, new Date(day.getTime() + 24*60*60*1000));
								const isEnd = isEndOfRange(dateRange, day);
								const isRangeOneDay = isRangeSameDay(dateRange);
								const highlighted =
									inDateRange(dateRange, day) || helpers.inHoverRange(day);
								const isInvalid = (!dateRange.endDate && highlighted && !(isStart && !isRangeOneDay) && helpers.isInvalidRange(hoverDay, dateRange.startDate));
								return (
									<Day
										key={format(day, "MM-DD-YYYY")}
										filled={isStart || isEnd}
										outlined={isToday(day)}
										highlighted={highlighted && !isRangeOneDay}
										disabled={
											!isSameMonth(date, day) ||
											!isWithinRange(day, minDate, maxDate)
										}
										isInvalid={isInvalid}
										secondWithinRange={isSecondWithinRange && highlighted && !isRangeOneDay}
										secondLastWithinRange={isSecondLastWithinRange && highlighted && !isRangeOneDay}
										startOfRange={isStart && !isRangeOneDay}
										endOfRange={isEnd && !isRangeOneDay}
										onClick={() => handlers.onDayClick(day)}
										onHover={() => {handlers.onDayHover(day)}}
										value={getDate(day)}
									/>
								);
							})}
						</Grid>
					))}
				</Grid>
			</Grid>
	);
};

export default withStyles(styles)(Month);
