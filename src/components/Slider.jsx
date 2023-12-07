import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import { pixelart1, pixelart2, pixelart3, pixelart4 } from '../assets'

import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';

import { SectionWrapper } from "../hoc"

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <AutoplaySlider
      className="w-auto top-0 z-20 bg-primary flex"
      animation="openAnimation"
      play={true}
      cancelOnInteraction={false}
      interval={6000}
      fillParent={false}
      buttons={true}
    >
      <div data-src={pixelart1} />
      <div data-src={pixelart2} />
      <div data-src={pixelart3} />
      <div data-src={pixelart4} />
    </AutoplaySlider>
  );
}

export default SectionWrapper(Slider, "slider")