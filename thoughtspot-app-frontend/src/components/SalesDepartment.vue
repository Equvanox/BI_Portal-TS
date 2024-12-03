<template>
    <li id="finance" class="menu-item" @click="$emit('toggle-submenu', 'finance')" ref="financeMenuItem">
        <a href="#" title="Finance">
            <i class="fa-solid fa-coins"></i>
            <span v-if="isSidebarOpen">Sales/Finance(Beta)</span>
        </a>
        <div class="submenu" v-if="showSubMenu.finance && isSidebarOpen" @click.stop>
            <ul class="submenu-list">
                <li @click="switchDashboard('Booked Summary')">
                    <a href="#" title="Booked Summary">
                        Booked Summary
                    </a>
                </li>
                <li @click="switchDashboard('Booked National')">
                    <a href="#" title="Booked National">
                        Booked National
                    </a>
                </li>
                <li @click="switchDashboard('Budget National')">
                    <a href="#" title="Budget National">
                        Budget National
                    </a>
                </li>
                <li @click="switchDashboard('Booked Partners')">
                    <a href="#" title="Booked Partners">
                        Booked Partners
                    </a>
                </li>
                <li @click="switchDashboard('Sales Intelligence')">
                    <a href="#" title="Sales Intelligence">
                        Sales Intelligence
                    </a>
                </li>
                <li @click="switchDashboard('Supply Demand')">
                    <a href="#" title="Supply Demand">
                        Supply Demand
                    </a>
                </li>
                <li @click="switchDashboard('Executive Summary')">
                    <a href="#" title="Executive Summary">
                        Executive Summary
                    </a>
                </li>
                <li @click="switchDashboard('Octillion - Executive Dashboard')">
                    <a href="#" title="Octillion - Executive Dashboard">
                        Octillion - Executive Dashboard
                    </a>
                </li>
                <li @click="switchDashboard('Premion Sales')">
                    <a href="#" title="Premion Sales">
                        Premion Sales
                    </a>
                </li>
                <li @click="switchDashboard('Premion Political Summary')">
                    <a href="#" title="Premion Political Summary">
                        Premion Political Summary
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
            if (type === "Booked Summary") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if (remoteURL.includes("test")) {
                    this.liveboardId = "83416871-518b-44a9-8c69-6150e2fce25e";
                }
                else {
                    this.liveboardId = "cc9f452f-7aac-4a38-acaa-325422bb68da";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Booked National") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if (remoteURL.includes("test") || remoteURL.includes("localhost")) {
                    this.liveboardId = "a91ae616-aa6a-4267-a0a1-e3ce0166686c";
                }
                else {
                    this.liveboardId = "316a26cd-2778-4d38-adde-0403f820135e";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Budget National") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if (remoteURL.includes("test") || remoteURL.includes("localhost")) {
                    this.liveboardId = "bfc28b63-f702-41e2-ab52-b7b238540b7e";
                }
                else {
                    this.liveboardId = "2cbb1874-32e7-41fb-ac33-cea03ed82b15";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Booked Partners") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if (remoteURL.includes("test") || remoteURL.includes("localhost")) {
                    this.liveboardId = "c86b36c8-f30b-462a-9828-03175a310a00";
                }
                else {
                    this.liveboardId = "7d7bbc3d-1926-4350-9b17-bc163dafd135";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Sales Intelligence - Net") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if (remoteURL.includes("test") || remoteURL.includes("localhost")) {
                    this.liveboardId = "fce5146b-4a49-48a7-85bc-6c1566d7a924";
                }
                else {
                    this.liveboardId = "e72a7ffc-111e-45c3-a040-d2bde11c8d7c";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Executive Summary') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "aeb46b0e-829b-414a-a0fc-e8ec04e7e0aa";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Octillion - Executive Dashboard') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "7fe57641-aa7f-4152-a8b1-5a3e04029f0e";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Premion Sales') {
                this.heading = type;
                const iframeHtml = `<iframe class="responsive-iframe" title="Premion Sales Dashboard" src="https://app.powerbi.com/reportEmbed?reportId=0e89f944-8005-4c25-ada1-68052461f30c&autoAuth=true&ctid=ccd8a79b-7268-413b-8789-71f8b6f4c0df" frameborder="0" allowFullScreen="true"></iframe>`;
                const container = document.getElementById('embed-container');
                if (container) {
                    container.innerHTML = iframeHtml;
                }
                this.$emit('setHeading', type);
            }
            if ( type === "Premion Political Summary") {
                this.heading = type;
                const iframeHtml = `<iframe class="responsive-iframe" title="Premion Political Summary" src="https://tegna-my.sharepoint.com/personal/sai_chandan_tegna_com/_layouts/15/Doc.aspx?sourcedoc={eeb18f4a-c8d1-417c-9990-3efe2666bf66}&action=embedview&wdAllowInteractivity=False&wdInConfigurator=False&wdInConfigurator=False&wdDownloadButton=True"></iframe>`;
                const container = document.getElementById('embed-container');
                if (container) {
                    container.innerHTML = iframeHtml;
                }
                this.$emit('setHeading', type);
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
  