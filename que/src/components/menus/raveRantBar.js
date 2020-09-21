import React from 'react';
import "rc-progress/assets/index.css"
import { Line } from "rc-progress"
import styled from 'styled-components'

const RaveRantContainer = styled.div`
    margin-top: auto;
`

const ScoreLabel = styled.p`
    font-size: 12px;
    color: #5e5e5e;
    margin: 0;
    text-align: center;
`

const raveRantBar = ({score, fill="#20bed6"}) => {
    const calculatedScore = 100*score
    return (
      <RaveRantContainer>
        <div>
          <Line strokeWidth="4" strokeColor={fill} percent={calculatedScore} />
        </div>
        <ScoreLabel>Raves</ScoreLabel>
      </RaveRantContainer>
    )
}

export default raveRantBar;
