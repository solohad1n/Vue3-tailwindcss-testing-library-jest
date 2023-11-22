import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/vue'
import TheModalSearchPredictions from './TheModalSearchPredictions.vue'

function renderModal(searchPredictions, searchPredictionCategories){
  const options = {
    props: {
      searchPredictions
    },
    data: () => ({
      searchPredictionCategories
    })
  }

  return render(TheModalSearchPredictions, options)
}

const searchPredictions = [
  'Search Prediction 1',
  'Search Prediction 2',
  'Search Prediction 3'
]

const searchPredictionCategories = [
  'Search Prediction Category 1',
  'Search Prediction Category 2',
  'Search Prediction Category 3'
]

describe('when open', () => {
  it('shows search predictions', () => {

    renderModal(searchPredictions)
  
    searchPredictions.forEach(screen.getByText)
  })

  it('does not show search prediction if closed', () => {

    renderModal(searchPredictions)
  
    fireEvent.click(screen.getByRole('button', {name: 'Cancel'}))
  
    return waitForElementToBeRemoved(searchPredictions.map(screen.queryByText))
  })
})

describe('when closed', () => {
  it('shows search prediction categories', () => {

    renderModal(searchPredictionCategories)
  
    searchPredictionCategories.forEach(screen.getByText)
  })

  it('does not show search prediction categories if closed', () => {

    renderModal(searchPredictionCategories)
  
    fireEvent.click(screen.getByRole('button', {name: 'Cancel'}))
  
    return waitForElementToBeRemoved(searchPredictionCategories.map(screen.queryByText))
  })
})