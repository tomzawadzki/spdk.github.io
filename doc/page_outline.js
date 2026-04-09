/* SPDK Doxygen enhancements — loaded via HTML_EXTRA_FILES after navtree.js.
   Depends on jQuery (shipped by Doxygen).

   1. Relocate search box to the top of the content area (left of right panel)
   2. Fix right-panel TOC scroll (navtree.js targets #doc-content which
      no longer scrolls; we use window scroll + scrollIntoView instead)
   3. Collapse/expand behaviour for the right-side page outline
   4. Toggle buttons for left and right panels (outside panel boundaries)
   5. Fix right-panel resize drag (Doxygen's formula assumes container
      starts at x=0 in the viewport; our grid layout places it after
      the left sidebar) */
$(function(){

/* ----------------------------------------------------------------
   1. Move search box from #top into the content area header.
      Also move popup windows into the searchbox wrapper so they
      position relative to the search field via CSS.
   ---------------------------------------------------------------- */
(function(){
  var sb = $('#doxygen-searchbox');
  var docContent = $('#doc-content');
  if (sb.length && docContent.length) {
    sb.detach().prependTo(docContent).addClass('in-content');
    $('#MSearchSelectWindow, #MSearchResultsWindow').appendTo(sb);
  }
})();

/* ----------------------------------------------------------------
   2. Fix right-panel TOC: scroll via window, not #doc-content
   ---------------------------------------------------------------- */
setTimeout(function(){
  var outline = $('ul.page-outline');
  if (!outline.length) return;

  function getLevel(li) {
    var s = li.find('.arrow').first().attr('style') || '';
    var m = s.match(/padding-left:\s*(\d+)/);
    return m ? parseInt(m[1], 10) : 0;
  }

  function childrenOf(li) {
    var lvl = getLevel(li), out = [];
    li.nextAll('li').each(function(){
      if (getLevel($(this)) <= lvl) return false;
      out.push(this);
    });
    return out;
  }

  function collapse(li, animate) {
    var ah = li.find('.arrowhead').first();
    if (!ah.length) return;
    var ch = childrenOf(li);
    if (!ch.length) return;
    ah.removeClass('opened').addClass('closed');
    $(ch).each(function(){
      $(this).find('.arrowhead.opened').removeClass('opened').addClass('closed');
      $(this).data('auto-expanded', false);
    });
    li.data('auto-expanded', false);
    if (animate) $(ch).slideUp(150); else $(ch).hide();
  }

  function expand(li, animate, auto) {
    var ah = li.find('.arrowhead').first();
    if (!ah.length) return;
    ah.removeClass('closed').addClass('opened');
    if (auto) li.data('auto-expanded', true);
    var lvl = getLevel(li);
    li.nextAll('li').each(function(){
      var cl = getLevel($(this));
      if (cl <= lvl) return false;
      if (cl === lvl + 16) {
        if (animate) $(this).slideDown(150); else $(this).show();
      }
    });
  }

  function isExpanded(li) {
    return li.find('.arrowhead.opened').length > 0;
  }

  function expandAncestors(li) {
    var lvl = getLevel(li);
    while (lvl > 0) {
      var parent = li.prevAll('li').filter(function(){
        return getLevel($(this)) < lvl;
      }).first();
      if (!parent.length) break;
      if (!isExpanded(parent)) expand(parent, false, true);
      lvl = getLevel(parent);
      li = parent;
    }
  }

  outline.find('li').each(function(){
    if (getLevel($(this)) > 0) $(this).hide();
  });
  outline.find('.arrowhead').removeClass('opened').addClass('closed');

  outline.find('.arrowhead').each(function(){
    $(this).closest('.arrow').on('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      var li = $(this).closest('li');
      li.data('auto-expanded', false);
      if (isExpanded(li)) collapse(li, true); else expand(li, true, false);
    });
  });

  outline.find('a[href^="#"]').off('click').on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('href').substring(1);
    var target = document.getElementById(id);
    if (!target) return;
    var el = target.closest('.doxsection') || target;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', '#' + id);
  });

  function updateVisibility() {
    var visSet = {};
    outline.find('li[id]').each(function(){
      var li = $(this);
      var tocId = li.attr('id');
      var anchorId = tocId.replace(/^nav-/, '');
      var heading = document.getElementById(anchorId);
      if (!heading) { li.removeClass('vis'); return; }
      var el = heading.closest('.doxsection') || heading;
      var rect = el.getBoundingClientRect();
      var inView = rect.top < window.innerHeight - 10 && rect.bottom > 10;
      if (inView) {
        li.addClass('vis');
        visSet[tocId] = true;
        if (li.is(':hidden')) expandAncestors(li);
        if (li.find('.arrowhead.closed').length && childrenOf(li).length) {
          expand(li, false, true);
        }
      } else {
        li.removeClass('vis');
      }
    });
    outline.find('.arrowhead.opened').each(function(){
      var li = $(this).closest('li');
      if (li.data('auto-expanded') && !visSet[li.attr('id')]) {
        var hasVisChild = false;
        $(childrenOf(li)).each(function(){
          if (visSet[$(this).attr('id')]) { hasVisChild = true; return false; }
        });
        if (!hasVisChild) collapse(li, false);
      }
    });
  }

  var scrollTimer;
  $(window).on('scroll', function(){
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(updateVisibility, 30);
  });
  updateVisibility();

}, 0);

/* ----------------------------------------------------------------
   3. Panel toggle buttons — placed OUTSIDE panel boundaries.
      Left button:  on #side-nav right edge, pushed outside via translateX
      Right button: on #page-nav left edge, pushed outside via translateX
   ---------------------------------------------------------------- */
