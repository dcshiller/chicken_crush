import React from 'react'
import Controller from '../Controller';
import Chicken from '../models/Chicken';
import styled from 'styled-components';

const squareSize = 30;

const StyledShed = styled.div`
  position: relative;
  width: ${squareSize * 20}px;
  height: ${squareSize * 20}px;
  border: 2px solid brown
  background: tan;
`

const StyledChicken = styled.div`
  height: ${squareSize}px;
  overflow: hidden;
  width: ${squareSize}px;
  transform: rotate(${p => {
    switch (p.facing) {
      case "east":
        return "90deg";
      case "south":
        return "180deg";
      case "west":
        return "270deg"
    }}
  });
  background-image: ${p => p.size === 2 && 'url("large1.png")' ||
  p.size === 1 && 'url("medium1.png")' ||
  p.size === 0 && 'url("medium1.png")'
  };
  background-size: cover;
  position: absolute;
  &:hover {
    filter: brightness(1.3);
  }
`

class IndexPage extends React.Component {
  constructor() {
    super();
    this.controller = Controller;
    this.controller.update = this.setState.bind(this);
  }

  render() {
    return <StyledShed>{this.mapChickens()} </StyledShed>
  }

  mapChickens() {
    return this.controller.getCoords().map(([k, v]) => (
      this.chicken(k, v)
    ))
  }

  chicken(location, model) {
    if (!model) return null;
    const [xLoc, yLoc] = location.split(',').map((num) => parseInt(num));
    return (
      <StyledChicken
        facing={model.facing}
        size={model.size}
        style={{left: `${squareSize * xLoc}px`, top: `${squareSize * yLoc}px`}}
        onClick={this.swapForward.bind(this, [xLoc, yLoc])}
      />
    )
  }

  swapForward(location){
    this.controller.activate(location);
  }
}

export default IndexPage
