const template = `
    Axel DeAngelis
    9411 N Justice Way, Hayden, ID 83835
    (714) 606-9878
    axeldeangelis@gmail.com

    [TODAY’S DATE]
    [COMPANY NAME]

    <b>Dear [HIRING MANAGER],</b>

    My name is Axel DeAngelis, and I am excited to apply for the [POSITION TITLE] position at [COMPANY NAME]. With significant product management experience through launching my own bootstrapped SaaS product, I am eager to utilize my diverse skillset to create innovative products.
    
    I successfully launched a business naming SaaS tool called NameBounce, which I bootstrapped to 50,000 monthly users and a 56/100 domain rating on Ahrefs. Additionally, I have three years of experience in real estate investments and finance, where I gained the skills to create financial models, conduct market research, and work cross-functionally with various departments.
    
    NameBounce is a business name generator tool with real-time domain name availability checks. It helped me develop my product management skills through a genuine “trial-by-fire” approach.  
    
    As I used my money, I needed to quickly become skilled in product management to stay within my budget. Over the course of running the business, I learned how to manage product backlogs, prioritize features for MVPs, design algorithms and automations, find affordable freelance talent, and more.
    
    In my previous role, I evaluated investment opportunities for a $20 billion healthcare real estate investment trust called Healthpeak Properties. Over the course of my three years at Healthpeak, I worked on over $2 billion of closed investments.  
    
    My team and I were responsible for overseeing and coordinating all aspects of the transaction process, similar to how a product manager oversees the development of a product. In the role, I collaborated cross-functionally with various departments, designed many of the company’s template financial models, conducted market research, and presented to key stakeholders such as the investment committee, senior leadership, and important operating partners.
    
    Before my role at Healthpeak, I worked at Mission Capital Advisors, a boutique real estate debt and equity financing firm based in New York City.  
    
    At Mission, I built financial models for clients, prepared offering memorandums in conjunction with graphic design, and coordinated the transaction due diligence process using SmartSheet. I worked on over $1 billion of new investments during my time at Mission. 
    
    As the founder of NameBounce and in my previous roles, I developed a passion for creating functional, user-friendly products that provide users with real value. Seeing the positive feedback from users on NameBounce has reinforced my desire to transition to product management. I am excited to apply my skills and experience to create even more impactful products and work with a team of talented individuals to develop innovative solutions.
    
    
    Thank you for considering my application for the [POSITION TITLE] role! I would love to discuss how my experience and skills can contribute to the success of [COMPANY NAME]. If you need further information, please don’t hesitate to contact me at axeldeangelis@gmail.com or (714) 606-9878.
    
    Sincerely,
    <b>Axel DeAngelis</b>
    `;

function fillTemplate(companyName, positionTitle, hiringManager) {
  const today = new Date();
  const todayDate = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  return template
    .replace("[TODAY’S DATE]", todayDate)
    .replace(/\[COMPANY NAME\]/g, companyName)
    .replace(/\[HIRING MANAGER\]/g, hiringManager)
    .replace(/\[POSITION TITLE\]/g, positionTitle);
}

function generatePDF(coverLetter, companyName) {
  const coverLetterDiv = document.getElementById("coverLetter");
  coverLetterDiv.innerHTML = coverLetter.replace(/\n/g, "<br>");
  coverLetterDiv.style.display = "block";

  const opt = {
    margin: 1,
    filename: `Axel DeAngelis ${companyName} Cover Letter.pdf`,
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf()
    .set(opt)
    .from(coverLetterDiv)
    .save()
    .then(() => {
      coverLetterDiv.style.display = "none";
    });
}

document.getElementById("generate").addEventListener("click", () => {
  const companyName = document.getElementById("companyName").value;
  const positionTitle = document.getElementById("positionTitle").value;
  const hiringManager = document.getElementById("hiringManager").value;

  const coverLetter = fillTemplate(companyName, positionTitle, hiringManager);
  generatePDF(coverLetter, companyName);
});
