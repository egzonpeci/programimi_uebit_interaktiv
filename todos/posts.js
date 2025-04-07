
fetch(`${base_url}/posts`)
    .then(res => res.json())
    .then(data => {

        let htmlData = '';
        for (let i = 0; i < data.length; i++) {

            htmlData += `<div class="col-md-3">
            <div class="alert alert-info">
            <strong>Title: </strong> ${data[i].title}
            <div class="text-end">
            <button onclick="showComments(${data[i].id})" class="btn btn-success btn-sm">Comments</button>
            </div>
            </div>
            </div>`

        }

        document.getElementById("posts").innerHTML = htmlData;

    });


fetch(`${base_url}/comments`)
    .then(res => res.json())
    .then(data => {

        let htmlData = '';
        for (let i = 0; i < data.length; i++) {

            htmlData += `<div class="col-md-3">
            <div class="alert alert-danger">
            <strong>Comment: </strong> ${data[i].body}
            </div>
            </div>`

        }

        document.getElementById("comments").innerHTML = htmlData;

    });


function showComments(postid) {
    fetch(`${base_url}/posts/${postid}/comments`)
        .then(pergjigje => pergjigje.json())
        .then(shenimet => console.log(shenimet));
}


