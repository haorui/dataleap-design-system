import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "shadcn-stock-design"

const frameworks = ["Next.js", "SvelteKit", "Nuxt", "Remix", "Astro"]

export const Basic = () => (
  <div style={{ width: 260 }}>
    <Combobox items={frameworks}>
      <ComboboxInput placeholder="Search framework…" />
      <ComboboxContent>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  </div>
)

export const WithValue = () => (
  <div style={{ width: 260 }}>
    <Combobox items={frameworks} defaultValue="Next.js">
      <ComboboxInput showClear />
      <ComboboxContent>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  </div>
)

const languages = ["English", "French", "German", "Japanese", "Spanish"]

const MultipleChips = () => {
  const anchor = useComboboxAnchor()
  return (
    <Combobox items={languages} multiple defaultValue={["English", "Japanese"]}>
      <ComboboxChips ref={anchor} style={{ width: 300 }}>
        <ComboboxValue>
          {(value: string[]) => (
            <>
              {value.map((language) => (
                <ComboboxChip key={language}>{language}</ComboboxChip>
              ))}
              <ComboboxChipsInput placeholder="Add language…" />
            </>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No language found.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export const Multiple = () => <MultipleChips />

export const Disabled = () => (
  <div style={{ width: 260 }}>
    <Combobox items={frameworks} defaultValue="Remix" disabled>
      <ComboboxInput disabled />
      <ComboboxContent>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  </div>
)
