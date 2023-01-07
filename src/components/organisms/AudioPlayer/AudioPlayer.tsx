import * as h from './AudioPlayer.header'

export function AudioPlayer() {
  const [variant] = h.useAtom(h.Atoms.variantAtom)

  const audioPlayerWrapper = {
    full: "animate-open h-screen",
    simplified: "animate-close"
  }

  return (
    <div className={`bg-purple-900 max-w-sm w-full relative flex flex-col items-center justify-center p-12 ${audioPlayerWrapper[variant]}`}>
      <div className="flex flex-wrap w-full gap-8">
        <h.SoundTrackDetails
          title="Acorda Devinho"
          author="Banda Rocketseat"
        />

        <h.SoundTrackControl />

        <h.SoundTrackIndicators />

      </div>
      <h.AudioPlayerSettings />
    </div>
  )
}