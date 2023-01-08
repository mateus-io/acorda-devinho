import { atom } from 'jotai';
import { AudioPlayerVariants, SoundTrackStatus } from './AudioPlayer.types';

const variantAtom = atom<AudioPlayerVariants>('full');
const progressBarIsVisibleAtom = atom(true);
const soundTrackStatusAtom = atom<SoundTrackStatus>('disabled');
const soundTrackCurrentTimeAtom = atom(0);
const soundTrackDurationAtom = atom(0);

export {
  variantAtom,
  progressBarIsVisibleAtom,
  soundTrackStatusAtom,
  soundTrackCurrentTimeAtom,
  soundTrackDurationAtom,
};
