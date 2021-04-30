let app = null;

/**
 *  Application class
 */
class App {

    /**
     * App constructor
     */
    constructor() {
        app = this;

        this.init();

        return this;
    }

    /**
     *
     * @returns {App}
     */
    init() {
        let that = this;

        //AOS.init({once: true});

        that.currentResult = null;
        this.navigation = new Navigation();

        //this.initThemes();

        return this;
    }

    initThemes()
    {
        var theme = 'dark';

        if( getCookie('theme_color') === undefined )
        {
            setCookie('theme_color', 'dark', 360);
        }
        else
        {
            theme = getCookie('theme_color');
        }

        $('body').removeClass("dark-theme light-theme");
        $('body').addClass( theme + "-theme");

        $(document).on('click', '.switch-themes a', function (e) {
            e.preventDefault();

            $('.switch-themes a').removeClass('active');

            var that = $(this);

            that.addClass('active');

            $('body').removeClass("dark-theme light-theme");

            if( that.data('type') == 'dark' )
            {
                $('body').addClass('dark-theme');
            }

            setCookie('theme_color', that.data('type'), 360);

        });
    }
}

$(function () {
    new App();
});

function setCookie(c_name, value, exdays) {
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);

    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");

        if (x == c_name) {
            return unescape(y);
        }
    }
}