import * as h from './SoundTrackIndicators.header'

export function SoundTrackIndicators() {
  const [progressBarIsVisible] = h.useAtom(h.Atoms.progressBarIsVisibleAtom)

  if (progressBarIsVisible) {
    return (
      <div
        className="flex flex-col w-full gap-4"
      >
        <h.SoundTrackProgressBar />
        <h.SoundTrackTimeIndicator />
      </div>
    )
  }
  return <></>
}