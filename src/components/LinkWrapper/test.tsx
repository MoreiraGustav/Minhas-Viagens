import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('<linkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="my-link">Anything</LinkWrapper>)

    const children = screen.getByText(/Anything/i)

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', 'my-link')
  })
})
