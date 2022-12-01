import { useEffect, useState } from "react"
import {
    SIZE_BREAKPOINT_LARGE,
    SIZE_BREAKPOINT_NORMAL,
    SIZE_BREAKPOINT_SMALL
} from "../lib/helpers"
import Website from "../typings"

const getDeviceSize = (): Website.Base.DeviceSize => {
    if (typeof window !== "undefined") {
        console.log(`client`)
        console.log(window.matchMedia(`(min-width: ${SIZE_BREAKPOINT_SMALL})`))
        if (
            window.matchMedia(`(min-width: ${SIZE_BREAKPOINT_LARGE})`).matches
        ) {
            return "X-Large"
        }
        if (
            window.matchMedia(`(min-width: ${SIZE_BREAKPOINT_NORMAL})`).matches
        ) {
            return "Large"
        }
        if (
            window.matchMedia(`(min-width: ${SIZE_BREAKPOINT_SMALL})`).matches
        ) {
            return "Normal"
        }
        return "Small"
    }
    
    console.log(`server`)
    return "Small"
}

const useDeviceSize = (): Website.Base.DeviceSize => {
    const [deviceSize, setDeviceSize] = useState(getDeviceSize())

    useEffect(() => {
        const handler = () => {
            const deviceSize = getDeviceSize()
            setDeviceSize(deviceSize)
            console.log(`resize ${deviceSize}`)
        }
        window.addEventListener("resize", handler)
        return () => window.removeEventListener("resize", handler)
    }, [])

    return deviceSize
}

export default useDeviceSize
