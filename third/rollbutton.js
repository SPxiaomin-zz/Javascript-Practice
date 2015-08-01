window.onload = function() 
{
    btn = document.getElementById("btn");
    var timer = null;
    var isTop = true;
    var clientHeight = window.innerHeight 
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    window.onscroll = function() 
    {
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;

        if ( osTop >= clientHeight )
        {
            btn.style.display = 'block';
        }
        else
        {
            btn.style.display = 'none';
        }

        if ( !isTop )
        {
            clearInterval(timer);
        }
        isTop = false;
    }

    btn.onclick = function () 
    {
        timer = setInterval(function () {
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = Math.ceil(osTop / 10);

            document.documentElement.scrollTop = document.body.scrollTop = osTop - speed;

            isTop = true;

            if ( osTop <= 0 )
            {
                clearInterval(timer);
            }
        }, 30);
        return false;
    }
};
