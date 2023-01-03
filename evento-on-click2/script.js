
function like(){
    alert("Ninja was liked");
}

function remove(){
    const element = document.getElementById("remove");
    element.remove();
}

function displayLogout(){
    const btn = document.getElementById('btn-login');
    btn.addEventListener('click', function handleClick() {
    btn.textContent = 'Logout';
    });
}