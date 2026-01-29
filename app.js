
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupThemeToggle();
    setupLogout();
    
    // Check authentication
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    const currentPage = window.location.pathname;
    
    if (!user && !currentPage.includes('index.html')) {
        window.location.href = 'index.html';
    }
});

// Initialize app
function initializeApp() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
}

// Handle Login
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Basic validation
    if (!email || !password || !role) {
        alert('Please fill in all fields');
        return;
    }

    // Store user data
    const user = {
        email: email,
        role: role,
        loginTime: new Date().toISOString()
    };

    localStorage.setItem('user', JSON.stringify(user));

    // Redirect based on role
    if (role === 'manager') {
        window.location.href = 'dashboard.html';
    } else {
        window.location.href = 'products.html';
    }
}

// Logout
function setupLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to logout?')) {
                localStorage.removeItem('user');
                window.location.href = 'index.html';
            }
        });
    }
}

// Theme Toggle
function setupThemeToggle() {
    const themeBtn = document.getElementById('themeBtn');
    if (!themeBtn) return;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeBtn.textContent = '☀️ Light';
    }

    // Toggle theme
    themeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeBtn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
    });
}

// Initialize sample data (only once)
function initializeSampleData() {
    const existingProducts = localStorage.getItem('products');
    if (!existingProducts) {
        const sampleProducts = [
            {
                id: '1',
                name: 'Premium Wheat',
                category: 'Grains',
                price: 250.50,
                quantity: 100,
                description: 'High-quality wheat for flour production'
            },
            {
                id: '2',
                name: 'Corn Oil',
                category: 'Oil',
                price: 45.00,
                quantity: 50,
                description: 'Pure vegetable corn oil'
            },
            {
                id: '3',
                name: 'Iron Ore',
                category: 'Metals',
                price: 150.75,
                quantity: 5,
                description: 'Raw iron ore for industrial use'
            }
        ];
        localStorage.setItem('products', JSON.stringify(sampleProducts));
    }
}

// Call on app start
initializeSampleData();

// Utility: Format currency
function formatCurrency(value) {
    return '$' + parseFloat(value).toFixed(2);
}

// Utility: Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Utility: Validate email
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Utility: Show notification (optional)
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 2000;
        animation: slideIn 0.3s ease;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
