<template>
    <li id="executive" class="menu-item" @click="$emit('toggle-submenu', 'executive')" ref="executiveMenuItem">
        <a href="#" title="Executive">
            <i class="fa-solid fa-briefcase"></i>
            <span v-if="isSidebarOpen">Executive</span>
        </a>
        <div class="submenu" v-if="showSubMenu.executive && isSidebarOpen" @click.stop>
            <ul class="submenu-list">
                <li @click="switchDashboard('Octillion - Executive Dashboard')">
                    <a href="#" title="Octillion - Executive Dashboard">
                        Octillion - Executive Dashboard
                    </a>
                </li>
                <li @click="switchDashboard('Octillion - Executive Report for Delivery KPI')">
                    <a href="#" title="Octillion - Executive Report for Delivery KPI">
                        Octillion - Executive Report for Delivery KPI                   
                    </a>
                </li>
                <li @click="switchDashboard('Octillion - Hulu Report')">
                    <a href="#" title="Octillion - Hulu Report">
                        Octillion - Hulu Report
                    </a>
                </li>
                <li @click="switchDashboard('Octillion - Rejection Reasons')">
                    <a href="#" title="Octillion - Rejection Reasons">
                        Octillion - Rejection Reasons
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
            if (type === 'Octillion - Executive Dashboard') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "7fe57641-aa7f-4152-a8b1-5a3e04029f0e";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Octillion - Executive Report for Delivery KPI') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "c0c69131-6d1e-4c1f-afb2-8ddd7550d154";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Octillion - Hulu Report') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "3dadd6f0-99b5-487a-b9b6-8d57820f5b69";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Octillion - Rejection Reasons') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "7eaf9da6-eb06-443a-beb3-bd437e8703e3";
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
  