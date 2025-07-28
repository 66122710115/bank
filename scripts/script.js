const path = window.location.pathname;
const pageMap = {
    "/": "home-page",
    "/index.html": "procurement-page",
    "/financial.html": "financial-page",
    "/project.html": "project-page",
    "/logistic.html": "logistic-page",
    "/report.html": "report-page",
};

const activeId = pageMap[path];

if (activeId) {
    const activeLink = document.getElementById(activeId);

    if (activeLink) {
        activeLink.classList.add("active");
    }
}
