async function fetchBooks(){
        const response = await fetch('../books.json');
        const data = await response.json();
        return data;
}