import usePlatforms from "./usePlatforms";

const usePlatform = (id: number = 0) => {
    const { data: platforms } = usePlatforms();
    return platforms.results.find((p: any) => p.id === id)
}

export default usePlatform