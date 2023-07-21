import { StyledCard } from './Card.styled';

  type TCard = {
    children?: JSX.Element|JSX.Element[];
    bgColor?: string;
  }

  export const Card: React.FC<TCard> = ({ children, bgColor }) => {
    return (
      <StyledCard bgColor={bgColor}>
        {children}
      </StyledCard>
    );
  }