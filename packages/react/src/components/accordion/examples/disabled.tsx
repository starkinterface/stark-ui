import { Accordion } from "../"

export default function Disabled() {
  const faqItems = [
    {
      content:
        "You can map custom subdomains or apex domains to your project by adding the corresponding CNAME and ALIAS records in your DNS provider's dashboard.",
      title: "How do I configure custom domains?",
      value: "domains",
    },
    {
      content:
        "To delete a workspace, you must be the workspace Owner. This action will permanently delete all databases, repositories, and historical logs associated with the workspace.",
      disabled: true,
      title: "How do I delete my workspace?",
      value: "delete",
    },
    {
      content:
        "You can invite unlimited collaborators to your team workspace on all plans. Access controls and permission roles can be configured per repository.",
      title: "How many team members can I invite?",
      value: "members",
    },
  ]

  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <div className="text-center flex gap-1 flex-col mb-4">
        <h2>Workspace Configuration</h2>
        <p className="text-sm text-foreground-muted">
          Answers to common questions about configuring your team workspace.
        </p>
      </div>
      <Accordion.Root defaultValue={[""]} className="w-full" collapsible>
        {faqItems.map((item) => (
          <Accordion.Item
            key={item.value}
            value={item.value}
            disabled={item.disabled}
          >
            <Accordion.ItemTrigger>
              <Accordion.ItemTitle>{item.title}</Accordion.ItemTitle>
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
