import { render } from '@testing-library/vue'
import BaseModalOverlay from './BaseModalOverlay.vue'

it('renders', () => {
  const { html } = render(BaseModalOverlay)

  expect(html()).toMatchSnapshot()
})