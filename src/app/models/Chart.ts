import { ChartType, Column } from 'angular-google-charts';

export interface Chart {
    title?: string,
    type?: ChartType,
    columnNames?: Column[],
    data?: any[][],
    options?: {}
};