# React Style Context

React HOCs that provide an ergonomic way to style compound components with `tailwind-variants`.

```tsx
import { popoverClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Popover as ArkPopover } from "@ark-ui/react/popover"

const { withRootProvider, withContext } = createStyleContext(popoverClasses)

const PopoverRoot = withRootProvider(ArkPopover.Root)
const PopoverRootProvider = withRootProvider(ArkPopover.RootProvider)
const PopoverAnchor = withContext(ArkPopover.Anchor, "anchor")
const PopoverArrow = withContext(ArkPopover.Arrow, "arrow")
const PopoverArrowTip = withContext(ArkPopover.ArrowTip, "arrowTip")
const PopoverCloseTrigger = withContext(ArkPopover.CloseTrigger, "closeTrigger")
const PopoverContent = withContext(ArkPopover.Content, "content")
const PopoverDescription = withContext(ArkPopover.Description, "description")
const PopoverPositioner = withContext(ArkPopover.Positioner, "positioner")
const PopoverTitle = withContext(ArkPopover.Title, "title")
const PopoverTrigger = withContext(ArkPopover.Trigger, "trigger")
```

## Features

- `defaultProps` support

  ```tsx
  const PopoverRoot = withRootProvider(ArkPopover.Root, {
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
