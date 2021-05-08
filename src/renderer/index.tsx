import { h, render } from 'preact';
import { Response } from './renderer';
import './style.css';

declare const scriptUrl: string;
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = scriptUrl.split('/').slice(0, -1).concat('style.css').join('/');
document.head.appendChild(link);

const api = acquireNotebookRendererApi();

api.onDidCreateOutput(event => {
	const data = event.value;
	render(<Response response={data} />, event.element);
});
