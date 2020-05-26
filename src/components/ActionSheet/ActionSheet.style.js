import styled from 'styled-components'

export const StyledActionSheet = styled.div`
  .ActionSheet__content--open {
    transform: translateY(0);

    opacity: 1;
  }

  .ActionSheet__content--close {
    transform: translateY(100%);
    opacity: 0;
  }

  .ActionSheet__content {
    z-index: 1399;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    overflow-y: hidden;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 16px 22px;
    height: auto;

    max-width: 720px;

    transition: all 0.3s ease-out;
  }
`
