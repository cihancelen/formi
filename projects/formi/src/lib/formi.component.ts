import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormiSchemas } from './models/formi.model';
import mock from './mock-data';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormiOutput } from './models/output.model';

@Component({
  selector: 'formi',
  template: `
    <fieldset>
      <legend>{{ schemas.schema.title }}</legend>

      <form [formGroup]="formGroup" (ngSubmit)="submit($event)">
        <ng-container *ngFor="let input of schemas.schema.controls">
          <label>
            {{ input.caption }}
            <input
              [type]="input.type"
              [placeholder]="input.placeholder"
              [required]="input.required"
              [formControlName]="input.name"
            />
          </label>
        </ng-container>
      </form>
    </fieldset>
  `,
  styles: [],
})
export class FormiComponent implements OnInit, OnChanges {
  @Input('schema') schemas: FormiSchemas = mock.FORM;

  @Output('onSubmit') onSubmit = new EventEmitter<FormiOutput>();

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    const form = this.groupForm();

    this.formGroup = this.formBuilder.group(form);
  }

  private groupForm() {
    const form = {};

    this.schemas.schema.controls.forEach((input) => {
      const { min = null, max = null, minLength = null, maxLength = null } =
        input?.validations || {};

      const required = input.required;

      const validators = [
        min ? Validators.min(min) : null,
        max ? Validators.max(max) : null,
        minLength ? Validators.minLength(minLength) : null,
        maxLength ? Validators.maxLength(maxLength) : null,
        required ? Validators.required : null,
      ].filter((v) => v);

      form[input.name] = new FormControl(
        input.value,
        input.validatorOrOpts || validators
      );
    });

    return form;
  }

  submit($event) {
    const outputModel = {
      event: $event,
      submitted: true,
      valid: this.formGroup.valid,
      form: this.formGroup.value,
    } as FormiOutput;

    this.onSubmit.emit(outputModel);
  }
}
