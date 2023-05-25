const form = document.querySelector("#list-form");
document.querySelector("#list-form-submit").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("received");
  ProcessData.addItems();
  RenderDOM.renderItems();
  form.reset();
});

const items = [];

const ProcessData = (() => {
  const createItem = (tech, done) => {
    return { tech, done };
  };

  const addItems = () => {
    let newItem = createItem(
      document.querySelector("#list-form-input").value,
      false
    );
    items.push(newItem);
    console.log(items);
  };

  return { addItems };
})();

const RenderDOM = (() => {
  const itemsContainer = document.querySelector("#items-container");
  const renderItems = () => {
    let loadHTML = "";
    items.forEach((item) => {
      loadHTML += `
        <div class="item">
            <input type="checkbox" />
            <p>${item.tech}</p>
        </div>
        `;
    });
    itemsContainer.innerHTML = loadHTML;
  };
  return { renderItems };
})();
