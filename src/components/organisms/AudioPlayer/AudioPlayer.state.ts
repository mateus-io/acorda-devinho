import { atom } from 'jotai';
import { AudioPlayerVariants, SoundTrackStatus } from './AudioPlayer.types';

const variantAtom = atom<AudioPlayerVariants>('full');
const progressBarIsVisibleAtom = atom(true);
const soundTrackStatusAtom = atom<SoundTrackStatus>('disabled');

export { variantAtom, progressBarIsVisibleAtom, soundTrackStatusAtom };
