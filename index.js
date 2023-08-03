<script>
document.addEventListener('DOMContentLoaded', function() {
    const supportList = document.querySelector('.support-list');
    const supportItems = supportList.querySelectorAll('.support-item');
    const sliderIcon = document.getElementById('sliderIcon');

    sliderIcon.addEventListener('click', () => {
        for (let i = 0; i < 3; i++) {
            const newItem = supportItems[i + 6].cloneNode(true);
            supportList.removeChild(supportItems[i]);
            supportList.insertBefore(newItem, supportItems[i]);
        }
    });
});
</script>
