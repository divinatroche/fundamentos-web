var likes= [9,12,9];
var spans=[
    document.querySelector('#post1'),
    document.querySelector('#post2'),
    document.querySelector('#post3'),
]
function like(idPost){
    likes[idPost]++;
    spans[idPost].innerHTML = likes[idPost];
}

