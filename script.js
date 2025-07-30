document.addEventListener('DOMContentLoaded', () => {
    const trackerBody = document.getElementById('trackerBody');

    // Sample data for the Live Tracker
    const trackerData = [
    //{ log: '', time: '' }
        { log: 'Study', time: '22:00' }
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
