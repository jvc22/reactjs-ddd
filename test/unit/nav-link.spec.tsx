import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'

import { NavLink } from '../../src/components/nav-link'

describe('NavLink Component', () => {
  it('should highlight when it is the current page url', () => {
    const activeRoutePath = '/links'

    const wrapper = render(
      <MemoryRouter initialEntries={[activeRoutePath]}>
        <NavLink to="/links">Links</NavLink>
      </MemoryRouter>,
    )

    expect(wrapper.getByText('Links').dataset.current).toBe('true')
  })
})
