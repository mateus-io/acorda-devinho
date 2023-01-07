import * as h from './AudioPlayerSettings.header'

export function AudioPlayerSettings() {
  const [variant, setVariant] = h.useAtom(h.Atoms.variantAtom)
  const [progressBarIsVisible, setProgressBarIsVisible] = h.useAtom(h.Atoms.progressBarIsVisibleAtom)

  function toggleVariant() {
    setVariant((currentVariant) => {
      if (currentVariant === 'full') return 'simplified'
      return 'full'
    });
  }
  function toggleProgressBarIsVisible() {
    setProgressBarIsVisible((currentProgressBarIsVisible) => !currentProgressBarIsVisible)
  }

  return (
    <>
      <button
        onClick={toggleVariant}
        className="text-neutral-300 text-3xl absolute top-2 right-2">
        <h.VariantChangeIcon variant={variant} />
      </button>

      <button
        onClick={toggleProgressBarIsVisible}
        className="text-neutral-300 text-3xl absolute bottom-2 right-2">
        <h.VisibilityProgressBarIcon progressBarIsVisible={progressBarIsVisible} />
      </button>
    </>
  )
}
