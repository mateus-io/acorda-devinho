import * as h from './SoundTrackDetails.header'

export function SoundTrackDetails({
  title,
  author
}: h.SoundTrackDetailsProps) {
  const [variant] = h.useAtom(h.Atoms.variantAtom)

  const audioArtWrapper = {
    full: "w-full animate-expandImage",
    simplified: "w-20 animate-minimizeImage"
  }

  return (
    <>
      <div
        className={`relative ${audioArtWrapper[variant]}`}
      >
        <img
          className="object-contain w-full h-full"
          src={h.audioArt}
          alt="audio art"
        />
      </div>
      <div
        className="flex flex-col"
      >
        <h1 className="text-neutral-300 font-bold text-2xl">
          {title}
        </h1>
        <h2 className="text-neutral-300 font-normal text-xl opacity-[.67]">
          {author}
        </h2>
      </div>
    </>
  )
}
