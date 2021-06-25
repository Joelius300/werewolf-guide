<script lang="ts">
    export let roles: Role[];

</script>

<main>
    {#each roles as role}
    <div>
        <h3>{role.name} ({role.team})</h3>
        <p>{role.special || '-'}</p>
    </div>
    {/each}
</main>

<style>
    main {
        display: grid;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        grid-template-columns: repeat(4, 1fr);
        gap: 2px;
    }

    main div {
        border: solid 1px black;
        padding: 0 5px;
        height: 10.3cm; /* this can't be good. It doesn't even match up, the browser scales it for me when printing.. I think these should just be relative of some sort. */
    }

    h3 {
        margin: 10px 0;
    }
</style>