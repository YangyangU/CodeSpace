import { onMounted, onUnmounted, ref, Ref } from 'vue';

export default function useContextMenu(menuRef: Ref<HTMLElement | null>) {
    const showMenu = ref(false);
    const x = ref(0);
    const y = ref(0);

    const handleMenu = (e: MouseEvent) => {
        e.preventDefault();
        if (menuRef.value) {
            // 计算菜单的宽高
            const menuWidth = 82;
            const menuHeight = 200;
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            let menuX = e.clientX;
            let menuY = e.clientY;

            console.log(menuX, menuY);

            if (menuX + menuWidth > viewportWidth) {
                menuX = viewportWidth - menuWidth;
            }
            if (menuY + menuHeight > viewportHeight) {
                menuY = viewportHeight - menuHeight;
            }

            menuY = Math.max(menuY, 0);
            showMenu.value = true;
            x.value = menuX;
            y.value = menuY;
        }
    };

    const closeMenu = () => {
        showMenu.value = false;
    };

    onMounted(() => {
        const div = menuRef.value;
        console.log(menuRef);
        if (div) {
            div.addEventListener('contextmenu', handleMenu);
        }
        window.addEventListener('click', closeMenu, true);
        window.addEventListener('contextmenu', closeMenu, true);
    });
    onUnmounted(() => {
        const div = menuRef.value;
        if (div) {
            div.removeEventListener('contextmenu', handleMenu);
        }
        window.removeEventListener('click', closeMenu, true);
        window.removeEventListener('contextmenu', closeMenu, true);
    });
    return {
        x,
        y,
        showMenu,
    };
}
