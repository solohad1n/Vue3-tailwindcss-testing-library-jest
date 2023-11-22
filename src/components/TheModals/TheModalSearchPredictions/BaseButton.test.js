import { render, screen } from '@testing-library/vue'
import BaseButton from './BaseButton.vue'

it('renders base button', () => {
  // 1. Подготовка перед тестирование // given (arrange)
  const options = {
    slots: {
      default: 'Test Button'
    }
  }
  // 2. Выполняем тот код который мы тестируем // when (act)
  render(BaseButton, options)
  // 3. Проверяем совпадает ли действительное с ожидаемым // then (assert)
  screen.getByText(/test Button/i)
})