import { createSignal } from "solid-js"

const precision = [1000, 60, 60]
const padding = [3, 2, 2]
const separator = ["", ".", ":", ":"]

export const format = (time: number) => precision
    .reduce((prev, y) => {
        const x = prev.pop()!
        const z = Math.trunc(x / y)
        prev.push(x % y)
        prev.push(z)
        return prev
    }, [time])
    .map((v, i) => `${v}`.padStart(padding[i], "0").concat(separator[i]))
    .reverse()

// const epoch_release = new Date("2023-08-20T18:05:00.000Z").getTime()
const epoch_release = new Date("2023-08-24T22:00:00.000Z").getTime()
export const [time, setTime] = createSignal(epoch_release - new Date().getTime())

export const isRed = () => time() < (1000 * 60 * 60 * 6)
export const percent = () => {
    const value = Math.trunc(time() / (1000 * 60 * 60 * 24) * 10000) / 100
    return (value > 100) ? 100 : value
}

const update = () => {
    const diff = epoch_release - new Date().getTime()
    if (diff < 0) {
        setTime(0)
    } else {
        setTime(diff)
        requestAnimationFrame(update)
    }
}

update()
