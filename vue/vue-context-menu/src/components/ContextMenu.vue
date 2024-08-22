<template>
    <a-menu
        v-if="visible"
        id="dddddd"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        style="width: 256px"
        mode="inline"
        :items="props.items"
        theme="dark"
        @click="handleClick"
    ></a-menu>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue';
import type { MenuProps } from 'ant-design-vue';

const selectedKeys = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);

const handleClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
};

watch(openKeys, (val) => {
    console.log('openKeys', val);
});

const props = defineProps({
    items: {
        type: Array,
        default: () => [],
    },
    visible: {
        type: Boolean,
        default: false,
    },
});
</script>
