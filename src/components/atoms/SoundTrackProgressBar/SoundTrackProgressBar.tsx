import * as h from './SoundTrackProgressBar.header'

export function SoundTrackProgressBar() {
  return (
    <div
      className="h-2 w-full relative"
    >
      <div
        className="bg-neutral-200 rounded h-2 w-full opacity-30 absolute"
      >
      </div>
      <div
        className="bg-neutral-200 rounded h-2 w-[70%] opacity-1 absolute z-10"
      >
      </div>
    </div>
  )
}