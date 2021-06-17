import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage } from 'vee-validate';
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
    defineRule('max', max);
    defineRule('min', min);
    defineRule('alphaSpaces', alphaSpaces);
    defineRule('email', email);
    defineRule('numeric', numeric);
    defineRule('alphaDash', alphaDash);
    defineRule('alpha', alpha);
    defineRule('min_value', minVal);
    defineRule('max_value', maxVal);
    defineRule('confirmed', confirmed);
    defineRule('excluded', excluded);
  }
};
