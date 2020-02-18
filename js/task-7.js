const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if (login.length < 4 || login.length > 16) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    return false;
  }
  return true;
};

const isLoginUnique = function(allLogins, login) {
  if (allLogins.includes(login)) {
    console.log('Такой логин уже используется!');
    return false;
  }
  return true;
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    console.log('Логин успешно добавлен!');
    logins.push(login);
  }
};

addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
