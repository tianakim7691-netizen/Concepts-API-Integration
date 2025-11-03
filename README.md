# Concepts-API-Integration



Algorythm
1. Link elements(html) to js --> define Id using const
2. Set for data save and array -->prepare to save info
3. Make form submit event! 
4. Create calculate function for average grade
5. save at local, using btn
6. Restore data from localStorage
7. Fetching external data using async/await and fetch



2. 
const studentSet = new Set(); --> Avoiding duplication
let student = []; --> array for save student info 



3. 
form.addEventListener(`submit`, (event)=>{ -->Prevent refresh
    event.preventDefault();
})
const name = nameInput.ariaValueMax.trim(); -->trim spaces
const grade = Number(gradeInput.value);

    --> get__: get value from input tag
    but value is always bring string
    Number() helps to change string->number

if (name ===`` || isNAN(grade)) {
    alert(`Already added name`);
    return;
}
    --> || = or / if one is true than run
    NaN = Not a Number
    ===If the name is blank and it's not a number than alerts

    studentSet.add(name);
    students.push({ name, grade }); --> add name depends on duplicate


const div = document.createElement(`div`);
div.textContent = `${name} - Grade: ${grade}`;
studentList.appendChild(div);

--> make the empty "div"box
cover the string by using this`` and add ${} than i can use variable directly
ex- "jacson - Grade: 95"
appendChild = add chid => add "div"(child) to perents(html-main)

nameInput.value = ``;
gradeInput.value =``;
-->after submit make the form blank


4. 
const total = students.reduce((sum, student) => sum + student.grade, 0);
--> reduce : Reduce an array to a single value.
--> array.reduce((accumulator, currentValue) => { ... }, initialValue);


const average = (total /student.length).toFixed(2)
-->toFixed(2): 90.00
totall % count


5. 
saveButton.addEventListener(`click`, ()=>{
    localStorage.setItem(`studentsData`, Jason.stringify(students));
    alert(`Saved successfully!`);
})
--> .setItem(key, value) : saved data
Jason.stringify(students) : change to string, localStorage can only save string


6. 
window.addEventListener(`load`, ()=> { --> automatically opened
    const saveData = localStorage.getItem(`studentsData`); -->use data from localStorage

    if (saveData) {
        students = JSON.parse(saveData); -->back data from chaged string to origin
        studentSet.clear(); --> to prevent duplicate clear the set
        studentList.innerHTML = ``; -->refresh display

        students.forEach(student => { --> show each students
            studentSet.add(student.name); --> check students name using set 

            const div = document.createElement(`div`);
            div.textContent = `${student.name} - Grade: ${student.grade}`;
            studentList.appendChild(div);
        });
        updateAverage();
    }
});

--> make the "div" box and give a name make
ex- "jacson - Grade: 95"
appendChild = add chid => add "div"(child) to perents(html-main)


7. 
const fetchUsers = async ()=> {  --> async + await: wait and run 
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/users'); -->await fetch(...): wait for date from server
        const data = await response.json(); -->change data usijg JSON 

        userList.innerHTML = ``; -->refresh

        data.forEach(user =>{
            const li = document.createElement(`li`);
            li.textContent = user.username;
            userList.appendChild(li);
        });
    --> Run {} Each user data from data. Make <li></li> tag to insert data. And add data to html



        userCount.textContent = `Total Users: ${data.length}`; -->count user and show typo at <p id="count"> <--(userCount linked)
    } catch (error) { --> Prepare error situation
        console.error(`Error fetching users data:`, error); --> console error
        userCount.textContent = `Failed to load users data`; -->display
    }
};

fetchUsers(); -->automatically run