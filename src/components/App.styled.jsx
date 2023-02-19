import styled from 'styled-components';

export const EnterLabel = styled.label`
  width: 100%;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
`;
export const EnterInput = styled.input`
  width: 100%;
  height: ${p => p.theme.space[5]}px;
  margin-top: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.md};
`;

export const StyledButton = styled.button`
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.md};
  border: ${p => p.theme.borders.none};
  transition: background-color 250ms linear;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
  }
`;
