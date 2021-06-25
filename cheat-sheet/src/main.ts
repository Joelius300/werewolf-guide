import App from './App.svelte';
import roles from '../../assets/characters.json';

const app = new App({
    target: document.body,
    props: {
        roles
    }
});

export default app;