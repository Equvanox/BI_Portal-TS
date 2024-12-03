<template>
    <li id="product" class="menu-item" @click="$emit('toggle-submenu', 'product')" ref="productMenuItem">
        <a href="#" title="Product">
            <i class="fa-solid fa-cubes"></i>
            <span v-if="isSidebarOpen">Product (Beta)</span>
        </a>
        <div class="submenu" v-if="showSubMenu.product && isSidebarOpen" @click.stop>
            <ul class="submenu-list">
                <li @click="switchDashboard('POLK - Tier2 - v3')">
                    <a href="#" title="POLK - Tier2 - v3">
                        POLK - Tier2 - v3
                    </a>
                </li>
                <li @click="switchDashboard('iSpot Web Conversion Reporting - V1.0')">
                    <a href="#" title="iSpot Web Conversion Reporting - V1.0">
                        iSpot Web Conversion Reporting - V1.0                   
                    </a>
                </li>
                <li @click="switchDashboard('iSpot RE Reporting V.1 - Incremental, LLV, Total')">
                    <a href="#" title="iSpot RE Reporting V.1 - Incremental, LLV, Total">
                        iSpot RE Reporting V.1 - Incremental, LLV, Total
                    </a>
                </li>
                <li @click="switchDashboard('iSpot RE Reporting V.1')">
                    <a href="#" title="iSpot RE Reporting V.1">
                        iSpot RE Reporting V.1
                    </a>
                </li>
                <li @click="switchDashboard('Sales Conversion - v1.0')">
                    <a href="#" title="Sales Conversion - v1.0">
                        Sales Conversion - v1.0
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
            heading: 'Summary - General',
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
            if (type === 'POLK - Tier2 - v3') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "f0ae8e39-9b4c-44e9-a078-f6611772e8be";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'iSpot Web Conversion Reporting - V1.0') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "ddb5c57a-af90-474d-877f-3c7a91daa561";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'iSpot RE Reporting V.1 - Incremental, LLV, Total') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "7a9112ca-c1d6-4076-944e-940acbfdd921";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'iSpot RE Reporting V.1') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "11b3d9c2-f06d-4ac0-8698-c7520c82c41b";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Sales Conversion - v1.0') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "70bdd0c8-bf45-4fa1-a107-4f86386d95c2";
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
  