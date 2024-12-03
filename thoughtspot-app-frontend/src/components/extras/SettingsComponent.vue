<template>
    <li id="settings" class="menu-item" @click="$emit('toggle-submenu', 'settings')" ref="settingsMenuItem">
        <a href="#" title="Settings">
            <i class="fa-solid fa-gear"></i>
            <span v-if="isSidebarOpen">Settings</span>
        </a>
    </li>
</template>
  
<script>
import '@/styles/HomePageStyle.css';
export default {
    data() {
        return {
            dashboardType : 'General Summary',
            liveboardId: 'ef5b2449-05c0-4dd9-9494-70d93946c377',
            heading: 'General Summary',
        }
    },
    props: {
        isSidebarOpen: {
            type: Boolean,
            required: true,
        },
        showSubMenu: {
            type: Object,
            required: true,
        }
    },  
    methods: {
        handleClick(event) {
            this.$emit('handle-click-outside', event, this.id);
        },
    },
    async mounted() {
        document.addEventListener('click', this.handleClick);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClick);
    }
};
</script>
  