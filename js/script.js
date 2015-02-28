$(document).ready(function () {

    function autoSlideshow() {
        var $active = $("#slideshow .active");
        var $next = $active.next();    

        $active.fadeOut(800, function() {
            $active.removeClass('active').appendTo('#slideshow');
            $next.addClass('active').fadeIn(800);
        });
    }

    function setSlideshow() {
        $("#slideshow > img").hide().filter(":first-child").show(); // prepare slideshow
        setInterval(autoSlideshow, 6000);
    }

    var url = "http://ogsaryugaku.com/"
    if (location.href === url || location.href === url + "index.html") { 

        document.onclick = jumpToHome;
        function jumpToHome() {
            location.href = url + "home.html";
        }

        $("#messageBox").hide();
        $("#messageBox").fadeIn(800);
        setTimeout(function() {
            $("#messageBox").fadeOut(800);
            $("#copyright").fadeOut(800);
            setTimeout(function() {
                location.href = url + "home.html";
            }, 1100);
        }, 2000);
    }

    if (location.href === url + "home.html") { 
        setSlideshow();
    }
});
