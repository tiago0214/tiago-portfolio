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
    background: #4fc3dc;
    margin: 0 10px;
    border-radius: 50%;
    box-shadow: 0 0 100px 10px #4fc3dc44, 0 0 50px #4fc3dc, 0 0 100px #4fc3dc;
    animation: animate 15s linear infinite;
    animation-duration: calc(125s / ${props => props.speed});

    &:nth-child(even){
      background: #64CCC5;
      box-shadow: 0 0 100px 10px #64CCC544, 0 0 50px #64CCC5, 0 0 100px #64CCC5;
    }

    @keyframes animate{
      0%{
        transform: translateY(100vh) scale(0);
      }
      100%{
        transform: translateY(10vh) scale(1);
      }
    }
`