import {defineStore} from 'pinia';
import { getSearchSuggest } from '@/api';
import type { SearchSuggest } from '@/models/search';

export const useSearchStore = defineStore('search',{
    state:()=>{
        return {
            showSearchView:false,
            searchKeyWord:'',
            suggestData:{} as SearchSuggest,//匹配的歌手，歌曲，专辑
        }
    },
    getters:{
        showHot:state=>state.searchKeyWord===''
    },
    actions:{
        async suggest(){
            //ref 不一样 而是proxy
            this.suggestData = await getSearchSuggest(this.searchKeyWord)
        }
    }
})