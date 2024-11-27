<template>
    <li id="adops" class="menu-item" @click="$emit('toggle-submenu', 'adops')" ref="adopsMenuItem">
        <a href="#" title="AdOps">
            <i class="fa-solid fa-rectangle-ad"></i>
            <span v-if="isSidebarOpen">AdOps (Beta)</span>
        </a>
        <div class="submenu" v-if="showSubMenu.adops && isSidebarOpen" @click.stop>
            <ul class="submenu-list">
                <li @click="switchDashboard('AdOps Summary')">
                    <a href="#" title="Summary">
                        Summary
                    </a>
                </li>
                <li @click="switchDashboard('Audience Segments Delivery Report')">
                    <a href="#" title="Audience Segments Delivery Report">
                        Audience Segments Delivery Report
                    </a>
                </li>
                <li @click="switchDashboard('Daily Campaign Delivery By Ad Server And Publisher')">
                    <a href="#" title="Daily Campaign Delivery By Ad Server And Publisher">
                        Daily Campaign Delivery By Ad Server And Publisher
                    </a>
                </li>
                <li @click="switchDashboard('Daily Demand Ad Server Split Report')">
                    <a href="#" title="Daily Demand Ad Server Split Report">
                        Daily Demand Ad Server Split Report
                    </a>
                </li>
                <li @click="switchDashboard('Deal Library')">
                    <a href="#" title="Deal Library">
                        Deal Library
                    </a>
                </li>
                <li @click="switchDashboard('Deal and Line Item Performance Report')">
                    <a href="#" title="Deal and Line Item Performance Report">
                        Deal and Line Item Performance Report
                    </a>
                </li>
                <li @click="switchDashboard('Delivery Metrics')">
                    <a href="#" title="Delivery Metrics">
                        Delivery Metrics
                    </a>
                </li>
                <li @click="switchDashboard('FW Summary Report')">
                    <a href="#" title="FW Summary Report">
                        FW Summary Report
                    </a>
                </li>
                <li @click="switchDashboard('Late Submission Status')">
                    <a href="#" title="Late Submission Status">
                        Late Submission Status
                    </a>
                </li>
                <li @click="switchDashboard('Launch Status')">
                    <a href="#" title="Launch Status">
                        Launch Status
                    </a>
                </li>
                <li @click="switchDashboard('MH Summary Report')">
                    <a href="#" title="MH Summary Report">
                        MH Summary Report
                    </a>
                </li>
                <li @click="switchDashboard('Octillion - Creatives Dashboard')">
                    <a href="#" title="Octillion - Creatives Dashboard">
                        Octillion - Creatives Dashboard
                    </a>
                </li>
                <li @click="switchDashboard('Octillion - Executive Dashboard')">
                    <a href="#" title="Octillion - Executive Dashboard">
                        Octillion - Executive Dashboard
                    </a>
                </li>                
                <li @click="switchDashboard('Octillion - Phase 1')">
                    <a href="#" title="Octillion - Phase 1">
                        Octillion - Phase 1
                    </a>
                </li>
                <li @click="switchDashboard('Octillion - Phase 2')">
                    <a href="#" title="Octillion - Phase 2">
                        Octillion - Phase 2
                    </a>
                </li>
                <li @click="switchDashboard('Octillion - Publisher Creep Report')">
                    <a href="#" title="Octillion - Publisher Creep Report">
                        Octillion - Publisher Creep Report
                    </a>
                </li>
                <li @click="switchDashboard('Octillion - Targeting Dashboard')">
                    <a href="#" title="Octillion - Targeting Dashboard">
                        Octillion - Targeting Dashboard
                    </a>
                </li>
                <li @click="switchDashboard('Oneview - Booked')">
                    <a href="#" title="Oneview - Booked">
                        Oneview - Booked
                    </a>
                </li>
                <li @click="switchDashboard('Political Dashboard')">
                    <a href="#" title="Political Dashboard">
                        Political Dashboard
                    </a>
                </li>
                <li @click="switchDashboard('Political Delivery Outside Geo')">
                    <a href="#" title="Political Delivery Outside Geo">
                        Political Delivery Outside Geo
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
                <li @click="switchDashboard('Submission Status')">
                    <a href="#" title="Submission Status">
                        Submission Status
                    </a>
                </li>
                <li @click="switchDashboard('Submission Status Outside of SLA')">
                    <a href="#" title="Submission Status Outside of SLA">
                        Submission Status Outside of SLA
                    </a>
                </li>
                <li @click="switchDashboard('Traffic Status')">
                    <a href="#" title="Traffic Status">
                        Traffic Status
                    </a>
                </li>
                <li @click="switchDashboard('Traffic Status - Galileo')">
                    <a href="#" title="Traffic Status - Galileo">
                        Traffic Status - Galileo
                    </a>
                </li>
                <li @click="switchDashboard('Unmapped MRM & MPP EndPoint Alert')">
                    <a href="#" title="Unmapped MRM & MPP EndPoint Alert">
                        Unmapped MRM & MPP EndPoint Alert
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
            if (type === "AdOps Summary") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if (remoteURL.includes("test") || remoteURL.includes("localhost")) {
                    this.liveboardId = "f2cd5983-c7e9-4521-a4ff-5bb7b06ac118";
                }
                else {
                    this.liveboardId = "299201f4-ec68-40cd-9c2f-050708fce370";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Audience Segments Delivery Report') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = 'b75d0eef-eed3-4b7f-acad-3c31d004b79b';
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Daily Campaign Delivery By Ad Server And Publisher') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = 'e8074190-663c-42b5-ae6f-9be71894541a';
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
            if (type === 'Deal Library') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = 'aad1fed1-b64f-4349-a4ff-5b928b083114';
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Deal and Line Item Performance Report') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = '893276c0-d591-400c-9a9f-7956686a4f90';
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Delivery Metrics") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if(remoteURL.includes("test")||remoteURL.includes("localhost")) {
                    this.liveboardId = "f5c84c6d-0053-4809-be37-a61e9f9b97fe";
                }
                else {
                    this.liveboardId = "9e077844-8bc9-4ba8-8c72-c87d93ad77c7";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "FW Summary Report") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if(remoteURL.includes("test")||remoteURL.includes("localhost")) {
                    this.liveboardId = "b63e2d73-532c-4918-af78-f1ae6e632297";
                }
                else {
                    this.liveboardId = "dc8072ff-8c8f-4c5e-9938-52bf78be79f5";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Late Submission Status") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if(remoteURL.includes("test")||remoteURL.includes("localhost")) {
                    this.liveboardId = "06f8af22-6c16-4563-80e4-850c1a11bf6a";
                }
                else {
                    this.liveboardId = "050c6e91-0382-42f0-8347-ec15bfd13a55";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Launch Status") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if(remoteURL.includes("test")||remoteURL.includes("localhost")) {
                    this.liveboardId = "93af1a5e-7425-4c70-b192-cbf55f0d7514";
                }
                else {
                    this.liveboardId = "b4380427-9e32-4d67-9d02-c6e4e16dcb0f";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "MH Summary Report") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if(remoteURL.includes("test")||remoteURL.includes("localhost")) {
                    this.liveboardId = "1a4e2a65-5c88-4259-9e9f-e9562d328f3d";
                }
                else {
                    this.liveboardId = "ee77a144-1a12-47b4-a61b-94fc1aca9e59";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Octillion - Creatives Dashboard') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "e2a3d741-b65c-45e6-b729-5a96093d88d6";
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
            if (type === 'Octillion - Phase 1') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "a463ff88-8e9d-4c88-983a-5414211a3c83";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Octillion - Phase 2') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "8eaab933-18f1-4173-aa04-d629cad58728";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Octillion - Publisher Creep Report') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "0751c30f-746d-4875-93ee-df142276c6fd";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Octillion - Targeting Dashboard') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "0073a7f2-a5d1-4ed6-8c03-29be61e5361a";
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
            if (type === 'Political Dashboard') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "2884cd02-4dd9-4fae-96b4-0c89d16237e6";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Political Delivery Outside Geo') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "8e6edae1-9f34-401f-a847-2bfc900969c2";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Proactive Spike Report') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "04859d91-2f55-47dc-9f7d-8aa4d51c786a";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Provider Delivery') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "c53f98e9-c4c1-495c-a259-52fa55c6e011";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Submission Status") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if(remoteURL.includes("test")||remoteURL.includes("localhost")) {
                    this.liveboardId = "4dc3bebd-4ab4-46eb-be6b-a458d7fa0cf5";
                }
                else {
                    this.liveboardId = "16676ed1-1144-4713-a20a-9af0bffc1371";
                }
                this.$emit('setHeading', type);
            }
            if (type === "Submission Status Outside of SLA") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if(remoteURL.includes("test")||remoteURL.includes("localhost")) {
                    this.liveboardId = "b443b3bf-4e17-4a6e-a7b0-8330bb054bf3";
                }
                else {
                    this.liveboardId = "ebb09d12-2fd8-4b9d-8f08-a37464a8a147";
                }
                this.$emit('setHeading', type);
            } 
            if (type === "Traffic Status") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if(remoteURL.includes("test")||remoteURL.includes("localhost")) {
                    this.liveboardId = "379254cf-305f-42b2-a49d-9852aaae96c2";
                }
                else {
                    this.liveboardId = "c7c0ce5f-b25a-4297-8280-90a26d6c03d5";
                }
                this.$emit('setHeading', type);
            }
            if (type === "Traffic Status - Galileo") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if(remoteURL.includes("test")||remoteURL.includes("localhost")) {
                    this.liveboardId = "f8929570-199e-451d-b7a3-b2d2f00eff7f";
                }
                else {
                    this.liveboardId = "b1837da9-5fc9-4598-8d4c-0bb7c96447af";
                }
                this.$emit('setHeading', type);
            }
            if (type === 'Unmapped MRM & MPP EndPoint Alert') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "85974ce2-64fc-48b0-a431-049dcc11fe90";
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
  