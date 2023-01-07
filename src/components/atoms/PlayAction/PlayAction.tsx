import * as h from './PlayAction.header'

export function PlayAction() {
  const [_, setSoundTrackStatus] = h.useAtom(h.Atoms.soundTrackStatusAtom)

  function handle() {
    setSoundTrackStatus('playing')
  }

  return (
    <button
      className="text-neutral-300 text-4xl"
      type="button"
      onClick={handle}
    >
      <h.IoPlay />
    </button>
  )
}