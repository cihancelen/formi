export interface FormiOutput {
  event: any;
  submitted: boolean;
  valid: boolean;
  form: {
    [key: string]: string;
  };
}
