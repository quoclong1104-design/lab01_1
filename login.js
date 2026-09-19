function login(username, password) {
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

// Chỉ chạy phần giao diện khi có document
if (typeof document !== "undefined") {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const result = login(username, password);

        const message = document.getElementById("message");

        if (result) {
            message.textContent = "Đăng nhập thành công!";
        } else {
            message.textContent = "Sai username hoặc password!";
        }
    });
}

module.exports = login;
