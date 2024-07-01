document.addEventListener('DOMContentLoaded', () => {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');
    
    const updateDateTime = () => {
        const now = new Date();
        currentTimeElement.textContent = `Current Time (UTC): ${now.toUTCString().split(' ')[4]}`;
        currentDayElement.textContent = `Current Day: ${now.toLocaleString('en-US', { weekday: 'long' })}`;
    };
    
    updateDateTime();
    setInterval(updateDateTime, 60000); 
});