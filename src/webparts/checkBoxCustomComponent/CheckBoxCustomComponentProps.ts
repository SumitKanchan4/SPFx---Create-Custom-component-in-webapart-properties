import {IPropertyPaneCheckboxProps, } from '@microsoft/sp-webpart-base';


interface ICheckBoxCustomComponentProps {
  label: string;
  options?: ICheckBoxOption[];
  disabled?: boolean;
  onChange?: (option: ICheckBoxOption, index?: number) => void;
  allSelected?: (options: ICheckBoxOption[]) => void;
}

interface ICheckBoxOption {
  key: string;
  value: string;
  checked?: boolean;
}