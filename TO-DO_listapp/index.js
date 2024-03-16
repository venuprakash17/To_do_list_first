// alert('HELLO JS')

'use strict'
// console.log(a)

// ''
// Check if the item exists in local storage


// alert('cvjhabsca')
if (localStorage.getItem('TO-DO_Item') !== null) {
    let Active_to_do_list = JSON.parse(localStorage.getItem('TO-DO_Item'))
    console.log(Active_to_do_list);
    Active_to_do_list.forEach(element => {
        add_elements_to_UL(element)
    });
}
function add_to_local_storage(value) {
    var list_items = localStorage.getItem('TO-DO_Item');
    if (list_items !== null) {
        let TO_do_list = JSON.parse(list_items)
        TO_do_list.push(value)
        localStorage.setItem('TO-DO_Item', JSON.stringify(TO_do_list))
    } else {
        console.log('no item so adding the item list')
        let new_Todo_list = [value];
        localStorage.setItem('TO-DO_Item', JSON.stringify(new_Todo_list))
    }
}

function add_elements_to_UL(value) {
    let newli = document.createElement("li");
    $('.Unordered_list')[0].appendChild(newli)
    var newH2 = document.createElement("h2");
    var newimg1 = document.createElement("img");
    newimg1.src = "https://icons.veryicon.com/png/o/miscellaneous/godserver/delete-323.png";
    var newimg2 = document.createElement("img");
    newimg2.src = "https://www.svgrepo.com/show/36160/edit-button.svg";

    newli.appendChild(newH2)
    newli.appendChild(newimg1)
    newli.appendChild(newimg2)
    newH2.innerText = value;
}
function addToMyList() {
    let newListInputValue = $('.todo-input')[0].value;
    if (newListInputValue.length > 0) {
        add_elements_to_UL(newListInputValue);
        add_to_local_storage(newListInputValue);
        $('.todo-input')[0].value = '';
    } else {
        alert('please enter some infomration')
    }
}


$('button[type="submit"]')[0].addEventListener('click', addToMyList)
$('[class="container"]')[0].addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        addToMyList();
    }
})


