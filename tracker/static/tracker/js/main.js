document.addEventListener('DOMContentLoaded', () => {
    // Mobile Sidebar Toggler
    const sidebar = document.getElementById('sidebar');
    const sidebarOpen = document.getElementById('sidebar-open');
    const sidebarClose = document.getElementById('sidebar-close');

    if (sidebarOpen && sidebar) {
        sidebarOpen.addEventListener('click', () => {
            sidebar.classList.add('open');
        });
    }

    if (sidebarClose && sidebar) {
        sidebarClose.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    }

    // Close sidebar on overlay click for mobile
    document.addEventListener('click', (event) => {
        if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('open')) {
            if (!sidebar.contains(event.target) && !sidebarOpen.contains(event.target)) {
                sidebar.classList.remove('open');
            }
        }
    });

    // Auto-dismiss alert notifications after 5 seconds
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach((alert) => {
        setTimeout(() => {
            alert.style.opacity = '0';
            alert.style.transform = 'translateY(-10px)';
            alert.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            setTimeout(() => {
                alert.remove();
            }, 300);
        }, 5000);
    });
});
