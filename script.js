function loopBook(bookscollection, parentNode) {
    var num = 0
    bookscollection.forEach(function (book) {
        var structure = `
    <div class="card">
                <div class="img-box">
                    <img class="unset" src="${book.image}" alt="">
                    <img class="first" src="${book.image}" alt="">
                    <img class="second" src="${book.image}" alt="">
                </div>
                <span class="info">
                    <h3>${book.title}</h3>
                    <p>by : <span>${book.author}</span></p>
                    <button onclick="openviewpage('${num}')">view</button>
                </span>
            </div>
    `;
        num += 1
        document.getElementById(parentNode).innerHTML += structure;
    })
}

function openviewpage(num) {
    goto('./view.html?bookid=' + num);
}

function closeviewbox() {
    document.getElementById('view-data').style.display = "none"
    document.getElementById('view-data').innerHTML = "";
}

// search bar
function cl(data) {
    console.log(data);
}

function search() {
    let sbar = document.getElementById('searchbar')
    let val = sbar.value.toUpperCase();
    let s_data = document.getElementById('main-box').querySelectorAll(".card")
    s_data.forEach(function (e) {
        var gtitle = e.getElementsByClassName('info')[0].getElementsByTagName('h3')[0].innerHTML;
        var gauthor = e.getElementsByClassName('info')[0].getElementsByTagName('p')[0].getElementsByTagName('span')[0].innerHTML;
        cl(gauthor)

        if (val !== '') {
            if (gtitle.toUpperCase().indexOf(val) > -1 || gauthor.toUpperCase().indexOf(val) > -1) {
                e.style.display = 'block';
            } else {
                e.style.display = 'none';
            }
        } else {
            e.style.display = 'block';
        }
    })
}

function goto(url) {
    window.location.href = url
}

function logout() {
    localStorage.setItem('auth', false)
    window.location.reload()
}
