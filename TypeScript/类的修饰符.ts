class Article{
    title:string;
    content:string;
    author:string;
    constructor(title:string,content:string,author:string){
        this.title=title;
        this.content=content;
        this.author=author;
    }
    printArticle(){
        console.log(`${this.title} ${this.content} ${this.author}`);
    }
}