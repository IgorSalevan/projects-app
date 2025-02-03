import { FC } from 'react';
import { ValidationRule } from 'react-hook-form';
import FormFieldText from '@/components/FormFields/FormFieldText';
import FormFieldDatePicker from '@/components/FormFields/FormFieldDatePicker';

interface IProps {
  disabled?: boolean;
}

const validatorId: ValidationRule<RegExp> = {
  value: /^[a-zA-Z0-9]+$/,
  message: 'Only letters & numbers (no spaces)',
};

export const ProjectFormFields: FC<IProps> = ({disabled = false}) => (
  <>
    <FormFieldText id="id" label="Project ID" validator={validatorId} />
    <FormFieldText id="name" label="Project Name" />
    <FormFieldText
      id="description"
      label="Description"
      required={false}
      multiline
      rows={4}
      fullWidth
    />
    <FormFieldDatePicker id="startDate" label="Start Date" disabled={disabled} />
    <FormFieldDatePicker id="endDate" label="End Date" disabled={disabled} />
    <FormFieldText id="manager" label="Manager" />
  </>
);
