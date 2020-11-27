import { AbstractControlOptions, Validator, ValidatorFn } from '@angular/forms';
import { fillConstructor } from '../helpers/object.helper';

export interface FormiSchemas {
  schema: {
    title?: string;
    controls: FormiControl[];
  };
}

export class FormiControl {
  /**
   * @caption This property top of input show text.
   */
  caption?: string;
  /**
   * @name
   */
  name: string;
  /**
   * @required
   */
  required?: boolean;
  /**
   * @validations
   */
  validations?: Validation;
  /**
   * @validatorOrOpts
   */
  validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
  /**
   * @value
   */
  value?: string | number | any;
}

export class FormiInput extends FormiControl {
  constructor(config: FormiInput) {
    super();

    fillConstructor(config);
  }

  /**
   * @type This property specifies the type of input.
   */
  type: InputType;

  /**
   * @placeholder
   */
  placeholder?: string;
  /**
   * @mask
   */
  mask?: string;
}

export class FormiSelect extends FormiControl {
  constructor(config: FormiSelect) {
    super();

    fillConstructor(config);
  }

  options: FormiSelectOption[];
}

export enum FormiSelectType {
  'select' = 'select',
}

export interface FormiSelectOption {
  value: string | number | any;
  displayText: string;
  selected: boolean;
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

export type SelectType = 'select';

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
