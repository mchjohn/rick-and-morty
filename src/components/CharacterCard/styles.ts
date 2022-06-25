import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  background: '$green',
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  marginTop: '1rem',
  marginBottom: '1rem',
})

export const Infos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: 4,
  marginTop: 8,
})

export const Title = styled('p', {
  marginTop: 8,
  fontSize: '1rem',
})

export const InfoText = styled('p', {
  fontSize: '0.875rem',
})