import { Button, Menu, Portal } from "../../"
import {
  ActivityIcon,
  BookOpenIcon,
  CalendarIcon,
  CheckIcon,
  ChevronRightIcon,
  DatabaseIcon,
  FileTextIcon,
  FingerprintIcon,
  HelpCircleIcon,
  KeyIcon,
  LockIcon,
  MapPinIcon,
  PlayIcon,
  RefreshCwIcon,
  ShieldCheckIcon,
  SparklesIcon,
  Trash2Icon,
  ZapIcon,
} from "lucide-react"
import { useState } from "react"

export default function Advanced() {
  const [securityConfig, setSecurityConfig] = useState({
    firewall: true,
    mfa: true,
    replicas: false,
    tls: false,
  })
  const [scope, setScope] = useState("read-only")
  const [retention, setRetention] = useState("30-days")
  const [region, setRegion] = useState("us-east")

  return (
    <div className="flex h-dvh items-start justify-start w-full max-w-2xl mx-auto">
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline">Database Console</Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content className="w-56">
              {/* Group 1: Connection & Security */}
              <Menu.ItemGroup>
                <Menu.ItemGroupLabel>Connection & Security</Menu.ItemGroupLabel>

                {/* Level 2 Submenu: API Credentials */}
                <Menu.Root
                  positioning={{ offset: { crossAxis: -5 } }}
                  closeOnSelect={false}
                >
                  <Menu.TriggerItem>
                    <KeyIcon />
                    <Menu.ItemText>API Credentials</Menu.ItemText>
                    <ChevronRightIcon />
                  </Menu.TriggerItem>
                  <Portal>
                    <Menu.Positioner>
                      <Menu.Content>
                        {/* Level 3 Submenu: Access Scope */}
                        <Menu.Root
                          positioning={{ offset: { crossAxis: -5 } }}
                          closeOnSelect={false}
                        >
                          <Menu.TriggerItem>
                            <ShieldCheckIcon />
                            <Menu.ItemText>Access Scope</Menu.ItemText>
                            <ChevronRightIcon />
                          </Menu.TriggerItem>
                          <Portal>
                            <Menu.Positioner>
                              <Menu.Content className="w-40">
                                <Menu.RadioItemGroup
                                  value={scope}
                                  onValueChange={(e) => setScope(e.value)}
                                >
                                  <Menu.RadioItem value="read-only">
                                    <Menu.ItemText>Read-Only</Menu.ItemText>
                                    <Menu.ItemIndicator>
                                      <CheckIcon />
                                    </Menu.ItemIndicator>
                                  </Menu.RadioItem>
                                  <Menu.RadioItem value="read-write">
                                    <Menu.ItemText>Read-Write</Menu.ItemText>
                                    <Menu.ItemIndicator>
                                      <CheckIcon />
                                    </Menu.ItemIndicator>
                                  </Menu.RadioItem>
                                  <Menu.RadioItem value="admin">
                                    <Menu.ItemText>
                                      Administrative
                                    </Menu.ItemText>
                                    <Menu.ItemIndicator>
                                      <CheckIcon />
                                    </Menu.ItemIndicator>
                                  </Menu.RadioItem>
                                </Menu.RadioItemGroup>
                              </Menu.Content>
                            </Menu.Positioner>
                          </Portal>
                        </Menu.Root>

                        <Menu.CheckboxItem
                          checked={securityConfig.mfa}
                          onCheckedChange={(checked) =>
                            setSecurityConfig({
                              ...securityConfig,
                              mfa: !!checked,
                            })
                          }
                          value="enforce-mfa"
                        >
                          <FingerprintIcon />
                          <Menu.ItemText>Require MFA</Menu.ItemText>
                          <Menu.ItemIndicator>
                            <CheckIcon />
                          </Menu.ItemIndicator>
                        </Menu.CheckboxItem>

                        <Menu.Separator />

                        <Menu.Item value="refresh-tokens">
                          <RefreshCwIcon />
                          <Menu.ItemText>Rotate Credentials</Menu.ItemText>
                          <Menu.ItemShortcut>⌘R</Menu.ItemShortcut>
                        </Menu.Item>
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                </Menu.Root>

                <Menu.CheckboxItem
                  checked={securityConfig.firewall}
                  onCheckedChange={(checked) =>
                    setSecurityConfig({
                      ...securityConfig,
                      firewall: !!checked,
                    })
                  }
                  value="ip-firewall"
                >
                  <LockIcon />
                  <Menu.ItemText>IP Firewall Restrictions</Menu.ItemText>
                  <Menu.ItemIndicator>
                    <CheckIcon />
                  </Menu.ItemIndicator>
                </Menu.CheckboxItem>

                <Menu.CheckboxItem
                  checked={securityConfig.tls}
                  onCheckedChange={(checked) =>
                    setSecurityConfig({ ...securityConfig, tls: !!checked })
                  }
                  value="enforce-tls"
                >
                  <ShieldCheckIcon />
                  <Menu.ItemText>Enforce TLS 1.3</Menu.ItemText>
                  <Menu.ItemIndicator>
                    <CheckIcon />
                  </Menu.ItemIndicator>
                </Menu.CheckboxItem>

                <Menu.Item value="audit-logs">
                  <FileTextIcon />
                  <Menu.ItemText>Audit Logs</Menu.ItemText>
                  <Menu.ItemShortcut>⌥⌘L</Menu.ItemShortcut>
                </Menu.Item>

                <Menu.Item value="active-connections" data-indent>
                  <Menu.ItemText>Active Connections</Menu.ItemText>
                  <Menu.ItemShortcut>⇧⌘C</Menu.ItemShortcut>
                </Menu.Item>
              </Menu.ItemGroup>

              <Menu.Separator />

              {/* Group 2: Database Operations */}
              <Menu.ItemGroup>
                <Menu.ItemGroupLabel>Database Operations</Menu.ItemGroupLabel>
                <Menu.Item value="query-analyzer">
                  <ActivityIcon />
                  <Menu.ItemText>Run Query Analyzer</Menu.ItemText>
                  <Menu.ItemShortcut>⌘A</Menu.ItemShortcut>
                </Menu.Item>

                <Menu.Item value="quick-query">
                  <PlayIcon />
                  <Menu.ItemText>Quick Query</Menu.ItemText>
                  <Menu.ItemShortcut>⌘↵</Menu.ItemShortcut>
                </Menu.Item>

                {/* Level 2 Submenu: Backup Registry */}
                <Menu.Root positioning={{ offset: { crossAxis: -5 } }}>
                  <Menu.TriggerItem>
                    <DatabaseIcon />
                    <Menu.ItemText>Backup Registry</Menu.ItemText>
                    <ChevronRightIcon />
                  </Menu.TriggerItem>
                  <Portal>
                    <Menu.Positioner>
                      <Menu.Content>
                        <Menu.Item value="backup-now">
                          <ZapIcon />
                          <Menu.ItemText>Trigger Backup Now</Menu.ItemText>
                        </Menu.Item>

                        {/* Level 3 Submenu: Retention Settings */}
                        <Menu.Root
                          positioning={{ offset: { crossAxis: -5 } }}
                          closeOnSelect={false}
                        >
                          <Menu.TriggerItem>
                            <CalendarIcon />
                            <Menu.ItemText>Retention Settings</Menu.ItemText>
                            <ChevronRightIcon />
                          </Menu.TriggerItem>
                          <Portal>
                            <Menu.Positioner>
                              <Menu.Content className="w-36">
                                <Menu.RadioItemGroup
                                  value={retention}
                                  onValueChange={(e) => setRetention(e.value)}
                                >
                                  <Menu.RadioItem value="7-days">
                                    <Menu.ItemText>7 Days</Menu.ItemText>
                                    <Menu.ItemIndicator>
                                      <CheckIcon />
                                    </Menu.ItemIndicator>
                                  </Menu.RadioItem>
                                  <Menu.RadioItem value="30-days">
                                    <Menu.ItemText>30 Days</Menu.ItemText>
                                    <Menu.ItemIndicator>
                                      <CheckIcon />
                                    </Menu.ItemIndicator>
                                  </Menu.RadioItem>
                                  <Menu.RadioItem value="1-year">
                                    <Menu.ItemText>1 Year</Menu.ItemText>
                                    <Menu.ItemIndicator>
                                      <CheckIcon />
                                    </Menu.ItemIndicator>
                                  </Menu.RadioItem>
                                </Menu.RadioItemGroup>
                              </Menu.Content>
                            </Menu.Positioner>
                          </Portal>
                        </Menu.Root>
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                </Menu.Root>

                <Menu.Item value="schema-visualizer" data-indent>
                  <Menu.ItemText>Schema Visualizer</Menu.ItemText>
                </Menu.Item>
              </Menu.ItemGroup>

              <Menu.Separator />

              {/* Group 3: Maintenance */}
              <Menu.ItemGroup>
                <Menu.ItemGroupLabel>Maintenance</Menu.ItemGroupLabel>
                <Menu.Item value="purge-cache">
                  <Trash2Icon />
                  <Menu.ItemText>Purge Cached</Menu.ItemText>
                  <Menu.ItemShortcut>⌥⌘P</Menu.ItemShortcut>
                </Menu.Item>
                <Menu.Item value="reindex">
                  <RefreshCwIcon />
                  <Menu.ItemText>Reindex Tables</Menu.ItemText>
                </Menu.Item>
                <Menu.Item value="drop-temp" disabled>
                  <Trash2Icon />
                  <Menu.ItemText>Drop Temp Database</Menu.ItemText>
                  <Menu.ItemShortcut>⌥⌘D</Menu.ItemShortcut>
                </Menu.Item>
              </Menu.ItemGroup>

              <Menu.Separator />

              {/* Group 4: Environment & Scaling */}
              <Menu.ItemGroup>
                <Menu.ItemGroupLabel>Environment & Scaling</Menu.ItemGroupLabel>

                {/* Level 2 Submenu: Region selection */}
                <Menu.Root
                  positioning={{ offset: { crossAxis: -5 } }}
                  closeOnSelect={false}
                >
                  <Menu.TriggerItem>
                    <MapPinIcon />
                    <Menu.ItemText>Cluster Region</Menu.ItemText>
                    <ChevronRightIcon />
                  </Menu.TriggerItem>
                  <Portal>
                    <Menu.Positioner>
                      <Menu.Content>
                        <Menu.RadioItemGroup
                          value={region}
                          onValueChange={(e) => setRegion(e.value)}
                        >
                          <Menu.RadioItem value="us-east">
                            <Menu.ItemText>US East (N. Virginia)</Menu.ItemText>
                            <Menu.ItemIndicator>
                              <CheckIcon />
                            </Menu.ItemIndicator>
                          </Menu.RadioItem>
                          <Menu.RadioItem value="eu-west">
                            <Menu.ItemText>EU West (Ireland)</Menu.ItemText>
                            <Menu.ItemIndicator>
                              <CheckIcon />
                            </Menu.ItemIndicator>
                          </Menu.RadioItem>
                          <Menu.RadioItem value="ap-east">
                            <Menu.ItemText>AP East (Hong Kong)</Menu.ItemText>
                            <Menu.ItemIndicator>
                              <CheckIcon />
                            </Menu.ItemIndicator>
                          </Menu.RadioItem>
                        </Menu.RadioItemGroup>
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                </Menu.Root>

                <Menu.CheckboxItem
                  checked={securityConfig.replicas}
                  onCheckedChange={(checked) =>
                    setSecurityConfig({
                      ...securityConfig,
                      replicas: !!checked,
                    })
                  }
                  value="read-replicas"
                  data-indent
                >
                  <Menu.ItemText>Read-Only Replicas</Menu.ItemText>
                  <Menu.ItemIndicator>
                    <CheckIcon />
                  </Menu.ItemIndicator>
                </Menu.CheckboxItem>
              </Menu.ItemGroup>

              <Menu.Separator />

              {/* Group 5: Support & Console Options */}
              <Menu.ItemGroup>
                <Menu.Item value="upgrade-tier">
                  <SparklesIcon />
                  <Menu.ItemText>Upgrade Engine Tier</Menu.ItemText>
                </Menu.Item>
                <Menu.Item value="integration-docs">
                  <BookOpenIcon />
                  <Menu.ItemText>Read Integration Docs</Menu.ItemText>
                </Menu.Item>
                <Menu.Item value="help-center">
                  <HelpCircleIcon />
                  <Menu.ItemText>Help Center</Menu.ItemText>
                </Menu.Item>
                <Menu.Item value="preferences" data-indent>
                  <Menu.ItemText>Preferences</Menu.ItemText>
                  <Menu.ItemShortcut>⌘,</Menu.ItemShortcut>
                </Menu.Item>
              </Menu.ItemGroup>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </div>
  )
}
