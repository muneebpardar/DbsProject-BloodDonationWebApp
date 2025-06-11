// scripts/header.js
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const userInfoDiv = document.getElementById('user-info');

    // Common links for all users
    const links = [
        { name: 'Home', href: 'index.html' },
        { name: 'Donate', href: 'donate.html' },
        { name: 'Request', href: 'request.html' }
    ];

    // Check if user is logged in
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    // Render navigation links
    navbar.innerHTML = `
        <ul class="flex justify-center gap-10">
        ${links.map(link => `
            <li>
            <a href="${link.href}" class="
                text-lg font-semibold text-gray-800 hover:text-red-600 
                transition-colors duration-200 relative
                after:content-[''] after:absolute after:bottom-0 after:left-0 
                after:w-0 after:h-0.5 after:bg-red-600 after:transition-all after:duration-300
                hover:after:w-full
            ">
                ${link.name}
            </a>
            </li>
        `).join('')}
        ${loggedInUser && loggedInUser.role === 'admin' ? `
            <li>
            <a href="admin.html" class="
                text-lg font-semibold text-gray-800 hover:text-red-600 
                transition-colors duration-200 relative
                after:content-[''] after:absolute after:bottom-0 after:left-0 
                after:w-0 after:h-0.5 after:bg-red-600 after:transition-all after:duration-300
                hover:after:w-full
            ">
                Admin
            </a>
            </li>
        ` : ''}
        </ul>
    `;

    // Render user info
    if (loggedInUser) {
        userInfoDiv.innerHTML = `
        <div class="relative group">
            <button class="
            text-lg font-semibold text-gray-800 group-hover:text-red-600 
            px-4 py-2 rounded-lg transition-all duration-200
            group-hover:bg-red-50
            ">
            ${loggedInUser.full_name || loggedInUser.email}
            </button>
            <div class="
            absolute hidden group-hover:block bg-white shadow-lg 
            rounded-lg mt-1 right-0 w-36 border border-gray-200 z-50
            ">
            <button onclick="logout()" class="
                block w-full text-left px-4 py-3 text-base text-gray-700 
                hover:bg-red-100 hover:text-red-700 transition-colors
                first:rounded-t-lg last:rounded-b-lg
            ">
                Logout
            </button>
            </div>
        </div>
        `;
    } else {
        userInfoDiv.innerHTML = `
        <a href="signin.html" class="
            bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600
            text-lg font-semibold transition-all duration-200 shadow-md
            hover:shadow-lg hover:-translate-y-0.5
        ">
            Login
        </a>
        `;
    }
});

// Logout function
function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
}