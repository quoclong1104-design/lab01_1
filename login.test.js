const login = require("./login");

test("Đăng nhập thành công với username và password đúng", () => {
    expect(login("admin", "123")).toBe(true);
});

test("Đăng nhập thất bại khi password sai", () => {
    expect(login("admin", "1234")).toBe(false);
});

test("Đăng nhập thất bại khi username sai", () => {
    expect(login("user", "123")).toBe(false);
});
