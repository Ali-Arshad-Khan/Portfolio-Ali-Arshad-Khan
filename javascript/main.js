import { companies } from "./data/workData.js";
import { projects } from "./data/projectData.js";

        const companyList = document.getElementById('company-list');
        const content = document.getElementById('content');
        

        companyList.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                const companyName = e.target.textContent;
                const company = companies[companyName];

                // Update content
                content.innerHTML = `
                    <h2>${company.title}</h2>
                    <p><strong>${company.date}</strong></p>
                    <ul>${company.details.map(detail => `<li>${detail}</li>`).join('')}</ul>
                `;

                // Update active state
                document.querySelectorAll('.company-list li').forEach(li => li.classList.remove('active'));
                e.target.classList.add('active');

                
            }
        });
 
 //Previous project layout start 
// let html='';        

// projects.forEach((project)=>{
    // html += `
        // <div class="card1">
    //             <a href="${project.cardLinks.external}" target="_blank">
    //             <div class="card1-left">
    //                 <img src="${project.img}" alt="">
    //             </div>
    //             </a>
    //             <div class="card1-right">
    //                 <h4>${project.heading}</h4>
    //                 <h2>${project.title}</h2>
    //                 <div class="card1-description">
    //                     <p>${project.description}</p>
    //                 </div>
    //                 <div class="tech-stack">
    //                     <span>${project.teckStack.span1}</span>
    //                     <span>${project.teckStack.span2}</span>
    //                     <span>${project.teckStack.span3}</span>
    //                     <span>${project.teckStack.span4}</span>
    //                     <span>${project.teckStack.span5}</span>
    //                     <span>${project.teckStack.span6}</span>
    //                 </div>
    //                 <div class="card1-links">
    //                     <a href="${project.cardLinks.github}" target="_blank"><i style="font-size:30px" class="fa">&#xf09b;</i></a>
    //                     <a href="${project.cardLinks.external}" target="_blank"><i class="fa fa-external-link" style="font-size:30px"></i></a>
                       
    //                 </div>
    //             </div>
    //         </div>

    // `
// })        

// document.querySelector('.cards').innerHTML=html;
// //Previous project layout start end
    
let HTML = '';

projects.forEach((project) => {
    HTML += `
        <div class="project1">
                <div class="head">
                    <div class="folder">
                        <img src="./images/icons/folder.svg" alt="">
                    </div>
                    <div class="link">
                        <a href="${project.cardLinks.github}" target="_blank" style="color:black"><i style="font-size:22px" class="fa">&#xf09b;</i></a>
                        <a href="${project.cardLinks.external}" target="_blank" style="color:black"><i class="fa fa-external-link" style="font-size:20px"></i></a>
                    </div>
                </div>
                
                <a href="${project.cardLinks.external}" target="_blank">
                <div class="middle">
                        <h4>${project.title}</h4>
                        <p class="about">${project.description}</p>
                </div>
                <div class="bottom">
                    <span>${project.teckStack.span1}</span>
                    <span>${project.teckStack.span2}</span>
                    <span>${project.teckStack.span3}</span>
                    <span>${project.teckStack.span4}</span>
                    <span>${project.teckStack.span5}</span>
                    <span>${project.teckStack.span6}</span>
                </div>
            </a>
            </div>
    `
});
// console.log(HTML);
document.querySelector(".projects").innerHTML=HTML;