import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import React from 'react'
import { ControllerRenderProps, FieldValues } from 'react-hook-form'


type Props={
    cuisine:string,
    field: ControllerRenderProps<FieldValues,"cusines">;
}

const CousineCheckbox = ({cuisine, field}:Props) => {

  // field.value =  ["paste","pizza"]
  // cuisine = "pizza"
  return (
    <FormItem className="flex flex-row items-center space-x-1 space-y-0 mt-2">
      <FormControl>
        <Checkbox
          className="bg-white"

          // check whether the selected field occurs in the cousine
          checked={field.value.includes(cuisine)}
          onCheckedChange={(checked) => {
            if (checked) {
              field.onChange([...field.value, cuisine]);
            } else {
              field.onChange(
                field.value.filter((value: string) => value !== cuisine)
              );
            }
          }}
        />
      </FormControl>
      <FormLabel className="text-sm font-normal">{cuisine}</FormLabel>
    </FormItem>
  )
}

export default CousineCheckbox
