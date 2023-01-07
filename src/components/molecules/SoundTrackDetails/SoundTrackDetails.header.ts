import { useAtom } from 'jotai';
import * as Atoms from '../../organisms/AudioPlayer/AudioPlayer.state';
import { audioArt } from '../../../assets/Assets';

type SoundTrackDetailsProps = {
  title: string;
  author: string;
};

export type { SoundTrackDetailsProps };

export { useAtom, Atoms, audioArt };
