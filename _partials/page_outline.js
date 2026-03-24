/* Collapse/expand behaviour for Doxygen's right-side page outline.
   Loaded via HTML_EXTRA_FILES; depends on jQuery (shipped by Doxygen). */
$(function(){
  setTimeout(function(){
    var outline=$('ul.page-outline');
    if(!outline.length) return;

    function getLevel(li){
      var s=li.find('.arrow').first().attr('style')||'';
      var m=s.match(/padding-left:\s*(\d+)/);
      return m?parseInt(m[1],10):0;
    }

    function childrenOf(li){
      var lvl=getLevel(li), out=[];
      li.nextAll('li').each(function(){
        if(getLevel($(this))<=lvl) return false;
        out.push(this);
      });
      return out;
    }

    function collapse(li, animate){
      var ah=li.find('.arrowhead').first();
      if(!ah.length) return;
      var ch=childrenOf(li);
      if(!ch.length) return;
      ah.removeClass('opened').addClass('closed');
      $(ch).each(function(){
        var $c=$(this);
        $c.find('.arrowhead.opened').removeClass('opened').addClass('closed');
        $c.data('auto-expanded',false);
      });
      li.data('auto-expanded',false);
      if(animate) $(ch).slideUp(150); else $(ch).hide();
    }

    function expand(li, animate, auto){
      var ah=li.find('.arrowhead').first();
      if(!ah.length) return;
      ah.removeClass('closed').addClass('opened');
      if(auto) li.data('auto-expanded',true);
      var lvl=getLevel(li);
      li.nextAll('li').each(function(){
        var cl=getLevel($(this));
        if(cl<=lvl) return false;
        if(cl===lvl+16){
          if(animate) $(this).slideDown(150); else $(this).show();
        }
      });
    }

    function isExpanded(li){
      return li.find('.arrowhead.opened').length>0;
    }

    function expandAncestors(li){
      var lvl=getLevel(li);
      while(lvl>0){
        var parent=li.prevAll('li').filter(function(){
          return getLevel($(this))<lvl;
        }).first();
        if(!parent.length) break;
        if(!isExpanded(parent)) expand(parent,false,true);
        lvl=getLevel(parent);
        li=parent;
      }
    }

    outline.find('li').each(function(){
      if(getLevel($(this))>0) $(this).hide();
    });
    outline.find('.arrowhead').removeClass('opened').addClass('closed');

    outline.find('.arrowhead').each(function(){
      $(this).closest('.arrow').on('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        var li=$(this).closest('li');
        li.data('auto-expanded',false);
        if(isExpanded(li)) collapse(li,true); else expand(li,true,false);
      });
    });

    $('#doc-content').on('scroll',function(){
      setTimeout(function(){
        var visSet={};
        outline.find('li.vis').each(function(){
          var li=$(this);
          visSet[li.attr('id')]=true;
          if(li.is(':hidden')) expandAncestors(li);
          if(li.find('.arrowhead.closed').length && childrenOf(li).length){
            expand(li,false,true);
          }
        });
        outline.find('.arrowhead.opened').each(function(){
          var li=$(this).closest('li');
          if(li.data('auto-expanded') && !visSet[li.attr('id')]){
            var hasVisChild=false;
            $(childrenOf(li)).each(function(){
              if(visSet[$(this).attr('id')]){ hasVisChild=true; return false; }
            });
            if(!hasVisChild) collapse(li,false);
          }
        });
      },0);
    });
  },0);
});
