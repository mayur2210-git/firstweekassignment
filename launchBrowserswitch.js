//Launch the browser
function launchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("Launching Chrome Browser");
    } else {
        console.log("Launching Other Browser");
    }
}
//swtichCase function 
function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Running Smoke Test");
            break;

        case "sanity":
            console.log("Running Sanity Test");
            break;

        case "regression":
            console.log("Running Regression Test");
            break;

        default:
            console.log("Running Smoke Test");
    }
}

// Function calls
launchBrowser("chrome");
runTests("sanity");