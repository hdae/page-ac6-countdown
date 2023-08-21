/* @refresh reload */
import "ress";

import "./index.css";
import { render } from 'solid-js/web'
import { App } from './App'

const root = document.getElementById('root')
if (root === null) throw new Error("Failed to initialize application.");
render(() => <App />, root)
