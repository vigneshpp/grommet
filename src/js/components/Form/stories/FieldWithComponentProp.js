import React from 'react';

import {
  Box,
  Button,
  CheckBox,
  FileInput,
  Form,
  FormField,
  Grommet,
  RadioButtonGroup,
  RangeInput,
  Select,
  TextArea,
} from 'grommet';
import { grommet } from 'grommet/themes';

export const FieldWithComponentProp = () => (
  <Grommet full theme={grommet}>
    <Box fill overflow="auto" align="center" justify="center" pad="large">
      <Box flex={false} width="medium">
        <Form
          onReset={event => console.log(event)}
          onSubmit={({ value, touched }) =>
            console.log('Submit', value, touched)
          }
        >
          <FormField
            label="Name"
            name="name"
            required
            validate={[
              { regexp: /^[a-z]/i },
              name => {
                if (name && name.length === 1) return 'must be >1 character';
                return undefined;
              },
              name => {
                if (name && name.length <= 2)
                  return { message: "that's short", status: 'info' };
                return undefined;
              },
            ]}
          />
          <FormField label="Email" name="email" type="email" required />
          <FormField
            label="Employee ID"
            name="employeeId"
            required
            validate={{ regexp: /^[0-9]{4,6}$/, message: '4-6 digits' }}
          />
          <FormField name="subscribe" component={CheckBox} label="Subscribe?" />
          <FormField
            name="ampm"
            component={RadioButtonGroup}
            options={['morning', 'evening']}
          />
          <FormField
            label="Size"
            name="size"
            component={Select}
            onChange={event => console.log(event)}
            options={['small', 'medium', 'large', 'xlarge']}
          />
          <FormField label="Comments" name="comments" component={TextArea} />
          <FormField
            label="Age"
            name="age"
            component={RangeInput}
            pad
            min={15}
            max={75}
          />
          <FormField label="File" name="file" component={FileInput} />
          <FormField
            label="Custom"
            name="custom"
            component={props => <input {...props} />}
          />
          <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button label="Cancel" />
            <Button type="reset" label="Reset" />
            <Button type="submit" label="Update" primary />
          </Box>
        </Form>
      </Box>
    </Box>
  </Grommet>
);

FieldWithComponentProp.storyName = 'Field with component prop';

export default {
  title: 'Input/Form/Field with component prop',
};
