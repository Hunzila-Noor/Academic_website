document.addEventListener('DOMContentLoaded', function() {
    const filterInput = document.getElementById('filterInput');
    filterInput.addEventListener('keyup', filterProjects);
});

function filterProjects() {
    const filterValue = document.getElementById('filterInput').value.toUpperCase();
    const projectsList = document.getElementById('projectsList');
    const projects = projectsList.querySelectorAll('li');

    projects.forEach(function(project) {
        const text = project.textContent.toUpperCase();
        if (text.indexOf(filterValue) > -1) {
            project.style.display = '';
        } else {
            project.style.display = 'none';
        }
    });
}
