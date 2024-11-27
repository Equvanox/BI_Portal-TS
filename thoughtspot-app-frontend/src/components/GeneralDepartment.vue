<template>
    <li id="general" class="menu-item" @click="$emit('toggle-submenu', 'general')" ref="generalMenuItem">
        <a href="#" title="General">
            <i class="fa-solid fa-folder-tree"></i>
            <span v-if="isSidebarOpen">General (Beta)</span>
        </a>
        <div class="submenu" v-if="showSubMenu.general && isSidebarOpen" @click.stop>
            <ul class="submenu-list">
                <li @click="switchDashboard('General Summary')">
                    <a href="#" title="Summary">
                        Summary
                    </a>
                </li>
                <li @click="switchDashboard('Bookings Dashboard')">
                    <a href="#" title="Bookings Dashboard">
                        Bookings Dashboard                   
                    </a>
                </li>
                <li @click="switchDashboard('FW Provider Delivery Daily')">
                    <a href="#" title="FW Provider Delivery Daily">
                        FW Provider Delivery
                    </a>
                </li>
                <li @click="switchDashboard('Health Check Dashboard')">
                    <a href="#" title="Health Check Dashboard">
                        Health Check Dashboard
                    </a>
                </li>
                <li @click="switchDashboard('MH Providers Daily Delivery Diff%')">
                    <a href="#" title="MH Providers Daily Delivery Diff%">
                        MH Providers Daily Delivery Diff%
                    </a>
                </li>
                <li @click="switchDashboard('Political Dashboard')">
                    <a href="#" title="Political Dashboard">
                        Political Dashboard
                    </a>
                </li>
                <li @click="switchDashboard('Publisher Dashboard')">
                    <a href="#" title="Publisher Dashboard">
                        Publisher Dashboard
                    </a>
                </li>
            </ul>
        </div>
    </li>
</template>
  
<script>
import { nextTick } from 'vue';
import '@/styles/HomePageStyle.css';
import { init, Action, LiveboardEmbed, AuthType } from '@thoughtspot/visual-embed-sdk';
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
        switchDashboard(type) {
            this.activeDashboard = type;
            if (this.liveboardEmbed) {
                this.liveboardEmbed.detach();
                this.liveboardEmbed = null;
            }
            if (type === 'General Summary') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = 'ef5b2449-05c0-4dd9-9494-70d93946c377';
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Bookings Dashboard') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = '5a16fd22-3c8c-4889-b755-996256276bd8';
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "FW Provider Delivery Daily") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if(remoteURL.includes("test")||remoteURL.includes("localhost")) {
                    this.liveboardId = "49fd6bbe-c5de-4647-aa60-4fd5254ed0d9";
                }
                else {
                    this.liveboardId = "168708f1-735a-45d9-b5de-745ff53cf330";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Health Check Dashboard") {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "9dfb8021-6434-44e6-b997-4f09c0225098";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "MH Providers Daily Delivery Diff%") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if (remoteURL.includes("test") || remoteURL.includes("localhost")) {
                    this.liveboardId = "21003e02-28b0-4602-8c2d-6ecd46e0fbbf";
                }
                else {
                    this.liveboardId = "2e447650-9b96-4b0b-a1e7-747739ed6bc8";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Political Dashboard") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if (remoteURL.includes("test")) {
                    this.liveboardId = "a76d8032-849d-457e-8b9f-77c8656a2d0c";
                }
                else {
                    this.liveboardId = "8c4efd21-2d16-4de7-b356-0e28f26bb3d9";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Publisher Dashboard') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "87acc5ca-7d56-40ae-8c9a-bd9ed46cb0cd";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
        },
        async renderLiveboard() {
            await nextTick();
            const embed = new LiveboardEmbed('#embed-container', {
                frameParams: {},
                liveboardId: this.liveboardId,
                hiddenActions: [Action.EditTML, Action.Schedule, Action.ExportTML, Action.UpdateTML,
                Action.RenameModalTitleDescription, Action.MakeACopy, Action.LiveboardInfo, Action.Present, 
                Action.SchedulesList, Action.Edit, Action.Share ,Action.CopyLink, Action.Pin, Action.Edit, Action.RenameModalTitleDescription,Action.Share,"requestVerification",Action.AddToFavorites],
            });
            embed.render();
        }
    },
    async mounted() {
        document.addEventListener('click', this.handleClick);
        try {
                init({
                    thoughtSpotHost: 'https://tegna.thoughtspot.cloud/', 
                    authType: AuthType.None,
                    getAuthToken: async () => {
                    return localStorage.getItem('token');
                    },
                });
                this.$emit('setHeading', this.heading);
                this.renderLiveboard();
                // if (this.activeDashboard === 'General Summary' || this.activeDashboard === 'Bookings Dashboard' || this.activeDashboard === null) {
                //     this.renderLiveboard();
                // }
        } catch (error) {
            console.error('Failed to fetch data', error);
        }
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClick);
    }
};
</script>
  