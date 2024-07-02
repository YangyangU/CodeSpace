let canvas: HTMLCanvasElement | null = document.querySelector('canvas');
let ctx = (canvas as HTMLCanvasElement).getContext('2d');
(canvas as HTMLCanvasElement).width = screen.availWidth;
(canvas as HTMLCanvasElement).height = screen.availHeight;

let str:string = '5201314'
let Arr = Array(Math.ceil((canvas as HTMLCanvasElement).width / 10)).fill(0)
console.log(Arr);

const rain = ()=>{
    (ctx as CanvasRenderingContext2D).fillStyle = 'rgba(0,0,0,0.05)';
    (ctx as CanvasRenderingContext2D).fillRect(0,0,(canvas as HTMLCanvasElement).width,(canvas as HTMLCanvasElement).height);
    (ctx as CanvasRenderingContext2D).fillStyle = '#0f0';
    Arr.forEach((item,index)=>{
        (ctx as CanvasRenderingContext2D).fillText(str[Math.floor(Math.random()*str.length)],index*10,item+10)
        Arr[index] = item > (canvas as HTMLCanvasElement).height || item > 10000 * Math.random() ? 0 : item+10
    })
}

setInterval(rain,100)