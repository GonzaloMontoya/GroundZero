const pages = ["BlueGhost", "MrBlue", "MrBlueSky", "Sky", "SoLong", "Petalos"];
const dropdown = document.getElementById("dropdown");

pages.forEach(page => {
    const a = document.createElement("a");
    a.href = `${page}.html`;
    a.textContent = page;
    dropdown.appendChild(a);
});

function searchPage(e) {
    e.preventDefault();
    const searchInput = document.getElementById("search-input").value;
    const result = pages.find(page => page.toLowerCase() === searchInput.toLowerCase());
    if (result) {
        window.location.href = `${result}.html`;
    } else {
        alert('No se encontró la página');
    }
}

function showDropdown() {
    dropdown.style.display = "block";
}

function hideDropdown() {
    setTimeout(() => {
        dropdown.style.display = "none";
    }, 200);  
}