<template>
    <li id="accountmanagement" class="menu-item" @click="$emit('toggle-submenu', 'accountmanagement')" ref="accountmanagementMenuItem">
        <a href="#" title="Account Management">
            <i class="fa-solid fa-users-gear"></i>
            <span v-if="isSidebarOpen">Account Management</span>
        </a>
        <div class="submenu" v-if="showSubMenu.accountmanagement && isSidebarOpen" @click.stop>
            <ul class="submenu-list">
                <li @click="switchDashboard('Summary - Account Management')">
                    <a href="#" title="Summary">
                       Summary 
                    </a>
                </li>
                <li @click="switchDashboard('CS Ops Dashboard')">
                    <a href="#" title="CS Ops Dashboard">
                        CS Ops Dashboard                   
                    </a>
                </li>
                <li @click="switchDashboard('FW Mapping Report')">
                    <a href="#" title="FW Mapping Report">
                        FW Mapping Report
                    </a>
                </li>
                <li @click="switchDashboard('iSpot RE Reporting V.1')">
                    <a href="#" title="iSpot RE Reporting V.1">
                        iSpot RE Reporting V.1
                    </a>
                </li>
                <li @click="switchDashboard('MH Gray Attribution Dashboard')">
                    <a href="#" title="MH Gray Attribution Dashboard">
                        MH Gray Attribution Dashboard
                    </a>
                </li>
                <li @click="switchDashboard('MH Mapping Report')">
                    <a href="#" title="MH Mapping Report">
                        MH Mapping Report
                    </a>
                </li>
                <li @click="switchDashboard('Political Dashboard')">
                    <a href="#" title="Political Dashboard">
                        Political Dashboard
                    </a>
                </li>
                <li @click="switchDashboard('POLK - Tier2 - v3')">
                    <a href="#" title="POLK - Tier2 - v3">
                        POLK - Tier2 - v3
                    </a>
                </li>
                <li @click="switchDashboard('Proactive Spike Report')">
                    <a href="#" title="Proactive Spike Report">
                        Proactive Spike Report
                    </a>
                </li>
                <li @click="switchDashboard('Provider Delivery')">
                    <a href="#" title="Provider Delivery">
                        Provider Delivery
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
            if (type === "Summary - Account Management") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if(remoteURL.includes("test")||remoteURL.includes("localhost")) {
                    this.liveboardId = "b98d930a-c120-43c7-b887-d802d33a1480";
                }
                else {
                    this.liveboardId = "8b62585d-a756-489f-8b43-126cde521f57";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "CS Ops Dashboard") {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "44b62364-a815-4046-9fe2-e306f94ff3f1";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "FW Mapping Report") {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "be1052ed-1c9c-4c3e-8429-3abcb671760b";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "iSpot RE Reporting V.1") {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "11b3d9c2-f06d-4ac0-8698-c7520c82c41b";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "MH Gray Attribution Dashboard") {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "dead66a6-d887-4842-93b4-9e014516fdab";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "MH Mapping Report") {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "a623e692-079a-4054-b904-63ec34fbddbb";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Political Dashboard") {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "2884cd02-4dd9-4fae-96b4-0c89d16237e6";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "POLK - Tier2 - v3") {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "f0ae8e39-9b4c-44e9-a078-f6611772e8be";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Proactive Spike Report") {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "04859d91-2f55-47dc-9f7d-8aa4d51c786a";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Provider Delivery") {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "c53f98e9-c4c1-495c-a259-52fa55c6e011";
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
  