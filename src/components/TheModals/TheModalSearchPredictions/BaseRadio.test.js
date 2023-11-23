import { render, screen } from '@testing-library/vue'
import BaseRadio from './BaseRadio.vue'

const label = 'Label'
const value = 'value'

function rednredRadio(label, value, isChecked = false) {
  const options = {
    props: {
      modelValue: isChecked ? value : null,
      value,
      id: 'id'
    },
    slots: {
      default: label
    }
  }

  return render(BaseRadio, options)
}

it('renders checked with label', () => {
  const isChecked = true

  rednredRadio(label, value, isChecked)

  expect(screen.getByLabelText(label).checked).toBe(isChecked)
})

it('renders unchecked with label', () => {
  const isChecked = false

  rednredRadio(label, value, isChecked)

  expect(screen.getByLabelText(label).checked).toBe(isChecked)
  expect(screen.getByLabelText(label).value).toBe(value)
})
it('renders with value', () => {

  rednredRadio(label, value)

  expect(screen.getByLabelText(label).value).toBe(value)
})