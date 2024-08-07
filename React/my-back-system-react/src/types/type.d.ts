interface tableType {
    name?: string;
    todayBuy?: number;
    monthBuy?: number;
    totalBuy?: number;
    xData?: string[];
    series?: seriesType[];
}
interface countType {
    name: string;
    value: number;
    icon: string;
    color: string;
}
interface orderType {
    date?: string[];
    data?: Array<{ [key: string]: number }>;
    xData?: string[];
    series?: seriesType[];
}

interface userType {
    xData?: string[];
    date?: string;
    new?: number;
    active?: number;
    series?: seriesType[];
    id?: string;
    name?: string;
    age?: number;
    addr?: string | Array<string>;
    birth?: string | Date;
}
type videoType = {
    name?: string;
    value?: number;
    series?: seriesType[];
};

interface dataType {
    data: {
        tableData?: tableType;
        orderData: orderType;
        userData: userType;
        videoData: videoType;
        countData?: countType[];
    };
}
interface seriesType {
    name?: string;
    data?: number[];
    type?: string;
}

type EChartsOption = echarts.EChartsOption;

interface ChartData {
    xData?: string[];
    series: seriesType[];
}

interface DataProps {
    style: React.CSSProperties;
    chartData: ChartData;
    isAxisChart?: boolean;
}

type modalType = 'edit' | 'add';

type TagType = {
    path: string;
    name: string;
    label: string;
};

type MenuType = {
    path: string;
    name?: string;
    label: string;
    icon: string;
    url?: string;
    children?: Array<MenuType>;
};
