import { useRef, useEffect } from 'react';
import { useAtom } from 'jotai';
import * as Atoms from './AudioPlayer.state';
import { AudioPlayerSettings } from '../../molecules/AudioPlayerSettings/AudioPlayerSettings';
import { SoundTrackDetails } from '../../molecules/SoundTrackDetails/SoundTrackDetails';
import { SoundTrackControl } from '../../molecules/SoundTrackControl/SoundTrackControl';
import { SoundTrackIndicators } from '../../molecules/SoundTrackIndicators/SoundTrackIndicators';
import { boomBapFlickAudio } from '../../../assets/Assets';

export {
  useAtom,
  useRef,
  useEffect,
  Atoms,
  AudioPlayerSettings,
  SoundTrackDetails,
  SoundTrackControl,
  SoundTrackIndicators,
  boomBapFlickAudio,
};
