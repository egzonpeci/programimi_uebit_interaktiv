// let stateDDL = '';

// for (let index = 0; index < 10; index++) {
//     stateDDL += `<option value="${index + 1}">Shteti_${index + 1}</option>`;
// }
// document.getElementById("stateid").innerHTML = stateDDL;



//get states from json file

fetch("states.json").then(res => res.json())
    .then(data => {
        let stateDDL = '';
        stateDDL += '<option value="0">--Zgjedh shtetin--</option>'
        for (let i = 0; i < data.length; i++) {
            stateDDL += `<option value="${data[i].Id}">${data[i].Name}</option>`;
        }
        document.getElementById("stateid").innerHTML = stateDDL;
    });

function getStateID() {
    let stateID = document.getElementById("stateid").value;
    // alert(stateID);

    fetch("cities.json").then(res => res.json())
        .then(data => {
            let filterData = data.filter(x => x.StateId == stateID);
            console.log(filterData);
            let citiesDDL = '';
            citiesDDL += '<option value="0">--Zgjedh qytetin--</option>'
            for (let i = 0; i < filterData.length; i++) {
                // if (stateID != filterData[i].StateId)
                //     continue;
                citiesDDL += `<option value="${filterData[i].Id}">${filterData[i].Name}</option>`;
            }
            document.getElementById("cityid").innerHTML = citiesDDL;
        });
}