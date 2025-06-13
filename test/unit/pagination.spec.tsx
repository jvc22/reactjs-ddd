import { render } from '@testing-library/react'
import userEvent, { type UserEvent } from '@testing-library/user-event'
import { type Mock } from 'vitest'

import { Pagination } from '../../src/components/pagination'

let user: UserEvent
let onPageChangeCallback: Mock<(pageIndex: number) => void>

describe('Pagination Component', () => {
  beforeEach(() => {
    user = userEvent.setup()
    onPageChangeCallback = vi.fn()
  })

  it('should calculate the right amount of pages', async () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={22}
        onPageChange={onPageChangeCallback}
      />,
    )

    expect(wrapper.getByText('Página 1 de 3')).toBeInTheDocument()
    expect(wrapper.getByText('Total de 22 item(s)')).toBeInTheDocument()
  })

  it('should be able to navigate to the first page', async () => {
    const wrapper = render(
      <Pagination
        pageIndex={2}
        totalCount={44}
        onPageChange={onPageChangeCallback}
      />,
    )

    const firstPageButton = wrapper.getByRole('button', {
      name: 'Primeira página',
    })

    await user.click(firstPageButton)

    expect(onPageChangeCallback).toBeCalledWith(0)
  })

  it('should be able to navigate to the previous page', async () => {
    const wrapper = render(
      <Pagination
        pageIndex={2}
        totalCount={33}
        onPageChange={onPageChangeCallback}
      />,
    )

    const previousPageButton = wrapper.getByRole('button', {
      name: 'Página anterior',
    })

    await user.click(previousPageButton)

    expect(onPageChangeCallback).toBeCalledWith(1)
  })

  it('should be able to navigate to the next page', async () => {
    const wrapper = render(
      <Pagination
        pageIndex={2}
        totalCount={33}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima página',
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toBeCalledWith(3)
  })

  it('should be able to navigate to the last page', async () => {
    const wrapper = render(
      <Pagination
        pageIndex={1}
        totalCount={33}
        onPageChange={onPageChangeCallback}
      />,
    )

    const lastPageButton = wrapper.getByRole('button', {
      name: 'Última página',
    })

    await user.click(lastPageButton)

    expect(onPageChangeCallback).toBeCalledWith(3)
  })
})
