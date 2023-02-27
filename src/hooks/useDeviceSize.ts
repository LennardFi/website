import { useEffect, useState } from "react"
import {
    SIZE_BREAKPOINT_LARGE,
    SIZE_BREAKPOINT_NORMAL,
    SIZE_BREAKPOINT_SMALL,
} from "../lib/helpers"
import Website from "../typings"

const getDeviceSize = (): Website.Base.DeviceSize => {
    if (typeof window !== "undefined") {
        if (
            window.matchMedia(`(min-width: ${SIZE_BREAKPOINT_LARGE})`).matches
        ) {
            return "x-large"
        }
        if (
            window.matchMedia(`(min-width: ${SIZE_BREAKPOINT_NORMAL})`).matches
        ) {
            return "large"
        }
        if (
            window.matchMedia(`(min-width: ${SIZE_BREAKPOINT_SMALL})`).matches
        ) {
            return "normal"
        }
        return "small"
    }

    return "small"
}

const useDeviceSize = (): Website.Base.DeviceSize => {
    const [deviceSize, setDeviceSize] =
        useState<Website.Base.DeviceSize>("small")

    useEffect(() => {
        const handler = () => {
            const deviceSize = getDeviceSize()
            setDeviceSize(deviceSize)
        }
        handler()
        window.addEventListener("resize", handler)
        return () => window.removeEventListener("resize", handler)
    }, [])

    return deviceSize
}

export default useDeviceSize
