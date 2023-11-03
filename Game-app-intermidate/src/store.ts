import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

export interface GameQuery {
  genreID?: number;
  platformID?: number;
  sortOrder?: string;
  searchText?: string;
  pageSize?: number;
}

type QueryName =
  | 'genreID'
  | 'platformID'
  | 'sortOrder'
  | 'searchText'
  | 'pageSize';

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreID: (genreID: number) => void;
  setPlatformID: (platformID: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
  setPageSize: (pageSize: number) => void;
  //   updateQuery: (queryName: QueryName, queryValue: number | string) => void; // this will cause a lot of rerenders coz in each componenet its been used, it will rerender on call.
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: { pageSize: 10 } as GameQuery,
  setGenreID: (genreID: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreID } })),
  setPlatformID: (platformID) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformID } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setPageSize: (pageSize) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, pageSize } })),
  //   updateQuery: (queryName, queryValue) =>
  //     set((store) => ({
  //       gameQuery: { ...store.gameQuery, [queryName]: queryValue },
  //     })),
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('GameQueryStore', useGameQueryStore);
}

export default useGameQueryStore;
