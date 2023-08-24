import { ChangeEvent } from 'react'
export interface Person {
  first_name: string;
  last_name: string;
  current_address: string;
}
export interface Employer {
  name: string;
  start_date: string;
  end_date: string;
}
export interface Guarantor {
  name: string;
  address: string;
  relation: string;
}
export interface DataModel {
  personal: Person;
  employer: Employer[];
  guarantor: Guarantor;
}

export interface ValidationConfig {
  msg?: string;
  validationFn?: (val: string) => boolean;
}

export interface UseFormInputResult {
  control: {
    value: string;
    onChange: (
      e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | SimpleCustomSelectEvent
    ) => void;
  };
  validation: {
    isValid: boolean;
    validationMsg?: string;
  };
}

export interface Option {
  value: string;
  [key: string]: any;
}

export interface CustomSelectProps {
  options?: Option[];
  onChange: (e: SimpleCustomSelectEvent) => void;
  value: string;
  disabled?: boolean;
  styles?: CustomSelectStyles;
  testId?: string;
}

export interface CSSObject {
  [key: string]: string|number|CSSObject
}

export interface CustomSelectStyles {
  control?: CSSObject;
  body?: CSSObject;
  arrow?: CSSObject;
  optionsList?: CSSObject;
  option?: CSSObject;
}

export interface SimpleCustomSelectEvent { 
  target: { type: string; value: string; }
}