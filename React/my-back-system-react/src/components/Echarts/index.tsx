import React, { useRef, useEffect } from 'react';
import { axisOption, normalOption } from './data';
import * as echarts from 'echarts';

const View: React.FC<DataProps> = ({
    style,
    chartData,
    isAxisChart = true,
}) => {
    const echartRef = useRef<HTMLDivElement>(null);
    const echartObj = useRef<echarts.EChartsType | null>(null);
    useEffect(() => {
        let options: EChartsOption;
        echartObj.current = echarts.init(echartRef.current);
        if (isAxisChart) {
            if (!axisOption.xAxis) return;
            axisOption.xAxis.data = chartData.xData as never[];
            axisOption.series = chartData.series as never[];
            options = axisOption as EChartsOption;
        } else {
            normalOption.series = chartData.series as never[];
            options = normalOption as EChartsOption;
        }
        echartObj.current.setOption(options);
    }, [chartData, isAxisChart]);
    return <div style={style} ref={echartRef}></div>;
};

export default View;
