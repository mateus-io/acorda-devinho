import * as h from './VariantChangeIcon.header'

function VariantChangeIcon({ variant }: h.VariantChangeIconProps) {
  if (variant === 'full') return <h.GoScreenNormal />
  return <h.GoScreenFull />
}

export { VariantChangeIcon }