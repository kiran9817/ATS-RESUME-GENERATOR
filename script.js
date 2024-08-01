document.getElementById('resumeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const school = document.getElementById('school').value;
    const degree = document.getElementById('degree').value;
    const graduation = document.getElementById('graduation').value;
    const company = document.getElementById('company').value;
    const role = document.getElementById('role').value;
    const duration = document.getElementById('duration').value;
    const description = document.getElementById('description').value;
    const project1 = document.getElementById('project1').value;
    const project1desc = document.getElementById('project1desc').value;
    const project2 = document.getElementById('project2').value;
    const project2desc = document.getElementById('project2desc').value;
    const skills = document.getElementById('skills').value.split(',');

    const resumeOutput = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
        <p>LinkedIn: ${linkedin}</p>
        <p>GitHub: ${github}</p>
        <h3>Education</h3>
        <p>${degree} from ${school}, ${graduation}</p>
        <h3>Experience</h3>
        <p>${role} at ${company}, ${duration}</p>
        <p>${description}</p>
        <h3>Projects</h3>
        <p>${project1}</p>
        <p>${project1desc}</p>
        <p>${project2}</p>
        <p>${project2desc}</p>
        <h3>Skills</h3>
        <ul>${skills.map(skill => <li>${skill.trim()}</li>).join('')}</ul>
    `;

    document.getElementById('resumeOutput').innerHTML = resumeOutput;
    document.getElementById('downloadPdf').style.display = 'block';
});

document.getElementById('downloadPdf').addEventListener('click', function() {
    const doc = new jsPDF();

    const content = document.getElementById('resumeOutput').innerHTML;

    doc.fromHTML(content, 10, 10);
    doc.save('resume.pdf');
});