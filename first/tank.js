window.onload = function() 
{
    width = document.getElementById('border').offsetWidth;
    height = document.getElementById('border').offsetHeight;
}

y = 50;
x = 50;

document.onkeydown = keydown;
document.onkeyup = keyup;

function keydown(e)
{
    var ev = e || window.event;

    if ( ev.keyCode == 72 )
    {
        deal_left("set");
    }
    else if ( ev.keyCode == 75 )
    {
        deal_up("set");
    }
    else if ( ev.keyCode == 76 )
    {
        deal_right("set");
    }
    else if ( ev.keyCode == 74 )
    {
        deal_down("set");
    }
}

function keyup(e)
{
    var ev = e || window.event;

    if ( ev.keyCode == 72 )
    {
        deal_left("clr");
    }
    else if ( ev.keyCode == 75 )
    {
        deal_up("clr");
    }
    else if ( ev.keyCode == 76 )
    {
        deal_right("clr");
    }
    else if ( ev.keyCode == 74 )
    {
        deal_down("clr");
    }
}

var f_left;
var f_right;
var f_up;
var f_down;
var left_flag = 0;
var right_flag = 0;
var up_flag = 0;
var down_flag = 0;

function deal_left(type)
{
    if ( type == "set" )
    {
        if ( left_flag != 1 )
        {
            f_left = setInterval(left_move, 10);
        }
        left_flag = 1;
    }
    else
    {
        clearInterval(f_left);
        left_flag = 0;
    }
}

function deal_right(type)
{
    if ( type == "set" )
    {
        if ( right_flag != 1 )
        {
            f_right = setInterval(right_move, 10);
        }
        right_flag = 1;
    }
    else
    {
        clearInterval(f_right);
        right_flag = 0;
    }
}

function deal_up(type)
{
    if ( type == "set" )
    {
        if ( up_flag != 1 )
        {
            f_up = setInterval(up_move, 10);
        }
        up_flag = 1;
    }
    else
    {
        clearInterval(f_up);
        up_flag = 0;
    }
}

function deal_down(type)
{
    if ( type == "set" )
    {
        if ( down_flag != 1 )
        {
            f_down = setInterval(down_move, 10);
        }
        down_flag = 1;
    }
    else
    {
        clearInterval(f_down);
        down_flag = 0;
    }
}

function left_move()
{
    if( (x-48) > 50 )
    {
        x -= 2;
    }

    document.getElementById("tank").style.top = y - 50 + "px";
    document.getElementById("tank").style.left = x -50 + "px";

    document.getElementById("tank").style.WebkitTransform = "rotate(90deg)";
    document.getElementById("tank").style.MozTransform = "rotate(90deg)";
}

function right_move()
{
    if( (x-52) < width-100 )
    {
        x += 2;
    }

    document.getElementById("tank").style.top = y - 50 + "px";
    document.getElementById("tank").style.left = x - 50 + "px";

    document.getElementById("tank").style.WebkitTransform = "rotate(-90deg)";
    document.getElementById("tank").style.MozTransform = "rotate(-90deg)";
}

function up_move()
{
    if ( (y-52) > 50 )
    {
        y -= 2;
    }
    document.getElementById("tank").style.top = y - 50 + "px";
    document.getElementById("tank").style.left = x - 50 + "px";

    document.getElementById("tank").style.WebkitTransform = "rotate(180deg)";
    document.getElementById("tank").style.MozTransform = "rotate(180deg)";
}

function down_move()
{
    if ( (y-48) < height-100 )
    {
        y += 2;
    }
    document.getElementById("tank").style.top = y - 50 + "px";
    document.getElementById("tank").style.left = x - 50 + "px";

    document.getElementById("tank").style.WebkitTransform = "rotate(0deg)";
    document.getElementById("tank").MozTransform = "rotate(0deg)";
}
