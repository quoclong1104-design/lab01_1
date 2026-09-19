function login(username, password) {
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

// Xử lý form đăng nhập
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

// Cho phép Jest import hàm login
if (typeof module !== "undefined") {
    module.exports = login;
}
