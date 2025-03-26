function GetStudents() {
    try {
        document.writeln("tash jemi mire me funksionin");

    } catch (error) {
        document.writeln(`Diqka nuk shkoi mire ${error}`);
    }
    finally {
        document.writeln("finally text");
    }
}

document.writeln("test");
GetStudents();

async function AsyncFunction() {
    return "test";
}

AsyncFunction().
    then(res => console.log(res));


async function ReadFunction() {
    let res = await AsyncFunction();
    console.log(res);
}
ReadFunction();