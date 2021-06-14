const form = document.getElementById("loginForm");
form.onsubmit = loginHandling;

function loginHandling (event) {
    event.preventDefault();

    const username = form.elements["username"].value.trim();
    const password = form.elements["password"].value.trim();

    if (username === "" || password === "") {
        document.getElementById("form-error").style.visibility = "visible";
        return;
    }

    const url = "http://localhost:3000/admin/login";

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