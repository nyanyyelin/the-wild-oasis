// import styled from 'styled-components';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import DashboardBox from './DashboardBox';
import { eachDayOfInterval, subDays, format, isSameDay } from 'date-fns';

// const fakeData = [
//   { label: 'Jan 09', totalSales: 480, extrasSales: 20 },
//   { label: 'Jan 10', totalSales: 580, extrasSales: 100 },
//   { label: 'Jan 11', totalSales: 550, extrasSales: 150 },
//   { label: 'Jan 12', totalSales: 600, extrasSales: 50 },
//   { label: 'Jan 13', totalSales: 700, extrasSales: 150 },
//   { label: 'Jan 14', totalSales: 800, extrasSales: 150 },
//   { label: 'Jan 15', totalSales: 700, extrasSales: 200 },
//   { label: 'Jan 16', totalSales: 650, extrasSales: 200 },
//   { label: 'Jan 17', totalSales: 600, extrasSales: 300 },
//   { label: 'Jan 18', totalSales: 550, extrasSales: 100 },
//   { label: 'Jan 19', totalSales: 700, extrasSales: 100 },
//   { label: 'Jan 20', totalSales: 800, extrasSales: 200 },
//   { label: 'Jan 21', totalSales: 700, extrasSales: 100 },
//   { label: 'Jan 22', totalSales: 810, extrasSales: 50 },
//   { label: 'Jan 23', totalSales: 950, extrasSales: 250 },
//   { label: 'Jan 24', totalSales: 970, extrasSales: 100 },
//   { label: 'Jan 25', totalSales: 900, extrasSales: 200 },
//   { label: 'Jan 26', totalSales: 950, extrasSales: 300 },
//   { label: 'Jan 27', totalSales: 850, extrasSales: 200 },
//   { label: 'Jan 28', totalSales: 900, extrasSales: 100 },
//   { label: 'Jan 29', totalSales: 800, extrasSales: 300 },
//   { label: 'Jan 30', totalSales: 950, extrasSales: 200 },
//   { label: 'Jan 31', totalSales: 1100, extrasSales: 300 },
//   { label: 'Feb 01', totalSales: 1200, extrasSales: 400 },
//   { label: 'Feb 02', totalSales: 1250, extrasSales: 300 },
//   { label: 'Feb 03', totalSales: 1400, extrasSales: 450 },
//   { label: 'Feb 04', totalSales: 1500, extrasSales: 500 },
//   { label: 'Feb 05', totalSales: 1400, extrasSales: 600 },
//   { label: 'Feb 06', totalSales: 1450, extrasSales: 400 },
// ];

const SalesChart = ({ bookings, numDays }) => {
  const isDarkMode = false;

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1), // "start" and "end" is inclusive
    end: new Date(),
  });

  // formatting all the dates
  const data = allDates.map((date) => {
    return {
      label: format(date, 'MMM dd'),
      totalSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, curr) => acc + curr.totalPrice, 0),
      extrasSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, curr) => acc + curr.extrasPrice, 0),
    };
  });

  const colors = isDarkMode
    ? {
        totalSales: { stroke: '#4f46e5', fill: '#4f46e5' },
        extrasSales: { stroke: '#22c55e', fill: '#22c55e' },
        text: '#e5e7eb',
        background: '#18212f',
      }
    : {
        totalSales: { stroke: '#4f46e5', fill: '#c7d2fe' },
        extrasSales: { stroke: '#16a34a', fill: '#dcfce7' },
        text: '#374151',
        background: '#fff',
      };

  return (
    <div className="col-span-full text-base">
      <DashboardBox>
        <h2 className="text-xl">
          Sales from {format(allDates.at(0), 'MMM dd yyyy')} &mdash;{' '}
          {format(allDates.at(-1), 'MMM dd yyyy')}{' '}
        </h2>
        <ResponsiveContainer height={400} width="100%">
          <AreaChart data={data}>
            <XAxis
              dataKey="label"
              tick={{ fill: colors.text }}
              tickLine={{ stroke: colors.text }}
            />
            <YAxis
              tickFormatter={(value) => `$${value}`}
              tick={{ fill: colors.text }}
              tickLine={{ stroke: colors.text }}
            />
            <CartesianGrid strokeDasharray={4} />
            <Tooltip contentStyle={{ background: colors.background }} />
            <Area
              dataKey="totalSales"
              type="monotone"
              stroke={colors.totalSales.stroke}
              fill={colors.totalSales.fill}
              strokeWidth={2}
              name="Total Sales"
              unit="$"
            />
            <Area
              dataKey="extrasSales"
              type="monotone"
              stroke={colors.extrasSales.stroke}
              fill={colors.extrasSales.fill}
              strokeWidth={2}
              name="Extra Sales"
              unit="$"
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
    </div>
  );
};

export default SalesChart;
