

//Algorthm    
    //1. link elements(html) to js
    //2. Set for data save and array
    //3. Make form submit event! 
    //4. Create calculate function for average grade
    //5. save at local, using btn
    //6. Restore data from localStorage
    //7. Fetching external data using async/await and fetch




//1.    
const form = document.getElementById(`form`);
const nameInput = document.getElementById(`name`);
const gradeInput = document.getElementById(`number`);
const studentList = document.getElementById("allstudentlist");
const averageH1 = document.getElementById(`average`);
const saveButton = document.getElementById(`save`); //--5.
const userList = document.getElementById(`studentlist`); //--7.
const userCount = document.getElementById(`count`); //--7.

//2.
const studentSet = new Set();
let students = [];

//3.
form.addEventListener(`submit`, (event)=>{
    event.preventDefault();

const name = nameInput.value.trim();
const grade = Number(gradeInput.value);

if (name ===`` || isNaN(grade)) {
    alert(`Please enter both`);
    return;
}

if (studentSet.has(name)) {
    alert(`Already added name`);
    return;
}
studentSet.add(name);
students.push({name, grade});

const div = document.createElement(`div`);
div.textContent = `${name} - Grade: ${grade}`;
studentList.appendChild(div);

nameInput.value = ``;
gradeInput.value =``;

updateAverage();
});


//4.
const updateAverage = () => {
    if (students.length ===0) {
        averageH1.textContent = "Average Grade: 0";
        return;
    }

const total = students.reduce((sum, student) => sum + student.grade, 0);

const average = (total / students.length).toFixed(2);

averageH1.textContent = `Average Grade: ${average}`;

}

//5.
saveButton.addEventListener(`click`, ()=>{
    localStorage.setItem(`studentsData`, JSON.stringify(students));
    alert(`Saved successfully!`);
})

//6.
window.addEventListener(`load`, ()=> {
    const saveData = localStorage.getItem(`studentsData`);

    if (saveData) {
        students = JSON.parse(saveData);
        studentSet.clear();
        studentList.innerHTML = ``;

        students.forEach(student => {
            studentSet.add(student.name);

            const div = document.createElement(`div`);
            div.textContent = `${student.name} - Grade: ${student.grade}`;
            studentList.appendChild(div);
        });
        updateAverage();
    }
});


//7.
const fetchUsers = async ()=> {
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        userList.innerHTML = ``;
        data.forEach(user =>{
            const li = document.createElement(`li`);
            li.textContent = user.username;
            userList.appendChild(li);
        });

        userCount.textContent = `Total Users: ${data.length}`;
    } catch (error) {
        console.error(`Error fetching users data:`, error);
        userCount.textContent = `Failed to load users data`; 
    }
};

fetchUsers();

