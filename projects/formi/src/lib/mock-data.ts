import { Validators } from '@angular/forms';
import {
  FormiSchemas,
  FormiSelectType,
  InputTypes,
} from './models/formi.model';

const FORM: FormiSchemas = {
  schema: {
    title: 'Login Form',
    controls: [
      {
        name: 'username',
        caption: 'Kullanıcı Adı',
        placeholder: 'Lütfen kullanıcı adınızı giriniz.',
        type: InputTypes.text,
        required: true,
        value: 'cihancelen',
      },
      {
        name: 'password',
        caption: 'Parola',
        placeholder: '...',
        type: InputTypes.password,
        validatorOrOpts: [Validators.required, Validators.minLength(6)],
      },
      {
        type: FormiSelectType.select,
        caption: 'Cinsiyet',
        options: [],
      },
      {
        name: 'submit',
        value: 'Submit',
        type: InputTypes.submit,
      },
    ],
  },
};

export default {
  FORM,
};
