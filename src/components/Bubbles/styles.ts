import styled from "styled-components";

export const BubblesContainer = styled.div`
  z-index: -100;

  position: absolute;

  width: 100%;
  height: 100%;
  overflow: hidden;
` 
interface BubblesProps {
  speed: number;
}

export const BubblesContent = styled.div`
  position: absolute;
  display: flex;
  z-index: -100;
`;

export const BubbleSpan = styled.span<BubblesProps>`

   z-index: -100;
   /* position: absolute; */

    width: 20px;
    height: 20px;
    background: ${props => props.theme.primary};
    margin: 0 10px;
    border-radius: 50%;
    box-shadow: inset 0 0 100px 10px ${props => props.theme.primary}, 0 0 50px ${props => props.theme.primary}, 0 0 100px ${props => props.theme.primary};
    animation: animate 15s linear infinite;
    animation-duration: calc(125s / ${props => props.speed});

    &:nth-child(even){
      background: ${props => props.theme["bg-variant"]};
      box-shadow:inset 0 0 100px 10px ${props => props.theme["bg-variant"]}, 0 0 50px ${props => props.theme["bg-variant"]}, 0 0 100px ${props => props.theme["bg-variant"]};
    }

    @keyframes animate{
      0%{
        transform: translateY(0vh) scale(0.1);
      }
      100%{
        transform: translateY(95vh) scale(0.9);
      }
    }
`