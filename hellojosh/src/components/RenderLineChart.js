import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import {
    LineChart,
    Line,
    Text,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

const data = [
    { day: "mon", hours: 0 },
    { day: "tue", hours: 1.5 },
    { day: "wed", hours: 2.5 },
    { day: "thu", hours: 1 },
    { day: "fri", hours: 4 },
    { day: "sat", hours: 3 },
    { day: "sun", hours: 2 },
];

const CustomizedLabel = ({ x, y, value }) => {
    const style = css`
       border: 2px solid red;


    `
    return (
        <Text css={style}
            x={x}
            y={y}
            dy={-10}
            fill={"black"}
            fontSize={16}
            textAnchor="middle"
        >
            {value}
        </Text>
    );
};

const RenderLineChart = () => {
    return (
        <LineChart
            width={450}
            height={270}
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
        >
            <XAxis dataKey="day" axisLine={true} thickLine={true} />
            <YAxis
                type="number"
                ticks={[0, 1, 2, 3, 4, 5]}
                tickCount={6}
                axisLine={false}
                tickLine={false}
            />

            <Tooltip />

            <CartesianGrid vertical={false} />
            <Line
                type="monotone"
                strokeWidth="2"
                dataKey="hours"
                stroke="black"
                dot={{ fill: "black" }}
                activeDot={{ r: 8 }}
                label={<CustomizedLabel x={100} y={100}
                value={data.hours} />}
            />
        </LineChart>
    );
};

export default RenderLineChart;
