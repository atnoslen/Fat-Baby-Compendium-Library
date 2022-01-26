Hooks.on('renderJournalSheet', async (app, html, data) => {
    $("div.infobox-image img.clickable, div.thumb img.clickable", html)
    .css('cursor', 'pointer')
    .on("click", function () {
        const src = $(this).attr("src");
        new ImagePopout(src, { shareable: true }).render(true);
    });
});