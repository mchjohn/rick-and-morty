import { styled, css } from "../../stitches.config";

export const Content = styled('div', {
  marginTop: '1rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',

  '& section': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const Title = styled('p', {
  fontSize: '1rem',
  color: "$gray900"
})

export const Footer = styled('footer', {
  display: "flex",
  flex: 1,
  gap: 10,
  justifyContent: "center",
  fontSize: '0.875rem',
  marginBottom: '1rem',
})

export const Button = styled('button', {
  outline: 'none',
  border: 'none',
  width: '2rem',
  height: '2rem',
  borderRadius: '50%',
  background: "$blue",
  color: "$gray100",
  cursor: 'pointer',
  fontSize: '1.2rem',
  fontWeight: 'bold',
})