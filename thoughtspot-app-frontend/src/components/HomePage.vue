<template>
  <div class="dashboard-page screen">
    <NavbarComponent 
      @toggle_sidebar="toggleSidebar"
      @oneviewflag="oneviewflag"
    />

    <div class="main-container screen">
      <aside class="sidebar" :class="{ collapsed: !isSidebarOpen }">
        <nav>
          <ul class="menu-list">
            <GeneralDepartment
              :id="'general'"
              :isSidebarOpen="isSidebarOpen"
              :showSubMenu="showSubMenu"
              @toggle-submenu="toggleSubMenu"
              @handle-click-outside="handleClickOutside"
              @setHeading="setHeading"
            />
            <AdOpsDepartment
              :id="'adops'"
              :isSidebarOpen="isSidebarOpen"
              :showSubMenu="showSubMenu"
              @toggle-submenu="toggleSubMenu"
              @handle-click-outside="handleClickOutside"
              @setHeading="setHeading"
            />
            <YieldDepartment
              :id="'yield'"
              :isSidebarOpen="isSidebarOpen"
              :showSubMenu="showSubMenu"
              @toggle-submenu="toggleSubMenu"
              @handle-click-outside="handleClickOutside"
              @setHeading="setHeading"
            />
            <FinanceDepartment
              :id="'finance'"
              :isSidebarOpen="isSidebarOpen"
              :showSubMenu="showSubMenu"
              @toggle-submenu="toggleSubMenu"
              @handle-click-outside="handleClickOutside"
              @setHeading="setHeading"
            />
            <PlanningDepartment
              :id="'planning'"
              :isSidebarOpen="isSidebarOpen"
              :showSubMenu="showSubMenu"
              @toggle-submenu="toggleSubMenu"
              @handle-click-outside="handleClickOutside"
              @setHeading="setHeading"
            />
            <AccountManagementDepartment
              :id="'accountmanagement'"
              :isSidebarOpen="isSidebarOpen"
              :showSubMenu="showSubMenu"
              @toggle-submenu="toggleSubMenu"
              @handle-click-outside="handleClickOutside"
              @setHeading="setHeading"
            />
            <ProductDepartment
              :id="'product'"
              :isSidebarOpen="isSidebarOpen"
              :showSubMenu="showSubMenu"
              @toggle-submenu="toggleSubMenu"
              @handle-click-outside="handleClickOutside"
              @setHeading="setHeading"
            />
            <ExecutiveDepartment
              :id="'executive'"
              :isSidebarOpen="isSidebarOpen"
              :showSubMenu="showSubMenu"
              @toggle-submenu="toggleSubMenu"
              @handle-click-outside="handleClickOutside"
              @setHeading="setHeading"
            />
            <SettingsPage 
              :id="'settings'"
              :isSidebarOpen="isSidebarOpen"
              :showSubMenu="showSubMenu"
              @toggle-submenu="toggleSubMenu"
              @handle-click-outside="handleClickOutside"
              @setHeading="setHeading"
            />
            <li id="logout" class="menu-item" @click="signOut()" ref="logoutMenuItem">
              <a href="" title="Logout">
                  <i class="fa-solid fa-right-from-bracket"></i>
                  <span v-if="isSidebarOpen">Signout</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <div id="embed-title">
        <h2 v-if=" flag === false ">{{ heading }}</h2>
        <div id="embed-container"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from '@/components/extras/NavbarComponent.vue';
import GeneralDepartment from '@/components/GeneralDepartment.vue';
import AdOpsDepartment from '@/components/AdOpsDepartment.vue';
import YieldDepartment from '@/components/YieldDepartment.vue';
import FinanceDepartment from '@/components/SalesDepartment.vue';
import PlanningDepartment from '@/components/PlanningDepartment.vue';
import AccountManagementDepartment from '@/components/AccountManagementDepartment.vue';
import ProductDepartment from '@/components/ProductDepartment.vue';
import ExecutiveDepartment from '@/components/ExecutiveDepartment.vue';
import SettingsPage from '@/components/extras/SettingsComponent.vue';
import '@/styles/HomePageStyle.css';
export default {
  data() {
    return {
      showSubMenu: {
        general: false,
        bookings: false,
        sales: false
      },
      isSidebarOpen: false,
      dashboardType : 'General Summary',
      liveboardId: 'ef5b2449-05c0-4dd9-9494-70d93946c377',
      heading: 'Summary - General',
      flag: false
    };
  },
  components: { 
    NavbarComponent,
    GeneralDepartment,
    AdOpsDepartment,
    YieldDepartment,
    FinanceDepartment,
    PlanningDepartment,
    AccountManagementDepartment,
    ProductDepartment,
    ExecutiveDepartment,
    SettingsPage
  },
  methods: {
    oneviewflag() {
      this.flag = true;
    },
    toggleSubMenu(id) {
      this.showSubMenu[id] = !this.showSubMenu[id];
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    signOut() {
      this.$router.push('/');
    },
    handleClickOutside(event, id) {
      const menuItem = this.$refs[`${id}MenuItem`];
      const submenu = this.$refs[`${id}Submenu`];
      if (menuItem && submenu && !menuItem.contains(event.target) && !submenu.contains(event.target)) {
        this.$set(this.showSubMenu, id, false);
      }
    },
    setHeading(heading, kpi) { 
      this.flag = false;
      this.heading = heading;
      this.kpi = kpi
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
}
</script>