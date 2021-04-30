
class Navigation {

    /**
     * Navigation constructor
     */
    constructor() {
        this.init();
    }

    /**
     *
     * @returns {Navigation}
     */
    init() {

        $(document).on('click', '#sidebarCollapse', function () {
            $('#sidebar').toggleClass('active');
        });

        $(document).on('click', '#page-wrapper-overlay', function () {

            if( $('#sidebar').hasClass('active') )
            {
                $('#sidebarCollapse').click();
            }
        });

        return this;
    }
}