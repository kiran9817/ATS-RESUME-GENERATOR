document.getElementById('resumeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const objective = document.getElementById('objective').value;
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
    const honors = document.getElementById('honors').value;
    const hobbies = document.getElementById('hobbies').value.split(',');
    const skills = document.getElementById('skills').value.split(',');

    const resumeOutput = `
        <h2 style="text-align:center; color:#007BFF;">${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
        <p><strong>GitHub:</strong> <a href="${github}" target="_blank">${github}</a></p>

        <h3 style="color:#007BFF;">Objective</h3>
        <p>${objective}</p>

        <h3 style="color:#007BFF;">Education</h3>
        <p><strong>${degree}</strong> from <strong>${school}</strong>, <em>${graduation}</em></p>

        <h3 style="color:#007BFF;">Experience</h3>
        <p><strong>${role}</strong> at <strong>${company}</strong>, <em>${duration}</em></p>
        <p>${description}</p>

        <h3 style="color:#007BFF;">Projects</h3>
        <p><strong>${project1}</strong></p>
        <p>${project1desc}</p>
        <p><strong>${project2}</strong></p>
        <p>${project2desc}</p>

        <h3 style="color:#007BFF;">Honors & Awards</h3>
        <p>${honors}</p>

        <h3 style="color:#007BFF;">Hobbies</h3>
        <ul>${hobbies.map(hobby => `<li>${hobby.trim()}</li>`).join('')}</ul>

        <h3 style="color:#007BFF;">Skills</h3>
        <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
    `;

    document.getElementById('resumeOutput').innerHTML = resumeOutput;
    document.getElementById('resumeOutput').classList.add('fadeIn');
    document.getElementById('downloadPdf').style.display = 'block';
});

document.getElementById('downloadPdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'pt', 'a4');
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor('#007BFF');
    doc.text(document.getElementById('name').value, 220, 50);
    
    doc.setFontSize(12);
    doc.setTextColor('#000000');
    doc.text(`Email: ${document.getElementById('email').value}`, 40, 90);
    doc.text(`Phone: ${document.getElementById('phone').value}`, 40, 110);
    doc.text(`Address: ${document.getElementById('address').value}`, 40, 130);
    doc.text(`LinkedIn: ${document.getElementById('linkedin').value}`, 40, 150);
    doc.text(`GitHub: ${document.getElementById('github').value}`, 40, 170);
    
    doc.setFontSize(16);
    doc.setTextColor('#007BFF');
    doc.text('Objective', 40, 200);
    doc.setFontSize(12);
    doc.setTextColor('#000000');
    doc.text(document.getElementById('objective').value, 40, 220);
    
    doc.setFontSize(16);
    doc.setTextColor('#007BFF');
    doc.text('Education', 40, 250);
    doc.setFontSize(12);
    doc.setTextColor('#000000');
    doc.text(`${document.getElementById('degree').value} from ${document.getElementById('school').value}, ${document.getElementById('graduation').value}`, 40, 270);
    
    doc.setFontSize(16);
    doc.setTextColor('#007BFF');
    doc.text('Experience', 40, 300);
    doc.setFontSize(12);
    doc.setTextColor('#000000');
    doc.text(`${document.getElementById('role').value} at ${document.getElementById('company').value}, ${document.getElementById('duration').value}`, 40, 320);
    doc.text(document.getElementById('description').value, 40, 340);
    
    doc.setFontSize(16);
    doc.setTextColor('#007BFF');
    doc.text('Projects', 40, 370);
    doc.setFontSize(12);
    doc.setTextColor('#000000');
    doc.text(`${document.getElementById('project1').value}`, 40, 390);
    doc.text(`${document.getElementById('project1desc').value}`, 40, 410);
    doc.text(`${document.getElementById('project2').value}`, 40, 430);
    doc.text(`${document.getElementById('project2desc').value}`, 40, 450);
    
    doc.setFontSize(16);
    doc.setTextColor('#007BFF');
    doc.text('Honors & Awards', 40, 480);
    doc.setFontSize(12);
    doc.setTextColor('#000000');
    doc.text(document.getElementById('honors').value, 40, 500);
    
    doc.setFontSize(16);
    doc.setTextColor('#007BFF');
    doc.text('Hobbies', 40, 530);
    doc.setFontSize(12);
    doc.setTextColor('#000000');
    document.getElementById('hobbies').value.split(',').forEach((hobby, index) => {
        doc.text(hobby.trim(), 40, 550 + (index * 20));
    });

    doc.setFontSize(16);
    doc.setTextColor('#007BFF');
    doc.text('Skills', 40, 600);
    doc.setFontSize(12);
    doc.setTextColor('#000000');
    document.getElementById('skills').value.split(',').forEach((skill, index) => {
        doc.text(skill.trim(), 40, 620 + (index * 20));
    });

    doc.save('resume.pdf');
});
