import http from './http';
import type { SearchHotDetail } from '@/models/search';
export async function getSearchHotDetail() {
    const {data} = await http.get<{data:SearchHotDetail[]}>('/search/hot/detail');
    return data
}

export async function getSearchSuggest(keywords: string){
    const {result} = await http.get('/search/suggest', {keywords:keywords});
    return result
}