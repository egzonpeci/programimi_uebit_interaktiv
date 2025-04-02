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
        document.body.innerHTML += `
              <div class="alert alert-success">
                 Title: ${obj.title} <br>
                 Body: ${obj.body} & ${obj.userid}
              </div>
            `;
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



class Car {
    constructor(name) {
        this.emri = name;
    }

    getName() {
        return `Name ${this.emri}, i vetures`;
    }
}


class Model extends Car {
    constructor(vetura, modeli) {
        super(vetura)
        this.modeli = modeli;
    }

    getModel() {
        return this.getName() + " dhe modeli " + this.modeli;
    }
}


let car_obj = new Car("vetura_1");
console.log(car_obj.getName());



let newModel_obj = new Model("test", "modeli_1");
console.log(newModel_obj.getModel());






class BaseEntity {
    constructor(isactive, createddate) {
        this.isactive = isactive;
        this.createddate = createddate;
    }
}

class Qyteti extends BaseEntity {
    constructor(id, name, isactive, createddate) {
        super(isactive, createddate)
        this.id = id;
        this.name = name;

    }
}
class Studentat extends BaseEntity {
    constructor(id, fullname, level, isactive, createddate) {
        super(isactive, createddate)
        this.id = id;
        this.name = fullname;
        this.level = level;
    }
}


