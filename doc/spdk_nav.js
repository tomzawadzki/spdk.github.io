/* Ensure the mainpage section list is always visible in the sidebar.
   Doxygen's navtree lazy-loads children; on pages outside the mainpage
   subtree (Topics, Data Structures, Files) the section nodes are never
   loaded.  This triggers expansion after the navtree initializes so
   the CSS flattening rules in spdk.css can take effect.

   $.fx.off suppresses jQuery animations (slideDown, scrollTo) so the
   sections appear instantly rather than visibly sliding in. */
$(function() {
    $.fx.off = true;
    setTimeout(function tryExpand() {
        var mp = $('#nav-tree-contents > ul > li > .children_ul > li:first-child');
        if (!mp.length) { setTimeout(tryExpand, 50); return; }
        if (mp.find('> .children_ul').children().length > 0) {
            $.fx.off = false;
            return;
        }
        mp.find('> .item > a').first().trigger('click');
        var check = setInterval(function() {
            if (mp.find('> .children_ul').children().length > 0) {
                clearInterval(check);
                $.fx.off = false;
            }
        }, 50);
        setTimeout(function() { $.fx.off = false; clearInterval(check); }, 2000);
    }, 50);
});
