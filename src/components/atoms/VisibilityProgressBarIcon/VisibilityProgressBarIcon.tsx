import * as h from './VisibilityProgressBarIcon.header'

function VisibilityProgressBarIcon({ progressBarIsVisible }: h.VisibilityProgressBarIconProps) {
  if (progressBarIsVisible) return <h.IoEyeOff />
  return <h.IoEye />
}

export { VisibilityProgressBarIcon }