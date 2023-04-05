const books = [
    {
        "title": "Meditations",
        "author": "Marcus Aurelius",
        "summary": "A classic self-help book that contains the personal writings of the Roman Emperor, Marcus Aurelius, in which he reflects on life, virtue, and the nature of the universe.",
        "image": "https://m.media-amazon.com/images/I/41lHhcjiDgL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        "url": "./books/Marcus-Aurelius-Meditations.pdf",
        "type": "self-help"
    },
    {
        "title": "The 7 Habits of Highly Effective People",
        "author": "Stephen Covey",
        "summary": "A self-help book that presents seven habits that can help people become more effective in their personal and professional lives, based on principles of character and ethics.",
        "image": "https://m.media-amazon.com/images/I/41+30NekJML._SX321_BO1,204,203,200_.jpg",
        "url": "./books/The 7 Habits of Highly Effective People PDF.pdf",
        "type": "self-help"
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "summary": "A dystopian novel set in a totalitarian society, where the government controls every aspect of citizens' lives, including their thoughts and feelings.",
        "image": "https://m.media-amazon.com/images/I/41aM4xOZxaL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        "url": "./books/1984.pdf",
        "type": "fiction"
    },
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "summary": "A classic novel set in the 1930s Deep South, which explores racial injustice and prejudice through the eyes of a young girl.",
        "image": "https://m.media-amazon.com/images/I/51N5qVjuKAL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        "url": "./books/TKMFullText.pdf",
        "type": "fiction"
    },
    {
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "summary": "A coming-of-age novel narrated by the teenage protagonist, Holden Caulfield, who grapples with alienation and disillusionment after being expelled from school.",
        "image": "https://m.media-amazon.com/images/I/518dVCGFuhL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        "url": "./books/Catcher-in-the-Rye.pdf",
        "type": "fiction"
    },
    {
        "title": "Atomic Habits",
        "author": "James Clear",
        "summary": "A self-help book that offers practical advice on how to build good habits and break bad ones, based on the idea of small incremental improvements over time.",
        "image": "https://m.media-amazon.com/images/I/51B7kuFwQFL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        "url": "./books/Atomic-Habits.pdf",
        "type": "self-help"
    },
    {
        "title": "The Power of Now",
        "author": "Eckhart Tolle",
        "summary": "A spiritual guidebook that teaches readers how to live in the present moment and let go of negative thoughts and emotions, to achieve inner peace and happiness.",
        "image": "https://m.media-amazon.com/images/I/417VRErnKPL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        "url": "./books/THE-POWER-OF-NOW.pdf",
        "type": "self-help"
    },
    {
        "title": "The Subtle Art of Not Giving a F*ck",
        "author": "Mark Manson",
        "summary": "A self-help book that challenges readers to reevaluate their values and priorities, and to focus on what really matters in life, by letting go of negative thoughts and behaviors.",
        "image": "https://m.media-amazon.com/images/I/51mN3bY0JjL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        "url": "./books/The Subtle Art of Not Giving a Fck A Counterintuitive Approach to Living a Good Life by Mark Manson (z-lib.org).pdf",
        "type": "self-help"
    },
    {
        "title": "Think and Grow Rich",
        "author": "Napoleon Hill",
        "summary": "A self-help book that emphasizes the importance of positive thinking, persistence, and personal initiative, as key factors in achieving success and wealth.",
        "image": "https://m.media-amazon.com/images/I/61y04z8SKEL._SX349_BO1,204,203,200_.jpg",
        "url": "./books/Think And Grow Rich ( PDFDrive ).pdf",
        "type": "self-help"
    },
    {
        "title": "The 5 Love Languages",
        "author": "Gary Chapman",
        "summary": "A self-help book that explains the five different ways in which people express and receive love, and offers advice on how to improve communication and strengthen relationships.",
        "image": "https://m.media-amazon.com/images/I/51c0ewv4OML._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        "url": "./books/5zbaneshgh.pdf",
        "type": "self-help"
    }
]

let auth = true;

var num = 0
books.forEach(function (book) {
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
                    <button onclick="openviewbox('${num}')">view</button>
                </span>
            </div>
    `;
    num += 1
    document.getElementById('main-box').innerHTML += structure;
})

function openviewbox(count) {
    let button;
    let auth = localStorage.getItem('auth');
    if (auth == "true") {
        button = `<div class="read" onclick="goto('${books[count].url}')">read</div>`;
    } else {
        button = `<div class="read" onclick="goto('./login.html')">login to Read</div>`;
    }

    let structure = `
    <div class="card">
            <div class="one">
                <img src="${books[count].image}" alt="">
                <small><i>by - ${books[count].author}</i></small>
                <div class="title">${books[count].title}</div>
            </div>
            <div class="two">
                <span>Type : </span>
                ${books[count].type}
            </div>
            <div class="two">
                <span>Summary : </span>
                ${books[count].summary}
            </div>
            ${button}
            <div onclick="closeviewbox()" class="close">X</div>
        </div>
    `;

    document.getElementById('view-data').innerHTML = structure;
    document.getElementById('view-data').style.display = "flex"
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