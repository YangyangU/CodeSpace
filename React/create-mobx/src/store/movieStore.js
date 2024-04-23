import { makeAutoObservable,runInAction } from 'mobx'
import axios from 'axios'

class MovieStore {
    movieList = []
    constructor() {
        makeAutoObservable(this)
    }
    async setMovieList() {
        const res = await axios.get('https://mock.presstime.cn/mock/65a9154bb02591272cc21c5a/movie/movieList')
        console.log(res.data.movieList);
        this.handle(res.data.movieList)
        // runInAction(()=>{ //解决警告
        //     this.movieList = res.data.movieList
        // })
    }
    handle(arr){
        this.movieList = arr
    }
}

const movieStore = new MovieStore();

export default movieStore;