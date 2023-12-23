//给banner接口建立一个接口
// 第一个接口 ：3000/banner   -> store -> components
// 第二个接口 ：类java等强类型的接口定义 vuex ts类型检测
// 模型接口
export interface Banner{//约束数据满足接口
    pic:string
}
// 跟vuex一道，把数据严谨在严谨
let banner:Banner = {
    pic: string;
    target : number;
}