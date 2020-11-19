import React from 'react';
import { render } from '@testing-library/react-native';
import ItemHome from '../ItemHome';

describe('Item Home', () => {
  it('should render correctly', () => {
    const wrapper = render(<ItemHome />);

    expect(wrapper.container).toMathSnapshot();
  });
});
