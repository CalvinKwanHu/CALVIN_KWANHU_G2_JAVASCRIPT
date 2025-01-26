document.getElementById('toggle-mode').onclick = () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        document.getElementById('toggle-mode').textContent = 'DARK MODE';
    } else {
        document.getElementById('toggle-mode').textContent = 'LIGHT MODE';
    }
};
