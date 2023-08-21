import { Index } from "solid-js";
import { format, isRed, percent, time } from "./time";

export const Bar = () => {
    return <div style={{
        width: "90vw",
        height: "20px",
        padding: "3px 6px",
        "margin-top": "-30px",
        "border-left": "3px solid white",
        "border-right": "3px solid white",
    }}>
        <div style={{
            width: `${percent()}%`,
            height: "100%",
            background: isRed() ? "red" : "white",
        }} />
    </div>
}

export const Countdown = () => (
    <div style={{
        color: isRed() ? "red" : "white",
    }}>
        <Index each={format(time())}>
            {(item) => <span>{item()}</span>}
        </Index>
    </div>
)

export const App = () => (
    <main style={{
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center",
    }}>
        <Countdown />
        <Bar />
    </main>
)
