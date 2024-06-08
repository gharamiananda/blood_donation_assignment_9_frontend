import { Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import mapImg from '../../assets/images/google-maps.png'

function TooltipCustom({showInfo}:{showInfo:any}) {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">{`${showInfo?.name?.firstName??''} ${showInfo?.name?.lastName??''}`} {`(${showInfo?.state??''},${showInfo?.city??''})`}</Tooltip>}
    >
      {({ ref, ...triggerHandler }) => (
        <Button
          variant="light"
          {...triggerHandler}
          className="d-inline-flex align-items-center"
        >
          <Image
            ref={ref}
            roundedCircle
            src="https://res.cloudinary.com/dri1mh3xh/image/upload/v1717829154/e72xzr6lgknwqg1wvxj1.png"
          
          alt=''
          width={30}
          height={30}
          />
        </Button>
      )}
    </OverlayTrigger>
  );
}

export default TooltipCustom;