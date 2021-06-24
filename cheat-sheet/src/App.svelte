<script lang="ts">
    interface Role {
        name: string;
        team: string;
        nightAbility: string;
    }

    const roles: Role[] = [
        {
            name: 'Werwolf',
            team: 'Werwölfe',
            nightAbility: 'Kann zusammen mit den anderen Werwölfen ein Opfer zum Töten aussuchen.',
        },
        {
            name: 'Dorfbewohner',
            team: 'Dorf',
            nightAbility: '-',
        },
        {
            name: 'Seher',
            team: 'Dorf',
            nightAbility: 'Kann die Karte eines Mitspielers anschauen.',
        },
        {
            name: 'Hexe',
            team: 'Dorf',
            nightAbility: 'Hat einen Trank zum Heilen und einen zum Töten. ',
        },
    ]
</script>

<main>
    {#each roles as role}
    <div>
        <h3>{role.name}</h3>
        <p>{role.team}</p>
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
        grid-template-rows: repeat(2, 1fr);
        gap: 2px;
    }

    main div {
        border: solid 1px black;
        padding: 0 5px;
    }
</style>