document.addEventListener('DOMContentLoaded', () => {
    const trackerBody = document.getElementById('trackerBody');

    // Sample data for the Live Tracker
    const trackerData = [
        { log: 'User logged in', time: '2025-07-30 09:30:00' },
        { log: 'Data updated', time: '2025-07-30 09:32:15' },
        { log: 'System check completed', time: '2025-07-30 09:35:22' },
        { log: 'Error detected', time: '2025-07-30 09:40:10' },
        { log: 'Session ended', time: '2025-07-30 09:44:00' }
    ];

    // Populate the table with data
    trackerData.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.log}</td>
            <td>${data.time}</td>
        `;
        trackerBody.appendChild(row);
    });
});