setTimeout(function(){
  var LKEY = 'spdk_sidebar_hidden';
  var RKEY = 'spdk_pagenav_hidden';

  function readFlag(key) {
    try { return localStorage.getItem(key) === '1'; } catch(e) { return false; }
  }
  function writeFlag(key, val) {
    try { localStorage.setItem(key, val ? '1' : '0'); } catch(e) {}
  }

  var chevronL = '&#x276E;';
  var chevronR = '&#x276F;';

  var topH = ($('#top').outerHeight() || 0) + 8;

  /* --- left panel toggle (on #side-nav right edge, outside bounds) --- */
  var sideNav = $('#side-nav');
  if (sideNav.length) {
    var leftBtn = $('<button>')
      .attr({ type:'button', 'aria-label':'Hide sidebar', title:'Hide sidebar' })
      .addClass('panel-toggle-btn panel-toggle-left')
      .html(chevronL)
      .appendTo(sideNav);

    var leftRestore = $('<button>')
      .attr({ type:'button', 'aria-label':'Show sidebar', title:'Show sidebar' })
      .addClass('panel-toggle-btn panel-restore-left')
      .html(chevronR)
      .css('top', topH + 'px')
      .appendTo($('body'));

    function hideLeft() {
      sideNav.addClass('panel-hidden');
      leftRestore.addClass('visible');
      writeFlag(LKEY, true);
      $(window).trigger('resize');
    }
    function showLeft() {
      sideNav.removeClass('panel-hidden');
      leftRestore.removeClass('visible');
      writeFlag(LKEY, false);
      $(window).trigger('resize');
    }
    leftBtn.on('click', function(e){ e.stopPropagation(); hideLeft(); });
    leftRestore.on('click', showLeft);
    if (readFlag(LKEY)) hideLeft();
  }

  /* --- right panel toggle (on #page-nav left edge, outside bounds) --- */
  var pageNav = $('#page-nav');
  var container = $('#container');
  var resizeHandle = $('#page-nav-resize-handle');
  if (pageNav.length) {
    var rightBtn = $('<button>')
      .attr({ type:'button', 'aria-label':'Hide outline', title:'Hide outline' })
      .addClass('panel-toggle-btn panel-toggle-right')
      .html(chevronR)
      .appendTo(pageNav);

    var rightRestore = $('<button>')
      .attr({ type:'button', 'aria-label':'Show outline', title:'Show outline' })
      .addClass('panel-toggle-btn panel-restore-right')
      .html(chevronL)
      .css('top', topH + 'px')
      .appendTo($('body'));

    function hideRight() {
      pageNav.data('saved-width', pageNav[0].style.width || '');
      pageNav.data('saved-grid', container[0].style.gridTemplateColumns || '');
      pageNav.addClass('panel-hidden');
      container[0].style.gridTemplateColumns = '1fr';
      if (resizeHandle.length) resizeHandle.hide();
      rightRestore.addClass('visible');
      writeFlag(RKEY, true);
    }
    function showRight() {
      pageNav.removeClass('panel-hidden');
      var w = pageNav.data('saved-width');
      if (w) pageNav[0].style.width = w;
      var g = pageNav.data('saved-grid');
      if (g) container[0].style.gridTemplateColumns = g;
      if (resizeHandle.length) resizeHandle.show();
      rightRestore.removeClass('visible');
      writeFlag(RKEY, false);
      $(window).trigger('resize');
    }
    rightBtn.on('click', function(e){ e.stopPropagation(); hideRight(); });
    rightRestore.on('click', showRight);
    if (readFlag(RKEY)) hideRight();
  }

}, 50);

/* ----------------------------------------------------------------
   5. Fix right-panel resize drag.
      Doxygen's navtree.js computes:
        pagenavWidth = container.offsetWidth - e.clientX + barWidth/2
      which assumes the container's left edge is at viewport x=0.
      In our grid layout the container starts after the left sidebar,
      so use getBoundingClientRect().right instead.
   ---------------------------------------------------------------- */
setTimeout(function(){
  var handle = $('#page-nav-resize-handle');
  var container = $('#container');
  var pagenav = $('#page-nav');
  var sidenav = $('#side-nav');
  if (!handle.length || !pagenav.length) return;

  var barW = 6;
  var minPanel = barW;
  var minContent = 250;

  handle.off('mousedown touchstart');
  handle.on('mousedown touchstart', function(e){
    e.preventDefault();
    $('body').addClass('resizing');
    handle.addClass('dragging');

    $(document).on('mousemove.spdkResize touchmove.spdkResize', function(ev){
      var clientX = ev.clientX || ev.originalEvent.touches[0].clientX;
      var rect = container[0].getBoundingClientRect();
      var snW = sidenav.length ? sidenav.outerWidth() : 0;
      var newW = rect.right - clientX + barW / 2;
      var maxW = rect.width - snW - minContent;
      newW = Math.max(minPanel, Math.min(newW, maxW));

      container[0].style.gridTemplateColumns = 'auto ' + Math.round(newW) + 'px';
      pagenav[0].style.width = Math.round(newW - 1) + 'px';

      document.cookie = 'pagenav=' + Math.round(newW) + ';SameSite=Lax';
    });

    $(document).on('mouseup.spdkResize touchend.spdkResize', function(){
      $(document).off('.spdkResize');
      $('body').removeClass('resizing');
      handle.removeClass('dragging');
    });
  });
}, 100);

});
