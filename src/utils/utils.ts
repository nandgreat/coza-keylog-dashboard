

export const storeItem = (key: string, value: string) => {
    try {
        localStorage.setItem(key, value)
    } catch (e: any) {
        console.log(e)
    }
}

export const getStorageIem = async (key: string): Promise<string | null | undefined> => {
    try {
        return localStorage.getItem(key);
    } catch (e: any) {
        console.log(e)
    }

    return null;
}