// Data extracted from your original index.html
const playersData = [
    { name: "Alamgir Mondal", role: "All-Rounder", runs: 984, wickets: 89, eco: 9.4, catches: 79, initials: "AM" },
    { name: "Samin Mondal", role: "Batter", runs: 423, wickets: 54, eco: 8.1, catches: 34, initials: "SM" },
    { name: "Soumik Roy", role: "All-Rounder", runs: 414, wickets: 42, eco: 7.9, catches: 36, initials: "SR" },
    { name: "Rajesh Mondal", role: "All-Rounder", runs: 267, wickets: 21, eco: 6.9, catches: 25, initials: "RM" },
    { name: "Pappu Mondal", role: "All-Rounder", runs: 264, wickets: 31, eco: 7.8, catches: 21, initials: "PM" },
    { name: "Sakil Mondal", role: "All-Rounder", runs: 224, wickets: 34, eco: 7.5, catches: 21, initials: "SM" },
    { name: "Soumalya Roy", role: "Bowler", runs: 219, wickets: 39, eco: 6.2, catches: 12, initials: "SR" },
    { name: "Taju Mondal", role: "Bowler", runs: 124, wickets: 19, eco: 5.3, catches: 18, initials: "TM" },
    { name: "Riyaz Mondal", role: "Bowler", runs: 104, wickets: 14, eco: 5.6, catches: 19, initials: "RM" },
    { name: "Manish Pandey", role: "Bowler", runs: 14, wickets: 36, eco: 7.4, catches: 3, initials: "MP" },
    { name: "Soumen Roy", role: "Bowler", runs: 21, wickets: 2, eco: 7.6, catches: 2, initials: "SR" },
    { name: "Sheikh Imran", role: "Batsman", runs: 29, wickets: 2, eco: 2.4, catches: 3, initials: "SI" }
];

// Function to render players to the grid
function renderPlayers() {
    const container = document.getElementById('players-container');
    container.innerHTML = ''; // Clear existing content

    playersData.forEach(player => {
        const card = `
            <div class="player-card">
                <div class="player-avatar">${player.initials}</div>
                <h3 class="player-name">${player.name}</h3>
                <span class="player-role">${player.role}</span>
                <div class="player-stats">
                    <div class="stat-item">
                        <h4>${player.runs}</h4>
                        <span>Runs</span>
                    </div>
                    <div class="stat-item">
                        <h4>${player.wickets}</h4>
                        <span>Wickets</span>
                    </div>
                    <div class="stat-item">
                        <h4>${player.eco}</h4>
                        <span>Eco</span>
                    </div>
                    <div class="stat-item">
                        <h4>${player.catches}</h4>
                        <span>Catches</span>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Function to switch sections (Home, Players, Teams, etc.)
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active-section'));

    // Show selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active-section');
    }

    // Scroll to top
    window.scrollTo(0,0);

    // Update active state in Navbar
    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Find the link that was clicked and add active class (simple matching)
    // Note: In a real app we might pass 'this', but for now this works visually
}

// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    renderPlayers();
});