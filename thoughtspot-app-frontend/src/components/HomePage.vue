<template>
  <div class="dashboard-page screen">
    <!-- Header with Menu -->
    <NavbarComponent 
      @toggle_sidebar="toggleSidebar"
    />

    <!-- Sidebar with Icons -->
    <div class="main-container screen">
      <aside class="sidebar" :class="{ collapsed: !isSidebarOpen }">
        <nav>
          <ul class="menu-list">
            <GeneralMenuItem
              :id="'general'"
              :isSidebarOpen="isSidebarOpen"
              :showSubMenu="showSubMenu"
              @toggle-submenu="toggleSubMenu"
              @handle-click-outside="handleClickOutside"
              @setHeading="setHeading"
            />
            <AdOpsMenuItem
              :id="'adops'"
              :isSidebarOpen="isSidebarOpen"
              :showSubMenu="showSubMenu"
              @toggle-submenu="toggleSubMenu"
              @handle-click-outside="handleClickOutside"
              @setHeading="setHeading"
            />
            <YieldMenuItem
              :id="'yield'"
              :isSidebarOpen="isSidebarOpen"
              :showSubMenu="showSubMenu"
              @toggle-submenu="toggleSubMenu"
              @handle-click-outside="handleClickOutside"
              @setHeading="setHeading"
            />
          </ul>
        </nav>
      </aside>

      <div id="embed-title">
        <h2>{{ heading }}</h2>
        <div id="embed-container"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from '@/components/extras/NavbarComponent.vue';
import GeneralMenuItem from '@/components/GeneralDepartment.vue';
import AdOpsMenuItem from '@/components/AdOpsDepartment.vue';
import YieldMenuItem from '@/components/YieldDepartment.vue';
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
      heading: 'General Summary',
    };
  },
  components: { NavbarComponent, GeneralMenuItem, AdOpsMenuItem, YieldMenuItem },
  methods: {
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
    setHeading(heading) {
      this.heading = heading;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
}
</script>