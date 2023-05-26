const GetUserInfo = (() => {
  const form = document.querySelector("#list-form");
  const activateListner = () => {
    document
      .querySelector("#list-form-submit")
      .addEventListener("click", (e) => {
        e.preventDefault();
        console.log("received");
        ProcessData.addItems();
        form.reset();
      });
  };
  return { activateListner };
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

  const getDataBase = () => {
    return database;
  };
  return { addItems, getDataBase };
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

GetUserInfo.activateListner();
RenderDOM.renderItems(ProcessData.getDataBase());
