<template>
  <header class="header">
      <div class="hamburger-menu" @click="$emit('toggle_sidebar')">
          <i class="fas fa-bars"></i>
      </div>
      <div class="logo">
          <img src="@/assets/logo_dashboard.jpg" alt="Logo" />
      </div>

      <nav class="menu">
          <ul>
          <div style="margin-right: 13px;">
              <li><a href="#" title="Oneview"><i class="fas fa-search"></i><span>OneView</span></a></li>
          </div>
          <div style="margin-right: 13px;">
              <li><a href="#" title="Answers"><i class="fa-solid fa-book"></i><span>Answers</span></a></li>
          </div>
          <div style="margin-right: 13px;">
              <li><a href="#" title="Liveboards"><i class="fas fa-tachometer-alt"></i><span>LiveBoards</span></a></li>
          </div>
          <div style="margin-right: 13px;">
              <li><a href="#" title="Sage"><i class="fa-solid fa-eye"></i><span>Sage(Alpha)</span></a></li>
          </div>
          <!-- Help Button -->
          <div style="margin-right: 5px; margin-left: auto;">
              <li><a href="#" title="Help"><i class="fas fa-question-circle"></i><span>Help</span></a></li>
          </div>
          </ul>
      </nav>
  </header>
</template>

<script>
import '@/styles/HomePageStyle.css';
export default {};
</script>