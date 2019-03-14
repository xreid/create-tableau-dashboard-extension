// Avoid polluting global namespace by wrapping in a function
(function() {
    let dashboard;
    // Initialize the extension
    tableau.extensions.initializeAsync().then(() => {
        console.log('Extension has been initialized');
        // fetch dashboard
        dashboard = tableau.extensions.dashboardContent.dashboard;
    });
}());