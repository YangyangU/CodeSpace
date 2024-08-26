<template>
    <div class="menu-container">
        <ContextMenu :items="items" @contextmenu="choose1 = $event.label">
            <h3>{{ choose1 }}</h3>
        </ContextMenu>
    </div>
    <!-- <div class="menu-container teal">
            <ContextMenu :items="items2" @contextmenu="choose2 = $event.label">
                <h3>{{ choose2 }}</h3>
            </ContextMenu>
            <div class="sub-menu-container">
                <ContextMenu
                    :items="items3"
                    @contextmenu="choose3 = $event.label"
                >
                    {{ choose3 }}
                </ContextMenu>
            </div>
        </div> -->
</template>

<script setup lang="ts">
import ContextMenu from './components/ContextMenu.vue';
import { ref } from 'vue';

const choose1 = ref('');
// const choose2 = ref('');
// const choose3 = ref('');

export interface ItemType {
    label: string;
    key: string;
}

const baseItems: ItemType[] = [
    { label: 'Copy', key: 'copy' },
    { label: 'Cut', key: 'cut' },
    { label: 'Paste', key: 'paste' },
    { label: 'Delete', key: 'delete' },
];

const items = baseItems.concat({ label: 'Undo', key: 'undo' });
// const items2 = [...baseItems];
// const items3 = [...baseItems];
</script>

<style scoped>
.menu-container {
    width: 100vw;
    height: 100vh;
    background-color: pink;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.teal {
    background-color: teal;
}

.sub-menu-container {
    width: 70%;
    height: 40%;
    background-color: sandybrown;
    border-radius: 10px;
    margin: 180px 0 0 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
