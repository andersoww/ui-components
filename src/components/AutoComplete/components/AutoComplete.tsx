import { AutoComplete as AutoCompleteUI } from "@/components/AutoComplete";
import { ReactNode } from "react";

interface IAutoComplete {
  label: string;
  children: ReactNode;
  className?: string;
  placeholder?: string;
}

function AutoCompleteContainer({
  label,
  placeholder = "Escolha uma informação",
  className,
  children,
}: IAutoComplete) {
  return (
    <AutoCompleteUI.Root className={className}>
      <AutoCompleteUI.Content>
        <AutoCompleteUI.Label label={label} />
        <AutoCompleteUI.Input placeholder={placeholder} />
      </AutoCompleteUI.Content>
      <AutoCompleteUI.List.Container>{children}</AutoCompleteUI.List.Container>
    </AutoCompleteUI.Root>
  );
}

export { AutoCompleteContainer };
