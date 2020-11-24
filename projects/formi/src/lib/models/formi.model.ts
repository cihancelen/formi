export interface FormiSchemas {
  schema: {
    title?: string;
    inputs: FormiInput[];
  };
}

export interface FormiInput {
  /**
   * @caption This property top of input show text.
   */
  caption?: string;
  /**
   * @type This property specifies the type of input.
   */
  type: InputType;
  /**
   *
   */
  name: string;
  /**
   * @required
   */
  required?: boolean;
  /**
   * @placeholder
   */
  placeholder?: string;
  /**
   * @mask
   */
  mask?: string;
  /**
   * @value
   */
  value?: string;
  validations?: Validation;
}

export interface Validation {
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
}

export type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export enum InputTypes {
  'button' = 'button',
  'checkbox' = 'checkbox',
  'color' = 'color',
  'date' = 'date',
  'datetime-local' = 'datetime-local',
  'email' = 'email',
  'file' = 'file',
  'hidden' = 'hidden',
  'image' = 'image',
  'month' = 'month',
  'number' = 'number',
  'password' = 'password',
  'radio' = 'radio',
  'range' = 'range',
  'reset' = 'reset',
  'search' = 'search',
  'submit' = 'submit',
  'tel' = 'tel',
  'text' = 'text',
  'time' = 'time',
  'url' = 'url',
  'week' = 'week',
}
