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
  const database = [];

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
    RenderDOM.renderItems(database);
  };

  return { addItems };
})();

const RenderDOM = (() => {
  const itemsContainer = document.querySelector("#items-container");
  const renderItems = (database) => {
    itemsContainer.innerHTML = database
      .map((item, i) => {
        return `
        <div class="item" id="item-${i}">
            <input type="checkbox" />
            <p>${item.tech}</p>
        </div>
        `;
      })
      .join("");
  };
  return { renderItems };
})();

GetUserInfo.activateListner();
