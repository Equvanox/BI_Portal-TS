<template>
    <li id="yield" class="menu-item" @click="$emit('toggle-submenu', 'yield')" ref="yieldMenuItem">
        <a href="#" title="Yield">
            <i class="fa-solid fa-chart-simple"></i>
            <span v-if="isSidebarOpen">Yield</span>
        </a>
        <div class="submenu" v-if="showSubMenu.yield && isSidebarOpen" @click.stop>
            <ul class="submenu-list">
                <li @click="switchDashboard('Yield Summary')">
                    <a href="#" title="Summary">
                        Summary
                    </a>
                </li>
                <li @click="switchDashboard('Adserver Change Log')">
                    <a href="#" title="Adserver Change Log">
                        Adserver Change Log
                    </a>
                </li>
                <li @click="switchDashboard('Allocations By Person')">
                    <a href="#" title="Allocations By Person">
                        Allocations By Person
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
                <li @click="switchDashboard('FW Campaign Report')">
                    <a href="#" title="FW Campaign Report">
                        FW Campaign Report
                    </a>
                </li>
                <li @click="switchDashboard('FW Site Section Report')">
                    <a href="#" title="FW Site Section Report">
                        FW Site Section Report
                    </a>
                </li>
                <li @click="switchDashboard('FW Video Report')">
                    <a href="#" title="FW Video Report">
                        FW Video Report
                    </a>
                </li>
                <li @click="switchDashboard('MH CTV By Line Item And Pio Product')">
                    <a href="#" title="MH CTV By Line Item And Pio Product">
                        MH CTV By Line Item And Pio Product
                    </a>
                </li>                
                <li @click="switchDashboard('MH Path Name')">
                    <a href="#" title="MH Path Name">
                        MH Path Name
                    </a>
                </li>
                <li @click="switchDashboard('MH VCR By Line Item And Pio Product')">
                    <a href="#" title="MH VCR By Line Item And Pio Product">
                        MH VCR By Line Item And Pio Product
                    </a>
                </li>
                <li @click="switchDashboard('New Programmatic Deal And Inventory Reporting')">
                    <a href="#" title="New Programmatic Deal And Inventory Reporting">
                        New Programmatic Deal And Inventory Reporting
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
                <li @click="switchDashboard('Octillion - Rejection Reasons')">
                    <a href="#" title="Octillion - Rejection Reasons">
                        Octillion - Rejection Reasons
                    </a>
                </li>
                <li @click="switchDashboard('Product Delivery')">
                    <a href="#" title="Product Delivery">
                        Product Delivery
                    </a>
                </li>
                <li @click="switchDashboard('Pub Del Report Summary')">
                    <a href="#" title="Pub Del Report Summary">
                        Pub Del Report Summary
                    </a>
                </li>
                <li @click="switchDashboard('Publisher Delivery PSO FW (This Month)')">
                    <a href="#" title="Publisher Delivery PSO FW (This Month)">
                        Publisher Delivery PSO FW (This Month)
                    </a>
                </li>
                <li @click="switchDashboard('Publisher Delivery Report')">
                    <a href="#" title="Publisher Delivery Report">
                        Publisher Delivery Report
                    </a>
                </li>
                <li @click="switchDashboard('Publisher Indexing')">
                    <a href="#" title="Publisher Indexing">
                        Publisher Indexing
                    </a>
                </li>
                <li @click="switchDashboard('Target Market Report')">
                    <a href="#" title="Target Market Report">
                        Target Market Report
                    </a>
                </li>
                <li @click="switchDashboard('VCR 2023 Dashboard')">
                    <a href="#" title="VCR 2023 Dashboard">
                        VCR 2023 Dashboard
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
            if (type === "Yield Summary") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if (remoteURL.includes("test") || remoteURL.includes("localhost")) {
                    this.liveboardId = "821eaaa5-40d4-4b35-952f-b8d0b567ceef";
                }
                else {
                    this.liveboardId = "c8cee8a5-796e-4ae5-8238-6fff224ec523";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Adserver Change Log') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "57a23488-99a2-4f5a-9f10-7720c49d8f13";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Allocations By Person") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if(remoteURL.includes("test")||remoteURL.includes("localhost")) {
                    this.liveboardId = "a1318620-245e-47bd-911d-dc10fb2a0eba";
                }
                else {
                    this.liveboardId = "6a06fa7b-5d39-4478-90ad-d03368a0be65";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Audience Segments Delivery Report') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "b75d0eef-eed3-4b7f-acad-3c31d004b79b";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Daily Campaign Delivery By Ad Server And Publisher') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "e8074190-663c-42b5-ae6f-9be71894541a";
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
                this.liveboardId = "893276c0-d591-400c-9a9f-7956686a4f90";
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
            if (type === 'FW Campaign Report') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "5aad37cd-3ae9-42c9-95f3-f7c6c6f311f4";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'FW Site Section Report') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "ed832d9a-cbb1-414e-92a1-264168400b6e";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'FW Video Report') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "c8eb5091-50b0-4399-96a5-e05cda32b0e4";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'MH CTV By Line Item And Pio Product') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "558d4147-b5cd-48aa-bc59-6d0bb9ec6451";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'MH Path Name') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "99512a8f-40ae-4411-86f2-99187670ca31";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'MH VCR By Line Item And Pio Product') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "c69f91a5-876c-4b7d-8e69-103ccce3d6a0";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'New Programmatic Deal And Inventory Reporting') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "26c63872-5242-4d59-a30e-8195db0b2f55";
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
            if (type === 'Octillion - Rejection Reasons') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "7eaf9da6-eb06-443a-beb3-bd437e8703e3";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Product Delivery") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if(remoteURL.includes("test")||remoteURL.includes("localhost")) {
                    this.liveboardId = "75e64704-9234-4d9c-802c-6b578a2f116f";
                }
                else {
                    this.liveboardId = "cff489c5-1323-4fea-8272-09eeb02110ef";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Pub Del Report Summary') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "10884df0-f359-48b3-9d55-4a770a87b07d";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Publisher Delivery PSO FW (This Month)') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "7b32e974-a920-4be1-930c-8983a4a2b298";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Publisher Delivery Report') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "477a8345-e236-4195-a23e-1bb65fc840dd";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'Publisher Indexing') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "1d8f4e2a-d798-4586-a01c-aa86f8acfba9";
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === "Target Market Report") {
                let remoteURL = window.location.href;
                this.dashboardType = type;
                this.heading = type;
                if(remoteURL.includes("test")||remoteURL.includes("localhost")) {
                    this.liveboardId = "4ab0b550-659e-4c14-99a0-553d2cf3d04b";
                }
                else {
                    this.liveboardId = "62df0a39-58a7-45fc-9af1-16ee0568224e";
                }
                this.$emit('setHeading', type);
                this.renderLiveboard();
            }
            if (type === 'VCR 2023 Dashboard') {
                this.dashboardType = type;
                this.heading = type;
                this.liveboardId = "43476f55-05e1-4f2b-a388-d2a78ab2856c";
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
  