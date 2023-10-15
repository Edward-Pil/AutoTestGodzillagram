const { By } = require('selenium-webdriver');

const locators = {
    //РЕГИСТРАЦИЯ
    //Поля ввода
    loginInputReg: By.id("username"),
    emailInputReg: By.id("email"),
    passwordInputReg: By.id("password"),
    confirmInputReg: By.id("confirm"),
    //Галка на политики
    checkPolicyReg: By.xpath("//button[@role='checkbox']"),
    TermsReg: By.xpath("//span[text()='Terms of Service']"),
    PolicyReg: By.xpath("//span[text()='Privacy Policy']"),
    backAuth: By.xpath("//p[text()='Back to sign up']"),
    //Ошибки регистрация
    loginErrorReg: By.xpath("//div[@class='input_errorContainer__BXmUh'][1]"),
    emailErrorReg: By.xpath("(//div[@class='input_errorContainer__BXmUh'])[2]"),
    passwordErrorReg: By.xpath("(//div[@class='input_errorContainer__BXmUh'])[3]"), 
    confirmationErrorReg: By.xpath("(//div[@class='input_errorContainer__BXmUh'])[4]"),
    //Кнопка регистрации
    buttonReg: By.xpath("//button[@class='button_primary__TtywJ button_fullWidth__KGFOv registration-form_btnSingUp__rxmw5']"),

    //Логинизация
    //Поля ввода
    emailInputLog: By.xpath("//input[@autocomplete='email']"),
    passwordInputLog: By.xpath("//input[@autocomplete='current-password']"),
    //Ошибки логина
    emailErrorLog: By.xpath("//div[@class='input_main__qIW6i'][1]//div//p"),
    passwordErrorLog: By.xpath("//div[@class='input_main__qIW6i'][2]//div//p"),
    //Кнопка логина
    buttonLog: By.xpath("//button[@class='button_primary__TtywJ button_fullWidth__KGFOv login-form_btnSingUp__bdZqw']"),
  }
  
  module.exports = locators;