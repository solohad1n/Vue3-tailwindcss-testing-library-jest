import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import BaseTooltip from './BaseTooltip.vue'

const text = 'Tooltip text'
const buttonLabel = 'Click Me'
const button = `<button>${buttonLabel}</button>`

const user = userEvent.setup()

function renderTooltip(text, element = '') {
  const options = {
    props: {
      text
    },
    slots: {
      default: element
    }
  }

  return render(BaseTooltip, options)
}

function hoverOverOwningElement() {
  return user.hover(getOwningElement())
}

function moveCursorAwayFromOwningElement() {
  return user.unhover(getOwningElement())
}

function clickOwningElement() {
  return user.click(getOwningElement())
}

function getOwningElement() {
  return screen.getByText(buttonLabel).parentElement
}

function assertTooltipHidden() {
  expect(screen.getByText(text)).not.toBeVisible()
}

function assertTooltipShown() {
  expect(screen.getByText(text)).toBeVisible()
}

describe('rendering', () => {
  it('renders hidden with specified text', () => {

    renderTooltip(text)
  
    assertTooltipHidden()
  })
  
  it('renders with target element', () => {
  
    renderTooltip('', button)
  
    expect(screen.getByText(buttonLabel)).toBeVisible()
  })
})

describe('showing', () => {
  it('shows after hovering over owning element', async () => {
    renderTooltip(text, button)
  
    await hoverOverOwningElement()
  
    assertTooltipShown()
  })
})

describe('hiding', () => {

  beforeEach(async () => {
    renderTooltip(text, button)
  
    await hoverOverOwningElement()
  
    assertTooltipShown()
  })

  // afterEach(() => {
  //   assertTooltipHidden()
  // })

  it('hides after moving cursor away from owning element', async () => {
    await moveCursorAwayFromOwningElement()

    assertTooltipHidden()
  })
  
  it('hides after clicking owning element', async () => {
    await clickOwningElement()

    assertTooltipHidden()
  })

  it('hides after clicking owning element', async () => {

    await clickOwningElement()

    assertTooltipHidden()
  })
})