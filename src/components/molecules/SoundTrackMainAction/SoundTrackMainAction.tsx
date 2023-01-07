import * as h from './SoundTrackMainAction.header'

export function SoundTrackMainAction() {
  const [soundTrackStatus] = h.useAtom(h.Atoms.soundTrackStatusAtom)
  const actions = {
    paused: h.PlayAction,
    playing: h.PauseAction,
    disabled: h.PlayAction
  }
  return actions[soundTrackStatus]()
}