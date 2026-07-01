import { Accordion } from "../"
import { Button } from "../../button"
import { ChevronRightIcon, ZapIcon } from "lucide-react"
import { FaSlack } from "react-icons/fa"
import { SiGithub, SiTelegram } from "react-icons/si"

export default function Multiple() {
  const integrations = [
    {
      description:
        "Send push alerts for failed deployments directly to team channels.",
      details:
        "Configured channel: #engineering-alerts. Currently listening for event triggers: deployment_failed, release_created.",
      icon: FaSlack,
      status: "connected",
      title: "Slack Notifications",
      value: "slack",
    },
    {
      description:
        "Authorize Stark UI to sync build pipelines and commit stats.",
      details:
        "Connected organization: starkinterface. Active webhooks: push, pull_request, workflow_run.",
      icon: SiGithub,
      status: "connected",
      title: "GitHub Repository Sync",
      value: "github",
    },
    {
      description:
        "Dispatch urgent security and critical traffic spikes notifications.",
      details:
        "Not configured. Enter bot token credentials to establish alert channels for real-time broadcasts.",
      icon: SiTelegram,
      status: "disconnected",
      title: "Telegram Bot Broadcasts",
      value: "telegram",
    },
  ]

  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center w-full max-w-lg mx-auto">
      <div className="text-center flex gap-1 flex-col mb-4">
        <h2>Workspace Integrations</h2>
        <p className="text-sm text-foreground-muted">
          Configure and manage active third-party integrations.
        </p>
      </div>

      <Accordion.Root
        multiple
        defaultValue={["slack", "github"]}
        className="w-full"
      >
        {integrations.map((item) => (
          <Accordion.Item key={item.value} value={item.value}>
            <Accordion.ItemTrigger>
              <Accordion.ItemIcon>
                <item.icon aria-label={item.value} />
              </Accordion.ItemIcon>

              <div className="flex flex-col gap-0.5 items-start text-start flex-1">
                <Accordion.ItemTitle>{item.title}</Accordion.ItemTitle>
                <Accordion.ItemSubtitle>
                  {item.description}
                </Accordion.ItemSubtitle>
              </div>

              <Accordion.ItemAddon data-align="inline-end">
                <Accordion.ItemIndicator>
                  <ChevronRightIcon />
                </Accordion.ItemIndicator>
              </Accordion.ItemAddon>
            </Accordion.ItemTrigger>

            <Accordion.ItemContent>
              <Accordion.ItemBody className="ml-6 flex flex-col gap-2">
                <p>{item.details}</p>
                <div className="flex items-center gap-2">
                  {item.status === "connected" ? (
                    <>
                      <Button size="sm" variant="outline">
                        Configure Scopes
                      </Button>
                      <Button size="sm" variant="danger-soft">
                        Disconnect
                      </Button>
                    </>
                  ) : (
                    <Button size="sm" variant="outline">
                      <ZapIcon /> Connect Account
                    </Button>
                  )}
                </div>
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  )
}
