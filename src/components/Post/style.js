import styled from 'styled-components';
import NotFound from '../../assets/image-not-found.jpg'

export const Title = styled.h3`
  font-weight: bold;
  font-size: large;
  margin-top: 16px;

  &:first-child{
    margin-top: 0;
  }
`;

export const Image = styled.div`
  background-image: url(${ props => props.url || NotFound });
  width: 75%;
  background-repeat: no-repeat;
  background-size: cover;
`;