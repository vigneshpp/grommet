import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { axe } from 'jest-axe';
import { cleanup, render } from '@testing-library/react';
import { Grommet } from '../../Grommet';
import { Box } from '../../Box';
import { RadioButtonGroup } from '..';

describe('RadioButtonGroup', () => {
  afterEach(cleanup);
  test('should have no accessibility violations', async () => {
    const { container } = render(
      <Grommet>
        <RadioButtonGroup name="test" options={[]} />
      </Grommet>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });

  test('string options', () => {
    const component = renderer.create(
      <Grommet>
        <RadioButtonGroup name="test" options={['one', 'two']} value="one" />
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('number options', () => {
    const component = renderer.create(
      <Grommet>
        <RadioButtonGroup name="test" options={[1, 2]} value={1} />
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('boolean options', () => {
    const component = renderer.create(
      <Grommet>
        <RadioButtonGroup name="test" options={[true, false]} value />
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('object options just value', () => {
    const component = renderer.create(
      <Grommet>
        <RadioButtonGroup
          name="test"
          options={[{ value: 'one' }, { value: 'two' }]}
          value="two"
        />
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('object options', () => {
    const component = renderer.create(
      <Grommet>
        <RadioButtonGroup
          name="test"
          options={[
            { id: 'onE', label: 'One', value: 'one' },
            { id: 'twO', label: 'Two', value: 'two' },
          ]}
        />
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('object options disabled', () => {
    const component = renderer.create(
      <Grommet>
        <RadioButtonGroup
          name="test"
          options={[{ value: 'one', disabled: true }, { value: 'two' }]}
        />
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('children', () => {
    const child = ({ checked }) => (
      <Box pad="small" background={checked ? 'accent-1' : 'control'} />
    );
    const component = renderer.create(
      <Grommet>
        <RadioButtonGroup name="test" options={['one', 'two']} value="one">
          {child}
        </RadioButtonGroup>
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('adding additional props', () => {
    const component = renderer.create(
      <Grommet>
        <RadioButtonGroup
          name="test"
          options={[
            {
              id: 'ONE',
              value: '1',
              'data-testid': 'testid-1',
            },
            {
              id: 'TWO',
              value: '2',
              'data-testid': 'testid-2',
            },
          ]}
        />
      </Grommet>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
