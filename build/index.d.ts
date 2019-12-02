import * as React from "react";
import { WithStyles, Theme } from "@material-ui/core";
import { DateRange, DefinedRange } from "./types";
declare type Marker = symbol;
export declare const MARKERS: {
    [key: string]: Marker;
};
declare const styles: (theme: Theme) => Record<"header" | "divider" | "headerItem", import("@material-ui/core/styles/withStyles").CSSProperties>;
interface DateRangePickerProps extends WithStyles<typeof styles> {
    open: boolean;
    initialDateRange?: DateRange;
    definedRanges?: DefinedRange[];
    minDate?: Date | string;
    maxDate?: Date | string;
    onChange: (dateRange: DateRange) => void;
}
export { DateRange, DefinedRange } from "./types";
export declare const DateRangePicker: React.ComponentType<Pick<React.PropsWithChildren<DateRangePickerProps>, "open" | "children" | "onChange" | "minDate" | "maxDate" | "initialDateRange" | "definedRanges"> & import("@material-ui/core").StyledComponentProps<"header" | "divider" | "headerItem">>;
