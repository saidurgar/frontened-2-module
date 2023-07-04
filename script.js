let students = [
    { ID: 1, name: 'Alice', age: 21, grade: 'A', degree: 'Btech', email: 'alice@example.com' },
    { ID: 2, name: 'Bob', age: 22, grade: 'B', degree: 'MBA', email: 'bob@example.com' },
    { ID: 3, name: 'Charlie', age: 20, grade: 'C', degree: 'Arts', email: 'charlie@example.com' }
];
let addStudent ;
let editStudent ;
let searchField ;
let id = 4;
let currId ;

(function load(){
    addStudent = document.getElementById("addStudent");
    editStudent = document.getElementById("editStudent");
    searchField = document.getElementById("search")
    write = "";
    for(x in students){
        write = write+`<tr><td>${students[x].ID}</td><td>${students[x].name}</td><td>${students[x].email}</td><td>${students[x].age}</td><td>${students[x].grade}</td><td>${students[x].degree}
        <img  id="edit-btn" onclick="edit(${students[x].ID})" src="./assest/pencil-svgrepo-com.svg"> <img onclick="deleteStudent(${students[x].ID})" src="./assest/trash-svgrepo-com.svg"></td></tr>`
    }

    document.getElementById("tbody").innerHTML = write;
})();


function getId(){
    return id++;
}


addStudent.addEventListener('click',function(){


    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let gpa = document.getElementById("gpa")
    let age = document.getElementById("age")
    let degree = document.getElementById("degree")

    if(name.value.toString().trim()=="" || email.value.toString().trim()=="" || age.value.toString().trim()=="" || degree.value.toString().trim()==""){
        return
    }

    let student = {
        "ID" : getId(),
        "name" : name.value,
        'age' : age.value,
        "grade" : gpa.value.toUpperCase(),
        "degree" : degree.value,
        "email" : email.value,
    }
    
    
    students.push(student);

    name.value="";
    email.value="";
    gpa.value="";
    age.value="";
    degree.value="";

    write = "";
    for(x in students){
        write = write+`<tr><td>${students[x].ID}</td><td>${students[x].name}</td><td>${students[x].email}</td><td>${students[x].age}</td><td>${students[x].grade}</td><td>${students[x].degree}
        <img  id="edit-btn" onclick="edit(${students[x].ID})" src="./assest/pencil-svgrepo-com.svg"> <img onclick="deleteStudent(${students[x].ID})" src="./assest/trash-svgrepo-com.svg"></td></tr>`
    }

    document.getElementById("tbody").innerHTML = write;
    return
})

editStudent.addEventListener('click',function(){

    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let gpa = document.getElementById("gpa")
    let age = document.getElementById("age")
    let degree = document.getElementById("degree")

    if(name.value.toString().trim()=="" || email.value.toString().trim()=="" || age.value.toString().trim()=="" || degree.value.toString().trim()==""){
        return
    }

    for(x in students){
        if(students[x].ID==currId){
            students.splice(x,1)
        }
    }

    let student = {
        "ID" : currId,
        "name" : name.value,
        'age' : age.value,
        
        "grade" : gpa.value.toUpperCase(),
        "degree" : degree.value,
        "email" : email.value,
    }
    currId = undefined;
    students.push(student);

    name.value="";
    email.value="";
    gpa.value="";
    age.value="";
    degree.value="";
    
    addStudent.style.display="block"
    editStudent.style.display="none"
    write = "";
    for(x in students){
        write = write+`<tr><td>${students[x].ID}</td><td>${students[x].name}</td><td>${students[x].email}</td><td>${students[x].age}</td><td>${students[x].grade}</td><td>${students[x].degree}
        <img  id="edit-btn" onclick="edit(${students[x].ID})" src="./assest/pencil-svgrepo-com.svg"> <img onclick="deleteStudent(${students[x].ID})" src="./assest/trash-svgrepo-com.svg"></td></tr>`
    }

    document.getElementById("tbody").innerHTML = write;
})

function edit(id){
    
    let student = students.map(n => n).filter(n => n.ID==id)
    currId=id;

    document.getElementById("name").value = student[0].name
    document.getElementById("email").value = student[0].email
    document.getElementById("gpa").value = student[0].grade
    document.getElementById("age").value = student[0].age
    document.getElementById("degree").value = student[0].degree

    addStudent.style.display="none"
    editStudent.style.display="block"
    
}

function deleteStudent(id){

    for(x in students){
        if(students[x].ID==id){
            students.splice(x,1)
        }
    }
    write = "";
    for(x in students){
        write = write+`<tr><td>${students[x].ID}</td><td>${students[x].name}</td><td>${students[x].email}</td><td>${students[x].age}</td><td>${students[x].grade}</td><td>${students[x].degree}
        <img  id="edit-btn" onclick="edit(${students[x].ID})" src="./assest/pencil-svgrepo-com.svg"> <img onclick="deleteStudent(${students[x].ID})" src="./assest/trash-svgrepo-com.svg"></td></tr>`
    }

    document.getElementById("tbody").innerHTML = write;
}

searchField.addEventListener('keyup',function(){
    if(searchField.value.toString().trim().length>0){
        searchStudents();
    }else{
        write = "";
        for(x in students){
            write = write+`<tr><td>${students[x].ID}</td><td>${students[x].name}</td><td>${students[x].email}</td><td>${students[x].age}</td><td>${students[x].grade}</td><td>${students[x].degree}
            <img  id="edit-btn" onclick="edit(${students[x].ID})" src="./assest/pencil-svgrepo-com.svg"> <img onclick="deleteStudent(${students[x].ID})" src="./assest/trash-svgrepo-com.svg"></td></tr>`
        }
    
        document.getElementById("tbody").innerHTML = write;
    }
})


function searchStudents(){
    
    let searchValue = searchField.value.toLowerCase();
    

    let filter = students.map(n=>n).filter(student =>  
        student.name.toLowerCase().includes(searchValue) ||
        student.email.toLowerCase().includes(searchValue) ||
        student.degree.toLowerCase().includes(searchValue)
    )
    console.log(filter)
    
    write = "";
    for(x in filter){
        write = write+`<tr><td>${filter[x].ID}</td><td>${filter[x].name}</td><td>${filter[x].email}</td><td>${filter[x].age}</td><td>${filter[x].grade}</td><td>${filter[x].degree}
        <img  id="edit-btn" onclick="edit(${filter[x].ID})" src="./assest/pencil-svgrepo-com.svg"> <img onclick="deleteStudent(${filter[x].ID})" src="./assest/trash-svgrepo-com.svg"></td></tr>`
    }

    document.getElementById("tbody").innerHTML = write;

}