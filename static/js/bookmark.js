const icon = document.getElementById("icon");
const bookmark_tab = document.getElementById('dropdownMenu2');
const bm_lists = document.getElementById("bm-lists");


function bookmark_function(event){
    event.preventDefault();
    
    if(icon.classList.contains('text-white')){
        fetch("/add-bookmark", {
            method: 'GET',
            headers: {"Content-Type": "application/json",'Accept': 'application/json'},
        })
        .then(response => response.json())
        .then(data => {
            if (data['status'] == 200){
                icon.classList.remove('text-white');
                icon.classList.add('text-warning');
                console.log("add bookmark reponse 200")
            } else if  (data['status'] == 400){
                console.log("add bookmark reponse 400")
            }
        })
    } else if (icon.classList.contains('text-warning')) {
        fetch("/remove-bookmark", {
            method: 'GET',
            headers: {"Content-Type": "application/json",'Accept': 'application/json'},
        }).then(response => response.json())
        .then(data => {
            if (data['status'] == 200){
                icon.classList.remove('text-warning');
                icon.classList.add('text-white');
                console.log("add bookmark reponse 200")
            } else {
                console.log("add bookmark reponse 400")
            }
        })
    }
};

function dropdown_bookmark(event){
    event.preventDefault();
    fetch("/get-bookmarks", {
        method: 'GET',
        headers: {"Content-Type": "application/json",'Accept': 'application/json'},
    }).then(response => response.json())
    .then(data => {
        if (data['status'] == 200){
            bm_lists.innerHTML = null
            data['bookmarks'].forEach(element => {
                bm_lists.innerHTML += `<a id="bm-lists"><li id="${element}" class="bookmark-list-items">${element}</li>
                                        <div class="dropdown-divider"></div></a>`
            });
        }
    })
}


document.getElementById("bookmark-tab").addEventListener('click', bookmark_function)
document.getElementById('dropdownMenu2').addEventListener('click', dropdown_bookmark)




document.getElementById('bm-ul-element').addEventListener('click', e => {
    fetch("/change-word-by-bookmark", {
        method: "POST",
        redirect: "follow",
        headers: {"Content-Type": "application/json",'Accept': 'application/json'},
        body: JSON.stringify({'word' : e.target.id})
    }).then(response => response.json())
    .then(data => {
        if (data['status'] == 200){
            window.location.href = '/main';
        }
    })
});