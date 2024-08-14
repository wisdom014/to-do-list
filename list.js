      function addItem(event) {
        event.preventDefault();
        const list = document.getElementById("list");
        const itemText = list.value.charAt(0).toUpperCase() + list.value.slice(1); // Capitalize first letter
        const itemLists = document.getElementById("item-lists");

        const itemList = document.createElement("li");
        itemList.innerHTML = `
        <div class="container">
          <input type="checkbox" onchange="toggleDone(this)" />
          <span>${itemText}</span>
          <button onclick="deleteItem(this)">Delete</button>
        </div>
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