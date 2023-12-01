import {
  AboutDescription,
  AboutHeader,
  AboutSection,
  AboutTitle,
  Card,
  CardHeader,
  CardIcon,
  CardText,
  CardTitle,
  GridContainerFirst,
  GridContainerSecond,
  Image,
} from './AboutValues.styles';
import OpennessIcon from '../../img/about/openness.svg';
import ResponsibilityIcon from '../../img/about/responsibility.svg';
import InnovationIcon from '../../img/about/innovation.svg';
import QualityIcon from '../../img/about/quality.svg';

import WindfarmsImgTab from '../../img/about/tab-wind-farms-fields.jpg';
import WindfarmsImgTab2x from '../../img/about/tab-wind-farms-fields@2x.jpg';
import WindfarmsImgDeck from '../../img/about/desc-wind-farms-fields.jpg';
import WindfarmsImgDeck2x from '../../img/about/desc-wind-farms-fields@2x.jpg';

import SolarPanelsImgTab from '../../img/about/tab-man-worker-firld-by-solar-panels.jpg';
import SolarPanelsImgTab2x from '../../img/about/tab-man-worker-firld-by-solar-panels@2x.jpg';
import SolarPanelsImgDeck from '../../img/about/desc-man-worker-firld-by-solar-panels.jpg';
import SolarPanelsImgDeck2x from '../../img/about/desc-man-worker-firld-by-solar-panels@2x.jpg';

function AboutValues() {
  return (
    <AboutSection>
      <AboutHeader>
        <AboutTitle>Main values of our company</AboutTitle>
        <AboutDescription>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </AboutDescription>
      </AboutHeader>
      <GridContainerFirst>
        <Card>
          <CardHeader>
            <CardIcon src={OpennessIcon} alt="maximize circle" />
            <CardTitle>Openness</CardTitle>
          </CardHeader>
          <CardText>to the world, people, new ideas and projects</CardText>
        </Card>
        <Card>
          <CardHeader>
            <CardIcon src={ResponsibilityIcon} alt="global edit" />
            <CardTitle>Responsibility</CardTitle>
          </CardHeader>
          <CardText>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </CardText>
        </Card>
        <Image>
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={`
          ${WindfarmsImgDeck} 1x,
          ${WindfarmsImgDeck2x} 2x
        `}
              width="596"
              height="339"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`
          ${WindfarmsImgTab} 1x,
          ${WindfarmsImgTab2x} 2x
        `}
              width="342"
              height="197"
            />
            <img src={WindfarmsImgDeck} alt="wind farms fields" />
          </picture>
        </Image>
      </GridContainerFirst>
      <GridContainerSecond>
        <Image>
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={`
          ${SolarPanelsImgDeck} 1x,
          ${SolarPanelsImgDeck2x} 2x
        `}
              width="596"
              height="339"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`
          ${SolarPanelsImgTab} 1x,
          ${SolarPanelsImgTab2x} 2x
        `}
              width="342"
              height="197"
            />
            <img src={WindfarmsImgDeck} alt="wind farms fields" />
          </picture>
        </Image>
        <Card>
          <CardHeader>
            <CardIcon src={InnovationIcon} alt="cpu charge" />
            <CardTitle>Innovation</CardTitle>
          </CardHeader>
          <CardText>
            we use the latest technology to implement non-standard solutions
          </CardText>
        </Card>
        <Card>
          <CardHeader>
            <CardIcon src={QualityIcon} alt="ranking" />
            <CardTitle>Quality</CardTitle>
          </CardHeader>
          <CardText>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </CardText>
        </Card>
      </GridContainerSecond>
    </AboutSection>
  );
}

export default AboutValues;
