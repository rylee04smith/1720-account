//reference to the selected elements that we are going to use
const darkbtn = document.querySelector("#dark");
const darkel = document.body

// load saved preferences from local storage
if (localStorage.getItem('theme') === 'dark') {
    darkel.classList.add("dark");
}

//toggle and save the dark mode preference to local storage
darkbtn.addEventListener('click', () => {
    const isDark = darkel.classList.toggle("dark");
    console.log(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});