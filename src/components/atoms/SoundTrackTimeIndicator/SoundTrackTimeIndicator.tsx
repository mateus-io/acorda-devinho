import * as h from './SoundTrackTimeIndicator.header'

export function SoundTrackTimeIndicator() {
  const [soundTrackCurrentTime] = h.useAtom(h.Atoms.soundTrackCurrentTimeAtom)
  const [soundTrackDuration] = h.useAtom(h.Atoms.soundTrackDurationAtom)

  function secondToFormatTime(seconds: number) {
    return new Date(seconds * 1000).toISOString().substring(14, 19)
  }

  return (
    <div
      className="flex justify-between"
    >
      <span
        className="text-neutral-100 font-normal text-lg"
      >
        {secondToFormatTime(soundTrackCurrentTime)}
      </span>

      <span
        className="text-neutral-100 font-normal text-lg"
      >
        {secondToFormatTime(soundTrackDuration)}
      </span>
    </div>
  )
}