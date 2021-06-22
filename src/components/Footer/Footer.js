import { Footer, Info } from './FooterStyle'
import DownloadBtn from '@/components/Button/DownloadBtn'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { MdLocationCity } from 'react-icons/md'

export default function FooterSection() {
  return (
    <Footer>
      <Info>
        <div>
          <h6>Location</h6>
          <p> <MdLocationCity className="infoIcon" />  Lagos, Nigeria</p>
        </div>
        <div>
          <h6>E-mail</h6>
          <p> <HiOutlineMail className="infoIcon" />  Info@calebbenjin.dev</p>
        </div>
        <div>
          <h6>Phone</h6>
          <p><HiOutlinePhone className="infoIcon" /> +234 906 632 2383</p>
        </div>
      </Info>
      <DownloadBtn />
    </Footer>
  )
}
