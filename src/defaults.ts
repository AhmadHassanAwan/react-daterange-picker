import { DefinedRange } from "./types";

import {
  addDays,
  startOfWeek,
  endOfWeek,
  addWeeks,
  startOfMonth,
  endOfMonth,
  addMonths
} from "date-fns";

const getDefaultRanges = (date: Date): DefinedRange[] => [
  {
    label: "Today",
    startDate: date,
    endDate: date
  },
  {
    label: "This Month",
    startDate: startOfMonth(date),
    endDate: endOfMonth(date)
  }
];

export const defaultRanges = getDefaultRanges(new Date());
