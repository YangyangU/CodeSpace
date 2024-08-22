<template>
    <ContextMenu :items="items" :visible="visible" />
</template>

<script setup lang="ts">
import ContextMenu from './components/ContextMenu.vue';
import { ref } from 'vue';

interface ItemType {
    label: string;
    key: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children?: ItemType[];
    type?: 'group';
}

const items: ItemType[] = [
    {
        label: 'Copy',
        key: 'copy',
    },
    {
        label: 'Cut',
        key: 'cut',
    },
    {
        label: 'Paste',
        key: 'paste',
    },
    {
        label: 'Delete',
        key: 'delete',
    },
    {
        label: 'Undo',
        key: 'undo',
    },
];

const visible = ref<boolean>(false);
</script>

<style scoped></style>
