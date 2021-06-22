import { Button } from './ButtonStyle'
import { AiOutlineDownload } from 'react-icons/ai'

export default function DownloadBtn() {
  return (
    <Button type="download">
      <AiOutlineDownload className="btnIcon" />
      Download CV
    </Button>
  )
}
