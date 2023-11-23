import { render, screen } from '@testing-library/vue'
import TheSearchPredictionsList from './TheSearchPredictionsList.vue'

const predictions = ['Prediction 1', 'Prediction 2', 'Prediction 3']
const checkedPredictions = predictions.slice(1)

function renderPredictions(checkedPredictions) {
  const options = {
    props: {
      searchPredictions: predictions,
      modelValue: checkedPredictions
    }
  }

  return render(TheSearchPredictionsList, options)
}

it('shows search predictions unchecked', () => {
  renderPredictions()


  predictions.forEach((prediction) => expect(screen.getByLabelText(prediction).checked).toBe(false))
})

it('shows specified search predictions checked', () => {
  renderPredictions(checkedPredictions)

  expect(screen.getByLabelText(predictions[0]).checked).toBe(false)
  expect(screen.getByLabelText(checkedPredictions[0]).checked).toBe(true)
  expect(screen.getByLabelText(checkedPredictions[1]).checked).toBe(true)
})

