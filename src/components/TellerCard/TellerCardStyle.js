import styled from 'styled-components'
import {
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  CardFooter
  //   Button,
  //   Row,
  //   Col
} from 'reactstrap'

const StyledP = styled.p`
  margin-bottom: -100px;
`

const StyledContainer = styled.div`
  overflow: auto;
  height: 276px;
  position: absolute;
  text-align: center;
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.9);

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  box-shadow: 2px 0px 7px rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  bottom: 2%;
  left: 0;
  right: 0;
  width: 100%;
  min-width: 350px;
  max-width: 500px;

  z-index: ${(props) => (props.show ? 99999 : 1000)};
  transform: ${(props) => (props.show ? 'translateY(0)' : 'translateY(100%)')};
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: all 0.2s ease-out;
`

const StyledCard = styled(Card)`
  background: #fff;
  border-radius: 0px 0px 10px 10px;
  width: 100%;
`

const StyledDivBW = styled.div`
  background: #ffffff;
  border-radius: 10px;
`
const StyledCardHeader = styled(CardHeader)`
  border: none;
  background: rgba(255, 255, 255, 0.9);
`

const StyledCardTitle = styled(CardTitle)`
  margin: 0.75rem;
  text-transform: capitalize;
`

const StyledCardBody = styled(CardBody)`
  border: none;
  background: rgba(255, 255, 255, 0.9);
`

const StyledCardFooter = styled(CardFooter)`
  background: #fff;
  border-radius: 0px 0px 10px 10px;
`

const StyledTelegramButton = styled.a`
  float: right;
  width: 90%;
  border-radius: 15px;
  color: #fff !important;
  background-color: #4282f1 !important;
`
export {
  StyledContainer,
  StyledP,
  StyledCard,
  StyledDivBW,
  StyledCardHeader,
  StyledCardTitle,
  StyledCardBody,
  StyledCardFooter,
  StyledTelegramButton
}
