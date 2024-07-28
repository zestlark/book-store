async function fetchNav(id) {
    const fetchNavdat = await fetch('../components/nav.html');
    const navHTML = await fetchNavdat.text();
    document.getElementById(id).innerHTML = navHTML;

    const loginBtn = document.querySelector('.login-btn');
    if (localStorage.getItem("auth") !== 'true') {
        loginBtn.innerHTML = `<a href="login.html">login</a>`;
    } else {
        loginBtn.innerHTML = `<a href="#" onclick="logout()">logout</a>`;
        loginBtn.classList.add('red');
    }
}