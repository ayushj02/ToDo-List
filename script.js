// console.log('Connected To Live Server'); (For Testing Purpose!)

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form Submit Event
form.addEventListener('submit', addItem);

// Delete Event
itemList.addEventListener('click', removeItem)

// Filter Event
NodeFilter.addEventListener('key', filterItems);

// Add item
function addItem(e){
    e.preventDefault();

    // Get Input Value
    var newItem = document.getElementById('item').value;

    // Create New li element
    var li = document.createElement('li');
    // Add Class
    li.className = 'list-group-item';
    // Add Text Node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete Button element
    var deleteBtn = document.createElement('button');

    // Add class
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append Text Node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append Button To li
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

// Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get list items
    var items = itemList.getElementsByTagName('li');
    // Convert to an Array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}

function reset(){
    itemList.style.display = "none";
}