# React Style Context

React HOCs that provide an ergonomic way to style compound components with `tailwind-variants`.

```tsx
import { popoverClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Popover as ArkPopover } from "@ark-ui/react/popover"

const { withProvider, withSlot } = createStyleContext(popoverClasses)

const PopoverRoot = withProvider(ArkPopover.Root)
const PopoverRootProvider = withProvider(ArkPopover.RootProvider)
const PopoverAnchor = withSlot(ArkPopover.Anchor, "anchor")
const PopoverArrow = withSlot(ArkPopover.Arrow, "arrow")
const PopoverArrowTip = withSlot(ArkPopover.ArrowTip, "arrowTip")
const PopoverCloseTrigger = withSlot(ArkPopover.CloseTrigger, "closeTrigger")
const PopoverContent = withSlot(ArkPopover.Content, "content")
const PopoverDescription = withSlot(ArkPopover.Description, "description")
const PopoverPositioner = withSlot(ArkPopover.Positioner, "positioner")
const PopoverTitle = withSlot(ArkPopover.Title, "title")
const PopoverTrigger = withSlot(ArkPopover.Trigger, "trigger")
```

## Features

- `defaultProps` support

  ```tsx
  const PopoverRoot = withProvider(ArkPopover.Root, {
    defaultProps: {
      lazyMount: true,
      unmountOnExit: true,
    },
  })
  ```

- `unstyled` prop on components

  ```tsx
  // Removes all styles
  <PopoverRoot unstyled>
    <PopoverTrigger>Trigger</PopoverTrigger>
    <PopoverContent>Content</PopoverContent>
  </PopoverRoot>

  // Removes all styles except the trigger
  <PopoverRoot unstyled>
    <PopoverTrigger unstyled={false}>Trigger</PopoverTrigger>
    <PopoverContent>Content</PopoverContent>
  </PopoverRoot>

  // Removes trigger styles
  <PopoverRoot>
    <PopoverTrigger unstyled>Trigger</PopoverTrigger>
    <PopoverContent>Content</PopoverContent>
  </PopoverRoot>
  ```

## Acknowledgments

- [Panda CSS's Style Context](https://panda-css.com/docs/concepts/jsx-style-context) - For the inspiration.
