const GetUserInfo = (() => {
  const form = document.querySelector("#list-form");
  const activateForm = () => {
    document
      .querySelector("#list-form-submit")
      .addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Received");
        ProcessData.addItems();
        FormFunctionality.activeDeleters();

        form.reset();
      });
  };

  return { activateForm };
})();

const ProcessData = (() => {
  const database = JSON.parse(localStorage.getItem("techs")) || [];
  const createItem = (tech, done) => {
    return { tech, done };
  };

  const addItems = () => {
    let newItem = createItem(
      document.querySelector("#list-form-input").value,
      false
    );
    database.push(newItem);
    console.log(database);
    LocalStorage.save(database);
    RenderDOM.renderItems(database);
  };

  const deleteItem = (e) => {
    let index = e.target.dataset.index;
    database.splice(index, 1);
    console.log("Delete-d");
    LocalStorage.save(database);
    RenderDOM.renderItems(database);
  };

  const toggleDone = (e) => {
    if (!e.target.matches("input")) return;
    let [, index] = e.target.id.split("-");
    database[index].done = !database[index].done;
    console.log("Toggle!");
    LocalStorage.save(database);
    RenderDOM.renderItems(database);
  };

  const getDataBase = () => {
    return database;
  };
  return { addItems, getDataBase, deleteItem, toggleDone };
})();

const RenderDOM = (() => {
  const itemsContainer = document.querySelector("#items-container");
  const renderItems = (database = []) => {
    itemsContainer.innerHTML = database
      .map((item, i) => {
        return `
        <div class="item">
            <input type="checkbox"  id="item-${i}" ${
          item.done ? "checked" : ""
        } />
            <label for="item-${i}">${item.tech}</label>
            <button data-index="${i}" class="btn-delete list-deleter">Delete</button>
        </div>
        `;
      })
      .join("");
  };
  return { renderItems };
})();

const LocalStorage = (() => {
  const save = (database) => {
    localStorage.setItem("techs", JSON.stringify(database));
  };

  return { save };
})();

GetUserInfo.activateForm();
RenderDOM.renderItems(ProcessData.getDataBase());

//Dont understan why this code can't move from here
const FormFunctionality = (() => {
  const activeDeleters = () => {
    document.querySelectorAll(".list-deleter").forEach((deleter) => {
      deleter.addEventListener("click", ProcessData.deleteItem);
    });
  };
  const activeToggler = () => {
    document
      .querySelector("#items-container")
      .addEventListener("click", ProcessData.toggleDone);
  };
  return { activeDeleters, activeToggler };
})();

//Only works untill new items are added
FormFunctionality.activeDeleters();
FormFunctionality.activeToggler();
