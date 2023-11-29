import { render } from '@testing-library/vue'
import BaseModalButtonClose from './BaseModalButtonClose.vue'

it('renders', () => {
  const { html } = render(BaseModalButtonClose)

  expect(html()).toMatchSnapshot()
})