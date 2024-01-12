<template>
    <el-popover popper-style="max-width:auto;padding:0;" v-model:visible="showSearchView">
        <template #reference>
            <el-input placeholder="搜索音乐、MV、歌单" :prefix-icon="Search" clearable @input="searchInput" @focus="showSearchView=true" @foucsout="showSearchView=false" v-model="searchKeyWord"></el-input>
        </template>
        <div class="h-96">
            <el-scrollbar>
                <!-- 只要有滚动就用el-scrollabr -->
                <div class="pd-2.5">
                    <div v-if="showHot">
                        <div class="pt-2 pb-1.5 px-2.5">热门搜索</div>
                        <div class="">
                            <div v-for="(item,index) in searchHot" :key="item.searchWord" class="py-2.5 px-2.5 hover-text cursor-pointer flex justify-between items-center text-xs" @click="hotClick(item.searchWord)">
                                <div>
                                    <span class="mr-1">{{ index + 1 }}</span>
                                    <span>{{ item.searchWord }}</span>
                                </div>
                                <div class="text-red-300 text-xs">{{ item.score.numberFormat() }}</div>
                            </div>
                        </div>
                    </div>
                    <SearchSuggest v-else />
                </div>
            </el-scrollbar>
        </div>
    </el-popover>
</template>

<script lang="ts" setup>
import SearchSuggest from './SearchSuggest.vue'
import type {SearchHotDetail} from '@/models/search'//为了写ts 类型文件
import {getSearchHotDetail} from '@/api/index'
import { onMounted,ref } from 'vue'
import {Search} from '@icon-park/vue-next'
import {useSearchStore} from '@/stores/search'
import {storeToRefs} from 'pinia' //用这个才能在组件中生效
import {debounce} from 'lodash'

//基本上组件里没什么状态
const {showSearchView,searchKeyWord,showHot} = storeToRefs(useSearchStore())
// const searchStore = useSearchStore()
const {suggest} = useSearchStore()
const searchInput = debounce(()=>{
    suggest()
},500)
const searchHot = ref<SearchHotDetail[]>([])
onMounted(async ()=>{//用户不能看白的
    searchHot.value = await getSearchHotDetail()
})
const hotClick = (text:string)=>{
    searchKeyWord.value = text;//将点击的内容给到输入框
    suggest()//搜索
    showSearchView.value = true//展示搜索列表
}

</script>

<style scoped>

</style>