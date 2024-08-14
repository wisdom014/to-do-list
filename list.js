      function addItem(event) {
        event.preventDefault();
        const list = document.getElementById("list");
        const itemText = list.value;
        const itemLists = document.getElementById("item-lists");

        const itemList = document.createElement("li");
        itemList.innerHTML = `
          <input type="checkbox" onchange="toggleDone(this)" />
          <span>${itemText}</span>
          <button onclick="deleteItem(this)">Delete</button>
        `;
        itemLists.appendChild(itemList);
        list.value = "";
      }

      function toggleDone(checkbox) {
        const itemList = checkbox.parentElement;
        itemList.querySelector("span").style.textDecoration = checkbox.checked
          ? "line-through"
          : "none";
      }

      function deleteItem(button) {
        const itemList = button.parentElement;
        itemList.remove();
      }