import { useAtom } from 'jotai';
import * as Atoms from './AudioPlayer.state';
import { AudioPlayerSettings } from '../../molecules/AudioPlayerSettings/AudioPlayerSettings';
import { SoundTrackDetails } from '../../molecules/SoundTrackDetails/SoundTrackDetails';
import { SoundTrackControl } from '../../molecules/SoundTrackControl/SoundTrackControl';
import { SoundTrackIndicators } from '../../molecules/SoundTrackIndicators/SoundTrackIndicators';

export {
  useAtom,
  Atoms,
  AudioPlayerSettings,
  SoundTrackDetails,
  SoundTrackControl,
  SoundTrackIndicators,
};
