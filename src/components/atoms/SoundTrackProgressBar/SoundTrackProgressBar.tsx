import * as h from './SoundTrackProgressBar.header'

export function SoundTrackProgressBar() {
  const [soundTrackCurrentTime] = h.useAtom(h.Atoms.soundTrackCurrentTimeAtom)
  const [soundTrackDuration] = h.useAtom(h.Atoms.soundTrackDurationAtom)

  function getProgress() {
    if (soundTrackCurrentTime === 0 && soundTrackDuration === 0) {
      return 0;
    }
    const progress = (soundTrackCurrentTime / soundTrackDuration) * 100
    return `${(progress).toFixed(2)}`
  }

  return (
    <div
      className="h-2 w-full relative"
    >
      <div
        className="bg-neutral-200 rounded h-2 w-full opacity-30 absolute"
      >
      </div>
      <div
        className={`bg-neutral-200 rounded h-2 w-0 opacity-1 absolute z-10`}
        style={{
          width: getProgress() + '%'
        }}
      >
      </div>
    </div>
  )
}