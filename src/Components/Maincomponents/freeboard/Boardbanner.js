import styled from "styled-components";

import Mainpic from "../../../bannerpic/main1.png";

const Card = styled.div`
  width: 100%;
  height: 400px;
  text-align: center;
  overflow: hidden;

  margin: 0 auto;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
    transition: all 0.2s linear;
  }

  img:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

function Boardbanner() {
  return (
    <Card>
      <img src={Mainpic} />
    </Card>
  );
}

export default Boardbanner;
