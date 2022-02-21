// DOM elements
const guideList = document.querySelector(".guides");
const guideNumber = document.querySelector(".count");
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const accountDetails = document.querySelector(".account-details");

//About Account
const setupUI = (user) => {
  if (user) {
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        const html = `
      <div>Logged in as ${user.email}</div>
      <div>"${doc.data().bio}"</div>
    `;
        accountDetails.innerHTML = html;
      });
    // toggle user UI elements logged in/out
    loggedInLinks.forEach((item) => (item.style.display = "block"));
    loggedOutLinks.forEach((item) => (item.style.display = "none"));
  } else {
    // clear account info
    accountDetails.innerHTML = "";
    // toggle user elements
    loggedInLinks.forEach((item) => (item.style.display = "none"));
    loggedOutLinks.forEach((item) => (item.style.display = "block"));
  }
};

// setup guides
const setupGuides = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const guide = doc.data();
      const li = `
        <div class="row">
          <div class=" col s4 m6">
            <div class="card-panel hoverable grey lighten-3">
                <span class="card-title">${guide.title}</span>
                <div class="card-action grey-text">
                  <div class="card-content">
                    <p>${guide.content}</p>
                  </div>
                </div>
                  <button id="completeGuide" class="btn-small green darken-2 z-depth-0">Complete</button> <button class="btn-small red darken-2 z-depth-0">Delete</button>
            </div>

          </div>

            `;
      html += li;
    });
    guideNumber.innerHTML = `<h6 class="grey-text lighten-3">You have <a class="red-text">${data.length}</a> items in your list</h6>`;
    guideList.innerHTML = html;
    console.log(data.length);
  } else {
    guideList.innerHTML = '<h5 class="center-align">Login to view guides</h5>';
  }
};
/*//test
document.getElementById("changeGreen").onclick = function(){
	document.getElementById("output").style.color = 'green';*/

// setup materialize components
document.addEventListener("DOMContentLoaded", function () {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  var items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});
