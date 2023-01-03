function corporate(){
    alert("You access to corporate");
}

function remove(){
    const element = document.getElementById("sign-in");
    element.remove();
}

function displayInvestor(){
    const btn = document.getElementById('customerButton');
    btn.addEventListener('click', function handleClick() {
    btn.textContent = 'I am a Investor';
    });
}

function setActive(element) {
    element.style.backgroundColor = "rgb(19,63,112)";
    element.style.color = "#fafafa";
    element.style.width = "80px";
    element.style.borderRadius = "6px";
}