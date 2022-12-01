export const DIMENSION_BASE = 8
export const SIZE_BREAKPOINT_SMALL = "680px"
export const SIZE_BREAKPOINT_NORMAL = "980px"
export const SIZE_BREAKPOINT_LARGE = "1280px"

export function getDimensionValue(x: number): string
export function getDimensionValue(x: number, y: number): string
export function getDimensionValue(
    a: number,
    b: number,
    c: number,
    d: number
): string
export function getDimensionValue(...values: number[]): string {
    return values.map((x) => `${x * DIMENSION_BASE}px`).join(" ")
}
