import { render, screen, fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/vue'
import BaseModal from './BaseModal.vue'
import icons from '../../icons'

function renderModal(body = '', footer = '', withCloseButton = false){
  const options = {
    props: {
      withCloseButton
    },
    slots: {
      default: body,
      footer
    }
  }
  return render(BaseModal, options)
}

function assetrModalClose(body) {
  return waitForElementToBeRemoved([screen.queryByText(body), screen.queryByTestId('base-modal-overlay')])
}

it('renders modal with body and footer', () => {

  const body = 'This is modal body'
  const footer = 'This is modal footer'

  renderModal(body, footer)

  screen.getByText(body)
  screen.getByText(footer)
})

it('renders modal with close button', () => {

  const withCloseButton = true

  renderModal('', '', withCloseButton)

  expect(screen.getByTestId('base-icon').innerHTML).toBe(icons['x'])
})

it('renders modal without close button', () => {

  const withCloseButton = false

  renderModal('', '', withCloseButton)

  expect(screen.queryByTestId('base-icon')).toBeNull()
})

it('closes modal when clicking close button', async () => {

  const body = 'This is modal body'

  const withCloseButton = true

  renderModal(body, '', withCloseButton)

  await fireEvent.click(screen.getByTestId('base-modal-button-close'))

  //await waitFor(() => {
  //   expect(screen.queryByText(body)).toBeNull()
  //   expect(screen.queryByTestId('base-modal-overlay')).toBeNull()
  // })
  // Можем использовать waitFor(() => {}) вместо async await

  //Ещё один способ waitForElementToBeRemoved

  // await waitForElementToBeRemoved([screen.queryByText(body), screen.queryByTestId('base-modal-overlay')])

  expect(screen.queryByText(body)).toBeNull()
  expect(screen.queryByTestId('base-modal-overlay')).toBeNull()
})

it('closes modal when clicking overlay', () => {

  const body = 'This is modal body'

  renderModal(body)

  fireEvent.click(screen.getByTestId('base-modal-overlay'))

  return assetrModalClose(body)
})

it('closes modal when clicking cancel button in the footer', () => {

  const body = 'This is modal body'

  const footer = `
      <template #footer="{ close }">
        <button @click="close">Cancel</button>
      </template>
      `

  renderModal(body, footer)

  fireEvent.click(screen.getByRole('button', {name: 'Cancel'}))

  return assetrModalClose(body)
})

it('closes modal when pressing esc key', () => {

  const body = 'This is modal body'

  renderModal(body)

  fireEvent.keyDown(screen.getByRole('dialog'), {key: 'Esc'})

  return assetrModalClose(body)
})