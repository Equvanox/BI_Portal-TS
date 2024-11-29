<template>
    <li id="planning" class="menu-item" @click="$emit('toggle-submenu', 'planning')" ref="planningMenuItem">
        <a href="#" title="Planning">
            <i class="fa-solid fa-diagram-project"></i>
            <span v-if="isSidebarOpen">Planning (Beta)</span>
        </a>
        <div class="submenu" v-if="showSubMenu.planning && isSidebarOpen" @click.stop>
            <ul class="submenu-list">
                <li @click="switchDashboard('Planning Dashboard')">
                    <a href="#" title="Planning Dashboard">
                       Planning Dashboard 
                    </a>
                </li>
                <li @click="switchDashboard('Margin Analysis')">
                    <a href="#" title="Margin Analysis">
                        Margin Analysis                   
                    </a>
                </li>
                <li @click="switchDashboard('Political This Year')">
                    <a href="#" title="Political This Year">
                        Political This Year
                    </a>
                </li>
                <li @click="switchDashboard('Oneview - Booked')">
                    <a href="#" title="Oneview - Booked">
                        Oneview - Booked
                    </a>
                </li>
                <li @click="switchDashboard('Salesperson Week Over Week Volume RFPID')">
                    <a href="#" title="Salesperson Week Over Week Volume RFPID">
                        Salesperson Week Over Week Volume RFPID
                    </a>
                </li>
                <li @click="switchDashboard('Week Over Week Volume RFPID Gray')">
                    <a href="#" title="Week Over Week Volume RFPID Gray">
                        Week Over Week Volume RFPID Gray
                    </a>
                </li>
                <li @click="switchDashboard('Daily Demand Ad Server Split Report')">
                    <a href="#" title="Daily Demand Ad Server Split Report">
                        Daily Demand Ad Server Split Report
                    </a>
                </li>
                <li @click="switchDashboard('Planning Insights Dashboard')">
                    <a href="#" title="Planning Insights Dashboard">
                        Planning Insights Dashboard
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
            if (type === "Planning Dashboard") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if(remoteURL.includes("test")||remoteURL.includes("localhost")) {
                    this.liveboardId = "28a7048d-35ed-422d-953f-f50189de74d9";
                }
                else {
                    this.liveboardId = "2c879f63-e75b-4887-baa3-05b6da79ca64";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Margin Analysis") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if(remoteURL.includes("test")||remoteURL.includes("localhost")) {
                    this.liveboardId = "2f4fb1fe-cf3c-475e-967d-d037139e6f83";
                }
                else {
                    this.liveboardId = "53d426bb-64ba-4ff1-b638-73787dac69b1";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Political This Year") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if(remoteURL.includes("test")||remoteURL.includes("localhost")) {
                    this.liveboardId = "af555550-ef06-4db3-8c9c-9f0d0d6b9a67";
                }
                else {
                    this.liveboardId = "d01ac469-422e-453d-8b61-46322ba3d262";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Oneview - Booked") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if(remoteURL.includes("test")||remoteURL.includes("localhost")) {
                    this.liveboardId = "fc2d930e-3230-417d-87f1-b9f982c83109";
                }
                else {
                    this.liveboardId = "53ca0ca8-b030-4f56-8e93-18f33c53743f";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Salesperson Week Over Week Volume RFPID") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if(remoteURL.includes("test")||remoteURL.includes("localhost")) {
                    this.liveboardId = "6802d730-2fff-4f1c-a7c6-1b0e4ed9d4fd";
                }
                else {
                    this.liveboardId = "222feb7b-bcec-48cb-8689-3c5aa792bc68";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Week Over Week Volume RFPID Gray") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if(remoteURL.includes("test")||remoteURL.includes("localhost")) {
                    this.liveboardId = "7136886f-3a19-40ba-b8ad-8d1812a6ea44";
                }
                else {
                    this.liveboardId = "376c732a-adfa-454e-b53d-3f83871c3e6b";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Daily Demand Ad Server Split Report") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if(remoteURL.includes("test")||remoteURL.includes("localhost")) {
                    this.liveboardId = "205a0d75-700c-4b26-b0e7-d6ffed5b6824";
                }
                else {
                    this.liveboardId = "fd8e3f63-19b2-4ab5-a2bd-5544cf06083a";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Planning Insights Dashboard") {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "3d1013dd-bdb0-4b3c-a47f-734102a4961e";
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
  