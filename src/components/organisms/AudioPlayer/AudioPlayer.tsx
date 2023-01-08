import * as h from './AudioPlayer.header'

export function AudioPlayer() {
  const [variant] = h.useAtom(h.Atoms.variantAtom)
  const [soundTrackStatus] = h.useAtom(h.Atoms.soundTrackStatusAtom)
  const [_, setSoundTrackCurrentTime] = h.useAtom(h.Atoms.soundTrackCurrentTimeAtom)
  const [soundTrackDuration, setSoundTrackDuration] = h.useAtom(h.Atoms.soundTrackDurationAtom)
  const audioRef = h.useRef<HTMLAudioElement>(null)
  const audioCtx = h.useRef<AudioContext>()
  const interval = h.useRef<number>()

  const audioPlayerWrapper = {
    full: "animate-open h-screen",
    simplified: "animate-close"
  }

  function setupAudioCtx() {
    audioCtx.current = new window.AudioContext();
    if (audioRef.current) {
      const source = audioCtx.current.createMediaElementSource(audioRef.current)
      source.connect(audioCtx.current.destination);
    }
  }

  function trackProgress() {
    if (audioRef.current) {
      setSoundTrackCurrentTime(audioRef.current.currentTime)
      if (!soundTrackDuration) {
        setSoundTrackDuration(audioRef.current.duration)
      }
    }
  }

  function playSoundTrack() {
    interval.current = setInterval(trackProgress, 1000)
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  function pauseSoundTrack() {
    if (interval.current) {
      clearInterval(interval.current)
    }
    if (audioRef.current) {
      audioRef.current.pause()
    }
  }

  h.useEffect(() => {
    if (soundTrackStatus === 'playing') {
      if (!audioCtx.current || audioCtx.current.state === 'closed') {
        setupAudioCtx();
      }
      playSoundTrack();
    }
    if (soundTrackStatus === 'paused') {
      pauseSoundTrack()
    }
  }, [soundTrackStatus])

  return (
    <div className={`bg-purple-900 max-w-sm w-full relative flex flex-col items-center justify-center p-12 ${audioPlayerWrapper[variant]}`}>
      <div className="flex flex-wrap w-full gap-8">
        <h.SoundTrackDetails
          title="Acorda Devinho"
          author="Banda Rocketseat"
        />

        <h.SoundTrackControl />

        <h.SoundTrackIndicators />

        <audio
          ref={audioRef}
          className="hidden"
          src={h.boomBapFlickAudio}
        />

      </div>
      <h.AudioPlayerSettings />
    </div>
  )
}