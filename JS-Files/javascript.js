console.log("Hello, Akshay-Gohrava!");
//for opening the Menu-bar

function drop() {
    let drop = document.getElementById('drop');
    drop.style.width = '100%';
}
// for closing the Menu-bar

function closed() {
    let closed = document.getElementById('drop');
    closed.style.width = '0';
}
// menu dropping 

function down() {
    let down = document.getElementById('menu-down');
    down.style.height = "100vh";
}
// closing the menu

xclose = () => document.getElementById('menu-down').style.height = "0";
