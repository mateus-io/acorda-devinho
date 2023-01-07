import * as h from './PauseAction.header'

export function PauseAction() {
  const [_, setSoundTrackStatus] = h.useAtom(h.Atoms.soundTrackStatusAtom)

  function handle() {
    setSoundTrackStatus('paused')
  }

  return (
    <button
      className="text-neutral-300 text-4xl"
      type="button"
      onClick={handle}
    >
      <h.IoPause />
    </button>
  )
}