import * as h from './SoundTrackTimeIndicator.header'

export function SoundTrackTimeIndicator() {
  return (
    <div
      className="flex justify-between"
    >
      <span
        className="text-neutral-100 font-normal text-lg"
      >
        00:11
      </span>

      <span
        className="text-neutral-100 font-normal text-lg"
      >
        03:20
      </span>
    </div>
  )
}