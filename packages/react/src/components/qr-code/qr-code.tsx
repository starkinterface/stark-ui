import { qrCodeClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { QrCode as ArkQrCode } from "@ark-ui/react/qr-code"

import type { QrCodeVariantProps } from "@stark-ui/classes"
import type { UnstyledProp } from "@stark-ui/react-style-context"
import type { Assign } from "@ark-ui/react"

const { withProvider, withProviderSlot, withSlot } = createStyleContext(
  qrCodeClasses,
  {
    name: "QrCode",
  }
)

///////////////////////////////////////////////////////////////////////////////
/// Root

type QrCodeRootProps = Assign<
  ArkQrCode.RootProps,
  QrCodeVariantProps & UnstyledProp
>

const QrCodeRoot = withProviderSlot<HTMLDivElement, QrCodeRootProps>(
  ArkQrCode.Root,
  "root"
)

///////////////////////////////////////////////////////////////////////////////
/// RootProvider

type QrCodeRootProviderProps = Assign<
  ArkQrCode.RootProviderProps,
  QrCodeVariantProps & UnstyledProp
>

const QrCodeRootProvider = withProvider<QrCodeRootProviderProps>(
  ArkQrCode.RootProvider
)

///////////////////////////////////////////////////////////////////////////////
/// Frame

type QrCodeFrameProps = Assign<ArkQrCode.FrameProps, UnstyledProp>

const QrCodeFrame = withSlot<SVGSVGElement, QrCodeFrameProps>(
  ArkQrCode.Frame,
  "frame"
)

///////////////////////////////////////////////////////////////////////////////
/// Pattern

type QrCodePatternProps = Assign<ArkQrCode.PatternProps, UnstyledProp>

const QrCodePattern = withSlot<SVGPathElement, QrCodePatternProps>(
  ArkQrCode.Pattern,
  "pattern"
)

///////////////////////////////////////////////////////////////////////////////
/// Overlay

type QrCodeOverlayProps = Assign<ArkQrCode.OverlayProps, UnstyledProp>

const QrCodeOverlay = withSlot<HTMLDivElement, QrCodeOverlayProps>(
  ArkQrCode.Overlay,
  "overlay"
)

///////////////////////////////////////////////////////////////////////////////
/// DownloadTrigger

type QrCodeDownloadTriggerProps = Assign<
  ArkQrCode.DownloadTriggerProps,
  UnstyledProp
>

const QrCodeDownloadTrigger = withSlot<
  HTMLButtonElement,
  QrCodeDownloadTriggerProps
>(ArkQrCode.DownloadTrigger, "downloadTrigger")

///////////////////////////////////////////////////////////////////////////////
/// Context

type QrCodeContextProps = ArkQrCode.ContextProps

const QrCodeContext = ArkQrCode.Context

export {
  QrCodeRoot,
  QrCodeRootProvider,
  QrCodeFrame,
  QrCodePattern,
  QrCodeOverlay,
  QrCodeDownloadTrigger,
  QrCodeContext,
}

export { useQrCode } from "@ark-ui/react/qr-code"

export type {
  QrCodeRootProps,
  QrCodeRootProviderProps,
  QrCodeFrameProps,
  QrCodePatternProps,
  QrCodeOverlayProps,
  QrCodeDownloadTriggerProps,
  QrCodeContextProps,
}

export type { UseQrCodeProps, UseQrCodeReturn } from "@ark-ui/react/qr-code"
