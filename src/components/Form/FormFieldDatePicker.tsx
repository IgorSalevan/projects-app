import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useDetectMobile } from '@/hooks/useDetectMobile';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import FormFieldLabel from './FormFieldLabel';
import { IFieldProps } from './types';
import { DateTime } from 'luxon';

interface IProps extends IFieldProps {
  format?: string;
  disableOpenPicker?: boolean;
}

const FormFieldDatePicker: FC<IProps> = ({
  id,
  label,
  format = 'yyyy-MM-dd',
  fullWidth = false,
  disableOpenPicker = true,
  required = true,
}) => {
  const isMobile = useDetectMobile();
  const { control } = useFormContext();

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <FormFieldLabel label={label}>
        <Controller
          name={id}
          control={control}
          rules={{
            required: required ? `${label} is required` : false,
          }}
          render={({ field, fieldState }) => (
            <DatePicker
              name={id}
              label={isMobile ? label : undefined}
              format={format}
              value={field.value ? DateTime.fromISO(field.value) : null}
              disableOpenPicker={isMobile ? disableOpenPicker : false}
              sx={{
                ['& fieldset']: {
                  borderRadius: 0,
                },
                input: {
                  py: 1.5,
                },
              }}
              onChange={(date) => field.onChange(date ? date.toISO() : null)}
              slotProps={{
                textField: {
                  fullWidth,
                  error: !!fieldState.error,
                  helperText: fieldState.error?.message,
                },
              }}
            />
          )}
        />
      </FormFieldLabel>
    </LocalizationProvider>
  );
};

export default FormFieldDatePicker;
