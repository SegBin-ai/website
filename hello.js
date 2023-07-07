function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const pageContent = document.querySelector('.page-content');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
  
    sidebar.classList.toggle('shrunk');
    pageContent.classList.toggle('shrunk');
    sidebarToggle.classList.toggle('active');
  }
  