<template>
    <div ref="contextMenu" class="context-menu-container">
        <slot></slot>
        <div
            v-if="showMenu"
            class="context-menu"
            :style="{
                left: x + 'px',
                top: y + 'px',
            }"
        >
            <div
                v-for="item in items"
                :key="item.key"
                class="context-menu-item"
                @click="handleItemClick(item)"
            >
                {{ item.label }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ItemType } from '@/App.vue';
import { ref, Ref } from 'vue';
import useContextMenu from '@/hooks/useContextMent';

const contextMenu = ref<HTMLDivElement | null>(null);
const emit = defineEmits(['select']);
const { showMenu, x, y } = useContextMenu(contextMenu as Ref<HTMLDivElement>);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
    items: {
        type: Array as () => ItemType[],
        default: () => [],
    },
});

const handleItemClick = (item: ItemType) => {
    emit('select', item);
    showMenu.value = false;
};
</script>

<style scoped>
.context-menu-container {
    width: 100%;
    height: 100%;
    position: relative;
}
.context-menu {
    position: fixed;
    z-index: 9999;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.context-menu-item {
    padding: 8px 16px;
    cursor: pointer;
}

.context-menu-item:hover {
    background-color: #f5f5f5;
}
</style>
