import { FormiSchemas, InputTypes } from './models/formi.model';

const FORM: FormiSchemas = {
  schema: {
    title: 'Login Form',
    inputs: [
      {
        name: 'username',
        caption: 'Kullanıcı Adı',
        placeholder: 'Lütfen kullanıcı adınızı giriniz.',
        type: InputTypes.text,
        required: true,
        value: 'cihancelen'
      },
      {
        name: 'password',
        caption: 'Parola',
        placeholder: '...',
        type: InputTypes.password,
        required: true,
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
