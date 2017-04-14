module.exports = {
    ajax_loading: false,
    tableRowClassName: function(row, index) {
    	if (index % 2 === 1) {
          return 'info-row';
        }
        return '';
    },
    navList: [],
};