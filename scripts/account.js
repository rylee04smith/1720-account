// Grab references to the sign up form
const signup = document.querySelector("#signup");
const submitBtn = document.querySelector("#signup input[type='submit']");
submitBtn.addEventListener("click", createProfile);

//grab references to the delete local storage
const display = document.querySelector("#display");
const details = document.querySelector("#display div");
const deleteBtn = document.querySelector("#display > button");
deleteBtn.addEventListener("click", deleteProfile);

//check to see if local storage data exists
const myaccount = localStorage.getItem("ly-Name");

if (myaccount === null) {
    signup.classList.remove("hide");
    display.classList.add("hide");
} else {
    signup.classList.add("hide");
    display.classList.remove("hide");
    details.innerHTML = `
<h3>Full Name</h3><p>${localStorage.getItem("ly-Name")}</p>
<h3>Email Address</h3><p>${localStorage.getItem("ly-Email")}</p>
<h3>Phone Number</h3><p>${localStorage.getItem("ly-Phone")}</p>
`

}


// function to create profile and store in local storage
function createProfile(event) {
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");

    if (name.value && email.value && phone.value) {
        localStorage.setItem("ly-Name", name.value);
        localStorage.setItem("ly-Email", email.value);
        localStorage.setItem("ly-Phone", phone.value);
    }
}

// function to delete profile and remove from local storage
function deleteProfile(event) {
    localStorage.removeItem("ly-Name");
    localStorage.removeItem("ly-Email");
    localStorage.removeItem("ly-Phone");
    window.location.reload();
}
