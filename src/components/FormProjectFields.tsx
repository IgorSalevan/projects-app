import { FC } from 'react';
import { ValidationRule } from 'react-hook-form';
import FormFieldText from '@/components/FormFields/FormFieldText';
import FormFieldDatePicker from '@/components/FormFields/FormFieldDatePicker';

interface IProps {
  mode: 'create' | 'edit' | 'view'
  disabled?: boolean;
  editMode?: boolean;
}

const validatorId: ValidationRule<RegExp> = {
  value: /^[a-zA-Z0-9_]+$/,
  message: 'Only letters & numbers (no spaces)',
};

export const ProjectFormFields: FC<IProps> = ({mode}) => (
  <>
    <FormFieldText id="id" label="Project ID" validator={validatorId} disabled={mode === 'edit'}/>
    <FormFieldText id="name" label="Project Name" />
    <FormFieldText
      id="description"
      label="Description"
      required={false}
      multiline
      rows={4}
      fullWidth
    />
    <FormFieldDatePicker id="startDate" label="Start Date" disabled={mode === 'view'} />
    <FormFieldDatePicker id="endDate" label="End Date" disabled={mode === 'view'} />
    <FormFieldText id="manager" label="Manager" />
  </>
);
