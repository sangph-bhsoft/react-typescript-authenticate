export const loginSever = (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "sangph" && password === "123456") {
        resolve({
          user: {
            fullName: "Pham Huu Sang",
            username: "sangph",
          },
        });
      } else {
        reject({
          error: {
            message: "Sai ten dang nhap hoac mat khau",
          },
        });
      }
    }, 2000);
  });
};
