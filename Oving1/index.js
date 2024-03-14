window.onload = () => {
    const incrementCounter = () => {
        const counterElement = document.getElementById('counter');
        if (counterElement) {
            let currentValue = parseInt(counterElement.textContent || '0');
            counterElement.textContent = (currentValue + 1).toString();
        }
    };

    const homeButton = document.getElementById('home-button');
    if (homeButton) {
        homeButton.addEventListener('click', incrementCounter);
    }
};

