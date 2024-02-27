import { AutoCompleteContainer } from "@/components/AutoComplete/components/AutoComplete";
import { AutoCompleteContent } from "@/components/AutoComplete/components/AutoCompleteContent";
import { AutoCompleteInput } from "@/components/AutoComplete/components/AutoCompleteInput";
import { AutoCompleteItem } from "@/components/AutoComplete/components/AutoCompleteItem";
import { AutoCompleteLabel } from "@/components/AutoComplete/components/AutoCompleteLabel";
import { AutoCompleteList } from "@/components/AutoComplete/components/AutoCompleteList";

import { AutoCompleteRoot } from "@/components/AutoComplete/components/AutoCompleteRoot";

export const AutoComplete = {
  Root: AutoCompleteRoot,
  Content: AutoCompleteContent,
  Label: AutoCompleteLabel,
  Input: AutoCompleteInput,
  List: {
    Container: AutoCompleteList,
    Item: AutoCompleteItem,
  },
};

export { AutoCompleteContainer, AutoCompleteItem };
