---
category: Navigation
---

Site/product top navigation built on Base UI NavigationMenu, mixing plain links with triggers that open rich popover panels.

## Components

- `NavigationMenu` — root; renders the shared popup positioner. `defaultValue`/`value` opens an item's panel; `align` positions the popup.
- `NavigationMenuList` — horizontal list of items.
- `NavigationMenuItem` — one nav entry; give it a `value` to target with `defaultValue`.
- `NavigationMenuTrigger` — button with animated chevron that opens the item's content panel.
- `NavigationMenuContent` — the panel body shown in the shared popup.
- `NavigationMenuLink` — styled anchor; `active` marks the current page. Combine with `navigationMenuTriggerStyle()` for top-level plain links.
- `navigationMenuTriggerStyle` — cva class factory for link/trigger sizing.
- `NavigationMenuIndicator` — small arrow pointing at the active trigger.
- `NavigationMenuPositioner` — popup positioner (already rendered by the root).

## Usage

```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-72 gap-1 p-1">
          <NavigationMenuLink href="/analytics">
            <div>
              <div className="font-medium">Analytics</div>
              <div className="text-sm text-muted-foreground">
                Real-time dashboards and reports
              </div>
            </div>
          </NavigationMenuLink>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/pricing" className={navigationMenuTriggerStyle()}>
        Pricing
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```
