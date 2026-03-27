# React Style Context

React HOCs that provide an ergonomic way to style compound components with `tailwind-variants`.

```tsx
import { popoverClasses } from "@stark-ui/classes"
import { createStyleContext } from "@stark-ui/react-style-context"
import { Popover as ArkPopover } from "@ark-ui/react/popover"
import type { Assign } from "@ark-ui/react"
import type { UnstyledProp } from "@stark-ui/react-style-context"

const { withProvider, withSlot } = createStyleContext(popoverClasses, {
  name: "Popover",
})

type PopoverRootProps = Assign<ArkPopover.RootProps, UnstyledProp>
type PopoverTriggerProps = Assign<ArkPopover.TriggerProps, UnstyledProp>
type PopoverContentProps = Assign<ArkPopover.ContentProps, UnstyledProp>

const PopoverRoot = withProvider<PopoverRootProps>(ArkPopover.Root)
const PopoverTrigger = withSlot<HTMLButtonElement, PopoverTriggerProps>(
  ArkPopover.Trigger,
  "trigger"
)
const PopoverContent = withSlot<HTMLDivElement, PopoverContentProps>(
  ArkPopover.Content,
  "content"
)
```

`name` is required and must start with an uppercase letter (for example, `"Popover"`).
`withProvider`, `withProviderSlot`, and `withSlot` use explicit typing
(`withProvider<Props>(...)`, `withSlot<Element, Props>(...)`).

## Features

- `defaultProps` support

  ```tsx
  const PopoverRoot = withProvider<PopoverRootProps>(ArkPopover.Root, {
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
