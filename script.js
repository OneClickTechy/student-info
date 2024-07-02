let studentName = document.querySelector("#name");
let studentAge = document.querySelector("#age");

let gender;
let male = document.getElementById("male");
let female = document.getElementById("female")

let studentEmail = document.getElementById("email");

let studentMobile = document.getElementById("mobile");

//test
studentCourse = document.querySelectorAll(".courses"); 


//function

let saveData = document.getElementById("saveData");

saveData.addEventListener("click" , (event)=>{
    event.preventDefault();
    
    tdname = studentName.value;
    tdage = studentAge.value;

    if(male.checked){
        //console.log(male);
        gender = "Male";
    }
    else if(female.checked){
        //console.log(female);
        gender = "female";
    }
    let tdgender = gender;
   
    let tdemail = studentEmail.value;
    let tdmobile = studentMobile.value;

    let course;
for(let i=0; i<studentCourse.length;i++)
{
   
    if(studentCourse[i].selected){
       course = studentCourse[i].value;
    }
}
    let tdcourse = course;

    let table = document.querySelector("#studentInfo");
    let tr = document.createElement("tr");
    table.append(tr);

    
    tdnameh = document.createElement("td");
    tdnameh.textContent = tdname;
    
    tdageh = document.createElement("td");
    tdageh.textContent = tdage;
   

    tdgenderh = document.createElement("td");
    tdgenderh.textContent = tdgender;


    tdemailh = document.createElement("td");
    tdemailh.textContent = tdemail;

    tdmobileh = document.createElement("td");
    tdmobileh.textContent = tdmobile;

    tdcourseh = document.createElement("td");
    tdcourseh.textContent = tdcourse;

    
    let tdall = [tdnameh , tdageh , tdgenderh , tdemailh , tdmobileh , tdcourseh];
   
    for(j=0;j<tdall.length;j++)
        {
            tr.append(tdall[j]);
        }
    tr.insertAdjacentHTML("beforeend" , "<td><button class='deleterow' onclick='deleterow(event)'>-</button></td>");

    //test
    

})

function deleterow(event){
        event.target.parentElement.parentElement.remove();
}
