import ReactPlayer from 'react-player/youtube'
import { Fragment } from 'react/jsx-runtime'
import playIcon from '../../../assets/playIcon.svg'

type VideoProps = {
  video: string[]
}

const VideoList = ({ video }: VideoProps) => {
  return (
    <>
      {video.map((video) => (
        <Fragment key={video}>
          <ReactPlayer
            url={video}
            playIcon={<img src={playIcon} style={{ width: 50, height: 50 }} />}
            controls={true}
            pip={true}
            light
            playing
          />
        </Fragment>
      ))}
    </>
  )
}

export { VideoList }
