//UI需求和后端的接口
export interface Personalized{
    id:number;
    type:number;
    name:string;
    copywriter:string;
    picUrl:string;
    canDislike:boolean;
    trackNumberUpdateTime:number;
    playCount:number;
    trackCount:number;
    highQuality:boolean;
    alg:string;
}