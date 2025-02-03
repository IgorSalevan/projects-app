import { FC } from 'react';
import { TextField } from '@mui/material';
import { useFormContext, ValidationRule } from 'react-hook-form';
import { useDetectMobile } from '@/hooks/useDetectMobile';
import FormFieldLabel from './FormFieldLabel';
import { IFieldProps } from './types';

interface IProps extends IFieldProps {
  validator?: ValidationRule<RegExp>;
  multiline?: boolean;
  rows?: number;
}

const FormTextField: FC<IProps> = ({
  id,
  label,
  fullWidth = false,
  required = true,
  validator: pattern,
  ...props
}) => {
  const isMobile = useDetectMobile();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  console.log(id, pattern)
  return (
    <FormFieldLabel label={label}>
      <TextField
        id={id}
        label={isMobile ? label : undefined}
        fullWidth={fullWidth}
        {...(required
          ? register(id, { required: `${label} is required`, pattern })
          : register(id, { pattern }))}
        error={!!errors[id]}
        helperText={errors[id]?.message as string}
        sx={{
          ['& fieldset']: {
            borderRadius: 0,
          },
          input: {
            py: 1.5,
          },
        }}
        {...props}
      />
    </FormFieldLabel>
  );
};

export default FormTextField;
