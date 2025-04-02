
class Post {
    constructor(userId, Id, title, body) {
        this.title = title;
        this.userId = userId;
        this.Id = Id;
        this.body = body;
    }

    getTitle() {
        return `<div class="alert alert-danger">
        title:  ${this.title}
        <button onclick="showAlert('${this.body}')" class="btn btn-primary btn-sm">Details</button>
      </div>`
    }
}




fetch("posts.json")
    .then(res => res.json())
    .then(data => {
        let htmlTitle = "";
        for (let i = 0; i < data.length; i++) {
            let new_obj = new Post(data[i].userId, data[i].id, data[i].title, data[i].body);
            htmlTitle += new_obj.getTitle();
        }
        document.getElementById("setItem").innerHTML = htmlTitle;

    });


function showAlert(bodyItem) {
    alert(bodyItem);
}