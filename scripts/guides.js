// create new guide
const createForm = document.querySelector("#create-form");
createForm.addEventListener("submit", (e) => {
  e.preventDefault(); //don't refresh the page
  db.collection("guides")
    .add({
      title: createForm.title.value, //could either do [] or dot notation
      content: createForm.content.value,
    })
    .then(() => {
      // close modal & reset form
      const modal = document.querySelector("#modal-create");
      M.Modal.getInstance(modal).close();
      createForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
});
