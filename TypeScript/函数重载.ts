function hello(name: string) :string
function hello(age: number) :string
function hello(value: string | number) :string{
    if(typeof value === 'string'){
        return `hello ${value}`
    }else if(typeof value === 'number'){
        return `hello ${value}`
    }else{
        return '非法格式'
    }
}


hello('阳阳羊')
hello(18)
// hello(true)