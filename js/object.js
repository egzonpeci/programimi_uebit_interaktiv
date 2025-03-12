const data = ["Filan", "Fisteku"];


const objData = [
    {
        firstName: "Filan",
        lastName: "Fisteku",
        fullName: function () {
            return this.firstName + " " + this.lastName;
        },
        mosha: 30
    }
]

// document.writeln(objData);
console.log(objData);
document.writeln(`<p>Te dhenat per ${objData[0].firstName} me mbiemr ${objData[0].lastName}</p>`);
document.writeln(`<p>Te dhenat per ${objData.mosha} personin me emer dhe mbiemer ${objData.fullName()}</p>`);
