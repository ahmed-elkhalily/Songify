import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate';
import {
  required,
  max,
  min,
  alpha_spaces as alphaSpaces,
  email,
  numeric,
  alpha_dash as alphaDash,
  alpha,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('tos', required);
    defineRule('max', max);
    defineRule('min', min);
    defineRule('alphaSpaces', alphaSpaces);
    defineRule('email', email);
    defineRule('numeric', numeric);
    defineRule('alphaDash', alphaDash);
    defineRule('alpha', alpha);
    defineRule('min_value', minVal);
    defineRule('max_value', maxVal);
    defineRule('password_dismatch', confirmed);
    defineRule('excluded_country', excluded);

    configure({
      generateMessage: ctx => {
        const messages = {
          required: `the ${ctx.field} field is required`,
          min: `the ${ctx.field} field is to short`,
          max: `the ${ctx.field} field is to long`,
          alphaSpaces: `the ${ctx.field} must contains alphapatics and spaces`,
          email: `this field must be an email`,
          numeric: `the ${ctx.field} field must contain numbers only`,
          alpha: `the ${ctx.field} field must be alphabatics only`,
          min_value: `the ${ctx.field} is too low`,
          max_value: `the ${ctx.field} is too heigh`,
          password_dismatch: `the ${ctx.field} field don't the password field`,
          excluded_country: `due to restructions, we don't accept users from this location`,
          tos: `you must accept our rules.`
        };
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `the field ${ctx.field} is invalid`;
        return message;
      }
    });
  }
};
