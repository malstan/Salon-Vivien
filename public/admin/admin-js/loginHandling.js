/**
 * Stanislav Malik
 * 2021
 * handling login form
 */

const form = document.getElementById("loginForm");
form.onsubmit = loginHandling;

/**
 * handle login form
 * @param event
 */
function loginHandling (event) {
    event.preventDefault();

    const username = form.elements["username"].value.trim();
    const password = form.elements["password"].value.trim();

    if (username === "" || password === "") {
        document.getElementById("form-error").style.visibility = "visible";
        return;
    }

    const url = "http://localhost/salon-vivien/server/login/login.php";

    const postRequest = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({username: username, password: password}),
    };

    fetch(url, postRequest)
        .then(response => {
            if (response.ok) {
                window.location.href = response.url;
                return Promise.resolve();
            } else
                return Promise.reject();
        })
        .catch(() => {
            document.getElementById("form-error").style.visibility = "visible";
        });
}