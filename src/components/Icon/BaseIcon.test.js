import { render, screen } from '@testing-library/vue'
import BaseIcon from './BaseIcon.vue'
import icons from '../../icons'

const existingIconName = Object.keys(icons)[0]
const nonExistentIconName = 'nonExistentIcon'

function renderIcon(name, classes = null) {
  const options = {
    props: {
      name,
      class: classes
    }
  }

  return render(BaseIcon, options)
}

it('renders icon', () => {

  renderIcon(existingIconName)

  expect(screen.getByTestId('base-icon').innerHTML).toBeTruthy()

})

it('renders non-existent icon', () => {

  renderIcon(nonExistentIconName)

  expect(screen.getByTestId('base-icon').innerHTML).toBeFalsy()

})

it('renders icon with default classes', () => {

  const defaultClasses = 'w-6 h-6'

  renderIcon(existingIconName)

  expect(screen.getByTestId('base-icon').getAttribute('class')).toBe(defaultClasses)

})

it('renders icon with custom classes', () => {

  const classes = 'w-10 h-10'

  renderIcon(existingIconName, classes)

  expect(screen.getByTestId('base-icon').getAttribute('class')).toBe(classes)
})