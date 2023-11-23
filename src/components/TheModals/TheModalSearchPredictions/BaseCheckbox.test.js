import { render, screen } from '@testing-library/vue'
import BaseCheckbox from './BaseCheckbox.vue'

it('renders checked base checkbox with label', () => {

  const label = 'Test Label'

  const value = 1

  const options = {
    props: {
      id: 'checkbox',
      value,
      modelValue: [value, 2, 3]
    },
    slots: {
      default: label
    }
  }

  render(BaseCheckbox, options)

  // expect(screen.getByLabelText(label).checked).toBe(true)
  expect(screen.getByLabelText(label)).toBeChecked()
})

it('renders unchecked base checkbox', () => {

  render(BaseCheckbox)

  // expect(screen.getByRole('checkbox').checked).toBe(false)
  expect(screen.getByRole('checkbox')).not.toBeChecked()
})