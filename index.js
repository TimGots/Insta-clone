const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const mainEl = document.getElementById("main")
let html = ""
for (i = 0; i < posts.length; i++) {
    html += `
    <article class="post">
        <div class="main">
            <div class="person">
                <img class="avatar" src="${posts[i].avatar}">
                <h2>${posts[i].name}</h2>
                <p class="location">${posts[i].location}</p>
            </div>
            <img class="post-img" src="${posts[i].post}">
            <div class= "func">
            <img class="icon" src="images/icon-heart.png">
            <img class="icon" src="images/icon-comment.png">
            <img class="icon" src="images/icon-dm.png">
            </div>
            <p class="bold">${posts[i].likes} likes</p>
            <p><span class="bold">${posts[i].username + " "}</span>${posts[i].comment}</p>
        </div>
    </article>
    `
}
mainEl.innerHTML = html


