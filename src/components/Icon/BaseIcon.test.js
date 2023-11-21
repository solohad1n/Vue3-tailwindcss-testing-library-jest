import { render, screen } from '@testing-library/vue'
import BaseIcon from './BaseIcon.vue'
import iconc from '../../icons'

test('renders icon', () => {

  const options = {
    props: {
      name: Object.keys(iconc)[0]
    }
  }

  render(BaseIcon, options)

  expect(screen.getByTestId('base-icon').innerHTML).toBeTruthy()

})

test('renders non-existent icon', () => {

  const options = {
    props: {
      name: 'non-existent'
    }
  }

  render(BaseIcon, options)

  expect(screen.getByTestId('base-icon').innerHTML).toBeFalsy()

})