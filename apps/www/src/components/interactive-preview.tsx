import { tv } from "tailwind-variants/lite"

const interactivePreviewClasses = tv({
  slots: {
    controls: ["[grid-area:controls]", "border border-decoration p-6"],
    preview: ["[grid-area:preview]", "flex flex-col border border-decoration"],
    previewCode: ["border-t border-decoration p-6"],
    previewComponent: ["flex flex-1 items-center justify-center p-6"],
    root: [
      "grid-interactive-preview grid gap-6 rounded-sm bg-background text-transparent",
      "mx-auto h-[720px] w-full p-6",
    ],
  },
})

const InteractivePreview = () => {
  const { root, controls, preview, previewCode, previewComponent } =
    interactivePreviewClasses()

  return (
    <div className={root()}>
      <div className={preview()}>
        <div className={previewComponent()}>interactive preview</div>
        <div className={previewCode()}>code</div>
      </div>
      <div className={controls()}>controls</div>
    </div>
  )
}

export default InteractivePreview
