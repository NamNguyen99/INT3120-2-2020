import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import Home from '../Home';
import { useNavigation } from '@react-navigation/native';

const navigate = jest.fn();
describe('screen home', () => {
  beforeEach(() => {
    useNavigation.mockReturnValue({ navigate });
  });
  it('should render correctly', () => {
    const wrapper = render(<Home />);

    expect(wrapper.container).toMatchSnapshot();
  });

  it('should navigate when click icon audio', async () => {
    const wrapper = render(<Home />);

    const textAudio = await waitFor(() => wrapper.getByText('Audio & Video'));
    fireEvent.press(textAudio);

    expect(navigate).toHaveBeenCalled();
  });

  it('should navigate when click icon test', async () => {
    const wrapper = render(<Home />);

    const textTest = await waitFor(() => wrapper.getByText('Kiểm tra'));
    fireEvent.press(textTest);

    expect(navigate).toHaveBeenCalled();
  });

  it('should navigate when click icon practice', async () => {
    const wrapper = render(<Home />);

    const textPractice = await waitFor(() => wrapper.getByText('Luyện tập'));
    fireEvent.press(textPractice);

    expect(navigate).toHaveBeenCalled();
  });

  it('should navigate when click icon music', async () => {
    const wrapper = render(<Home />);

    const textMusic = await waitFor(() => wrapper.getByText('Bài hát'));
    fireEvent.press(textMusic);

    expect(navigate).toHaveBeenCalled();
  });
});
