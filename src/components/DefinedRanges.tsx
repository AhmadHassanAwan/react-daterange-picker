import React from "react";
import { List, ListItem, ListItemText, createStyles, Theme, withStyles, WithStyles } from "@material-ui/core";
import { DefinedRange, DateRange } from "../types";
import { isSameDay } from "date-fns";
import { combine } from "../utils"

interface DefinedRangesProps extends WithStyles<typeof styles>{
	setRange: (range: DateRange) => void;
	selectedRange: DateRange;
	ranges: DefinedRange[];
};

const styles = (theme: Theme) =>
	createStyles({
		selectedRange: {
			border: "1px solid " + theme.palette.primary.dark + " !important",
			backgroundColor: theme.palette.primary.light,
			borderRadius: 3
		},
		listItem:{
			width: "auto",
			border: "1px solid transparent",
			padding: 0,
			marginRight: 5
		}
	});

const isSameRange = (first: DateRange, second: DateRange) => {
	const { startDate: fStart, endDate: fEnd } = first;
	const { startDate: sStart, endDate: sEnd } = second;
	if (fStart && sStart && fEnd && sEnd) {
		return isSameDay(fStart, sStart) && isSameDay(fEnd, sEnd);
	}
	return false;
};

const DefinedRanges: React.FunctionComponent<DefinedRangesProps> = (props) => {
	const {
		classes
	} = props;
	return (
		<List style={{display: "inline-flex", padding: "8px 20px", textAlign: "center"}}>
			{props.ranges.map((range, idx) => (
				<ListItem className={combine(classes.listItem, isSameRange(range, props.selectedRange) && classes.selectedRange)} button key={idx} onClick={() => props.setRange(range)}>
					<ListItemText
						primaryTypographyProps={{
							variant: "body2",
							style: {
								padding: "0px 8px",
								fontWeight: isSameRange(range, props.selectedRange)
									? "bold"
									: "normal"
							}
						}}>
						{range.label}
					</ListItemText>
				</ListItem>
			))}
		</List>
	);
};
export default withStyles(styles)(DefinedRanges);