// Avoid polluting global namespace by wrapping in a function
(function() {
    let dashboard;
    // Initialize the extension
    $('#initialize-button').click(() => {
        tableau.extensions.initializeAsync({configure: configure}).then(() => {
            console.log('Extension has been initialized');
            // fetch dashboard
            dashboard = tableau.extensions.dashboardContent.dashboard;
        });
    });
}());