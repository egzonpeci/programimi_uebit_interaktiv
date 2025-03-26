let objData = {
    name: "Filan",
    lastname: "Fisteku",
    age: 30
}


// document.writeln(objData);

console.log(objData);





//krijimi i klasave


// class `name` {
//     constructor(parameters) {

//     }
// }

class Student {
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
    getFullName() {
        return `FullName: ${this.name} ${this.lastname}`;
    }

    getAge() {
        return `Mosha e kandidatit ${this.age}`;
    }

    static staticMethod(obj) {
        document.writeln(`MetodaStatike ${obj.name}`);
    }
}


let new_student = new Student("emri", "mbiemri", 34);
console.log(new_student.getFullName());
console.log(new_student.getAge());
Student.staticMethod(new_student);

let new_student_1 = new Student("emri_1", "mbiemri-1", 35);
console.log(new_student_1.name);


//leximi i metodave statike prej Date


let getData = new Date();
document.writeln(getData.getFullYear());

document.writeln(Date.now())



//read json file "posts.json"


class Posts {
    constructor(title, body, userid) {
        this.title = title;
        this.body = body;
        this.userid = userid;
    }

    static generatAlert(obj) {
        document.writeln(`
              <div class="alert alert-success">
                 Title: ${obj.title} <br>
                 Body: ${obj.body} & ${obj.userid}
              </div>
            `);
    }

}


// fetch('https://jsonplaceholder.typicode.com/posts')
fetch('posts.json')
    .then(response => response.json())
    .then(data_json => {
        for (let i = 0; i < data_json.length; i++) {
            let new_obj = new Posts(data_json[i].title, data_json[i].body, data_json[i].userId);
            Posts.generatAlert(new_obj);
        }
    });