

export const useLocalStorage = () => {
  
    const getStorageItem = (key) => {
        const err = typeof window === 'undefined'
        if(err) return;

        const data = JSON.parse(key)
        return window.localStorage.getItem(data)
    }

    const setStorageItem = (key, value) => {
        const err = typeof window === 'undefined'
        if(err) return;

        return window.localStorage.setItem(key, JSON.stringify(value))

    }


    const removeStorageItem = (key) => {
        const err = typeof window === 'undefined'
        if(err) return;

        return window.localStorage.removeItem(key)
    }

    const clearStorage = (key) => {
        const err = typeof window === 'undefined'
        if(err) return;

        return window.localStorage.clear()
    }


    return {
        getStorageItem,
        setStorageItem,
        removeStorageItem,
        clearStorage
    }

}


