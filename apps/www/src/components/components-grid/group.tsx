import { attrValue, cx } from "@stark-ui/react"
import Link from "next/link"
import { useCallback, useId, useState } from "react"

import type { ComponentPropsWithRef } from "react"

type GroupProps = ComponentPropsWithRef<"article"> & {
  title: string
  description: string
  exampleCount?: number
}

const Group = ({
  title,
  description,
  exampleCount,
  children,
  className,
  ...props
}: GroupProps) => {
  const [isActive, setIsActive] = useState(false)
  const id = useId()

  const activate = useCallback(() => {
    setIsActive(true)
  }, [])

  const deactivate = useCallback(() => {
    setIsActive(false)
  }, [])

  const handleBlur = useCallback((e: React.FocusEvent<HTMLElement>) => {
    // stay active if focus moved within this card
    if (
      e.relatedTarget instanceof Node &&
      e.currentTarget.contains(e.relatedTarget)
    ) {
      return
    }

    // stay active if mouse is still hovering
    if (e.currentTarget.matches(":hover")) {
      return
    }

    setIsActive(false)
  }, [])

  return (
    <article
      data-interactive={attrValue(isActive)}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onFocus={activate}
      onBlur={handleBlur}
      aria-labelledby={id}
      className={cx(
        "group/components-group p-content-padding gap-content-padding relative isolate flex flex-col justify-between bg-background",
        "data-interactive:bg-background-surface",
        className
      )}
      {...props}
    >
      <Link href="/components" className="absolute inset-0 z-1 outline-none">
        <span className="sr-only">View all components in {title} group</span>
      </Link>

      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h2 id={id}>{title}</h2>
          {exampleCount !== undefined && (
            <p className="text-sm text-foreground-muted">
              {exampleCount} {exampleCount === 1 ? "example" : "examples"}
            </p>
          )}
        </div>
        <p className="text-sm text-foreground-muted">{description}</p>
      </div>

      <div
        inert={!isActive}
        aria-hidden={!isActive}
        data-interactive={attrValue(isActive)}
        className={cx(
          "relative z-2 opacity-40 grayscale",
          "data-interactive:opacity-100 data-interactive:grayscale-0"
        )}
      >
        {children}
      </div>
    </article>
  )
}

export { Group }
export type { GroupProps }
