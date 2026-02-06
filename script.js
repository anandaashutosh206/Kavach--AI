function login() {
    const role = document.getElementById("role").value;
    localStorage.setItem("role", role);
    window.location.href = "dashboard.html";
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}

window.onload = function () {
    const role = localStorage.getItem("role");
    if (document.getElementById("welcomeText") && role) {
        document.getElementById("welcomeText").innerText =
            "Welcome, " + role.toUpperCase();
    }
};

function predictRisk() {
    const rainfall = parseInt(document.getElementById("rainfall").value || 0);
    const days = parseInt(document.getElementById("days").value || 0);
    const incidents = parseInt(document.getElementById("incidents").value || 0);

    let riskScore = 0;

    if (rainfall > 50) riskScore += 30;
    if (days > 30) riskScore += 25;
    if (incidents > 2) riskScore += 25;

    let result = "";

    if (riskScore >= 70) {
        result = "HIGH RISK 🚫 Manual Entry NOT Allowed";
    } else if (riskScore >= 40) {
        result = "MEDIUM RISK ⚠ Supervisor Approval Required";
    } else {
        result = "LOW RISK ✅ Entry Allowed";
    }

    document.getElementById("riskResult").innerText =
        "Risk Score: " + riskScore + " | " + result;
}
