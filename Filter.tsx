import { NumberInput, Select } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import "./Filter.css";
import { MantineProvider } from "@mantine/core";

export function Filter() {
  return (
    <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS>
      <div className="filter">
        <div className="filter__header">
          <h1>Фильтры</h1>
          <button>Сбросить все</button>
        </div>
        <Select
          label="Отрасль"
          className="filter__select"
          placeholder="Выберите отрасль"
          rightSection={<IconChevronDown size="1rem" />}
          rightSectionWidth={30}
          radius="md"
          size="md"
          styles={{ rightSection: { pointerEvents: "none" } }}
          data={[""]}
        />
        <NumberInput
          className="filter__number"
          placeholder="От"
          label="Оклад"
          radius="md"
          size="md"
          min={0}
        />
        <NumberInput
          className="filter__number"
          placeholder="До"
          radius="md"
          size="md"
          min={0}
        />
        <button className="filter__button">Применить</button>
      </div>
    </MantineProvider>
  );
}
