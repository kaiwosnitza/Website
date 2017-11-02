
// Define Functions

function navigation() {
    var navigation = document.querySelector('.nav');
    var dropdownToggle = document.querySelector('.navbar-toggle');

    console.log(dropdownToggle);

    dropdownToggle.addEventListener('click', function() {
        if (navigation.classList.contains('toggled')) {
            navigation.classList.remove('toggled');
        } else {
            navigation.classList.add('toggled');
        }
    }, false);
}

// Call functions when the document has finished loading
document.addEventListener('DOMContentLoaded', function() {
    navigation();
});