"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var getDefaultRanges = function (date) { return [
    {
        label: "Today",
        startDate: date,
        endDate: date
    },
    {
        label: "This Month",
        startDate: date_fns_1.startOfMonth(date),
        endDate: date_fns_1.endOfMonth(date)
    }
]; };
exports.defaultRanges = getDefaultRanges(new Date());
//# sourceMappingURL=defaults.js.map