import { Accordion } from ".."
import { ChevronRightIcon } from "lucide-react"

export default function Subtitle() {
  const settings = [
    {
      content:
        "Modify credentials, download backup metadata, or configure secondary email routing rules for account recovery notifications.",
      summary: "Manage your display name, avatar, and public email address.",
      title: "User Profile & Identity",
      value: "profile",
    },
    {
      content:
        "Register WebAuthn security keys, review active CLI login sessions with IP history, and configure API rate limit alerts.",
      summary:
        "Set up two-factor authorization, manage sessions, and rotate keys.",
      title: "Security & MFA Policies",
      value: "security",
    },
    {
      content:
        "Enable Webhook event streams, setup Slack channel integration, or toggle email digests for weekly team activity logs.",
      summary: "Choose when and how you want to receive deployment updates.",
      title: "Notification Dispatcher",
      value: "notifications",
    },
  ]

  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <div className="text-center flex gap-1 flex-col mb-4">
        <h2>Settings Configuration</h2>
        <p className="text-sm text-foreground-muted">
          Configure profile settings and event preferences.
        </p>
      </div>

      <Accordion.Root defaultValue={["profile"]} className="w-full" collapsible>
        {settings.map((item) => (
          <Accordion.Item key={item.value} value={item.value}>
            <Accordion.ItemTrigger>
              <Accordion.ItemAddon data-align="inline-end">
                <Accordion.ItemIndicator>
                  <ChevronRightIcon />
                </Accordion.ItemIndicator>
              </Accordion.ItemAddon>

              <div className="flex flex-col gap-0.5 items-start text-start flex-1">
                <Accordion.ItemTitle>{item.title}</Accordion.ItemTitle>
                <Accordion.ItemSubtitle>{item.summary}</Accordion.ItemSubtitle>
              </div>
            </Accordion.ItemTrigger>

            <Accordion.ItemContent>
              <Accordion.ItemBody>{item.content}</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  )
}
