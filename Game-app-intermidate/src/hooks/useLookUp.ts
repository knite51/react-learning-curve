import { DefinedUseQueryResult } from "@tanstack/react-query"
import { GenericResponse } from "../interface/api-interface"

const useLookup = <T>(hookData: DefinedUseQueryResult<GenericResponse<T>>, lookUpID: number = 0) =>
    hookData.data.results.find((p: any) => p.id === lookUpID)

export default useLookup