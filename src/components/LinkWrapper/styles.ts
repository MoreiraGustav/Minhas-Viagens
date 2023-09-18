import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100;
  top: var(--medium);
  right: var(--medium);

  svg {
    transition: color 0.3s ease-in-out;
    color: var(--white);
    cursor: pointer;
  }

  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`
