$(document).ready(function () {
    $(".subcon").append(card());
    
})

function card() {
    '<div class="card" style="width: 18rem;">' +
    '<img class="card-img-top" src="../Images/bareBears.jpg" alt="Card image cap">' +
    '<div class="card-body">' +
    '<h5 class="card-title">Card title</h5>' +
    '<p class = "card-text" > Some quick example text to build on the card title</p>' +
    '< a href = "#"class = "btn btn-primary" > Go somewhere < /a></div></div>'
}