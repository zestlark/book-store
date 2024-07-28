async function showBookById(bookscollection, bookid) {
    let auth = localStorage.getItem('auth');

    let button = auth == "true" ?
        `` :
        `<div class="read" onclick="goto('./login.html')">login to Read more</div>`

    const posterIMage = bookscollection[bookid].image
    const author = 'by - ' + bookscollection[bookid].author
    const title = bookscollection[bookid].title
    const type = bookscollection[bookid].type
    const summary = bookscollection[bookid].summary

    const posterEmelent = document.getElementById('poster-element')
    const authorEmelent = document.getElementById('author-element')
    const titleElement = document.getElementById('title-element')
    const typeElement = document.getElementById('type-element')
    const summaryElement = document.getElementById('summary-element')
    const buttonsElement = document.getElementById('buttons-element')

    posterEmelent.src = posterIMage
    authorEmelent.textContent = author
    titleElement.textContent = title
    typeElement.textContent = type
    summaryElement.textContent = summary
    buttonsElement.innerHTML = button

    return bookscollection[bookid]
}