import * as h from './SoundTrackControl.header'

export function SoundTrackControl() {
  return (
    <div
      className="flex justify-between w-full"
    >
      <h.BackSoundTrack />
      <h.SoundTrackMainAction />
      <h.NextSoundTrack />
    </div>
  )
}