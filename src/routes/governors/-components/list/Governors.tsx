import { useListSearch } from "@/utils/hooks/use-list-search";
import { Link, useSearch } from "@tanstack/react-router";
import { CardsListSuspenseFallback } from "@/components/loaders/GenericDataCardsListSuspenseFallback";
import { SearchBox } from "@/components/search/SearchBox";
import { Plus } from "lucide-react";
import { Suspense } from "react";
import { GovernorList } from "./GovernorsList";

interface GovernorsProps {}

export function Governors({}: GovernorsProps) {
  const { govsq } = useSearch({
    from: "/governors/",
  });
  const { debouncedValue, isDebouncing, keyword, setKeyword } = useListSearch({
    route: "/governors",
    sq: govsq ?? "",
  });
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full z-20 sticky top-[9%] p-2 px-3 flex flex-col md:flex-row justify-evenly gap-1 pr-5">
        <div className="w-full flex gap-5 p-1">
          <h1 className="font-bold  ">Governors</h1>
          <Link
            to="/governors"
            className="flex justify-center items-center gap-2 border rounded-lg px-2 hover:text-accent-text">
            <Plus /> add
          </Link>
        </div>
        <SearchBox
          inputProps={{
            placeholder: "Search by name",
          }}
          debouncedValue={debouncedValue}
          isDebouncing={isDebouncing}
          setKeyword={setKeyword}
          keyword={keyword}
        />
      </div>
      <div className="w-full h-full flex justify-center items-center m-3 p-5">
        <Suspense fallback={<CardsListSuspenseFallback />}>
          <GovernorList q={debouncedValue} />
        </Suspense>
      </div>
    </div>
  );
}
